import { Award, Clock3, ShieldCheck, Sparkles, Users } from "lucide-react";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "\u0636\u0645\u0627\u0646 \u062C\u0648\u062F\u0629",
    description: "\u062A\u0646\u0641\u064A\u0630 \u064A\u0644\u062A\u0632\u0645 \u0628\u0645\u0639\u0627\u064A\u064A\u0631 \u0627\u0644\u062C\u0648\u062F\u0629 \u0641\u064A \u0643\u0644 \u062A\u0641\u0635\u064A\u0644\u0629.",
  },
  {
    icon: Clock3,
    title: "\u0627\u0644\u062A\u0632\u0627\u0645 \u0628\u0627\u0644\u0645\u0648\u0639\u062F",
    description: "\u062C\u062F\u0648\u0644 \u0632\u0645\u0646\u064A \u0648\u0627\u0636\u062D \u0648\u062A\u0633\u0644\u064A\u0645 \u0641\u064A \u0627\u0644\u0648\u0642\u062A \u0627\u0644\u0645\u062D\u062F\u062F.",
  },
  {
    icon: Award,
    title: "\u062E\u0627\u0645\u0627\u062A \u0645\u0639\u062A\u0645\u062F\u0629",
    description: "\u0645\u0635\u0627\u062F\u0631 \u0645\u0648\u062B\u0648\u0642\u0629 \u0648\u0623\u0646\u0648\u0627\u0639 \u0645\u062A\u0646\u0648\u0639\u0629 \u062A\u0646\u0627\u0633\u0628 \u0643\u0644 \u0645\u0634\u0631\u0648\u0639.",
  },
  {
    icon: Users,
    title: "\u0641\u0631\u064A\u0642 \u0645\u062A\u062E\u0635\u0635",
    description: "\u062E\u0628\u0631\u0629 \u0641\u0646\u064A\u0629 \u0645\u062A\u0631\u0627\u0643\u0645\u0629 \u0641\u064A \u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0631\u062E\u0627\u0645 \u0627\u0644\u0641\u0627\u062E\u0631.",
  },
  {
    icon: Sparkles,
    title: "\u062A\u0634\u0637\u064A\u0628 \u0646\u0647\u0627\u0626\u064A",
    description: "\u0645\u0631\u0627\u062C\u0639\u0629 \u062F\u0642\u064A\u0642\u0629 \u0644\u0644\u062A\u0641\u0627\u0635\u064A\u0644 \u0642\u0628\u0644 \u0627\u0644\u062A\u0633\u0644\u064A\u0645 \u0627\u0644\u0646\u0647\u0627\u0626\u064A.",
  },
] as const;

export function HomeTrust() {
  return (
    <section className="relative border-b border-border/70">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="luxury-card rounded-[24px] p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/8 text-[color:var(--gold)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-sm font-semibold">{item.title}</h3>
                <p className="mt-2 text-xs leading-6 text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}