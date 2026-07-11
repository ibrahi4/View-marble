import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpLeft,
  Award,
  BadgeCheck,
  Clock3,
  Gem,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionHeading } from "@/components/shared/section-heading";
import { marbleImages } from "@/config/images";
import { siteConfig } from "@/config/site";
import { t } from "@/content/ar";
import { createMetadata } from "@/lib/seo";

export const revalidate = 86400;

export const metadata: Metadata = createMetadata({
  title: "من نحن - فيو استوديو الرخام الفاخر",
  description:
    "تعرف على فيو View، شركة متخصصة في أعمال الرخام والتشطيبات الفاخرة في الدمام والمنطقة الشرقية. خبرة تمتد لأكثر من عقد في تنفيذ مشاريع الفلل والقصور.",
  path: "/about",
});

const values = [
  {
    icon: Gem,
    title: "خامات منتقاة",
    description: "نختار من أفضل المصادر لتقديم رخام يليق بالمساحات الفاخرة.",
  },
  {
    icon: ShieldCheck,
    title: "دقة في التنفيذ",
    description: "معاينة دقيقة، تركيب مدروس، ومتابعة للتفاصيل حتى التسليم.",
  },
  {
    icon: Clock3,
    title: "الالتزام بالموعد",
    description: "جدول زمني واضح وتسليم في الوقت المحدد دون تأخير.",
  },
  {
    icon: Award,
    title: "تفاصيل فاخرة",
    description:
      "نتعامل مع كل تفصيلة باعتبارها جزءاً من الهوية النهائية للمساحة.",
  },
] as const;

const journey = [
  {
    step: "01",
    title: "اختيار الرؤية",
    description:
      "نستمع لأفكار العميل ونوضح الخيارات المناسبة لمساحته.",
  },
  {
    step: "02",
    title: "اختيار الخامة",
    description:
      "نرشد العميل للخامة الأنسب من حيث اللون، المتانة، والإنهاء.",
  },
  {
    step: "03",
    title: "التنفيذ",
    description:
      "فريق متخصص ينفذ العمل بدقة مع الالتزام بالجدول الزمني.",
  },
  {
    step: "04",
    title: "التسليم والمتابعة",
    description: "مراجعة نهائية دقيقة ومتابعة ما بعد التسليم.",
  },
] as const;

const stats = [
  { value: "+150", label: "مشروع منفذ" },
  { value: "+12", label: "سنة خبرة" },
  { value: "9", label: "مدن تغطية" },
  { value: "100%", label: "التزام بالجودة" },
] as const;

export default function AboutPage() {
  const phoneHref = `tel:${siteConfig.phone.replace(/\s+/g, "")}`;
  const whatsappHref = `https://wa.me/${siteConfig.whatsappDigits}`;

  return (
    <>
      <SiteHeader />

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
                  { name: t.breadcrumbs.home, href: "/" },
                  { name: t.breadcrumbs.about, href: "/about" },
                ]}
              />

              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/85 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur">
                <Sparkles
                  className="h-4 w-4 text-[color:var(--gold)]"
                  aria-hidden
                />
                <span>{t.about.experienceBadge}</span>
              </div>

              <h1 className="mt-6 text-[36px] font-semibold leading-[1.14] tracking-tight sm:text-5xl lg:text-[54px]">
                فيو <span className="gold-text">View</span>
                <span className="block">
                  استوديو <span className="gold-text">الرخام الفاخر</span>
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-[1.95] text-muted-foreground sm:text-lg">
                {t.about.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild size="lg">
                  <Link href="/contact">
                    <span>{t.common.requestQuote}</span>
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
                src={marbleImages.hero}
                alt="استوديو فيو للرخام الفاخر"
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
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="luxury-card rounded-[24px] p-6 text-center"
                >
                  <div className="text-4xl font-semibold tracking-tight">
                    {item.value}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border/70 bg-card/30">
          <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <SectionHeading
              eyebrow="قيمنا"
              title="مبادئ نلتزم بها في كل مشروع"
              description="قيم تحكم قراراتنا من لحظة التواصل إلى ما بعد التسليم."
            />

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {values.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="luxury-card rounded-[28px] p-6"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-[color:var(--gold)]">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-b border-border/70">
          <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <SectionHeading
              eyebrow="رحلتنا"
              title="رحلة العمل معنا"
              description="أربع مراحل واضحة تجعل العملية مريحة للعميل وتضمن نتيجة دقيقة."
            />

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {journey.map((item) => (
                <div key={item.step} className="luxury-card rounded-[28px] p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-[color:var(--gold)]">
                      <BadgeCheck className="h-5 w-5" aria-hidden />
                    </div>
                    <div className="text-sm font-medium text-[color:var(--gold)]">
                      {item.step}
                    </div>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="luxury-card rounded-[32px] p-8 text-center sm:p-12">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {t.finalCta.title}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
                {t.finalCta.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button asChild size="lg">
                  <Link href={whatsappHref} target="_blank" rel="noreferrer">
                    <MessageCircle className="h-4 w-4" aria-hidden />
                    <span>{t.common.whatsapp}</span>
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