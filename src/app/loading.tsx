import { Logo } from "@/components/shared/logo";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-background/85 backdrop-blur">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div aria-hidden className="absolute inset-0 -m-1 animate-ping rounded-2xl border border-[color:var(--gold)]/40" />
          <Logo href="" showText={false} size="md" />
        </div>
        <div className="text-[11px] font-medium uppercase tracking-[0.44em] text-muted-foreground">
          View
        </div>
      </div>
    </div>
  );
}