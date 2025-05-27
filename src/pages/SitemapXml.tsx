
import { useEffect } from 'react';
import sitemapContent from '@/data/sitemap.xml?raw';

const SitemapXml = () => {
  useEffect(() => {
    // Set the correct content type for sitemap.xml
    const response = new Response(sitemapContent, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
      },
    });
    
    // Replace the current page with the sitemap.xml content
    document.open();
    document.write(sitemapContent);
    document.close();
    
    // Set the content type on the document
    if (document.contentType) {
      (document as any).contentType = 'application/xml';
    }
  }, []);

  return (
    <pre style={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
      {sitemapContent}
    </pre>
  );
};

export default SitemapXml;
