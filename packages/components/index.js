import { withInstall } from './utils';
import Button from './src/Button/index.vue';
import Text from './src/Text/index.vue';

// 统一组件导出
export { Button, Text };

export default {
  install: app => {
    for (const comp of [Button, Text]) {
      app.component(comp.name, comp);
    }
  },
};
