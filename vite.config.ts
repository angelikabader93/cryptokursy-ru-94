
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
    },
    middlewareMode: false,
    fs: {
      strict: false
    }
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    {
      name: 'configure-response-headers',
      configureServer(server) {
        server.middlewares.use('/robots.txt', (req, res, next) => {
          res.setHeader('Content-Type', 'text/plain; charset=utf-8');
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
  assetsInclude: ['**/*.txt'],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'robots.txt') {
            return 'robots.txt';
          }
          return assetInfo.name || 'assets/[name].[ext]';
        }
      }
    }
  }
}));
