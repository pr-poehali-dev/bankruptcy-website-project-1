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
  },
  blog: {
    avoidBankruptcy: 'https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/88bd532d-c757-44ac-8a48-65a88b89c8af.jpg',
    bankruptcyProcedure: 'https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/0b4233ba-98ff-4542-a284-3a43f1ff8714.jpg',
    debtForgiveness: 'https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/d091a4f1-f0a7-4c76-b54b-9fc5913c6ca3.jpg',
    financialLiteracy: 'https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/5b6c77f6-19ab-44a4-89c6-82d67295d095.jpg',
    collectorProtection: 'https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/e176d335-425b-4394-9b17-3efbc93bbc45.jpg',
    legalAlternatives: 'https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/5679eda6-78fd-4484-a5dc-709110346b2b.jpg'
  },
  cases: {
    successfulIndividual: 'https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/cf74a58c-2afa-41ba-a630-c679accd6acd.jpg',
    corporateLiquidation: 'https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/2b2d6c9b-8f00-4624-9996-14eb90afe52b.jpg',
    restructuring: 'https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/2cd27e4c-402b-462d-bf10-e47925c47aaf.jpg'
  },
  team: {
    consultation: 'https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/f946d384-a1ae-4bc9-b562-a38fae6e0825.jpg',
    testimonial: 'https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/3f8a222c-8e98-430d-8f39-40605f836ccd.jpg',
    specialist: 'https://cdn.poehali.dev/projects/d5087a09-6026-4ae1-a115-dbdb11cde4fb/files/ca43512b-b9f6-4f91-9cd6-8bde6bb73515.jpg'
  }
};

export const getImageWithFallback = (imageKey: keyof typeof IMAGES): string => {
  const image = IMAGES[imageKey];
  return image.main || image.fallback;
};