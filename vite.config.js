import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    cors: true, // This enables CORS for all origins during development
  },
  optimizeDeps: {
    exclude: ['firebase-functions'], // Exclude firebase-functions from optimization
  },
  resolve: {
    alias: {
      'async_hooks': false, // Prevent async_hooks resolution
    },
  },
});
