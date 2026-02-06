# PowerShell script for downloading images

Write-Host "Starting image download..." -ForegroundColor Cyan
Write-Host ""

# Create directory
$dir = "public\image_save"
if (-not (Test-Path $dir)) {
    New-Item -ItemType Directory -Path $dir | Out-Null
}
Write-Host "OK Folder $dir created" -ForegroundColor Green
Write-Host ""

# Function to download with progress
function Download-Image {
    param($filename, $url)
    
    Write-Host "Downloading $filename..." -ForegroundColor Yellow
    try {
        Invoke-WebRequest -Uri $url -OutFile "$dir\$filename" -ErrorAction Stop
        $size = (Get-Item "$dir\$filename").Length / 1MB
        Write-Host "   OK $filename ($([math]::Round($size, 2)) MB)" -ForegroundColor Green
    }
    catch {
        Write-Host "   ERROR: Failed to download $filename" -ForegroundColor Red
        Write-Host "   URL: $url" -ForegroundColor Gray
    }
    Write-Host ""
}

# Hero and About
Download-Image "hero-main.jpg" "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/03495eb9-9dbf-4c79-bc86-6cc661a3d856.jpg"
Download-Image "about-main.jpg" "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/247970d7-fb3b-48b8-9f7d-336b4eaf84fc.jpg"
Download-Image "og-image.jpg" "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/03495eb9-9dbf-4c79-bc86-6cc661a3d856.jpg"

# Blog images
Download-Image "blog-avoid-bankruptcy.jpg" "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/3784f730-22ad-4dbc-86b0-c406b72f962f.jpg"
Download-Image "blog-bankruptcy-procedure.jpg" "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/840755de-79e4-4d90-969e-a2b805fab076.jpg"
Download-Image "blog-debt-forgiveness.jpg" "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/7f7803f3-9ae9-49ac-aa24-9b646a4e533b.jpg"
Download-Image "blog-financial-literacy.jpg" "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/6a28274a-e8aa-4a80-8746-7a2f45e7374f.jpg"
Download-Image "blog-collector-protection.jpg" "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/fea55ddc-23b6-4208-8aa5-69c51c3cbd45.jpg"
Download-Image "blog-legal-alternatives.jpg" "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/49236e39-9484-4a9c-90bc-a03c99fc443f.jpg"

# Cases images
Download-Image "case-successful-individual.jpg" "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/54262652-6eef-4eeb-b1d4-cb07e654de97.jpg"
Download-Image "case-corporate-liquidation.jpg" "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/4866bc50-a18f-4be5-a755-b41d24ee21b0.jpg"
Download-Image "case-restructuring.jpg" "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/c4851de9-645b-42a9-9560-63339da3caac.jpg"

# Team images
Download-Image "team-consultation.jpg" "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/506ec3c8-e163-4f83-937d-b30e6aecfb6e.jpg"
Download-Image "team-testimonial.jpg" "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/5cc15ee7-73f7-4da0-951f-57041e80600b.jpg"
Download-Image "team-specialist.jpg" "https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/4beb9961-2b46-43a1-b046-30e9ee1a6885.jpg"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Download completed!" -ForegroundColor Green
Write-Host ""
Write-Host "Files in folder:" -ForegroundColor Cyan
Get-ChildItem $dir | Select-Object Name, @{Name="Size (MB)";Expression={[math]::Round($_.Length / 1MB, 2)}}