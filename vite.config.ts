
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    {
      name: 'robots-txt-middleware',
      configureServer(server) {
        server.middlewares.use('/robots.txt', (req, res, next) => {
          if (req.method === 'GET') {
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

            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.setHeader('Cache-Control', 'public, max-age=86400');
            res.end(robotsContent);
          } else {
            next();
          }
        });
      },
      configurePreviewServer(server) {
        server.middlewares.use('/robots.txt', (req, res, next) => {
          if (req.method === 'GET') {
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

            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.setHeader('Cache-Control', 'public, max-age=86400');
            res.end(robotsContent);
          } else {
            next();
          }
        });
      }
    }
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
