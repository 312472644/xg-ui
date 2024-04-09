import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './index.js',
      name: 'xgUiShared',
      formats: ['es', 'cjs', 'umd'],
      fileName: 'xg-ui-shared',
    },
    minify: true,
    rollupOptions: {
      // 当通过npm安装该依赖时，会自动安装外部依赖 所以将依赖放到dependencies中，而不是devDependencies
      external: ['dayjs'],
    },
  },
});
