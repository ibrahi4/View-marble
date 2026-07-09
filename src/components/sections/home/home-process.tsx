import { ClipboardList, HardHat, Ruler, Truck } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "\u062A\u0648\u0627\u0635\u0644 \u0648\u0641\u0647\u0645 \u0627\u0644\u0627\u062D\u062A\u064A\u0627\u062C",
    description: "\u0646\u0633\u062A\u0645\u0639 \u0644\u0646\u0648\u0639 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0648\u0627\u0644\u0646\u062A\u064A\u062C\u0629 \u0627\u0644\u062A\u064A \u064A\u0631\u064A\u062F\u0647\u0627 \u0627\u0644\u0639\u0645\u064A\u0644.",
  },
  {
    icon: Ruler,
    step: "02",
    title: "\u0645\u0639\u0627\u064A\u0646\u0629 \u0648\u0642\u064A\u0627\u0633",
    description: "\u0646\u0631\u0627\u062C\u0639 \u0627\u0644\u0645\u0633\u0627\u062D\u0629 \u0648\u0627\u0644\u0623\u0628\u0639\u0627\u062F \u0648\u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 \u0642\u0628\u0644 \u0627\u0644\u0628\u062F\u0621 \u0628\u0627\u0644\u062A\u0646\u0641\u064A\u0630.",
  },
  {
    icon: Truck,
    step: "03",
    title: "\u062A\u062C\u0647\u064A\u0632 \u0627\u0644\u062E\u0627\u0645\u0629 \u0648\u0627\u0644\u062A\u0641\u0635\u064A\u0644",
    description: "\u064A\u062A\u0645 \u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u062E\u0627\u0645\u0629 \u0648\u0625\u0639\u062F\u0627\u062F\u0647\u0627 \u062D\u0633\u0628 \u0645\u062A\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0645\u0634\u0631\u0648\u0639.",
  },
  {
    icon: HardHat,
    step: "04",
    title: "\u062A\u0646\u0641\u064A\u0630 \u0648\u062A\u0633\u0644\u064A\u0645",
    description: "\u062A\u0631\u0643\u064A\u0628 \u0645\u062F\u0631\u0648\u0633 \u0648\u0645\u0631\u0627\u062C\u0639\u0629 \u0623\u062E\u064A\u0631\u0629 \u0644\u0636\u0645\u0627\u0646 \u0646\u0638\u0627\u0641\u0629 \u0627\u0644\u0646\u062A\u064A\u062C\u0629.",
  },
] as const;

export function HomeProcess() {
  return (
    <section className="border-b border-border/70 bg-card/30">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="PROCESS"
          title={"\u062E\u0637\u0648\u0627\u062A \u0639\u0645\u0644 \u0648\u0627\u0636\u062D\u0629 \u0645\u0646 \u0627\u0644\u0645\u0639\u0627\u064A\u0646\u0629 \u062D\u062A\u0649 \u0627\u0644\u062A\u0633\u0644\u064A\u0645"}
          description={"\u062A\u0633\u0644\u0633\u0644 \u062A\u0646\u0641\u064A\u0630 \u0648\u0627\u0636\u062D \u064A\u062D\u0627\u0641\u0638 \u0639\u0644\u0649 \u062C\u0648\u062F\u0629 \u0627\u0644\u0646\u062A\u064A\u062C\u0629 \u0648\u064A\u0633\u0647\u0644 \u0639\u0644\u0649 \u0627\u0644\u0639\u0645\u064A\u0644 \u0645\u062A\u0627\u0628\u0639\u0629 \u0645\u0631\u0627\u062D\u0644 \u0627\u0644\u0645\u0634\u0631\u0648\u0639."}
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.step} className="rounded-[28px] border border-border/70 bg-card p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-sm font-medium text-primary">{item.step}</div>
                </div>

                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}