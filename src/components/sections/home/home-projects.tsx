import Image from "next/image";
import { SectionHeading } from "@/components/shared/section-heading";
import { marbleImages } from "@/config/images";

export function HomeProjects() {
  return (
    <section className="relative border-b border-border/70 bg-card/30 grain">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="PROJECTS"
          title={"\u0644\u0645\u062D\u0629 \u0645\u0646 \u0623\u0639\u0645\u0627\u0644\u0646\u0627 \u0627\u0644\u0623\u062E\u064A\u0631\u0629"}
          description={"\u0645\u062E\u062A\u0627\u0631\u0627\u062A \u062A\u0639\u0643\u0633 \u0623\u0633\u0644\u0648\u0628\u0646\u0627 \u0641\u064A \u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u062E\u0627\u0645\u0629\u060C \u062F\u0642\u0629 \u0627\u0644\u062A\u0641\u0635\u064A\u0644\u060C \u0648\u0646\u0638\u0627\u0641\u0629 \u0627\u0644\u062A\u0631\u0643\u064A\u0628 \u0641\u064A \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0627\u0644\u0641\u0627\u062E\u0631\u0629."}
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[220px_220px]">
          {marbleImages.projects.map((src, index) => (
            <div
              key={src}
              className={
                index === 0
                  ? "relative overflow-hidden rounded-[28px] border border-border/70 shadow-sm sm:col-span-2 lg:row-span-2 lg:aspect-auto"
                  : "relative aspect-[4/3] overflow-hidden rounded-[28px] border border-border/70 shadow-sm lg:aspect-auto"
              }
            >
              <Image
                src={src}
                alt="Marble project"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-[900ms] ease-out hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}