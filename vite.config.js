import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@': '/src',
      '@assets' : '/src/assets',
      '@helpers' : '/src/helpers',
      '@ui' : '/src/components/ui',
      '@components' : '/src/components',
      '@config' : '/src/config'
    },
  },
});
