
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
}

const CoursePageSchema: React.FC<CoursePageSchemaProps> = ({
  courseName,
  description,
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
    "description": description,
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
