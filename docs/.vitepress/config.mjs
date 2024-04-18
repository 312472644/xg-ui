import { defineConfig } from 'vitepress';
import { sidebar, socialLinks, nav } from '../routers';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Xg UI',
  lang: 'zh-CN',
  description: 'Xg UI使用文档说明',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    logo: '/logo.svg',
    nav,
    sidebar,
    socialLinks,
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You',
    },
  },
});
