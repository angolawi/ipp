import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        quemSomos: resolve(__dirname, 'pages/quem-somos.html'),
        ministerios: resolve(__dirname, 'pages/ministerios.html'),
        contato: resolve(__dirname, 'pages/contato.html'),
        agenda: resolve(__dirname, 'pages/agenda.html'),
      },
    },
  },
});
