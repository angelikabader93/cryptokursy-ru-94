
import React from 'react';
import StructuredData from './StructuredData';

interface CoursePageSchemaProps {
  courseName: string;
  description: string;
  price: string;
  originalPrice?: string;
  currency: string;
  instructor: string;
  duration: string;
  level: string;
  rating: string;
  reviewCount: string;
  isAccessibleForFree?: boolean;
  modules?: Array<{
    title: string;
    description: string;
    duration: string;
    color: string;
    lessons: Array<{
      title: string;
      type: 'video' | 'test';
      duration?: string;
    }>;
  }>;
  courseCode?: string;
  teaches?: string[];
  url?: string;
}

const CoursePageSchema: React.FC<CoursePageSchemaProps> = ({
  courseName,
  description,
  price,
  originalPrice,
  currency,
  instructor,
  duration,
  level,
  rating,
  reviewCount,
  isAccessibleForFree = false,
  modules,
  courseCode,
  teaches = ["Криптовалюты", "Блокчейн", "Инвестирование", "Трейдинг"],
  url
}) => {
  const courseData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": courseName,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "КриптоКурсы",
      "url": "https://cryptokursy.ru",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cryptokursy.ru/lovable-uploads/1dbf4abc-bae2-4700-990c-ccd769aa7dee.png"
      },
      "sameAs": [
        "https://t.me/cryptokursy"
      ]
    },
    "instructor": [
      {
        "@type": "Person",
        "name": instructor,
        "jobTitle": "Криптовалютный эксперт",
        "worksFor": {
          "@type": "Organization",
          "name": "КриптоКурсы"
        }
      }
    ],
    "educationalLevel": level,
    "courseMode": ["Online"],
    "deliveryMode": ["Online"],
    "isAccessibleForFree": isAccessibleForFree,
    "timeRequired": duration,
    "inLanguage": ["ru-RU"],
    "availableLanguage": ["Russian"],
    "teaches": teaches,
    "coursePrerequisites": "Базовые знания компьютера",
    "educationalCredentialAwarded": "Сертификат о прохождении курса",
    "url": url || typeof window !== 'undefined' ? window.location.href : '',
    ...(courseCode && { "courseCode": courseCode }),
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": currency,
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString().split('T')[0],
      "url": url || typeof window !== 'undefined' ? window.location.href : '',
      "seller": {
        "@type": "Organization",
        "name": "КриптоКурсы"
      },
      ...(originalPrice && {
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": price,
          "priceCurrency": currency,
          "referencePrice": {
            "@type": "UnitPriceSpecification",
            "price": originalPrice,
            "priceCurrency": currency
          }
        }
      })
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating,
      "reviewCount": reviewCount,
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Online",
      "deliveryMode": "Online",
      "courseWorkload": duration,
      "instructor": {
        "@type": "Person",
        "name": instructor
      }
    },
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student",
      "audienceType": "Начинающие и продвинутые пользователи"
    },
    ...(modules && {
      "hasPart": modules.map((module, index) => ({
        "@type": "Course",
        "name": module.title,
        "description": module.description,
        "timeRequired": module.duration,
        "position": index + 1,
        "teaches": module.lessons.map(lesson => lesson.title)
      }))
    })
  };

  return <StructuredData data={courseData} />;
};

export default CoursePageSchema;
