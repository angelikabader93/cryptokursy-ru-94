
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

    // Заменяем содержимое страницы на robots.txt
    document.open();
    document.write(robotsContent);
    document.close();
  }, []);

  return null;
};

export default RobotsHandler;
