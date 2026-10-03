import type { SkillGroupId } from "@/data/profile";

export interface ExperienceEntry {
  id: string;
  company: string;
  period: string;
  focus: string;
  summary: string;
  bullets: string[];
  /** Eş zamanlı / outsource not rozeti. */
  badge?: string;
}

export interface ProjectEntry {
  id: string;
  title: string;
  description: string;
}

export interface Certificate {
  title: string;
  meta?: string;
}

export interface Dictionary {
  meta: {
    siteName: string;
    title: string;
    description: string;
    keywords: string[];
    ogAlt: string;
  };
  a11y: {
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
    switchLanguage: string;
    mainNav: string;
    missionProgress: string;
    copied: string;
  };
  nav: {
    home: string;
    skills: string;
    experience: string;
    projects: string;
    education: string;
    contact: string;
  };
  hero: {
    status: string;
    role: string;
    years: string;
    tagline: string;
    intro: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scroll: string;
    coordinates: string;
  };
  skills: {
    eyebrow: string;
    title: string;
    subtitle: string;
    groups: Record<SkillGroupId, { title: string; caption: string }>;
  };
  experience: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: ExperienceEntry[];
  };
  projects: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: ProjectEntry[];
  };
  education: {
    eyebrow: string;
    title: string;
    subtitle: string;
    degreeLabel: string;
    degree: string;
    field: string;
    certsTitle: string;
    certs: Certificate[];
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    emailCta: string;
    copy: string;
    copied: string;
  };
  footer: {
    rights: string;
    built: string;
  };
  cv: {
    /** Butonlarda görünen metin. */
    download: string;
    /** İndirilen dosyanın adı. */
    fileName: string;
    /** PDF içi başlıklar. */
    contactTitle: string;
    summaryTitle: string;
    summary: string;
    skillsTitle: string;
    experienceTitle: string;
    projectsTitle: string;
    educationTitle: string;
    certificatesTitle: string;
    closing: string;
  };
  notFound: {
    title: string;
    text: string;
    back: string;
  };
}
