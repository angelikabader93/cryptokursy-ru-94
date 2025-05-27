
import React from 'react';
import { Link } from 'react-router-dom';
import BreadcrumbSchema from './BreadcrumbSchema';

interface CourseBreadcrumbsProps {
  courseName: string;
  courseUrl?: string;
}

const CourseBreadcrumbs: React.FC<CourseBreadcrumbsProps> = ({ 
  courseName, 
  courseUrl = window.location.pathname 
}) => {
  const breadcrumbItems = [
    {
      name: "Главная",
      item: "https://cryptokursy.ru/"
    },
    {
      name: "Курсы", 
      item: "https://cryptokursy.ru/#courses"
    },
    {
      name: courseName
    }
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <nav aria-label="Хлебные крошки" className="mb-6">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link 
                to="/" 
                className="hover:text-crypto-orange transition-colors"
              >
                Главная
              </Link>
            </li>
            <li className="before:content-['/'] before:mx-2 before:text-gray-400">
              <Link 
                to="/#courses" 
                className="hover:text-crypto-orange transition-colors"
              >
                Курсы
              </Link>
            </li>
            <li className="before:content-['/'] before:mx-2 before:text-gray-400 text-gray-900 font-medium">
              {courseName}
            </li>
          </ol>
        </div>
      </nav>
    </>
  );
};

export default CourseBreadcrumbs;
