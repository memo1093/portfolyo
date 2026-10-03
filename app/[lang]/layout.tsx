import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";
import { Nebula } from "@/components/background/Nebula";
import { StarField } from "@/components/background/StarField";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Providers } from "@/components/layout/Providers";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { getDictionary } from "@/dictionaries";
import { hasLocale, localeMeta, locales } from "@/lib/i18n";
import { languageAlternates, localePath, siteUrl } from "@/lib/site";
import "../globals.css";

// Türkçe karakterler (ğ, ş, ı…) için latin-ext şart.
const inter = Inter({ variable: "--font-inter", subsets: ["latin", "latin-ext"] });
const space = Space_Grotesk({ variable: "--font-space", subsets: ["latin", "latin-ext"] });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin", "latin-ext"] });

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: "#04050d",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { meta } = await getDictionary(lang);

  return {
    metadataBase: new URL(siteUrl),
    title: { absolute: meta.title },
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: "Mehmet Akyer", url: siteUrl }],
    creator: "Mehmet Akyer",
    alternates: {
      canonical: `${siteUrl}${localePath(lang)}`,
      languages: languageAlternates,
    },
    openGraph: {
      type: "profile",
      firstName: "Mehmet",
      lastName: "Akyer",
      url: `${siteUrl}${localePath(lang)}`,
      siteName: meta.siteName,
      title: meta.title,
      description: meta.description,
      locale: localeMeta[lang].ogLocale,
      alternateLocale: locales
        .filter((l) => l !== lang)
        .map((l) => localeMeta[l].ogLocale),
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
    formatDetection: { telephone: false, email: false, address: false },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <html
      lang={lang}
      className={`${inter.variable} ${space.variable} ${mono.variable}`}
    >
      <body>
        {/* JS kapalıyken Reveal animasyonlarının içeriği gizlemesini önler */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important;filter:none!important}`}</style>
        </noscript>

        <Providers>
          <a
            href="#main"
            className="focus-ring fixed top-3 left-3 z-[100] -translate-y-20 rounded-full bg-neon px-4 py-2 text-sm font-semibold text-void transition-transform focus:translate-y-0"
          >
            {dict.a11y.skipToContent}
          </a>

          <Nebula />
          <StarField />
          <ScrollProgress label={dict.a11y.missionProgress} />
          <Navbar lang={lang} dict={dict} />

          <main id="main">{children}</main>
          <Footer dict={dict.footer} />
        </Providers>
      </body>
    </html>
  );
}
