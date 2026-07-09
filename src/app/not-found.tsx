import Link from "next/link";
import { ArrowUpLeft, Home, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function NotFound() {
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
          {"\u0627\u0644\u0635\u0641\u062D\u0629 "}
          <span className="gold-text">
            {"\u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629"}
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-md text-base leading-8 text-muted-foreground">
          {"\u064A\u0628\u062F\u0648 \u0623\u0646 \u0627\u0644\u0631\u0627\u0628\u0637 \u0627\u0644\u0630\u064A \u062D\u0627\u0648\u0644\u062A \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u064A\u0647 \u063A\u064A\u0631 \u0645\u062A\u0648\u0641\u0631. \u064A\u0645\u0643\u0646\u0643 \u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629 \u0623\u0648 \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0645\u0628\u0627\u0634\u0631\u0629."}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="h-4 w-4" />
              <span>{"\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629"}</span>
              <ArrowUpLeft className="h-4 w-4" />
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg">
            <Link href={`tel:${siteConfig.phone}`}>
              <PhoneCall className="h-4 w-4" />
              <span>{"\u0627\u062A\u0635\u0644 \u0628\u0646\u0627"}</span>
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}