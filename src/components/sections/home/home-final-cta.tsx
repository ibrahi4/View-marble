import Link from "next/link";
import { MessageCircle, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { t } from "@/content/ar";

export function HomeFinalCta() {
  const phoneHref = `tel:${siteConfig.phone.replace(/\s+/g, "")}`;
  const whatsappHref = `https://wa.me/${siteConfig.whatsappDigits}`;

  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="luxury-card relative overflow-hidden rounded-[32px] p-8 text-center sm:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-40"
          >
            <div className="absolute -top-20 right-1/2 h-[300px] w-[300px] translate-x-1/2 rounded-full bg-[color:var(--gold)]/20 blur-3xl" />
          </div>

          <div className="relative">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              {t.finalCta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              {t.finalCta.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="shadow-lg">
                <Link href={whatsappHref} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  <span>{t.common.whatsapp}</span>
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg">
                <Link href={phoneHref}>
                  <PhoneCall className="h-4 w-4" aria-hidden />
                  <span>{siteConfig.phoneDisplay}</span>
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  <span>{t.common.requestQuote}</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}