// Data pusat situs — dipakai Header, Footer, dan halaman.
// Sumber: booklet resmi per jenjang (Edisi Nov 2025), kurikulum.alakhyar.sch.id,
// dan konten migrasi situs lama.
export const site = {
  name: 'Sekolah Islam Al Akhyar',
  shortName: 'Al Akhyar',
  tagline: 'Unggul & Berakhlak',
  description:
    'Sekolah Islam Al Akhyar Makassar — TK Islam, SD Islam, SMP Islam, dan SMA Islam di bawah Yayasan Pendidikan Islam Al Akhyar. Unggul secara akademik, kokoh dalam akhlak.',
  city: 'Kota Makassar',
  email: 'info@alakhyar.sch.id',
  phone: '0852-1516-1778',
  address: 'Jl. Arung Teko No. 100, Sudiang, Biringkanaya, Makassar, Sulawesi Selatan',
  officeHours: 'Senin–Jumat · 08.00–16.00 WITA',
  instagram: 'https://www.instagram.com/alakhyar_is',
  instagramHandle: '@alakhyar_is',
  kurikulumUrl: 'https://kurikulum.alakhyar.sch.id',
  spmbUrl: 'https://spmb.alakhyar.sch.id',
  dinarUrl: 'https://dinar.alakhyar.sch.id',
};

// Angka kunci untuk branding (sumber: halaman & artikel resmi situs lama)
export const stats = [
  { angka: '20+', label: 'Tahun Berkiprah', ket: 'Beroperasi sejak 2004' },
  { angka: '650+', label: 'Peserta Didik', ket: 'Data tahun 2024' },
  { angka: '4', label: 'Jenjang Pendidikan', ket: 'TK · SD · SMP · SMA' },
  { angka: '3', label: 'Pilar Kurikulum', ket: 'Iman · Ilmu · Ihsan' },
] as const;

