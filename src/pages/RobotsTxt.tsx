
import { useEffect } from 'react';
import robotsContent from '@/data/robots.txt?raw';

const RobotsTxt = () => {
  useEffect(() => {
    // Set the correct content type for robots.txt
    const response = new Response(robotsContent, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    });
    
    // Replace the current page with the robots.txt content
    document.open();
    document.write(robotsContent);
    document.close();
    
    // Set the content type on the document
    if (document.contentType) {
      (document as any).contentType = 'text/plain';
    }
  }, []);

  return (
    <pre style={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
      {robotsContent}
    </pre>
  );
};

export default RobotsTxt;
