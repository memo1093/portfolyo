import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  align?: "left" | "center";
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <Reveal className={`mb-14 max-w-2xl sm:mb-20 ${alignment}`}>
      <p className="mb-4 inline-flex items-center gap-2 font-mono text-xs tracking-[0.3em] text-neon uppercase">
        <span className="h-px w-8 bg-neon/60" aria-hidden />
        {eyebrow}
        <span className="h-px w-8 bg-neon/60" aria-hidden />
      </p>
      <h2
        id={id}
        className="font-display text-4xl font-bold tracking-tight text-cosmic sm:text-5xl lg:text-6xl"
      >
        {title}
      </h2>
      <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
        {subtitle}
      </p>
    </Reveal>
  );
}
