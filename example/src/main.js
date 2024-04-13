import { createApp } from 'vue';
import App from './App.vue';
import XgElement from '@xg-ui/element';
import '@xg-ui/element/dist/style.css';

const app = createApp(App);
app.use(XgElement);

app.mount('#app');
