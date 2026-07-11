import Image from "next/image";
import Link from "next/link";
import { ArrowUpLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { marbleImages } from "@/config/images";
import { t } from "@/content/ar";

const featureList = [
  "خامات مختارة من أفضل المصادر",
  "تنفيذ دقيق بفريق متخصص",
  "التزام صارم بجدول التسليم",
  "متابعة ما بعد التنفيذ",
] as const;

export function HomeAboutPreview() {
  return (
    <section
      id="about"
      className="relative border-b border-border/70"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-20">
        <div>
          <SectionHeading
            eyebrow={t.about.eyebrow}
            title={t.about.title}
            description={t.about.description}
          />

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/35 bg-[color:var(--gold)]/8 px-4 py-2 text-sm font-medium">
            <Sparkles
              className="h-4 w-4 text-[color:var(--gold)]"
              aria-hidden
            />
            <span>{t.about.experienceBadge}</span>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {featureList.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-border/70 bg-card/60 px-4 py-3 text-sm"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--gold)]" />
                <span className="leading-6">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link href="/about">
                <span>{t.common.learnMore}</span>
                <ArrowUpLeft className="h-4 w-4" aria-hidden />
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg">
              <Link href="/services">
                <span>{t.common.exploreServices}</span>
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-[36px] border border-border/70 shadow-[0_40px_120px_-40px_rgba(32,27,21,0.4)]">
          <Image
            src={marbleImages.services.kitchen}
            alt="تنفيذ رخام فاخر من فيو للفلل والمجالس"
            fill
            loading="lazy"
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
  );
}