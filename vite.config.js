import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    cors: true, 
  },
  optimizeDeps: {
    exclude: ['firebase-functions'], 
  },
  resolve: {
    alias: {
      'async_hooks': false, 
    },
  },
});
