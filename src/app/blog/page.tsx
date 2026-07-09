import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionHeading } from "@/components/shared/section-heading";
import { PostCard } from "@/components/sections/blog/post-card";
import { blogPosts } from "@/config/blog";
import { createMetadata } from "@/lib/seo";

export const revalidate = 86400;

export const metadata: Metadata = createMetadata({
  title: "\u0627\u0644\u0645\u062F\u0648\u0646\u0629",
  description:
    "\u0645\u0642\u0627\u0644\u0627\u062A \u0648\u0646\u0635\u0627\u0626\u062D \u0645\u062A\u062E\u0635\u0635\u0629 \u0641\u064A \u0627\u062E\u062A\u064A\u0627\u0631 \u0648\u062A\u0631\u0643\u064A\u0628 \u0648\u0635\u064A\u0627\u0646\u0629 \u0627\u0644\u0631\u062E\u0627\u0645 \u0645\u0646 \u0641\u064A\u0648 View \u0641\u064A \u0627\u0644\u062F\u0645\u0627\u0645 \u0648\u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0634\u0631\u0642\u064A\u0629.",
  path: "/blog",
});

export default function BlogPage() {
  const sorted = [...blogPosts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

  return (
    <>
      <SiteHeader />

      <main id="main-content">
        <section className="border-b border-border/70">
          <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <Breadcrumbs
              items={[
                { name: "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629", href: "/" },
                { name: "\u0627\u0644\u0645\u062F\u0648\u0646\u0629", href: "/blog" },
              ]}
            />

            <div className="mt-6">
              <SectionHeading
                eyebrow="INSIGHTS"
                title={"\u0645\u0642\u0627\u0644\u0627\u062A \u0645\u062A\u062E\u0635\u0635\u0629 \u0641\u064A \u0639\u0627\u0644\u0645 \u0627\u0644\u0631\u062E\u0627\u0645"}
                description={"\u0646\u0635\u0627\u0626\u062D \u0645\u062E\u062A\u0635\u0629 \u0645\u0646 \u0641\u0631\u064A\u0642 View \u062A\u0633\u0627\u0639\u062F\u0643 \u0641\u064A \u0627\u062A\u062E\u0627\u0630 \u0627\u0644\u0642\u0631\u0627\u0631\u0627\u062A \u0627\u0644\u0623\u0646\u0633\u0628 \u0644\u0627\u062E\u062A\u064A\u0627\u0631 \u0648\u062A\u0646\u0641\u064A\u0630 \u0648\u0635\u064A\u0627\u0646\u0629 \u0627\u0644\u0631\u062E\u0627\u0645."}
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