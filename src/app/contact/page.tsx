import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpLeft,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  PhoneCall,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionHeading } from "@/components/shared/section-heading";
import { QuoteForm } from "@/components/sections/home/quote-form";
import { siteConfig } from "@/config/site";
import { t } from "@/content/ar";
import { createMetadata } from "@/lib/seo";

export const revalidate = 86400;

export const metadata: Metadata = createMetadata({
  title: "تواصل مع فيو - طلب عرض سعر ومعاينة",
  description:
    "تواصل مع فيو View لطلب عرض سعر، معاينة مجانية، أو استفسار عن خدمات الرخام في الدمام والمنطقة الشرقية.",
  path: "/contact",
});

export default function ContactPage() {
  const phoneHref = `tel:${siteConfig.phone.replace(/\s+/g, "")}`;
  const whatsappHref = `https://wa.me/${siteConfig.whatsappDigits}`;

  const contactMethods = [
    {
      icon: PhoneCall,
      label: t.contact.directCall,
      value: siteConfig.phoneDisplay,
      href: phoneHref,
      external: false,
    },
    {
      icon: MessageCircle,
      label: t.common.whatsapp,
      value: t.contact.whatsappInstant,
      href: whatsappHref,
      external: true,
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      external: false,
    },
  ] as const;

  return (
    <>
      <SiteHeader />

      <main id="main-content">
        <section className="border-b border-border/70">
          <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <Breadcrumbs
              items={[
                { name: t.breadcrumbs.home, href: "/" },
                { name: t.breadcrumbs.contact, href: "/contact" },
              ]}
            />

            <div className="mt-6">
              <SectionHeading
                as="h1"
                eyebrow={t.contact.eyebrow}
                title={t.contact.title}
                description={t.contact.description}
              />
            </div>
          </div>
        </section>

        <section className="border-b border-border/70">
          <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-3">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <Link
                    key={method.label}
                    href={method.href}
                    target={method.external ? "_blank" : undefined}
                    rel={method.external ? "noreferrer" : undefined}
                    className="luxury-card group flex items-center gap-4 rounded-[24px] p-6"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-[color:var(--gold)]">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                        {method.label}
                      </div>
                      <div className="mt-1 text-base font-semibold">
                        {method.value}
                      </div>
                    </div>
                    <ArrowUpLeft
                      className="h-4 w-4 text-muted-foreground transition-transform duration-500 group-hover:-translate-y-0.5"
                      aria-hidden
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-b border-border/70">
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">
            <div className="space-y-6">
              <div className="luxury-card rounded-[28px] p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-[color:var(--gold)]">
                    <MapPin className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <div className="text-sm uppercase tracking-[0.28em] text-muted-foreground">
                      {t.contact.location}
                    </div>
                    <div className="mt-1 text-base font-semibold">
                      {`${siteConfig.location} - ${siteConfig.region}`}
                    </div>
                  </div>
                </div>
              </div>

              <div className="luxury-card rounded-[28px] p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-[color:var(--gold)]">
                    <Clock className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <div className="text-sm uppercase tracking-[0.28em] text-muted-foreground">
                      {t.contact.hours}
                    </div>
                    <div className="mt-1 text-base font-semibold">
                      {t.common.workingHours}
                    </div>
                  </div>
                </div>
              </div>

              <div className="luxury-card rounded-[28px] p-6">
                <h3 className="text-base font-semibold">{t.contact.ourAreas}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {siteConfig.serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-border/70 bg-background px-3 py-1.5 text-sm text-muted-foreground"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Button asChild size="lg">
                  <Link href={whatsappHref} target="_blank" rel="noreferrer">
                    <MessageCircle className="h-4 w-4" aria-hidden />
                    <span>{t.contact.whatsappInstant}</span>
                  </Link>
                </Button>

                <Button asChild variant="outline" size="lg">
                  <Link href={phoneHref}>
                    <PhoneCall className="h-4 w-4" aria-hidden />
                    <span>{siteConfig.phoneDisplay}</span>
                  </Link>
                </Button>
              </div>
            </div>

            <div className="rounded-[28px] border border-border/70 bg-background/60 p-6 sm:p-8">
              <div className="mb-6">
                <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  {t.quote.eyebrow}
                </div>
                <h2 className="mt-2 text-2xl font-semibold">
                  {t.quote.title}
                </h2>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {t.quote.description}
                </p>
              </div>
              <QuoteForm />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}