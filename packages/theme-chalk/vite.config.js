import { defineConfig } from 'vite';
const { plugins } = require('@xg-ui/build');
const { removeBundleFile, generateCSS } = plugins;

export default defineConfig({
  plugins: [removeBundleFile({ fileList: ['./dist/theme-chalk.mjs'] }), generateCSS()],
  build: {
    lib: {
      entry: './index.js',
      formats: ['es'],
    },
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        format: 'es',
        preserveModules: true,
      },
    },
  },
});
