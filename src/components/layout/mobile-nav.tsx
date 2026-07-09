"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpLeft, MapPin, Menu, MessageCircle, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/shared/logo";
import { siteConfig } from "@/config/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Open navigation"
        className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-border/70 bg-background text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <Menu className="h-5 w-5" />
      </SheetTrigger>

      <SheetContent side="right" className="w-[92vw] max-w-sm border-border/70 bg-background/98 px-0">
        <SheetHeader className="px-6 text-right">
          <SheetTitle asChild>
            <Logo href="" size="sm" />
          </SheetTitle>
          <SheetDescription className="text-right leading-7">
            {"\u062A\u0648\u0631\u064A\u062F \u0648\u062A\u0631\u0643\u064A\u0628 \u0627\u0644\u0631\u062E\u0627\u0645 \u0648\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u062D\u062C\u0631 \u0627\u0644\u0641\u0627\u062E\u0631\u0629 \u0641\u064A \u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0634\u0631\u0642\u064A\u0629"}
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 px-6">
          <div className="mb-5 flex items-center gap-2 rounded-2xl border border-border/70 bg-card px-4 py-3 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" aria-hidden />
            <span>{`${siteConfig.location} - ${siteConfig.region}`}</span>
          </div>

          <nav className="grid gap-2">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-2xl border border-border/70 bg-card/60 px-4 py-3 text-sm transition-colors hover:bg-card"
              >
                <span>{item.label}</span>
                <ArrowUpLeft className="h-4 w-4 text-muted-foreground" aria-hidden />
              </Link>
            ))}
          </nav>

          <Separator className="my-6" />

          <div className="grid gap-3">
            <Button asChild className="h-11 justify-center">
              <Link
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                <span>{"\u062A\u0648\u0627\u0635\u0644 \u0639\u0628\u0631 \u0648\u0627\u062A\u0633\u0627\u0628"}</span>
              </Link>
            </Button>

            <Button asChild variant="outline" className="h-11 justify-center">
              <Link href={`tel:${siteConfig.phone}`} onClick={() => setOpen(false)}>
                <PhoneCall className="h-4 w-4" aria-hidden />
                <span>{siteConfig.phoneDisplay}</span>
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}