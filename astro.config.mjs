// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// Gambar di dalam isi artikel (hasil migrasi WordPress / e-Rapor) dimuat malas
// agar halaman berita yang berisi banyak foto tetap ringan di HP.
// Ditulis sendiri (tanpa dependensi) — cukup menelusuri pohon HTML.
function rehypeGambarMalas() {
  const telusuri = (node) => {
    if (node.type === 'element' && node.tagName === 'img') {
      node.properties.loading ??= 'lazy';
      node.properties.decoding ??= 'async';
    }
    node.children?.forEach(telusuri);
  };
  return (tree) => telusuri(tree);
}

// https://astro.build/config
export default defineConfig({
  // Domain utama = apex (www di-redirect ke sini oleh Netlify).
  // Nilai ini dipakai untuk canonical URL, sitemap, dan Open Graph —
  // harus sama dengan primary domain di Netlify agar SEO tidak terpecah.
  site: 'https://alakhyar.sch.id',
  vite: {
    plugins: [tailwindcss()]
  },

  markdown: {
    rehypePlugins: [rehypeGambarMalas],
  },

  integrations: [
    // /admin/ (Decap CMS) bukan halaman publik — jangan diajukan ke mesin pencari
    sitemap({ filter: (page) => !page.includes('/admin/') }),
    mdx(),
  ]
});