import { profile } from "@/data/profile";
import type { Dictionary } from "@/dictionaries/types";

export function Footer({ dict }: { dict: Dictionary["footer"] }) {
  return (
    <footer className="relative border-t border-white/10 px-4 py-8 text-center text-xs text-muted sm:px-8">
      <p>
        © {new Date().getFullYear()} {profile.name}. {dict.rights}
      </p>
      <p className="mt-1 text-muted/70">{dict.built}</p>
    </footer>
  );
}
