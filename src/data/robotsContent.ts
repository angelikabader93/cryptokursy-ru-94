
export const robotsContent = `User-agent: *
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
