"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MessageCircle, PhoneCall, Send, X } from "lucide-react";
import { useMounted } from "@/hooks/use-mounted";
import { siteConfig } from "@/config/site";
import { whatsappWidget } from "@/config/whatsapp-widget";
import { cn } from "@/lib/utils";

type PanelKey = "whatsapp" | "call" | null;

const callQuickMessages = [
  "\u0623\u0631\u063A\u0628 \u0641\u064A \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0645\u0639 \u0645\u0633\u062A\u0634\u0627\u0631 \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A",
  "\u0623\u062D\u062A\u0627\u062C \u0625\u0644\u0649 \u0645\u0648\u0639\u062F \u0645\u0639\u0627\u064A\u0646\u0629 \u0645\u062C\u0627\u0646\u064A\u0629",
  "\u0644\u062F\u064A \u0627\u0633\u062A\u0641\u0633\u0627\u0631 \u0633\u0631\u064A\u0639 \u0639\u0646 \u0627\u0644\u062E\u062F\u0645\u0627\u062A",
  "\u0623\u0631\u0642\u0627\u0645 \u0648\u0645\u0648\u0627\u0639\u064A\u062F \u0627\u0644\u0639\u0645\u0644",
] as const;

const callInfoTitle =
  "\u0645\u062A\u0627\u062D\u0648\u0646 \u0644\u0644\u0627\u062A\u0635\u0627\u0644 \u064A\u0648\u0645\u064A\u0627\u064B";
const callInfoSub =
  "\u0641\u0631\u064A\u0642 View \u064A\u0631\u062F \u0639\u0644\u064A\u0643 \u0641\u064A \u0623\u0642\u0631\u0628 \u0648\u0642\u062A \u0645\u0645\u0643\u0646";
const callInfoAgent = "View Sales";
const callInfoAgentTitle =
  "\u0641\u0631\u064A\u0642 \u0627\u0644\u062E\u062F\u0645\u0629";
const callInfoQuickTitle =
  "\u0627\u062E\u062A\u0631 \u0633\u0628\u0628 \u0627\u0644\u0627\u062A\u0635\u0627\u0644";
const callInfoStart =
  "\u0627\u062A\u0635\u0644 \u0628\u0646\u0627 \u0627\u0644\u0622\u0646";
const callInfoOr =
  "\u0623\u0648 \u062A\u0648\u0627\u0635\u0644 \u0639\u0628\u0631 \u0627\u0644\u0648\u0627\u062A\u0633\u0627\u0628";

