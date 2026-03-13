// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://lakingnursery.com',
  output: 'static',

  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },

  prefetch: {
    defaultStrategy: 'hover',
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
    mdx(),
  ],
});
