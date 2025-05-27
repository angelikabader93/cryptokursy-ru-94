
import { useEffect } from 'react';

const RobotsHandler = () => {
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
Crawl-delay: 1`;

    // Устанавливаем правильный Content-Type
    const response = new Response(robotsContent, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    });

    // Заменяем содержимое страницы
    document.open();
    document.write(robotsContent);
    document.close();
    document.contentType = 'text/plain';
  }, []);

  return null;
};

export default RobotsHandler;
