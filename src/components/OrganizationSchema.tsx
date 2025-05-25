
import React from 'react';
import StructuredData from './StructuredData';

const OrganizationSchema = () => {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Криптокурсы",
    "alternateName": "КРИПТО КУРСЫ",
    "url": "https://cryptokursy.ru",
    "logo": "https://cryptokursy.ru/logo.png",
    "description": "Обучение криптовалютам и блокчейну с нуля. Бесплатные и премиальные курсы для всех уровней подготовки.",
    "foundingDate": "2023",
    "areaServed": "RU",
    "serviceType": "Educational Services",
    "educationalCredentialAwarded": "Certificate of Completion",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Курсы по криптовалютам",
      "itemListElement": [
        {
          "@type": "Course",
          "name": "Криптовалюта для чайников",
          "description": "Базовый курс для тех, кто только начинает свой путь в мире криптовалют",
          "provider": {
            "@type": "Organization",
            "name": "Криптокурсы"
          },
          "educationalLevel": "Beginner",
          "courseMode": "Online",
          "isAccessibleForFree": true,
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "RUB"
          }
        },
        {
          "@type": "Course",
          "name": "Блокчейн и криптовалюты",
          "description": "Глубокое погружение в технологии блокчейн и их применение",
          "provider": {
            "@type": "Organization",
            "name": "Криптокурсы"
          },
          "educationalLevel": "Intermediate",
          "courseMode": "Online",
          "offers": {
            "@type": "Offer",
            "price": "15000",
            "priceCurrency": "RUB"
          }
        }
      ]
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": "Russian"
    },
    "sameAs": [
      "https://t.me/cryptokursy",
      "https://vk.com/cryptokursy"
    ]
  };

  return <StructuredData data={organizationData} />;
};

export default OrganizationSchema;
