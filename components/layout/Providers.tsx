"use client";

import { MotionConfig } from "framer-motion";

/** Kullanıcının "hareketi azalt" tercihine uyan global Framer Motion ayarı. */
export function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
