import Link from "next/link";
import { ChevronLeft, Home } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { cn } from "@/lib/utils";

type BreadcrumbItem = {
  name: string;
  href: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("text-sm text-muted-foreground", className)}
    >
      <JsonLd
        data={breadcrumbSchema(
          items.map((item) => ({ name: item.name, url: item.href }))
        )}
      />

      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isFirst = index === 0;

          return (
            <li key={item.href} className="flex items-center gap-2">
              {isLast ? (
                <span className="font-medium text-foreground" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
                >
                  {isFirst ? (
                    <Home className="h-3.5 w-3.5 opacity-70" aria-hidden />
                  ) : null}
                  <span>{item.name}</span>
                </Link>
              )}
              {!isLast ? (
                <ChevronLeft
                  className="h-3.5 w-3.5 opacity-50"
                  aria-hidden
                />
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}