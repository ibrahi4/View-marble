import Image from "next/image";
import { ArrowUpLeft } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { services } from "@/config/services";

export function HomeServices() {
  return (
    <section
      id="services"
      className="relative border-b border-border/70"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="SERVICES"
          title="خدماتنا المتخصصة في الرخام والسيراميك والبورسلان"
          description="نقدم حلولاً متكاملة تعتمد على جودة التنفيذ ودقة التفاصيل واختيار أفضل الخامات لتحقيق نتائج فاخرة تدوم لسنوات."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.slug}
              className="luxury-card group overflow-hidden rounded-[28px]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  loading="lazy"
                  sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />

                <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/35 px-3 py-1 text-[11px] font-medium tracking-[0.28em] text-white backdrop-blur">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {service.short}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm text-[color:var(--gold)]">
                  <span>اطلب الخدمة</span>

                  <ArrowUpLeft
                    className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}