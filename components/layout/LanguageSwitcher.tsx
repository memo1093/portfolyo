"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALE_COOKIE, localeMeta, locales, type Locale } from "@/lib/i18n";

interface LanguageSwitcherProps {
  current: Locale;
  label: string;
}

/**
 * Her dil kendi URL'sine (`/tr`, `/en`) gider; böylece arama motorları iki
 * sürümü de ayrı ayrı indeksleyebilir. Seçim cookie'ye yazılır ki `/` ziyareti
 * bir sonraki sefer aynı dile yönlensin.
 */
export function LanguageSwitcher({ current, label }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const rest = pathname.split("/").slice(2).join("/");

  return (
    <div
      role="group"
      aria-label={label}
      className="glass flex items-center rounded-full p-1 text-xs font-semibold"
    >
      {locales.map((locale) => {
        const active = locale === current;
        return (
          <Link
            key={locale}
            href={`/${locale}${rest ? `/${rest}` : ""}`}
            hrefLang={locale}
            lang={locale}
            aria-current={active ? "true" : undefined}
            title={localeMeta[locale].name}
            onClick={() => {
              document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
            }}
            className={`focus-ring rounded-full px-3 py-1.5 transition-colors ${
              active
                ? "bg-gradient-to-r from-neon/80 to-aurora/80 text-void"
                : "text-muted hover:text-ink"
            }`}
          >
            {localeMeta[locale].label}
          </Link>
        );
      })}
    </div>
  );
}
