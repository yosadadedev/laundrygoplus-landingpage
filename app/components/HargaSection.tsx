"use client";

import { useState } from "react";
import { hargaFaqs } from "../data/faqs";
import StoreButtons from "./StoreButtons";

// Free (the app hides its plans too: PAID_PLANS_ENABLED = false). If paid plans ever start,
// show them here from the same numbers as the app (apps/mobile/src/features/subscription/plans.ts).
const included = [
  { icon: "🧺", title: "Semua fitur kasir laundry", description: "Kiloan & satuan, Reguler/Express/Kilat, status cucian, kasbon, diskon." },
  { icon: "🧾", title: "Nota, printer & label", description: "Nota WhatsApp dan gambar, printer thermal Bluetooth, label untuk tiap kantong." },
  { icon: "📊", title: "Laporan lengkap", description: "Penjualan, laba bersih, piutang, pengeluaran, export Excel & PDF." },
  { icon: "📱", title: "Sampai 3 HP & 3 kasir", description: "Akun kasir sendiri-sendiri dengan hak akses yang bisa diatur." },
  { icon: "☁️", title: "Backup otomatis", description: "Data tersinkron ke server, aman walau HP rusak atau ganti HP." },
  { icon: "🚫", title: "Tanpa iklan", description: "Fokus kerja tanpa gangguan, sekarang dan nanti." },
];

const HargaSection = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  return (
    <section id="harga" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand/5 border border-brand/15 rounded-full text-sm font-semibold text-brand-dark mb-6">
            🎉 100% GRATIS
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Semua Fitur <span className="text-brand">Gratis</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Tidak perlu kartu kredit, tidak ada biaya tersembunyi. Download, daftar, dan langsung terima cucian.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-24 bg-white border border-gray-200 rounded-3xl p-8 sm:p-10 shadow-xl shadow-gray-200/60">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 pb-8 border-b border-gray-200">
            <div>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Harga sekarang</p>
              <p className="text-5xl font-extrabold text-gray-900">
                Rp0
              </p>
            </div>
            <StoreButtons theme="dark" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {included.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex-shrink-0 w-11 h-11 bg-brand/10 rounded-xl flex items-center justify-center text-xl">{item.icon}</div>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center mb-10">
            Pertanyaan Umum seputar Harga
          </h3>
          <div className="space-y-4">
            {hargaFaqs.map((faq, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-3xl border border-gray-200 overflow-hidden ${
                  faqOpen === idx ? "shadow-lg shadow-gray-200/40" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                  aria-expanded={faqOpen === idx}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 sm:px-7 py-5 sm:py-6 group"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <span className="flex-shrink-0 w-7 h-7 bg-brand/5 rounded-full flex items-center justify-center text-brand font-bold text-lg">
                      ?
                    </span>
                    <span className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-brand transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                      faqOpen === idx ? "rotate-180 text-brand" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    faqOpen === idx ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 sm:px-7 pb-6 sm:pb-8 pl-16 sm:pl-[4.5rem]">
                    <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HargaSection;
