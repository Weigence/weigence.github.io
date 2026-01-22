import { defineConfig } from 'vite';

export default defineConfig({
  root: './',
  base: '/',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './index.html',
        privacy: './privacy-policy.html'
      }
    }
  },
  server: {
    open: true,
    port: 3000,
    host: true
  }
});
