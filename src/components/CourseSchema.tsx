
import React from 'react';
import StructuredData from './StructuredData';

interface CourseSchemaProps {
  name: string;
  description: string;
  price: string;
  currency: string;
  level: string;
  isFree?: boolean;
  duration?: string;
  url: string;
}

const CourseSchema: React.FC<CourseSchemaProps> = ({
  name,
  description,
  price,
  currency,
  level,
  isFree = false,
  duration,
  url
}) => {
  const courseData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "Криптокурсы",
      "url": "https://cryptokursy.ru"
    },
    "educationalLevel": level,
    "courseMode": "Online",
    "teaches": ["Криптовалюты", "Блокчейн", "Инвестирование", "Трейдинг"],
    "availableLanguage": "Russian",
    "url": url,
    "isAccessibleForFree": isFree,
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": currency,
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString().split('T')[0]
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Online",
      "courseWorkload": duration || "P4W"
    },
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student"
    }
  };

  return <StructuredData data={courseData} />;
};

export default CourseSchema;
