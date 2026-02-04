import { useEffect } from 'react';

interface StructuredDataProps {
  type?: 'homepage' | 'service-individual' | 'service-corporate';
}

const StructuredData = ({ type = 'homepage' }: StructuredDataProps) => {
  useEffect(() => {
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"].dynamic-schema');
    existingScripts.forEach(script => script.remove());

    if (type === 'service-individual') {
      const serviceSchema = document.createElement('script');
      serviceSchema.type = 'application/ld+json';
      serviceSchema.className = 'dynamic-schema';
      serviceSchema.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Банкротство физических лиц",
        "provider": {
          "@type": "LegalService",
          "name": "БезДолгов59",
          "telephone": "+7-902-64-44-201",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Пермь",
            "addressRegion": "Пермский край",
            "addressCountry": "RU"
          }
        },
        "areaServed": {
          "@type": "State",
          "name": "Пермский край"
        },
        "offers": {
          "@type": "Offer",
          "price": "30000",
          "priceCurrency": "RUB",
          "description": "Банкротство физических лиц в Пермском крае"
        },
        "description": "Полное сопровождение процедуры банкротства физических лиц в Перми: списание долгов, защита от коллекторов, работа с финансовым управляющим и судом"
      });
      document.head.appendChild(serviceSchema);

      const breadcrumbSchema = document.createElement('script');
      breadcrumbSchema.type = 'application/ld+json';
      breadcrumbSchema.className = 'dynamic-schema';
      breadcrumbSchema.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Главная",
            "item": "https://bezdolgov59.ru"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Банкротство физических лиц",
            "item": "https://bezdolgov59.ru/individual-bankruptcy"
          }
        ]
      });
      document.head.appendChild(breadcrumbSchema);
    }

    if (type === 'service-corporate') {
      const serviceSchema = document.createElement('script');
      serviceSchema.type = 'application/ld+json';
      serviceSchema.className = 'dynamic-schema';
      serviceSchema.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Банкротство юридических лиц",
        "provider": {
          "@type": "LegalService",
          "name": "БезДолгов59",
          "telephone": "+7-902-64-44-201",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Пермь",
            "addressRegion": "Пермский край",
            "addressCountry": "RU"
          }
        },
        "areaServed": {
          "@type": "State",
          "name": "Пермский край"
        },
        "offers": {
          "@type": "Offer",
          "price": "100000",
          "priceCurrency": "RUB",
          "description": "Банкротство юридических лиц в Пермском крае"
        },
        "description": "Профессиональное сопровождение банкротства юридических лиц в Перми: ликвидация ООО, защита руководителей от субсидиарной ответственности"
      });
      document.head.appendChild(serviceSchema);

      const breadcrumbSchema = document.createElement('script');
      breadcrumbSchema.type = 'application/ld+json';
      breadcrumbSchema.className = 'dynamic-schema';
      breadcrumbSchema.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Главная",
            "item": "https://bezdolgov59.ru"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Банкротство юридических лиц",
            "item": "https://bezdolgov59.ru/corporate-bankruptcy"
          }
        ]
      });
      document.head.appendChild(breadcrumbSchema);
    }

    return () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"].dynamic-schema');
      scripts.forEach(script => script.remove());
    };
  }, [type]);

  return null;
};

export default StructuredData;
