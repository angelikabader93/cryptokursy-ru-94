
import { useEffect } from 'react';
import { robotsContent } from '@/data/robotsContent';

const RobotsRoute = () => {
  useEffect(() => {
    // Устанавливаем правильный Content-Type для robots.txt
    const response = new Response(robotsContent, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=86400'
      }
    });
    
    // Заменяем текущий документ на robots.txt
    document.open();
    document.write(robotsContent);
    document.close();
    
    // Устанавливаем MIME-тип документа
    if (document.contentType) {
      document.contentType = 'text/plain';
    }
  }, []);

  return null;
};

export default RobotsRoute;
