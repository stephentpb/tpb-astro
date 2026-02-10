import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify'; // We will add this for deployment

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Required for the Studio to work on a route
  output: 'server',

  adapter: netlify(),

  integrations: [
    react(),
    sanity({
      projectId: 'ots6ygg8', // Replace with your ID
      dataset: 'production',
      studioBasePath: '/admin', // The route where Studio will live
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});