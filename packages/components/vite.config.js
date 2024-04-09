import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const { utils } = require('@xg-ui/build');
const { getEntry } = utils;

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: getEntry('./src').concat('./index.js'),
      formats: ['es'],
    },
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        chunkFileNames: 'lib/[name].js',
        entryFileNames: chunkInfo => {
          const facadeModuleId = chunkInfo.facadeModuleId;
          if (facadeModuleId.includes('index.js')) return 'index.js';
          const name = facadeModuleId.split('/').slice(-2, -1).join('');
          return `${name}/index.js`;
        },
      },
      external: [/@xg-ui.*/, 'vue'],
    },
    sourcemap: false,
    minify: true,
  },
});
