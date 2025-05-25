
import React from 'react';
import StructuredData from './StructuredData';

interface CoursePageSchemaProps {
  courseName: string;
  courseDescription: string;
  price: string;
  currency: string;
  instructor: string;
  duration: string;
  level: string;
  rating: string;
  reviewCount: string;
  isAccessibleForFree?: boolean;
}

const CoursePageSchema: React.FC<CoursePageSchemaProps> = ({
  courseName,
  courseDescription,
  price,
  currency,
  instructor,
  duration,
  level,
  rating,
  reviewCount,
  isAccessibleForFree = false
}) => {
  const courseData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": courseName,
    "description": courseDescription,
    "provider": {
      "@type": "Organization",
      "name": "КриптоКурсы",
      "url": "https://cryptokursy.ru"
    },
    "instructor": {
      "@type": "Person",
      "name": instructor
    },
    "educationalLevel": level,
    "courseMode": "Online",
    "isAccessibleForFree": isAccessibleForFree,
    "timeRequired": duration,
    "inLanguage": "ru-RU",
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": currency,
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating,
      "reviewCount": reviewCount,
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return <StructuredData data={courseData} />;
};

export default CoursePageSchema;
