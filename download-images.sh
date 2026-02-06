#!/bin/bash

# Скрипт для скачивания всех изображений в public/image_save

echo "🚀 Начинаем скачивание изображений..."
echo ""

# Создаем папку
mkdir -p public/image_save
echo "✅ Папка public/image_save создана"
echo ""

# Функция для скачивания с проверкой
download_image() {
    local filename=$1
    local url=$2
    echo "⬇️  Скачиваю $filename..."
    
    if curl -f -L -o "public/image_save/$filename" "$url" 2>/dev/null; then
        local size=$(du -h "public/image_save/$filename" | cut -f1)
        echo "   ✅ $filename ($size)"
    else
        echo "   ❌ Ошибка скачивания $filename"
        echo "   URL: $url"
    fi
    echo ""
}

# Hero и About
download_image "hero-main.jpg" "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/17594dad-7533-40ed-9f8f-bf67121e4243.jpg"
download_image "about-main.jpg" "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/e1df4e58-26a8-4646-82c4-8bfa2d5c9cde.jpg"

# Blog изображения
download_image "blog-avoid-bankruptcy.jpg" "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/88bd532d-c757-44ac-8a48-65a88b89c8af.jpg"
download_image "blog-bankruptcy-procedure.jpg" "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/0b4233ba-98ff-4542-a284-3a43f1ff8714.jpg"
download_image "blog-debt-forgiveness.jpg" "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/d091a4f1-f0a7-4c76-b54b-9fc5913c6ca3.jpg"
download_image "blog-financial-literacy.jpg" "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/5b6c77f6-19ab-44a4-89c6-82d67295d095.jpg"
download_image "blog-collector-protection.jpg" "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/e176d335-425b-4394-9b17-3efbc93bbc45.jpg"
download_image "blog-legal-alternatives.jpg" "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/5679eda6-78fd-4484-a5dc-709110346b2b.jpg"

# Cases изображения
download_image "cases-successful-individual.jpg" "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/cf74a58c-2afa-41ba-a630-c679accd6acd.jpg"
download_image "cases-corporate-liquidation.jpg" "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/2b2d6c9b-8f00-4624-9996-14eb90afe52b.jpg"
download_image "cases-restructuring.jpg" "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/2cd27e4c-402b-462d-bf10-e47925c47aaf.jpg"

# Team изображения
download_image "team-consultation.jpg" "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/f946d384-a1ae-4bc9-b562-a38fae6e0825.jpg"
download_image "team-testimonial.jpg" "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/3f8a222c-8e98-430d-8f39-40605f836ccd.jpg"
download_image "team-specialist.jpg" "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/ca43512b-b9f6-4f91-9cd6-8bde6bb73515.jpg"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 Итого скачано файлов:"
ls -lh public/image_save/ | grep -v total | wc -l
echo ""
echo "📂 Содержимое папки:"
ls -lh public/image_save/