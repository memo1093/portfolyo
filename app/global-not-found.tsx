import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "404 — Lost in space",
  robots: { index: false },
};

/**
 * Eşleşmeyen URL'ler için. Root layout `app/[lang]` altında olduğundan
 * bu sayfa kendi <html>/<body> etiketlerini üretir (iki dilli kısa metin).
 */
export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="grid min-h-svh place-items-center px-6 text-center">
        <div>
          <p className="font-mono text-sm tracking-[0.3em] text-[#38bdf8] uppercase">404</p>
          <h1 className="mt-4 bg-gradient-to-r from-white via-sky-300 to-violet-400 bg-clip-text text-5xl font-bold text-transparent">
            Lost in space · Kayıp uzayda
          </h1>
          <p className="mx-auto mt-4 max-w-md text-[#9aa3cc]">
            The page you&apos;re looking for couldn&apos;t be found in this galaxy.
            <br />
            Aradığın sayfa bu galakside bulunamadı.
          </p>
          <div className="mt-8 flex justify-center gap-3 text-sm font-semibold">
            <Link href="/en" className="rounded-full bg-sky-400 px-6 py-3 text-[#04050d]">
              Back to base
            </Link>
            <Link href="/tr" className="rounded-full border border-white/20 px-6 py-3">
              Üsse dön
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
