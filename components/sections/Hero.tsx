import { profile } from "@/data/profile";
import type { Dictionary } from "@/dictionaries/types";
import { CvDownload } from "@/components/ui/CvDownload";
import { Reveal } from "@/components/ui/Reveal";
import type { Locale } from "@/lib/i18n";
import { HeroVisual } from "./HeroVisual";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
);
const MailIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="3" y="5" width="18" height="14" rx="3" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

interface HeroProps {
  dict: Dictionary["hero"];
  lang: Locale;
  cv: Dictionary["cv"];
}

export function Hero({ dict, lang, cv }: HeroProps) {
  const links = [
    { href: `mailto:${profile.email}`, label: profile.email, icon: <MailIcon /> },
    { href: profile.github.url, label: profile.github.handle, icon: <GithubIcon />, external: true },
    { href: profile.linkedin.url, label: profile.linkedin.handle, icon: <LinkedinIcon />, external: true },
  ];

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative flex min-h-svh items-center overflow-x-clip px-4 pt-24 pb-24 sm:px-8 sm:pt-28"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <Reveal>
            <p className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-[11px] tracking-[0.18em] text-neon uppercase sm:text-xs">
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {dict.status}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1
              id="hero-title"
              className="mt-6 font-display text-5xl leading-[1.02] font-bold tracking-tight sm:text-7xl lg:text-8xl"
            >
              <span className="text-cosmic">{profile.name}</span>
              <span className="mt-3 block text-xl font-medium tracking-normal text-ink/90 sm:text-3xl">
                {dict.role}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 inline-flex rounded-full border border-aurora/40 bg-aurora/10 px-4 py-1.5 text-sm font-medium text-aurora lg:mx-0">
              {dict.years}
            </p>
            <p className="mx-auto mt-6 max-w-xl font-display text-xl leading-snug text-ink sm:text-2xl lg:mx-0">
              “{dict.tagline}”
            </p>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted lg:mx-0">
              {dict.intro}
            </p>
          </Reveal>

          <Reveal delay={0.3} className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href="#skills"
              className="focus-ring group relative overflow-hidden rounded-full bg-gradient-to-r from-neon to-aurora px-7 py-3.5 text-sm font-semibold text-void shadow-[0_0_30px_-4px_rgba(56,189,248,0.7)] transition-transform hover:scale-[1.04] active:scale-95"
            >
              <span className="relative z-10">{dict.ctaPrimary} →</span>
            </a>
            <a
              href="#contact"
              className="focus-ring glass rounded-full px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-white/10"
            >
              {dict.ctaSecondary}
            </a>
            <CvDownload lang={lang} label={cv.download} fileName={cv.fileName} />
          </Reveal>

          <Reveal delay={0.4}>
            <ul className="mt-10 flex flex-wrap justify-center gap-2.5 lg:justify-start">
              {links.map(({ href, label, icon, external }) => (
                <li key={href}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "me noopener noreferrer" } : {})}
                    className="focus-ring glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs text-muted transition-colors hover:text-ink sm:text-sm"
                  >
                    {icon}
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="order-1 lg:order-2">
          <HeroVisual />
        </div>
      </div>

      <a
        href="#skills"
        aria-label={dict.scroll}
        className="focus-ring absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-muted uppercase sm:flex"
      >
        {dict.scroll}
        <span className="relative h-10 w-6 rounded-full border border-white/25">
          <span className="absolute top-2 left-1/2 h-2 w-1 -translate-x-1/2 animate-bounce rounded-full bg-neon" />
        </span>
      </a>
    </section>
  );
}
