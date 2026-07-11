import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpLeft, Home, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "الصفحة غير موجودة",
  description: "الرابط الذي حاولت الوصول إليه غير متوفر.",
  noIndex: true,
});

export default function NotFound() {
  const phoneHref = `tel:${siteConfig.phone.replace(/\s+/g, "")}`;

  return (
    <main className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-4 py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 right-1/2 h-[520px] w-[520px] translate-x-1/2 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-[380px] w-[380px] rounded-full bg-[color:var(--gold)]/18 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-2xl text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/85 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur">
          <span className="tracking-[0.28em]">404</span>
        </div>

        <h1 className="mt-8 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          الصفحة{" "}
          <span className="gold-text">غير موجودة</span>
        </h1>

        <p className="mx-auto mt-5 max-w-md text-base leading-8 text-muted-foreground">
          يبدو أن الرابط الذي حاولت الوصول إليه غير متوفر. يمكنك العودة للصفحة الرئيسية أو التواصل معنا مباشرة.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="h-4 w-4" aria-hidden />
              <span>الصفحة الرئيسية</span>
              <ArrowUpLeft className="h-4 w-4" aria-hidden />
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg">
            <Link href={phoneHref}>
              <PhoneCall className="h-4 w-4" aria-hidden />
              <span>اتصل بنا</span>
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}