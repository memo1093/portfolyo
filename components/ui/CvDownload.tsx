import type { Locale } from "@/lib/i18n";

interface CvDownloadProps {
  lang: Locale;
  label: string;
  fileName: string;
  className?: string;
}

/** CV'yi PDF olarak indiren bağlantı (`/tr/cv.pdf`, `/en/cv.pdf`). */
export function CvDownload({ lang, label, fileName, className = "" }: CvDownloadProps) {
  return (
    <a
      href={`/${lang}/cv.pdf`}
      download={fileName}
      className={`focus-ring group inline-flex items-center gap-2 rounded-full border border-neon/40 bg-neon/10 px-6 py-3.5 text-sm font-semibold text-neon transition-colors hover:bg-neon/20 ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M12 3v12m0 0-4-4m4 4 4-4M5 21h14" />
      </svg>
      {label}
    </a>
  );
}
