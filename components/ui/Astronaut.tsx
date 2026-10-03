import { useId } from "react";

/** Satır içi SVG astronot; erişilebilirlik için dekoratif (`aria-hidden`). */
export function Astronaut({ className = "" }: { className?: string }) {
  const uid = useId();
  const suit = `${uid}-suit`;
  const pack = `${uid}-pack`;
  const visor = `${uid}-visor`;
  return (
    <svg
      viewBox="0 0 200 260"
      aria-hidden
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={suit} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#ffffff" />
          <stop offset="1" stopColor="#aab4de" />
        </linearGradient>
        <linearGradient id={pack} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#7c88c9" />
          <stop offset="1" stopColor="#3b4580" />
        </linearGradient>
        <radialGradient id={visor} cx="0.3" cy="0.25" r="0.9">
          <stop stopColor="#7dd3fc" />
          <stop offset="0.45" stopColor="#4338ca" />
          <stop offset="1" stopColor="#0b1030" />
        </radialGradient>
      </defs>

      {/* bağlantı halatı */}
      <path
        d="M92 168C40 190 30 230 70 252"
        stroke="#a78bfa"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="1 7"
      />

      {/* sırt çantası */}
      <rect x="52" y="92" width="96" height="92" rx="22" fill={`url(#${pack})`} />
      <rect x="62" y="104" width="12" height="40" rx="6" fill="#38bdf8" opacity="0.8" />

      {/* bacaklar */}
      <rect x="74" y="168" width="24" height="56" rx="12" fill={`url(#${suit})`} transform="rotate(8 86 168)" />
      <rect x="102" y="168" width="24" height="56" rx="12" fill={`url(#${suit})`} transform="rotate(-10 114 168)" />
      <rect x="64" y="212" width="32" height="18" rx="9" fill="#5b6aa8" transform="rotate(8 80 221)" />
      <rect x="106" y="212" width="32" height="18" rx="9" fill="#5b6aa8" transform="rotate(-10 122 221)" />

      {/* gövde */}
      <rect x="64" y="96" width="72" height="84" rx="30" fill={`url(#${suit})`} />
      <rect x="82" y="124" width="36" height="26" rx="8" fill="#e0e7ff" stroke="#8b9bd9" strokeWidth="2" />
      <circle cx="92" cy="137" r="4" fill="#f472b6" />
      <circle cx="105" cy="137" r="4" fill="#38bdf8" />

      {/* kollar */}
      <rect x="28" y="108" width="28" height="64" rx="14" fill={`url(#${suit})`} transform="rotate(28 42 108)" />
      <rect x="144" y="96" width="28" height="64" rx="14" fill={`url(#${suit})`} transform="rotate(-48 158 100)" />
      <circle cx="30" cy="170" r="13" fill="#5b6aa8" />
      <circle cx="176" cy="68" r="13" fill="#5b6aa8" />

      {/* kask */}
      <circle cx="100" cy="64" r="46" fill={`url(#${suit})`} />
      <rect x="62" y="40" width="76" height="52" rx="26" fill={`url(#${visor})`} />
      <ellipse cx="82" cy="54" rx="14" ry="7" fill="#fff" opacity="0.4" transform="rotate(-20 82 54)" />
      <circle cx="146" cy="52" r="5" fill="#f472b6" />
    </svg>
  );
}
