<template>
  <div>
    <XgInput />
    <div ref="div"></div>
  </div>
</template>
//
<script setup>
import { onMounted, ref } from 'vue';
import { useAnimation } from '@xg-ui/hooks';

const div = ref(null);

onMounted(() => {
  useAnimation({
    duration: 10 * 1000,
    from: 1,
    to: 0,
    progress: value => {
      console.log('value', value);
      div.value.innerHTML = parseFloat(value).toFixed(2);
    },
    complete: () => {
      console.log('end');
    },
  });
});
</script>

<style></style>
