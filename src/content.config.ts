import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

import { artikelDariErapor } from './loaders/artikel-erapor';

// Koleksi Berita — artikel dari Al Akhyar (dan hasil migrasi WordPress).
// Dikelola staf non-teknis lewat Decap CMS (public/admin), disimpan sebagai Markdown.
/**
 * Dari mana artikel dimuat.
 *
 * Sejak e-Rapor jadi tempat menulis berita, situs ini tinggal merendernya.
 * Sakelarnya satu variabel lingkungan, dan itu DISENGAJA: kalau kelak
 * e-Rapor bermasalah, mengosongkan ARTIKEL_API_URL membuat situs kembali
 * membangun dari markdown di repo ini — tanpa deploy kode, tanpa panik.
 *
 * Berkas markdown lama sengaja TIDAK dihapus. Ia jadi jaring pengaman
 * selama masa peralihan, dan biayanya cuma ruang di repo.
 */
const API = import.meta.env.ARTIKEL_API_URL ?? process.env.ARTIKEL_API_URL;

const berita = defineCollection({
  loader: API
    ? artikelDariErapor(API)
    : glob({ pattern: '**/*.{md,mdx}', base: './src/content/berita' }),
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
