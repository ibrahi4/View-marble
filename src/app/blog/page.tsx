import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionHeading } from "@/components/shared/section-heading";
import { PostCard } from "@/components/sections/blog/post-card";
import { blogPosts } from "@/config/blog";
import { t } from "@/content/ar";
import { createMetadata } from "@/lib/seo";

export const revalidate = 86400;

export const metadata: Metadata = createMetadata({
  title: "مدونة فيو للرخام والتشطيبات",
  description:
    "مقالات ونصائح متخصصة في اختيار وتركيب وصيانة الرخام من فريق فيو في الدمام والمنطقة الشرقية.",
  path: "/blog",
});

export default function BlogPage() {
  const sorted = [...blogPosts].sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : -1
  );

  return (
    <>
      <SiteHeader />

      <main id="main-content">
        <section className="border-b border-border/70">
          <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <Breadcrumbs
              items={[
                { name: t.breadcrumbs.home, href: "/" },
                { name: t.breadcrumbs.blog, href: "/blog" },
              ]}
            />

            <div className="mt-6">
              <SectionHeading
                as="h1"
                eyebrow={t.blog.eyebrow}
                title={t.blog.title}
                description={t.blog.description}
              />
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {sorted.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}