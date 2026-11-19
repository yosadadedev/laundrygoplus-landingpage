// Dipakai oleh FAQSection & HargaSection, sekaligus JSON-LD FAQPage di layout.tsx,
// supaya isi structured data selalu sama dengan yang tampil di halaman.
// Isi mengikuti aplikasi LaundryGo+ (lihat APP_INFO.md); jangan menjanjikan fitur yang belum ada.

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "Apakah LaundryGo+ gratis?",
    answer:
      "Ya. Semua fitur LaundryGo+ bisa dipakai gratis tanpa iklan, termasuk beberapa HP dan akun kasir, cetak label, dan export laporan.",
  },
  {
    question: "Apakah butuh internet?",
    answer:
      "Hanya saat pertama kali daftar atau masuk. Setelah itu kasir tetap bisa dipakai tanpa internet: terima cucian, catat pembayaran, dan cetak nota. Data otomatis tersinkron dan ter-backup begitu HP online lagi.",
  },
  {
    question: "Bagaimana cara menghitung cucian kiloan?",
    answer:
      "Ketuk layanan kiloan lalu masukkan beratnya, misalnya 4,5 kg. Kalau layanan punya berat minimum (misalnya 3 kg) dan cucian di bawahnya, yang ditagih sesuai minimum, tapi berat aslinya tetap tercatat di nota.",
  },
  {
    question: "Bisa membedakan harga Reguler, Express, dan Kilat?",
    answer:
      "Bisa. Setiap layanan punya harga sendiri per durasi, misalnya Cuci Kiloan Reguler Rp7.000, Express Rp10.000, Kilat Rp15.000 per kg. Durasi dan lama pengerjaannya bisa diubah di Kelola Durasi, dan estimasi selesai tercetak di nota.",
  },
  {
    question: "Bisa kasbon atau bayar saat cucian diambil?",
    answer:
      "Bisa. Pelanggan boleh bayar penuh, DP sebagian, kasbon, atau bayar saat ambil. Sisa tagihan tercatat di Kelola Piutang dan bisa ditagih lewat pengingat WhatsApp.",
  },
  {
    question: "Printer apa yang didukung?",
    answer:
      "Printer thermal Bluetooth 58 mm dan 80 mm. Di Android bisa printer Bluetooth biasa maupun BLE; di iPhone hanya printer Bluetooth Low Energy (BLE). Tanpa printer, nota tetap bisa dikirim lewat WhatsApp atau sebagai gambar.",
  },
  {
    question: "Bisa dipakai beberapa kasir atau HP?",
    answer:
      "Bisa. Undang karyawan dengan kode, masing-masing masuk dengan akunnya sendiri, dan hak aksesnya bisa diatur (misalnya tidak bisa melihat laporan). Satu usaha bisa memakai sampai 3 HP dan 3 akun kasir.",
  },
  {
    question: "Bagaimana kalau HP rusak atau hilang?",
    answer:
      "Data usaha tersimpan di server setiap kali HP online. Pasang LaundryGo+ di HP baru, masuk dengan akun yang sama, dan data laundry-mu terunduh kembali.",
  },
  {
    question: "Apakah tersedia untuk iPhone?",
    answer:
      "Saat ini LaundryGo+ tersedia untuk HP dan tablet Android di Google Play Store. Versi iPhone sedang disiapkan.",
  },
];

export const hargaFaqs: Faq[] = [
  {
    question: "Benar-benar gratis? Ada biaya tersembunyi?",
    answer:
      "Gratis. Tidak perlu kartu kredit, tidak ada biaya pendaftaran, dan tidak ada biaya tersembunyi. Cukup download, daftar, dan langsung pakai.",
  },
  {
    question: "Apa saja yang bisa dipakai gratis?",
    answer:
      "Semua fitur: kasir kiloan & satuan, nota WhatsApp dan printer, cetak label, status cucian, pengingat, kasbon, diskon, laporan lengkap dengan export Excel & PDF, serta sampai 3 HP dan 3 akun kasir.",
  },
  {
    question: "Apakah ada iklan?",
    answer: "Tidak ada. LaundryGo+ tanpa iklan, sekarang dan nanti.",
  },
];
