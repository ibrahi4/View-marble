import { SectionHeading } from "@/components/shared/section-heading";
import { faqItems } from "@/config/faq";
import { t } from "@/content/ar";

export function HomeFaq() {
  return (
    <section id="faq" className="border-b border-border/70 bg-card/30">
      <div className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow={t.faq.eyebrow}
          title={t.faq.title}
          description={t.faq.description}
        />

        <div className="mt-10 space-y-4">
          {faqItems.map((item) => (
            <details
              key={item.q}
              className="group luxury-card rounded-[20px] p-5 open:shadow-md"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold">
                <span>{item.q}</span>
                <span className="text-lg text-[color:var(--gold)] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-[1.95] text-muted-foreground">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}