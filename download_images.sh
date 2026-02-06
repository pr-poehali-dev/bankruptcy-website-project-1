#!/bin/bash

# Create directory
mkdir -p public/image_save

# Download images using curl
echo "Downloading images..."

curl -o public/image_save/hero-main.jpg "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/17594dad-7533-40ed-9f8f-bf67121e4243.jpg"
echo "Downloaded: hero-main.jpg"

curl -o public/image_save/about-main.jpg "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/e1df4e58-26a8-4646-82c4-8bfa2d5c9cde.jpg"
echo "Downloaded: about-main.jpg"

curl -o public/image_save/blog-avoid-bankruptcy.jpg "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/88bd532d-c757-44ac-8a48-65a88b89c8af.jpg"
echo "Downloaded: blog-avoid-bankruptcy.jpg"

curl -o public/image_save/blog-bankruptcy-procedure.jpg "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/0b4233ba-98ff-4542-a284-3a43f1ff8714.jpg"
echo "Downloaded: blog-bankruptcy-procedure.jpg"

curl -o public/image_save/blog-debt-forgiveness.jpg "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/d091a4f1-f0a7-4c76-b54b-9fc5913c6ca3.jpg"
echo "Downloaded: blog-debt-forgiveness.jpg"

curl -o public/image_save/blog-financial-literacy.jpg "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/5b6c77f6-19ab-44a4-89c6-82d67295d095.jpg"
echo "Downloaded: blog-financial-literacy.jpg"

curl -o public/image_save/blog-collector-protection.jpg "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/e176d335-425b-4394-9b17-3efbc93bbc45.jpg"
echo "Downloaded: blog-collector-protection.jpg"

curl -o public/image_save/blog-legal-alternatives.jpg "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/5679eda6-78fd-4484-a5dc-709110346b2b.jpg"
echo "Downloaded: blog-legal-alternatives.jpg"

curl -o public/image_save/cases-successful-individual.jpg "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/cf74a58c-2afa-41ba-a630-c679accd6acd.jpg"
echo "Downloaded: cases-successful-individual.jpg"

curl -o public/image_save/cases-corporate-liquidation.jpg "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/2b2d6c9b-8f00-4624-9996-14eb90afe52b.jpg"
echo "Downloaded: cases-corporate-liquidation.jpg"

curl -o public/image_save/cases-restructuring.jpg "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/2cd27e4c-402b-462d-bf10-e47925c47aaf.jpg"
echo "Downloaded: cases-restructuring.jpg"

curl -o public/image_save/team-consultation.jpg "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/f946d384-a1ae-4bc9-b562-a38fae6e0825.jpg"
echo "Downloaded: team-consultation.jpg"

curl -o public/image_save/team-testimonial.jpg "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/3f8a222c-8e98-430d-8f39-40605f836ccd.jpg"
echo "Downloaded: team-testimonial.jpg"

curl -o public/image_save/team-specialist.jpg "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/ca43512b-b9f6-4f91-9cd6-8bde6bb73515.jpg"
echo "Downloaded: team-specialist.jpg"

echo ""
echo "=== Download Complete ==="
echo "All images saved to: public/image_save/"
ls -lh public/image_save/
