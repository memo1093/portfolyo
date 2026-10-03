export const locales = ["tr", "en"] as const;
export type Locale = (typeof locales)[number];

/** Dil tespit edilemezse (ve `x-default` için) kullanılan dil. */
export const defaultLocale: Locale = "en";

export const localeMeta: Record<
  Locale,
  { label: string; name: string; ogLocale: string }
> = {
  tr: { label: "TR", name: "Türkçe", ogLocale: "tr_TR" },
  en: { label: "EN", name: "English", ogLocale: "en_US" },
};

export const LOCALE_COOKIE = "NEXT_LOCALE";

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
