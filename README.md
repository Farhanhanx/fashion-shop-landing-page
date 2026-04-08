# Fashion Shop Landing Page

Landing page fashion yang colorful, responsif, dan modern, dibangun dengan React, Vite, TypeScript, Tailwind CSS, dan Framer Motion. Proyek ini dirancang sebagai tampilan portofolio yang siap dipublikasikan untuk brand fashion digital dengan gradien cerah, animasi halus, dan layout mobile-first yang rapi.

## Tampilan

Tambahkan screenshot proyek di bagian ini sebelum dipublikasikan.

## Fitur

- Layout responsif untuk mobile, tablet, dan desktop
- Section hero dengan background animasi dan visual produk unggulan
- Grid produk dengan harga dan rating
- Section koleksi musiman dengan highlight kategori
- Testimoni pelanggan dan statistik kepercayaan
- Section newsletter dengan desain gradien yang menarik
- Footer modern dengan kontak dan tautan sosial
- Interaksi halus menggunakan Framer Motion

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Struktur Proyek

```text
src/
  assets/
  components/
    Navbar.tsx
    Hero.tsx
    FeaturedProducts.tsx
    Collections.tsx
    Testimonials.tsx
    Newsletter.tsx
    Footer.tsx
  App.tsx
  main.tsx
```

## Cara Menjalankan

### Persyaratan

- Node.js 18 atau yang lebih baru
- npm

### Install dependensi

```bash
npm install
```

### Menjalankan development server

```bash
npm run dev
```

### Build untuk production

```bash
npm run build
```

### Preview hasil build

```bash
npm run preview
```

## Kustomisasi

- Ubah isi [src/components/Hero.tsx](src/components/Hero.tsx) untuk menyesuaikan cerita brand atau banner utama
- Ganti visual demo di [src/assets](src/assets) dengan gambar milikmu sendiri
- Perbarui nama produk, harga, dan copy agar sesuai dengan identitas portofolio kamu
- Sesuaikan tema Tailwind di [tailwind.config.js](tailwind.config.js) supaya warnanya cocok dengan brand kamu

## Deployment

Proyek ini bisa dipublikasikan dengan mudah ke Vercel, Netlify, atau Cloudflare Pages.

Perintah build yang disarankan:

```bash
npm run build
```

## Catatan

- Layout sudah dioptimalkan untuk presentasi brand fashion yang colorful
- Desain saat ini memakai asset lokal dan elemen animasi agar terlihat lebih polished di portofolio

## Lisensi

Proyek ini ditujukan untuk kebutuhan portofolio dan showcase pribadi.
