import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowUpLeft, BadgeCheck, MapPin, MessageCircle, PhoneCall, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { areas, getAreaBySlug } from "@/config/areas";
import { services } from "@/config/services";
import { siteConfig } from "@/config/site";
import { marbleImages } from "@/config/images";
import { absoluteUrl, createMetadata } from "@/lib/seo";

export const dynamicParams = false;
export const revalidate = 86400;

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);

  if (!area) return createMetadata({ noIndex: true });

  const title = `\u062A\u0648\u0631\u064A\u062F \u0648\u062A\u0631\u0643\u064A\u0628 \u0627\u0644\u0631\u062E\u0627\u0645 \u0641\u064A ${area.name}`;
  const description = `\u062E\u062F\u0645\u0627\u062A View \u0641\u064A\u0648 \u0644\u062A\u0648\u0631\u064A\u062F \u0648\u062A\u0631\u0643\u064A\u0628 \u0627\u0644\u0631\u062E\u0627\u0645\u060C \u0627\u0644\u0645\u063A\u0627\u0633\u0644\u060C \u062F\u0631\u062C \u0627\u0644\u0633\u0644\u0627\u0644\u0645\u060C \u0648\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u062A\u0634\u0637\u064A\u0628 \u0627\u0644\u0641\u0627\u062E\u0631\u0629 \u0641\u064A ${area.name} \u0648\u0645\u0627 \u062D\u0648\u0644\u0647\u0627.`;

  return createMetadata({
    title,
    description,
    path: `/areas/${area.slug}`,
    keywords: [...area.keywords],
  });
}

export default async function AreaPage({ params }: Params) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);

  if (!area) notFound();

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${siteConfig.name} ${siteConfig.nameAr} - ${area.name}`,
    description: area.intro,
    url: absoluteUrl(`/areas/${area.slug}`),
    telephone: `+${siteConfig.whatsapp}`,
    email: siteConfig.email,
    image: marbleImages.hero,
    address: {
      "@type": "PostalAddress",
      addressLocality: area.name,
      addressRegion: siteConfig.region,
      addressCountry: "SA",
    },
    areaServed: {
      "@type": "City",
      name: area.name,
    },
  };

  return (
    <>
      <SiteHeader />

      <main id="main-content">
        <JsonLd data={localBusinessSchema} />

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
                  { name: "\u0627\u0644\u0645\u0646\u0627\u0637\u0642", href: "/areas" },
                  { name: area.name, href: `/areas/${area.slug}` },
                ]}
              />

              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/85 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur">
                <Sparkles className="h-4 w-4 text-[color:var(--gold)]" aria-hidden />
                <span>
                  {"\u062E\u062F\u0645\u0627\u062A \u0631\u062E\u0627\u0645 \u0641\u0627\u062E\u0631\u0629 \u0641\u064A "} {area.name}
                </span>
              </div>

              <h1 className="mt-6 text-[36px] font-semibold leading-[1.15] tracking-tight sm:text-5xl lg:text-[54px]">
                {"\u062A\u0648\u0631\u064A\u062F \u0648\u062A\u0631\u0643\u064A\u0628 "}
                <span className="gold-text">
                  {"\u0627\u0644\u0631\u062E\u0627\u0645"}
                </span>
                {" \u0641\u064A "} {area.name}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-[1.95] text-muted-foreground sm:text-lg">
                {area.intro}
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

              <div className="gold-divider mt-10" />

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {area.highlights.map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-2xl border border-border/70 bg-card/60 px-4 py-3 text-sm">
                    <BadgeCheck className="h-4 w-4 text-[color:var(--gold)]" aria-hidden />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-[36px] border border-border/70 shadow-[0_40px_120px_-40px_rgba(32,27,21,0.4)]">
              <Image
                src={marbleImages.hero}
                alt={`\u062A\u0631\u0643\u064A\u0628 \u0631\u062E\u0627\u0645 \u0641\u064A ${area.name}`}
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="luxury-card rounded-3xl p-5 backdrop-blur">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-[color:var(--gold)]" aria-hidden />
                    <span>
                      {"\u062E\u062F\u0645\u0629 \u0645\u062D\u0644\u064A\u0629 \u0641\u064A "} {area.name}
                    </span>
                  </div>
                  <div className="mt-3 text-lg font-semibold">
                    {"\u062A\u0646\u0641\u064A\u0630 \u0641\u0627\u062E\u0631 \u064A\u0644\u064A\u0642 \u0628\u0627\u0644\u0645\u0633\u0627\u062D\u0627\u062A \u0627\u0644\u0631\u0627\u0642\u064A\u0629"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border/70">
          <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <h2 className="text-2xl font-semibold sm:text-3xl">
                {"\u062E\u062F\u0645\u0627\u062A\u0646\u0627 \u0641\u064A "} {area.name}
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
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="luxury-card group block overflow-hidden rounded-[24px]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`${service.title} \u0641\u064A ${area.name}`}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-[900ms] group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-semibold">
                      {service.title} {"\u0641\u064A "} {area.name}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">{service.short}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              {"\u0645\u0646\u0627\u0637\u0642 \u0623\u062E\u0631\u0649 \u0646\u062E\u062F\u0645\u0647\u0627"}
            </h2>

            <div className="mt-6 flex flex-wrap gap-3">
              {areas
                .filter((item) => item.slug !== area.slug)
                .map((item) => (
                  <Link
                    key={item.slug}
                    href={`/areas/${item.slug}`}
                    className="rounded-full border border-border/70 bg-card px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-[color:var(--gold)]/50 hover:text-foreground"
                  >
                    {item.name}
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