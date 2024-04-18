import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const { utils, plugins } = require('@xg-ui/build');
const { getEntryFileNames } = utils;
const { copyDest, removeDest } = plugins;

export default defineConfig({
  plugins: [
    vue(),
    copyDest({
      list: [
        { target: '/theme-chalk/dist', source: '/element/dist/theme-chalk' },
        { target: '/resolver/dist', source: '/element/dist/resolver' },
      ],
    }),
    removeDest(),
  ],
  build: {
    lib: {
      entry: './index.js',
    },
    // cssCodeSplit: true,
    rollupOptions: {
      output: [
        {
          format: 'es',
          entryFileNames: chunkInfo => getEntryFileNames(chunkInfo, '.mjs'),
          preserveModules: true,
          exports: 'named',
          dir: 'dist/es',
          globals: {
            vue: 'Vue',
          },
        },
        {
          format: 'cjs',
          entryFileNames: chunkInfo => getEntryFileNames(chunkInfo, '.js'),
          preserveModules: true,
          exports: 'named',
          dir: 'dist/lib',
          globals: {
            vue: 'Vue',
          },
        },
        {
          format: 'umd',
          name: 'XgUI',
          entryFileNames: '[name].full.min.js',
          exports: 'named',
          assetFileNames: 'index.css',
          dir: 'dist/dist',
          globals: {
            vue: 'Vue',
          },
        },
      ],
      external: ['vue'],
    },
  },
});
