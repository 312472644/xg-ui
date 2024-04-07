import { withInstall } from './utils';

// import Button from './src/Button/index.vue';

// 统一组件导出
export { default as Button } from './src/Button/index.vue';
export { default as Text } from './src/Text/index.vue';

function installAll(app) {
  app.install = app => {
    for (const comp of [Button, Text]) {
      app.component(comp.name, comp);
    }
  };
}

export default installAll;
