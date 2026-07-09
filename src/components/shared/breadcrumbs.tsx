import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

type BreadcrumbItem = {
  name: string;
  href: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
      <JsonLd
        data={breadcrumbSchema(items.map((item) => ({ name: item.name, url: item.href })))}
      />

      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.href} className="flex items-center gap-2">
              {isLast ? (
                <span className="text-foreground">{item.name}</span>
              ) : (
                <Link href={item.href} className="transition-colors hover:text-foreground">
                  {item.name}
                </Link>
              )}
              {!isLast ? <ChevronLeft className="h-3.5 w-3.5 opacity-60" aria-hidden /> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}