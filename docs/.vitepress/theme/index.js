import defaultTheme from 'vitepress/theme';

import './styles/index.scss';

export default {
  extends: defaultTheme,
  enhanceApp({ app, router, siteData }) {
    console.log('siteData', siteData);
    // app.component('XgFooter', XgFooter);
  },
};
