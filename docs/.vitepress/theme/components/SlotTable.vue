<template>
  <BaseTable :data="data" :columns="columns" />
</template>
<script setup>
import BaseTable from './BaseTable.vue';
import { defineProps, h } from 'vue';

defineOptions({
  name: 'SlotTable',
});

const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
});

const columns = [
  { title: '名称', key: 'name' },
  {
    title: '参数',
    key: 'type',
    render: row => h('span', { class: 'special-column' }, row.type),
  },
  { title: '说明', key: 'direction' },
  { title: '版本', key: 'version', width: '100px' },
];
</script>
