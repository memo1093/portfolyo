"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Rocket } from "@/components/ui/Rocket";

/** Üstte ince ilerleme çubuğu + sağ kenarda roketin süzüldüğü görev rayı. */
export function ScrollProgress({ label }: { label: string }) {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });
  const rocketTop = useTransform(smooth, [0, 1], ["0%", "100%"]);

  return (
    <>
      <motion.div
        aria-hidden
        style={{ scaleX: smooth }}
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-neon via-aurora to-plasma shadow-[0_0_12px_#38bdf8]"
      />

      <div
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={100}
        className="pointer-events-none fixed top-1/2 right-4 z-40 hidden h-[44vh] -translate-y-1/2 md:block"
      >
        <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <motion.div
          style={{ top: rocketTop }}
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <Rocket className="h-9 w-6 rotate-180 drop-shadow-[0_0_10px_rgba(56,189,248,0.7)]" />
        </motion.div>
      </div>
    </>
  );
}
