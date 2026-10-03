"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Rocket } from "@/components/ui/Rocket";

/**
 * Kaydırmaya bağlı yörünge çizgisi. `children` olarak <TimelineItem />'lar alır;
 * çizgi kaydırdıkça dolar ve ucundaki roket aşağı doğru ilerler.
 */
export function Timeline({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 65%", "end 55%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 26, mass: 0.4 });
  const headTop = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative">
      {/* Soluk yörünge */}
      <div
        aria-hidden
        className="absolute top-0 bottom-0 left-5 w-px -translate-x-1/2 bg-white/10 md:left-1/2"
      />
      {/* Kaydırdıkça parlayan yörünge */}
      <motion.div
        aria-hidden
        style={{ scaleY: progress }}
        className="absolute top-0 bottom-0 left-5 w-[3px] origin-top -translate-x-1/2 rounded-full bg-gradient-to-b from-neon via-aurora to-plasma shadow-[0_0_18px_#a78bfa] md:left-1/2"
      />
      <motion.div
        aria-hidden
        style={{ top: headTop }}
        className="absolute left-5 z-10 -translate-x-1/2 -translate-y-1/2 md:left-1/2"
      >
        <Rocket className="h-10 w-7 rotate-180 drop-shadow-[0_0_14px_rgba(56,189,248,0.9)]" />
      </motion.div>

      <ol className="relative space-y-14 sm:space-y-24">{children}</ol>
    </div>
  );
}

interface TimelineItemProps {
  index: number;
  children: React.ReactNode;
}

/** Tek bir durak: solucan deliği düğümü + kartın yandan süzülerek gelmesi. */
export function TimelineItem({ index, children }: TimelineItemProps) {
  const fromLeft = index % 2 === 0;
  return (
    <li className="relative grid grid-cols-[2.5rem_1fr] gap-x-4 md:grid-cols-2 md:gap-x-20">
      <motion.span
        aria-hidden
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "0px 0px -35% 0px" }}
        transition={{ type: "spring", stiffness: 200, damping: 16 }}
        className="wormhole absolute top-8 left-5 z-10 -translate-x-1/2 md:left-1/2"
      />

      <motion.div
        data-reveal
        initial={{ opacity: 0, x: fromLeft ? -80 : 80, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`col-start-2 ${
          fromLeft ? "md:col-start-1" : "md:col-start-2"
        }`}
      >
        {children}
      </motion.div>
    </li>
  );
}
