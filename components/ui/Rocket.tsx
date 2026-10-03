import { useId } from "react";

interface RocketProps {
  className?: string;
  /** Alev efektini gösterir. */
  flame?: boolean;
}

/** Satır içi SVG roket (yukarıya bakar). */
export function Rocket({ className = "", flame = true }: RocketProps) {
  // SVG gradient id'leri sayfada benzersiz olmalı; display:none içindeki bir kopya diğerlerini bozar.
  const uid = useId();
  const body = `${uid}-body`;
  const fl = `${uid}-flame`;
  return (
    <svg
      viewBox="0 0 48 72"
      aria-hidden
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={body} x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#c7d2fe" />
          <stop offset="0.5" stopColor="#ffffff" />
          <stop offset="1" stopColor="#8b9bd9" />
        </linearGradient>
        <linearGradient id={fl} x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#fde68a" />
          <stop offset="0.5" stopColor="#fb923c" />
          <stop offset="1" stopColor="#f472b6" stopOpacity="0" />
        </linearGradient>
      </defs>
      {flame && (
        <path d="M18 52c0 10 3 18 6 20 3-2 6-10 6-20z" fill={`url(#${fl})`}>
          <animate
            attributeName="d"
            dur="0.35s"
            repeatCount="indefinite"
            values="M18 52c0 10 3 18 6 20 3-2 6-10 6-20z;M18 52c0 8 3 13 6 14 3-1 6-6 6-14z;M18 52c0 10 3 18 6 20 3-2 6-10 6-20z"
          />
        </path>
      )}
      <path d="M24 2c8 8 11 20 10 36l-4 14H18l-4-14C13 22 16 10 24 2z" fill={`url(#${body})`} />
      <circle cx="24" cy="24" r="5" fill="#38bdf8" stroke="#1e293b" strokeWidth="2" />
      <path d="M14 38 4 52l10-2zM34 38l10 14-10-2z" fill="#a78bfa" />
      <path d="M18 52h12l-2 4h-8z" fill="#64748b" />
    </svg>
  );
}
