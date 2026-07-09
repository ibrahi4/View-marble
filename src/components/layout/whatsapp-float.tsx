"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MessageCircle, PhoneCall, Send, X } from "lucide-react";
import { useMounted } from "@/hooks/use-mounted";
import { siteConfig } from "@/config/site";
import { whatsappWidget } from "@/config/whatsapp-widget";
import { cn } from "@/lib/utils";

function buildWhatsappUrl(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function WhatsappFloat() {
  const mounted = useMounted();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mounted || !open) return;

    const onClick = (event: MouseEvent) => {
      if (!panelRef.current) return;
      if (!panelRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onEsc);

    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [mounted, open]);

  if (!mounted) return null;

  return (
    <div
      dir="ltr"
      style={{ left: "1rem", right: "auto" }}
      className="pointer-events-none fixed bottom-24 z-50 hidden md:bottom-8 md:block"
    >
      <div ref={panelRef} className="pointer-events-auto relative flex flex-col items-start">
        <div
          dir="rtl"
          className={cn(
            "mb-4 w-[340px] origin-bottom-left overflow-hidden rounded-[24px] border border-border/70 bg-background shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)] transition-all duration-300",
            open
              ? "pointer-events-auto scale-100 opacity-100 translate-y-0"
              : "pointer-events-none scale-95 opacity-0 translate-y-4"
          )}
          role="dialog"
          aria-hidden={!open}
        >
          <div className="relative overflow-hidden bg-primary p-5 text-primary-foreground">
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_60%)]" />

            <div className="relative flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
                  <span className="text-lg font-semibold">V</span>
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-primary bg-[color:var(--gold)]" />
                </div>
                <div>
                  <div className="text-sm font-semibold">{whatsappWidget.agentName}</div>
                  <div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-primary-foreground/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
                    <span>{whatsappWidget.agentTitle}</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/10 transition-colors hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="relative mt-5">
              <div className="text-base font-semibold">{whatsappWidget.greeting}</div>
              <div className="mt-1 text-sm text-primary-foreground/80">{whatsappWidget.subGreeting}</div>
            </div>
          </div>

          <div className="max-h-[52vh] overflow-y-auto p-5">
            <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
              {whatsappWidget.quickMessagesTitle}
            </div>

            <div className="mt-4 space-y-2.5">
              {whatsappWidget.quickMessages.map((message) => (
                <Link
                  key={message}
                  href={buildWhatsappUrl(message)}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-border/70 bg-card/60 px-4 py-3 text-sm transition-all hover:border-[color:var(--gold)]/50 hover:bg-card"
                >
                  <span className="leading-6">{message}</span>
                  <Send className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-[color:var(--gold)]" aria-hidden />
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-2 border-t border-border/70 bg-card/40 p-4">
            <Link
              href={buildWhatsappUrl()}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-[color:var(--gold)] text-primary shadow-sm transition-opacity hover:opacity-92"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              <span className="text-sm font-semibold">{whatsappWidget.startChat}</span>
            </Link>

            <Link
              href={`tel:${siteConfig.phone}`}
              onClick={() => setOpen(false)}
              className="flex h-11 items-center justify-center gap-2 rounded-2xl border border-border/70 bg-background text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <PhoneCall className="h-4 w-4" aria-hidden />
              <span>{whatsappWidget.orCall}</span>
            </Link>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Open WhatsApp chat"
          aria-expanded={open}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--gold)] text-primary shadow-[0_15px_40px_-10px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-[1.06]"
        >
          {!open ? (
            <span aria-hidden className="absolute inset-0 animate-ping rounded-full bg-[color:var(--gold)]/40" />
          ) : null}
          <span className="relative">
            {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-6 w-6" />}
          </span>
          {!open ? (
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-background bg-primary text-[9px] font-semibold text-primary-foreground">
              1
            </span>
          ) : null}
        </button>
      </div>
    </div>
  );
}