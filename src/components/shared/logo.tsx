import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

type LogoProps = {
  href?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "light";
  className?: string;
};

const sizeMap = {
  sm: { box: "h-10 w-10", sub: "text-[11px]", name: "text-base" },
  md: { box: "h-12 w-12", sub: "text-xs", name: "text-lg" },
  lg: { box: "h-14 w-14", sub: "text-sm", name: "text-xl" },
} as const;

export function Logo({
  href = "/",
  showText = true,
  size = "md",
  variant = "default",
  className,
}: LogoProps) {
  const dims = sizeMap[size];
  const isLight = variant === "light";

  const content = (
    <div className={cn("group flex items-center gap-3.5", className)}>
      <div
        className={cn(
          "relative overflow-hidden rounded-xl border shadow-sm transition-transform duration-500 group-hover:scale-[1.03]",
          dims.box,
          isLight ? "border-white/15 bg-white/8" : "border-border/70 bg-card"
        )}
      >
        <Image
          src="/images/logo.jpg"
          alt={`${siteConfig.name} ${siteConfig.nameAr}`}
          fill
          sizes="(max-width: 768px) 48px, 64px"
          priority
          className="object-cover"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_60%)]"
        />
      </div>

      {showText ? (
        <div className="flex flex-col justify-center text-right">
          <span
            className={cn(
              "font-bold tracking-tight",
              dims.name,
              isLight ? "text-primary-foreground" : "text-foreground"
            )}
          >
            {siteConfig.nameAr}
          </span>
          <span
            className={cn(
              "mt-0.5 font-medium",
              dims.sub,
              isLight ? "text-primary-foreground/70" : "text-muted-foreground"
            )}
          >
            {"\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0631\u062E\u0627\u0645 \u0627\u0644\u0641\u0627\u062E\u0631"}
          </span>
        </div>
      ) : null}
    </div>
  );

  if (!href) return content;

  return (
    <Link href={href} aria-label={`${siteConfig.name} ${siteConfig.nameAr}`}>
      {content}
    </Link>
  );
}