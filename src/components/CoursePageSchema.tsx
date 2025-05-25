
import React from 'react';
import StructuredData from './StructuredData';

interface CoursePageSchemaProps {
  courseName: string;
  description: string;
  price: string;
  originalPrice?: string;
  duration: string;
  level: string;
  instructor: string;
  rating: number;
  reviewCount: number;
  modules: Array<{
    title: string;
    description: string;
    duration: string;
  }>;
}

const CoursePageSchema: React.FC<CoursePageSchemaProps> = ({
  courseName,
  description,
  price,
  originalPrice,
  duration,
  level,
  instructor,
  rating,
  reviewCount,
  modules
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
    "courseMode": "Online",
    "educationalLevel": level,
    "timeRequired": duration,
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "RUB",
      "availability": "https://schema.org/InStock",
      ...(originalPrice && { "priceValidUntil": "2024-12-31" })
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating,
      "reviewCount": reviewCount,
      "bestRating": 5,
      "worstRating": 1
    },
    "hasCourseInstance": modules.map((module, index) => ({
      "@type": "CourseInstance",
      "name": module.title,
      "description": module.description,
      "courseMode": "Online",
      "timeRequired": module.duration
    }))
  };

  return <StructuredData data={courseData} />;
};

export default CoursePageSchema;
