import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "LaundryGo+ — Aplikasi Kasir Laundry Kiloan & Satuan, Bisa Offline";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [logo, screenshot] = await Promise.all([
    readFile(join(process.cwd(), "public/laundrygoplus-icon.svg"), "base64"),
    // JPEG: the OG renderer does not read WebP.
    readFile(join(process.cwd(), "public/screens/kasir-og.jpg"), "base64"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 80px",
          background: "linear-gradient(135deg, #D97757 0%, #B9583A 100%)",
          color: "white",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 660 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 36 }}>
            <img src={`data:image/svg+xml;base64,${logo}`} width={92} height={56} alt="" />
            <div style={{ fontSize: 44, fontWeight: 700 }}>LaundryGo+</div>
          </div>
          <div style={{ fontSize: 62, fontWeight: 800, lineHeight: 1.1, marginBottom: 28 }}>
            Aplikasi Kasir Laundry untuk UMKM
          </div>
          <div style={{ fontSize: 30, opacity: 0.9, lineHeight: 1.35 }}>
            Kiloan & satuan, nota WhatsApp, status cucian, dan laporan keuangan. Tetap jalan tanpa internet.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 40,
              padding: "14px 28px",
              background: "white",
              color: "#D97757",
              borderRadius: 999,
              fontSize: 26,
              fontWeight: 700,
              alignSelf: "flex-start",
            }}
          >
            Gratis di Play Store
          </div>
        </div>
        <div
          style={{
            display: "flex",
            padding: 10,
            background: "#111827",
            borderRadius: 44,
            boxShadow: "0 30px 60px rgba(0,0,0,0.35)",
          }}
        >
          <img
            src={`data:image/jpeg;base64,${screenshot}`}
            width={240}
            height={520}
            style={{ borderRadius: 34, objectFit: "cover", objectPosition: "top" }}
            alt=""
          />
        </div>
      </div>
    ),
    size,
  );
}
