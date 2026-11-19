# LaundryGo+ — Landing Page

Situs `https://laundrygoplus.id` untuk aplikasi kasir laundry LaundryGo+ (Next.js + Tailwind CSS).

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm run start
```

- Isi halaman mengikuti [APP_INFO.md](APP_INFO.md); panduan kode di [CLAUDE.md](CLAUDE.md).
- Link toko & kontak: `app/components/StoreButtons.tsx` dan `app/site.ts`.
- Google Analytics: isi `NEXT_PUBLIC_GA_ID` saat build production (property GA khusus LaundryGo+).
