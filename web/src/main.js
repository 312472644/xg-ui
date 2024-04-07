import { createApp } from 'vue';
import App from './App.vue';
import xgUi from '@xg-ui/xg-ui';
import '@xg-ui/xg-ui/dist/style.css';

const app = createApp(App);
app.use(xgUi);

app.mount('#app');
