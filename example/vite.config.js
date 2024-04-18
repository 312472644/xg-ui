import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Component from 'unplugin-vue-components/vite';
import xgResolver from '@xg-ui/element/resolver';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Component({ resolvers: [xgResolver()] })],
});
