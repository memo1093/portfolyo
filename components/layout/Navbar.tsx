"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useActiveSection } from "@/hooks/useActiveSection";
import { sections } from "@/data/profile";
import type { Dictionary } from "@/dictionaries/types";
import type { Locale } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface NavbarProps {
  lang: Locale;
  dict: Pick<Dictionary, "nav" | "a11y" | "meta">;
}

export function Navbar({ lang, dict }: NavbarProps) {
  const active = useActiveSection(sections);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = sections.map((id) => ({ id, label: dict.nav[id] }));

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full px-4 py-2.5 transition-all duration-500 ${
          scrolled || open ? "glass" : "border border-transparent"
        }`}
      >
        <a
          href="#home"
          className="focus-ring flex items-center gap-2 rounded-full font-display text-sm font-bold tracking-wide"
          onClick={() => setOpen(false)}
        >
          <span
            aria-hidden
            className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-neon to-aurora text-xs text-void"
          >
            M
          </span>
          <span className="hidden sm:inline">{dict.meta.siteName}</span>
        </a>

        <nav aria-label={dict.a11y.mainNav} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {links.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "location" : undefined}
                  className={`focus-ring relative rounded-full px-4 py-2 text-sm transition-colors ${
                    active === id ? "text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  {active === id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-white/10 ring-1 ring-white/15"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher current={lang} label={dict.a11y.switchLanguage} />
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? dict.a11y.closeMenu : dict.a11y.openMenu}
            onClick={() => setOpen((v) => !v)}
            className="focus-ring glass grid h-10 w-10 place-items-center rounded-full lg:hidden"
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 h-0.5 w-5 rounded bg-ink transition-all ${
                  open ? "top-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute top-1/2 left-0 h-0.5 w-5 -translate-y-1/2 rounded bg-ink transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 rounded bg-ink transition-all ${
                  open ? "top-1/2 -rotate-45" : "bottom-0"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label={dict.a11y.mainNav}
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="glass mx-auto mt-2 max-w-6xl rounded-3xl p-3 lg:hidden"
          >
            <ul className="grid gap-1">
              {links.map(({ id, label }, i) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === id ? "location" : undefined}
                    className={`focus-ring flex items-center justify-between rounded-2xl px-4 py-3 text-base ${
                      active === id ? "bg-white/10 text-ink" : "text-muted"
                    }`}
                  >
                    {label}
                    <span aria-hidden className="font-mono text-xs text-neon/70">
                      0{i + 1}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
