import Link from "next/link";
import { Clock, Mail, MapPin, MessageCircle, PhoneCall, Sparkles } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { siteConfig } from "@/config/site";

const footerServices = [
  "\u062A\u0648\u0631\u064A\u062F \u0648\u062A\u0631\u0643\u064A\u0628 \u0627\u0644\u0631\u062E\u0627\u0645",
  "\u0645\u063A\u0627\u0633\u0644 \u0631\u062E\u0627\u0645 \u062A\u0641\u0635\u064A\u0644",
  "\u062F\u0631\u062C \u0627\u0644\u0633\u0644\u0627\u0644\u0645",
  "\u0631\u062E\u0627\u0645 \u0627\u0644\u0645\u0637\u0627\u0628\u062E",
  "\u0635\u064A\u0627\u0646\u0629 \u0648\u062A\u0644\u0645\u064A\u0639",
] as const;

const footerLinks = [
  { label: "\u0627\u0644\u062E\u062F\u0645\u0627\u062A", href: "/services" },
  { label: "\u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639", href: "/#projects" },
  { label: "\u0627\u0644\u0645\u0646\u0627\u0637\u0642", href: "/#coverage" },
  { label: "\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629", href: "/#faq" },
  { label: "\u0637\u0644\u0628 \u0639\u0631\u0636 \u0633\u0639\u0631", href: "/#quote" },
] as const;

export function SiteFooter() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-border/70 bg-primary text-primary-foreground grain">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[color:var(--gold)]/12 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.9fr_0.9fr_1fr]">
          <div className="space-y-5">
            <Logo variant="light" />

            <p className="max-w-md text-sm leading-8 text-primary-foreground/72">
              {siteConfig.description}
            </p>

            <div className="flex items-center gap-2 text-sm text-primary-foreground/72">
              <Sparkles className="h-4 w-4 text-[color:var(--gold-soft)]" aria-hidden />
              <span>
                {"\u0641\u062E\u0627\u0645\u0629 \u062A\u0638\u0647\u0631 \u0641\u064A \u0643\u0644 \u062A\u0641\u0635\u064A\u0644\u0629"}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-foreground/70">
              {"\u0627\u0644\u062E\u062F\u0645\u0627\u062A"}
            </h3>
            <ul className="space-y-3 text-sm text-primary-foreground/78">
              {footerServices.map((service) => (
                <li key={service} className="transition-colors hover:text-primary-foreground">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-foreground/70">
              {"\u0631\u0648\u0627\u0628\u0637 \u0633\u0631\u064A\u0639\u0629"}
            </h3>
            <ul className="space-y-3 text-sm">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground/78 transition-colors hover:text-primary-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-foreground/70">
              {"\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627"}
            </h3>

            <div className="space-y-3 text-sm">
              <Link
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-3 text-primary-foreground/85 transition-colors hover:text-primary-foreground"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/12 bg-white/8">
                  <PhoneCall className="h-4 w-4" aria-hidden />
                </div>
                <span className="tracking-wide">{siteConfig.phoneDisplay}</span>
              </Link>

              <Link
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-primary-foreground/85 transition-colors hover:text-primary-foreground"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/12 bg-white/8">
                  <MessageCircle className="h-4 w-4" aria-hidden />
                </div>
                <span>{"\u0648\u0627\u062A\u0633\u0627\u0628"}</span>
              </Link>

              <Link
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-primary-foreground/85 transition-colors hover:text-primary-foreground"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/12 bg-white/8">
                  <Mail className="h-4 w-4" aria-hidden />
                </div>
                <span>{siteConfig.email}</span>
              </Link>

              <div className="flex items-center gap-3 text-primary-foreground/85">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/12 bg-white/8">
                  <MapPin className="h-4 w-4" aria-hidden />
                </div>
                <span>{`${siteConfig.location} - ${siteConfig.region}`}</span>
              </div>

              <div className="flex items-center gap-3 text-primary-foreground/85">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/12 bg-white/8">
                  <Clock className="h-4 w-4" aria-hidden />
                </div>
                <span>
                  {"\u0627\u0644\u0633\u0628\u062A - \u0627\u0644\u062E\u0645\u064A\u0633 \u00B7 8\u0635 - 10\u0645"}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-foreground/70">
            {"\u0627\u0644\u0645\u0646\u0627\u0637\u0642 \u0627\u0644\u062A\u064A \u0646\u062E\u062F\u0645\u0647\u0627"}
          </h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {siteConfig.serviceAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-white/12 bg-white/5 px-4 py-1.5 text-sm text-primary-foreground/80"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-sm text-primary-foreground/60">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              {`\u00A9 ${new Date().getFullYear()} ${siteConfig.name} ${siteConfig.nameAr}. \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629.`}
            </div>
            <div className="tracking-[0.22em]">
              VIEW MARBLE STUDIO
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}