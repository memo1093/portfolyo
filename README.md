<div align="center">

# 🚀 Mehmet Akyer — Uzay Temalı Portfolyo

**Kaydırdıkça uzayda bir yolculuğa çıkan, iki dilli (TR/EN) ve SEO odaklı kişisel portfolyo sitesi.**

### 🌐 [mehmetakyer.vercel.app](https://mehmetakyer.vercel.app/)

[![Canlı Site](https://img.shields.io/badge/Canl%C4%B1_Site-mehmetakyer.vercel.app-38bdf8?style=for-the-badge&logo=vercel&logoColor=white)](https://mehmetakyer.vercel.app/)
[![Dil](https://img.shields.io/badge/Dil-TR_%7C_EN-a78bfa?style=for-the-badge)](https://mehmetakyer.vercel.app/)

![Hero](docs/screenshots/hero.webp)

</div>

---

## İçindekiler

- [Ekran görüntüleri](#-ekran-görüntüleri)
- [Tech stack](#-tech-stack)
- [Nasıl yapıldı?](#-nasıl-yapıldı)
- [Proje yapısı](#-proje-yapısı)
- [Çalıştırma](#çalıştırma)
- [Metinleri güncelleme](#metinleri-güncelleme)
- [Vercel'e yayınlama](#vercele-yayınlama)

---

## 🖼 Ekran görüntüleri

Site, bir uzay gemisiyle ilerliyormuş hissi verecek şekilde kurgulandı. CV'deki her bölüm bir uzay metaforuyla eşleşiyor.

| Bölüm | Metafor | Görsel |
| --- | --- | --- |
| **Hero** | Kalkış üssü | ![Hero](docs/screenshots/hero.webp) |
| **Yetenekler** | Takımyıldızları / galaksi haritası | ![Yetenekler](docs/screenshots/skills.webp) |
| **Yapay Zekâ Kullanımı** | Yeni keşfedilen sistem | ![Yapay zekâ](docs/screenshots/skills-ai.webp) |
| **Deneyim** | Solucan delikleriyle zaman yolculuğu | ![Deneyim](docs/screenshots/experience.webp) |
| **Projeler** | Keşfedilen gezegenler | ![Projeler](docs/screenshots/projects.webp) |
| **Eğitim & Sertifikalar** | Eski dünya kayıtları | ![Eğitim](docs/screenshots/education.webp) |
| **İletişim** | Sinyal gönder | ![İletişim](docs/screenshots/contact.webp) |

### 📱 Mobil

Tasarım mobil öncelikli. Küçük ekranda yıldız sayısı azalır, dekoratif gezegenler gizlenir, takımyıldızları esnek bir etiket düzenine dönüşür, menü cam efektli bir panele açılır.

<p align="center">
  <img src="docs/screenshots/mobile-hero.webp" alt="Mobil hero" width="24%" />
  <img src="docs/screenshots/mobile-skills.webp" alt="Mobil yetenekler" width="24%" />
  <img src="docs/screenshots/mobile-experience.webp" alt="Mobil deneyim" width="24%" />
  <img src="docs/screenshots/mobile-menu.webp" alt="Mobil menü" width="24%" />
</p>

### 📄 İndirilebilir CV (PDF)

Her dil için ayrı bir CV, sitedeki içerikten **build sırasında otomatik üretilir** (`/tr/cv.pdf`, `/en/cv.pdf`). Metinler değiştiğinde CV de kendiliğinden güncellenir.

<p align="center">
  <img src="docs/screenshots/cv-tr-1.webp" alt="CV sayfa 1" width="48%" />
  <img src="docs/screenshots/cv-tr-2.webp" alt="CV sayfa 2" width="48%" />
</p>

---

## 🧰 Tech stack

### Framework & Dil

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript_5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![App Router](https://img.shields.io/badge/App_Router-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React Compiler](https://img.shields.io/badge/React_Compiler-087EA4?style=for-the-badge&logo=react&logoColor=white)
![Turbopack](https://img.shields.io/badge/Turbopack-EF4444?style=for-the-badge&logo=vercel&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js_%E2%89%A5_20.9-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

### Stil & Animasyon

![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion_14-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Canvas API](https://img.shields.io/badge/Canvas_2D-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS Animations](https://img.shields.io/badge/CSS_Animations-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Glassmorphism](https://img.shields.io/badge/Glassmorphism-8B5CF6?style=for-the-badge)
![SVG](https://img.shields.io/badge/Inline_SVG-FFB13B?style=for-the-badge&logo=svg&logoColor=black)

### Kütüphaneler

| Kütüphane | Ne için kullanıldı? |
| --- | --- |
| ![framer-motion](https://img.shields.io/badge/framer--motion-0055FF?style=flat-square&logo=framer&logoColor=white) | Scroll'a bağlı animasyonlar (`useScroll`, `useTransform`, `useSpring`), `whileInView` ile süzülerek giriş, menü geçişleri |
| ![@react-pdf/renderer](https://img.shields.io/badge/%40react--pdf%2Frenderer-EC1C24?style=flat-square&logo=adobeacrobatreader&logoColor=white) | İndirilebilir CV PDF'inin sunucu tarafında üretimi |
| ![server-only](https://img.shields.io/badge/server--only-000000?style=flat-square&logo=nextdotjs&logoColor=white) | Çeviri sözlüklerinin istemci paketine sızmasını build zamanında engeller |
| ![next/font](https://img.shields.io/badge/next%2Ffont-000000?style=flat-square&logo=nextdotjs&logoColor=white) | Inter, Space Grotesk ve JetBrains Mono'nun (`latin` + `latin-ext`) kendi sunucumuzdan servis edilmesi |
| ![next/og](https://img.shields.io/badge/next%2Fog-000000?style=flat-square&logo=nextdotjs&logoColor=white) | Dil başına dinamik Open Graph paylaşım görseli |
| ![Inter](https://img.shields.io/badge/Inter_%28OFL%29-111111?style=flat-square&logo=googlefonts&logoColor=white) | CV PDF'ine gömülen, Türkçe karakter destekli yazı tipi |

### SEO & Erişilebilirlik

![Metadata API](https://img.shields.io/badge/Metadata_API-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![hreflang](https://img.shields.io/badge/hreflang-TR_%7C_EN-4285F4?style=for-the-badge&logo=google&logoColor=white)
![JSON-LD](https://img.shields.io/badge/JSON--LD-Schema.org-005A9C?style=for-the-badge)
![Sitemap](https://img.shields.io/badge/sitemap.xml-34A853?style=for-the-badge)
![Open Graph](https://img.shields.io/badge/Open_Graph-1877F2?style=for-the-badge&logo=facebook&logoColor=white)
![WCAG](https://img.shields.io/badge/a11y-reduced_motion_%2B_skip_link-6D28D9?style=for-the-badge)

### Araçlar & Yayın

![ESLint](https://img.shields.io/badge/ESLint_9-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![PostCSS](https://img.shields.io/badge/PostCSS-DD3A0A?style=for-the-badge&logo=postcss&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

---

## 🛠 Nasıl yapıldı?

### 1. Uzay yolculuğu hissi (scroll-driven)

Sayfa tek bir "yolculuk" olarak kurgulandı; üç katman birlikte çalışır:

- **`StarField`** — Sabit bir `<canvas>` üzerinde derinlikli (z-eksenli) yıldızlar çizilir. Kullanıcı kaydırdıkça yıldızların hızı artar ve noktalar çizgiye dönüşür; kaydırma durunca yıldızlar yavaşça sakinleşir. Yıldız sayısı ekran alanına göre ayarlanır (mobilde daha az), sekme arka plandayken `requestAnimationFrame` kendiliğinden durur.
- **`Nebula`** — Üç büyük, bulanık renk bulutu (mor, camgöbeği, magenta) `useScroll` ile birbirine karışır; sayfa ilerledikçe farklı bir "uzay bölgesine" geçilir. Yalnızca `opacity` ve `transform` değiştiği için GPU üzerinde ucuz çalışır.
- **`Parallax`** — Gezegenler ve astronot gibi dekoratif nesneler, ekrandan geçerken farklı hızlarda hareket ederek derinlik hissi verir.

```tsx
// components/ui/Parallax.tsx (özet)
const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
```

### 2. Cam efektli arayüz ve CSS gezegenleri

- **Glassmorphism:** `glass` yardımcı sınıfı (`backdrop-filter`, yarı saydam gradyan, ince kenarlık) Tailwind v4'ün `@utility` özelliğiyle tanımlandı. `GlassCard` ayrıca imleci takip eden bir ışık huzmesi çizer.
- **Gezegenler, astronot ve roket** harici görsel olmadan çizildi: gezegenler katmanlı CSS `radial-gradient` + `inset box-shadow`, halkalar iki yarıya bölünüp gezegenin önüne/arkasına yerleştirildi; astronot ve roket satır içi SVG.
- **Takımyıldızları:** `lib/constellation.ts` öğeleri ızgaraya yerleştirip deterministik olarak kaydırır (SSR/CSR farkı yaratmaz) ve ardışık yıldızları kesişmeyen çizgilerle birleştirir. Küçük ekranda aynı veriler normal bir etiket listesine döner.
- **Timeline:** Dikey yörünge çizgisi `scaleY` ile kaydırdıkça dolar, ucundaki roket aşağı iner; her durak bir "solucan deliği" düğümüyle işaretlenir ve kartlar sağdan/soldan süzülerek gelir.

### 3. İki dilli yapı (TR/EN)

- Her dil kendi URL'sinde yaşar: **`/tr`** ve **`/en`** (`app/[lang]`).
- **`proxy.ts`** (Next.js 16'da middleware'in yeni adı) `/` isteğini önce `NEXT_LOCALE` cookie'sine, sonra tarayıcının `Accept-Language` başlığına bakarak uygun dile yönlendirir.
- Metinler `dictionaries/tr.ts` ve `en.ts` içindeki **tip güvenli** sözlüklerde tutulur (`Dictionary` arayüzü sayesinde eksik bir çeviri derleme hatası verir). Sözlükler `server-only` ile yalnızca sunucuda çalışır, istemci paketine girmez.
- Dilden bağımsız veriler (linkler, teknoloji etiketleri) `data/profile.ts` içindedir.
- Dil değiştirici gerçek `<a>` bağlantılarıdır; arama motorları iki sürümü de ayrı ayrı tarayabilir.

### 4. SEO

| Konu | Uygulama |
| --- | --- |
| Başlık / açıklama | `generateMetadata` ile her dil için ayrı `title`, `description`, `keywords` |
| Çok dillilik | `canonical` + `hreflang` (`tr`, `en`, `x-default`) |
| Sosyal paylaşım | Open Graph + Twitter kartı; `opengraph-image.tsx` ile dil başına dinamik görsel |
| Yapısal veri | `Person` + `ProfilePage` + `WebSite` **JSON-LD** (`components/seo/JsonLd.tsx`) |
| Tarama | `app/sitemap.ts` (hreflang alternatifleriyle) ve `app/robots.ts` |
| İçerik | Sunucuda render edilen statik HTML, anlamlı başlık hiyerarşisi (`h1` → `h2`), `lang` özniteliği |
| Performans | `/tr` ve `/en` build sırasında statik üretilir; `next/font` ile layout kayması olmadan font yükleme |

### 5. İndirilebilir CV (PDF)

`app/[lang]/cv.pdf/route.tsx` bir route handler'dır; `generateStaticParams` sayesinde iki dil için PDF'ler **build sırasında** üretilir ve statik dosya gibi servis edilir. `lib/cv/CvDocument.tsx` sitedeki sözlük ve veri dosyalarını okuyarak iki sayfalık, modern bir CV düzeni çizer. Türkçe karakterler için Inter fontu PDF'e gömülür.

### 6. Erişilebilirlik ve dayanıklılık

- `prefers-reduced-motion` desteği: Framer Motion `MotionConfig reducedMotion="user"` + CSS düzeyinde animasyon kısıtlaması + yıldız alanının durağan çizimi.
- "İçeriğe geç" bağlantısı, klavye odak halkaları, `aria-current`/`aria-expanded`, dekoratif öğelerde `aria-hidden`.
- JavaScript kapalıysa `<noscript>` ile giriş animasyonları devre dışı kalır ve içerik görünür.
- Güvenlik başlıkları (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, HSTS) `next.config.ts` içinde tanımlıdır.

---

## 📁 Proje yapısı

```
app/
  [lang]/layout.tsx          Kök layout: fontlar, metadata, arka plan, navbar
  [lang]/page.tsx            Bölümleri birleştirir + JSON-LD
  [lang]/cv.pdf/route.tsx    Dil başına CV PDF'i (build sırasında üretilir)
  [lang]/opengraph-image.tsx Dil başına sosyal paylaşım görseli
  sitemap.ts · robots.ts · icon.svg · global-not-found.tsx
proxy.ts                     "/" → "/tr" | "/en" (cookie → Accept-Language → varsayılan)
dictionaries/                tr.ts, en.ts (tip güvenli çeviriler), types.ts
data/profile.ts              Dilden bağımsız CV verisi (linkler, teknoloji etiketleri)
assets/fonts/                CV PDF'ine gömülen Inter (OFL) yazı tipleri
components/
  background/                StarField (canvas warp), Nebula (scroll ile değişen nebula)
  layout/                    Navbar, LanguageSwitcher, ScrollProgress, Footer, Providers
  sections/                  Hero, Skills, Experience(+Timeline), Projects, Education, Contact
  ui/                        Reveal, Parallax, GlassCard, Planet, Astronaut, Rocket, CvDownload…
  seo/JsonLd.tsx             Schema.org Person + ProfilePage + WebSite
hooks/useActiveSection.ts    Scroll-spy
lib/                         i18n, site (URL'ler), constellation (yerleşim), cv/CvDocument
docs/screenshots/            README görselleri
```

---

## Çalıştırma

```bash
npm install
npm run dev      # http://localhost:3000  (Accept-Language'e göre /tr veya /en'e yönlenir)
npm run build && npm start
```

Yayına almadan önce `.env.example` dosyasını `.env.local` olarak kopyalayıp
`NEXT_PUBLIC_SITE_URL` değerini kendi alan adınla değiştir. Canonical, hreflang,
sitemap ve Open Graph URL'leri bu değerden üretilir.

## Metinleri güncelleme

- Metinler (TR/EN): `dictionaries/tr.ts` ve `dictionaries/en.ts`
- Linkler, e-posta, teknoloji etiketleri, yetenek listesi: `data/profile.ts`
- CV PDF'i bu iki kaynaktan otomatik üretilir; ayrıca bir şey yapmana gerek yok.

## Vercel'e yayınlama

1. Projeyi bir Git deposuna (GitHub/GitLab/Bitbucket) gönder.
2. [vercel.com/new](https://vercel.com/new) üzerinden depoyu içe aktar. Framework otomatik **Next.js** olarak algılanır;
   build/output ayarlarına dokunma.
3. **Settings → Environment Variables** altında ekle (Production):
   - `NEXT_PUBLIC_SITE_URL` = `https://mehmetakyer.vercel.app` (sonunda `/` olmadan)
4. Deploy et. Özel alan adı kullanacaksan **Settings → Domains**'ten ekle ve ardından
   `NEXT_PUBLIC_SITE_URL` değerini o alan adıyla güncelleyip yeniden deploy et.

Yayından sonra kontrol et:

- `/robots.txt` ve `/sitemap.xml` doğru alan adını gösteriyor mu?
- `/tr` ve `/en` canonical + hreflang etiketleri doğru mu? (sayfa kaynağında `rel="canonical"`)
- `/tr/cv.pdf` ve `/en/cv.pdf` indiriliyor mu?
- [Rich Results Test](https://search.google.com/test/rich-results) ile JSON-LD'yi doğrula,
  sitemap'i Google Search Console'a gönder.

> `NEXT_PUBLIC_SITE_URL` verilmezse Vercel'in `VERCEL_PROJECT_PRODUCTION_URL` değeri (`*.vercel.app`) kullanılır.

---

<div align="center">

Next.js, Tailwind CSS ve Framer Motion ile yapıldı · [mehmetakyer.vercel.app](https://mehmetakyer.vercel.app/)

</div>
