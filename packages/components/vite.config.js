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
    // cssCodeSplit: false,
    rollupOptions: {
      output: {
        entryFileNames: chunkInfo => {
          const facadeModuleId = chunkInfo.facadeModuleId;
          if (facadeModuleId.includes('index.js')) return 'index.js';
          const name = facadeModuleId.split('/').slice(-2, -1).join('');
          return `${name}/index.js`;
        },
        //assetFileNames: assetInfo => {
        // console.log('assetInfo', assetInfo);
        // const name = assetInfo.name.split('/').slice(-2, -1).join('');
        // return `${name}/[name].[ext]`;
        //},
      },
      external: [
        // 这里是一个正则表达式，匹配所有以 xg-ui 开头的依赖
        /@xg-ui.*/,
        'vue',
      ],
    },
    sourcemap: false,
    minify: false,
  },
});
