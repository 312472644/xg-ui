# 按钮 Button

按钮用来触发一些操作。

### 基础

<CodeCard :code="code" category="基础">
  <template #desc>
    <span>按钮的<code>type</code>分别为<code>default</code>、<code>primary</code>、<code>info</code>、<code>success</code>。</span>
  </template>
  <template #demo>
    <n-button>Primary</n-button>
  </template>
</CodeCard>

### 次要

<CodeCard :code="code" category="次要">
  <template #desc>
    <span>按钮的<code>type</code>分别为<code>default</code>、<code>primary</code>、<code>info</code>、<code>success</code>。</span>
  </template>
  <template #demo>
    <n-button>Primary</n-button>
  </template>
</CodeCard>

### 事件

<CodeCard :code="code" category="事件">
  <template #desc>
    <span>按钮的<code>type</code>分别为<code>default</code>、<code>primary</code>、<code>info</code>、<code>success</code>。</span>
  </template>
  <template #demo>
    <n-button>Primary</n-button>
  </template>
</CodeCard>

### API

### Button Props

<PropTable :data="propTableData"></PropTable>

### Button Methods

<MethodsTable :data="methodsTableData"></MethodsTable>

### Button Slot

<SlotTable :data="slotTableData"></SlotTable>

<script setup>
import { ref, onMounted } from 'vue'

const count = ref(0)

const code = `<template>
   <n-button>Default</n-button>
   <n-button type="info">Info</n-button>
</template>
`;

const propTableData = ref([
  {name: 'type', desc: '按钮类型', type: 'string', option: 'default | primary | info | success', default: 'default'},
  {name: 'type', desc: '按钮类型', type: 'string', option: 'default | primary | info | success', default: 'default'},
  {name: 'type', desc: '按钮类型', type: 'string', option: 'default | primary | info | success', default: 'default'}
])

const methodsTableData = ref([
  {name: 'type', desc: '按钮类型', type: 'string', option: 'default | primary | info | success', default: 'default'},
  {name: 'type', desc: '按钮类型', type: 'string', option: 'default | primary | info | success', default: 'default'},
  {name: 'type', desc: '按钮类型', type: 'string', option: 'default | primary | info | success', default: 'default'}
])

const slotTableData = ref([
  {name: 'type', desc: '按钮类型', type: 'string', option: 'default | primary | info | success', default: 'default'},
  {name: 'type', desc: '按钮类型', type: 'string', option: 'default | primary | info | success', default: 'default'},
  {name: 'type', desc: '按钮类型', type: 'string', option: 'default | primary | info | success', default: 'default'}
])
</script>
