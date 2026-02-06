import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

interface AdminAuthFormProps {
  password: string;
  setPassword: (value: string) => void;
  verificationCode: string;
  setVerificationCode: (value: string) => void;
  isLoggingIn: boolean;
  lockoutTime: number;
  attemptsLeft: number | null;
  requires2FA: boolean;
  codeAttemptsLeft: number | null;
  onLogin: () => void;
  onVerifyCode: () => void;
  onCancel2FA: () => void;
}

export const AdminAuthForm = ({
  password,
  setPassword,
  verificationCode,
  setVerificationCode,
  isLoggingIn,
  lockoutTime,
  attemptsLeft,
  requires2FA,
  codeAttemptsLeft,
  onLogin,
  onVerifyCode,
  onCancel2FA
}: AdminAuthFormProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
            <Icon name="Shield" size={28} />
            Админ-панель блога
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {lockoutTime > 0 && (
            <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-center">
              <Icon name="Lock" size={24} className="mx-auto mb-2 text-destructive" />
              <p className="text-sm font-medium text-destructive">
                Доступ заблокирован
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Попробуйте через {Math.floor(lockoutTime / 60)}:{String(lockoutTime % 60).padStart(2, '0')}
              </p>
            </div>
          )}

          {!requires2FA ? (
            <>
              <div className="space-y-2">
                <Label htmlFor="password">Пароль</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && !isLoggingIn && lockoutTime === 0 && onLogin()}
                  placeholder="Введите пароль"
                  disabled={isLoggingIn || lockoutTime > 0}
                />
                {attemptsLeft !== null && attemptsLeft > 0 && (
                  <p className="text-xs text-muted-foreground">
                    Осталось попыток: {attemptsLeft}
                  </p>
                )}
              </div>

              <Button 
                onClick={onLogin} 
                className="w-full gap-2" 
                disabled={isLoggingIn || lockoutTime > 0}
              >
                {isLoggingIn ? (
                  <>
                    <Icon name="Loader2" size={20} className="animate-spin" />
                    Проверка...
                  </>
                ) : (
                  <>
                    <Icon name="LogIn" size={20} />
                    Войти
                  </>
                )}
              </Button>
            </>
          ) : (
            <>
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
                <Icon name="Mail" size={24} className="mx-auto mb-2 text-blue-600" />
                <p className="text-sm font-medium text-blue-900">
                  Код отправлен на email
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Проверьте почту и введите 6-значный код
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="code">Код подтверждения</Label>
                <Input
                  id="code"
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, ''))}
                  onKeyPress={(e) => e.key === 'Enter' && !isLoggingIn && onVerifyCode()}
                  placeholder="000000"
                  className="text-center text-2xl tracking-widest"
                  disabled={isLoggingIn}
                />
                {codeAttemptsLeft !== null && codeAttemptsLeft > 0 && (
                  <p className="text-xs text-muted-foreground">
                    Осталось попыток: {codeAttemptsLeft}
                  </p>
                )}
              </div>

              <div className="flex gap-2">
                <Button 
                  onClick={onVerifyCode} 
                  className="flex-1 gap-2" 
                  disabled={isLoggingIn || verificationCode.length !== 6}
                >
                  {isLoggingIn ? (
                    <>
                      <Icon name="Loader2" size={20} className="animate-spin" />
                      Проверка...
                    </>
                  ) : (
                    <>
                      <Icon name="Check" size={20} />
                      Подтвердить
                    </>
                  )}
                </Button>
                <Button 
                  onClick={onCancel2FA} 
                  variant="outline"
                >
                  Отмена
                </Button>
              </div>
            </>
          )}

          <div className="pt-4 border-t space-y-2 text-xs text-muted-foreground">
            <div className="flex items-start gap-2">
              <Icon name="Shield" size={14} className="mt-0.5 flex-shrink-0" />
              <span>Защита от взлома: максимум 5 попыток</span>
            </div>
            <div className="flex items-start gap-2">
              <Icon name="Mail" size={14} className="mt-0.5 flex-shrink-0" />
              <span>Двухфакторная аутентификация через email</span>
            </div>
            <div className="flex items-start gap-2">
              <Icon name="Clock" size={14} className="mt-0.5 flex-shrink-0" />
              <span>Токен сессии действует 8 часов</span>
            </div>
            <div className="flex items-start gap-2">
              <Icon name="Lock" size={14} className="mt-0.5 flex-shrink-0" />
              <span>Все данные защищены JWT шифрованием</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
