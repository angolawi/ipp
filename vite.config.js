import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/ipp/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
});
