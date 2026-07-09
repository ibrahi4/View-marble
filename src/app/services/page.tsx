import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpLeft } from "lucide-react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionHeading } from "@/components/shared/section-heading";
import { services } from "@/config/services";
import { createMetadata } from "@/lib/seo";

export const revalidate = 86400;

export const metadata: Metadata = createMetadata({
  title: "\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0631\u062E\u0627\u0645 \u0648\u0627\u0644\u062A\u0634\u0637\u064A\u0628\u0627\u062A \u0627\u0644\u0641\u0627\u062E\u0631\u0629",
  description:
    "\u062A\u0639\u0631\u0641 \u0639\u0644\u0649 \u062E\u062F\u0645\u0627\u062A \u0641\u064A\u0648 \u0641\u064A \u062A\u0648\u0631\u064A\u062F \u0648\u062A\u0631\u0643\u064A\u0628 \u0627\u0644\u0631\u062E\u0627\u0645\u060C \u0627\u0644\u0645\u063A\u0627\u0633\u0644\u060C \u062F\u0631\u062C \u0627\u0644\u0633\u0644\u0627\u0644\u0645\u060C \u0648\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u062A\u0634\u0637\u064A\u0628 \u0627\u0644\u0641\u0627\u062E\u0631\u0629 \u0641\u064A \u0627\u0644\u062F\u0645\u0627\u0645 \u0648\u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0634\u0631\u0642\u064A\u0629.",
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
                { name: "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629", href: "/" },
                { name: "\u0627\u0644\u062E\u062F\u0645\u0627\u062A", href: "/services" },
              ]}
            />

            <div className="mt-6">
              <SectionHeading
                eyebrow="SERVICES"
                title={"\u062E\u062F\u0645\u0627\u062A \u0641\u064A\u0648 \u0627\u0644\u0645\u062A\u0643\u0627\u0645\u0644\u0629 \u0644\u0644\u0631\u062E\u0627\u0645"}
                description={"\u062A\u0634\u0643\u064A\u0644\u0629 \u0645\u062F\u0631\u0648\u0633\u0629 \u0645\u0646 \u0627\u0644\u062E\u062F\u0645\u0627\u062A \u062A\u063A\u0637\u064A \u0645\u062A\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0641\u0644\u0644\u060C \u0627\u0644\u0642\u0635\u0648\u0631\u060C \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629."}
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
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                    />
                    <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
                    <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/35 px-3 py-1 text-[11px] font-medium tracking-[0.28em] text-white backdrop-blur">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.short}</p>

                    <div className="mt-5 flex items-center gap-2 text-sm text-[color:var(--gold)]">
                      <span>{"\u0627\u0639\u0631\u0641 \u0627\u0644\u0645\u0632\u064A\u062F"}</span>
                      <ArrowUpLeft className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5" aria-hidden />
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