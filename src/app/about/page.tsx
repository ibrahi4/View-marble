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
import { createMetadata } from "@/lib/seo";

export const revalidate = 86400;

export const metadata: Metadata = createMetadata({
  title: "\u0645\u0646 \u0646\u062D\u0646",
  description:
    "\u062A\u0639\u0631\u0641 \u0639\u0644\u0649 \u0641\u064A\u0648 View - \u0634\u0631\u0643\u0629 \u0645\u062A\u062E\u0635\u0635\u0629 \u0641\u064A \u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0631\u062E\u0627\u0645 \u0648\u0627\u0644\u062A\u0634\u0637\u064A\u0628\u0627\u062A \u0627\u0644\u0641\u0627\u062E\u0631\u0629 \u0641\u064A \u0627\u0644\u062F\u0645\u0627\u0645 \u0648\u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0634\u0631\u0642\u064A\u0629.",
  path: "/about",
});

const values = [
  {
    icon: Gem,
    title: "\u062E\u0627\u0645\u0627\u062A \u0645\u0646\u062A\u0642\u0627\u0629",
    description: "\u0646\u062E\u062A\u0627\u0631 \u0645\u0646 \u0623\u0641\u0636\u0644 \u0627\u0644\u0645\u0635\u0627\u062F\u0631 \u0644\u0646\u0642\u062F\u0645 \u0631\u062E\u0627\u0645 \u064A\u0644\u064A\u0642 \u0628\u0627\u0644\u0645\u0633\u0627\u062D\u0627\u062A \u0627\u0644\u0641\u0627\u062E\u0631\u0629.",
  },
  {
    icon: ShieldCheck,
    title: "\u062F\u0642\u0629 \u0641\u064A \u0627\u0644\u062A\u0646\u0641\u064A\u0630",
    description: "\u0645\u0639\u0627\u064A\u0646\u0629 \u062F\u0642\u064A\u0642\u0629\u060C \u062A\u0631\u0643\u064A\u0628 \u0645\u062F\u0631\u0648\u0633\u060C \u0648\u0645\u062A\u0627\u0628\u0639\u0629 \u0644\u0644\u062A\u0641\u0627\u0635\u064A\u0644 \u062D\u062A\u0649 \u0627\u0644\u062A\u0633\u0644\u064A\u0645.",
  },
  {
    icon: Clock3,
    title: "\u0627\u0644\u062A\u0632\u0627\u0645 \u0628\u0627\u0644\u0645\u0648\u0639\u062F",
    description: "\u062C\u062F\u0648\u0644 \u0632\u0645\u0646\u064A \u0648\u0627\u0636\u062D \u0648\u062A\u0633\u0644\u064A\u0645 \u0641\u064A \u0627\u0644\u0648\u0642\u062A \u0627\u0644\u0645\u062D\u062F\u062F \u062F\u0648\u0646 \u062A\u0623\u062E\u064A\u0631.",
  },
  {
    icon: Award,
    title: "\u062A\u0641\u0627\u0635\u064A\u0644 \u0641\u0627\u062E\u0631\u0629",
    description: "\u0646\u062A\u0639\u0627\u0645\u0644 \u0645\u0639 \u0643\u0644 \u062A\u0641\u0635\u064A\u0644\u0629 \u0628\u0627\u0639\u062A\u0628\u0627\u0631\u0647\u0627 \u062C\u0632\u0621\u0627\u064B \u0645\u0646 \u0627\u0644\u0647\u0648\u064A\u0629 \u0627\u0644\u0646\u0647\u0627\u0626\u064A\u0629 \u0644\u0644\u0645\u0633\u0627\u062D\u0629.",
  },
] as const;

