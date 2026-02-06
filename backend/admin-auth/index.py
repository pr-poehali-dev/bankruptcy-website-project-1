import json
import os
import time
import random
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime, timedelta
import jwt
import bcrypt

LOGIN_ATTEMPTS = {}
MAX_ATTEMPTS = 5
LOCKOUT_TIME = 900

TWO_FA_CODES = {}
CODE_EXPIRY = 300

def handler(event: dict, context) -> dict:
    '''Безопасная авторизация администратора с двухфакторной аутентификацией через email'''
    
    method = event.get('httpMethod', 'POST')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    try:
        body = json.loads(event.get('body', '{}'))
        action = body.get('action', 'login')
        
        if action == 'login':
            return handle_login(body, event)
        elif action == 'verify_code':
            return handle_verify_code(body, event)
        elif action == 'verify':
            return handle_verify(body)
        else:
            return {
                'statusCode': 400,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'Invalid action'})
            }
            
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': str(e)})
        }


def send_2fa_code(email: str, code: str) -> tuple[bool, str]:
    try:
        smtp_host = os.environ.get('SMTP_HOST', '')
        smtp_port = int(os.environ.get('SMTP_PORT', '587'))
        smtp_user = os.environ.get('SMTP_USER', '')
        smtp_password = os.environ.get('SMTP_PASSWORD', '')
        
        print(f'SMTP Config: host={smtp_host}, port={smtp_port}, user={smtp_user}, pass={"***" if smtp_password else "EMPTY"}')
        
        if not all([smtp_host, smtp_port, smtp_user, smtp_password]):
            return False, 'SMTP настройки не заданы'
        
        msg = MIMEMultipart('alternative')
        msg['Subject'] = 'Код подтверждения входа в админ-панель'
        msg['From'] = smtp_user
        msg['To'] = email
        
        html = f'''
        <html>
          <body style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
            <div style="max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <h2 style="color: #333; margin-bottom: 20px;">🔐 Вход в админ-панель</h2>
              <p style="color: #666; font-size: 16px; line-height: 1.5;">
                Кто-то пытается войти в админ-панель вашего сайта. Если это вы, используйте код ниже:
              </p>
              <div style="background: #f0f0f0; padding: 20px; border-radius: 8px; text-align: center; margin: 25px 0;">
                <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #333;">{code}</span>
              </div>
              <p style="color: #999; font-size: 14px;">
                Код действителен 5 минут.<br>
                Если это были не вы, проигнорируйте это письмо.
              </p>
            </div>
          </body>
        </html>
        '''
        
        msg.attach(MIMEText(html, 'html'))
        
        if smtp_port == 465:
            with smtplib.SMTP_SSL(smtp_host, smtp_port, timeout=10) as server:
                server.login(smtp_user, smtp_password)
                server.send_message(msg)
        else:
            with smtplib.SMTP(smtp_host, smtp_port, timeout=10) as server:
                server.starttls()
                server.login(smtp_user, smtp_password)
                server.send_message(msg)
        
        print(f'Email sent successfully to {email}')
        return True, 'Код отправлен'
    except smtplib.SMTPAuthenticationError:
        print('SMTP Authentication failed')
        return False, 'SMTP аутентификация не прошла (проверьте SMTP_USER и SMTP_PASSWORD)'
    except Exception as e:
        print(f'Email send error: {e}')
        return False, f'Ошибка отправки email: {str(e)}'


