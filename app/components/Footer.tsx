import Logo from "./Logo";
import StoreButtons from "./StoreButtons";
import { DELETE_ACCOUNT_URL, PRIVACY_URL, SUPPORT_EMAIL, SUPPORT_PHONE_LABEL, TERMS_URL, WHATSAPP_URL } from "../site";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="mb-5">
              <Logo dark />
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md mb-6">
              Aplikasi kasir laundry untuk UMKM Indonesia. Catat cucian kiloan & satuan, kirim nota lewat WhatsApp,
              dan pantau keuangan laundry dari HP. Bisa offline, tanpa iklan.
            </p>
            <div className="flex items-center gap-4">
              <StoreButtons />
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-5">Produk</h4>
            <ul className="space-y-3">
              {[
                { name: "Fitur", href: "/#fitur" },
                { name: "Cara Pakai", href: "/#cara-pakai" },
                { name: "FAQ", href: "/#faq" },
                { name: "Harga", href: "/#harga" },
                { name: "Kebijakan Privasi", href: PRIVACY_URL },
                { name: "Syarat & Ketentuan", href: TERMS_URL },
                { name: "Hapus Akun", href: DELETE_ACCOUNT_URL },
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-400 hover:text-brand-light transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-5">Hubungi Kami</h4>
            <ul className="space-y-5">
              <li>
                <span className="block text-xs font-semibold uppercase tracking-wider text-brand-light mb-1">WhatsApp</span>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-brand-light transition-colors"
                >
                  {SUPPORT_PHONE_LABEL}
                </a>
              </li>
              <li>
                <span className="block text-xs font-semibold uppercase tracking-wider text-brand-light mb-1">Email</span>
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-gray-400 hover:text-brand-light transition-colors break-all">
                  {SUPPORT_EMAIL}
                </a>
              </li>
              <li>
                <span className="block text-xs font-semibold uppercase tracking-wider text-brand-light mb-1">Alamat</span>
                <span className="block text-gray-400 leading-relaxed">
                  Jl. Mijil, Gedongan, Bangunjiwo, Kec. Kasihan, Kabupaten Bantul,
                  Daerah Istimewa Yogyakarta 55184
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-14 pt-8">
          <p className="text-sm text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} LaundryGo+. Dibuat dengan ❤️ untuk laundry UMKM Indonesia oleh{" "}
            <a
              href="https://play.google.com/store/apps/developer?id=Yosada+Labs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand-light transition-colors"
            >
              Yosada Labs
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
