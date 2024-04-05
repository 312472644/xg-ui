<template>
  <button class="button" @click="handleClick">button</button>
</template>
<script setup>
import { getDate } from '@xg-ui/shared';

defineOptions({
  name: 'Button',
});

const handleClick = () => {
  console.log('@xg-ui/shared', getDate());
};
</script>
<style>
@import './button.css';
</style>