// Tiga pilar kurikulum Al Akhyar (kurikulum.alakhyar.sch.id)
export const pilar = [
  { nama: 'Iman', deskripsi: 'Beriman, bertakwa, dan berakhlak mulia.', warna: 'primary' },
  { nama: 'Ilmu', deskripsi: 'Cerdas, bernalar kritis, dan kompeten.', warna: 'sky' },
  { nama: 'Ihsan', deskripsi: 'Berbuat baik sepenuh hati, siap berkontribusi.', warna: 'green' },
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

// Tonggak sejarah (migrasi halaman "Sejarah" + artikel sejarah + booklet)
export const sejarah = [
  { tahun: '2004', judul: 'Mulai Beroperasi', teks: 'Tahun pembelajaran pertama 2004–2005; jenjang SD Islam berdiri.' },
  { tahun: '2006', judul: 'Gedung Diresmikan', teks: 'Kampus Jl. Arung Teko Sudiang (4.200 m²) diresmikan Kepala Dinas Pendidikan Prov. Sulsel, 5 Agustus 2006.' },
  { tahun: '2014', judul: 'SMP Dibuka', teks: 'Gedung baru difungsikan untuk SD kelas 5–6 dan SMP; tahun pertama jenjang SMP.' },
  { tahun: '2020', judul: 'SMA Dibuka', teks: 'Peresmian gedung SMA sekaligus pembukaan jenjang SMA Islam Al Akhyar — terakreditasi A sejak 2023.' },
] as const;

// Akreditasi BAN-S/M per jenjang (migrasi halaman "Akreditasi" + booklet SMA)
export const akreditasi = [
  { jenjang: 'TK/RA', nilai: 'A' },
  { jenjang: 'SD Islam', nilai: 'A' },
  { jenjang: 'SMP Islam', nilai: 'B+' },
  { jenjang: 'SMA Islam', nilai: 'A' },
] as const;

// Narahubung pendaftaran (booklet resmi Nov 2025)
export const narahubung = ['0852 1516 1778'] as const;

// ============ Kurikulum ganda — nilai jual utama (booklet) ============
export const kurikulum = {
  nasional: {
    nama: 'Kurikulum Merdeka',
    ket: 'Kurikulum Nasional',
    deskripsi:
      'Pembelajaran berbasis proyek dan pengalaman langsung dengan pendekatan STEAM — menumbuhkan nalar kritis, kreativitas, dan kompetensi sesuai potensi tiap anak.',
  },
  islami: {
    nama: 'Kurikulum Unggul & Berakhlak',
    ket: 'Kurikulum Islami Khas Al Akhyar',
    deskripsi:
      'Tahfidz Qur’an dengan metode terukur, Tahsin, Bahasa Arab, Aqidah Akhlak, Hadits, dan Fiqih — membentuk karakter Islami dalam pembiasaan harian.',
  },
  harian: [
    'Shalat Dhuha setiap pagi',
    'Mengaji & kegiatan pagi sebelum pembelajaran',
    'Shalat Dzuhur & Ashar berjamaah',
    'Kultum dan Al Kahfian di hari Jumat',
  ],
} as const;

// ============ Dinar App — nilai jual digital (booklet) ============
export const dinar = {
  nama: 'Dinar App',
  judul: 'Digital Information & Academic Al Akhyar',
  deskripsi:
    'Satu aplikasi untuk orang tua memantau ananda: rapor digital, hafalan, karakter, hingga SPP — transparan dan real-time.',
  fitur: [
    { nama: 'E-Rapor', ket: 'Rapor digital terintegrasi, mudah diakses orang tua' },
    { nama: 'PoinKu', ket: 'Sistem pembinaan karakter & kedisiplinan siswa' },
    { nama: 'Hafalan Qur’an & Hadits', ket: 'Progres tahfidz ananda terpantau' },
    { nama: 'Status SPP', ket: 'Riwayat pembayaran transparan' },
    { nama: 'Roster Pelajaran', ket: 'Jadwal kelas selalu di genggaman' },
    { nama: 'Agenda Sekolah', ket: 'Kalender kegiatan & ujian terbaru' },
    { nama: 'Jadwal Shalat', ket: 'Waktu shalat Kota Makassar + kalender Hijriah' },
    { nama: 'Kartu Digital', ket: 'Kartu siswa resmi dengan QR' },
  ],
} as const;

// Program unggulan lintas jenjang (booklet)
export const programUnggulan = [
  { t: 'Al Akhyar Olympic', d: 'Ajang 3 tahunan: olahraga, esport, akademik, seni, dan islami — semangat “Tumbuh Lebih Baik”.' },
  { t: 'Ujian & Beasiswa Tahfidz', d: 'Ujian tahfidz tiap semester dengan beasiswa potongan SPP bagi yang berprestasi.' },
  { t: 'Outing Class', d: 'Belajar langsung dari sumber nyata di tempat yang relevan dengan pelajaran.' },
  { t: 'Outbound', d: 'Aktivitas luar ruangan: kerja sama tim, keberanian, dan kreativitas.' },
  { t: 'Manasik Haji', d: 'Simulasi ibadah haji yang mendidik dan menyenangkan.' },
  { t: 'STEAM Project', d: 'Proyek terpadu sains-teknologi-seni; hasilnya dipresentasikan dan dipamerkan.' },
] as const;

// Testimoni asli dari booklet resmi (alumni & orang tua)
export const testimoni = [
  {
    teks: 'Al Akhyar adalah sekolah yang tepat untuk membangun akhlak dan pendidikan anak. Kegiatan sekolah sangat seimbang antara akademik dan ekstrakurikuler, dengan fasilitas memadai dan pengajar yang kompeten.',
    nama: 'Alisha Safaira',
    peran: 'Alumni',
  },
  {
    teks: 'Suatu kebanggaan pernah menjadi bagian dari Al Akhyar. Lingkungan dan fasilitasnya mendukung siswa untuk produktif mengembangkan skill agar siap bersaing — pengajar yang kompeten membuat kami mampu menggali potensi dengan baik.',
    nama: 'Hamka',
    peran: 'Alumni',
  },
  {
    teks: 'Menjalani masa SMP di Al Akhyar adalah kesempatan emas. Saya bertemu teman-teman berprestasi yang mendorong saya belajar lebih giat — ustadz dan ustadzah ramah, pelajaran relevan dengan masa depan.',
    nama: 'Lisa Purwati Ilham',
    peran: 'Alumni SMP Islam',
  },
  {
    teks: 'Keputusan menyekolahkan anak saya di Al Akhyar sangat tepat. Anak saya mendapatkan fasilitas, pendidikan, lingkungan, dan guru yang terbaik. Adab dan ilmu diajarkan beriringan, dikemas dengan cara yang menyenangkan.',
    nama: 'Minanty Candiwaty',
    peran: 'Orang Tua Siswa TK Islam',
  },
  {
    teks: 'Alhamdulillah, dua anak saya yang bersekolah di Al Akhyar banyak mengalami perubahan positif — kemandirian, sopan santun, keagamaan, dan akademiknya. Anak senang dan nyaman di sekolah, kami orang tua pun merasa aman.',
    nama: 'Anisya Nurul Riskyta',
    peran: 'Orang Tua Siswa TK Islam',
  },
  {
    teks: 'Lingkungan sekolah nyaman dan aman, guru-gurunya peduli dan perhatian pada perkembangan peserta didik. Perkembangan karakter anak saya memperlihatkan kemajuan yang signifikan.',
    nama: 'Orang Tua Siswa',
    peran: 'SD Islam Al Akhyar',
  },
] as const;

// Alumni SMA angkatan terbaru (2025/2026) — data resmi sekolah
export const alumniTerbaru = {
  angkatan: '2025/2026',
  daftar: [
    { nama: 'Annida Althafunnisa', prodi: 'Bisnis Islam', kampus: 'Universitas Indonesia', logo: '/kampus/ui.svg' },
    { nama: 'Salsa Puspaningrum BZ', prodi: 'Ilmu Administrasi Niaga', kampus: 'Universitas Indonesia', logo: '/kampus/ui.svg' },
    { nama: 'Sitti Fadillah Almira Fahrini', prodi: 'Pendidikan Dokter', kampus: 'Universitas Hasanuddin', logo: '/kampus/unhas.png' },
    { nama: 'Alya’ Nuriadi Sindi', prodi: 'Ekonomi dan Bisnis Islam', kampus: 'Universitas Hasanuddin', logo: '/kampus/unhas.png' },
    { nama: 'WD. Rahel Azzalikha Ananda', prodi: 'Wilayah dan Kota', kampus: 'Universitas Hasanuddin', logo: '/kampus/unhas.png' },
    { nama: 'Afifa Salsabila Herwan', prodi: 'Agroteknologi', kampus: 'Universitas Hasanuddin', logo: '/kampus/unhas.png' },
    { nama: 'Rizka Amaliah S', prodi: 'Ilmu Keperawatan', kampus: 'Universitas Hasanuddin', logo: '/kampus/unhas.png' },
    { nama: 'Naura Azzahra Nawawi', prodi: 'Kesehatan Masyarakat', kampus: 'Universitas Hasanuddin', logo: '/kampus/unhas.png' },
  ],
} as const;

// Logo kampus tujuan utama (sumber: Wikipedia/Wikimedia, PNG/SVG transparan)
export const kampusLogos = [
  { nama: 'Universitas Indonesia', logo: '/kampus/ui.svg' },
  { nama: 'Universitas Hasanuddin', logo: '/kampus/unhas.png' },
  { nama: 'Universitas Negeri Makassar', logo: '/kampus/unm.png' },
  { nama: 'Universitas Islam Indonesia', logo: '/kampus/uii.svg' },
  { nama: 'Universitas Muslim Indonesia', logo: '/kampus/umi.png' },
] as const;

// Kampus tujuan alumni lainnya (booklet SMA, Nov 2025)
export const kampusAlumni = [
  'UIN',
  'Poltekkes',
  'Poltekbang',
  'Politeknik Negeri Surabaya',
  'Universitas Bosowa',
] as const;

export const nav = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang Kami', href: '/tentang' },
  { label: 'Kurikulum', href: '/kurikulum' },
  { label: 'Jenjang', href: '/jenjang' },
  { label: 'School Life', href: '/school-life' },
  { label: 'Berita', href: '/berita' },
  { label: 'Karir', href: '/karir' },
  { label: 'Kontak', href: '/kontak' },
];

