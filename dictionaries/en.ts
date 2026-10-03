import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    siteName: "Mehmet Akyer",
    title: "Mehmet Akyer — Senior Frontend Developer | React, Next.js, Vue",
    description:
      "Portfolio of Mehmet Akyer, a Senior Frontend Developer with 6 years of experience. Scalable, delightful web experiences built with React, Next.js, Vue and micro-frontend architecture.",
    keywords: [
      "Mehmet Akyer",
      "Senior Frontend Developer",
      "Frontend Engineer",
      "React",
      "Next.js",
      "Vue",
      "Nuxt",
      "TypeScript",
      "micro-frontend",
      "portfolio",
    ],
    ogAlt: "Mehmet Akyer — Senior Frontend Developer portfolio",
  },
  a11y: {
    skipToContent: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchLanguage: "Switch language",
    mainNav: "Main navigation",
    missionProgress: "Mission progress",
    copied: "Email address copied",
  },
  nav: {
    home: "Launch",
    skills: "Skills",
    experience: "Journey",
    projects: "Planets",
    education: "Archive",
    contact: "Contact",
  },
  hero: {
    status: "Launch base · All systems go",
    role: "Senior Frontend Developer",
    years: "6 years of experience",
    tagline: "Building scalable and delightful frontend experiences.",
    intro:
      "I build products used by millions with React, Next.js and Vue, backed by micro-frontend architecture. Scroll down and join the journey.",
    ctaPrimary: "Start the journey",
    ctaSecondary: "Get in touch",
    scroll: "Scroll down",
    coordinates: "Coordinates: 06 years · Speed: light",
  },
  skills: {
    eyebrow: "Galaxy map",
    title: "Constellations",
    subtitle:
      "The technologies I've discovered over the years, shining in the same sky like connected stars.",
    groups: {
      languages: {
        title: "Languages & Frameworks",
        caption: "The main constellation",
      },
      state: {
        title: "State Management",
        caption: "The data-flow star cluster",
      },
      architecture: {
        title: "Architecture",
        caption: "The skeleton of scalable systems",
      },
      ai: {
        title: "AI Proficiency",
        caption: "The newly charted system",
      },
      tooling: {
        title: "Styling & Tooling",
        caption: "Ship engineering",
      },
    },
  },
  experience: {
    eyebrow: "Space-time journey",
    title: "Wormholes",
    subtitle:
      "Every company is a wormhole I've travelled through. Keep scrolling to move through time.",
    items: [
      {
        id: "pazarama",
        company: "Pazarama",
        period: "Sep 2023 – Present",
        focus: "Vue · Nuxt · Micro-frontend",
        summary:
          "Modernised the dormant Vue 2 / Nuxt.js mobile web layer and redesigned the seller applications from the ground up.",
        bullets: [
          "Revived the idle mobile web layer of the Market project built with Vue 2 and Nuxt.js, and developed Market web + mobile web features.",
          "Developed and redesigned seller applications using Vue 3 Composition API, Pinia and single-spa-vue.",
        ],
      },
      {
        id: "hepsiburada",
        company: "Hepsiburada",
        period: "Oct 2020 – Sep 2023",
        focus: "React · VoltranJS · SSR",
        summary:
          "Built high-traffic campaign pages with a micro-frontend approach and took an architecture-level role in the team's frontend development.",
        bullets: [
          "Developed and led 19+ campaign micro-frontends with React VoltranJS.",
          "Built SSR and CSR pages with React.",
        ],
      },
      {
        id: "tesodev",
        company: "Tesodev",
        period: "Sep 2020 – Jun 2026",
        focus: "React · TypeScript · Redux Toolkit",
        badge: "Outsource · concurrent engagement",
        summary:
          "Delivered enterprise Vue/React applications for clients through an outsourcing company, in parallel with roles at other companies.",
        bullets: [
          "Developed enterprise React applications with TypeScript and Redux Toolkit.",
        ],
      },
    ],
  },
  projects: {
    eyebrow: "Discovery log",
    title: "Discovered Planets",
    subtitle: "The main worlds I've worked on and brought to life.",
    items: [
      {
        id: "pazarama-mobile-web",
        title: "Pazarama Market Web / Mobile Web",
        description: "Contributed to the development of the Pazarama Market project.",
      },
      {
        id: "pazarama-crm",
        title: "CRM System",
        description:
          "Built a CRM system from scratch with Vue 3 Composition API and Pinia.",
      },
      {
        id: "pazarama-seller",
        title: "Seller Platform — Micro-frontend",
        description:
          "Migrated the Seller Platform to an independently deployable micro-frontend architecture.",
      },
      {
        id: "hepsiburada-components",
        title: "Shared Component Library",
        description:
          "Developed reusable datatable, pagination and webview bottom sheet components.",
      },
      {
        id: "hepsiburada-ssr",
        title: "SSR Campaign Pages",
        description:
          "Improved SEO and performance with server-side rendered campaign pages.",
      },
      {
        id: "module-federation-poc",
        title: "Module Federation POC",
        description:
          "Investigated how React, Vue and Svelte micro-frontends can interoperate through Module Federation.",
      },
    ],
  },
  education: {
    eyebrow: "Records of the old world",
    title: "Education & Certificates",
    subtitle:
      "Where the journey began, and the data crystals collected along the way.",
    degreeLabel: "Bachelor's",
    degree: "Bachelor's Degree",
    field: "Hydrogeological Engineering",
    certsTitle: "Certificates",
    certs: [
      { title: "Comprehensive Web Development with C#", meta: "110 hours" },
      { title: "Algorithm Design" },
      { title: "Advanced JavaScript Concepts", meta: "2023" },
    ],
  },
  contact: {
    eyebrow: "Send a signal",
    title: "Ready for the next mission",
    subtitle:
      "Reach out for a new product, an architecture overhaul, or simply a chat.",
    emailCta: "Send an email",
    copy: "Copy",
    copied: "Copied!",
  },
  footer: {
    rights: "All rights reserved.",
    built: "Built with Next.js, Tailwind CSS and Framer Motion.",
  },
  cv: {
    download: "Download CV (PDF)",
    fileName: "Mehmet-Akyer-CV-EN.pdf",
    contactTitle: "Contact",
    summaryTitle: "Summary",
    summary:
      "Senior Frontend Developer with 6 years of experience. I build scalable and delightful frontend experiences with React, Next.js and Vue, backed by micro-frontend architecture.",
    skillsTitle: "Skills",
    experienceTitle: "Experience",
    projectsTitle: "Key Projects",
    educationTitle: "Education",
    certificatesTitle: "Certificates",
    closing: "Let's work together — feel free to get in touch.",
  },
  notFound: {
    title: "Lost in space",
    text: "The page you're looking for couldn't be found in this galaxy.",
    back: "Back to base",
  },
};
