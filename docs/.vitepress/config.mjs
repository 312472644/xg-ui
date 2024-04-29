import { defineConfig } from 'vitepress';
import baseConfig from './base-config.mjs';
import { sidebar, socialLinks, nav } from '../routers';

// https://vitepress.dev/zh/reference/site-config
export default defineConfig({
  ...baseConfig,
  themeConfig: {
    logo: '/orange.svg',
    nav,
    sidebar,
    socialLinks,
    outline: [3, 4],
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
  vite: {
    build: {
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          assetFileNames: chunkInfo => {
            const { name } = chunkInfo;
            if (name.includes('.css')) {
              return 'assets/styles/[name]-[hash][extname]';
            } else if (['.woff2', '.woff', '.ttf', '.eot'].some(ext => name.includes(ext))) {
              return 'assets/fonts/[name]-[hash][extname]';
            } else if (['.svg', '.png', '.jpg', '.jpeg', '.gif'].some(ext => name.includes(ext))) {
              return 'assets/images/[name]-[hash][extname]';
            }
          },
          chunkFileNames: chunkInfo => {
            const { facadeModuleId } = chunkInfo;
            if (facadeModuleId?.includes('themes')) {
              return 'chunk/themes/[name].js';
            }
            if (facadeModuleId?.includes('langs')) {
              return 'chunk/langs/[name].js';
            }
            return 'chunk/[name]-[hash].js';
          },
        },
      },
    },
  },
});
