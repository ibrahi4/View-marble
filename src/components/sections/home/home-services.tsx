import Image from "next/image";
import { ArrowUpLeft } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { marbleImages } from "@/config/images";

const services = [
  {
    image: marbleImages.services.supply,
    title: "\u062A\u0648\u0631\u064A\u062F \u0648\u062A\u0631\u0643\u064A\u0628 \u0627\u0644\u0631\u062E\u0627\u0645",
    description:
      "\u062E\u0627\u0645\u0627\u062A \u0645\u0646\u062A\u0642\u0627\u0629 \u0648\u062A\u0646\u0641\u064A\u0630 \u062F\u0642\u064A\u0642 \u064A\u0646\u0627\u0633\u0628 \u0627\u0644\u0641\u0644\u0644 \u0648\u0627\u0644\u0645\u0633\u0627\u062D\u0627\u062A \u0627\u0644\u0641\u062E\u0627\u0645\u0629.",
  },
  {
    image: marbleImages.services.basin,
    title: "\u0645\u063A\u0627\u0633\u0644 \u0631\u062E\u0627\u0645 \u062A\u0641\u0635\u064A\u0644",
    description:
      "\u062A\u0635\u0627\u0645\u064A\u0645 \u0645\u062E\u062A\u0627\u0631\u0629 \u0628\u0625\u0646\u0647\u0627\u0621 \u0646\u0638\u064A\u0641 \u064A\u062C\u0645\u0639 \u0628\u064A\u0646 \u0627\u0644\u0630\u0648\u0642 \u0648\u0627\u0644\u0639\u0645\u0644\u064A\u0629.",
  },
  {
    image: marbleImages.services.stairs,
    title: "\u062F\u0631\u062C \u0627\u0644\u0633\u0644\u0627\u0644\u0645",
    description:
      "\u062A\u0634\u0637\u064A\u0628\u0627\u062A \u062A\u0628\u0631\u0632 \u062D\u0636\u0648\u0631 \u0627\u0644\u0645\u062F\u062E\u0644 \u0648\u062A\u0639\u0637\u064A \u0627\u0644\u0633\u0644\u0645 \u0645\u0638\u0647\u0631\u0627\u064B \u0645\u062A\u0646\u0627\u0633\u0642\u0627\u064B.",
  },
  {
    image: marbleImages.services.kitchen,
    title: "\u0631\u062E\u0627\u0645 \u0627\u0644\u0645\u0637\u0627\u0628\u062E \u0648\u0627\u0644\u0635\u0627\u0644\u0648\u0646\u0627\u062A",
    description:
      "\u0623\u0633\u0637\u062D \u0623\u0646\u064A\u0642\u0629 \u062A\u062A\u062D\u0645\u0644 \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u064A\u0648\u0645\u064A \u0645\u0639 \u0644\u0645\u0633\u0629 \u0631\u0627\u0642\u064A\u0629.",
  },
  {
    image: marbleImages.services.walls,
    title: "\u0643\u0633\u0648\u0629 \u0627\u0644\u062C\u062F\u0631\u0627\u0646 \u0648\u0627\u0644\u0623\u0631\u0636\u064A\u0627\u062A",
    description:
      "\u062A\u0637\u0628\u064A\u0642 \u0628\u0623\u062D\u062F\u062B \u0623\u0633\u0627\u0644\u064A\u0628 \u0627\u0644\u062A\u0631\u0643\u064A\u0628 \u0644\u0625\u0638\u0647\u0627\u0631 \u062C\u0645\u0627\u0644 \u0627\u0644\u062E\u0627\u0645\u0629 \u0628\u0648\u0636\u0648\u062D.",
  },
  {
    image: marbleImages.services.polish,
    title: "\u0635\u064A\u0627\u0646\u0629 \u0648\u062A\u0644\u0645\u064A\u0639 \u0627\u0644\u0631\u062E\u0627\u0645",
    description:
      "\u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0627\u0644\u0644\u0645\u0639\u0627\u0646 \u0648\u062A\u062D\u0633\u064A\u0646 \u0627\u0644\u0645\u0638\u0647\u0631 \u0628\u0623\u0639\u0645\u0627\u0644 \u0635\u064A\u0627\u0646\u0629 \u0645\u062F\u0631\u0648\u0633\u0629.",
  },
] as const;

export function HomeServices() {
  return (
    <section id="services" className="relative border-b border-border/70">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="SERVICES"
          title={"\u062E\u062F\u0645\u0627\u062A \u0645\u062E\u062A\u0627\u0631\u0629 \u0644\u0645\u0633\u0627\u062D\u0627\u062A \u062A\u062D\u062A\u0627\u062C \u062D\u0636\u0648\u0631\u0627\u064B \u0641\u0627\u062E\u0631\u0627\u064B"}
          description={"\u0646\u0642\u062F\u0645 \u062D\u0644\u0648\u0644\u0627\u064B \u0645\u062A\u0643\u0627\u0645\u0644\u0629 \u062A\u0631\u0643\u0632 \u0639\u0644\u0649 \u0627\u0644\u062F\u0642\u0629\u060C \u0646\u0638\u0627\u0641\u0629 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644\u060C \u0648\u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u062E\u0627\u0645\u0629 \u0627\u0644\u0645\u0646\u0627\u0633\u0628\u0629 \u0644\u0643\u0644 \u0645\u0634\u0631\u0648\u0639."}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <article key={service.title} className="luxury-card group overflow-hidden rounded-[28px]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  loading="lazy"
                  quality={65}
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
                <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/35 px-3 py-1 text-[11px] font-medium tracking-[0.28em] text-white backdrop-blur">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.description}</p>

                <div className="mt-5 flex items-center gap-2 text-sm text-[color:var(--gold)]">
                  <span>{"\u0627\u0637\u0644\u0628 \u0627\u0644\u062E\u062F\u0645\u0629"}</span>
                  <ArrowUpLeft className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5" aria-hidden />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}