const journey = [
  {
    step: "01",
    title: "\u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0631\u0624\u064A\u0629",
    description: "\u0646\u0633\u062A\u0645\u0639 \u0644\u0623\u0641\u0643\u0627\u0631 \u0627\u0644\u0639\u0645\u064A\u0644 \u0648\u0646\u0648\u0636\u062D \u0627\u0644\u062E\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u0645\u0646\u0627\u0633\u0628\u0629 \u0644\u0645\u0633\u0627\u062D\u062A\u0647.",
  },
  {
    step: "02",
    title: "\u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u062E\u0627\u0645\u0629",
    description: "\u0646\u0631\u0634\u062F \u0627\u0644\u0639\u0645\u064A\u0644 \u0644\u0644\u062E\u0627\u0645\u0629 \u0627\u0644\u0623\u0646\u0633\u0628 \u0645\u0646 \u062D\u064A\u062B \u0627\u0644\u0644\u0648\u0646\u060C \u0627\u0644\u0645\u062A\u0627\u0646\u0629\u060C \u0648\u0627\u0644\u0625\u0646\u0647\u0627\u0621.",
  },
  {
    step: "03",
    title: "\u0627\u0644\u062A\u0646\u0641\u064A\u0630",
    description: "\u0641\u0631\u064A\u0642 \u0645\u062A\u062E\u0635\u0635 \u064A\u0646\u0641\u0630 \u0627\u0644\u0639\u0645\u0644 \u0628\u062F\u0642\u0629 \u0645\u0639 \u0627\u0644\u0627\u0644\u062A\u0632\u0627\u0645 \u0628\u0627\u0644\u062C\u062F\u0648\u0644 \u0627\u0644\u0632\u0645\u0646\u064A.",
  },
  {
    step: "04",
    title: "\u0627\u0644\u062A\u0633\u0644\u064A\u0645 \u0648\u0627\u0644\u0645\u062A\u0627\u0628\u0639\u0629",
    description: "\u0645\u0631\u0627\u062C\u0639\u0629 \u0646\u0647\u0627\u0626\u064A\u0629 \u062F\u0642\u064A\u0642\u0629 \u0648\u0645\u062A\u0627\u0628\u0639\u0629 \u0645\u0627 \u0628\u0639\u062F \u0627\u0644\u062A\u0633\u0644\u064A\u0645.",
  },
] as const;

const stats = [
  { value: "+150", label: "\u0645\u0634\u0631\u0648\u0639 \u0645\u0646\u0641\u0630" },
  { value: "+12", label: "\u0633\u0646\u0629 \u062E\u0628\u0631\u0629" },
  { value: "10", label: "\u0645\u0646\u0627\u0637\u0642 \u062A\u063A\u0637\u064A\u0629" },
  { value: "100%", label: "\u0627\u0644\u062A\u0632\u0627\u0645 \u0628\u0627\u0644\u062C\u0648\u062F\u0629" },
] as const;

