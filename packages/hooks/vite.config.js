import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'index.js',
      formats: ['es', 'cjs'],
      fileName: format => `index.${format === 'es' ? 'mjs' : format}`,
    },
  },
});
