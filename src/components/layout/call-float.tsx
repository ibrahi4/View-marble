"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MessageCircle, PhoneCall, Send, X } from "lucide-react";
import { useMounted } from "@/hooks/use-mounted";
import { siteConfig } from "@/config/site";
import { t } from "@/content/ar";
import { cn } from "@/lib/utils";

function buildWhatsappUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsappDigits}?text=${encodeURIComponent(message)}`;
}

export function CallFloat() {
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

  const phoneHref = `tel:${siteConfig.phone.replace(/\s+/g, "")}`;

  return (
    <div
      dir="ltr"
      className="pointer-events-none fixed bottom-5 left-24 z-50 md:bottom-8 md:left-28"
    >
      <div
        ref={panelRef}
        className="pointer-events-auto relative flex flex-col items-start gap-4"
      >
        <div
          dir="rtl"
          role="dialog"
          aria-label={t.callWidget.greeting}
          aria-hidden={!open}
          className={cn(
            "w-[min(340px,calc(100vw-2rem))] origin-bottom-left overflow-hidden rounded-[28px] border border-white/10 bg-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)] transition-all duration-300",
            open
              ? "pointer-events-auto scale-100 opacity-100 translate-y-0"
              : "pointer-events-none absolute scale-95 opacity-0 translate-y-4"
          )}
        >
          <div className="relative overflow-hidden bg-[color:var(--gold)] p-5 text-primary">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.18),transparent_60%)]"
            />

            <div className="relative flex items-start justify-between gap-3">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="إغلاق"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-black/15 bg-black/10 text-primary transition-colors hover:bg-black/20"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex flex-1 items-center justify-end gap-3 text-right">
                <div>
                  <div className="text-sm font-semibold">
                    {t.callWidget.agentName}
                  </div>
                  <div className="mt-0.5 flex items-center justify-end gap-1.5 text-[11px] text-primary/85">
                    <span>{t.callWidget.agentTitle}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  </div>
                </div>
                <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-black/15 bg-black/10">
                  <PhoneCall className="h-5 w-5 text-primary" aria-hidden />
                  <span className="absolute -bottom-0.5 -left-0.5 h-3 w-3 rounded-full border-2 border-[color:var(--gold)] bg-primary" />
                </div>
              </div>
            </div>

            <div className="relative mt-5 text-right">
              <div className="text-base font-semibold leading-7">
                {t.callWidget.greeting}
              </div>
              <div className="mt-1 text-sm text-primary/85">
                {t.callWidget.subGreeting}
              </div>
            </div>
          </div>

          <div className="max-h-[52vh] overflow-y-auto bg-white p-5 text-neutral-900">
            <div className="text-xs text-neutral-500">
              {t.callWidget.quickMessagesTitle}
            </div>

            <div className="mt-4 space-y-2.5">
              {t.callWidget.quickMessages.map((message) => (
                <Link
                  key={message}
                  href={buildWhatsappUrl(message)}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm transition-all hover:border-[color:var(--gold)]/60 hover:bg-[color:var(--gold)]/5"
                >
                  <span className="leading-6">{message}</span>
                  <Send
                    className="h-4 w-4 shrink-0 text-neutral-400 transition-colors group-hover:text-[color:var(--gold)]"
                    aria-hidden
                  />
                </Link>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm">
              <div className="text-xs text-neutral-500">
                {t.callWidget.agentTitle}
              </div>
              <div className="mt-1 font-semibold text-neutral-900" dir="ltr">
                {siteConfig.phoneDisplay}
              </div>
            </div>
          </div>

          <div className="space-y-2 border-t border-neutral-200 bg-white p-4">
            <Link
              href={phoneHref}
              onClick={() => setOpen(false)}
              className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-[color:var(--gold)] text-primary shadow-sm transition-opacity hover:opacity-92"
            >
              <PhoneCall className="h-5 w-5" aria-hidden />
              <span className="text-sm font-semibold">
                {t.callWidget.startCall}
              </span>
            </Link>

            <Link
              href={buildWhatsappUrl(t.callWidget.quickMessages[0] ?? "")}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="flex h-11 items-center justify-center gap-2 rounded-2xl border border-neutral-200 bg-white text-sm text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-neutral-900"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              <span>{t.callWidget.orWhatsapp}</span>
            </Link>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "إغلاق الاتصال" : "فتح الاتصال"}
          aria-expanded={open}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--gold)] text-primary shadow-[0_15px_40px_-10px_rgba(201,165,92,0.55)] transition-transform duration-300 hover:scale-[1.06]"
        >
          {!open ? (
            <span
              aria-hidden
              className="absolute inset-0 animate-ping rounded-full bg-[color:var(--gold)]/40"
            />
          ) : null}
          <span className="relative">
            {open ? <X className="h-5 w-5" /> : <PhoneCall className="h-6 w-6" />}
          </span>
        </button>
      </div>
    </div>
  );
}