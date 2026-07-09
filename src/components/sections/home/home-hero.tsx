import Image from "next/image";
import Link from "next/link";
import { ArrowUpLeft, BadgeCheck, MapPin, PhoneCall, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { marbleImages } from "@/config/images";

const highlights = [
  {
    value: "+150",
    label: "\u0645\u0634\u0631\u0648\u0639 \u0645\u0646\u0641\u0630",
  },
  {
    value: "+12",
    label: "\u0633\u0646\u0629 \u062E\u0628\u0631\u0629",
  },
  {
    value: "10",
    label: "\u0645\u0646\u0627\u0637\u0642 \u0627\u0644\u062A\u063A\u0637\u064A\u0629",
  },
] as const;

const featuredServices = [
  "\u062A\u0648\u0631\u064A\u062F \u0648\u062A\u0631\u0643\u064A\u0628 \u0627\u0644\u0631\u062E\u0627\u0645",
  "\u0645\u063A\u0627\u0633\u0644 \u0631\u062E\u0627\u0645 \u062A\u0641\u0635\u064A\u0644",
  "\u062F\u0631\u062C \u0627\u0644\u0633\u0644\u0627\u0644\u0645",
  "\u0631\u062E\u0627\u0645 \u0627\u0644\u0645\u0637\u0627\u0628\u062E",
] as const;

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-border/70 grain">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 right-1/2 h-[560px] w-[560px] translate-x-1/2 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-[color:var(--gold)]/18 blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/85 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4 text-[color:var(--gold)]" aria-hidden />
            <span>
              {"\u062A\u0634\u0637\u064A\u0628\u0627\u062A \u062D\u062C\u0631 \u0641\u0627\u062E\u0631\u0629 \u0641\u064A \u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0634\u0631\u0642\u064A\u0629"}
            </span>
          </div>

          <h1 className="mt-7 max-w-3xl text-[38px] font-semibold leading-[1.14] tracking-tight text-foreground sm:text-5xl lg:text-[60px]">
            {"\u0631\u062E\u0627\u0645 \u064A\u0639\u0643\u0633 "}
            <span className="gold-text">
              {"\u0627\u0644\u0641\u062E\u0627\u0645\u0629"}
            </span>
            <span className="block">
              {"\u0648\u062A\u0646\u0641\u064A\u0630 \u064A\u0638\u0647\u0631 "}
              <span className="gold-text">
                {"\u0627\u0644\u062A\u0645\u064A\u0632"}
              </span>
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-[1.95] text-muted-foreground sm:text-lg">
            {"\u0646\u0642\u062F\u0645 \u062A\u0648\u0631\u064A\u062F \u0648\u062A\u0631\u0643\u064A\u0628 \u0627\u0644\u0631\u062E\u0627\u0645\u060C \u0627\u0644\u0645\u063A\u0627\u0633\u0644 \u0627\u0644\u0631\u062E\u0627\u0645\u064A\u0629\u060C \u062F\u0631\u062C \u0627\u0644\u0633\u0644\u0627\u0644\u0645\u060C \u0648\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u062D\u062C\u0631 \u0627\u0644\u0641\u0627\u062E\u0631\u0629 \u0628\u062C\u0648\u062F\u0629 \u062A\u0646\u0627\u0633\u0628 \u0627\u0644\u0641\u0644\u0644 \u0648\u0627\u0644\u0642\u0635\u0648\u0631 \u0648\u0627\u0644\u0645\u0633\u0627\u062D\u0627\u062A \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629 \u0641\u064A \u0627\u0644\u062F\u0645\u0627\u0645 \u0648\u0645\u062D\u064A\u0637\u0647\u0627."}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="shadow-sm">
              <Link href="#quote">
                <span>{"\u0627\u0637\u0644\u0628 \u0639\u0631\u0636 \u0633\u0639\u0631"}</span>
                <ArrowUpLeft className="h-4 w-4" aria-hidden />
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg">
              <Link href={`tel:${siteConfig.phone}`}>
                <PhoneCall className="h-4 w-4" aria-hidden />
                <span>{"\u0627\u062A\u0635\u0644 \u0628\u0646\u0627 \u0627\u0644\u0622\u0646"}</span>
              </Link>
            </Button>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.label} className="luxury-card rounded-3xl p-5">
                <div className="text-3xl font-semibold tracking-tight text-foreground">
                  {item.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="gold-divider mt-10" />

          <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-[color:var(--gold)]" aria-hidden />
            <span>
              {"\u0627\u0644\u062F\u0645\u0627\u0645 \u00B7 \u0627\u0644\u062E\u0628\u0631 \u00B7 \u0627\u0644\u0638\u0647\u0631\u0627\u0646 \u00B7 \u0627\u0644\u062C\u0628\u064A\u0644"}
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[36px] border border-border/70 shadow-[0_40px_120px_-40px_rgba(32,27,21,0.4)]">
            <Image
              src={marbleImages.hero}
              alt="\u062A\u0634\u0637\u064A\u0628 \u0631\u062E\u0627\u0645 \u0641\u0627\u062E\u0631 \u062F\u0627\u062E\u0644\u064A"
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-background/75 via-background/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <div className="luxury-card rounded-3xl p-5 backdrop-blur">
                <div className="text-[11px] font-medium uppercase tracking-[0.42em] text-muted-foreground">
                  View Selections
                </div>

                <div className="mt-4 grid gap-2">
                  {featuredServices.map((service) => (
                    <div
                      key={service}
                      className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/80 px-4 py-2.5 text-sm"
                    >
                      <span className="font-medium">{service}</span>
                      <BadgeCheck className="h-4 w-4 text-[color:var(--gold)]" aria-hidden />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-6 hidden aspect-square w-40 overflow-hidden rounded-3xl border border-border/70 shadow-xl lg:block">
            <Image
              src={marbleImages.heroSecondary}
              alt="\u062A\u0641\u0635\u064A\u0644 \u0631\u062E\u0627\u0645"
              fill
              loading="lazy"
              sizes="160px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}