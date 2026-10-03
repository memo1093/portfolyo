import { profile } from "@/data/profile";
import type { Dictionary } from "@/dictionaries/types";
import { localeMeta, type Locale } from "@/lib/i18n";
import { localePath, siteUrl } from "@/lib/site";

/**
 * Schema.org yapısal verisi (Person + ProfilePage + WebSite).
 * Google'ın kişi/portfolyo zengin sonuçları için gerekli bağlamı sağlar.
 */
export function JsonLd({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const url = `${siteUrl}${localePath(lang)}`;
  const personId = `${siteUrl}/#person`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: profile.name,
        url,
        email: `mailto:${profile.email}`,
        jobTitle: dict.hero.role,
        description: dict.meta.description,
        image: `${url}/opengraph-image`,
        sameAs: [profile.github.url, profile.linkedin.url],
        knowsAbout: [
          "React",
          "Next.js",
          "Vue.js",
          "Nuxt.js",
          "TypeScript",
          "JavaScript",
          "Micro-frontend architecture",
          "Redux Toolkit",
          "TailwindCSS",
        ],
        worksFor: { "@type": "Organization", name: "Pazarama" },
        alumniOf: { "@type": "CollegeOrUniversity", name: "Aksaray University" },
      },
      {
        "@type": "ProfilePage",
        "@id": `${url}#profile`,
        url,
        name: dict.meta.title,
        inLanguage: localeMeta[lang].ogLocale.replace("_", "-"),
        mainEntity: { "@id": personId },
        isPartOf: { "@id": `${siteUrl}/#website` },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: dict.meta.siteName,
        publisher: { "@id": personId },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // `<` karakterini kaçırarak olası XSS enjeksiyonunu engelle
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graph).replace(/</g, "\\u003c"),
      }}
    />
  );
}
