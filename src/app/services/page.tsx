import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpLeft, Sparkles } from "lucide-react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionHeading } from "@/components/shared/section-heading";
import { services } from "@/config/services";
import { t } from "@/content/ar";
import { createMetadata } from "@/lib/seo";

export const revalidate = 86400;

export const metadata: Metadata = createMetadata({
  title: "خدمات الرخام والتشطيبات الفاخرة",
  description:
    "تعرف على خدمات فيو في توريد وتركيب الرخام، المغاسل، درج السلالم، رخام المطابخ، الواجهات، وأعمال التشطيب الفاخرة في الدمام والمنطقة الشرقية.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />

      <main id="main-content">
        <section className="border-b border-border/70">
          <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <Breadcrumbs
              items={[
                { name: t.breadcrumbs.home, href: "/" },
                { name: t.breadcrumbs.services, href: "/services" },
              ]}
            />

            <div className="mt-6">
              <SectionHeading
                as="h1"
                eyebrow={t.services.eyebrow}
                title={t.services.title}
                description={t.services.description}
              />
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="luxury-card group block overflow-hidden rounded-[28px]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      loading={index < 3 ? "eager" : "lazy"}
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent"
                    />
                    <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-black/40 px-3 py-1 text-[11px] font-medium tracking-[0.28em] text-white backdrop-blur">
                      <Sparkles className="h-3 w-3 text-[color:var(--gold)]" aria-hidden />
                      <span>{String(index + 1).padStart(2, "0")}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h2 className="text-lg font-semibold">{service.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground line-clamp-3">
                      {service.short}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-sm font-medium text-[color:var(--gold)]">
                      <span>{t.services.seeService}</span>
                      <ArrowUpLeft
                        className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5"
                        aria-hidden
                      />
                    </div>
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