import Image from "next/image";
import Link from "next/link";
import { ArrowUpLeft } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { marbleImages } from "@/config/images";
import { t } from "@/content/ar";

const projectItems = [
  { image: marbleImages.services.supply, title: "توريد وتركيب رخام لفيلا فاخرة", tag: "الدمام" },
  { image: marbleImages.services.basin, title: "مغسلة رخام تفصيل لحمام رئيسي", tag: "الخبر" },
  { image: marbleImages.services.stairs, title: "درج رخام كلاسيكي لمدخل فيلا", tag: "الظهران" },
  { image: marbleImages.services.kitchen, title: "أسطح مطبخ رخام فاخر", tag: "الجبيل" },
  { image: marbleImages.services.ceramic, title: "أرضيات رخام لصالة استقبال", tag: "القطيف" },
  { image: marbleImages.services.facade, title: "واجهة رخام لفيلا حديثة", tag: "الدمام" },
] as const;

export function HomeProjects() {
  return (
    <section
      id="projects"
      className="border-b border-border/70 bg-card/30"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow={t.projects.eyebrow}
            title={t.projects.title}
            description={t.projects.description}
          />

          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-5 py-3 text-sm font-medium text-foreground transition-all hover:border-[color:var(--gold)]/50 hover:shadow-sm"
          >
            <span>{t.common.viewAll}</span>
            <ArrowUpLeft className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projectItems.map((item, index) => (
            <div
              key={item.title}
              className="luxury-card group relative overflow-hidden rounded-[28px]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/20 to-transparent"
                />
              </div>

              <div className="absolute inset-x-4 bottom-4">
                <div className="rounded-2xl border border-border/60 bg-background/85 p-4 backdrop-blur">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--gold)]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="rounded-full border border-border/60 bg-background px-3 py-0.5 text-xs text-muted-foreground">
                      {item.tag}
                    </div>
                  </div>
                  <div className="mt-2 text-sm font-semibold leading-6">
                    {item.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}