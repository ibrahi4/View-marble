import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowUpLeft, Calendar, Clock, MessageCircle, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { PostCard } from "@/components/sections/blog/post-card";
import { blogPosts, getPostBySlug } from "@/config/blog";
import { siteConfig } from "@/config/site";
import { absoluteUrl, createMetadata } from "@/lib/seo";

export const dynamicParams = false;
export const revalidate = 86400;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return createMetadata({ noIndex: true });

  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: [...post.keywords],
  });
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.cover,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    inLanguage: "ar-SA",
    author: {
      "@type": "Organization",
      name: `${siteConfig.name} ${siteConfig.nameAr}`,
      url: absoluteUrl("/"),
    },
    publisher: {
      "@type": "Organization",
      name: `${siteConfig.name} ${siteConfig.nameAr}`,
      url: absoluteUrl("/"),
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/blog/${post.slug}`),
    },
    keywords: post.keywords.join(", "),
  };

  return (
    <>
      <SiteHeader />

      <main id="main-content">
        <JsonLd data={articleSchema} />

        <section className="relative overflow-hidden border-b border-border/70 grain">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-40 right-1/2 h-[520px] w-[520px] translate-x-1/2 rounded-full bg-primary/8 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-[380px] w-[380px] rounded-full bg-[color:var(--gold)]/18 blur-3xl" />
          </div>

          <div className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <Breadcrumbs
              items={[
                { name: "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629", href: "/" },
                { name: "\u0627\u0644\u0645\u062F\u0648\u0646\u0629", href: "/blog" },
                { name: post.title, href: `/blog/${post.slug}` },
              ]}
            />

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.28em] text-muted-foreground">
              <span className="rounded-full border border-border/70 bg-card/85 px-3 py-1">
                {post.category}
              </span>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" aria-hidden />
                <time dateTime={post.publishedAt}>{post.publishedAt}</time>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" aria-hidden />
                <span>
                  {post.readingMinutes} {"\u062F\u0642\u0627\u0626\u0642"}
                </span>
              </div>
            </div>

            <h1 className="mt-6 text-[34px] font-semibold leading-[1.2] tracking-tight sm:text-5xl">
              {post.title}
            </h1>

            <p className="mt-6 text-lg leading-[1.95] text-muted-foreground">{post.excerpt}</p>
          </div>
        </section>

        <section className="border-b border-border/70">
          <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[28px] border border-border/70 shadow-[0_30px_100px_-40px_rgba(32,27,21,0.28)]">
              <Image
                src={post.cover}
                alt={post.title}
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="border-b border-border/70">
          <div className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
            <article className="space-y-6 text-base leading-[2.05] text-foreground/90">
              {post.content.map((block, index) => {
                if (block.type === "heading") {
                  return (
                    <h2
                      key={index}
                      className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-[26px]"
                    >
                      {block.text}
                    </h2>
                  );
                }

                if (block.type === "list") {
                  return (
                    <ul key={index} className="list-disc space-y-2 pr-6 text-muted-foreground">
                      {block.items?.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  );
                }

                return (
                  <p key={index} className="text-muted-foreground">
                    {block.text}
                  </p>
                );
              })}
            </article>

            <div className="mt-12 luxury-card rounded-[28px] p-8 text-center">
              <h3 className="text-2xl font-semibold">
                {"\u0647\u0644 \u062A\u062D\u062A\u0627\u062C \u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0641\u064A \u0645\u0634\u0631\u0648\u0639\u0643\u061F"}
              </h3>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-muted-foreground">
                {"\u062A\u0648\u0627\u0635\u0644 \u0645\u0639 \u0641\u0631\u064A\u0642 View \u0644\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u0634\u0648\u0631\u0629 \u0648\u0639\u0631\u0636 \u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u0645\u0646\u0627\u0633\u0628."}
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Button asChild size="lg">
                  <Link href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noreferrer">
                    <MessageCircle className="h-4 w-4" aria-hidden />
                    <span>{"\u062A\u0648\u0627\u0635\u0644 \u0639\u0628\u0631 \u0648\u0627\u062A\u0633\u0627\u0628"}</span>
                  </Link>
                </Button>

                <Button asChild variant="outline" size="lg">
                  <Link href={`tel:${siteConfig.phone}`}>
                    <PhoneCall className="h-4 w-4" aria-hidden />
                    <span>{siteConfig.phoneDisplay}</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <h2 className="text-2xl font-semibold">
                {"\u0645\u0642\u0627\u0644\u0627\u062A \u0623\u062E\u0631\u0649 \u0642\u062F \u062A\u0647\u0645\u0643"}
              </h2>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-[color:var(--gold)] hover:opacity-90"
              >
                <span>{"\u0643\u0644 \u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062A"}</span>
                <ArrowUpLeft className="h-4 w-4" aria-hidden />
              </Link>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {related.map((item) => (
                <PostCard key={item.slug} post={item} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}