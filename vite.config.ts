
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import type { ViteDevServer } from "vite";
import type { IncomingMessage, ServerResponse } from "http";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    // Плагин для правильной обработки robots.txt
    {
      name: 'robots-txt-handler',
      configureServer(server: ViteDevServer) {
        server.middlewares.use('/robots.txt', (req: IncomingMessage, res: ServerResponse, next: () => void) => {
          res.setHeader('Content-Type', 'text/plain; charset=utf-8');
          res.setHeader('Cache-Control', 'public, max-age=86400');
          next();
        });
      }
    }
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Обеспечиваем правильную обработку текстовых файлов
  assetsInclude: ['**/*.txt'],
}));
