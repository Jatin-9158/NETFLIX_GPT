import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    exclude: ['firebase-functions'], // Exclude firebase-functions from optimization
  },
  resolve: {
    alias: {
      'async_hooks': false, // Prevent async_hooks resolution
    },
  },
});
