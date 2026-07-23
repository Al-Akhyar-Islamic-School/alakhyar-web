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

// Angka kunci untuk branding (sumber: halaman & artikel resmi situs lama)
export const stats = [
  { angka: '20+', label: 'Tahun Berkiprah', ket: 'Beroperasi sejak 2004' },
  { angka: '650+', label: 'Peserta Didik', ket: 'Data tahun 2024' },
  { angka: '4', label: 'Jenjang Pendidikan', ket: 'TK · SD · SMP · SMA' },
  { angka: '3', label: 'Pilar Kurikulum', ket: 'Iman · Ilmu · Ihsan' },
] as const;

// Visi & misi resmi (migrasi halaman "Visi dan Misi" situs lama)
export const visi =
  'Terwujudnya insan yang unggul dan berakhlak mulia berlandaskan Iman, Ilmu, dan Ihsan.';

export const misi = [
  'Menyelenggarakan pendidikan yang berkualitas dan berdaya saing berbasis kecerdasan Iman, Ilmu, dan Ihsan.',
  'Melaksanakan proses pembelajaran dan pembinaan secara aktif, kreatif, efektif, dan menyenangkan (PAKEM).',
  'Mengembangkan pola kerja guru dan staf melalui manajemen profesional, partisipatif, dan disiplin.',
  'Menanamkan nilai-nilai ajaran Islam dan pengamalannya sehingga peserta didik berakhlakul karimah dan arif dalam bertindak.',
  'Menggali dan membina potensi setiap peserta didik menjadi kader umat yang rahmatan lil ‘alamin.',
  'Menciptakan suasana sehat, bersih, dan asri di lingkungan sekolah.',
  'Membina kerja sama antarwarga sekolah dengan dukungan peran serta masyarakat.',
] as const;

// Tonggak sejarah (migrasi halaman "Sejarah" + artikel sejarah)
export const sejarah = [
  { tahun: '2004', judul: 'Mulai Beroperasi', teks: 'Tahun pembelajaran pertama 2004–2005, menumpang di ruang kelas Pesantren Pondok Madinah.' },
  { tahun: '2006', judul: 'Gedung Diresmikan', teks: 'Kampus Jl. Arung Teko No. 99 Sudiang (4.200 m²) diresmikan Kepala Dinas Pendidikan Prov. Sulsel, 5 Agustus 2006.' },
  { tahun: '2014', judul: 'SMP Dibuka', teks: 'Gedung baru difungsikan untuk SD kelas 5–6 dan SMP; tahun pertama jenjang SMP.' },
  { tahun: '2020', judul: 'SMA Dibuka', teks: 'Peresmian gedung SMA sekaligus pembukaan jenjang SMA Islam Al Akhyar.' },
] as const;

// Akreditasi BAN-S/M per jenjang (migrasi halaman "Akreditasi")
export const akreditasi = [
  { jenjang: 'TK/RA', nilai: 'A' },
  { jenjang: 'SD Islam', nilai: 'A' },
  { jenjang: 'SMP Islam', nilai: 'B+' },
  { jenjang: 'SMA Islam', nilai: 'A' },
] as const;

// Narahubung pendaftaran (migrasi halaman "Pendaftaran")
export const narahubung = ['0878 5435 1911', '0821 8811 2747'] as const;

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
    // Kekhasan jenjang (migrasi halaman situs lama)
    keunikan: [
      'Pembelajaran berbasis eksplorasi sesuai tahap tumbuh kembang anak usia prasekolah.',
      'Lima sentra kelas: Imtaq, Seni, Sains & Bahan Alam, Matematika, dan Bahasa.',
      'Taman bermain luas, aman, dan ramah anak — sekolah senyaman rumah.',
    ],
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
    keunikan: [
      'Pembelajaran di luar sekolah untuk mengenalkan siswa langsung pada dunia nyata.',
      'Pengembangan motorik, kognitif, dan sosial lewat Pramuka dan Outbound.',
      'Pembelajaran bermuatan teknologi, sains, dan bahan alam dengan metode menyenangkan.',
    ],
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
    keunikan: [
      'Fasilitas lengkap berbasis teknologi — belajar jadi menarik dan menyenangkan.',
      'Ekstrakurikuler: Pramuka, Tahfidz, Panahan, Futsal, Basket, dan Tari.',
      'Proyek berbasis STEAM yang menumbuhkan inovasi dan nalar kritis.',
    ],
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
    keunikan: [
      'Kurikulum Merdeka berbasis nilai Al-Qur’an dan Sunnah, cakap berteknologi.',
      'Transformasi digital pembelajaran (e-Learning) dan literasi digital.',
      'Sekolah terpilih Program Roots (Kemendikbudristek × UNICEF) untuk pencegahan perundungan.',
      'Ujian akhir berbasis proyek dengan pameran karya untuk menumbuhkan jiwa wirausaha.',
    ],
  },
] as const;
