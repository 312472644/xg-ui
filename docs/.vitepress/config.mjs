import { defineConfig } from 'vitepress';
import baseConfig from './base-config.mjs';
import { sidebar, socialLinks, nav } from '../routers';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...baseConfig,
  themeConfig: {
    logo: '/orange.svg',
    nav,
    sidebar,
    socialLinks,
    lastUpdatedText: '最后更新',
    outline: 2,
    outlineTitle: '目录',
    search: {
      provider: 'local',
    },
    docFooter: {
      prev: false,
      next: false,
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Sugar',
    },
  },
});
