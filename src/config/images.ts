export const IMAGES = {
  hero: {
    main: 'https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/03495eb9-9dbf-4c79-bc86-6cc661a3d856.jpg',
    fallback: '/images/hero-fallback.svg'
  },
  about: {
    main: 'https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/247970d7-fb3b-48b8-9f7d-336b4eaf84fc.jpg',
    fallback: '/images/about-fallback.svg'
  },
  ogImage: {
    main: 'https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/03495eb9-9dbf-4c79-bc86-6cc661a3d856.jpg',
    fallback: '/og-image-fallback.png'
  },
  blog: {
    avoidBankruptcy: 'https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/3784f730-22ad-4dbc-86b0-c406b72f962f.jpg',
    bankruptcyProcedure: 'https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/840755de-79e4-4d90-969e-a2b805fab076.jpg',
    debtForgiveness: 'https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/7f7803f3-9ae9-49ac-aa24-9b646a4e533b.jpg',
    financialLiteracy: 'https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/6a28274a-e8aa-4a80-8746-7a2f45e7374f.jpg',
    collectorProtection: 'https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/fea55ddc-23b6-4208-8aa5-69c51c3cbd45.jpg',
    legalAlternatives: 'https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/49236e39-9484-4a9c-90bc-a03c99fc443f.jpg'
  },
  cases: {
    successfulIndividual: 'https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/54262652-6eef-4eeb-b1d4-cb07e654de97.jpg',
    corporateLiquidation: 'https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/4866bc50-a18f-4be5-a755-b41d24ee21b0.jpg',
    restructuring: 'https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/c4851de9-645b-42a9-9560-63339da3caac.jpg'
  },
  team: {
    consultation: 'https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/506ec3c8-e163-4f83-937d-b30e6aecfb6e.jpg',
    testimonial: 'https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/5cc15ee7-73f7-4da0-951f-57041e80600b.jpg',
    specialist: 'https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/4beb9961-2b46-43a1-b046-30e9ee1a6885.jpg'
  }
};

export const getImageWithFallback = (imageKey: keyof typeof IMAGES): string => {
  const image = IMAGES[imageKey];
  return image.main || image.fallback;
};