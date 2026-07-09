import { Star } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";

const testimonials = [
  {
    quote:
      "\u0627\u0644\u0634\u063A\u0644 \u0646\u0638\u064A\u0641 \u062C\u062F\u0627\u064B \u0648\u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 \u0638\u0647\u0631\u062A \u0641\u064A \u0627\u0644\u0645\u063A\u0633\u0644\u0629 \u0648\u0627\u0644\u062A\u0634\u0637\u064A\u0628 \u0627\u0644\u0646\u0647\u0627\u0626\u064A \u0628\u0634\u0643\u0644 \u0645\u0644\u062D\u0648\u0638.",
    client: "\u0645\u0627\u0644\u0643 \u0641\u064A\u0644\u0627",
    area: "\u0627\u0644\u062E\u0628\u0631",
  },
  {
    quote:
      "\u0627\u0644\u062A\u0632\u0627\u0645 \u0648\u0636\u0648\u062D \u0641\u064A \u0627\u0644\u0645\u0648\u0639\u062F \u0648\u062A\u0646\u0627\u0633\u0642 \u0643\u0628\u064A\u0631 \u0628\u064A\u0646 \u0627\u0644\u062E\u0627\u0645\u0629 \u0648\u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u0645\u0633\u0627\u062D\u0629.",
    client: "\u0645\u0634\u0631\u0648\u0639 \u0633\u0643\u0646\u064A",
    area: "\u0627\u0644\u062F\u0645\u0627\u0645",
  },
  {
    quote:
      "\u0627\u0644\u0645\u0639\u0627\u064A\u0646\u0629 \u0643\u0627\u0646\u062A \u062F\u0642\u064A\u0642\u0629 \u0648\u0627\u0644\u062A\u0646\u0641\u064A\u0630 \u062E\u0631\u062C \u0628\u0646\u062A\u064A\u062C\u0629 \u0631\u0627\u0642\u064A\u0629 \u0648\u0645\u0646\u0627\u0633\u0628\u0629 \u0644\u0644\u0645\u0643\u0627\u0646.",
    client: "\u0639\u0645\u064A\u0644 \u062E\u0627\u0635",
    area: "\u0627\u0644\u0638\u0647\u0631\u0627\u0646",
  },
] as const;

export function HomeTestimonials() {
  return (
    <section className="border-b border-border/70">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="TESTIMONIALS"
          title={"\u0627\u0646\u0637\u0628\u0627\u0639 \u064A\u0638\u0647\u0631 \u0628\u0639\u062F \u0627\u0644\u062A\u0633\u0644\u064A\u0645"}
          description={"\u062B\u0642\u0629 \u0627\u0644\u0639\u0645\u064A\u0644 \u062A\u0628\u0646\u0649 \u0645\u0646 \u062F\u0642\u0629 \u0627\u0644\u0645\u0639\u0627\u064A\u0646\u0629\u060C \u0648\u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u062E\u0627\u0645\u0629\u060C \u0648\u0627\u0644\u0646\u062A\u064A\u062C\u0629 \u0627\u0644\u062A\u064A \u062A\u0635\u0644 \u0628\u0647\u0627 \u0627\u0644\u0645\u0633\u0627\u062D\u0629."}
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article key={`${item.client}-${item.area}`} className="rounded-[28px] border border-border/70 bg-card/70 p-6 shadow-sm">
              <div className="flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>

              <p className="mt-5 text-sm leading-8 text-muted-foreground">{item.quote}</p>

              <div className="mt-6 border-t border-border/70 pt-4">
                <div className="font-medium">{item.client}</div>
                <div className="mt-1 text-sm text-muted-foreground">{item.area}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}