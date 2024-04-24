import CodeCard from './CodeCard.vue';
import { naiveComponents } from './naive-ui';
// import XgElement from '@xg-ui/element';
// import '@xg-ui/element/style.css';

const components = [CodeCard, ...naiveComponents];

const install = app => {
  components.forEach(component => {
    app.component(component.name, component);
  });
};

export default install;
