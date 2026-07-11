import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowUpLeft,
  CalendarDays,
  Clock,
  MessageCircle,
  PhoneCall,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionHeading } from "@/components/shared/section-heading";
import { JsonLd } from "@/components/seo/json-ld";
import { blogPosts, getPostBySlug, getRelatedPosts } from "@/config/blog";
import { siteConfig } from "@/config/site";
import { createArticleMetadata } from "@/lib/seo";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

export const revalidate = 86400;
export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return createArticleMetadata({
      title: "المقال غير موجود",
      description: "الرابط الذي حاولت الوصول إليه غير متوفر.",
      path: `/blog/${slug}`,
      publishedTime: new Date().toISOString(),
      modifiedTime: new Date().toISOString(),
      authors: [siteConfig.name],
    });
  }

  return createArticleMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    publishedTime: new Date(post.publishedAt).toISOString(),
    modifiedTime: new Date(post.updatedAt).toISOString(),
    authors: [post.author.name],
    keywords: [...post.keywords],
    ogImage: post.cover,
  });
}

function formatDateAr(date: string) {
  return new Date(date).toLocaleDateString("ar-SA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const relatedPosts = getRelatedPosts(post.slug, 3);
  const phoneHref = `tel:${siteConfig.phone.replace(/\s+/g, "")}`;
  const whatsappHref = `https://wa.me/${siteConfig.whatsappDigits}`;

  return (
    <>
      <SiteHeader />

      <JsonLd data={articleSchema(post)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "الرئيسية", url: "/" },
          { name: "المدونة", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` },
        ])}
      />

      <main id="main-content">
        <article>
          <section className="relative overflow-hidden border-b border-border/70">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -top-40 right-1/2 h-[520px] w-[520px] translate-x-1/2 rounded-full bg-primary/8 blur-3xl" />
            </div>

            <div className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
              <Breadcrumbs
                items={[
                  { name: "الرئيسية", href: "/" },
                  { name: "المدونة", href: "/blog" },
                  { name: post.title, href: `/blog/${post.slug}` },
                ]}
              />

              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/85 px-4 py-2 text-sm text-[color:var(--gold)] shadow-sm backdrop-blur">
                <span>{post.category}</span>
              </div>

              <h1 className="mt-6 text-[32px] font-semibold leading-[1.2] tracking-tight sm:text-4xl lg:text-[46px]">
                {post.title}
              </h1>

              <p className="mt-6 text-base leading-[1.95] text-muted-foreground sm:text-lg">
                {post.excerpt}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-[color:var(--gold)]" aria-hidden />
                  <span>{post.author.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-[color:var(--gold)]" aria-hidden />
                  <span>{formatDateAr(post.publishedAt)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[color:var(--gold)]" aria-hidden />
                  <span>{post.readingMinutes} دقائق قراءة</span>
                </div>
              </div>
            </div>

            <div className="mx-auto w-full max-w-5xl px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20">
              <div className="relative aspect-[16/9] overflow-hidden rounded-[32px] border border-border/70 shadow-[0_40px_120px_-40px_rgba(32,27,21,0.4)]">
                <Image
                  src={post.cover}
                  alt={post.title}
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 100vw, 1000px"
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          <section>
            <div className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
              <div className="space-y-6">
                {post.content.map((block, index) => {
                  if (block.type === "paragraph") {
                    return (
                      <p
                        key={index}
                        className="text-base leading-[2] text-foreground/85 sm:text-lg"
                      >
                        {block.text}
                      </p>
                    );
                  }
                  if (block.type === "heading") {
                    return (
                      <h2
                        key={index}
                        className="mt-10 text-2xl font-semibold tracking-tight sm:text-3xl"
                      >
                        {block.text}
                      </h2>
                    );
                  }
                  if (block.type === "list") {
                    return (
                      <ul key={index} className="space-y-3">
                        {block.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 rounded-2xl border border-border/70 bg-card/60 px-4 py-3 text-sm leading-7 sm:text-base"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--gold)]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return null;
                })}
              </div>

              <div className="mt-10 flex flex-wrap gap-2">
                {post.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full border border-border/70 bg-background px-3 py-1.5 text-xs text-muted-foreground"
                  >
                    #{keyword}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </article>

        {relatedPosts.length > 0 ? (
          <section className="border-t border-border/70 bg-card/30">
            <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
              <SectionHeading
                eyebrow="مقالات ذات صلة"
                title="اقرأ المزيد من مدونة فيو"
              />

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="luxury-card group block overflow-hidden rounded-[28px]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={related.cover}
                        alt={related.title}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-xs text-[color:var(--gold)]">
                        {related.category}
                      </div>
                      <h3 className="mt-2 text-lg font-semibold">{related.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground line-clamp-3">
                        {related.excerpt}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-sm text-[color:var(--gold)]">
                        <span>اقرأ المقال</span>
                        <ArrowUpLeft className="h-4 w-4" aria-hidden />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="py-14 sm:py-20">
          <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="luxury-card rounded-[32px] p-8 text-center sm:p-12">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                هل تفكر في مشروع رخام جديد؟
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
                فريق فيو جاهز لتقديم استشارة مجانية وعرض سعر مناسب لمساحتك.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button asChild size="lg">
                  <Link href={whatsappHref} target="_blank" rel="noreferrer">
                    <MessageCircle className="h-4 w-4" aria-hidden />
                    <span>تواصل عبر واتساب</span>
                  </Link>
                </Button>

                <Button asChild variant="outline" size="lg">
                  <Link href={phoneHref}>
                    <PhoneCall className="h-4 w-4" aria-hidden />
                    <span>{siteConfig.phoneDisplay}</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}