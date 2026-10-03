import { ImageResponse } from "next/og";
import { getDictionary } from "@/dictionaries";
import { defaultLocale, hasLocale, locales } from "@/lib/i18n";

export const alt = "Mehmet Akyer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(hasLocale(lang) ? lang : defaultLocale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          color: "#e8ebff",
          background:
            "radial-gradient(circle at 80% 20%, rgba(124,58,237,0.55), transparent 55%), radial-gradient(circle at 10% 100%, rgba(14,165,233,0.45), transparent 50%), #04050d",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: 90,
            top: 90,
            width: 260,
            height: 260,
            borderRadius: 9999,
            background:
              "radial-gradient(circle at 30% 28%, #e3d4ff, #8b5cf6 45%, #2e1065 90%)",
            boxShadow: "0 0 90px rgba(167,139,250,0.7)",
          }}
        />
        <div style={{ fontSize: 28, letterSpacing: 8, color: "#38bdf8", textTransform: "uppercase" }}>
          Portfolio
        </div>
        <div style={{ fontSize: 108, fontWeight: 800, marginTop: 24, lineHeight: 1.05 }}>
          Mehmet Akyer
        </div>
        <div style={{ fontSize: 44, marginTop: 20, color: "#b9c2ff" }}>{dict.hero.role}</div>
        <div style={{ fontSize: 30, marginTop: 36, color: "#9aa3cc", maxWidth: 800 }}>
          React · Next.js · Vue · Micro-frontend
        </div>
      </div>
    ),
    size,
  );
}
