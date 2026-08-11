// Membuat gambar pratinjau (Open Graph) untuk setiap artikel Berita.
//
// Kenapa perlu: foto sampul yang diunggah guru bisa 1–5 MB dengan rasio
// bermacam-macam. WhatsApp tidak menampilkan pratinjau bila gambarnya terlalu
// besar, dan Facebook memotong gambar yang rasionya tidak 1.91:1.
//
// Skrip ini menghasilkan turunan 1200×630 (<200 KB) di public/og/ dan dijalankan
// otomatis sebelum `astro build` lewat npm script "prebuild".

import { readdir, readFile, mkdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const DIR_BERITA = 'src/content/berita';
const DIR_PUBLIC = 'public';
const DIR_OG = 'public/og';
const LEBAR = 1200;
const TINGGI = 630;

/** Ambil nilai `cover:` dari frontmatter sebuah file Markdown. */
async function ambilCover(berkas) {
  const isi = await readFile(berkas, 'utf-8');
  const fm = isi.split('---')[1] || '';
  const m = fm.match(/^cover:\s*(.+)$/m);
  return m ? m[1].trim().replace(/^["']|["']$/g, '') : null;
}

/** Nama berkas OG dari path cover: /uploads/berita/foto.png -> foto.jpg */
export function namaOg(cover) {
  return path.basename(cover).replace(/\.[^.]+$/, '') + '.jpg';
}

async function main() {
  if (!existsSync(DIR_BERITA)) {
    console.log('[og] folder berita tidak ada — dilewati');
    return;
  }
  await mkdir(DIR_OG, { recursive: true });

  const berkas = (await readdir(DIR_BERITA)).filter((f) => /\.mdx?$/.test(f));
  let dibuat = 0;
  let dilewati = 0;
  let gagal = 0;

  for (const f of berkas) {
    const cover = await ambilCover(path.join(DIR_BERITA, f));
    if (!cover || !cover.startsWith('/')) continue;

    const sumber = path.join(DIR_PUBLIC, cover);
    if (!existsSync(sumber)) continue;

    const tujuan = path.join(DIR_OG, namaOg(cover));

    // lewati bila hasil sudah ada dan lebih baru dari sumbernya
    if (existsSync(tujuan)) {
      const [s, t] = await Promise.all([stat(sumber), stat(tujuan)]);
      if (t.mtimeMs >= s.mtimeMs) {
        dilewati++;
        continue;
      }
    }

    try {
      await sharp(sumber)
        .resize(LEBAR, TINGGI, { fit: 'cover', position: 'attention' })
        .jpeg({ quality: 80, progressive: true, mozjpeg: true })
        .toFile(tujuan);
      dibuat++;
    } catch (e) {
      gagal++;
      console.warn(`[og] gagal memproses ${cover}: ${e.message}`);
    }
  }

  console.log(`[og] dibuat: ${dibuat}, sudah ada: ${dilewati}, gagal: ${gagal}`);
}

main().catch((e) => {
  // Jangan jatuhkan build hanya karena pratinjau gagal dibuat.
  console.warn('[og] dilewati karena galat:', e.message);
});
