import Home from './Home.vue';

const components = [Home];

const install = app => {
  components.forEach(component => {
    app.component(component.name, component);
  });
};

export default install;
