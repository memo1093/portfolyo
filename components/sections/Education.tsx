import { school } from "@/data/profile";
import type { Dictionary } from "@/dictionaries/types";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education({ dict }: { dict: Dictionary["education"] }) {
  return (
    <Section id="education" labelledBy="education-title">
      <SectionHeading
        id="education-title"
        eyebrow={dict.eyebrow}
        title={dict.title}
        subtitle={dict.subtitle}
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal direction="left">
          <GlassCard as="article" className="relative flex h-full flex-col justify-center overflow-hidden p-7 sm:p-10">
            <span
              aria-hidden
              className="absolute -top-6 -right-4 font-display text-[9rem] leading-none font-bold text-white/[0.04] select-none sm:text-[12rem]"
            >
              2016
            </span>
            <p className="font-mono text-xs tracking-[0.25em] text-neon uppercase">
              {dict.degreeLabel} · {school.years}
            </p>
            <h3 className="mt-4 font-display text-3xl font-bold sm:text-4xl">{school.name}</h3>
            <p className="mt-3 text-lg text-ink/90">
              {dict.degree} — <span className="text-aurora">{dict.field}</span>
            </p>
            <div
              aria-hidden
              className="mt-8 h-px w-full bg-gradient-to-r from-neon/60 via-aurora/40 to-transparent"
            />
            <p className="mt-4 font-mono text-xs text-muted">
              ARCHIVE_ID: AKS-2012 → AKS-2016
            </p>
          </GlassCard>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <GlassCard className="h-full p-7 sm:p-8">
            <h3 className="font-display text-xl font-semibold">{dict.certsTitle}</h3>
            <ul className="mt-6 space-y-4">
              {dict.certs.map((c, i) => (
                <li
                  key={c.title}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <span
                    aria-hidden
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-neon/30 to-aurora/30 font-mono text-sm text-ink ring-1 ring-white/15"
                  >
                    0{i + 1}
                  </span>
                  <div>
                    <p className="leading-snug font-medium">{c.title}</p>
                    {c.meta && <p className="mt-0.5 font-mono text-xs text-muted">{c.meta}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </GlassCard>
        </Reveal>
      </div>
    </Section>
  );
}
