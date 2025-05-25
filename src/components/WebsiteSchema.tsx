
import React from 'react';
import StructuredData from './StructuredData';

const WebsiteSchema = () => {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Криптокурсы - Обучение криптовалютам и блокчейну",
    "alternateName": "КРИПТО КУРСЫ",
    "url": "https://cryptokursy.ru",
    "description": "Лучшие онлайн-курсы по криптовалютам и блокчейну. Обучение с нуля для начинающих и продвинутые программы.",
    "inLanguage": "ru-RU",
    "publisher": {
      "@type": "Organization",
      "name": "Криптокурсы"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://cryptokursy.ru/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return <StructuredData data={websiteData} />;
};

export default WebsiteSchema;
