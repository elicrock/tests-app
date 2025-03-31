import { defineConfig } from 'vite';

export default defineConfig({
  base: '/tests-app/',
  server: {
    open: true,
  },
  build: {
    sourcemap: true,
  },
});
