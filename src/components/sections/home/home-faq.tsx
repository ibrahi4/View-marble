import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/section-heading";
import { JsonLd } from "@/components/seo/json-ld";
import { faqItems } from "@/config/faq";
import { faqSchema } from "@/lib/schema";

export function HomeFaq() {
  return (
    <section id="faq" className="relative border-b border-border/70">
      <JsonLd data={faqSchema([...faqItems])} />

      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8 lg:py-24">
        <div className="lg:sticky lg:top-24 lg:h-fit">
          <SectionHeading
            eyebrow="FAQ"
            title={"\u0623\u0633\u0626\u0644\u0629 \u062A\u062A\u0643\u0631\u0631 \u0642\u0628\u0644 \u0628\u062F\u0621 \u0627\u0644\u0645\u0634\u0631\u0648\u0639"}
            description={"\u062A\u0648\u0636\u064A\u062D \u0633\u0631\u064A\u0639 \u0644\u0644\u0623\u0645\u0648\u0631 \u0627\u0644\u0623\u0643\u062B\u0631 \u0623\u0647\u0645\u064A\u0629 \u0644\u0644\u0639\u0645\u064A\u0644 \u0642\u0628\u0644 \u0627\u062A\u062E\u0627\u0630 \u0642\u0631\u0627\u0631 \u0627\u0644\u062A\u0648\u0631\u064A\u062F \u0648\u0627\u0644\u062A\u0631\u0643\u064A\u0628."}
          />
        </div>

        <div>
          <Accordion className="w-full space-y-3">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={item.q}
                value={`item-${index}`}
                className="luxury-card rounded-[20px] border-none px-5"
              >
                <AccordionTrigger className="py-5 text-right text-base font-semibold hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-7 text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}