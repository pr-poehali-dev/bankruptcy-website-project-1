import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const images = [
  {
    url: 'https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/968010d2-42a4-43fe-b8b0-a5644918c3c7.jpg',
    name: 'favicon.jpg'
  },
  {
    url: 'https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/17594dad-7533-40ed-9f8f-bf67121e4243.jpg',
    name: 'hero-main.jpg'
  },
  {
    url: 'https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/e1df4e58-26a8-4646-82c4-8bfa2d5c9cde.jpg',
    name: 'about-main.jpg'
  },
  {
    url: 'https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/88bd532d-c757-44ac-8a48-65a88b89c8af.jpg',
    name: 'blog-avoid-bankruptcy.jpg'
  },
  {
    url: 'https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/0b4233ba-98ff-4542-a284-3a43f1ff8714.jpg',
    name: 'blog-bankruptcy-procedure.jpg'
  },
  {
    url: 'https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/d091a4f1-f0a7-4c76-b54b-9fc5913c6ca3.jpg',
    name: 'blog-debt-forgiveness.jpg'
  },
  {
    url: 'https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/5b6c77f6-19ab-44a4-89c6-82d67295d095.jpg',
    name: 'blog-financial-literacy.jpg'
  },
  {
    url: 'https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/e176d335-425b-4394-9b17-3efbc93bbc45.jpg',
    name: 'blog-collector-protection.jpg'
  },
  {
    url: 'https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/5679eda6-78fd-4484-a5dc-709110346b2b.jpg',
    name: 'blog-legal-alternatives.jpg'
  },
  {
    url: 'https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/cf74a58c-2afa-41ba-a630-c679accd6acd.jpg',
    name: 'cases-successful-individual.jpg'
  },
  {
    url: 'https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/2b2d6c9b-8f00-4624-9996-14eb90afe52b.jpg',
    name: 'cases-corporate-liquidation.jpg'
  },
  {
    url: 'https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/2cd27e4c-402b-462d-bf10-e47925c47aaf.jpg',
    name: 'cases-restructuring.jpg'
  },
  {
    url: 'https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/f946d384-a1ae-4bc9-b562-a38fae6e0825.jpg',
    name: 'team-consultation.jpg'
  },
  {
    url: 'https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/3f8a222c-8e98-430d-8f39-40605f836ccd.jpg',
    name: 'team-testimonial.jpg'
  },
  {
    url: 'https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/ca43512b-b9f6-4f91-9cd6-8bde6bb73515.jpg',
    name: 'team-specialist.jpg'
  }
];

async function downloadImages() {
  const outputDir = join(process.cwd(), 'public', 'image_save');
  
  // Create directory
  try {
    await mkdir(outputDir, { recursive: true });
    console.log(`Created directory: ${outputDir}`);
  } catch (error) {
    console.error(`Failed to create directory: ${error.message}`);
    process.exit(1);
  }

  const results = {
    success: [],
    failed: []
  };

  // Download each image
  for (const image of images) {
    try {
      console.log(`Downloading ${image.name}...`);
      const response = await fetch(image.url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      
      const filePath = join(outputDir, image.name);
      await writeFile(filePath, buffer);
      
      console.log(`Successfully saved: ${image.name} (${(buffer.length / 1024).toFixed(2)} KB)`);
      results.success.push(image.name);
    } catch (error) {
      console.error(`Failed to download ${image.name}: ${error.message}`);
      results.failed.push({ name: image.name, error: error.message });
    }
  }

  // Print summary
  console.log('\n=== Download Summary ===');
  console.log(`Total images: ${images.length}`);
  console.log(`Successfully downloaded: ${results.success.length}`);
  console.log(`Failed: ${results.failed.length}`);
  
  if (results.success.length > 0) {
    console.log('\nSuccessfully downloaded:');
    results.success.forEach(name => console.log(`  - ${name}`));
  }
  
  if (results.failed.length > 0) {
    console.log('\nFailed downloads:');
    results.failed.forEach(({ name, error }) => console.log(`  - ${name}: ${error}`));
  }
}

downloadImages().catch(console.error);