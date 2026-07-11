import { Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { t } from "@/content/ar";

const testimonials = [
  {
    name: "أبو عبدالله",
    role: "صاحب فيلا - الدمام",
    text: "تنفيذ راقٍ وخامات ممتازة، فريق ملتزم بالمواعيد. نتيجة تفوق التوقعات وأنصح فيو لأي مشروع رخام فاخر.",
    rating: 5,
  },
  {
    name: "أم فيصل",
    role: "قصر خاص - الخبر",
    text: "دقة في التركيب واختيار مدروس للخامات. المتابعة بعد التسليم كانت لمسة احترافية ميزت فيو عن غيرها.",
    rating: 5,
  },
  {
    name: "المهندس خالد",
    role: "استشاري مشروع - الظهران",
    text: "تعاملت مع فيو في أكثر من مشروع، والنتيجة دائماً مطابقة للمخططات. فريق يفهم لغة المهندس ويحترم التفاصيل.",
    rating: 5,
  },
] as const;

export function HomeTestimonials() {
  return (
    <section
      id="testimonials"
      className="border-b border-border/70"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow={t.testimonials.eyebrow}
          title={t.testimonials.title}
          description={t.testimonials.description}
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="luxury-card relative rounded-[28px] p-6"
            >
              <div
                aria-hidden
                className="absolute right-6 top-6 text-[color:var(--gold)]/20"
              >
                <Quote className="h-8 w-8" />
              </div>

              <div className="flex items-center gap-1">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[color:var(--gold)] text-[color:var(--gold)]"
                    aria-hidden
                  />
                ))}
              </div>

              <p className="mt-5 text-sm leading-[1.95] text-foreground/85">
                {item.text}
              </p>

              <div className="mt-6 border-t border-border/60 pt-4">
                <div className="text-sm font-semibold">{item.name}</div>
                <div className="text-xs text-muted-foreground">{item.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}