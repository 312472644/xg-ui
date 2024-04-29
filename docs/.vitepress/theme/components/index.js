import CodeCard from './CodeCard.vue';
import PropTable from './PropTable.vue';
import MethodsTable from './MethodsTable.vue';
import SlotTable from './SlotTable.vue';
import Log from './Log.vue';
import NaiveUI from 'naive-ui';
// import XgElement from '@xg-ui/element';
// import '@xg-ui/element/style.css';

const components = [CodeCard, PropTable, MethodsTable, SlotTable, Log];

const install = app => {
  components.forEach(component => {
    app.component(component.name, component);
  });
  app.use(NaiveUI);
};

export default install;
