import Link from "next/link";
import { ArrowUpLeft, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { areas } from "@/config/areas";
import { t } from "@/content/ar";

export function HomeCoverage() {
  return (
    <section
      id="coverage"
      className="relative border-b border-border/70"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[color:var(--gold)]/6 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow={t.coverage.eyebrow}
            title={t.coverage.title}
            description={t.coverage.description}
          />

          <Link
            href="/areas"
            className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-5 py-3 text-sm font-medium text-foreground transition-all hover:border-[color:var(--gold)]/50 hover:shadow-sm"
          >
            <span>{t.common.viewAll}</span>
            <ArrowUpLeft className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <Link
              key={area.slug}
              href={`/areas/${area.slug}`}
              className="luxury-card group block rounded-[24px] p-5"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-[color:var(--gold)]">
                    <MapPin className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <div className="text-base font-semibold">{area.name}</div>
                    <div className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                      {area.nameEn}
                    </div>
                  </div>
                </div>

                <ArrowUpLeft
                  className="h-4 w-4 text-muted-foreground transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:text-[color:var(--gold)]"
                  aria-hidden
                />
              </div>

              <p className="mt-4 text-sm leading-7 text-muted-foreground line-clamp-2">
                {area.intro}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}