import { NButton, NMessageProvider, NIcon, NTooltip } from 'naive-ui';

const componentList = [NButton, NMessageProvider, NIcon, NTooltip];

export const naiveComponents = componentList.map(item => {
  return {
    ...item,
    name: 'N' + item.name,
  };
});
