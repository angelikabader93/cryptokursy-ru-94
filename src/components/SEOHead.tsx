
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NoScriptStyles from './NoScriptStyles';

interface SEOHeadProps {
  title: string;
  description: string;
  ogImage?: string;
  canonical?: string;
  structuredData?: any;
  articleTags?: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  ogImage = "https://cryptokursy.ru/lovable-uploads/1dbf4abc-bae2-4700-990c-ccd769aa7dee.png",
  canonical,
  structuredData,
  articleTags,
  author = "КриптоКурсы",
  publishedTime,
  modifiedTime
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
        <meta property="og:locale" content="ru_RU" />
        
        {/* Article specific Open Graph */}
        {publishedTime && <meta property="article:published_time" content={publishedTime} />}
        {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
        {author && <meta property="article:author" content={author} />}
        {articleTags && articleTags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))}
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content={`${title} - КриптоКурсы`} />
        <meta name="twitter:site" content="@cryptokursy" />
        <meta name="twitter:creator" content="@cryptokursy" />
        
        {/* Enhanced meta tags for SEO */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow" />
        <meta name="author" content={author} />
        <meta name="language" content="ru" />
        <meta httpEquiv="content-language" content="ru-RU" />
        <meta name="geo.region" content="RU" />
        <meta name="geo.country" content="Russia" />
        
        {/* Enhanced technical meta tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="КриптоКурсы" />
        <meta name="application-name" content="КриптоКурсы" />
        <meta name="msapplication-TileColor" content="#0891b2" />
        <meta name="theme-color" content="#0891b2" />
        
        {/* Page-specific meta tags */}
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Preconnect для улучшения производительности */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Favicon and touch icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/lovable-uploads/1dbf4abc-bae2-4700-990c-ccd769aa7dee.png" />
        
        {/* Alternative languages - if applicable */}
        <link rel="alternate" hrefLang="ru" href={currentUrl} />
        <link rel="alternate" hrefLang="x-default" href={currentUrl} />
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
