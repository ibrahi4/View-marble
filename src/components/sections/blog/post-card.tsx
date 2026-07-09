import Image from "next/image";
import Link from "next/link";
import { ArrowUpLeft, Clock } from "lucide-react";
import type { BlogPost } from "@/config/blog";

export function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="luxury-card group block overflow-hidden rounded-[28px]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={post.cover}
          alt={post.title}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
        <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/35 px-3 py-1 text-[11px] font-medium tracking-[0.28em] text-white backdrop-blur">
          {post.category}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Clock className="h-3.5 w-3.5" aria-hidden />
          <span>
            {post.readingMinutes} {"\u062F\u0642\u0627\u0626\u0642 \u0642\u0631\u0627\u0621\u0629"}
          </span>
        </div>

        <h3 className="mt-3 text-lg font-semibold leading-snug">{post.title}</h3>
        <p className="mt-3 text-sm leading-7 text-muted-foreground line-clamp-3">
          {post.excerpt}
        </p>

        <div className="mt-5 flex items-center gap-2 text-sm text-[color:var(--gold)]">
          <span>{"\u0627\u0642\u0631\u0623 \u0627\u0644\u0645\u0642\u0627\u0644"}</span>
          <ArrowUpLeft className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5" aria-hidden />
        </div>
      </div>
    </Link>
  );
}