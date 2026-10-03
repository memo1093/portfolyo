import { projectMeta } from "@/data/profile";
import type { Dictionary } from "@/dictionaries/types";
import { GlassCard } from "@/components/ui/GlassCard";
import { Parallax } from "@/components/ui/Parallax";
import { Planet } from "@/components/ui/Planet";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Projects({ dict }: { dict: Dictionary["projects"] }) {
  return (
    <Section id="projects" labelledBy="projects-title">
      <Parallax distance={140} rotate={15} className="pointer-events-none absolute top-10 -right-20 hidden md:block">
        <Planet variant="gold" size={170} ring className="opacity-60" />
      </Parallax>

      <SectionHeading
        id="projects-title"
        eyebrow={dict.eyebrow}
        title={dict.title}
        subtitle={dict.subtitle}
      />

      <ul className="relative grid gap-x-6 gap-y-16 pt-10 sm:grid-cols-2 lg:grid-cols-3">
        {dict.items.map((item, i) => {
          const meta = projectMeta[item.id];
          return (
            <li key={item.id} className={i % 3 === 1 ? "lg:mt-12" : ""}>
              <Reveal direction="zoom" delay={(i % 3) * 0.1} className="h-full">
                <GlassCard
                  as="article"
                  className="group relative flex h-full flex-col px-6 pt-20 pb-7 transition-transform duration-500 hover:-translate-y-2"
                >
                  {/* Kartın üstünden taşan gezegen */}
                  <div className="absolute -top-12 left-6 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12">
                    <Planet
                      variant={meta.planet}
                      size={96}
                      ring={meta.ring}
                      className="animate-float"
                      style={{ animationDelay: `${i * -1.7}s` }}
                    />
                  </div>

                  <p className="font-mono text-[11px] tracking-[0.25em] text-aurora uppercase">
                    {meta.company}
                  </p>
                  <h3 className="mt-2 font-display text-xl leading-snug font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {meta.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-ink/80"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
