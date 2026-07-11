import Image from "next/image";
import Link from "next/link";
import { ArrowUpLeft, CalendarDays, Clock } from "lucide-react";
import type { BlogPost } from "@/config/blog";
import { t } from "@/content/ar";

type PostCardProps = {
  post: BlogPost;
};

function formatDateAr(date: string) {
  return new Date(date).toLocaleDateString("ar-SA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="luxury-card group block overflow-hidden rounded-[28px]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={post.cover}
          alt={post.title}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent"
        />
        <div className="absolute right-4 top-4 rounded-full border border-white/25 bg-black/40 px-3 py-1 text-[11px] font-medium text-white backdrop-blur">
          {post.category}
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-lg font-semibold leading-7">{post.title}</h2>
        <p className="mt-3 text-sm leading-7 text-muted-foreground line-clamp-3">
          {post.excerpt}
        </p>

        <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <CalendarDays
              className="h-3.5 w-3.5 text-[color:var(--gold)]"
              aria-hidden
            />
            <span>{formatDateAr(post.publishedAt)}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock
              className="h-3.5 w-3.5 text-[color:var(--gold)]"
              aria-hidden
            />
            <span>
              {post.readingMinutes} {t.blog.readTime}
            </span>
          </div>
        </div>

        <div className="mt-5 flex items-center gap-2 text-sm font-medium text-[color:var(--gold)]">
          <span>{t.blog.readMore}</span>
          <ArrowUpLeft
            className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </div>
      </div>
    </Link>
  );
}