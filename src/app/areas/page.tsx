import Link from "next/link";
import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionHeading } from "@/components/shared/section-heading";
import { areas } from "@/config/areas";
import { createMetadata } from "@/lib/seo";

export const revalidate = 86400;

export const metadata: Metadata = createMetadata({
  title: "\u0627\u0644\u0645\u0646\u0627\u0637\u0642 \u0627\u0644\u062A\u064A \u0646\u062E\u062F\u0645\u0647\u0627",
  description:
    "\u0646\u062E\u062F\u0645 \u0627\u0644\u062F\u0645\u0627\u0645\u060C \u0627\u0644\u062E\u0628\u0631\u060C \u0627\u0644\u0638\u0647\u0631\u0627\u0646\u060C \u0627\u0644\u062C\u0628\u064A\u0644\u060C \u0648\u0627\u0644\u0642\u0637\u064A\u0641 \u0628\u062E\u062F\u0645\u0627\u062A \u062A\u0648\u0631\u064A\u062F \u0648\u062A\u0631\u0643\u064A\u0628 \u0627\u0644\u0631\u062E\u0627\u0645 \u0648\u0627\u0644\u062A\u0634\u0637\u064A\u0628\u0627\u062A \u0627\u0644\u0641\u0627\u062E\u0631\u0629 \u0641\u064A \u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0634\u0631\u0642\u064A\u0629.",
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
                { name: "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629", href: "/" },
                { name: "\u0627\u0644\u0645\u0646\u0627\u0637\u0642", href: "/areas" },
              ]}
            />

            <div className="mt-6">
              <SectionHeading
                eyebrow="COVERAGE"
                title={"\u0627\u0644\u0645\u0646\u0627\u0637\u0642 \u0627\u0644\u062A\u064A \u062A\u063A\u0637\u064A\u0647\u0627 \u062E\u062F\u0645\u0627\u062A\u0646\u0627"}
                description={"\u062A\u063A\u0637\u064A\u0629 \u0645\u0631\u0643\u0632\u0629 \u0641\u064A \u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0634\u0631\u0642\u064A\u0629 \u0645\u0639 \u062E\u062F\u0645\u0629 \u0645\u062D\u0644\u064A\u0629 \u0644\u0643\u0644 \u0645\u062F\u064A\u0646\u0629\u060C \u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0644\u0644\u0627\u0637\u0644\u0627\u0639 \u0639\u0644\u0649 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u062E\u062F\u0645\u0629 \u0641\u064A\u0647\u0627."}
              />
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {areas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="luxury-card group block rounded-[28px] p-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-[color:var(--gold)]">
                      <MapPin className="h-5 w-5" aria-hidden />
                    </div>
                    <div>
                      <div className="text-lg font-semibold">{area.name}</div>
                      <div className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
                        {area.nameEn}
                      </div>
                    </div>
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