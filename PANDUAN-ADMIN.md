# Panduan Admin — Website Al Akhyar

## Peran Pengguna

| Peran | Cara mendapatkan | Hak |
|---|---|---|
| **Contributor** | **Default** — semua guru dengan akun Google `@alakhyar.sch.id` | Tulis & simpan ke papan **Drafts**. Tombol Publish **tidak tampil**. |
| **Editor** | Di-set manual: role `editor` | Semua hak Contributor + **Publish** (menayangkan) |
| **Admin** | Di-set manual: role `admin` | Semua hak Editor + kelola situs Netlify & pengguna |

### Cara memberi role Editor/Admin

1. Netlify → **Project configuration → Identity → Users**
2. Klik user yang dituju → **Edit settings**
3. Di **User account metadata**, isi roles: `editor` (atau `admin`)
4. Berlaku saat user **login berikutnya**

> Kolom **Roles** di Git Gateway biarkan **kosong**. Kalau diisi, semua guru
> tanpa role di daftar itu langsung tertolak masuk.

### Alur kerja

CMS memakai **Editorial Workflow** — tab **Workflow** berisi papan tiga kolom:
*Drafts → In Review → Ready*.

1. **Guru (contributor)** menulis Berita → **Save** → masuk kolom *Drafts*
   (belum tayang). Geser ke *In Review* bila siap diperiksa.
2. **Editor/Admin** buka tab Workflow → baca → jika layak, klik **Publish** →
   tayang otomatis di web.
3. Semua aksi tercatat di riwayat Git: siapa menulis, siapa menayangkan.

> Catatan teknis: penyembunyian tombol Publish dilakukan di sisi browser
> (`src/pages/admin.astro`) untuk memandu alur kerja tim — bukan kunci
> kriptografis. Pengendalian akses sesungguhnya ada pada Google consent screen
> *Internal* yang hanya meloloskan email `@alakhyar.sch.id`.

## Mengelola Berita lewat CMS

### A. Di komputer lokal — mode dummy (untuk development)

1. Satu perintah di folder proyek:

   ```bash
   npm run cms
   ```

   (menjalankan `decap-server` + `astro dev` sekaligus)

2. Buka **http://localhost:4321/admin**
3. Klik **Login** — langsung masuk tanpa akun (mode `local_backend`, hanya berlaku di
   localhost). Perubahan tersimpan langsung sebagai file di `src/content/berita/`
   (belum ter-commit — commit manual lewat git).

> Catatan: papan **Workflow** (Drafts → In Review → Ready) tidak tampil di mode
> lokal — keterbatasan `local_backend` Decap. Papan ini otomatis aktif di
> produksi (Netlify + Git Gateway).

### B. Di produksi (staf sekolah, login Google @alakhyar.sch.id)

Setelah situs di-deploy ke **Netlify**:

1. **Netlify → Site settings → Identity → Enable Identity**
2. Identity → **Registration**: pilih *Invite only*
3. Identity → **External providers**: aktifkan **Google**
4. Identity → **Services → Git Gateway**: klik *Enable Git Gateway*
5. Identity → **Invite users**: masukkan email staf `@alakhyar.sch.id`
6. Staf membuka **https://www.alakhyar.sch.id/admin/**, klik *Login with Netlify
   Identity* → *Continue with Google* → pilih akun Google Al Akhyar.

Setiap Berita yang disimpan staf otomatis menjadi commit di GitHub dan memicu
build ulang situs (± 2–3 menit sampai tayang).

> Catatan: sebelum deploy produksi, baris `local_backend: true` di
> `public/admin/config.yml` sebaiknya tetap ada (tidak berpengaruh di produksi),
> namun pastikan **Git Gateway aktif** agar login Google berfungsi.

## Foto di Berita

- Silakan upload foto langsung dari HP — **sistem otomatis mengompres** (resize
  maks 1920px + optimasi) lewat GitHub Actions, jadi tidak perlu mengecilkan manual.
- Format yang didukung: **JPG / PNG / WebP**. Hindari HEIC (foto iPhone default) —
  ubah dulu ke JPG karena browser tidak bisa menampilkannya.
- Foto tersimpan di repo GitHub (`public/uploads/berita/`) dan disajikan via CDN.

## Alur konten

- **Berita** → dikelola lewat `/admin` (staf) atau file Markdown di `src/content/berita/`
- **Halaman profil** (Tentang, Jenjang, SPMB, dll.) → diedit lewat kode
  (`src/pages/`, data terpusat di `src/data/site.ts`)
- **Gambar berita** → otomatis tersimpan di `public/uploads/berita/`

## Perintah penting

```bash
npm run dev        # server development (localhost:4321)
npm run build      # build produksi ke dist/
npm run preview    # pratinjau hasil build
```
