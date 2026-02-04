export const IMAGES = {
  hero: {
    main: 'https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/20a51b75-d269-425a-bf0c-947fd0031591.jpg',
    fallback: '/images/hero-fallback.svg'
  },
  about: {
    main: 'https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/e1df4e58-26a8-4646-82c4-8bfa2d5c9cde.jpg',
    fallback: '/images/about-fallback.svg'
  },
  ogImage: {
    main: 'https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/0fd7a5b6-3b43-422e-8839-f042bdfdef70.jpg',
    fallback: '/og-image-fallback.png'
  }
};

export const getImageWithFallback = (imageKey: keyof typeof IMAGES): string => {
  const image = IMAGES[imageKey];
  return image.main || image.fallback;
};
