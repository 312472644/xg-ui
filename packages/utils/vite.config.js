import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './index.js',
      formats: ['es', 'cjs', 'umd'],
      name: 'xg-utils',
      fileName: format => `xg-utils.${format}.js`,
    },
    // rollupOptions: {},
  },
});
