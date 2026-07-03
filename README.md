# ☕ District Coffee

**District Coffee** adalah landing page premium untuk kedai kopi modern yang dirancang sebagai ruang kerja yang tenang, nyaman, dan produktif bagi para pekerja lepasan (WFC - *Work From Cafe*) maupun pertemuan bisnis.

Landing page ini menonjolkan estetika desain modern (*glassmorphism*, warna bertema kopi yang hangat) serta interaksi animasi tingkat tinggi yang responsif dan interaktif.

🔗 **Live Demo**: [districtcoffee.vercel.app](https://districtcoffee.vercel.app/)

---

## 🌟 Fitur Utama

- **✨ Desain Estetis & Premium**: Palet warna bertema kopi hangat (`#995F2F`, `#faf8f1`, `#17191f`) yang dikombinasikan dengan tata letak minimalis dan tipografi elegan menggunakan Google Fonts (*Instrument Serif* & *Inter*).
- **🚀 GSAP Animations & Interactions**:
  - **Heading Mask Reveal**: Judul teks muncul secara perlahan menggunakan efek mask ketika di-scroll.
  - **Card Tilt Effect**: Efek kemiringan 3D interaktif pada kartu saat kursor mouse bergerak di atasnya.
  - **Magnetic Buttons**: Tombol interaktif yang memiliki daya tarik magnetis halus mengikuti pergerakan kursor.
  - **Scroll Reveal**: Animasi halus dengan efek blur yang memudar untuk elemen-elemen konten saat pertama kali muncul di layar.
- **📜 Lenis Smooth Scroll**: Navigasi halaman yang sangat halus dengan integrasi pustaka *Lenis Smooth Scroll*, lengkap dengan transisi anchor link yang mulus.
- **🗺️ Navbar Interaktif & Cerdas**:
  - Tombol menu aktif yang otomatis berpindah mengikuti posisi scroll pengguna menggunakan *Intersection Observer*.
  - Dilengkapi menu **Beranda** yang mengarah langsung kembali ke bagian Hero.
- **🔍 Optimalisasi SEO & Aksesibilitas**:
  - **JSON-LD Structured Data**: Struktur data lengkap tipe `CafeOrCoffeeShop` untuk mempermudah SEO Lokal Google Search.
  - **Open Graph & Twitter Card**: Metadata lengkap untuk kemudahan berbagi link di platform media sosial dengan tampilan visual yang rapi.
  - **Semantic HTML**: Struktur kode yang ramah aksesibilitas (*screen reader*) dengan atribut `aria-label` yang lengkap.

---

## 🛠️ Tech Stack

- **Core**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS
- **Animasi & Interaksi**:
  - [GSAP (GreenSock Animation Platform)](https://gsap.com/) & [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
  - [Lenis](https://lenis.darkroom.engineering/) (Smooth Scroll)
- **Ikon**: [Iconify React](https://iconify.design/) (`@iconify/react`)

---

## 📂 Struktur Proyek

Proyek ini menggunakan struktur direktori React standar yang terorganisasi dengan baik:

```text
District Coffee/
├── dist/                # Hasil build produksi siap dideploy
├── public/              # Aset statis global (ikon aplikasi & aset gambar)
│   ├── assets/          # Aset gambar beresolusi tinggi (kopi, barista, interior kafe, dll)
│   ├── icon.png         # Logo/ikon District Coffee
│   └── robots.txt / sitemap.xml # Konfigurasi SEO
├── src/                 # Kode sumber aplikasi
│   ├── assets/          # Aset lokal (saat ini kosong)
│   ├── components/      # Komponen UI modular
│   │   ├── Header.tsx   # Header & navigasi dengan Intersection Observer
│   │   ├── Hero.tsx     # Section utama selamat datang & testimoni harian
│   │   ├── Menu.tsx     # Menu minuman & makanan favorit
│   │   ├── Testimonials.tsx # Ulasan & testimoni dari pelanggan setia
│   │   ├── Trusted.tsx  # Banner/kolaborator tepercaya
│   │   ├── About.tsx    # Informasi profil barista, pimpinan pastry, & misi kafe
│   │   ├── Gallery.tsx  # Galeri foto suasana kedai kopi
│   │   └── Footer.tsx   # Informasi jam operasional & hak cipta
│   ├── App.tsx          # Mengatur interaksi GSAP global, Lenis, & struktur halaman utama
│   ├── App.css          # Gaya khusus aplikasi
│   ├── index.css        # Impor Tailwind CSS & pengaturan scrollbar/marquee
│   └── main.tsx         # Titik masuk utama React
├── index.html           # File HTML utama dengan meta SEO & JSON-LD
├── vite.config.ts       # Konfigurasi plugin React & Tailwind v4 untuk Vite
└── package.json         # Dependensi & skrip proyek
```

---

## 🚀 Cara Menjalankan Proyek

### Prasyarat

Pastikan Anda sudah menginstal [Node.js](https://nodejs.org/) di perangkat Anda.

### Langkah-langkah Instalasi

1. **Clone repositori ini**:
   ```bash
   git clone https://github.com/username/District-Coffee.git
   ```

2. **Masuk ke folder proyek**:
   ```bash
   cd District-Coffee
   ```

3. **Instal seluruh dependensi**:
   ```bash
   npm install
   ```

4. **Jalankan server pengembangan lokal**:
   ```bash
   npm run dev
   ```
   Buka browser dan akses ke alamat `http://localhost:5173`.

5. **Build untuk mode produksi**:
   ```bash
   npm run build
   ```

6. **Pratinjau hasil build produksi**:
   ```bash
   npm run preview
   ```

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT.

---

**Developed by Ahmad nh👾 | [ahmadnh.is-a.dev](https://ahmadnh.is-a.dev)**
