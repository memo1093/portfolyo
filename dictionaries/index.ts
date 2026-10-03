import "server-only";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "./types";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  tr: () => import("./tr").then((m) => m.tr),
  en: () => import("./en").then((m) => m.en),
};

/** Yalnızca sunucuda çalışır; çeviri dosyaları istemci paketine girmez. */
export const getDictionary = (locale: Locale) => dictionaries[locale]();
