const KenapaSection = () => {
  const features = [
    {
      icon: "🧺",
      iconBg: "bg-brand/10",
      title: "Dibuat Khusus untuk Laundry",
      description:
        "Kiloan dengan berat minimum, satuan seperti bedcover dan sepatu, Reguler/Express/Kilat dengan harga sendiri, parfum, sampai antar ke rumah pelanggan.",
    },
    {
      icon: "📶",
      iconBg: "bg-teal-100",
      title: "Tetap Jalan Tanpa Internet",
      description:
        "Terima cucian dan catat pembayaran walau sinyal hilang. Data tersinkron dan ter-backup otomatis begitu online, jadi aman walau ganti HP.",
    },
    {
      icon: "💬",
      iconBg: "bg-green-100",
      title: "Pelanggan Selalu Tahu Kabar Cucian",
      description:
        "Kirim nota dan pesan \"cucian sudah selesai\" lewat WhatsApp, plus pengingat untuk cucian yang belum diambil dan tagihan kasbon.",
    },
    {
      icon: "🎁",
      iconBg: "bg-amber-100",
      title: "Gratis, Tanpa Iklan",
      description:
        "Semua fitur bisa dipakai gratis, tanpa iklan. Cocok untuk laundry rumahan sampai yang sudah punya beberapa karyawan.",
    },
  ];

  return (
    <section id="kenapa" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            Kenapa <span className="text-brand">LaundryGo+</span>?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Buku nota dan catatan manual diganti satu aplikasi di HP: cucian tercatat rapi, tagihan tidak terlewat,
            dan keuntungan laundry kelihatan jelas.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white border border-gray-200 rounded-3xl p-7 hover:shadow-xl hover:shadow-gray-200/50 hover:border-brand/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-14 h-14 ${feature.iconBg} rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KenapaSection;
