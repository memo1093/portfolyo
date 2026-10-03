"use client";

import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Sabit nebula katmanları. Sayfa ilerledikçe farklı bir "uzay bölgesine"
 * geçiliyormuş gibi birbirine karışırlar (yalnızca opacity/transform → ucuz).
 */
export function Nebula() {
  const { scrollYProgress } = useScroll();

  const violetOpacity = useTransform(scrollYProgress, [0, 0.35, 0.6], [0.9, 0.5, 0.1]);
  const cyanOpacity = useTransform(scrollYProgress, [0.1, 0.45, 0.8], [0.1, 0.9, 0.3]);
  const magentaOpacity = useTransform(scrollYProgress, [0.5, 0.85, 1], [0.05, 0.7, 0.95]);

  const driftA = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const driftB = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-20 overflow-hidden bg-void">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,#0f1640_0%,transparent_60%)]" />

      <motion.div
        style={{ opacity: violetOpacity, y: driftA, rotate }}
        className="absolute -top-1/4 -left-1/4 h-[90vmax] w-[90vmax] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.55),transparent_62%)] blur-3xl will-change-transform"
      />
      <motion.div
        style={{ opacity: cyanOpacity, y: driftB, rotate }}
        className="absolute top-1/4 -right-1/4 h-[80vmax] w-[80vmax] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.42),transparent_62%)] blur-3xl will-change-transform"
      />
      <motion.div
        style={{ opacity: magentaOpacity, y: driftA }}
        className="absolute -bottom-1/4 left-1/4 h-[85vmax] w-[85vmax] rounded-full bg-[radial-gradient(circle,rgba(219,39,119,0.4),transparent_62%)] blur-3xl will-change-transform"
      />

      {/* Film greni: derinlik ve doku */}
      <div className="absolute inset-0 opacity-[0.045] mix-blend-overlay [background-image:url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%222%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/></svg>')]" />
    </div>
  );
}
