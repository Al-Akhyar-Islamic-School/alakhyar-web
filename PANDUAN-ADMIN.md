# Panduan Admin — Website Al Akhyar

## Peran Pengguna

| Peran | Hak | Catatan |
|---|---|---|
| **Admin** | Semua hak Editor + kelola situs Netlify, undang/cabut pengguna | Pemilik sistem |
| **Editor** | Tulis, edit, hapus, **Publish** (menayangkan), approve tulisan kontributor | Penjaga mutu konten |
| **Contributor** | Tulis & simpan ke papan **Drafts / In Review** | Tulisan tayang hanya setelah di-Publish Editor/Admin |

CMS memakai **Editorial Workflow** — di dashboard ada tab **Workflow** berisi papan
tiga kolom: *Drafts → In Review → Ready*. Alur kerjanya:

1. **Contributor** menulis Berita → klik **Save** → tulisan masuk kolom *Drafts*
   (belum tayang di web). Geser ke *In Review* bila sudah siap diperiksa.
2. **Editor/Admin** membuka tab Workflow → membaca tulisan → jika layak, klik
   **Publish** → tulisan tayang di web otomatis.
3. Semua aksi tercatat di riwayat Git (siapa menulis, siapa menayangkan) —
   pemisahan peran Contributor vs Editor ditegakkan lewat kesepakatan tim, bukan
   paksaan sistem.

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
