import { SectionHeading } from "@/components/shared/section-heading";
import { t } from "@/content/ar";

const processSteps = [
  { step: "01", key: "one" },
  { step: "02", key: "two" },
  { step: "03", key: "three" },
  { step: "04", key: "four" },
] as const;

export function HomeProcess() {
  return (
    <section id="process" className="border-b border-border/70">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow={t.process.eyebrow}
          title={t.process.title}
          description={t.process.description}
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((item) => {
            const data = t.process.steps[item.key];

            return (
              <div
                key={item.step}
                className="luxury-card relative overflow-hidden rounded-[28px] p-6"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-6 -left-4 text-[100px] font-bold leading-none text-[color:var(--gold)]/10"
                >
                  {item.step}
                </div>

                <div className="relative">
                  <div className="text-sm font-semibold tracking-[0.28em] text-[color:var(--gold)]">
                    {item.step}
                  </div>

                  <h3 className="mt-5 text-lg font-semibold">{data.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {data.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}