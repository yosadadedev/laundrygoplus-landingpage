# LaundryGo+ — App Reference

Sumber data untuk konten landing page. Diambil dari aplikasi LaundryGo+ di monorepo ini (`CLAUDE.md` di root dan `docs/status.md`), dicek 2026-11-19. Jangan menulis fitur, angka, atau rating yang tidak ada di sini.

## Info dasar

| Field | Value |
|---|---|
| Nama aplikasi | LaundryGo+ (aplikasi kasir laundry) |
| Slogan | Cucian rapi, cuan pasti. |
| Package ID | `com.yl.laundrygoplus` |
| Developer | Yosada Labs |
| Platform | Android (Play Store). iPhone **belum** tersedia (sedang disiapkan) |
| Harga | **Gratis semua fitur**, tanpa iklan (situs cukup menyebut "gratis", tanpa "masa peluncuran"/"promo") |
| Rating | Belum ada (app baru) — jangan tampilkan angka rating atau jumlah pengguna |
| Versi | 1.0.0 |
| Domain | `laundrygoplus.id` (situs ini), API `api.laundrygoplus.id` |

## Fitur (yang sudah ada di app)

- **Kasir kiloan & satuan**: timbang saat cucian masuk; berat minimum per layanan (di bawahnya ditagih sesuai minimum, berat asli tetap tercatat)
- **Durasi Reguler / Express / Kilat**: harga sendiri per layanan per durasi; estimasi selesai otomatis; order non-reguler diberi tanda
- **Status cucian**: Diterima → Dicuci → Disetrika → Selesai → Diambil; filter terlambat / harus selesai hari ini; batal order dengan alasan
- **Nota**: WhatsApp (teks), gambar (PNG), printer thermal Bluetooth 58/80 mm; **label cucian** per kantong
- **Pembayaran**: tunai + kembalian, QRIS, transfer, DP, kasbon, bayar saat ambil; Kelola Piutang
- **Diskon**: per item (manual) dan per pesanan (dari Kelola Diskon, rupiah/persen, minimal belanja opsional)
- **Pelanggan**: riwayat order, parfum terakhir; **pengingat WhatsApp** cucian belum diambil & tagihan kasbon
- **Antar**: order Diantar dengan alamat
- **Laporan**: penjualan, laba bersih, piutang, catatan pengeluaran & pemasukan lain; export Excel & PDF
- **Banyak HP & kasir**: undang kasir dengan kode, hak akses per kasir; sampai 3 HP & 3 kasir
- **Offline-first**: wajib login sekali (butuh internet), setelah itu kasir jalan tanpa internet; sinkron & backup otomatis
- **Lainnya**: parfum, kategori, tema terang/gelap, warna aplikasi

Tidak disebut di situs (belum siap atau disembunyikan): paket member/kuota (menu disembunyikan), multi-cabang, harga paket Pro (disembunyikan, app saat ini gratis).

## Printer

Android: Bluetooth Classic dan BLE. iPhone: hanya printer BLE. Tanpa printer: nota WhatsApp atau gambar.

## Kontak

- Email support: aplikasigoumkm@gmail.com
- WhatsApp admin: https://wa.me/62859106610011 (sama dengan `SUPPORT_WHATSAPP` di `packages/shared/src/legal.ts`)
- Play Store: https://play.google.com/store/apps/details?id=com.yl.laundrygoplus (aktif setelah app terbit)
- Kebijakan Privasi / Syarat & Ketentuan / Hapus Akun: disajikan API (`https://api.laundrygoplus.id/privacy`, `/terms`, `/delete-account`), teksnya dari `packages/shared/src/legal.ts`
- Semua nilai ini ada di `app/site.ts` dan `app/components/StoreButtons.tsx`
