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
import { createMetadata } from "@/lib/seo";

export const revalidate = 86400;

export const metadata: Metadata = createMetadata({
  title: "\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627",
  description:
    "\u062A\u0648\u0627\u0635\u0644 \u0645\u0639 \u0641\u064A\u0648 View \u0644\u0637\u0644\u0628 \u0639\u0631\u0636 \u0633\u0639\u0631\u060C \u0645\u0639\u0627\u064A\u0646\u0629\u060C \u0623\u0648 \u0627\u0633\u062A\u0641\u0633\u0627\u0631 \u0639\u0646 \u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0631\u062E\u0627\u0645 \u0641\u064A \u0627\u0644\u062F\u0645\u0627\u0645 \u0648\u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0634\u0631\u0642\u064A\u0629.",
  path: "/contact",
});

const contactMethods = [
  {
    icon: PhoneCall,
    label: "اتصال مباشر",
    value: siteConfig.phoneDisplay,
    href: `tel:${siteConfig.phone}`,
    external: false,
  },
  {
    icon: MessageCircle,
    label: "واتساب",
    value: "التواصل الفوري",
    href: `https://wa.me/${siteConfig.whatsapp}`,
    external: true,
  },
  {
    icon: Mail,
    label: "البريد الإلكتروني",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    external: false,
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <SiteHeader />

      <main id="main-content">
        <section className="border-b border-border/70">
          <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <Breadcrumbs
              items={[
                { name: "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629", href: "/" },
                { name: "\u062A\u0648\u0627\u0635\u0644", href: "/contact" },
              ]}
            />

            <div className="mt-6">
              <SectionHeading
                eyebrow="CONTACT"
                title={"\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0644\u0628\u062F\u0621 \u0645\u0634\u0631\u0648\u0639\u0643"}
                description={"\u0646\u0633\u062A\u0642\u0628\u0644 \u0637\u0644\u0628\u0627\u062A\u0643\u0645 \u0644\u0644\u0645\u0639\u0627\u064A\u0646\u0629 \u0648\u0637\u0644\u0628 \u0639\u0631\u0636 \u0627\u0644\u0633\u0639\u0631 \u0641\u064A \u0623\u064A \u0648\u0642\u062A \u062E\u0644\u0627\u0644 \u0623\u0648\u0642\u0627\u062A \u0627\u0644\u0639\u0645\u0644\u060C \u0648\u0646\u0631\u062F \u0639\u0644\u064A\u0643\u0645 \u0641\u064A \u0623\u0633\u0631\u0639 \u0648\u0642\u062A."}
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
            target={method.external === true ? "_blank" : undefined}
rel={method.external === true ? "noreferrer" : undefined}
                    className="luxury-card group flex items-center gap-4 rounded-[24px] p-6"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-[color:var(--gold)]">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                        {method.label}
                      </div>
                      <div className="mt-1 text-base font-semibold">{method.value}</div>
                    </div>
                    <ArrowUpLeft className="h-4 w-4 text-muted-foreground transition-transform duration-500 group-hover:-translate-y-0.5" aria-hidden />
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
                      {"\u0627\u0644\u0645\u0648\u0642\u0639"}
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
                      {"\u0623\u0648\u0642\u0627\u062A \u0627\u0644\u0639\u0645\u0644"}
                    </div>
                    <div className="mt-1 text-base font-semibold">
                      {"\u0627\u0644\u0633\u0628\u062A - \u0627\u0644\u062E\u0645\u064A\u0633 \u00B7 8\u0635 - 10\u0645"}
                    </div>
                  </div>
                </div>
              </div>

              <div className="luxury-card rounded-[28px] p-6">
                <h3 className="text-base font-semibold">
                  {"\u0627\u0644\u0645\u0646\u0627\u0637\u0642 \u0627\u0644\u062A\u064A \u0646\u062E\u062F\u0645\u0647\u0627"}
                </h3>
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
                  <Link href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noreferrer">
                    <MessageCircle className="h-4 w-4" aria-hidden />
                    <span>{"\u062A\u0648\u0627\u0635\u0644 \u0641\u0648\u0631\u064A"}</span>
                  </Link>
                </Button>

                <Button asChild variant="outline" size="lg">
                  <Link href={`tel:${siteConfig.phone}`}>
                    <PhoneCall className="h-4 w-4" aria-hidden />
                    <span>{siteConfig.phoneDisplay}</span>
                  </Link>
                </Button>
              </div>
            </div>

            <div className="rounded-[28px] border border-border/70 bg-background/60 p-6 sm:p-8">
              <div className="mb-6">
                <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  QUOTE
                </div>
                <h3 className="mt-2 text-2xl font-semibold">
                  {"\u0627\u0637\u0644\u0628 \u0639\u0631\u0636 \u0633\u0639\u0631 \u0645\u0628\u0627\u0634\u0631"}
                </h3>
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