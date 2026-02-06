@echo off
chcp 65001 >nul
echo 🚀 Начинаем скачивание изображений...
echo.

REM Создаем папку
if not exist "public\image_save" mkdir "public\image_save"
echo ✅ Папка public\image_save создана
echo.

REM Hero и About
echo ⬇️  Скачиваю hero-main.jpg...
curl -f -L -o "public\image_save\hero-main.jpg" "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/17594dad-7533-40ed-9f8f-bf67121e4243.jpg"
if %errorlevel% equ 0 (echo    ✅ hero-main.jpg) else (echo    ❌ Ошибка)
echo.

echo ⬇️  Скачиваю about-main.jpg...
curl -f -L -o "public\image_save\about-main.jpg" "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/e1df4e58-26a8-4646-82c4-8bfa2d5c9cde.jpg"
if %errorlevel% equ 0 (echo    ✅ about-main.jpg) else (echo    ❌ Ошибка)
echo.

REM Blog изображения
echo ⬇️  Скачиваю blog-avoid-bankruptcy.jpg...
curl -f -L -o "public\image_save\blog-avoid-bankruptcy.jpg" "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/88bd532d-c757-44ac-8a48-65a88b89c8af.jpg"
if %errorlevel% equ 0 (echo    ✅ blog-avoid-bankruptcy.jpg) else (echo    ❌ Ошибка)
echo.

echo ⬇️  Скачиваю blog-bankruptcy-procedure.jpg...
curl -f -L -o "public\image_save\blog-bankruptcy-procedure.jpg" "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/0b4233ba-98ff-4542-a284-3a43f1ff8714.jpg"
if %errorlevel% equ 0 (echo    ✅ blog-bankruptcy-procedure.jpg) else (echo    ❌ Ошибка)
echo.

echo ⬇️  Скачиваю blog-debt-forgiveness.jpg...
curl -f -L -o "public\image_save\blog-debt-forgiveness.jpg" "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/d091a4f1-f0a7-4c76-b54b-9fc5913c6ca3.jpg"
if %errorlevel% equ 0 (echo    ✅ blog-debt-forgiveness.jpg) else (echo    ❌ Ошибка)
echo.

echo ⬇️  Скачиваю blog-financial-literacy.jpg...
curl -f -L -o "public\image_save\blog-financial-literacy.jpg" "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/5b6c77f6-19ab-44a4-89c6-82d67295d095.jpg"
if %errorlevel% equ 0 (echo    ✅ blog-financial-literacy.jpg) else (echo    ❌ Ошибка)
echo.

echo ⬇️  Скачиваю blog-collector-protection.jpg...
curl -f -L -o "public\image_save\blog-collector-protection.jpg" "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/e176d335-425b-4394-9b17-3efbc93bbc45.jpg"
if %errorlevel% equ 0 (echo    ✅ blog-collector-protection.jpg) else (echo    ❌ Ошибка)
echo.

echo ⬇️  Скачиваю blog-legal-alternatives.jpg...
curl -f -L -o "public\image_save\blog-legal-alternatives.jpg" "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/5679eda6-78fd-4484-a5dc-709110346b2b.jpg"
if %errorlevel% equ 0 (echo    ✅ blog-legal-alternatives.jpg) else (echo    ❌ Ошибка)
echo.

REM Cases изображения
echo ⬇️  Скачиваю cases-successful-individual.jpg...
curl -f -L -o "public\image_save\cases-successful-individual.jpg" "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/cf74a58c-2afa-41ba-a630-c679accd6acd.jpg"
if %errorlevel% equ 0 (echo    ✅ cases-successful-individual.jpg) else (echo    ❌ Ошибка)
echo.

echo ⬇️  Скачиваю cases-corporate-liquidation.jpg...
curl -f -L -o "public\image_save\cases-corporate-liquidation.jpg" "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/2b2d6c9b-8f00-4624-9996-14eb90afe52b.jpg"
if %errorlevel% equ 0 (echo    ✅ cases-corporate-liquidation.jpg) else (echo    ❌ Ошибка)
echo.

echo ⬇️  Скачиваю cases-restructuring.jpg...
curl -f -L -o "public\image_save\cases-restructuring.jpg" "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/2cd27e4c-402b-462d-bf10-e47925c47aaf.jpg"
if %errorlevel% equ 0 (echo    ✅ cases-restructuring.jpg) else (echo    ❌ Ошибка)
echo.

REM Team изображения
echo ⬇️  Скачиваю team-consultation.jpg...
curl -f -L -o "public\image_save\team-consultation.jpg" "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/f946d384-a1ae-4bc9-b562-a38fae6e0825.jpg"
if %errorlevel% equ 0 (echo    ✅ team-consultation.jpg) else (echo    ❌ Ошибка)
echo.

echo ⬇️  Скачиваю team-testimonial.jpg...
curl -f -L -o "public\image_save\team-testimonial.jpg" "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/3f8a222c-8e98-430d-8f39-40605f836ccd.jpg"
if %errorlevel% equ 0 (echo    ✅ team-testimonial.jpg) else (echo    ❌ Ошибка)
echo.

echo ⬇️  Скачиваю team-specialist.jpg...
curl -f -L -o "public\image_save\team-specialist.jpg" "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/ca43512b-b9f6-4f91-9cd6-8bde6bb73515.jpg"
if %errorlevel% equ 0 (echo    ✅ team-specialist.jpg) else (echo    ❌ Ошибка)
echo.

echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo 📊 Скачивание завершено!
echo.
echo 📂 Содержимое папки:
dir "public\image_save" /B
echo.
pause
