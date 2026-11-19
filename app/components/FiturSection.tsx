const FiturSection = () => {
  const features = [
    {
      icon: "⚖️",
      iconBg: "bg-brand/10",
      title: "Kiloan & Satuan",
      description:
        "Timbang langsung saat cucian masuk. Berat di bawah minimum otomatis ditagih sesuai minimum, berat aslinya tetap tercatat. Barang satuan dihitung per pcs.",
    },
    {
      icon: "⏱️",
      iconBg: "bg-brand/10",
      title: "Reguler, Express, Kilat",
      description:
        "Tiap layanan punya harga sendiri per durasi. Estimasi selesai dihitung otomatis dan tercetak di nota, order Express/Kilat diberi tanda supaya dikerjakan duluan.",
    },
    {
      icon: "🧾",
      iconBg: "bg-brand/10",
      title: "Nota WhatsApp, Cetak & Label",
      description:
        "Kirim nota lewat WhatsApp atau sebagai gambar, cetak di printer thermal Bluetooth 58/80 mm, plus label cucian untuk tiap kantong.",
    },
    {
      icon: "🔄",
      iconBg: "bg-brand/10",
      title: "Status Cucian",
      description:
        "Diterima, Dicuci, Disetrika, Selesai, Diambil. Lihat cucian yang terlambat atau harus selesai hari ini dalam satu ketukan.",
    },
    {
      icon: "💳",
      iconBg: "bg-indigo-100",
      title: "Pembayaran Fleksibel",
      description:
        "Tunai dengan kembalian otomatis, QRIS, transfer, DP, kasbon, atau bayar saat ambil. Sisa tagihan selalu kelihatan.",
    },
    {
      icon: "🏷️",
      iconBg: "bg-amber-100",
      title: "Diskon",
      description:
        "Diskon per item atau per pesanan, dalam rupiah atau persen. Simpan diskon yang sering dipakai, lengkap dengan minimal belanja.",
    },
    {
      icon: "👥",
      iconBg: "bg-green-100",
      title: "Pelanggan & Pengingat",
      description:
        "Riwayat order dan parfum favorit tiap pelanggan. Ingatkan cucian yang belum diambil dan tagihan kasbon lewat WhatsApp.",
    },
    {
      icon: "📊",
      iconBg: "bg-green-100",
      title: "Laporan Keuangan",
      description:
        "Penjualan, laba bersih, piutang, serta catatan pengeluaran dan pemasukan lain. Export ke Excel atau PDF.",
    },
    {
      icon: "📱",
      iconBg: "bg-teal-100",
      title: "Banyak HP & Kasir",
      description:
        "Pakai di beberapa HP sekaligus dengan akun kasir sendiri dan hak akses yang bisa diatur. Data tersinkron otomatis antar HP.",
    },
  ];

  return (
    <section id="fitur" className="py-20 lg:py-28 bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-brand/10 text-brand-dark rounded-full text-sm font-bold tracking-wider uppercase mb-5">
            Fitur Lengkap
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Semua yang Dibutuhkan Kasir Laundry
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Dari cucian masuk sampai diambil pelanggan, semuanya tercatat di satu aplikasi.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white border border-gray-200 rounded-3xl p-7 hover:shadow-xl hover:shadow-gray-200/50 hover:border-brand/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-14 h-14 ${feature.iconBg} rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FiturSection;