function buildWhatsappUrl(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsapp.replace(/[^\d]/g, "")}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function WhatsappFloat() {
  const mounted = useMounted();
  const [activePanel, setActivePanel] = useState<PanelKey>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mounted || activePanel === null) return;

    const onClick = (event: MouseEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(event.target as Node)) {
        setActivePanel(null);
      }
    };

    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActivePanel(null);
    };

    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onEsc);

    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [mounted, activePanel]);

  if (!mounted) return null;

  const phoneHref = `tel:${siteConfig.phone.replace(/\s+/g, "")}`;
  const isWhatsappOpen = activePanel === "whatsapp";
  const isCallOpen = activePanel === "call";

  const toggle = (key: Exclude<PanelKey, null>) => {
    setActivePanel((prev) => (prev === key ? null : key));
  };

  const closeAll = () => setActivePanel(null);

  return (
    <div
      dir="ltr"
      className="pointer-events-none fixed bottom-5 left-4 z-50 md:bottom-8 md:left-6"
    >
      <div
        ref={containerRef}
        className="pointer-events-auto relative flex flex-col items-start gap-4"
      >
        <div
          dir="rtl"
          className={cn(
            "w-[min(340px,calc(100vw-2rem))] origin-bottom-left overflow-hidden rounded-[28px] border border-white/10 bg-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)] transition-all duration-300",
            isWhatsappOpen
              ? "pointer-events-auto scale-100 opacity-100 translate-y-0"
              : "pointer-events-none absolute scale-95 opacity-0 translate-y-4"
          )}
          role="dialog"
          aria-hidden={!isWhatsappOpen}
        >
          <div className="relative overflow-hidden bg-[#25D366] p-5 text-white">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_60%)]"
            />

            <div className="relative flex items-start justify-between gap-3">
              <button
                type="button"
                onClick={closeAll}
                aria-label="Close chat"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 transition-colors hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex flex-1 items-center justify-end gap-3 text-right">
                <div>
                  <div className="text-sm font-semibold">{whatsappWidget.agentName}</div>
                  <div className="mt-0.5 flex items-center justify-end gap-1.5 text-[11px] text-white/85">
                    <span>{whatsappWidget.agentTitle}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  </div>
                </div>
                <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/10">
                  <span className="text-lg font-semibold">V</span>
                  <span className="absolute -bottom-0.5 -left-0.5 h-3 w-3 rounded-full border-2 border-[#25D366] bg-white" />
                </div>
              </div>
            </div>

            <div className="relative mt-5 text-right">
              <div className="text-base font-semibold leading-7">{whatsappWidget.greeting}</div>
              <div className="mt-1 text-sm text-white/85">{whatsappWidget.subGreeting}</div>
            </div>
          </div>

          <div className="max-h-[52vh] overflow-y-auto bg-white p-5 text-neutral-900">
            <div className="text-xs text-neutral-500">
              {whatsappWidget.quickMessagesTitle}
            </div>

            <div className="mt-4 space-y-2.5">
              {whatsappWidget.quickMessages.map((message) => (
                <Link
                  key={message}
                  href={buildWhatsappUrl(message)}
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeAll}
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm transition-all hover:border-[#25D366]/60 hover:bg-[#25D366]/5"
                >
                  <span className="leading-6">{message}</span>
                  <Send
                    className="h-4 w-4 shrink-0 text-neutral-400 transition-colors group-hover:text-[#25D366]"
                    aria-hidden
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-2 border-t border-neutral-200 bg-white p-4">
            <Link
              href={buildWhatsappUrl()}
              target="_blank"
              rel="noreferrer"
              onClick={closeAll}
              className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#25D366] text-white shadow-sm transition-opacity hover:opacity-92"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              <span className="text-sm font-semibold">{whatsappWidget.startChat}</span>
            </Link>

            <Link
              href={phoneHref}
              onClick={closeAll}
              className="flex h-11 items-center justify-center gap-2 rounded-2xl border border-neutral-200 bg-white text-sm text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-neutral-900"
            >
              <PhoneCall className="h-4 w-4" aria-hidden />
              <span>{whatsappWidget.orCall}</span>
            </Link>
          </div>
        </div>

        <div
          dir="rtl"
          className={cn(
            "w-[min(340px,calc(100vw-2rem))] origin-bottom-left overflow-hidden rounded-[28px] border border-white/10 bg-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)] transition-all duration-300",
            isCallOpen
              ? "pointer-events-auto scale-100 opacity-100 translate-y-0"
              : "pointer-events-none absolute scale-95 opacity-0 translate-y-4"
          )}
          role="dialog"
          aria-hidden={!isCallOpen}
        >
          <div className="relative overflow-hidden bg-[color:var(--gold)] p-5 text-primary">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.18),transparent_60%)]"
            />

            <div className="relative flex items-start justify-between gap-3">
              <button
                type="button"
                onClick={closeAll}
                aria-label="Close call panel"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-black/15 bg-black/10 text-primary transition-colors hover:bg-black/20"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex flex-1 items-center justify-end gap-3 text-right">
                <div>
                  <div className="text-sm font-semibold">{callInfoAgent}</div>
                  <div className="mt-0.5 flex items-center justify-end gap-1.5 text-[11px] text-primary/85">
                    <span>{callInfoAgentTitle}</span>
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
              <div className="text-base font-semibold leading-7">{callInfoTitle}</div>
              <div className="mt-1 text-sm text-primary/85">{callInfoSub}</div>
            </div>
          </div>

          <div className="max-h-[52vh] overflow-y-auto bg-white p-5 text-neutral-900">
            <div className="text-xs text-neutral-500">{callInfoQuickTitle}</div>

            <div className="mt-4 space-y-2.5">
              {callQuickMessages.map((message) => (
                <Link
                  key={message}
                  href={buildWhatsappUrl(message)}
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeAll}
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
              <div className="text-xs text-neutral-500">{callInfoAgentTitle}</div>
              <div className="mt-1 font-semibold text-neutral-900" dir="ltr">
                {siteConfig.phoneDisplay}
              </div>
            </div>
          </div>

          <div className="space-y-2 border-t border-neutral-200 bg-white p-4">
            <Link
              href={phoneHref}
              onClick={closeAll}
              className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-[color:var(--gold)] text-primary shadow-sm transition-opacity hover:opacity-92"
            >
              <PhoneCall className="h-5 w-5" aria-hidden />
              <span className="text-sm font-semibold">{callInfoStart}</span>
            </Link>

            <Link
              href={buildWhatsappUrl()}
              target="_blank"
              rel="noreferrer"
              onClick={closeAll}
              className="flex h-11 items-center justify-center gap-2 rounded-2xl border border-neutral-200 bg-white text-sm text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-neutral-900"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              <span>{callInfoOr}</span>
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => toggle("whatsapp")}
            aria-label="Open WhatsApp chat"
            aria-expanded={isWhatsappOpen}
            className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_15px_40px_-10px_rgba(37,211,102,0.55)] transition-transform duration-300 hover:scale-[1.06]"
          >
            {!isWhatsappOpen ? (
              <span
                aria-hidden
                className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40"
              />
            ) : null}
            <span className="relative">
              {isWhatsappOpen ? <X className="h-5 w-5" /> : <MessageCircle className="h-6 w-6" />}
            </span>
            {!isWhatsappOpen ? (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-background bg-red-500 text-[9px] font-semibold text-white">
                1
              </span>
            ) : null}
          </button>

          <button
            type="button"
            onClick={() => toggle("call")}
            aria-label="Open call panel"
            aria-expanded={isCallOpen}
            className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--gold)] text-primary shadow-[0_15px_40px_-10px_rgba(201,165,92,0.55)] transition-transform duration-300 hover:scale-[1.06]"
          >
            {!isCallOpen ? (
              <span
                aria-hidden
                className="absolute inset-0 animate-ping rounded-full bg-[color:var(--gold)]/40"
              />
            ) : null}
            <span className="relative">
              {isCallOpen ? <X className="h-5 w-5" /> : <PhoneCall className="h-6 w-6" />}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}