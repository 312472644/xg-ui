import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './index.js',
      name: 'Xgui',
      formats: ['es', 'cjs'],
      fileName: 'xg-ui',
    },
    minify: true,
  },
});
