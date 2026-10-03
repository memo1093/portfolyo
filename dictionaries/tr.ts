import type { Dictionary } from "./types";

export const tr: Dictionary = {
  meta: {
    siteName: "Mehmet Akyer",
    title: "Mehmet Akyer — Kıdemli Ön Uç Geliştiricisi | React, Next.js, Vue",
    description:
      "6 yıllık deneyime sahip Kıdemli Ön Uç Geliştiricisi Mehmet Akyer'in portfolyosu. React, Next.js, Vue ve mikro-ön uç mimarisiyle ölçeklenebilir, keyifli web deneyimleri.",
    keywords: [
      "Mehmet Akyer",
      "Kıdemli Ön Uç Geliştiricisi",
      "Senior Frontend Developer",
      "React",
      "Next.js",
      "Vue",
      "Nuxt",
      "TypeScript",
      "mikro-ön uç",
      "micro-frontend",
      "portfolyo",
    ],
    ogAlt: "Mehmet Akyer — Kıdemli Ön Uç Geliştiricisi portfolyosu",
  },
  a11y: {
    skipToContent: "İçeriğe geç",
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
    switchLanguage: "Dili değiştir",
    mainNav: "Ana gezinme",
    missionProgress: "Görev ilerlemesi",
    copied: "E-posta adresi kopyalandı",
  },
  nav: {
    home: "Kalkış",
    skills: "Yetenekler",
    experience: "Yolculuk",
    projects: "Gezegenler",
    education: "Arşiv",
    contact: "İletişim",
  },
  hero: {
    status: "Kalkış üssü · Tüm sistemler hazır",
    role: "Kıdemli Ön Uç Geliştiricisi",
    years: "6 yıllık tecrübe",
    tagline: "Ölçeklenebilir ve keyifli ön uç deneyimleri inşa etmek.",
    intro:
      "React, Next.js ve Vue ekosisteminde, mikro-ön uç mimarileriyle milyonlarca kullanıcıya ulaşan ürünler geliştiriyorum. Kaydır ve yolculuğa katıl.",
    ctaPrimary: "Yolculuğa başla",
    ctaSecondary: "İletişime geç",
    scroll: "Aşağı kaydır",
    coordinates: "Koordinat: 06 yıl · Hız: ışık hızı",
  },
  skills: {
    eyebrow: "Galaksi haritası",
    title: "Takımyıldızları",
    subtitle:
      "Yıllar içinde keşfettiğim teknolojiler; birbirine bağlı yıldızlar gibi aynı gökyüzünde parlıyor.",
    groups: {
      languages: {
        title: "Diller & Çatılar",
        caption: "Ana takımyıldızı",
      },
      state: {
        title: "Durum Yönetimi",
        caption: "Veri akışının yıldız kümesi",
      },
      architecture: {
        title: "Mimari",
        caption: "Ölçeklenen sistemlerin iskeleti",
      },
      ai: {
        title: "Yapay Zekâ Kullanımı",
        caption: "Yeni keşfedilen sistem",
      },
      tooling: {
        title: "Stil & Araçlar",
        caption: "Gemi mühendisliği",
      },
    },
  },
  experience: {
    eyebrow: "Uzay-zaman yolculuğu",
    title: "Solucan Delikleri",
    subtitle:
      "Her şirket, kariyerimde içinden geçtiğim bir solucan deliği. Kaydırdıkça zamanda ilerle.",
    items: [
      {
        id: "pazarama",
        company: "Pazarama",
        period: "Eylül 2023 – Halen",
        focus: "Vue · Nuxt · Mikro-ön uç",
        summary:
          "Vue 2 ve Nuxt.js ile geliştirilmiş mobil web tarafı modernize edilerek yeniden canlandırıldı; satıcı uygulamaları sıfırdan tasarlandı.",
        bullets: [
          "Vue 2 ve Nuxt.js tabanlı Market projesinin mobil web tarafındaki atıl yapının giderilmesi, Market web + mobilweb geliştirmeleri.",
          "Vue 3 Composition API, Pinia ve single-spa-vue ile satıcı uygulamalarının geliştirilmesi ve yeniden tasarlanması.",
        ],
      },
      {
        id: "hepsiburada",
        company: "Hepsiburada",
        period: "Ekim 2020 – Eylül 2023",
        focus: "React · VoltranJS · SSR",
        summary:
          "Yüksek trafikli kampanya sayfalarını mikro-ön uç yaklaşımıyla geliştirdi ve ekipteki ön uç geliştirmelerinde mimari düzeyde rol aldı.",
        bullets: [
          "React VoltranJS ile 19'dan fazla kampanya mikro-ön ucunun geliştirilmesi ve liderliği.",
          "React ile SSR ve CSR sayfalarının geliştirilmesi.",
        ],
      },
      {
        id: "tesodev",
        company: "Tesodev",
        period: "Eylül 2020 – Haziran 2026",
        focus: "React · TypeScript · Redux Toolkit",
        badge: "Outsource · eş zamanlı hizmet",
        summary:
          "Outsource bir yazılım şirketi olarak kurumsal müşteriler için Vue/React uygulamaları geliştirdi; bu süreç diğer şirketlerdeki görevlerle eş zamanlı yürüdü.",
        bullets: [
          "TypeScript ve Redux Toolkit kullanılarak kurumsal React uygulamalarının geliştirilmesi.",
        ],
      },
    ],
  },
  projects: {
    eyebrow: "Keşif günlüğü",
    title: "Keşfedilen Gezegenler",
    subtitle: "Üzerinde çalıştığım ve yaşam bulduğum başlıca dünyalar.",
    items: [
      {
        id: "pazarama-mobile-web",
        title: "Pazarama Market Web / Mobilweb",
        description: "Pazarama Market projesinin geliştirilmesine katkıda bulunuldu.",
      },
      {
        id: "pazarama-crm",
        title: "CRM Sistemi",
        description:
          "Vue 3 Composition API ve Pinia ile sıfırdan bir CRM sistemi oluşturuldu.",
      },
      {
        id: "pazarama-seller",
        title: "Satıcı Platformu — Mikro-ön uç",
        description:
          "Satıcı Platformu, bağımsız dağıtılabilen bir mikro-ön uç yapısına taşındı.",
      },
      {
        id: "hepsiburada-components",
        title: "Ortak Bileşen Kütüphanesi",
        description:
          "Yeniden kullanılabilir datatable, pagination ve webview bottomsheet bileşenleri geliştirildi.",
      },
      {
        id: "hepsiburada-ssr",
        title: "SSR Kampanya Sayfaları",
        description:
          "Sunucu tarafı render edilen kampanya sayfalarıyla SEO ve performans iyileştirildi.",
      },
      {
        id: "module-federation-poc",
        title: "Module Federation POC",
        description:
          "React, Vue ve Svelte mikro-ön uçlarının Module Federation ile birlikte çalışabilirliği incelendi.",
      },
    ],
  },
  education: {
    eyebrow: "Eski dünya kayıtları",
    title: "Eğitim & Sertifikalar",
    subtitle: "Yolculuğun başladığı yer ve yolda toplanan veri kristalleri.",
    degreeLabel: "Lisans",
    degree: "Lisans",
    field: "Hidrojeoloji Mühendisliği",
    certsTitle: "Sertifikalar",
    certs: [
      { title: "C# Kapsamlı Web Geliştirme", meta: "110 saat" },
      { title: "Algoritma Tasarımı" },
      { title: "JavaScript İleri Düzey Kavramlar", meta: "2023" },
    ],
  },
  contact: {
    eyebrow: "Sinyal gönder",
    title: "Bir sonraki görev için hazırım",
    subtitle:
      "Yeni bir ürün, bir mimari dönüşüm ya da sadece bir sohbet için iletişime geçebilirsin.",
    emailCta: "E-posta gönder",
    copy: "Kopyala",
    copied: "Kopyalandı!",
  },
  footer: {
    rights: "Tüm hakları saklıdır.",
    built: "Next.js, Tailwind CSS ve Framer Motion ile yapıldı.",
  },
  cv: {
    download: "CV İndir (PDF)",
    fileName: "Mehmet-Akyer-CV-TR.pdf",
    contactTitle: "İletişim",
    summaryTitle: "Özet",
    summary:
      "6 yıllık deneyime sahip Kıdemli Ön Uç Geliştiricisi. React, Next.js ve Vue ekosisteminde, mikro-ön uç mimarileriyle ölçeklenebilir ve keyifli ön uç deneyimleri inşa ediyorum.",
    skillsTitle: "Yetenekler",
    experienceTitle: "Deneyim",
    projectsTitle: "Başlıca Projeler",
    educationTitle: "Eğitim",
    certificatesTitle: "Sertifikalar",
    closing: "Birlikte çalışalım — iletişime geçmekten çekinme.",
  },
  notFound: {
    title: "Kayıp uzayda",
    text: "Aradığın sayfa bu galakside bulunamadı.",
    back: "Üsse dön",
  },
};
