
import React from 'react';
import { Link } from 'react-router-dom';
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
      <nav className="text-white/70 text-sm">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {item.url ? (
              <Link 
                to={item.url} 
                className="hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ) : (
              <span className="text-white">{item.name}</span>
            )}
            {index < items.length - 1 && <span className="mx-2">›</span>}
          </React.Fragment>
        ))}
      </nav>
    </>
  );
};

export default CourseBreadcrumbs;
