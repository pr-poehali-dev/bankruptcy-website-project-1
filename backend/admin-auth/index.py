import json
import os
import time
from datetime import datetime, timedelta
import jwt
import bcrypt

LOGIN_ATTEMPTS = {}
MAX_ATTEMPTS = 5
LOCKOUT_TIME = 900

def handler(event: dict, context) -> dict:
    '''Безопасная авторизация администратора с защитой от брутфорса и JWT токенами'''
    
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


def handle_login(body: dict, event: dict) -> dict:
    password = body.get('password', '')
    client_ip = event.get('requestContext', {}).get('identity', {}).get('sourceIp', 'unknown')
    
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
                'error': 'Invalid password',
                'attempts_left': max(0, attempts_left),
                'message': f'Неверный пароль. Осталось попыток: {max(0, attempts_left)}'
            })
        }
    
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
