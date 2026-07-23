# Panduan Admin — Website Al Akhyar

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
