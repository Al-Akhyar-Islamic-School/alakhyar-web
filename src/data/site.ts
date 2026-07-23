// Data pusat situs — dipakai Header, Footer, dan halaman.
export const site = {
  name: 'Sekolah Islam Al Akhyar',
  shortName: 'Al Akhyar',
  tagline: 'Unggul & Berakhlak',
  description:
    'Sekolah Islam Al Akhyar Makassar — TK Islam, SD Islam, SMP Islam, dan SMA Islam di bawah Yayasan Pendidikan Islam Al Akhyar. Unggul secara akademik, kokoh dalam akhlak.',
  city: 'Kota Makassar',
  email: 'info@alakhyar.sch.id',
  phone: '(0411) 000000',
  address: 'Jl. Arung Teko No. 99, Sudiang, Makassar, Sulawesi Selatan',
  officeHours: 'Senin–Jumat · 08.00–16.00 WITA',
  kurikulumUrl: 'https://kurikulum.alakhyar.sch.id',
};

// Angka kunci untuk branding (sumber: artikel sejarah + kurikulum resmi)
export const stats = [
  { angka: '20+', label: 'Tahun Berkiprah', ket: 'Beroperasi sejak 2004' },
  { angka: '4', label: 'Jenjang Pendidikan', ket: 'TK · SD · SMP · SMA' },
  { angka: 'A', label: 'Akreditasi BAN-S/M', ket: 'Predikat Unggul' },
  { angka: '3', label: 'Pilar Kurikulum', ket: 'Iman · Ilmu · Ihsan' },
] as const;

export const nav = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang Kami', href: '/tentang' },
  { label: 'Jenjang', href: '/jenjang' },
  { label: 'School Life', href: '/school-life' },
  { label: 'Berita', href: '/berita' },
  { label: 'Karir', href: '/karir' },
  { label: 'Kontak', href: '/kontak' },
];

// Tiga pilar kurikulum Al Akhyar (kurikulum.alakhyar.sch.id)
export const pilar = [
  {
    nama: 'Iman',
    deskripsi: 'Beriman, bertakwa, dan berakhlak mulia.',
    warna: 'primary',
  },
  {
    nama: 'Ilmu',
    deskripsi: 'Cerdas, bernalar kritis, dan kompeten.',
    warna: 'sky',
  },
  {
    nama: 'Ihsan',
    deskripsi: 'Berbuat baik sepenuh hati, siap berkontribusi.',
    warna: 'green',
  },
] as const;

export const jenjang = [
  {
    slug: 'tk',
    nama: 'TK Islam',
    lengkap: 'TK Islam Al Akhyar',
    umur: 'Usia 4–6 tahun',
    warna: 'magenta',
    tagWp: 'TK',
    deskripsi:
      'Pendidikan anak usia dini yang menumbuhkan cinta belajar, adab, dan hafalan Qur’an sejak dini dalam suasana bermain yang hangat.',
  },
  {
    slug: 'sd',
    nama: 'SD Islam',
    lengkap: 'SD Islam Al Akhyar',
    umur: 'Kelas 1–6',
    warna: 'primary',
    tagWp: 'SD',
    deskripsi:
      'Sekolah dasar dengan Kurikulum Merdeka berciri khas keislaman — membangun fondasi akademik, tahfidz, dan pembiasaan akhlak.',
  },
  {
    slug: 'smp',
    nama: 'SMP Islam',
    lengkap: 'SMP Islam Al Akhyar',
    umur: 'Kelas 7–9',
    warna: 'sky',
    tagWp: 'SMP',
    deskripsi:
      'Jenjang menengah pertama yang menyeimbangkan sains, literasi, proyek STEAM, dan tahfidz Qur’an–hadits.',
  },
  {
    slug: 'sma',
    nama: 'SMA Islam',
    lengkap: 'SMA Islam Al Akhyar',
    umur: 'Kelas 10–12',
    warna: 'coral',
    tagWp: 'SMA',
    deskripsi:
      'Menyiapkan lulusan unggul dan berakhlak yang siap menembus perguruan tinggi terbaik dan berkontribusi bagi umat.',
  },
] as const;
