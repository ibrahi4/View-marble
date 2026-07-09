import Link from "next/link";
import { Clock3, Gem, Ruler, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";

const points = [
  {
    icon: Ruler,
    title: "\u0645\u0639\u0627\u064A\u0646\u0629 \u0648\u0642\u064A\u0627\u0633",
    description: "\u0628\u062F\u0627\u064A\u0629 \u0645\u0646\u0638\u0645\u0629 \u062A\u0642\u0644\u0644 \u0627\u0644\u0647\u062F\u0631 \u0648\u062A\u0631\u0641\u0639 \u062F\u0642\u0629 \u0627\u0644\u062A\u0646\u0641\u064A\u0630.",
  },
  {
    icon: Gem,
    title: "\u062E\u0627\u0645\u0627\u062A \u0645\u0646\u062A\u0642\u0627\u0629",
    description: "\u0627\u062E\u062A\u064A\u0627\u0631\u0627\u062A \u062A\u0646\u0627\u0633\u0628 \u0627\u0644\u0630\u0648\u0642 \u0627\u0644\u0633\u0639\u0648\u062F\u064A \u0648\u0627\u0644\u0645\u0633\u0627\u062D\u0627\u062A \u0627\u0644\u0631\u0627\u0642\u064A\u0629.",
  },
  {
    icon: ShieldCheck,
    title: "\u062A\u0634\u0637\u064A\u0628 \u0646\u0638\u064A\u0641",
    description: "\u0627\u0647\u062A\u0645\u0627\u0645 \u0628\u0627\u0644\u062D\u0648\u0627\u0641 \u0648\u0627\u0644\u0648\u0635\u0644\u0627\u062A \u0648\u0627\u0644\u0644\u0645\u0633\u0627\u062A \u0627\u0644\u0646\u0647\u0627\u0626\u064A\u0629.",
  },
  {
    icon: Clock3,
    title: "\u0627\u0644\u062A\u0632\u0627\u0645 \u0628\u0627\u0644\u0645\u0648\u0639\u062F",
    description: "\u062E\u0637\u0629 \u0639\u0645\u0644 \u0648\u0627\u0636\u062D\u0629 \u0645\u0646 \u0627\u0644\u0645\u0639\u0627\u064A\u0646\u0629 \u062D\u062A\u0649 \u0627\u0644\u062A\u0633\u0644\u064A\u0645.",
  },
] as const;

export function HomeAboutPreview() {
  return (
    <section className="border-b border-border/70 bg-card/30">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-20">
        <div className="lg:pt-2">
          <SectionHeading
            eyebrow="ABOUT"
            title={"\u0623\u0633\u0644\u0648\u0628 \u0639\u0645\u0644 \u064A\u062C\u0645\u0639 \u0628\u064A\u0646 \u0627\u0644\u0641\u062E\u0627\u0645\u0629 \u0648\u0627\u0644\u062F\u0642\u0629"}
            description={"\u0646\u062A\u0639\u0627\u0645\u0644 \u0645\u0639 \u0643\u0644 \u0645\u0634\u0631\u0648\u0639 \u0628\u0627\u0639\u062A\u0628\u0627\u0631\u0647 \u0645\u0633\u0627\u062D\u0629 \u062A\u0639\u0643\u0633 \u0630\u0648\u0642 \u0627\u0644\u0639\u0645\u064A\u0644\u060C \u0644\u0630\u0644\u0643 \u0646\u0631\u0643\u0632 \u0639\u0644\u0649 \u0627\u0644\u0645\u0639\u0627\u064A\u0646\u0629 \u0627\u0644\u062F\u0642\u064A\u0642\u0629\u060C \u0627\u0644\u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0635\u062D\u064A\u062D\u060C \u0648\u0627\u0644\u062A\u0646\u0641\u064A\u0630 \u0627\u0644\u0645\u062A\u0646\u0627\u0633\u0642."}
          />

          <div className="mt-8 rounded-[28px] border border-border/70 bg-background/80 p-6 shadow-sm">
            <p className="text-base leading-8 text-muted-foreground">
              {"\u0646\u0646\u0641\u0630 \u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0631\u062E\u0627\u0645 \u0644\u0644\u0641\u0644\u0644\u060C \u0627\u0644\u0645\u0646\u0627\u0632\u0644\u060C \u0648\u0627\u0644\u0645\u0633\u0627\u062D\u0627\u062A \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629 \u0628\u0647\u0648\u064A\u0629 \u0628\u0635\u0631\u064A\u0629 \u0647\u0627\u062F\u0626\u0629 \u0648\u0646\u062A\u064A\u062C\u0629 \u062A\u0638\u0647\u0631 \u0645\u0646 \u0627\u0644\u0646\u0638\u0631\u0629 \u0627\u0644\u0623\u0648\u0644\u0649."}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="#quote">
                  <span>{"\u0627\u0637\u0644\u0628 \u0645\u0639\u0627\u064A\u0646\u0629"}</span>
                </Link>
              </Button>

              <Button asChild variant="outline">
                <Link href="#services">
                  <span>{"\u0627\u0633\u062A\u0639\u0631\u0636 \u0627\u0644\u062E\u062F\u0645\u0627\u062A"}</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {points.map((point) => {
            const Icon = point.icon;

            return (
              <div key={point.title} className="rounded-[28px] border border-border/70 bg-card p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{point.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{point.description}</p>
              </div>
            );
          })}

          <div className="sm:col-span-2 rounded-[28px] border border-border/70 bg-primary p-6 text-primary-foreground shadow-sm">
            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <div className="text-2xl font-semibold">Premium</div>
                <p className="mt-2 text-sm leading-7 text-primary-foreground/80">
                  {"\u062A\u0634\u0637\u064A\u0628 \u064A\u0631\u0643\u0632 \u0639\u0644\u0649 \u0627\u0644\u0646\u062A\u064A\u062C\u0629 \u0627\u0644\u0646\u0647\u0627\u0626\u064A\u0629."}
                </p>
              </div>

              <div>
                <div className="text-2xl font-semibold">Custom</div>
                <p className="mt-2 text-sm leading-7 text-primary-foreground/80">
                  {"\u062D\u0644\u0648\u0644 \u0645\u062E\u0635\u0635\u0629 \u062D\u0633\u0628 \u0623\u0628\u0639\u0627\u062F \u0627\u0644\u0645\u0633\u0627\u062D\u0629."}
                </p>
              </div>

              <div>
                <div className="text-2xl font-semibold">Eastern</div>
                <p className="mt-2 text-sm leading-7 text-primary-foreground/80">
                  {"\u062A\u063A\u0637\u064A\u0629 \u0645\u0631\u0643\u0632\u0629 \u0641\u064A \u0627\u0644\u062F\u0645\u0627\u0645 \u0648\u0645\u062D\u064A\u0637\u0647\u0627."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}