export default function AboutPage() {
  return (
    <>
      <SiteHeader />

      <main id="main-content">
        <section className="relative overflow-hidden border-b border-border/70 grain">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-40 right-1/2 h-[520px] w-[520px] translate-x-1/2 rounded-full bg-primary/8 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-[380px] w-[380px] rounded-full bg-[color:var(--gold)]/18 blur-3xl" />
          </div>

          <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
            <div>
              <Breadcrumbs
                items={[
                  { name: "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629", href: "/" },
                  { name: "\u0645\u0646 \u0646\u062D\u0646", href: "/about" },
                ]}
              />

              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/85 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur">
                <Sparkles className="h-4 w-4 text-[color:var(--gold)]" aria-hidden />
                <span>{"\u062E\u0628\u0631\u0629 \u062A\u0645\u062A\u062F \u0644\u0623\u0643\u062B\u0631 \u0645\u0646 \u0639\u0642\u062F"}</span>
              </div>

              <h1 className="mt-6 text-[36px] font-semibold leading-[1.14] tracking-tight sm:text-5xl lg:text-[54px]">
                {"\u0641\u064A\u0648 "}
                <span className="gold-text">View</span>
                <span className="block">
                  {"\u0627\u0633\u062A\u0648\u062F\u064A\u0648 "}
                  <span className="gold-text">{"\u0627\u0644\u0631\u062E\u0627\u0645 \u0627\u0644\u0641\u0627\u062E\u0631"}</span>
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-[1.95] text-muted-foreground sm:text-lg">
                {"\u0641\u064A\u0648 \u062A\u062E\u0635\u0635 \u0641\u064A \u062A\u0646\u0641\u064A\u0630 \u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0631\u062E\u0627\u0645 \u0648\u0627\u0644\u062A\u0634\u0637\u064A\u0628\u0627\u062A \u0627\u0644\u0641\u0627\u062E\u0631\u0629 \u0641\u064A \u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0634\u0631\u0642\u064A\u0629\u060C \u0646\u0631\u0627\u0639\u064A \u062F\u0642\u0629 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644\u060C \u062C\u0648\u062F\u0629 \u0627\u0644\u062E\u0627\u0645\u0629\u060C \u0648\u0627\u0644\u062A\u0632\u0627\u0645 \u0627\u0644\u0645\u0648\u0639\u062F\u060C \u0644\u0646\u0642\u062F\u0645 \u0644\u0644\u0639\u0645\u064A\u0644 \u0645\u0633\u0627\u062D\u0629 \u062A\u0639\u0643\u0633 \u0630\u0648\u0642\u0647 \u0627\u0644\u0631\u0641\u064A\u0639."}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild size="lg">
                  <Link href="/#quote">
                    <span>{"\u0627\u0637\u0644\u0628 \u0639\u0631\u0636 \u0633\u0639\u0631"}</span>
                    <ArrowUpLeft className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>

                <Button asChild variant="outline" size="lg">
                  <Link href="/services">
                    <span>{"\u062A\u0635\u0641\u062D \u0627\u0644\u062E\u062F\u0645\u0627\u062A"}</span>
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-[36px] border border-border/70 shadow-[0_40px_120px_-40px_rgba(32,27,21,0.4)]">
              <Image
                src={marbleImages.hero}
                alt="View marble studio"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </div>
        </section>

        <section className="border-b border-border/70">
          <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label} className="luxury-card rounded-[24px] p-6 text-center">
                  <div className="text-4xl font-semibold tracking-tight">{item.value}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border/70 bg-card/30 grain">
          <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <SectionHeading
              eyebrow="VALUES"
              title={"\u0645\u0628\u0627\u062F\u0626 \u0646\u0644\u062A\u0632\u0645 \u0628\u0647\u0627 \u0641\u064A \u0643\u0644 \u0645\u0634\u0631\u0648\u0639"}
              description={"\u062B\u0645\u0627\u0646\u064A \u0642\u064A\u0645 \u062A\u062D\u0643\u0645 \u0642\u0631\u0627\u0631\u0627\u062A\u0646\u0627 \u0645\u0646 \u0644\u062D\u0638\u0629 \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0625\u0644\u0649 \u0645\u0627 \u0628\u0639\u062F \u0627\u0644\u062A\u0633\u0644\u064A\u0645."}
            />

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {values.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="luxury-card rounded-[28px] p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-[color:var(--gold)]">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-b border-border/70">
          <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <SectionHeading
              eyebrow="JOURNEY"
              title={"\u0631\u062D\u0644\u0629 \u0627\u0644\u0639\u0645\u0644 \u0645\u0639\u0646\u0627"}
              description={"\u0623\u0631\u0628\u0639 \u0645\u0631\u0627\u062D\u0644 \u0648\u0627\u0636\u062D\u0629 \u062A\u062C\u0639\u0644 \u0627\u0644\u0639\u0645\u0644\u064A\u0629 \u0645\u0631\u064A\u062D\u0629 \u0644\u0644\u0639\u0645\u064A\u0644 \u0648\u062A\u0636\u0645\u0646 \u0646\u062A\u064A\u062C\u0629 \u062F\u0642\u064A\u0642\u0629."}
            />

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {journey.map((item) => (
                <div key={item.step} className="luxury-card rounded-[28px] p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-[color:var(--gold)]">
                      <BadgeCheck className="h-5 w-5" aria-hidden />
                    </div>
                    <div className="text-sm font-medium text-[color:var(--gold)]">{item.step}</div>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="luxury-card rounded-[32px] p-8 text-center sm:p-12">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {"\u062C\u0627\u0647\u0632 \u0644\u062A\u0628\u062F\u0623 \u0645\u0634\u0631\u0648\u0639\u0643\u061F"}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
                {"\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0644\u062A\u0623\u062E\u0630 \u0645\u0639\u0627\u064A\u0646\u0629 \u0623\u0648\u0644\u064A\u0629 \u0648\u0639\u0631\u0636 \u0633\u0639\u0631 \u0645\u0646\u0627\u0633\u0628 \u0644\u0645\u0633\u0627\u062D\u062A\u0643."}
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button asChild size="lg">
                  <Link href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noreferrer">
                    <MessageCircle className="h-4 w-4" aria-hidden />
                    <span>{"\u062A\u0648\u0627\u0635\u0644 \u0639\u0628\u0631 \u0648\u0627\u062A\u0633\u0627\u0628"}</span>
                  </Link>
                </Button>

                <Button asChild variant="outline" size="lg">
                  <Link href={`tel:${siteConfig.phone}`}>
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