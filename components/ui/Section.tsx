interface SectionProps {
  id: string;
  /** Bölüm başlığının `id`'si (erişilebilirlik için `aria-labelledby`). */
  labelledBy?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, labelledBy, className = "", children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`relative overflow-x-clip px-4 py-24 sm:px-8 sm:py-32 lg:py-40 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
