/**
 * Dilden bağımsız (çevrilmeyen) CV verileri.
 * Metinler `dictionaries/` altında tutulur; burada yalnızca isimler,
 * bağlantılar ve teknoloji etiketleri bulunur.
 */

export const profile = {
  name: "Mehmet Akyer",
  email: "mehmetakyer006@gmail.com",
  github: { url: "https://github.com/memo1093", handle: "github.com/memo1093" },
  linkedin: {
    url: "https://linkedin.com/in/mehmet-akyer",
    handle: "linkedin.com/in/mehmet-akyer",
  },
  yearsOfExperience: 6,
} as const;

export const sections = [
  "home",
  "skills",
  "experience",
  "projects",
  "education",
  "contact",
] as const;
export type SectionId = (typeof sections)[number];

/* ------------------------------ Yetenekler ------------------------------ */

export const skillGroupIds = [
  "languages",
  "state",
  "architecture",
  "ai",
  "tooling",
] as const;
export type SkillGroupId = (typeof skillGroupIds)[number];

export interface SkillGroup {
  id: SkillGroupId;
  /** Masaüstü takımyıldızı düzenindeki sütun sayısı. */
  cols: number;
  /** Masaüstünde iki sütunu kaplar (uzun etiketli / çok öğeli gruplar için). */
  wide?: boolean;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    cols: 3,
    items: [
      "TypeScript",
      "JavaScript (ES6+)",
      "React",
      "Next.js (App Router)",
      "Vue 3",
      "Vue 2",
      "Nuxt.js",
    ],
  },
  {
    id: "state",
    cols: 3,
    items: [
      "Redux",
      "Redux Toolkit",
      "TanStack Query",
      "Zustand",
      "Pinia",
      "Vuex",
    ],
  },
  {
    id: "architecture",
    cols: 4,
    wide: true,
    items: ["Micro-frontend", "Module Federation", "single-spa", "SSR / CSR"],
  },
  {
    id: "ai",
    cols: 4,
    wide: true,
    items: [
      "AI-assisted Development",
      "Claude Code",
      "GitHub Copilot",
      "Cursor",
      "Prompt Engineering",
      "Context Engineering",
      "MCP",
    ],
  },
  {
    id: "tooling",
    cols: 5,
    wide: true,
    items: [
      "TailwindCSS",
      "SCSS",
      "Styled Components",
      "PrimeReact",
      "PrimeVue",
      "Ant Design",
      "Vite",
      "Webpack",
      "Rollup",
      "VoltranJS",
      "Git",
      "Agile",
      "Docker",
    ],
  },
];

/* ------------------------------- Deneyim -------------------------------- */

export const experienceTech: Record<string, string[]> = {
  pazarama: ["Vue 3", "Composition API", "Pinia", "Nuxt.js", "single-spa-vue"],
  hepsiburada: ["React", "VoltranJS", "SSR / CSR", "Micro-frontend"],
  tesodev: ["React", "TypeScript", "Redux Toolkit"],
};

/* ------------------------------- Projeler ------------------------------- */

export type PlanetVariant =
  | "ember"
  | "ocean"
  | "violet"
  | "ice"
  | "jade"
  | "gold";

export const projectMeta: Record<
  string,
  { company: string; planet: PlanetVariant; tech: string[]; ring?: boolean }
> = {
  "pazarama-mobile-web": {
    company: "Pazarama",
    planet: "ember",
    tech: ["Vue 2", "Nuxt.js", "Responsive"],
  },
  "pazarama-crm": {
    company: "Pazarama",
    planet: "violet",
    tech: ["Vue 3", "Composition API", "Pinia"],
    ring: true,
  },
  "pazarama-seller": {
    company: "Pazarama",
    planet: "ocean",
    tech: ["single-spa-vue", "Micro-frontend", "Vue 3"],
  },
  "hepsiburada-components": {
    company: "Hepsiburada",
    planet: "gold",
    tech: ["React", "TypeScript", "Design System"],
    ring: true,
  },
  "hepsiburada-ssr": {
    company: "Hepsiburada",
    planet: "jade",
    tech: ["React", "SSR", "SEO", "Web Vitals"],
  },
  "module-federation-poc": {
    company: "POC",
    planet: "ice",
    tech: ["Module Federation", "React", "Vue", "Svelte"],
  },
};

/* ------------------------ Eğitim & Sertifikalar ------------------------- */

export const school = {
  name: "Aksaray Üniversitesi",
  years: "2012 – 2016",
} as const;
