import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './index.js',
      name: 'Xgui',
      formats: ['es'],
      fileName: 'xg-ui',
    },
    minify: true,
  },
});
