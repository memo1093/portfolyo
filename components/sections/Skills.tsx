import type { CSSProperties } from "react";
import { skillGroups, type SkillGroup } from "@/data/profile";
import type { Dictionary } from "@/dictionaries/types";
import { constellationLayout } from "@/lib/constellation";
import { GlassCard } from "@/components/ui/GlassCard";
import { Parallax } from "@/components/ui/Parallax";
import { Planet } from "@/components/ui/Planet";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

function Constellation({
  group,
  copy,
  index,
}: {
  group: SkillGroup;
  copy: { title: string; caption: string };
  index: number;
}) {
  const points = constellationLayout(group.items.length, group.cols, index * 11);
  const rows = Math.ceil(group.items.length / group.cols);
  const wide = group.wide ?? false;

  return (
    <Reveal
      direction={index % 2 === 0 ? "left" : "right"}
      className={wide ? "lg:col-span-2" : ""}
    >
      <GlassCard className="h-full p-6 sm:p-8">
        <p className="font-mono text-[11px] tracking-[0.25em] text-neon/80 uppercase">
          {copy.caption}
        </p>
        <h3 className="mt-2 font-display text-2xl font-semibold">{copy.title}</h3>

        <div
          className="relative mt-6 lg:h-[var(--h)]"
          style={{ "--h": `${rows * 5.6}rem` } as CSSProperties}
        >
          {/* Yıldızları birleştiren çizgiler (yalnızca geniş ekranda) */}
          <svg
            aria-hidden
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 hidden h-full w-full lg:block"
          >
            <polyline
              points={points.map((p) => `${p.x},${p.y}`).join(" ")}
              fill="none"
              stroke={`url(#line-grad-${index})`}
              strokeWidth="1"
              strokeDasharray="3 3"
              vectorEffect="non-scaling-stroke"
              opacity="0.55"
            />
            <defs>
              <linearGradient id={`line-grad-${index}`} x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#38bdf8" />
                <stop offset="1" stopColor="#a78bfa" />
              </linearGradient>
            </defs>
          </svg>

          <ul className="flex flex-wrap gap-2.5 lg:block">
            {group.items.map((item, i) => (
              <li
                key={item}
                style={
                  {
                    "--x": `${points[i].x}%`,
                    "--y": `${points[i].y}%`,
                  } as CSSProperties
                }
                className="lg:absolute lg:top-[var(--y)] lg:left-[var(--x)] lg:-translate-x-1/2 lg:-translate-y-1/2"
              >
                <span
                  style={{ animationDelay: `${(i % 5) * -1.3}s` }}
                  className="group/star relative inline-flex animate-float-slow items-center gap-2 rounded-full border border-white/12 bg-void/60 px-3.5 py-2 text-sm whitespace-nowrap shadow-[0_0_18px_-6px_rgba(56,189,248,0.6)] backdrop-blur transition-all hover:scale-110 hover:border-neon/60 hover:shadow-[0_0_28px_-2px_rgba(56,189,248,0.8)]"
                >
                  <span
                    aria-hidden
                    className="twinkle h-1.5 w-1.5 rounded-full bg-neon shadow-[0_0_8px_2px_rgba(56,189,248,0.9)]"
                    style={{ "--delay": `${i * 0.4}s` } as CSSProperties}
                  />
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </GlassCard>
    </Reveal>
  );
}

export function Skills({ dict }: { dict: Dictionary["skills"] }) {
  return (
    <Section id="skills" labelledBy="skills-title">
      <Parallax distance={160} rotate={20} className="pointer-events-none absolute -top-10 -right-24 hidden sm:block">
        <Planet variant="ocean" size={220} ring className="opacity-80" />
      </Parallax>
      <Parallax distance={90} className="pointer-events-none absolute bottom-0 -left-16 hidden md:block">
        <Planet variant="ember" size={110} className="opacity-70" />
      </Parallax>

      <SectionHeading
        id="skills-title"
        eyebrow={dict.eyebrow}
        title={dict.title}
        subtitle={dict.subtitle}
      />

      <div className="relative grid gap-6 lg:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Constellation key={group.id} group={group} copy={dict.groups[group.id]} index={i} />
        ))}
      </div>
    </Section>
  );
}
