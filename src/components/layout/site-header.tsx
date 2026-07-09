import Link from "next/link";
import { MapPin, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-border/70 bg-card px-3 py-2 text-sm text-muted-foreground lg:flex">
            <MapPin className="h-4 w-4" aria-hidden />
            <span>{siteConfig.location}</span>
          </div>

          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <Link href={`tel:${siteConfig.phone}`}>
              <PhoneCall className="h-4 w-4" aria-hidden />
              <span className="tracking-wide">{siteConfig.phoneDisplay}</span>
            </Link>
          </Button>

          <Button asChild className="hidden shadow-sm sm:inline-flex">
            <Link href="/#quote">
              <span>{"\u0627\u0637\u0644\u0628 \u0639\u0631\u0636 \u0633\u0639\u0631"}</span>
            </Link>
          </Button>

          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}