def handle_login(body: dict, event: dict) -> dict:
    password = body.get('password', '')
    client_ip = event.get('requestContext', {}).get('identity', {}).get('sourceIp', 'unknown')
    
    if not password:
        return {
            'statusCode': 400,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({
                'error': 'Password required',
                'message': 'Введите пароль'
            })
        }
    
    current_time = time.time()
    
    if client_ip in LOGIN_ATTEMPTS:
        attempt_data = LOGIN_ATTEMPTS[client_ip]
        
        if attempt_data['locked_until'] > current_time:
            remaining = int(attempt_data['locked_until'] - current_time)
            return {
                'statusCode': 429,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({
                    'error': 'Too many attempts',
                    'locked_for_seconds': remaining,
                    'message': f'Слишком много попыток входа. Попробуйте через {remaining} секунд'
                })
            }
        
        if attempt_data['count'] >= MAX_ATTEMPTS:
            LOGIN_ATTEMPTS[client_ip] = {
                'count': attempt_data['count'] + 1,
                'locked_until': current_time + LOCKOUT_TIME
            }
            return {
                'statusCode': 429,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({
                    'error': 'Account locked',
                    'locked_for_seconds': LOCKOUT_TIME,
                    'message': f'Превышен лимит попыток входа. Доступ заблокирован на {LOCKOUT_TIME // 60} минут'
                })
            }
    
    password_hash = os.environ.get('ADMIN_PASSWORD_HASH', '')
    
    if not password_hash:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Server configuration error'})
        }
    
    password_match = bcrypt.checkpw(password.encode('utf-8'), password_hash.encode('utf-8'))
    
    if not password_match:
        if client_ip not in LOGIN_ATTEMPTS:
            LOGIN_ATTEMPTS[client_ip] = {'count': 0, 'locked_until': 0}
        
        LOGIN_ATTEMPTS[client_ip]['count'] += 1
        attempts_left = MAX_ATTEMPTS - LOGIN_ATTEMPTS[client_ip]['count']
        
        return {
            'statusCode': 401,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({
                'error': 'Invalid credentials',
                'attempts_left': max(0, attempts_left),
                'message': f'Неверный пароль. Осталось попыток: {max(0, attempts_left)}'
            })
        }
    
    code = ''.join([str(random.randint(0, 9)) for _ in range(6)])
    
    TWO_FA_CODES[client_ip] = {
        'code': code,
        'expires_at': current_time + CODE_EXPIRY,
        'attempts': 0
    }
    
    admin_email = os.environ.get('ADMIN_EMAIL', '')
    email_sent, error_message = send_2fa_code(admin_email, code)
    
    if not email_sent:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({
                'error': 'Failed to send verification code',
                'message': error_message
            })
        }
    
    masked_email = admin_email[:3] + '***@' + admin_email.split('@')[1] if '@' in admin_email else '***'
    
    return {
        'statusCode': 200,
        'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({
            'success': True,
            'requires_2fa': True,
            'message': f'Код подтверждения отправлен на {masked_email}'
        })
    }


def handle_verify_code(body: dict, event: dict) -> dict:
    code = body.get('code', '').strip()
    client_ip = event.get('requestContext', {}).get('identity', {}).get('sourceIp', 'unknown')
    
    current_time = time.time()
    
    if client_ip not in TWO_FA_CODES:
        return {
            'statusCode': 400,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({
                'error': 'No pending verification',
                'message': 'Сначала введите пароль'
            })
        }
    
    code_data = TWO_FA_CODES[client_ip]
    
    if code_data['expires_at'] < current_time:
        del TWO_FA_CODES[client_ip]
        return {
            'statusCode': 400,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({
                'error': 'Code expired',
                'message': 'Код истёк. Войдите заново'
            })
        }
    
    if code_data['attempts'] >= 3:
        del TWO_FA_CODES[client_ip]
        return {
            'statusCode': 429,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({
                'error': 'Too many attempts',
                'message': 'Превышен лимит попыток. Войдите заново'
            })
        }
    
    if code != code_data['code']:
        TWO_FA_CODES[client_ip]['attempts'] += 1
        attempts_left = 3 - TWO_FA_CODES[client_ip]['attempts']
        return {
            'statusCode': 401,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({
                'error': 'Invalid code',
                'attempts_left': attempts_left,
                'message': f'Неверный код. Осталось попыток: {attempts_left}'
            })
        }
    
    del TWO_FA_CODES[client_ip]
    
    if client_ip in LOGIN_ATTEMPTS:
        del LOGIN_ATTEMPTS[client_ip]
    
    jwt_secret = os.environ.get('JWT_SECRET_KEY', '')
    
    if not jwt_secret:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Server configuration error'})
        }
    
    expiration = datetime.utcnow() + timedelta(hours=8)
    
    token = jwt.encode(
        {
            'role': 'admin',
            'exp': expiration,
            'iat': datetime.utcnow(),
            'ip': client_ip
        },
        jwt_secret,
        algorithm='HS256'
    )
    
    return {
        'statusCode': 200,
        'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({
            'success': True,
            'token': token,
            'expires_at': expiration.isoformat(),
            'message': 'Вход выполнен успешно'
        })
    }


def handle_verify(body: dict) -> dict:
    token = body.get('token', '')
    
    if not token:
        return {
            'statusCode': 401,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'valid': False, 'error': 'No token provided'})
        }
    
    jwt_secret = os.environ.get('JWT_SECRET_KEY', '')
    
    if not jwt_secret:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'valid': False, 'error': 'Server configuration error'})
        }
    
    try:
        payload = jwt.decode(token, jwt_secret, algorithms=['HS256'])
        
        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({
                'valid': True,
                'role': payload.get('role'),
                'expires_at': datetime.fromtimestamp(payload.get('exp')).isoformat()
            })
        }
    except jwt.ExpiredSignatureError:
        return {
            'statusCode': 401,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'valid': False, 'error': 'Token expired'})
        }
    except jwt.InvalidTokenError:
        return {
            'statusCode': 401,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'valid': False, 'error': 'Invalid token'})
        }