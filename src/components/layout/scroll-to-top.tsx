"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useMounted } from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
  const mounted = useMounted();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!mounted) return;

    const onScroll = () => {
      setVisible(window.scrollY > 480);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{ right: "1rem", left: "auto" }}
      className={cn(
        "fixed bottom-44 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-background/90 text-foreground shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)] backdrop-blur transition-all duration-300 hover:scale-[1.04] hover:border-[color:var(--gold)]/60 md:bottom-28",
        visible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4"
      )}
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}