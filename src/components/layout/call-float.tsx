"use client";

import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { useMounted } from "@/hooks/use-mounted";
import { siteConfig } from "@/config/site";

export function CallFloat() {
  const mounted = useMounted();

  if (!mounted) return null;

  const phoneHref = `tel:${siteConfig.phone.replace(/\s+/g, "")}`;

  return (
    <div
      dir="ltr"
      className="pointer-events-none fixed left-[5.5rem] z-50 md:left-28"
      style={{ bottom: "calc(1rem + env(safe-area-inset-bottom))" }}
    >
      <Link
        href={phoneHref}
        aria-label={`اتصل بنا على ${siteConfig.phoneDisplay}`}
        className="pointer-events-auto relative flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--gold)] text-primary shadow-[0_15px_40px_-10px_rgba(201,165,92,0.55)] transition-transform duration-300 hover:scale-[1.06]"
      >
        <span
          aria-hidden
          className="absolute inset-0 animate-ping rounded-full bg-[color:var(--gold)]/40"
        />
        <PhoneCall className="relative h-6 w-6" aria-hidden />
      </Link>
    </div>
  );
}