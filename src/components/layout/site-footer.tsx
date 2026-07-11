import Link from "next/link";
import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  PhoneCall,
  Sparkles,
} from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { services } from "@/config/services";
import { siteConfig } from "@/config/site";
import { t } from "@/content/ar";

const footerLinks = [
  { label: "الخدمات", href: "/services" },
  { label: "المناطق", href: "/areas" },
  { label: "المدونة", href: "/blog" },
  { label: "من نحن", href: "/about" },
  { label: "تواصل", href: "/contact" },
] as const;

export function SiteFooter() {
  const phoneHref = `tel:${siteConfig.phone.replace(/\s+/g, "")}`;
  const whatsappHref = `https://wa.me/${siteConfig.whatsappDigits}`;
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      role="contentinfo"
      className="relative overflow-hidden border-t border-border/70 bg-primary text-primary-foreground"
    >
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
              <Sparkles
                className="h-4 w-4 text-[color:var(--gold-soft)]"
                aria-hidden
              />
              <span>{t.footer.tagline}</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-foreground/70">
              {t.footer.servicesTitle}
            </h3>
            <ul className="space-y-3 text-sm text-primary-foreground/78">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="transition-colors hover:text-primary-foreground"
                  >
                    {service.titleShort}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-foreground/70">
              {t.footer.quickLinksTitle}
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
              {t.footer.contactTitle}
            </h3>

            <div className="space-y-3 text-sm">
              <Link
                href={phoneHref}
                className="flex items-center gap-3 text-primary-foreground/85 transition-colors hover:text-primary-foreground"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/12 bg-white/8">
                  <PhoneCall className="h-4 w-4" aria-hidden />
                </div>
                <span className="tracking-wide">{siteConfig.phoneDisplay}</span>
              </Link>

              <Link
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-primary-foreground/85 transition-colors hover:text-primary-foreground"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/12 bg-white/8">
                  <MessageCircle className="h-4 w-4" aria-hidden />
                </div>
                <span>{t.common.whatsapp}</span>
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
                <span>{t.common.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-foreground/70">
            {t.footer.areasTitle}
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
              {`© ${currentYear} ${siteConfig.name} ${siteConfig.nameAr}. ${t.footer.rights}.`}
            </div>
            <div className="tracking-[0.22em]">{t.footer.slogan}</div>
          </div>
        </div>
      </div>
    </footer>
  );
}