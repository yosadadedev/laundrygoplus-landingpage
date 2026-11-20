import type { Metadata, Viewport } from "next";
import { Comfortaa, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import WhatsAppFloat from "./components/WhatsAppFloat";
import { PLAY_STORE_URL } from "./components/StoreButtons";
import AnalyticsEvents from "./components/AnalyticsEvents";
import { faqs, hargaFaqs, type Faq } from "./data/faqs";
import { SITE_URL, SUPPORT_EMAIL, SUPPORT_PHONE } from "./site";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

// The "laundrygo+" wordmark, like the app.
const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const siteUrl = SITE_URL;
// GA4 hanya aktif di build production dan kalau NEXT_PUBLIC_GA_ID diisi (property GA khusus LaundryGo+).
const gaId = process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_GA_ID : undefined;

const title = "LaundryGo+ — Aplikasi Kasir Laundry Kiloan & Satuan, Bisa Offline";
const description =
  "Aplikasi kasir laundry untuk UMKM: catat cucian kiloan & satuan, Reguler/Express/Kilat, nota WhatsApp & printer Bluetooth, status cucian, kasbon, dan laporan keuangan. Bisa offline.";

export const viewport: Viewport = {
  themeColor: "#D97757",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "LaundryGo+",
  keywords: [
    "aplikasi laundry",
    "aplikasi kasir laundry",
    "aplikasi laundry gratis",
    "aplikasi laundry android",
    "aplikasi laundry offline",
    "aplikasi laundry kiloan",
    "kasir laundry",
    "software laundry",
    "nota laundry whatsapp",
    "cetak nota laundry",
    "label laundry",
    "laporan keuangan laundry",
    "aplikasi umkm laundry",
    "laundrygo+",
  ],
  authors: [{ name: "Yosada Labs" }],
  creator: "Yosada Labs",
  publisher: "Yosada Labs",
  category: "business",
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: "/",
  },
  // Gambar OG & Twitter diambil otomatis dari app/opengraph-image.tsx
  openGraph: {
    title,
    description,
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "LaundryGo+",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const toFaqEntity = (faq: Faq) => ({
  "@type": "Question",
  name: faq.question,
  acceptedAnswer: { "@type": "Answer", text: faq.answer },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "LaundryGo+",
      url: siteUrl,
      logo: `${siteUrl}/favicon.svg`,
      email: SUPPORT_EMAIL,
      telephone: `+${SUPPORT_PHONE}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jl. Mijil, Gedongan, Bangunjiwo",
        addressLocality: "Kasihan, Bantul",
        addressRegion: "Daerah Istimewa Yogyakarta",
        postalCode: "55184",
        addressCountry: "ID",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: `+${SUPPORT_PHONE}`,
        email: SUPPORT_EMAIL,
        availableLanguage: ["id"],
      },
      parentOrganization: { "@type": "Organization", name: "Yosada Labs" },
      sameAs: [PLAY_STORE_URL],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "LaundryGo+",
      inLanguage: "id-ID",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#app`,
      name: "LaundryGo+",
      alternateName: "LaundryGo+ Aplikasi Kasir Laundry",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Android",
      softwareVersion: "1.0.0",
      inLanguage: "id-ID",
      description:
        "Aplikasi kasir laundry untuk UMKM Indonesia: order kiloan & satuan, durasi Reguler/Express/Kilat, nota WhatsApp & printer, status cucian, kasbon, dan laporan. Offline-first.",
      url: siteUrl,
      downloadUrl: [PLAY_STORE_URL],
      installUrl: [PLAY_STORE_URL],
      screenshot: [`${siteUrl}/screens/kasir.webp`, `${siteUrl}/screens/order.webp`, `${siteUrl}/screens/laporan.webp`],
      featureList: [
        "Kasir laundry kiloan & satuan",
        "Berat minimum per layanan",
        "Durasi Reguler, Express, Kilat dengan harga sendiri",
        "Status cucian dan pengingat cucian belum diambil",
        "Nota WhatsApp, nota gambar, dan printer thermal Bluetooth",
        "Cetak label cucian",
        "Tunai, QRIS, transfer, DP, kasbon, bayar saat ambil",
        "Diskon per item dan per pesanan",
        "Laporan penjualan, laba bersih, piutang, dan pengeluaran",
        "Export laporan Excel & PDF",
        "Banyak HP dan kasir dengan hak akses",
        "Offline-first, sinkron dan backup otomatis",
      ],
      publisher: { "@id": `${siteUrl}/#organization` },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "IDR",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: [...faqs, ...hargaFaqs].map(toFaqEntity),
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} ${jetBrainsMono.variable} ${comfortaa.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <WhatsAppFloat />
        {gaId && (
          <>
            <GoogleAnalytics gaId={gaId} />
            <AnalyticsEvents />
          </>
        )}
      </body>
    </html>
  );
}
