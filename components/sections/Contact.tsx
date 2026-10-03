import { profile } from "@/data/profile";
import type { Dictionary } from "@/dictionaries/types";
import { Astronaut } from "@/components/ui/Astronaut";
import { CvDownload } from "@/components/ui/CvDownload";
import { GlassCard } from "@/components/ui/GlassCard";
import { Parallax } from "@/components/ui/Parallax";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n";
import { CopyEmail } from "./CopyEmail";

interface ContactProps {
  dict: Dictionary["contact"];
  cv: Dictionary["cv"];
  lang: Locale;
  copiedAnnounce: string;
}

export function Contact({ dict, cv, lang, copiedAnnounce }: ContactProps) {
  return (
    <Section id="contact" labelledBy="contact-title" className="pb-32">
      <Reveal direction="zoom">
        <GlassCard className="relative overflow-hidden px-6 py-16 text-center sm:px-16 sm:py-24">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(56,189,248,0.22),transparent_60%),radial-gradient(ellipse_at_50%_120%,rgba(244,114,182,0.2),transparent_60%)]"
          />
          <Parallax distance={40} rotate={10} className="pointer-events-none absolute -right-6 bottom-4 w-24 opacity-90 sm:right-10 sm:w-36">
            <Astronaut className="animate-float [--tilt:-10deg]" />
          </Parallax>

          <p className="font-mono text-xs tracking-[0.3em] text-neon uppercase">{dict.eyebrow}</p>
          <h2
            id="contact-title"
            className="mx-auto mt-5 max-w-3xl font-display text-4xl font-bold tracking-tight text-cosmic sm:text-6xl"
          >
            {dict.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {dict.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="focus-ring rounded-full bg-gradient-to-r from-neon to-aurora px-7 py-3.5 text-sm font-semibold text-void shadow-[0_0_30px_-4px_rgba(56,189,248,0.7)] transition-transform hover:scale-[1.04] active:scale-95"
            >
              {dict.emailCta}
            </a>
            <CopyEmail
              email={profile.email}
              label={dict.copy}
              doneLabel={dict.copied}
              announce={copiedAnnounce}
            />
            <CvDownload lang={lang} label={cv.download} fileName={cv.fileName} />
          </div>

          <p className="mt-6 font-mono text-sm break-all text-ink/80">{profile.email}</p>

          <ul className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
            <li>
              <a
                href={profile.github.url}
                target="_blank"
                rel="me noopener noreferrer"
                className="focus-ring rounded-full border border-white/10 px-5 py-2.5 text-muted transition-colors hover:border-neon/50 hover:text-ink"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin.url}
                target="_blank"
                rel="me noopener noreferrer"
                className="focus-ring rounded-full border border-white/10 px-5 py-2.5 text-muted transition-colors hover:border-neon/50 hover:text-ink"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </GlassCard>
      </Reveal>
    </Section>
  );
}
