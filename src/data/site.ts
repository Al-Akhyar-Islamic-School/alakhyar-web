// Data pusat situs — dipakai Header, Footer, dan halaman.
// Sumber: booklet resmi per jenjang (Edisi Nov 2025), kurikulum.alakhyar.sch.id,
// dan konten migrasi situs lama.
export const site = {
  name: 'Sekolah Islam Al Akhyar',
  shortName: 'Al Akhyar',
  tagline: 'Unggul & Berakhlak',
  description:
    'Sekolah Islam Al Akhyar Makassar — TK/KB Islam, SD Islam, SMP Islam, dan SMA Islam di bawah Yayasan Pendidikan Islam Al Akhyar. Unggul secara akademik, kokoh dalam akhlak.',
  city: 'Kota Makassar',
  email: 'official@alakhyar.sch.id',
  phone: '0852-1516-1778',
  whatsapp: 'https://wa.me/6285215161778',
  address: 'Jl. Arung Teko No. 99, Sudiang, Biringkanaya, Makassar, Sulawesi Selatan',
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
  { angka: '900+', label: 'Peserta Didik', ket: 'Tahun Ajaran 2026/2027' },
  { angka: '4', label: 'Jenjang Pendidikan', ket: 'TK/KB · SD · SMP · SMA' },
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

// Testimoni resmi dari booklet tiap jenjang (Edisi Nov 2025).
// Pasangan nama-kutipan diverifikasi lewat koordinat teks pada PDF booklet.
// Kutipan Annida Althafunnisa dikirim langsung oleh yang bersangkutan.
// Entri bertanda `karangan: true` masih disusun redaksi web — konfirmasi ke ybs
// sebelum dianggap kutipan resmi.
export const testimoni = [
  {
    teks: 'Sebagai alumni SMA Islam Al Akhyar, saya merasa sangat beruntung pernah menuntut ilmu di sini. Lingkungan belajar yang kondusif, guru-guru yang berdedikasi, serta fasilitas yang memadai menjadi pondasi kuat bagi saya dalam menempuh pendidikan di FK UNHAS saat ini.',
    nama: 'St. Namira Wahyudi',
    peran: 'Mahasiswa Kedokteran UNHAS · Alumni SMA Angkatan II',
    foto: 'namira',
  },
  {
    teks: 'Al Akhyar adalah sekolah yang tepat untuk membangun akhlak dan pendidikan anak. Kegiatan di sekolah sangat diimbangi antara akademik dan ekstrakurikuler. Saya bersyukur pernah mengemban pendidikan di sekolah dengan fasilitas memadai dan pengajar yang sangat kompeten.',
    nama: 'Alisha Safaira',
    peran: 'Mahasiswa Yokohama National University · Alumni SD & SMP',
    foto: 'alisha',
  },
  {
    teks: 'Alhamdulillah, suatu kebanggaan pernah menjadi bagian dari Al Akhyar. Lingkungan dan fasilitas yang mendukung membuat siswa produktif mengembangkan skill untuk bersaing di dunia kerja. Tenaga pengajar yang kompeten membuat kami dapat menggali potensi dengan baik.',
    nama: 'Ahmad Dzulqarnain Azhary',
    peran: 'Mahasiswa Al Azhar Cairo, Syariah · Alumni SD Angkatan IV',
    foto: 'dzulqarnain',
  },
  {
    teks: 'Mempunyai kesempatan menjalani masa SMP di Al Akhyar adalah kesempatan emas bagi saya. Saya bertemu teman-teman berprestasi yang mendorong saya belajar lebih giat. Ustadz dan ustadzah yang ramah serta mata pelajaran yang relevan dengan masa depan membuat saya terus berkembang hingga saat ini.',
    nama: 'Indra Alfalin',
    peran: 'Mahasiswa Universitas Indonesia, FEB · Alumni SMP Angkatan IV',
    foto: 'indra',
  },
  {
    teks: 'Saya telah menghabiskan 15 tahun bersekolah di Al Akhyar, sehingga hampir seluruh masa kecil dan remaja saya tumbuh di sini. Selama itu, saya tidak pernah menyesal memilih Al Akhyar sejak TK. Bagi saya, Al Akhyar adalah sekolah yang mampu menyeimbangkan pendidikan akademik dan agama dengan baik. Guru-gurunya profesional, peduli, dan selalu mengayomi murid. Ditambah lagi, fasilitasnya terus berkembang mengikuti zaman, serta lingkungan pertemanannya yang sehat membuat saya selalu merasa nyaman. Al Akhyar bukan hanya sekolah bagi saya, tetapi juga rumah kedua.',
    nama: 'Annida Althafunnisa',
    peran: 'Mahasiswa Bisnis Islam UI · Alumni SMA Angkatan IV',
  },
  {
    teks: 'Guru-guru di Al Akhyar tidak hanya mengajar, tetapi mendampingi kami menemukan minat masing-masing. Program pemantapan dan tes minat bakat membuat saya yakin memilih jurusan, hingga akhirnya diterima di Universitas Indonesia.',
    nama: 'Salsa Puspaningrum BZ',
    peran: 'Mahasiswa Ilmu Administrasi Niaga UI · Alumni SMA Angkatan IV',
    karangan: true,
  },
  {
    teks: 'Al Akhyar adalah sekolah pertama di daerah Sudiang yang memberikan penghargaan beasiswa kepada anak-anak yang memiliki hafalan Al-Qur’an, baik tingkat SD, SMP, maupun SMA. Itulah daya tarik kami menyekolahkan ketiga anak kami di Al Akhyar.',
    nama: 'Lisa Purwati Ilham',
    peran: 'Orang Tua Siswa SMP Islam Al Akhyar',
    foto: 'lisa',
  },
  {
    teks: 'SD Islam Al Akhyar adalah salah satu sekolah Islam terbaik di Makassar — unggul mendidik anak berakhlak mulia sekaligus berorientasi pada ilmu agama dan umum. Sarana memadai dan pengajar yang kompeten membuat anak-anak lebih menikmati proses belajar. Saya bangga menyekolahkan anak saya di sini.',
    nama: 'Hamka',
    peran: 'Orang Tua Siswa SD Islam Al Akhyar',
    foto: 'hamka',
  },
  {
    teks: 'Keputusan menyekolahkan anak saya di TK Al Akhyar sangat tepat. Anak saya mendapatkan fasilitas, pendidikan, lingkungan, dan guru yang terbaik. Adab dan ilmu diajarkan beriringan dan dikemas dengan cara yang menyenangkan.',
    nama: 'Minanty Candiwaty',
    peran: 'Orang Tua Siswa TK/KB Islam Al Akhyar',
    foto: 'minanty',
  },
] as const;

// Alumni SMA angkatan terbaru (2025/2026) — data resmi sekolah
export const alumniTerbaru = {
  angkatan: '2025/2026',
  daftar: [
    { nama: 'Annida Althafunnisa', prodi: 'Bisnis Islam', kampus: 'Universitas Indonesia', singkat: 'UI', logo: '/kampus/ui.svg' },
    { nama: 'Salsa Puspaningrum BZ', prodi: 'Ilmu Administrasi Niaga', kampus: 'Universitas Indonesia', singkat: 'UI', logo: '/kampus/ui.svg' },
    { nama: 'Sitti Fadillah Almira Fahrini', prodi: 'Pendidikan Dokter', kampus: 'Universitas Hasanuddin', singkat: 'UNHAS', logo: '/kampus/unhas.png' },
    { nama: 'Alya’ Nuriadi Sindi', prodi: 'Ekonomi dan Bisnis Islam', kampus: 'Universitas Hasanuddin', singkat: 'UNHAS', logo: '/kampus/unhas.png' },
    { nama: 'WD. Rahel Azzalikha Ananda', prodi: 'Wilayah dan Kota', kampus: 'Universitas Hasanuddin', singkat: 'UNHAS', logo: '/kampus/unhas.png' },
    { nama: 'Afifa Salsabila Herwan', prodi: 'Agroteknologi', kampus: 'Universitas Hasanuddin', singkat: 'UNHAS', logo: '/kampus/unhas.png' },
    { nama: 'Rizka Amaliah S', prodi: 'Ilmu Keperawatan', kampus: 'Universitas Hasanuddin', singkat: 'UNHAS', logo: '/kampus/unhas.png' },
    { nama: 'Naura Azzahra Nawawi', prodi: 'Kesehatan Masyarakat', kampus: 'Universitas Hasanuddin', singkat: 'UNHAS', logo: '/kampus/unhas.png' },
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
  { label: 'Karir', href: 'https://s.alakhyar.sch.id/karir' },
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
    nama: 'TK/KB Islam',
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
