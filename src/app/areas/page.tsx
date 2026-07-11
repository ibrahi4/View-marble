import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpLeft, MapPin } from "lucide-react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionHeading } from "@/components/shared/section-heading";
import { areas } from "@/config/areas";
import { t } from "@/content/ar";
import { createMetadata } from "@/lib/seo";

export const revalidate = 86400;

export const metadata: Metadata = createMetadata({
  title: "المناطق التي نخدمها في المنطقة الشرقية",
  description:
    "نخدم الدمام، الخبر، الظهران، الجبيل، القطيف، سيهات، صفوى، رأس تنورة، وبقيق بخدمات توريد وتركيب الرخام والتشطيبات الفاخرة.",
  path: "/areas",
});

export default function AreasPage() {
  return (
    <>
      <SiteHeader />

      <main id="main-content">
        <section className="border-b border-border/70">
          <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <Breadcrumbs
              items={[
                { name: t.breadcrumbs.home, href: "/" },
                { name: t.breadcrumbs.areas, href: "/areas" },
              ]}
            />

            <div className="mt-6">
              <SectionHeading
                as="h1"
                eyebrow={t.coverage.eyebrow}
                title={t.coverage.title}
                description={t.coverage.description}
              />
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {areas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="luxury-card group block rounded-[28px] p-6"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-[color:var(--gold)]">
                        <MapPin className="h-5 w-5" aria-hidden />
                      </div>
                      <div>
                        <h2 className="text-lg font-semibold">{area.name}</h2>
                        <div className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
                          {area.nameEn}
                        </div>
                      </div>
                    </div>

                    <ArrowUpLeft
                      className="h-4 w-4 text-muted-foreground transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:text-[color:var(--gold)]"
                      aria-hidden
                    />
                  </div>

                  <p className="mt-5 text-sm leading-7 text-muted-foreground line-clamp-3">
                    {area.intro}
                  </p>
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