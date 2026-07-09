"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PhoneCall } from "lucide-react";
import { useMounted } from "@/hooks/use-mounted";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function CallFloat() {
  const mounted = useMounted();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!mounted) return;

    const openTimer = window.setTimeout(() => setExpanded(true), 1200);
    const closeTimer = window.setTimeout(() => setExpanded(false), 6000);

    return () => {
      window.clearTimeout(openTimer);
      window.clearTimeout(closeTimer);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div
      dir="ltr"
      style={{ right: "1rem", left: "auto" }}
      className="pointer-events-none fixed bottom-24 z-50 hidden md:bottom-8 md:block"
    >
      <Link
        href={`tel:${siteConfig.phone}`}
        aria-label={`Call ${siteConfig.phoneDisplay}`}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        className={cn(
          "pointer-events-auto group relative flex h-14 items-center gap-2 overflow-hidden rounded-full bg-primary text-primary-foreground shadow-[0_15px_40px_-10px_rgba(0,0,0,0.35)] transition-all duration-500",
          expanded ? "w-56 pl-5 pr-3" : "w-14 px-0 justify-center"
        )}
      >
        <span aria-hidden className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_60%)]" />
        <span aria-hidden className="pointer-events-none absolute inset-0 animate-ping rounded-full border border-[color:var(--gold)]/40" />

        <span
          dir="ltr"
          className={cn(
            "relative whitespace-nowrap text-sm font-semibold tracking-wide transition-all duration-500",
            expanded ? "opacity-100 translate-x-0" : "pointer-events-none w-0 opacity-0 -translate-x-2"
          )}
        >
          {siteConfig.phoneDisplay}
        </span>

        <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full">
          <PhoneCall className="h-5 w-5" />
        </span>
      </Link>
    </div>
  );
}