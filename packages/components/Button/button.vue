<template>
  <button class="button" @click="onClick">
    <slot>button</slot>
  </button>
</template>
<script setup>
defineOptions({
  name: 'XgButton',
});
</script>
<style lang="scss"></style>
