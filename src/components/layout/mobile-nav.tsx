"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { ChevronLeft, MapPin, Menu, MessageCircle, PhoneCall } from "lucide-react";

import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
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
        className="w-[88vw] max-w-sm border-border/70 bg-background px-0"
      >
        <div className="flex h-full flex-col">
          <SheetHeader className="border-b border-border/70 px-6 pb-5 pt-6 text-right">
            <Logo href="/" size="sm" />
            <SheetTitle className="sr-only">
              {t.common.brandName} {t.common.brandNameEn}
            </SheetTitle>
            <SheetDescription className="sr-only">
              قائمة التنقل الرئيسية للموقع
            </SheetDescription>
          </SheetHeader>

          <nav
            aria-label="التنقل الرئيسي"
            className="flex-1 overflow-y-auto px-4 py-4"
          >
            <ul className="space-y-1">
              {siteConfig.navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-all",
                        isActive
                          ? "bg-[color:var(--gold)]/10 text-foreground"
                          : "text-foreground/85 hover:bg-accent"
                      )}
                    >
                      <span>{item.label}</span>
                      <ChevronLeft
                        className={cn(
                          "h-4 w-4 transition-transform",
                          isActive
                            ? "text-[color:var(--gold)]"
                            : "text-muted-foreground"
                        )}
                        aria-hidden
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 flex items-center gap-2 rounded-xl border border-border/70 bg-card px-4 py-3 text-xs text-muted-foreground">
              <MapPin
                className="h-3.5 w-3.5 text-[color:var(--gold)]"
                aria-hidden
              />
              <span>{`${siteConfig.location} · ${siteConfig.region}`}</span>
            </div>
          </nav>

          <div className="border-t border-border/70 bg-card/50 px-4 py-4">
            <div className="grid gap-2">
              <Button asChild className="h-11 justify-center">
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

              <Button
                asChild
                variant="outline"
                className="h-11 justify-center"
              >
                <Link href={phoneHref} onClick={() => setOpen(false)}>
                  <PhoneCall className="h-4 w-4" aria-hidden />
                  <span dir="ltr">{siteConfig.phoneDisplay}</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}