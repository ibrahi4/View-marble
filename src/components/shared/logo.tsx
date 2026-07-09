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
  sm: { box: "h-10 w-10", eyebrow: "text-[12px] tracking-[0.44em]", name: "text-base" },
  md: { box: "h-15 w-15", eyebrow: "text-[11px] tracking-[0.48em]", name: "text-xl" },
  lg: { box: "h-16 w-16", eyebrow: "text-[16px] tracking-[0.49em]", name: "text-xl" },
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
    <div className={cn("group flex items-center gap-3", className)}>
      <div
        className={cn(
          "relative overflow-hidden rounded-4xl border shadow-sm transition-transform duration-500 group-hover:scale-[1.03]",
          dims.box,
          isLight ? "border-white/15 bg-white/8" : "border-border/70 bg-card"
        )}
      >
        <Image
          src="/images/logo.jpg"
          alt={`${siteConfig.name} ${siteConfig.nameAr}`}
          fill
          sizes="56px"
          priority
          className="object-cover"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_60%)]"
        />
      </div>

      {showText ? (
        <div className="flex flex-col leading-tight">
              <span
            className={cn(
              "mt-1 font-semibold",
              dims.name,
              isLight ? "text-primary-foreground" : "text-foreground"
            )}
          >
         شركة {siteConfig.nameAr} 
          </span>
          <span
            className={cn(
              "font-medium uppercase",
              dims.eyebrow,
              isLight ? "text-primary-foreground/60" : "text-muted-foreground"
            )}
          >
            لتوريد وتركيب الرخام
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