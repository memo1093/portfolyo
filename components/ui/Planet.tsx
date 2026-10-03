import type { CSSProperties } from "react";
import type { PlanetVariant } from "@/data/profile";

const palettes: Record<PlanetVariant, Record<string, string>> = {
  ember: { "--p-hi": "#ffd29b", "--p-mid": "#f97316", "--p-lo": "#7c2d12", "--p-glow": "rgba(251,146,60,.55)" },
  ocean: { "--p-hi": "#a5e8ff", "--p-mid": "#0ea5e9", "--p-lo": "#0c2f6b", "--p-glow": "rgba(56,189,248,.55)" },
  violet: { "--p-hi": "#e3d4ff", "--p-mid": "#8b5cf6", "--p-lo": "#2e1065", "--p-glow": "rgba(167,139,250,.6)" },
  ice: { "--p-hi": "#ffffff", "--p-mid": "#93c5fd", "--p-lo": "#1e3a8a", "--p-glow": "rgba(147,197,253,.5)" },
  jade: { "--p-hi": "#c8ffe6", "--p-mid": "#10b981", "--p-lo": "#064e3b", "--p-glow": "rgba(52,211,153,.5)" },
  gold: { "--p-hi": "#fff3b0", "--p-mid": "#eab308", "--p-lo": "#713f12", "--p-glow": "rgba(250,204,21,.5)", "--p-ring": "rgba(253,224,71,.65)" },
};

interface PlanetProps {
  variant: PlanetVariant;
  /** Piksel cinsinden çap. */
  size: number;
  ring?: boolean;
  className?: string;
  style?: CSSProperties;
}

/** Saf CSS gezegen (isteğe bağlı halka); harici görsel gerektirmez. */
export function Planet({ variant, size, ring, className = "", style }: PlanetProps) {
  return (
    <span
      aria-hidden
      className={`relative block shrink-0 ${className}`}
      style={{ width: size, height: size, ...palettes[variant], ...style }}
    >
      {ring && <span className="planet-ring planet-ring-back" />}
      <span className="planet absolute inset-0" />
      {ring && <span className="planet-ring planet-ring-front" />}
    </span>
  );
}
