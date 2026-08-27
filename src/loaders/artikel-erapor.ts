import { mkdir, writeFile, access } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import type { Loader, LoaderContext } from 'astro/loaders';

/**
 * Memuat artikel dari e-Rapor, bukan dari berkas markdown.
 *
 * Sebelumnya artikel ditulis di Decap CMS dan disimpan sebagai markdown di
 * repo ini. Sejak e-Rapor jadi tempat menulisnya, situs ini tinggal
 * merendernya — dan seluruh GTK bisa menulis berita tanpa akun terpisah.
 *
 * TIGA HAL YANG TIDAK BOLEH BERUBAH:
 *
 * 1. `id` = slug artikel, sama persis dengan nama berkas markdown dulu.
 *    Itulah yang membentuk /berita/{id}. Sebagian URL sudah terindeks sejak
 *    2016; satu yang bergeser berarti satu tautan mati.
 *
 * 2. Bentuk `data` sama dengan skema lama. Karena itu `[...id].astro`,
 *    halaman kategori, dan paginasi tidak perlu disentuh sama sekali.
 *
 * 3. Gambar DIUNDUH ke dalam situs saat build, bukan ditautkan ke e-Rapor.
 *    Kalau ditautkan, halaman sekolah ikut kosong tiap kali e-Rapor sedang
 *    tidak sehat — dan scripts/generate-og.mjs, yang membaca berkas di
 *    public/uploads/berita, tidak akan menemukan apa pun.
 */

type ArtikelApi = {
  slug: string;
  judul: string;
  ringkasan: string | null;
  isi: string | null;
  kategori: string;
  jenjang: string[];
  cover: string | null;
  penulis: string;
  terbit_at: string | null;
};

const FOLDER_GAMBAR = 'public/uploads/berita';

async function sudahAda(path: string): Promise<boolean> {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

/**
 * Menyalin gambar sampul ke dalam situs.
 *
 * Mengembalikan jalur publik (`/uploads/berita/…`), atau null bila gagal —
 * artikel tanpa gambar tetap tayang, dan itu memang sudah terjadi pada 21
 * artikel hasil migrasi WordPress.
 */
async function unduhSampul(url: string, logger: LoaderContext['logger']): Promise<string | null> {
  try {
    const nama = decodeURIComponent(new URL(url).pathname.split('/').pop() ?? '');
    if (!nama) return null;

    const tujuan = join(FOLDER_GAMBAR, nama);

    // Build Netlify tidak selalu bersih; berkas yang sudah ada tidak diunduh
    // ulang. Nama berkas dari e-Rapor sudah unik (hash), jadi nama yang sama
    // berarti isi yang sama.
    if (await sudahAda(tujuan)) return `/uploads/berita/${nama}`;

    const res = await fetch(url);
    if (!res.ok) {
      logger.warn(`Sampul gagal diunduh (${res.status}): ${url}`);
      return null;
    }

    await mkdir(dirname(tujuan), { recursive: true });
    await writeFile(tujuan, Buffer.from(await res.arrayBuffer()));

    return `/uploads/berita/${nama}`;
  } catch (e) {
    logger.warn(`Sampul gagal diunduh: ${url} — ${(e as Error).message}`);
    return null;
  }
}

export function artikelDariErapor(apiUrl: string): Loader {
  return {
    name: 'artikel-erapor',

    async load({ store, logger, parseData, renderMarkdown, generateDigest }: LoaderContext) {
      const endpoint = `${apiUrl.replace(/\/$/, '')}/api/v2/publik/artikel`;
      logger.info(`Memuat artikel dari ${endpoint}`);

      const res = await fetch(endpoint, { headers: { Accept: 'application/json' } });

      if (!res.ok) {
        /*
          Dilempar, bukan dikembalikan kosong.

          Build yang gagal TIDAK menurunkan situs: Netlify tetap menyajikan
          deploy terakhir yang berhasil. Sebaliknya, build yang "berhasil"
          dengan nol artikel akan MENERBITKAN halaman berita yang kosong —
          dan itulah yang benar-benar merusak.
        */
        throw new Error(`Gagal memuat artikel dari e-Rapor: HTTP ${res.status}`);
      }

      const { data } = (await res.json()) as { data: ArtikelApi[] };

      if (!Array.isArray(data) || data.length === 0) {
        throw new Error('e-Rapor mengembalikan nol artikel — build dihentikan.');
      }

      store.clear();

      for (const a of data) {
        const cover = a.cover ? await unduhSampul(a.cover, logger) : null;

        const isi = a.isi ?? '';

        const data_ = await parseData({
          id: a.slug,
          data: {
            title: a.judul,
            description: a.ringkasan ?? '',
            pubDate: a.terbit_at ?? new Date().toISOString(),
            author: a.penulis,
            category: a.kategori,
            tags: a.jenjang ?? [],
            ...(cover ? { cover } : {}),
            draft: false,
          },
        });

        store.set({
          id: a.slug,
          data: data_,
          body: isi,
          digest: generateDigest(isi),
          // Tanpa ini `render(post)` di [...id].astro tidak punya apa pun
          // untuk dirender, dan tiap halaman artikel tampil kosong.
          rendered: await renderMarkdown(isi),
        });
      }

      logger.info(`${data.length} artikel dimuat.`);
    },
  };
}
