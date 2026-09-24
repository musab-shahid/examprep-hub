import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-dom') || id.includes('/react/')) return 'vendor-react';
            if (id.includes('katex')) return 'vendor-katex';
            if (id.includes('lucide-react')) return 'vendor-icons';
            return 'vendor';
          }
          // Lazy question banks stay on their own dynamic imports; group shared lib
          if (id.includes('/src/lib/')) return 'app-lib';
          if (id.includes('/src/data/') && !id.includes('questions-')) return 'app-data';
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});
