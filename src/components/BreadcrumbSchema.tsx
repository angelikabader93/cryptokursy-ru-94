
import React from 'react';
import StructuredData from './StructuredData';

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url?: string;
  }>;
}

const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ items }) => {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      ...(item.url && { "item": `https://cryptokursy.ru${item.url}` })
    }))
  };

  return <StructuredData data={breadcrumbData} />;
};

export default BreadcrumbSchema;
