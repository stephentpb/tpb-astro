import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify'; // We will add this for deployment

export default defineConfig({
  output: 'hybrid', // Required for the Studio to work on a route
  adapter: netlify(), 
  integrations: [
    react(),
    sanity({
      projectId: 'ots6ygg8', // Replace with your ID
      dataset: 'production',
      studioBasePath: '/admin', // The route where Studio will live
    }),
  ],
});