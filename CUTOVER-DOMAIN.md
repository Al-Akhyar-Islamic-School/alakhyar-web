# Panduan Cutover Domain — alakhyar.sch.id → Netlify

DNS dikelola **Hostinger** (`ns1/ns2.dns-parking.com`). Kita **tidak** memindahkan
nameserver — hanya mengubah 2 record. Semua subdomain lain (spmb, dinar, ppdb,
olympic di Vercel; elearning, s, karir di VPS) tetap berjalan tanpa disentuh.

---

## ⚠️ Dua temuan yang wajib ditangani lebih dulu

### 1. Empat subdomain "menumpang" apex

Record berikut menunjuk ke `alakhyar.sch.id` (apex). Begitu apex dialihkan ke
Netlify, **keempatnya ikut pindah** dan akan rusak:

| Subdomain | Sekarang | Harus diubah jadi |
|---|---|---|
| `cbt` | CNAME → alakhyar.sch.id | CNAME → `newserver.alakhyar.sch.id` |
| `mail` | CNAME → alakhyar.sch.id | CNAME → `newserver.alakhyar.sch.id` |
| `raporp5` | CNAME → alakhyar.sch.id | CNAME → `newserver.alakhyar.sch.id` |
| `satu` | CNAME → alakhyar.sch.id | CNAME → `newserver.alakhyar.sch.id` |

`newserver.alakhyar.sch.id` sudah menunjuk ke VPS (148.230.96.229), jadi
keempatnya tetap di tempat semula. **Lakukan ini beberapa jam sebelum cutover.**

### 2. Email sekolah — JANGAN DISENTUH

Record ini menopang Google Workspace `@alakhyar.sch.id`. Menghapusnya =
**email sekolah mati**:

- 5 record **MX** (`aspmx.l.google.com` dkk) di apex
- **TXT SPF**: `"v=spf1 +a +mx +ip4:156.67.208.2 include:_spf.google.com ~all"`
- **TXT DKIM**: `default._domainkey`

Mengubah A record apex **tidak** memengaruhi MX — keduanya record terpisah.

---

## Langkah cutover

### Tahap 1 — Turunkan TTL (H-1)

Di Hostinger DNS, ubah TTL record berikut jadi **300**:
- `@` (A record)
- `www` (CNAME)

Tunggu **4 jam** (TTL lama 14400 detik) agar resolver di seluruh dunia memakai
TTL baru. Ini membuat rollback bisa pulih dalam 5 menit, bukan 4 jam.

### Tahap 2 — Daftarkan domain di Netlify (tanpa risiko)

**Netlify → Domain management → Add a domain** → `www.alakhyar.sch.id`

- ✅ Berhasil ditambahkan → lanjut ke Tahap 3
- ❌ Muncul *"domain is already in use by another account"* → **berhenti**, hubungi
  Netlify Support seperti kasus `kurikulum.alakhyar.sch.id`

Situs lama tetap hidup selama tahap ini — Netlify baru aktif setelah DNS diarahkan.

> Catatan: zone sudah memiliki TXT `verified-for-netlify = "1079655"`, sisa proses
> verifikasi sebelumnya. Ini justru memperbesar peluang domain langsung diterima.

### Tahap 3 — Ubah 2 record

| Record | Dari | Menjadi |
|---|---|---|
| `@` (A) | `148.230.96.229` | `75.2.60.5` |
| `www` (CNAME) | `alakhyar.sch.id` | `alakhyar.netlify.app` |

Jadikan **`www.alakhyar.sch.id` sebagai primary domain** di Netlify agar apex
otomatis dialihkan ke www.

### Tahap 4 — Tunggu SSL

Netlify menerbitkan sertifikat Let's Encrypt otomatis setelah DNS terverifikasi
(5–30 menit). Pantau di **Domain management → HTTPS**.

### Tahap 5 — Perbaiki login CMS

Domain berubah → **Google OAuth perlu ditambah origin baru**, kalau tidak login
`/admin` akan gagal:

**Google Cloud Console → Credentials → OAuth Client → Edit**
- **Authorized JavaScript origins** → tambahkan `https://www.alakhyar.sch.id`
- **Authorized redirect URIs** → biarkan `https://identity.services.netlify.com/callback`
  (tidak berubah, karena Netlify memakai callback terpusat)

---

## Verifikasi setelah cutover

```bash
# situs baru tayang
curl -sI https://www.alakhyar.sch.id | head -1

# apex dialihkan ke www
curl -sI https://alakhyar.sch.id | grep -i location

# redirect artikel lama masih jalan (SEO)
curl -sI https://www.alakhyar.sch.id/sejarah-berdirinya-al-akhyar/ | grep -i location

# email tidak terganggu
dig +short alakhyar.sch.id MX

# subdomain lain tetap hidup
for s in spmb dinar kurikulum elearning; do
  echo "$s: $(dig +short $s.alakhyar.sch.id | tail -1)"
done
```

Lalu buka `https://www.alakhyar.sch.id/admin` dan pastikan login Google berhasil.

---

## Rollback (bila ada masalah)

Kembalikan 2 record:
- `@` (A) → `148.230.96.229`
- `www` (CNAME) → `alakhyar.sch.id`

Dengan TTL 300, situs lama kembali dalam ±5 menit.

**Jangan hapus WordPress di VPS** sampai situs baru berjalan stabil minimal 2–4
minggu. Setelah itu, WordPress bisa dipindah ke `old.alakhyar.sch.id` sebagai arsip.
