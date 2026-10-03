# Mehmet Akyer — Uzay Temalı Portfolyo

Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · Framer Motion · TR/EN

## Çalıştırma

```bash
npm install
npm run dev      # http://localhost:3000  (Accept-Language'e göre /tr veya /en'e yönlenir)
npm run build && npm start
```

Yayına almadan önce `.env.example` dosyasını `.env.local` olarak kopyalayıp
`NEXT_PUBLIC_SITE_URL` değerini kendi alan adınla değiştir. Canonical, hreflang,
sitemap ve Open Graph URL'leri bu değerden üretilir.

## Yapı

```
app/
  [lang]/layout.tsx          Kök layout: fontlar, metadata, arka plan, navbar
  [lang]/page.tsx            Bölümleri birleştirir + JSON-LD
  [lang]/opengraph-image.tsx Dil başına sosyal paylaşım görseli
  sitemap.ts · robots.ts · icon.svg · global-not-found.tsx
proxy.ts                     "/" → "/tr" | "/en" (cookie → Accept-Language → varsayılan)
dictionaries/                tr.ts, en.ts (tip güvenli çeviriler)
data/profile.ts              Dilden bağımsız CV verisi (linkler, teknoloji etiketleri)
components/
  background/                StarField (canvas warp), Nebula (scroll ile değişen nebula)
  layout/                    Navbar, LanguageSwitcher, ScrollProgress, Footer, Providers
  sections/                  Hero, Skills, Experience(+Timeline), Projects, Education, Contact
  ui/                        Reveal, Parallax, GlassCard, Planet, Astronaut, Rocket…
  seo/JsonLd.tsx             Schema.org Person + ProfilePage + WebSite
hooks/useActiveSection.ts    Scroll-spy
```

## İçerik güncelleme

- Metinler: `dictionaries/tr.ts` ve `dictionaries/en.ts`
- Linkler, e-posta, teknoloji etiketleri, yetenek listesi: `data/profile.ts`

## Vercel'e yayınlama

1. Projeyi bir Git deposuna (GitHub/GitLab/Bitbucket) gönder.
2. [vercel.com/new](https://vercel.com/new) üzerinden depoyu içe aktar. Framework otomatik **Next.js** olarak algılanır;
   build/output ayarlarına dokunma.
3. **Settings → Environment Variables** altında ekle (Production):
   - `NEXT_PUBLIC_SITE_URL` = `https://senin-alan-adin.com` (sonunda `/` olmadan)
4. Deploy et. Özel alan adı kullanacaksan **Settings → Domains**'ten ekle ve ardından
   `NEXT_PUBLIC_SITE_URL` değerini o alan adıyla güncelleyip yeniden deploy et.

Yayından sonra kontrol et:

- `/robots.txt` ve `/sitemap.xml` doğru alan adını gösteriyor mu?
- `/tr` ve `/en` canonical + hreflang etiketleri doğru mu? (sayfa kaynağında `rel="canonical"`)
- `/tr/cv.pdf` ve `/en/cv.pdf` indiriliyor mu?
- [Rich Results Test](https://search.google.com/test/rich-results) ile JSON-LD'yi doğrula,
  sitemap'i Google Search Console'a gönder.

> `NEXT_PUBLIC_SITE_URL` verilmezse Vercel'in `VERCEL_PROJECT_PRODUCTION_URL` değeri (`*.vercel.app`) kullanılır.
