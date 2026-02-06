-- Создание таблицы пользователей админ-панели
CREATE TABLE IF NOT EXISTS admin_users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL DEFAULT 'viewer',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP,
    is_active BOOLEAN DEFAULT true
);

-- Создание индексов для быстрого поиска
CREATE INDEX idx_admin_users_email ON admin_users(email);
CREATE INDEX idx_admin_users_role ON admin_users(role);
CREATE INDEX idx_admin_users_active ON admin_users(is_active);

-- Вставка главного администратора
-- Пароль: admin2026
-- Хэш создан через bcrypt с rounds=12
INSERT INTO admin_users (email, password_hash, role) 
VALUES ('almaz.habibrahmanov@gmail.com', '$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewY5GyYIeWZHBZJK', 'admin')
ON CONFLICT (email) DO NOTHING;

-- Комментарии к таблице
COMMENT ON TABLE admin_users IS 'Пользователи админ-панели блога';
COMMENT ON COLUMN admin_users.role IS 'Роли: viewer (только чтение), editor (создание и редактирование), admin (полный доступ)';
COMMENT ON COLUMN admin_users.is_active IS 'Активен ли пользователь (для временной блокировки без удаления)';