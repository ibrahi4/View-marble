import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "start" | "center";
  as?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "start",
  as: Component = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[color:var(--gold)]">
        {eyebrow}
      </p>
      <Component className="mt-5 text-3xl font-semibold leading-[1.18] tracking-tight sm:text-4xl lg:text-[42px]">
        {title}
      </Component>
      {description ? (
        <p className="mt-5 text-base leading-[1.95] text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}