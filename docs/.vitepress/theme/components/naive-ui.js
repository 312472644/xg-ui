import { NButton, NMessageProvider, NIcon, NTooltip, NDataTable, NTable } from 'naive-ui';

const componentList = [NButton, NMessageProvider, NIcon, NTooltip, NDataTable,];

export const naiveComponents = componentList.map(item => {
  return {
    ...item,
    name: 'N' + item.name,
  };
});
