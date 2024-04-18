import { createApp } from 'vue';
import App from './App.vue';
// 全部引入
// import XgElement from '@xg-ui/element';
// import '@xg-ui/element/style.css';

// 按需引入 可通过xg-resolver插件自动引入
// import { XgButton } from '@xg-ui/element';
// import '@xg-ui/element/style/button/index.css';
// import '@xg-ui/element/style/input/index.css';

const app = createApp(App);
// 按需引入
// app.use(XgButton);
// app.use(XgElement);

app.mount('#app');
