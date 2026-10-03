"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type Direction = "up" | "left" | "right" | "zoom";

const hidden: Record<Direction, { x?: number; y?: number; scale?: number }> = {
  up: { y: 48 },
  left: { x: -64 },
  right: { x: 64 },
  zoom: { scale: 0.82, y: 24 },
};

interface RevealProps extends Omit<HTMLMotionProps<"div">, "initial" | "whileInView"> {
  direction?: Direction;
  delay?: number;
}

/**
 * Öğeyi derin uzaydan süzülerek getirir. Görünür alana girdiğinde bir kez çalışır.
 * `data-reveal` özelliği JS kapalıyken içeriğin görünür kalmasını sağlar (bkz. layout).
 */
export function Reveal({
  direction = "up",
  delay = 0,
  children,
  ...props
}: RevealProps) {
  return (
    <motion.div
      data-reveal
      initial={{ opacity: 0, filter: "blur(8px)", ...hidden[direction] }}
      whileInView={{ opacity: 1, filter: "blur(0px)", x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
