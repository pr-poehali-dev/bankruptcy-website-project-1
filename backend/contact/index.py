import json
import os
import smtplib
import time
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def handler(event: dict, context) -> dict:
    '''Обработка заявок с формы обратной связи и отправка email'''
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': ''
        }

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }

    try:
        body = json.loads(event.get('body', '{}'))
        name = body.get('name', '').strip()
        phone = body.get('phone', '').strip()
        debt_amount = body.get('debt_amount', '').strip()
        comment = body.get('comment', '').strip()
        timestamp = body.get('timestamp', 0)

        if not name or not phone:
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Имя и телефон обязательны'})
            }

        current_time = int(time.time() * 1000)
        time_diff = current_time - timestamp
        
        if time_diff < 2000:
            return {
                'statusCode': 429,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Слишком быстрая отправка'})
            }

        client_ip = event.get('requestContext', {}).get('identity', {}).get('sourceIp', '')
        rate_limit_key = f'rate_limit_{client_ip}'
        
        try:
            with open(f'/tmp/{rate_limit_key}', 'r') as f:
                rate_data = json.loads(f.read())
                submissions = rate_data.get('submissions', [])
                recent_submissions = [s for s in submissions if current_time - s < 600000]
                
                if len(recent_submissions) >= 3:
                    return {
                        'statusCode': 429,
                        'headers': {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*'
                        },
                        'body': json.dumps({'error': 'Слишком много заявок. Попробуйте позже'})
                    }
                recent_submissions.append(current_time)
                with open(f'/tmp/{rate_limit_key}', 'w') as f:
                    f.write(json.dumps({'submissions': recent_submissions}))
        except FileNotFoundError:
            with open(f'/tmp/{rate_limit_key}', 'w') as f:
                f.write(json.dumps({'submissions': [current_time]}))

        smtp_host = os.environ.get('SMTP_HOST')
        smtp_port = int(os.environ.get('SMTP_PORT', '587'))
        smtp_user = os.environ.get('SMTP_USER')
        smtp_password = os.environ.get('SMTP_PASSWORD')
        contact_email = os.environ.get('CONTACT_EMAIL')

        if not all([smtp_host, smtp_user, smtp_password, contact_email]):
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'SMTP не настроен'})
            }

        msg = MIMEMultipart('alternative')
        msg['Subject'] = f'Новая заявка от {name}'
        msg['From'] = smtp_user
        msg['To'] = contact_email

        html_body = f'''
        <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
                <h2 style="color: #9b87f5; margin-bottom: 20px;">📋 Новая заявка с сайта</h2>
                
                <div style="background: #f9f9f9; padding: 15px; border-radius: 6px; margin-bottom: 15px;">
                    <p style="margin: 8px 0;"><strong>👤 Имя:</strong> {name}</p>
                    <p style="margin: 8px 0;"><strong>📞 Телефон:</strong> {phone}</p>
                    {f'<p style="margin: 8px 0;"><strong>💰 Сумма задолженности:</strong> {debt_amount}</p>' if debt_amount else ''}
                </div>
                
                {f'<div style="background: #fff; padding: 15px; border-left: 4px solid #9b87f5; margin-bottom: 15px;"><p style="margin: 0;"><strong>💬 Комментарий:</strong></p><p style="margin: 10px 0 0 0;">{comment}</p></div>' if comment else ''}
                
                <p style="color: #999; font-size: 12px; margin-top: 20px; padding-top: 15px; border-top: 1px solid #e0e0e0;">
                    Это автоматическое сообщение с формы обратной связи БанкротЭксперт
                </p>
            </div>
        </body>
        </html>
        '''

        msg.attach(MIMEText(html_body, 'html'))

        with smtplib.SMTP(smtp_host, smtp_port) as server:
            server.starttls()
            server.login(smtp_user, smtp_password)
            server.send_message(msg)

        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'message': 'Заявка успешно отправлена'
            })
        }

    except json.JSONDecodeError:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Неверный формат данных'})
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': f'Ошибка сервера: {str(e)}'})
        }