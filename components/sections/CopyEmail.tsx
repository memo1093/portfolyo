"use client";

import { useState } from "react";

interface CopyEmailProps {
  email: string;
  label: string;
  doneLabel: string;
  announce: string;
}

export function CopyEmail({ email, label, doneLabel, announce }: CopyEmailProps) {
  const [done, setDone] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setDone(true);
      setTimeout(() => setDone(false), 2000);
    } catch {
      // Pano erişimi yoksa sessizce geç; e-posta zaten bağlantı olarak görünüyor.
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={copy}
        className="focus-ring glass rounded-full px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-white/10"
      >
        {done ? doneLabel : label}
      </button>
      <span role="status" className="sr-only">
        {done ? announce : ""}
      </span>
    </>
  );
}
