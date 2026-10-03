"use client";

import type { PointerEvent } from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLElement> {
  as?: "div" | "article";
}

/** Buzlu cam panel; imleci takip eden ince bir ışık huzmesi içerir. */
export function GlassCard({
  as: Tag = "div",
  className = "",
  onPointerMove,
  children,
  ...props
}: GlassCardProps) {
  const handleMove = (e: PointerEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
    onPointerMove?.(e);
  };

  return (
    <Tag
      onPointerMove={handleMove}
      className={`glass spotlight relative rounded-3xl ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
