import Image from "next/image";
import Link from "next/link";
import { ArrowUpLeft, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { services } from "@/config/services";
import { t } from "@/content/ar";

export function HomeServices() {
  return (
    <section
      id="services"
      className="relative border-b border-border/70 bg-card/30"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-[color:var(--gold)]/8 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow={t.services.eyebrow}
            title={t.services.title}
            description={t.services.description}
          />

          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-5 py-3 text-sm font-medium text-foreground transition-all hover:border-[color:var(--gold)]/50 hover:shadow-sm"
          >
            <span>{t.common.viewAll}</span>
            <ArrowUpLeft className="h-4 w-4" aria-hidden />
          </Link>
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
                  className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"
                />
                <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-black/40 px-3 py-1 text-[11px] font-medium tracking-[0.28em] text-white backdrop-blur">
                  <Sparkles className="h-3 w-3 text-[color:var(--gold)]" aria-hidden />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold">{service.title}</h3>
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
  );
}