import Link from "next/link";
import { MessageCircle, PhoneCall } from "lucide-react";
import { siteConfig } from "@/config/site";

export function StickyContactBar() {
  return (
    <div className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-md -translate-x-1/2 md:hidden">
      <div className="grid grid-cols-2 gap-3 rounded-[20px] border border-border/70 bg-background/92 p-3 shadow-[0_20px_50px_-20px_rgba(32,27,21,0.28)] backdrop-blur">
        <Link
          href={`https://wa.me/${siteConfig.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="flex h-11 items-center justify-center gap-2 rounded-2xl bg-primary px-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-95"
        >
          <MessageCircle className="h-4 w-4" />
          <span>{"\u0648\u0627\u062A\u0633\u0627\u0628"}</span>
        </Link>

        <Link
          href={`tel:${siteConfig.phone}`}
          className="flex h-11 items-center justify-center gap-2 rounded-2xl border border-border/70 bg-card px-4 text-sm font-medium transition-colors hover:bg-accent"
        >
          <PhoneCall className="h-4 w-4" />
          <span>{"\u0627\u062A\u0635\u0627\u0644"}</span>
        </Link>
      </div>
    </div>
  );
}