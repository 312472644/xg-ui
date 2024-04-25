import CodeCard from './CodeCard.vue';
import PropTable from './PropTable.vue';
import MethodsTable from './MethodsTable.vue';
import SlotTable from './SlotTable.vue';
import { naiveComponents } from './naive-ui';
// import XgElement from '@xg-ui/element';
// import '@xg-ui/element/style.css';

const components = [CodeCard, PropTable, MethodsTable, SlotTable, ...naiveComponents];

const install = app => {
  components.forEach(component => {
    app.component(component.name, component);
  });
};

export default install;
