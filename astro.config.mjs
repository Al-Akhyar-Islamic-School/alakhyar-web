// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // Domain utama = apex (www di-redirect ke sini oleh Netlify).
  // Nilai ini dipakai untuk canonical URL, sitemap, dan Open Graph —
  // harus sama dengan primary domain di Netlify agar SEO tidak terpecah.
  site: 'https://alakhyar.sch.id',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap(), mdx()]
});