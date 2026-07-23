import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Koleksi Berita — artikel dari Al Akhyar (dan hasil migrasi WordPress).
// Dikelola staf non-teknis lewat Decap CMS (public/admin), disimpan sebagai Markdown.
const berita = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/berita' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Humas Al Akhyar'),
    category: z
      .enum(['Prestasi', 'Kegiatan', 'Pengumuman', 'Akademik', 'Umum'])
      .default('Umum'),
    // Jenjang terkait artikel (TK/SD/SMP/SMA/Yayasan) — hasil migrasi WordPress
    tags: z.array(z.string()).default([]),
    // Path publik ke gambar (diunggah lewat Decap CMS ke /uploads/berita/…)
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { berita };
