import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const { utils } = require('@xg-ui/build');
const { getEntryFileNames } = utils;

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: './index.js',
    },
    cssCodeSplit: false,
    rollupOptions: {
      output: [
        {
          format: 'es',
          entryFileNames: chunkInfo => getEntryFileNames(chunkInfo, '.mjs'),
          preserveModules: true,
          exports: 'named',
          dir: 'dist/es',
        },
        {
          format: 'cjs',
          entryFileNames: chunkInfo => getEntryFileNames(chunkInfo, '.js'),
          preserveModules: true,
          exports: 'named',
          dir: 'dist/lib',
        },
        {
          format: 'umd',
          name: 'XgUI',
          entryFileNames: '[name].full.min.js',
          exports: 'named',
          assetFileNames: 'index.css',
          dir: 'dist/dist',
        },
      ],
      external: ['vue'],
    },
  },
});
