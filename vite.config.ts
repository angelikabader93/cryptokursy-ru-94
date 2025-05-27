
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    headers: {
      'Cache-Control': 'no-cache'
    }
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    {
      name: 'robots-txt-handler',
      configureServer(server: any) {
        server.middlewares.use('/robots.txt', (req: any, res: any, next: any) => {
          res.setHeader('Content-Type', 'text/plain; charset=utf-8');
          next();
        });
      },
      generateBundle(options: any, bundle: any) {
        // Ensure robots.txt is treated as text/plain in production
        if (bundle['robots.txt']) {
          bundle['robots.txt'].fileName = 'robots.txt';
        }
      }
    }
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        robots: path.resolve(__dirname, 'public/robots.txt')
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'robots.txt') {
            return 'robots.txt';
          }
          return assetInfo.name || '';
        }
      }
    }
  },
  assetsInclude: ['**/*.txt']
}));
