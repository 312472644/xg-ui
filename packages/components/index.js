import { withInstall, getExportCompObject } from './utils';

import Button from './src/Button/index.vue';
import Text from './src/Text/index.vue';

const componentList = [Button, Text];
const component = getExportCompObject(componentList);

// 统一组件导出
export { component };
// 默认导出全部组件，需要安装才能使用
export default withInstall(componentList);
