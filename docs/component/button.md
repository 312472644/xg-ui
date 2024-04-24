# 按钮 Button

按钮用来触发一些操作。

## 基础用法1

<CodeCard :code="code">
  <template #desc>
    <span>按钮的<code>type</code>分别为<code>default</code>、<code>primary</code>、<code>info</code>、<code>success</code>。</span>
  </template>
  <template #demo>
    <n-button>Primary</n-button>
  </template>
</CodeCard>

## 基础用法2
<CodeCard :code="code">
  <template #desc>
    <span>按钮的<code>type</code>分别为<code>default</code>、<code>primary</code>、<code>info</code>、<code>success</code>。</span>
  </template>
  <template #demo>
    <n-button>Primary</n-button>
  </template>
</CodeCard>

## 基础用法3
<CodeCard :code="code">
  <template #desc>
    <span>按钮的<code>type</code>分别为<code>default</code>、<code>primary</code>、<code>info</code>、<code>success</code>。</span>
  </template>
  <template #demo>
    <n-button>Primary</n-button>
  </template>
</CodeCard>

<script setup>
import { ref, onMounted } from 'vue'

const count = ref(0)

const code = `<template>
   <n-button>Default</n-button>
   <n-button type="info">Info</n-button>
</template>
`;
</script>
