
import type { Plugin } from 'vite';
import fs from 'fs';
import path from 'path';

export function robotsPlugin(): Plugin {
  return {
    name: 'robots-txt-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/robots.txt') {
          const robotsPath = path.resolve(process.cwd(), 'public/robots.txt');
          
          if (fs.existsSync(robotsPath)) {
            const content = fs.readFileSync(robotsPath, 'utf-8');
            res.writeHead(200, {
              'Content-Type': 'text/plain; charset=utf-8',
              'Cache-Control': 'public, max-age=86400'
            });
            res.end(content);
            return;
          } else {
            res.writeHead(404);
            res.end('robots.txt not found');
            return;
          }
        }
        next();
      });
    },
    generateBundle() {
      // Ensure robots.txt is included in build with correct MIME type
      const robotsPath = path.resolve(process.cwd(), 'public/robots.txt');
      if (fs.existsSync(robotsPath)) {
        const content = fs.readFileSync(robotsPath, 'utf-8');
        this.emitFile({
          type: 'asset',
          fileName: 'robots.txt',
          source: content
        });
      }
    }
  };
}
