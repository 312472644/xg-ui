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
.button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
}
</style>
