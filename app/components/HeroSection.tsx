import Image from "next/image";
import StoreButtons from "./StoreButtons";

// Screenshots in public/screens/: 640 px WebP made from the full-size captures (~40 KB each),
// enough for the largest phone here (18rem) on a 2x screen. Already small, so `unoptimized`.
const SCREENS = {
  center: { src: "/screens/kasir.webp", alt: "Layar Kasir LaundryGo+: katalog layanan kiloan dan satuan" },
  left: { src: "/screens/order.webp", alt: "Layar Order LaundryGo+: daftar cucian dengan status dan tagihan" },
  right: { src: "/screens/laporan.webp", alt: "Layar Laporan LaundryGo+: penjualan, piutang kasbon, dan laba bersih" },
};

const SidePhone = ({ side }: { side: "left" | "right" }) => (
  <div
    className={`absolute top-1/2 -translate-y-1/2 ${
      side === "left" ? "-left-[34%] sm:-left-[48%] md:-left-[44%]" : "-right-[34%] sm:-right-[48%] md:-right-[44%]"
    } w-[68%] sm:w-[78%] max-w-[13rem] aspect-[9/20] z-0 transition-all hover:scale-[1.02] duration-500`}
  >
    <div className="relative w-full h-full bg-gray-900 rounded-[2.1rem] p-1 sm:p-1.5 shadow-xl shadow-gray-900/25">
      <div className="relative w-full h-full overflow-hidden rounded-[1.65rem] bg-white">
        <Image src={SCREENS[side].src} alt={SCREENS[side].alt} fill className="object-cover object-top" sizes="208px" unoptimized />
      </div>
    </div>
  </div>
);

/** Kasir in front, Order and Laporan behind it. */
const PhonePreview = () => (
  <div className="relative w-full flex items-center justify-center">
    <div className="relative w-full max-w-[11rem] sm:max-w-[17rem] md:max-w-[17.5rem] aspect-[9/20] mx-auto">
      <SidePhone side="left" />
      <SidePhone side="right" />
      <div className="relative w-full h-full z-20 shadow-[0_18px_38px_-12px_rgba(0,0,0,0.35)] rounded-[2.35rem]">
        <div className="relative w-full h-full bg-gray-900 rounded-[2.35rem] p-1.5 shadow-2xl shadow-gray-900/45">
          <div className="relative w-full h-full overflow-hidden rounded-[1.9rem] bg-white">
            <Image
              src={SCREENS.center.src}
              alt={SCREENS.center.alt}
              fill
              className="object-cover object-top"
              priority
              sizes="280px"
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const HeroSection = () => {
  return (
    <section id="hero" className="relative overflow-hidden pt-4 pb-12 lg:pt-8 lg:pb-20">
      <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-white to-brand/3" />
      <div className="absolute top-16 right-40 w-[32rem] h-[32rem] bg-brand/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-14 items-center">
          <div className="space-y-6 lg:space-y-7">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brand/5 border border-brand/15 rounded-full text-sm font-semibold text-brand-dark">
              🧺 Cucian rapi, cuan pasti.
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold text-gray-900 leading-[0.98] tracking-tight">
              Aplikasi Kasir Laundry yang{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-brand font-extrabold">Rapi</span>
                <span className="absolute bottom-0.5 left-0 w-full h-2.5 bg-yellow-300/75 -z-0 rounded-sm" />
              </span>{" "}
              & Gampang Dipakai
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Catat cucian kiloan dan satuan, kirim nota lewat WhatsApp, pantau cucian yang harus selesai hari ini,
              dan lihat keuangan laundry-mu langsung dari HP dengan <strong>LaundryGo+</strong>. Tetap jalan walau
              internet putus.
            </p>

            <StoreButtons theme="dark" className="pt-1" />

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500 pt-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Gratis
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Tanpa iklan
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Bisa offline
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <PhonePreview />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
