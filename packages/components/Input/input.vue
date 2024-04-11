<template>
  <input class="input" />
</template>
<script setup></script>
<style>
.input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.3s;
  &:focus {
    border-color: #007bff;
  }
}
</style>
