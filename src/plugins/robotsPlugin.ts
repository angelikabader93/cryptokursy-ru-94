
import type { Plugin } from 'vite';
import fs from 'fs';
import path from 'path';

export function robotsPlugin(): Plugin {
  return {
    name: 'robots-txt-plugin',
    configureServer(server) {
      server.middlewares.use('/robots.txt', (req, res) => {
        const robotsPath = path.resolve(process.cwd(), 'public/robots.txt');
        
        if (fs.existsSync(robotsPath)) {
          const content = fs.readFileSync(robotsPath, 'utf-8');
          res.setHeader('Content-Type', 'text/plain; charset=utf-8');
          res.setHeader('Cache-Control', 'public, max-age=86400');
          res.end(content);
        } else {
          res.statusCode = 404;
          res.end('robots.txt not found');
        }
      });
    },
    generateBundle(options, bundle) {
      // Ensure robots.txt is included in build
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
