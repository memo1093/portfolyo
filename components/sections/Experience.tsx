import { experienceTech } from "@/data/profile";
import type { Dictionary } from "@/dictionaries/types";
import { GlassCard } from "@/components/ui/GlassCard";
import { Parallax } from "@/components/ui/Parallax";
import { Planet } from "@/components/ui/Planet";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline, TimelineItem } from "./Timeline";

export function Experience({ dict }: { dict: Dictionary["experience"] }) {
  return (
    <Section id="experience" labelledBy="experience-title">
      <Parallax distance={120} className="pointer-events-none absolute top-24 -left-20 hidden lg:block">
        <Planet variant="jade" size={150} className="opacity-60" />
      </Parallax>

      <SectionHeading
        id="experience-title"
        eyebrow={dict.eyebrow}
        title={dict.title}
        subtitle={dict.subtitle}
      />

      <Timeline>
        {dict.items.map((item, index) => {
          const alignRight = index % 2 === 0; // masaüstünde sol sütun → metin sağa yaslı
          return (
            <TimelineItem key={item.id} index={index}>
              <GlassCard as="article" className="p-6 text-left sm:p-8">
                <div className={alignRight ? "md:text-right" : ""}>
                  <p className="font-mono text-xs tracking-[0.2em] text-neon uppercase">
                    {item.period}
                  </p>
                  <h3 className="mt-2 font-display text-3xl font-bold">{item.company}</h3>
                  <p className="mt-1 text-sm text-aurora">{item.focus}</p>
                  {item.badge && (
                    <p className="mt-3 inline-flex rounded-full border border-plasma/40 bg-plasma/10 px-3 py-1 text-xs text-plasma">
                      {item.badge}
                    </p>
                  )}
                </div>

                <p className="mt-4 leading-relaxed text-ink/90">{item.summary}</p>

                <ul
                  className={`mt-4 space-y-2 text-sm leading-relaxed text-muted ${
                    alignRight ? "md:ml-auto md:max-w-md" : ""
                  }`}
                >
                  {item.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-left">
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neon shadow-[0_0_8px_#38bdf8]"
                      />
                      {b}
                    </li>
                  ))}
                </ul>

                <ul
                  className={`mt-5 flex flex-wrap gap-2 ${alignRight ? "md:justify-end" : ""}`}
                >
                  {(experienceTech[item.id] ?? []).map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-ink/80"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </TimelineItem>
          );
        })}
      </Timeline>
    </Section>
  );
}
