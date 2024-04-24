import defaultTheme from 'vitepress/theme';
import components from './components';

import XgElement from '@xg-ui/element';
import '@xg-ui/element/style.css';
import './styles/index.scss';

export default {
  extends: defaultTheme,
  enhanceApp({ app }) {
    app.use(components);
    app.use(XgElement);
  },
};
