import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowUpLeft, BadgeCheck, MessageCircle, PhoneCall, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { services, getServiceBySlug } from "@/config/services";
import { siteConfig } from "@/config/site";
import { createMetadata, absoluteUrl } from "@/lib/seo";

export const dynamicParams = false;
export const revalidate = 86400;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return createMetadata({ noIndex: true });
  }

  return createMetadata({
    title: service.title,
    description: service.short,
    path: `/services/${service.slug}`,
    keywords: [...service.keywords],
  });
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    image: service.image,
    provider: {
      "@type": "LocalBusiness",
      name: `${siteConfig.name} ${siteConfig.nameAr}`,
      url: absoluteUrl("/"),
      telephone: `+${siteConfig.whatsapp}`,
    },
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    url: absoluteUrl(`/services/${service.slug}`),
  };

  return (
    <>
      <SiteHeader />

      <main id="main-content">
        <JsonLd data={serviceSchema} />

        <section className="relative overflow-hidden border-b border-border/70 grain">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-40 right-1/2 h-[520px] w-[520px] translate-x-1/2 rounded-full bg-primary/8 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-[380px] w-[380px] rounded-full bg-[color:var(--gold)]/18 blur-3xl" />
          </div>

          <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
            <div>
              <Breadcrumbs
                items={[
                  { name: "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629", href: "/" },
                  { name: "\u0627\u0644\u062E\u062F\u0645\u0627\u062A", href: "/services" },
                  { name: service.title, href: `/services/${service.slug}` },
                ]}
              />

              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/85 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur">
                <Sparkles className="h-4 w-4 text-[color:var(--gold)]" aria-hidden />
                <span>
                  {"\u062E\u062F\u0645\u0629 \u0641\u0627\u062E\u0631\u0629 \u0641\u064A \u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0634\u0631\u0642\u064A\u0629"}
                </span>
              </div>

              <h1 className="mt-6 text-[36px] font-semibold leading-[1.15] tracking-tight sm:text-5xl">
                {service.title}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-[1.95] text-muted-foreground sm:text-lg">
                {service.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild size="lg">
                  <Link href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noreferrer">
                    <MessageCircle className="h-4 w-4" aria-hidden />
                    <span>{"\u062A\u0648\u0627\u0635\u0644 \u0639\u0628\u0631 \u0648\u0627\u062A\u0633\u0627\u0628"}</span>
                    <ArrowUpLeft className="h-4 w-4" aria-hidden />
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

            <div className="relative aspect-[4/5] overflow-hidden rounded-[36px] border border-border/70 shadow-[0_40px_120px_-40px_rgba(32,27,21,0.4)]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </div>
        </section>

        <section className="border-b border-border/70">
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
            <div className="luxury-card rounded-[28px] p-8">
              <h2 className="text-2xl font-semibold">
                {"\u0645\u0645\u064A\u0632\u0627\u062A \u0627\u0644\u062E\u062F\u0645\u0629"}
              </h2>

              <ul className="mt-6 grid gap-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/70 px-4 py-3">
                    <span className="text-sm font-medium">{feature}</span>
                    <BadgeCheck className="h-4 w-4 text-[color:var(--gold)]" aria-hidden />
                  </li>
                ))}
              </ul>
            </div>

            <div className="luxury-card rounded-[28px] p-8">
              <h2 className="text-2xl font-semibold">
                {"\u0627\u0644\u0623\u0643\u062B\u0631 \u0645\u0644\u0627\u0621\u0645\u0629 \u0644\u0640"}
              </h2>

              <div className="mt-6 flex flex-wrap gap-2">
                {service.useCases.map((useCase) => (
                  <span
                    key={useCase}
                    className="rounded-full border border-border/70 bg-background px-4 py-2 text-sm text-muted-foreground"
                  >
                    {useCase}
                  </span>
                ))}
              </div>

              <div className="gold-divider my-8" />

              <div className="text-sm leading-7 text-muted-foreground">
                {"\u0627\u0644\u062A\u063A\u0637\u064A\u0629: "}
                {siteConfig.serviceAreas.slice(0, 6).join(" \u00B7 ")}
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <h2 className="text-2xl font-semibold">
                {"\u062E\u062F\u0645\u0627\u062A \u0623\u062E\u0631\u0649 \u0642\u062F \u062A\u0647\u0645\u0643"}
              </h2>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm text-[color:var(--gold)] hover:opacity-90"
              >
                <span>{"\u0643\u0644 \u0627\u0644\u062E\u062F\u0645\u0627\u062A"}</span>
                <ArrowUpLeft className="h-4 w-4" aria-hidden />
              </Link>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {services
                .filter((item) => item.slug !== service.slug)
                .slice(0, 3)
                .map((item) => (
                  <Link
                    key={item.slug}
                    href={`/services/${item.slug}`}
                    className="luxury-card group block overflow-hidden rounded-[24px]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-[900ms] group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-base font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.short}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}