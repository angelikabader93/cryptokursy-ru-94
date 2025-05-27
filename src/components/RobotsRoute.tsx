
import { useEffect } from 'react';

const RobotsRoute = () => {
  useEffect(() => {
    const robotsContent = `User-agent: *
Allow: /

# Основные страницы
Allow: /courses/
Allow: /about
Allow: /contact
Allow: /faq
Allow: /privacy
Allow: /terms

# Запрещаем индексацию технических файлов
Disallow: /assets/
Disallow: /*.js
Disallow: /*.css
Disallow: /*.json

# Указываем местоположение карты сайта
Sitemap: https://cryptokursy.ru/sitemap.xml

# Время задержки для ботов (в секундах)
Crawl-delay: 1
`;

    // Set the content type and send the robots.txt content
    const response = new Response(robotsContent, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=86400'
      }
    });

    // Replace the current page with the robots.txt content
    document.open();
    document.write(robotsContent);
    document.close();
    
    // Set the correct content type
    if (document.contentType !== 'text/plain') {
      window.location.replace(`data:text/plain;charset=utf-8,${encodeURIComponent(robotsContent)}`);
    }
  }, []);

  return null;
};

export default RobotsRoute;
