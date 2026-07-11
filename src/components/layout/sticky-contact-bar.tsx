"use client";

import Link from "next/link";
import { MessageCircle, PhoneCall } from "lucide-react";
import { siteConfig } from "@/config/site";
import { t } from "@/content/ar";

export function StickyContactBar() {
  const phoneHref = `tel:${siteConfig.phone.replace(/\s+/g, "")}`;
  const whatsappHref = `https://wa.me/${siteConfig.whatsappDigits}`;

  return (
    <div
      role="complementary"
      aria-label="أزرار التواصل السريع"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border/70 bg-background/95 shadow-[0_-8px_30px_-10px_rgba(0,0,0,0.15)] backdrop-blur md:hidden"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2 p-3">
        <Link
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#25D366] text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
        >
          <MessageCircle className="h-4 w-4" aria-hidden />
          <span>{t.common.whatsapp}</span>
        </Link>

        <Link
          href={phoneHref}
          className="flex h-12 items-center justify-center gap-2 rounded-2xl border border-border/70 bg-background text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-accent"
        >
          <PhoneCall className="h-4 w-4" aria-hidden />
          <span>{t.common.callNow}</span>
        </Link>
      </div>
    </div>
  );
}