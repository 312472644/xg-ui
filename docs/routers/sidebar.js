const COMPONENT_PREFIX = '/pages/components';
const UTILS_PREFIX = '/pages/utils';

export default {
  '/pages/components': [
    { text: '版本', items: [{ text: '更新日志', link: COMPONENT_PREFIX + '/changelog' }] },
    {
      text: '开发指南',
      items: [
        { text: '安装', link: COMPONENT_PREFIX + '/install' },
        { text: '快速上手', link: COMPONENT_PREFIX + '/quickstart' },
      ],
    },
    {
      text: '组件',
      items: [
        {
          text: 'Basie',
          items: [
            { text: 'Button 按钮', link: COMPONENT_PREFIX + '/button' },
            { text: 'Input 输入框', link: COMPONENT_PREFIX + '/input' },
          ],
        },
      ],
    },
  ],
  '/pages/utils': [
    {
      text: '工具',
      items: [{ text: 'Color 颜色', link: UTILS_PREFIX + '/index' }],
    },
  ],
};
