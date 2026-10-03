"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxProps {
  /** Öğenin görünür alandan geçerken kat edeceği toplam dikey mesafe (px). */
  distance?: number;
  /** Dönüş miktarı (derece) — ekrandan geçerken. */
  rotate?: number;
  className?: string;
  children: React.ReactNode;
}

/**
 * Dekoratif nesneleri (gezegen, astronot, meteor) kaydırmaya bağlı olarak
 * farklı hızlarda hareket ettirir. Derinlik hissi için `distance` değerini
 * nesneden nesneye değiştir.
 */
export function Parallax({
  distance = 120,
  rotate = 0,
  className,
  children,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const r = useTransform(scrollYProgress, [0, 1], [-rotate, rotate]);

  return (
    <motion.div
      ref={ref}
      aria-hidden
      style={{ y, rotate: r }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
