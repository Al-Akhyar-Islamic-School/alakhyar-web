# Audit Website alakhyar.sch.id — SEO, UX Orang Tua & Kesiapan Pencarian AI

Tanggal audit: 28 Oktober 2026 · Cakupan: situs Astro di repo ini (produksi: https://alakhyar.sch.id, Netlify di belakang Cloudflare).

Prinsip yang dipakai:

- Hanya memperbaiki hal yang sudah diperiksa.
- Tidak mengarang data seperti biaya, jadwal, prestasi, statistik, atau profil guru.
- Tidak mengubah URL publik.
- Tidak menambah dependensi.
- Tidak menyentuh konfigurasi deploy Netlify.

Status: ✅ diperbaiki · 🔎 perlu dicek pihak sekolah atau butuh akses · ℹ️ dicatat, tidak diubah.

---

## 1. Cara audit

- Membaca `AGENTS.md`, `CLAUDE.md`, `README.md`, `PANDUAN-ADMIN.md`, `netlify.toml`, `astro.config.mjs`, `public/robots.txt`, `public/_redirects`, `src/data/site.ts`, layout, komponen, dan semua halaman.
- Memeriksa situs produksi dengan `curl`:
  - header respons;
  - `robots.txt`;
  - `sitemap-0.xml`;
  - canonical;
  - rantai redirect;
  - respons untuk user-agent OAI-SearchBot, GPTBot, ClaudeBot, PerplexityBot, dan Googlebot.
- Membaca meta situs resmi pendaftaran `spmb.alakhyar.sch.id` sebagai sumber siklus SPMB.
- `npm run build` sebelum dan sesudah perbaikan, lalu dua skrip pemeriksa atas `dist/`:
  - **audit HTML:** panjang title dan description, duplikasi, jumlah `<h1>`, `alt` gambar, validitas JSON-LD;
  - **link checker:** semua `href` internal harus menunjuk ke halaman yang benar-benar ter-build.
- Cek visual di browser dengan viewport 375 px: beranda, halaman jenjang, dan kontak.

## 2. Temuan terverifikasi & perbaikan

### A. Informasi sekolah

| # | Temuan | Status |
|---|--------|--------|
| A1 | Akreditasi **SMP Islam tertulis B+**. Menurut sekolah, statusnya kini **A**. | ✅ Diubah jadi A di `src/data/site.ts`. |
| A2 | Label akreditasi TK tertulis **"TK/RA"**. RA adalah sebutan madrasah Kemenag, padahal di situs ini jenjangnya disebut TK/KB atau KB-TK. | ✅ Diubah jadi "TK/KB Islam". 🔎 Lihat B-2 di bagian 4. |
| A3 | Beranda menulis **"SPMB 2026/2027 telah dibuka"** dan "Kuota SPMB TA 2026/2027". Situs SPMB resmi sudah membuka **Early Bird Admission 2027/2028** (9 Sep – 31 Des 2026). | ✅ Tahun SPMB dipusatkan ke `spmb.tahunAjaran` di `site.ts` (sekarang 2027/2028). Nilai ini dipakai di beranda, halaman jenjang, dan kontak. Jadwal dan biaya **tidak** disalin; tetap dirujuk ke situs SPMB. |
| A4 | Lencana hero berbunyi "Terakreditasi A BAN S/M", padahal SMP saat itu masih B+. | ✅ Kini dihitung dari data: tampil "Semua Jenjang Terakreditasi A" hanya bila semua jenjang memang A. |
| A5 | Halaman jenjang tidak menampilkan akreditasi. | ✅ Chip "Akreditasi A" di hero tiap jenjang, diambil dari data yang sama. |
| A6 | Kartu akreditasi di /tentang tidak tertaut ke jenjangnya. Judulnya "BAN-S/M", padahal TK/PAUD diakreditasi lembaga lain dan sejak 2024 keduanya dilebur menjadi BAN-PDM. | ✅ Judul diubah jadi "Akreditasi Setiap Jenjang" dan kartu kini tertaut ke /jenjang/…/. |
| A7 | "900+ peserta didik (TA 2026/2027)" dan "Panduan Kurikulum TA 2026/2027". | ℹ️ Benar untuk tahun ajaran berjalan, jadi tidak diubah. |
| A8 | Ada 14 artikel **konten contoh tema WordPress** (lorem ipsum, mis. "Cinnamon Pancakes", "2nd Grade Reading") di `src/content/berita`. Di produksi sudah tidak tampil karena artikel diambil dari e-Rapor, tetapi akan muncul lagi bila sakelar `ARTIKEL_API_URL` dikosongkan. | ✅ Diberi `draft: true`, tidak dihapus. 28 redirect lama yang menuju artikel ini (sebelumnya 301 lalu 404) dihapus sehingga URL itu kini langsung 404. |

### B. SEO teknis & lokal

| # | Temuan | Status |
|---|--------|--------|
| B1 | **`/admin/` (Decap CMS) ikut masuk sitemap**, padahal diblokir `robots.txt`. Terverifikasi di sitemap produksi. | ✅ `sitemap({ filter })` di `astro.config.mjs`. |
| B2 | **Rantai redirect dua langkah.** Contoh: `/bagi-bagi-doorprize/` → `/berita/bagi-bagi-doorprize` → `/berita/bagi-bagi-doorprize/`. Berlaku untuk 353 redirect URL WordPress lama. Terverifikasi di produksi. | ✅ Semua target redirect internal kini berakhiran `/`, jadi cukup satu langkah. Aturan `/registration` (tautan lama di artikel, sebelumnya 404) ditambahkan ke situs SPMB. |
| B3 | **Tautan internal tanpa garis miring akhir** (`/tentang`, `/berita`, `/jenjang/sd`, dst.), sehingga setiap klik menu kena 301 dulu. URL kanonis memakai `/`. | ✅ Semua tautan internal di menu, footer, kartu, dan paginasi kini memakai `/`. Link checker: 7.127 href internal, 0 rusak, 0 tanpa `/`. |
| B4 | Structured data hanya `School` dengan kota. Tidak ada jalan, telepon, koordinat, logo, atau Instagram. | ✅ `School` lengkap: alamat jalan, telepon, email, koordinat, `hasMap`, logo, `sameAs` Instagram, `areaServed` (Sudiang, Biringkanaya, Kota Makassar), dan 4 `subOrganization` (Preschool, ElementarySchool, MiddleSchool, HighSchool) masing-masing dengan URL, deskripsi, tahun berdiri, dan akreditasi. |
| B5 | Artikel berita tidak punya structured data. | ✅ `NewsArticle`: headline, tanggal, penulis, gambar, dan penerbit yang tertaut ke `#sekolah`. |
| B6 | Judul halaman jenjang berbentuk "SMP Islam Al Akhyar · Sekolah Islam Al Akhyar": berulang dan tanpa lokasi. Deskripsinya juga tidak menyebut lokasi. | ✅ Judul kini "SMP Islam Al Akhyar Makassar — Sudiang, Biringkanaya". `seoDeskripsi` per jenjang (143–157 karakter) disusun dari data booklet yang sudah ada. |
| B7 | Judul beranda "Sekolah Islam Al Akhyar — Unggul & Berakhlak" tidak menyebut kota dan jenjang. | ✅ Kini "Sekolah Islam Al Akhyar Makassar — TK/KB, SD, SMP & SMA Islam". |
| B8 | Meta description tipis atau duplikat: /kontak hanya 32 karakter, /jenjang/ tidak menyebut lokasi, 7 halaman arsip berita memakai deskripsi yang sama persis. | ✅ Ditulis ulang. Halaman arsip kini menyebut nomor halaman. |
| B9 | `og:image:width/height` selalu 1200×630, padahal gambar default (logo) berukuran 1920×1080. | ✅ Ukuran mengikuti gambar sebenarnya. |
| B10 | Halaman 404 tidak `noindex`. | ✅ `noindex, follow`. |
| B11 | Canonical, `robots.txt`, HTTPS, dan pengalihan www → apex. | ℹ️ Sudah benar di produksi. Canonical konsisten dengan sitemap (berakhiran `/`). |
| B12 | 145 dari 163 judul artikel lebih dari 65 karakter (judul asli WordPress + akhiran nama sekolah). | ℹ️ Tidak diubah karena judul artikel adalah konten redaksi. Google hanya memotong tampilannya. |

### C. Performa mobile

| # | Temuan | Status |
|---|--------|--------|
| C1 | Google Fonts dimuat lewat `@import` di dalam CSS. Browser baru mulai mengunduh font setelah CSS selesai diunduh, sehingga terjadi request berantai. | ✅ Dipindah ke `<link>` + `preconnect` di `<head>`. Font dan bobot yang dipakai tetap sama. |
| C2 | Hero beranda (judul + foto utama) ikut animasi *reveal*: tersembunyi sampai JavaScript jalan, lalu memudar 480 ms. Ini menunda LCP di HP. | ✅ Hero tidak lagi dianimasikan dan foto hero diberi `fetchpriority="high"`. Bagian lain tetap beranimasi. |
| C3 | Gambar di dalam isi artikel (682 gambar hasil migrasi) dimuat sekaligus. | ✅ Plugin rehype kecil di `astro.config.mjs` (tanpa dependensi) menambahkan `loading="lazy" decoding="async"`. Plugin ini juga berlaku untuk artikel dari e-Rapor karena memakai `renderMarkdown` Astro. |
| C4 | Logo header (di atas lipatan) diberi `loading="lazy"`. | ✅ `eager`. Cover artikel juga diberi `fetchpriority="high"`. |
| C5 | Gambar isi artikel tidak punya `width/height`, jadi berpotensi menimbulkan pergeseran tata letak (CLS). | ℹ️ Tidak diubah. Perlu membaca dimensi tiap berkas; lebih tepat ditangani di e-Rapor saat artikel disimpan. |

### D. Kesiapan pencarian AI

| # | Temuan | Status |
|---|--------|--------|
| D1 | `robots.txt` mengizinkan semua crawler kecuali `/admin/`. Uji dengan user-agent OAI-SearchBot, GPTBot, ClaudeBot, PerplexityBot, dan Googlebot ke produksi: semua mendapat **200**. | ℹ️ Tidak diubah. 🔎 Lihat C-1. |
| D2 | Fakta inti (lokasi, jenjang, usia, akreditasi, kurikulum, cara daftar, jam kantor) tersebar di beberapa halaman. Tidak ada satu tempat yang menjawabnya secara ringkas. | ✅ FAQ singkat (6 pertanyaan) di /kontak/ beserta `FAQPage` JSON-LD. **Semua jawaban dirangkai otomatis dari `site.ts`**, jadi selalu sinkron dan tidak memuat angka baru. Pertanyaan biaya diarahkan ke narahubung, bukan dijawab dengan angka. |
| D3 | `llms.txt` dan sejenisnya. | ℹ️ Tidak ditambahkan karena belum menjadi standar yang dipakai crawler utama. |

### E. UX orang tua & aksesibilitas

| # | Temuan | Status |
|---|--------|--------|
| E1 | Tidak ada *skip link* untuk pengguna keyboard atau pembaca layar. | ✅ "Lewati ke konten utama", hanya terlihat saat difokus. |
| E2 | Menu tidak menandai halaman aktif untuk pembaca layar. Tombol menu HP tidak punya `aria-controls`, dan labelnya tetap "Buka menu" saat menu terbuka. | ✅ `aria-current="page"`, `aria-controls`, `aria-label` di `<nav>`, dan label tombol yang berganti. |
| E3 | Di footer, tautan Karir (eksternal) terbuka di tab yang sama, tidak konsisten dengan header. | ✅ Kini tab baru dengan tanda ↗. |
| E4 | Di /kontak, judul kartu langsung `<h3>` di bawah `<h1>` (level judul meloncat). | ✅ Menjadi `<h2>` tanpa perubahan tampilan. Ikon emoji diberi `aria-hidden`. |
| E5 | Tombol "Daftar", "Info SPMB", dan WhatsApp menuju tujuan yang benar. Diperiksa di HP 375 px tanpa scroll horizontal. | ℹ️ Sudah benar. |
| E6 | **Biaya pendidikan** tidak tercantum di situs. | 🔎 Sengaja tidak diisi. Lihat B-3. |
| E7 | **Fasilitas** tidak punya daftar resmi. URL lama `/fasilitas-kami` dialihkan ke School Life. | 🔎 Lihat B-4. |

## 3. Berkas yang diubah

| Berkas | Alasan |
|--------|--------|
| `src/data/site.ts` | Akreditasi SMP A + label TK/KB + `slug`, `spmb.tahunAjaran`, `geo`/`mapsUrl`, `seoDeskripsi` per jenjang, tautan menu berakhiran `/`. |
| `src/layouts/BaseLayout.astro` | JSON-LD `School` lengkap + slot `jsonLd` per halaman, prop `titleLengkap`/`noindex`/ukuran OG, font via `<link>`, skip link, `id="konten"`. |
| `src/styles/global.css` | Menghapus `@import` font (dipindah ke layout). |
| `astro.config.mjs` | Filter sitemap `/admin/`, plugin rehype lazy-load gambar artikel. |
| `public/_redirects` | 353 target redirect diberi `/` (satu langkah), 28 redirect artikel demo dihapus, `/registration` → SPMB. |
| `src/pages/index.astro` | Tahun SPMB dari data, lencana akreditasi dari data, hero tanpa reveal + `fetchpriority`. |
| `src/pages/jenjang/[slug].astro` | Judul/deskripsi lokal, chip akreditasi, "Info SPMB 2027/2028". |
| `src/pages/kontak.astro` | Deskripsi, heading h2, FAQ + `FAQPage`, data peta dari `site.ts`. |
| `src/pages/tentang.astro` | Deskripsi, judul akreditasi, kartu tertaut ke jenjang. |
| `src/pages/jenjang/index.astro`, `src/pages/berita/halaman/[page].astro` | Meta description. |
| `src/pages/berita/[...id].astro` | `NewsArticle` JSON-LD, prioritas gambar cover. |
| `src/pages/404.astro` | `noindex`. |
| `src/components/Header.astro`, `Footer.astro` | Aksesibilitas menu, logo eager, Karir di tab baru. |
| `src/components/BeritaCard.astro`, `BeritaListing.astro`, `src/pages/school-life.astro`, `src/pages/stop-bullying.astro` | Tautan internal berakhiran `/`. |
| `src/content/berita/*.md` (14 berkas demo tema) | `draft: true`. |

Tidak diubah: `netlify.toml`, `robots.txt`, `package.json` (tidak ada dependensi baru), URL halaman mana pun, artikel asli sekolah, dan data historis. Judul artikel lama yang memuat "TK RA" juga dibiarkan karena itu konten historis.

## 4. Hasil uji (28 Okt 2026)

Proyek ini tidak punya skrip `test`. Pemeriksaan yang dijalankan:

- `npm run build` **berhasil (exit 0)**:
  - **190 halaman.** Sebelumnya 205; selisih 15 = 14 artikel demo + 1 halaman paginasi berita.
  - Satu peringatan lama tetap ada dan bukan dari perubahan ini: OG image gagal dibuat dari `IMG-20241001-WA0014.jpg` karena berkas JPEG sumbernya rusak. Artikel itu memakai logo sebagai pratinjau.
  - Build lokal memakai artikel markdown (`ARTIKEL_API_URL` tidak di-set).
- **Link checker:** 7.127 `href` internal, **0 rusak, 0 tanpa `/`**.
- **Audit HTML:**
  - semua halaman publik punya tepat satu `<h1>`;
  - 0 gambar tanpa `alt`;
  - 0 JSON-LD tidak valid;
  - tidak ada judul duplikat;
  - satu-satunya deskripsi duplikat adalah beranda dan 404, wajar karena 404 kini `noindex`.
- **Sitemap:** 188 URL, `/admin/` tidak ada.
- **Cek teks usang di `dist/`:** "SPMB 2026/2027" dan nilai "B+" tidak ditemukan lagi.
- **Cek visual di 375 px** (beranda, /jenjang/smp/, /kontak/):
  - tampilan sesuai;
  - lebar halaman = lebar layar (tanpa scroll horizontal);
  - font Poppins termuat;
  - menu HP, `aria-current`, dan skip link berfungsi.
- **Belum diuji di produksi.** Perubahan ini baru di-commit lokal, belum di-deploy. Setelah deploy, cek ulang:
  - redirect satu langkah, misalnya `curl -sIL https://alakhyar.sch.id/bagi-bagi-doorprize/`;
  - sitemap tanpa `/admin/`;
  - Rich Results Test untuk beranda dan satu artikel.

## 5. Perlu akses atau konfirmasi sekolah

**A. Butuh akses akun**

1. **Google Search Console**
   - Verifikasi domain `alakhyar.sch.id`.
   - Kirim `https://alakhyar.sch.id/sitemap-index.xml`.
   - Pantau "Halaman tidak diindeks", terutama URL WordPress lama.
   - Belum diperiksa karena tidak ada akses.
2. **Google Business Profile**
   - Pastikan nama, alamat, jam buka, nomor, dan situs (`https://alakhyar.sch.id`) sama persis dengan situs.
   - Pertimbangkan profil terpisah per jenjang bila memang sudah ada.
   - Ini faktor terbesar untuk pencarian lokal "SD Islam Sudiang" dan sejenisnya.
   - Belum diperiksa.
3. **GA4 / Microsoft Clarity**
   - Isi `PUBLIC_GA_ID` dan `PUBLIC_CLARITY_ID` di Netlify.
   - Kodenya sudah siap tetapi belum aktif.

**B. Butuh konfirmasi data dari sekolah**

1. **Akreditasi SMP A:** mohon konfirmasi tahun SK dan nomor sertifikat bila ingin ditampilkan.
2. **Akreditasi TK/KB**
   - Data lama menulis "TK/RA: A".
   - Mohon pastikan apakah nilai A berlaku untuk TK dan KB (Kelompok Bermain), atau hanya TK.
   - Mohon juga tahun akreditasinya.
3. **Biaya pendidikan:** bila sekolah ingin mencantumkannya, kirim rincian resmi per jenjang untuk TA 2027/2028. Saat ini orang tua diarahkan ke narahubung.
4. **Daftar fasilitas resmi** (mis. masjid, lab, perpustakaan, lapangan) dengan foto. Bisa ditambahkan ke /tentang/ bagian "Kampus Kami".
5. **Prestasi terbaru** bila ingin ada ringkasan prestasi di luar berita.
6. **Kode pos kampus.** Sengaja tidak diisi di structured data karena belum ada sumber resmi.
7. **Konfirmasi testimoni Salsa.** Masih bertanda `karangan: true` di `site.ts`.

**C. Konfigurasi di luar repo**

1. **Cloudflare**
   - Situs produksi berada di belakang Cloudflare.
   - Uji user-agent dari luar lolos, tetapi fitur seperti *Block AI bots* atau *AI Crawl Control* dinilai dari IP crawler asli, sehingga tidak bisa dipastikan dari sini.
   - Periksa dasbor Cloudflare: OAI-SearchBot, Googlebot, dan Bingbot tidak boleh diblokir atau di-*challenge*.
2. **Netlify:** matikan Deploy Previews dan Branch deploys di dasbor untuk menghemat kredit. `netlify.toml` sudah melewati build-nya, tetapi pengaturan dasbor lebih pasti.
3. **e-Rapor:** gambar dalam isi artikel sebaiknya diberi `width`/`height` saat disimpan, atau dikompres dengan batas lebar, untuk menekan CLS di HP.
