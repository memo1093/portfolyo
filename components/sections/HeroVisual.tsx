"use client";

import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { Astronaut } from "@/components/ui/Astronaut";
import { Planet } from "@/components/ui/Planet";
import { Rocket } from "@/components/ui/Rocket";

/**
 * Hero'nun sağ tarafı: halkalı gezegen, süzülen astronot ve roket.
 * Fareye tepki verir (masaüstü) ve kaydırdıkça yaklaşıp kaybolur.
 */
export function HeroVisual() {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 700], [1, 1.5]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const lift = useTransform(scrollY, [0, 700], [0, -120]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const astroX = useTransform(sx, (v) => v * 26);
  const astroY = useTransform(sy, (v) => v * 20);
  const planetX = useTransform(sx, (v) => v * -14);
  const planetY = useTransform(sy, (v) => v * -10);

  return (
    <motion.div
      aria-hidden
      style={{ scale, opacity, y: lift }}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      className="relative mx-auto aspect-square w-[min(64vw,22rem)] sm:w-[min(60vw,26rem)] lg:w-[min(36vw,34rem)]"
    >
      <div className="absolute inset-[8%] rounded-full bg-aurora/25 blur-3xl animate-pulse-glow" />

      <motion.div style={{ x: planetX, y: planetY }} className="absolute inset-0 grid place-items-center">
        <Planet variant="violet" size={300} ring className="max-h-[72%] max-w-[72%] animate-float-slow [--tilt:-4deg]" style={{ width: "72%", height: "72%" }} />
      </motion.div>

      <Planet variant="ember" size={64} className="absolute top-[6%] left-[6%] animate-float" style={{ width: "15%", height: "15%" }} />
      <Planet variant="ocean" size={36} className="absolute right-[4%] bottom-[22%] animate-float-slow" style={{ width: "9%", height: "9%" }} />

      <motion.div style={{ x: astroX, y: astroY }} className="absolute top-[8%] right-[8%] w-[38%]">
        <Astronaut className="animate-float drop-shadow-[0_12px_30px_rgba(56,189,248,0.35)] [--tilt:8deg]" />
      </motion.div>

      <Rocket className="absolute bottom-[8%] left-[14%] h-16 w-11 rotate-[35deg] animate-float drop-shadow-[0_0_14px_rgba(251,146,60,0.6)]" />
    </motion.div>
  );
}
