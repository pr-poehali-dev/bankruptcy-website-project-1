export const IMAGES = {
  favicon: {
    main: '/image_save/favicon.jpg',
    fallback: '/image_save/favicon.jpg'
  },
  hero: {
    main: '/image_save/hero-main.jpg',
    fallback: '/images/hero-fallback.svg'
  },
  about: {
    main: '/image_save/about-main.jpg',
    fallback: '/images/about-fallback.svg'
  },
  ogImage: {
    main: '/image_save/og-image.jpg',
    fallback: '/og-image-fallback.png'
  },
  blog: {
    avoidBankruptcy: '/image_save/blog-avoid-bankruptcy.jpg',
    bankruptcyProcedure: '/image_save/blog-bankruptcy-procedure.jpg',
    debtForgiveness: '/image_save/blog-debt-forgiveness.jpg',
    financialLiteracy: '/image_save/blog-financial-literacy.jpg',
    collectorProtection: '/image_save/blog-collector-protection.jpg',
    legalAlternatives: '/image_save/blog-legal-alternatives.jpg'
  },
  cases: {
    successfulIndividual: '/image_save/case-successful-individual.jpg',
    corporateLiquidation: '/image_save/case-corporate-liquidation.jpg',
    restructuring: '/image_save/case-restructuring.jpg'
  },
  team: {
    consultation: '/image_save/team-consultation.jpg',
    testimonial: '/image_save/team-testimonial.jpg',
    specialist: '/image_save/team-specialist.jpg'
  }
};

export const getImageWithFallback = (imageKey: keyof typeof IMAGES): string => {
  const image = IMAGES[imageKey];
  return image.main || image.fallback;
};