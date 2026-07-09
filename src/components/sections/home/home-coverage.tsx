import { MapPin } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteConfig } from "@/config/site";

const priorityAreas = [
  "\u0627\u0644\u062F\u0645\u0627\u0645",
  "\u0627\u0644\u062E\u0628\u0631",
  "\u0627\u0644\u0638\u0647\u0631\u0627\u0646",
  "\u0627\u0644\u062C\u0628\u064A\u0644",
] as const;

const extendedAreas = siteConfig.serviceAreas.filter(
  (area) => !priorityAreas.includes(area as (typeof priorityAreas)[number])
);

export function HomeCoverage() {
  return (
    <section id="coverage" className="border-b border-border/70">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8 lg:py-20">
        <div>
          <SectionHeading
            eyebrow="COVERAGE"
            title={"\u062A\u063A\u0637\u064A\u0629 \u0645\u0631\u0643\u0632\u0629 \u062A\u062F\u0639\u0645 \u0627\u0644\u0638\u0647\u0648\u0631 \u0627\u0644\u0645\u062D\u0644\u064A"}
            description={"\u0646\u0631\u0643\u0632 \u0627\u0644\u0627\u0633\u062A\u0647\u062F\u0627\u0641 \u0639\u0644\u0649 \u0627\u0644\u0645\u0646\u0627\u0637\u0642 \u0627\u0644\u0623\u0643\u062B\u0631 \u0637\u0644\u0628\u0627\u064B \u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0631\u062E\u0627\u0645 \u0648\u0627\u0644\u062A\u0634\u0637\u064A\u0628 \u0627\u0644\u0641\u0627\u062E\u0631 \u0641\u064A \u0627\u0644\u0634\u0631\u0642\u064A\u0629."}
          />

          <div className="mt-8 rounded-[28px] border border-border/70 bg-card/70 p-6 shadow-sm">
            <h3 className="text-base font-semibold">
              {"\u0627\u0644\u0623\u0648\u0644\u0648\u064A\u0629 \u0627\u0644\u0625\u0639\u0644\u0627\u0646\u064A\u0629"}
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {"\u0627\u0644\u062F\u0645\u0627\u0645\u060C \u0627\u0644\u062E\u0628\u0631\u060C \u0627\u0644\u0638\u0647\u0631\u0627\u0646\u060C \u0648\u0627\u0644\u062C\u0628\u064A\u0644 \u0647\u064A \u0627\u0644\u0645\u0646\u0627\u0637\u0642 \u0627\u0644\u0623\u0646\u0633\u0628 \u0644\u0628\u062F\u0627\u064A\u0629 \u0627\u0644\u0625\u0639\u0644\u0627\u0646\u0627\u062A \u0648\u0627\u0644\u0635\u0641\u062D\u0627\u062A \u0627\u0644\u0645\u0648\u062C\u0647\u0629."}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {priorityAreas.map((area) => (
              <div
                key={area}
                className="rounded-[28px] border border-border/70 bg-primary/6 p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold">{area}</div>
                    <div className="text-sm text-muted-foreground">
                      {"\u0623\u0648\u0644\u0648\u064A\u0629 \u0623\u0633\u0627\u0633\u064A\u0629"}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-[28px] border border-border/70 bg-card p-6 shadow-sm">
            <h3 className="text-base font-semibold">
              {"\u0645\u0646\u0627\u0637\u0642 \u062A\u063A\u0637\u064A\u0629 \u0625\u0636\u0627\u0641\u064A\u0629"}
            </h3>

            <div className="mt-5 flex flex-wrap gap-3">
              {extendedAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-border/70 bg-background px-4 py-2 text-sm text-muted-foreground"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}