
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import BreadcrumbSchema from './BreadcrumbSchema';

interface BreadcrumbItem {
  name: string;
  url?: string;
}

interface CourseBreadcrumbsProps {
  items: BreadcrumbItem[];
}

const CourseBreadcrumbs: React.FC<CourseBreadcrumbsProps> = ({ items }) => {
  const schemaItems = items.map(item => ({
    name: item.name,
    url: item.url ? `https://cryptokursy.ru${item.url}` : `https://cryptokursy.ru${window.location.pathname}`
  }));

  return (
    <>
      <BreadcrumbSchema items={schemaItems} />
      <Breadcrumb>
        <BreadcrumbList>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                {item.url ? (
                  <BreadcrumbLink asChild>
                    <Link to={item.url}>{item.name}</Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>{item.name}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {index < items.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
};

export default CourseBreadcrumbs;