// 13 bab panduan kurikulum (kurikulum.alakhyar.sch.id)
export const babKurikulum = [
  { roman: 'I', judul: 'Pendahuluan', slug: 'bab-1-pendahuluan.html', warna: '#006195' },
  { roman: 'II', judul: 'Profil Lulusan', slug: 'bab-2-profil-lulusan.html', warna: '#EC2A6B' },
  { roman: 'III', judul: 'Struktur Kurikulum', slug: 'bab-3-struktur-kurikulum.html', warna: '#006195' },
  { roman: 'IV', judul: 'Pengorganisasian', slug: 'bab-4-pengorganisasian.html', warna: '#1B93C6' },
  { roman: 'V', judul: 'Program & Kalender', slug: 'bab-5-program-kalender.html', warna: '#E8493F' },
  { roman: 'VI', judul: 'Tahfidz & Hadits', slug: 'bab-6-tahfidz-hadits.html', warna: '#218A62' },
  { roman: 'VII', judul: 'Poinku', slug: 'bab-7-poinku.html', warna: '#B9790C' },
  { roman: 'VIII', judul: 'Dinar App', slug: 'bab-8-dinar-app.html', warna: '#1B93C6' },
  { roman: 'IX', judul: 'Perencanaan', slug: 'bab-9-perencanaan-pembelajaran.html', warna: '#006195' },
  { roman: 'X', judul: 'Asesmen', slug: 'bab-10-asesmen-evaluasi.html', warna: '#EC2A6B' },
  { roman: 'XI', judul: 'Evaluasi Kurikulum', slug: 'bab-11-evaluasi-kurikulum.html', warna: '#218A62' },
  { roman: 'XII', judul: 'Tata Tertib', slug: 'bab-12-tata-tertib.html', warna: '#B9790C' },
  { roman: 'XIII', judul: 'Penutup', slug: 'bab-13-penutup.html', warna: '#1B93C6' },
] as const;

