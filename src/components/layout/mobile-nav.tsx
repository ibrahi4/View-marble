"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import {
  ArrowUpLeft,
  MapPin,
  Menu,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";
import { t } from "@/content/ar";
import { cn } from "@/lib/utils";

const trustItems = [
  "تشطيب فاخر",
  "خامات مختارة",
  "تنفيذ دقيق",
] as const;

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const phoneHref = useMemo(
    () => `tel:${siteConfig.phone.replace(/\s+/g, "")}`,
    []
  );

  const whatsappHref = useMemo(
    () => `https://wa.me/${siteConfig.whatsappDigits}`,
    []
  );

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="فتح القائمة"
        className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border/70 bg-background/95 text-foreground shadow-sm transition-all hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <Menu className="h-5 w-5" aria-hidden />
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[92vw] max-w-sm border-border/70 bg-background/98 px-0"
      >
        <div className="flex h-full flex-col">
          <div className="border-b border-border/70 bg-gradient-to-b from-[color:var(--gold)]/10 via-card/95 to-background">
            <SheetHeader className="px-6 pb-5 pt-6 text-right">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-3">
                  <Logo href="/" size="sm" />

                  <div className="space-y-2">
                    <SheetTitle className="text-right text-lg font-semibold text-foreground">
                      {t.common.brandName} {t.common.brandNameEn}
                    </SheetTitle>

                    <SheetDescription className="text-right text-sm leading-7 text-muted-foreground">
                      تصفح الخدمات والأعمال واختر طريقة التواصل الأنسب لك بسهولة.
                    </SheetDescription>
                  </div>
                </div>

                <div className="rounded-2xl border border-border/70 bg-background/85 p-2.5 shadow-sm">
                  <Sparkles className="h-5 w-5 text-[color:var(--gold)]" aria-hidden />
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 rounded-2xl border border-border/70 bg-background/80 px-4 py-3 text-sm text-muted-foreground shadow-sm backdrop-blur">
                <MapPin className="h-4 w-4 text-[color:var(--gold)]" aria-hidden />
                <span>{`${siteConfig.location} - ${siteConfig.region}`}</span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {trustItems.map((item) => (
                  <div
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-1.5 text-xs text-muted-foreground"
                  >
                    <ShieldCheck
                      className="h-3.5 w-3.5 text-[color:var(--gold)]"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </SheetHeader>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6">
            <div className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
              التصفح
            </div>

            <nav className="grid gap-3">
              {siteConfig.navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "group flex items-center justify-between rounded-2xl border px-4 py-4 text-sm transition-all",
                      isActive
                        ? "border-[color:var(--gold)]/35 bg-[color:var(--gold)]/8 text-foreground shadow-sm"
                        : "border-border/70 bg-card/55 text-foreground hover:bg-card hover:shadow-sm"
                    )}
                  >
                    <div className="space-y-1 text-right">
                      <div className="font-medium">{item.label}</div>
                      <div className="text-xs text-muted-foreground">
                        استعرض التفاصيل
                      </div>
                    </div>

                    <div
                      className={cn(
                        "rounded-full border p-2 transition-colors",
                        isActive
                          ? "border-[color:var(--gold)]/35 bg-background/80"
                          : "border-border/70 bg-background/80 group-hover:bg-background"
                      )}
                    >
                      <ArrowUpLeft
                        className={cn(
                          "h-4 w-4",
                          isActive
                            ? "text-[color:var(--gold)]"
                            : "text-muted-foreground"
                        )}
                        aria-hidden
                      />
                    </div>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="mt-auto border-t border-border/70 bg-background/96 px-6 py-5">
            <Separator className="mb-5 opacity-0" />

            <div className="grid gap-3">
              <Button asChild className="h-12 justify-center shadow-sm">
                <Link
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                >
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  <span>{t.common.whatsapp}</span>
                </Link>
              </Button>

              <Button asChild variant="outline" className="h-12 justify-center">
                <Link href={phoneHref} onClick={() => setOpen(false)}>
                  <PhoneCall className="h-4 w-4" aria-hidden />
                  <span>{siteConfig.phoneDisplay}</span>
                </Link>
              </Button>
            </div>

            <p className="mt-4 text-center text-xs leading-6 text-muted-foreground">
              توريد وتركيب الرخام والمغاسل ودرج السلالم بتشطيب يليق بالمساحات الراقية.
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}