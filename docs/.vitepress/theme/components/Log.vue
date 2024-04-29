<template>
  <ClientOnly>
    <div class="log">
      <div v-for="log in list" class="log-item">
        <div class="log-version">{{ log.version }}</div>
        <div class="log-date">{{ log.date }}</div>
        <div v-for="content in log.content" class="log-list">
          <div class="log-type">
            <span v-if="content.type === 'Features'">🎉</span>
            <span v-if="content.type === 'Bug Fixes'">🐞</span>
            <span>{{ content.type }}</span>
          </div>
          <div class="log-list-box">
            <ul>
              <li v-for="logItem in content.list" class="log-content-item">
                <span v-if="content.type === '🎉'">🐞</span>
                <span>{{ logItem }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
<script setup>
defineOptions({
  name: 'Log',
});

defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});
</script>
<style lang="scss">
.log {
  .log-version {
    font-size: 22px;
    font-weight: 500;
    margin: 28px 0 20px 0;
  }
  .log-item {
    margin-bottom: 50px;
  }
  .log-date {
    display: inline-block;
    border-radius: 4px;
    padding: 2px 8px;
    color: #333639;
    font-size: 12px;
    background-color: #f4f4f8;
  }
  .log-list {
    .log-type {
      font-size: 18px;
      margin: 28px 0 20px 0;
    }
    .log-list-box {
      padding-left: 10px;
      .log-content-item {
        font-size: 14px;
      }
    }
  }
}
</style>
