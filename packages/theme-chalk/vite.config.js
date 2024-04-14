import { defineConfig } from 'vite';
const { plugins } = require('@xg-ui/build');
const { removeBundleFile } = plugins;

export default defineConfig({
  plugins: [removeBundleFile({ fileList: ['./dist/theme-chalk.mjs'] })],
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
