
import React from 'react';
import { Link } from 'react-router-dom';

interface SEOOptimizedLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
}

const SEOOptimizedLink: React.FC<SEOOptimizedLinkProps> = ({ 
  to, 
  children, 
  className = "",
  title 
}) => {
  return (
    <Link 
      to={to} 
      className={className}
      title={title}
      // Добавляем атрибуты для лучшего SEO
      rel="noopener"
      itemProp="url"
    >
      {children}
    </Link>
  );
};

export default SEOOptimizedLink;
