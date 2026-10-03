"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

interface Star {
  x: number; // -1..1 (merkeze göre)
  y: number;
  z: number; // 1 = uzak, 0 = kameranın yanında
  tint: number; // renk indeksi
}

const TINTS = ["255,255,255", "176,210,255", "206,180,255", "255,206,230"];

const randomStar = (z = Math.random() * 0.95 + 0.05): Star => ({
  x: Math.random() * 2 - 1,
  y: Math.random() * 2 - 1,
  z,
  tint: Math.floor(Math.random() * TINTS.length),
});

/**
 * Sabit tuval üzerinde derinlikli yıldız alanı.
 * Sayfa kaydırıldıkça yıldızlar hızlanıp çizgiye dönüşür: "ışık hızı" hissi.
 */
export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let width = 0;
    let height = 0;
    let raf = 0;
    let stars: Star[] = [];
    let lastScroll = window.scrollY;
    let boost = 0; // 0..1 yumuşatılmış kaydırma hızı

    const project = (s: Star, z: number) => {
      const k = Math.max(width, height) * 0.32;
      return [width / 2 + (s.x / z) * k, height / 2 + (s.y / z) * k] as const;
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Küçük ekranda daha az yıldız: performans + sadelik
      const count = Math.round(Math.min(340, (width * height) / 4200));
      stars = Array.from({ length: count }, () => randomStar());
      draw(0);
    };

    const draw = (speed: number) => {
      ctx.clearRect(0, 0, width, height);
      for (const s of stars) {
        const prevZ = s.z;
        s.z -= speed * (0.35 + (1 - s.z));

        const [px, py] = project(s, s.z);
        const offscreen = px < -50 || px > width + 50 || py < -50 || py > height + 50;
        if (s.z <= 0.02 || offscreen) Object.assign(s, randomStar(1));

        const depth = 1 - s.z;
        const size = 0.7 + depth * 1.9;
        const alpha = 0.4 + depth * 0.6;
        const color = `rgba(${TINTS[s.tint]},${alpha.toFixed(2)})`;

        if (speed > 0.0035) {
          const [ox, oy] = project(s, Math.min(prevZ + speed * 2.2, 1.4));
          ctx.strokeStyle = color;
          ctx.lineWidth = size;
          ctx.lineCap = "round";
          ctx.beginPath();
          ctx.moveTo(ox, oy);
          ctx.lineTo(px, py);
          ctx.stroke();
        } else {
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(px, py, size * 0.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const frame = () => {
      const y = window.scrollY;
      const delta = Math.abs(y - lastScroll);
      lastScroll = y;
      boost += (Math.min(delta / 90, 1) - boost) * 0.1;
      draw(0.0007 + boost * 0.024);
      raf = requestAnimationFrame(frame);
    };

    resize();
    window.addEventListener("resize", resize);
    if (!reduceMotion) raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [reduceMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
}
