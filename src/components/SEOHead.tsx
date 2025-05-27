
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NoScriptStyles from './NoScriptStyles';

interface SEOHeadProps {
  title: string;
  description: string;
  ogImage?: string;
  canonical?: string;
  structuredData?: any;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  ogImage = "https://images.unsplash.com/photo-1639322537231-2f206e06af84?q=80&w=2032&auto=format&fit=crop",
  canonical,
  structuredData
}) => {
  const fullTitle = `${title} | КриптоКурсы`;
  const currentUrl = canonical || (typeof window !== 'undefined' ? window.location.href : '');

  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="" />
        
        {/* Canonical URL */}
        {currentUrl && <link rel="canonical" href={currentUrl} />}
        
        {/* Open Graph */}
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="КриптоКурсы" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`${title} - КриптоКурсы`} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content={`${title} - КриптоКурсы`} />
        
        {/* Enhanced meta tags for SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="КриптоКурсы" />
        <meta name="language" content="ru" />
        <meta httpEquiv="content-language" content="ru-RU" />
        
        {/* Progressive Enhancement hint */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Preconnect для улучшения производительности */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </Helmet>
      
      <NoScriptStyles />
      
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </>
  );
};

export default SEOHead;
