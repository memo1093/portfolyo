import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { languageAlternates, localePath, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((lang) => ({
    url: `${siteUrl}${localePath(lang)}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages: languageAlternates },
  }));
}
