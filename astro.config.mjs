// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';
import tailwind from 'tailwindcss';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'Hytale',
          customCss: [
              './src/fonts/font-web.css',
              './src/styles/global.css',
          ],
          sidebar: [
              {
                  label: 'Guides',
                  items: [
                      // Each item here is one entry in the navigation menu.
                      { label: 'Example Guide', slug: 'guides/example' },
                  ],
              },
              {
                  label: 'Reference',
                  autogenerate: { directory: 'reference' },
              },
          ],
      }),
	],

  vite: {
    plugins: [tailwindcss()],
  },
});