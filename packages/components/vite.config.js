import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// const glob = require('fast-glob');
// const { generateCSS } = require('@xg-ui/build/plugins');
const { utils } = require('@xg-ui/build');
const { getRollupEntry } = utils;

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: {
        index: './index.js',
      },
      formats: ['es'],
    },
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        preserveModules: true,
        // entryFileNames: chunkInfo => {
        //   console.log('chunkInfo', chunkInfo);
        //   const facadeModuleId = chunkInfo.facadeModuleId;
        //   if (facadeModuleId.includes('index.js')) return 'index.js';
        //   const name = facadeModuleId.split('/').slice(-2, -1).join('');
        //   return `${name}/index.js`;
        // },
        // assetFileNames: assetInfo => {
        //   const { name } = assetInfo;
        //   if (name.includes('.css')) {
        //     const cssFolderName = name.replace('.css', '');
        //     return name === 'index.css' ? name : `${cssFolderName}/index.css`;
        //   }
        //   return 'assets/[name].[ext]';
        // },
      },
      external: [/@xg-ui.*/, 'vue'],
    },
    sourcemap: false,
    minify: true,
  },
});
