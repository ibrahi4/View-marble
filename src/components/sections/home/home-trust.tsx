import { Award, Clock3, Gem, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { t } from "@/content/ar";

const trustPoints = [
  {
    icon: Gem,
    key: "quality",
  },
  {
    icon: ShieldCheck,
    key: "precision",
  },
  {
    icon: Clock3,
    key: "timing",
  },
  {
    icon: Award,
    key: "details",
  },
] as const;

export function HomeTrust() {
  return (
    <section id="trust" className="border-b border-border/70">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow={t.trust.eyebrow}
          title={t.trust.title}
          description={t.trust.description}
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {trustPoints.map((point) => {
            const Icon = point.icon;
            const data = t.trust.points[point.key];

            return (
              <div
                key={point.key}
                className="luxury-card rounded-[28px] p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-[color:var(--gold)]">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{data.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {data.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}