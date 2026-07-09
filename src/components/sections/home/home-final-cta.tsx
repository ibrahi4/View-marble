import { SectionHeading } from "@/components/shared/section-heading";
import { QuoteForm } from "@/components/sections/home/quote-form";

export function HomeFinalCta() {
  return (
    <section id="quote" className="py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-border/70 bg-card p-6 shadow-[0_30px_100px_-40px_rgba(32,27,21,0.24)] sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="QUOTE"
                title={"\u0627\u0628\u062F\u0623 \u0627\u0644\u062E\u0637\u0648\u0629 \u0627\u0644\u0623\u0648\u0644\u0649 \u0644\u0645\u0634\u0631\u0648\u0639 \u064A\u0644\u064A\u0642 \u0628\u0645\u0633\u0627\u062D\u062A\u0643"}
                description={"\u0627\u0645\u0644\u0623 \u0627\u0644\u0646\u0645\u0648\u0630\u062C \u0648\u0633\u064A\u062A\u0645 \u062A\u062D\u0648\u064A\u0644\u0643 \u0645\u0628\u0627\u0634\u0631\u0629 \u0625\u0644\u0649 \u0648\u0627\u062A\u0633\u0627\u0628 \u0645\u0639 \u062A\u0641\u0627\u0635\u064A\u0644 \u0637\u0644\u0628\u0643 \u062C\u0627\u0647\u0632\u0629 \u0644\u0644\u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u0633\u0631\u064A\u0639\u0629."}
              />

              <div className="mt-8 space-y-4 text-sm leading-7 text-muted-foreground">
                <div>
                  {"\u062A\u063A\u0637\u064A\u0629: \u0627\u0644\u062F\u0645\u0627\u0645\u060C \u0627\u0644\u062E\u0628\u0631\u060C \u0627\u0644\u0638\u0647\u0631\u0627\u0646\u060C \u0627\u0644\u062C\u0628\u064A\u0644\u060C \u0648\u0645\u0627 \u062D\u0648\u0644\u0647\u0627."}
                </div>
                <div>
                  {"\u0623\u0648\u0642\u0627\u062A \u0627\u0644\u062A\u0648\u0627\u0635\u0644: \u0627\u0644\u0633\u0628\u062A - \u0627\u0644\u062E\u0645\u064A\u0633 \u0645\u0646 8 \u0635\u0628\u0627\u062D\u0627\u064B \u062D\u062A\u0649 10 \u0645\u0633\u0627\u0621\u0627\u064B."}
                </div>
              </div>
            </div>

            <div className="rounded-[24px] border border-border/70 bg-background/60 p-6 sm:p-7">
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}