export const jenjang = [
  {
    slug: 'tk',
    nama: 'TK Islam',
    lengkap: 'KB-TK Islam Al Akhyar',
    umur: 'Usia 2–6 tahun',
    berdiri: 2012,
    warna: 'magenta',
    tagWp: 'TK',
    booklet: '/booklet/booklet-tk-al-akhyar.pdf',
    deskripsi:
      'Pendidikan anak usia dini berbasis bermain dengan Kurikulum Merdeka + metode BCCT — menumbuhkan akhlak, kemandirian, dan kecerdasan emosional.',
    keunikan: [
      'Metode BCCT (Beyond Centers and Circle Time) — bermain dan belajar menjadi satu.',
      'Lima sentra: Balok, Imtaq, Main Peran, Sains & Bahan Alam, dan Literasi.',
      'Rasio guru : murid = 1 : 7 dengan tenaga pendidik terlatih.',
      'Catatan harian + foto aktivitas anak dipantau orang tua via Dinar App.',
    ],
    ekskul: [],
    programKhas: [
      'Qiro’ah, Jurnal, Literasi & Numerasi Pagi',
      'Morning Assembly',
      'Gross Motor Activities & Praying',
      'Student Project & Kelas Inspirasi',
      'Outing Class 3× setahun',
      'Parenting Class',
    ],
  },
  {
    slug: 'sd',
    nama: 'SD Islam',
    lengkap: 'SD Islam Al Akhyar',
    umur: 'Kelas 1–6',
    berdiri: 2004,
    warna: 'primary',
    tagWp: 'SD',
    booklet: '/booklet/booklet-sd-al-akhyar.pdf',
    deskripsi:
      'Fullday school dengan dua kurikulum: Kurikulum Merdeka + Kurikulum Unggul & Berakhlak — tahfidz metode Sabaq-Sabqi-Manzil hingga Fiqih.',
    keunikan: [
      'Tahfidz metode Sabaq-Sabqi-Manzil, Bahasa Arab, BTQ, Aqidah Akhlak, Hadits, Fiqih.',
      'Kelas maksimal 25 siswa — kelas 1–2 didampingi 2 guru.',
      'Shalat Dhuha setiap pagi, makan bersama, senam, dan Al Kahfi tiap Jumat.',
    ],
    ekskul: ['Mengaji', 'Tilawatil Qur’an', 'Tari', 'Taekwondo', 'Silat', 'Badminton', 'Renang', 'Karate', 'Coding', 'Futsal', 'Panahan', 'Pramuka', 'Basket', 'Mewarnai'],
    programKhas: [],
  },
  {
    slug: 'smp',
    nama: 'SMP Islam',
    lengkap: 'SMP Islam Al Akhyar',
    umur: 'Kelas 7–9',
    berdiri: 2014,
    warna: 'sky',
    tagWp: 'SMP',
    booklet: '/booklet/booklet-smp-al-akhyar.pdf',
    deskripsi:
      'Kurikulum Merdeka + kurikulum Islami khas: tahfidz metode Tasmi’, Tahsin, proyek STEAM, dan pembinaan organisasi OSIS-PMR.',
    keunikan: [
      'Tahfidz metode Tasmi’ dan Tahsin dalam Kurikulum Unggul & Berakhlak.',
      'Prestasi nasional & internasional: OSN Provinsi, UCMAS Kuala Lumpur.',
      'Kelas maksimal 25 siswa dengan fasilitas audio-visual lengkap.',
    ],
    ekskul: ['Tilawatil Qur’an', 'Fotografi', 'Tari', 'Futsal', 'Panahan', 'Badminton', 'Basket', 'Taekwondo', 'Pramuka', 'Coding', 'OSIS', 'PMR'],
    programKhas: [],
  },
  {
    slug: 'sma',
    nama: 'SMA Islam',
    lengkap: 'SMA Islam Al Akhyar',
    umur: 'Kelas 10–12',
    berdiri: 2020,
    warna: 'coral',
    tagWp: 'SMA',
    booklet: '/booklet/booklet-sma-al-akhyar.pdf',
    deskripsi:
      'Terakreditasi A sejak 2023. Lulusan menembus UNHAS, UNM, hingga Fakultas Kedokteran — dengan kuota jalur undangan 40%.',
    keunikan: [
      'Alumni diterima di UNHAS, UNM, Poltekkes, Poltekbang, UMI, UII — termasuk 2 lulusan di Fakultas Kedokteran.',
      'Study & Campus Tour ke kampus Jawa: UNAIR, ITS, Universitas Brawijaya (2024).',
      'Tes Minat Bakat & Pemantapan SNBT bekerja sama dengan Ruangguru.',
      'Peminatan IPA & IPS + Mulok Bahasa Jepang; sekolah pelaksana Program Roots (UNICEF).',
    ],
    ekskul: ['Public Speaking', 'Silat', 'Tari', 'Futsal', 'Panahan', 'Badminton', 'Basket', 'Taekwondo', 'Pramuka', 'Coding', 'OSIS', 'PMR'],
    programKhas: [],
  },
] as const;
