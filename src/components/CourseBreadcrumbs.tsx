
import React from 'react';
import SEOOptimizedLink from './SEOOptimizedLink';
import BreadcrumbSchema from './BreadcrumbSchema';

interface BreadcrumbItem {
  name: string;
  url?: string;
}

interface CourseBreadcrumbsProps {
  items: BreadcrumbItem[];
}

const CourseBreadcrumbs: React.FC<CourseBreadcrumbsProps> = ({ items }) => {
  return (
    <>
      <BreadcrumbSchema items={items} />
      <nav 
        className="text-white/70 text-sm" 
        aria-label="Навигация по разделам"
        itemScope 
        itemType="https://schema.org/BreadcrumbList"
      >
        {items.map((item, index) => (
          <span 
            key={index}
            itemScope 
            itemType="https://schema.org/ListItem" 
            itemProp="itemListElement"
          >
            <meta itemProp="position" content={String(index + 1)} />
            {item.url ? (
              <SEOOptimizedLink 
                to={item.url}
                className="hover:text-white transition-colors"
                title={`Перейти к разделу ${item.name}`}
              >
                <span itemProp="name">{item.name}</span>
              </SEOOptimizedLink>
            ) : (
              <span className="text-white" itemProp="name">{item.name}</span>
            )}
            {index < items.length - 1 && <span className="mx-2" aria-hidden="true">›</span>}
          </span>
        ))}
      </nav>
    </>
  );
};

export default CourseBreadcrumbs;
