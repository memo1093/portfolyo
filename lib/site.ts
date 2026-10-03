import { defaultLocale, locales, type Locale } from "./i18n";

/**
 * Canonical alan adı. Yayına almadan önce `NEXT_PUBLIC_SITE_URL`
 * ortam değişkenini kendi alan adınla ayarla (bkz. `.env.example`).
 * Vercel'de `VERCEL_PROJECT_PRODUCTION_URL` otomatik kullanılır.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

export const localePath = (lang: Locale) => `/${lang}`;

/** `hreflang` alternatifleri (+ `x-default`) — metadata ve sitemap için. */
export const languageAlternates = {
  ...Object.fromEntries(locales.map((l) => [l, `${siteUrl}${localePath(l)}`])),
  "x-default": `${siteUrl}${localePath(defaultLocale)}`,
};
