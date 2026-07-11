import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowUpLeft,
  BadgeCheck,
  Building2,
  MapPin,
  MessageCircle,
  PhoneCall,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionHeading } from "@/components/shared/section-heading";
import { JsonLd } from "@/components/seo/json-ld";
import { areas, getAreaBySlug } from "@/config/areas";
import { services } from "@/config/services";
import { siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/seo";
import { areaServiceSchema, breadcrumbSchema } from "@/lib/schema";

export const revalidate = 86400;
export const dynamicParams = false;

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);

  if (!area) {
    return createMetadata({
      title: "المنطقة غير موجودة",
      noIndex: true,
      path: `/areas/${slug}`,
    });
  }

  return createMetadata({
    title: area.metaTitle,
    description: area.metaDescription,
    path: `/areas/${area.slug}`,
    keywords: [...area.keywords],
  });
}

export default async function AreaDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);

  if (!area) notFound();

  const otherAreas = areas.filter((a) => a.slug !== area.slug).slice(0, 4);
  const relatedServices = services.slice(0, 3);

  const phoneHref = `tel:${siteConfig.phone.replace(/\s+/g, "")}`;
  const whatsappHref = `https://wa.me/${siteConfig.whatsappDigits}`;

  return (
    <>
      <SiteHeader />

      <JsonLd data={areaServiceSchema(area)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "الرئيسية", url: "/" },
          { name: "المناطق", url: "/areas" },
          { name: area.name, url: `/areas/${area.slug}` },
        ])}
      />

      <main id="main-content">
        <section className="relative overflow-hidden border-b border-border/70">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-40 right-1/2 h-[520px] w-[520px] translate-x-1/2 rounded-full bg-primary/8 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-[380px] w-[380px] rounded-full bg-[color:var(--gold)]/18 blur-3xl" />
          </div>

          <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <Breadcrumbs
              items={[
                { name: "الرئيسية", href: "/" },
                { name: "المناطق", href: "/areas" },
                { name: area.name, href: `/areas/${area.slug}` },
              ]}
            />

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/85 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur">
              <MapPin className="h-4 w-4 text-[color:var(--gold)]" aria-hidden />
              <span>{siteConfig.region}</span>
            </div>

            <h1 className="mt-6 text-[36px] font-semibold leading-[1.14] tracking-tight sm:text-5xl lg:text-[52px]">
              خدمات الرخام في {area.name}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-[1.95] text-muted-foreground sm:text-lg">
              {area.longDescription}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link href="/contact">
                  <span>اطلب عرض سعر</span>
                  <ArrowUpLeft className="h-4 w-4" aria-hidden />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg">
                <Link href={whatsappHref} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  <span>واتساب</span>
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
        </section>

        <section className="border-b border-border/70">
          <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <SectionHeading
              eyebrow="مميزات الخدمة"
              title={`لماذا تختار فيو في ${area.name}`}
              description="نقاط تفصيلية تجعل تجربتك مع فيو في هذه المنطقة مميزة."
            />

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {area.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="luxury-card flex items-start gap-3 rounded-[24px] p-5"
                >
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-[color:var(--gold)]">
                    <BadgeCheck className="h-4 w-4" aria-hidden />
                  </div>
                  <div className="text-sm font-medium leading-7">{highlight}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border/70 bg-card/30">
          <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <SectionHeading
              eyebrow="الأحياء المخدومة"
              title={`أحياء ${area.name} التي نغطيها`}
              description="نصل إلى جميع الأحياء الرئيسية بخدمة سريعة وموثوقة."
            />

            <div className="mt-10 flex flex-wrap gap-2">
              {area.neighborhoods.map((neighborhood) => (
                <div
                  key={neighborhood}
                  className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-4 py-2 text-sm text-muted-foreground"
                >
                  <Building2 className="h-3.5 w-3.5 text-[color:var(--gold)]" aria-hidden />
                  <span>{neighborhood}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border/70">
          <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <SectionHeading
              eyebrow="الخدمات المتوفرة"
              title={`خدماتنا الرئيسية في ${area.name}`}
              description="تشكيلة كاملة من خدمات الرخام والتشطيبات الفاخرة."
            />

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {area.services.map((service) => (
                <div
                  key={service}
                  className="luxury-card flex items-start gap-3 rounded-[24px] p-5"
                >
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-[color:var(--gold)]">
                    <Sparkles className="h-4 w-4" aria-hidden />
                  </div>
                  <div className="text-sm font-medium leading-7">{service}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border/70 bg-card/30">
          <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <SectionHeading
              eyebrow="تصفح الخدمات"
              title="خدمات موصى بها لك"
            />

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {relatedServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="luxury-card group block rounded-[28px] p-6"
                >
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {service.short}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-sm text-[color:var(--gold)]">
                    <span>تفاصيل الخدمة</span>
                    <ArrowUpLeft className="h-4 w-4" aria-hidden />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border/70">
          <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <SectionHeading
              eyebrow="مناطق أخرى"
              title="نخدم مدناً أخرى في المنطقة الشرقية"
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {otherAreas.map((other) => (
                <Link
                  key={other.slug}
                  href={`/areas/${other.slug}`}
                  className="luxury-card group block rounded-[24px] p-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-[color:var(--gold)]">
                      <MapPin className="h-5 w-5" aria-hidden />
                    </div>
                    <div>
                      <div className="text-base font-semibold">{other.name}</div>
                      <div className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                        {other.nameEn}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="luxury-card rounded-[32px] p-8 text-center sm:p-12">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                هل مشروعك في {area.name}؟
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
                تواصل معنا الآن لبدء مشروعك بجودة تليق بذوقك.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button asChild size="lg">
                  <Link href={whatsappHref} target="_blank" rel="noreferrer">
                    <MessageCircle className="h-4 w-4" aria-hidden />
                    <span>ابدأ الآن عبر واتساب</span>
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
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}