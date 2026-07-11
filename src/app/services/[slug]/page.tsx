import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowUpLeft,
  BadgeCheck,
  CheckCircle2,
  Gem,
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
import { getServiceBySlug, services } from "@/config/services";
import { siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/seo";
import { faqSchema, serviceSchema } from "@/lib/schema";

export const revalidate = 86400;
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return createMetadata({
      title: "الخدمة غير موجودة",
      noIndex: true,
      path: `/services/${slug}`,
    });
  }

  return createMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    keywords: [...service.keywords],
    ogImage: service.image,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const relatedServices = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  const phoneHref = `tel:${siteConfig.phone.replace(/\s+/g, "")}`;
  const whatsappHref = `https://wa.me/${siteConfig.whatsappDigits}`;

  return (
    <>
      <SiteHeader />

      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={faqSchema([...service.faq])} />

      <main id="main-content">
        <section className="relative overflow-hidden border-b border-border/70">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-40 right-1/2 h-[520px] w-[520px] translate-x-1/2 rounded-full bg-primary/8 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-[380px] w-[380px] rounded-full bg-[color:var(--gold)]/18 blur-3xl" />
          </div>

          <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
            <div>
              <Breadcrumbs
                items={[
                  { name: "الرئيسية", href: "/" },
                  { name: "الخدمات", href: "/services" },
                  { name: service.titleShort, href: `/services/${service.slug}` },
                ]}
              />

              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/85 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur">
                <Sparkles className="h-4 w-4 text-[color:var(--gold)]" aria-hidden />
                <span>خدمة متخصصة في المنطقة الشرقية</span>
              </div>

              <h1 className="mt-6 text-[36px] font-semibold leading-[1.14] tracking-tight sm:text-5xl lg:text-[52px]">
                {service.title}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-[1.95] text-muted-foreground sm:text-lg">
                {service.longDescription}
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
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"
              />
            </div>
          </div>
        </section>

        <section className="border-b border-border/70">
          <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <SectionHeading
              eyebrow="مميزات الخدمة"
              title="لماذا تختار فيو لهذه الخدمة"
              description="نقاط تفصيلية تجعل الفرق واضحاً في التنفيذ والنتيجة النهائية."
            />

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {service.features.map((feature) => (
                <div
                  key={feature}
                  className="luxury-card flex items-start gap-3 rounded-[24px] p-5"
                >
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-[color:var(--gold)]">
                    <CheckCircle2 className="h-4 w-4" aria-hidden />
                  </div>
                  <div className="text-sm font-medium leading-7">{feature}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border/70 bg-card/30">
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
            <div>
              <SectionHeading
                eyebrow="مجالات الاستخدام"
                title="أين تناسب هذه الخدمة"
              />
              <div className="mt-8 space-y-3">
                {service.useCases.map((useCase) => (
                  <div
                    key={useCase}
                    className="flex items-center gap-3 rounded-2xl border border-border/70 bg-background px-4 py-3"
                  >
                    <BadgeCheck
                      className="h-4 w-4 text-[color:var(--gold)]"
                      aria-hidden
                    />
                    <span className="text-sm font-medium">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="الخامات المتوفرة"
                title="تشكيلة خامات مختارة"
              />
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {service.materials.map((material) => (
                  <div
                    key={material}
                    className="flex items-center gap-3 rounded-2xl border border-border/70 bg-background px-4 py-3"
                  >
                    <Gem
                      className="h-4 w-4 text-[color:var(--gold)]"
                      aria-hidden
                    />
                    <span className="text-sm font-medium">{material}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border/70">
          <div className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <SectionHeading
              eyebrow="الأسئلة الشائعة"
              title="أسئلة قد تدور في ذهنك عن هذه الخدمة"
            />

            <div className="mt-10 space-y-4">
              {service.faq.map((item) => (
                <details
                  key={item.q}
                  className="group luxury-card rounded-[20px] p-5 open:shadow-md"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold">
                    <span>{item.q}</span>
                    <span className="text-[color:var(--gold)] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-[1.95] text-muted-foreground">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border/70">
          <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <SectionHeading
              eyebrow="خدمات ذات صلة"
              title="تصفح خدماتنا الأخرى"
            />

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {relatedServices.map((related) => (
                <Link
                  key={related.slug}
                  href={`/services/${related.slug}`}
                  className="luxury-card group block overflow-hidden rounded-[28px]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold">{related.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {related.short}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-sm text-[color:var(--gold)]">
                      <span>تفاصيل الخدمة</span>
                      <ArrowUpLeft className="h-4 w-4" aria-hidden />
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
                جاهز لتنفيذ مشروعك؟
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
                تواصل مع فريق فيو للحصول على معاينة أولية وعرض سعر مناسب.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button asChild size="lg">
                  <Link href={whatsappHref} target="_blank" rel="noreferrer">
                    <MessageCircle className="h-4 w-4" aria-hidden />
                    <span>تواصل عبر واتساب</span>
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