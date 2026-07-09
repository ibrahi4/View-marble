import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type CreateMetadataParams = {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
};

const defaultKeywords = [
  "\u062A\u0648\u0631\u064A\u062F \u0648\u062A\u0631\u0643\u064A\u0628 \u0627\u0644\u0631\u062E\u0627\u0645",
  "\u0645\u063A\u0627\u0633\u0644 \u0631\u062E\u0627\u0645",
  "\u062F\u0631\u062C \u0627\u0644\u0633\u0644\u0627\u0644\u0645 \u0631\u062E\u0627\u0645",
  "\u0631\u062E\u0627\u0645 \u0627\u0644\u062F\u0645\u0627\u0645",
  "\u0631\u062E\u0627\u0645 \u0627\u0644\u062E\u0628\u0631",
  "\u0631\u062E\u0627\u0645 \u0627\u0644\u0638\u0647\u0631\u0627\u0646",
  "\u0631\u062E\u0627\u0645 \u0627\u0644\u062C\u0628\u064A\u0644",
  "\u062A\u0641\u0635\u064A\u0644 \u0645\u063A\u0627\u0633\u0644 \u0631\u062E\u0627\u0645",
  "\u0635\u064A\u0627\u0646\u0629 \u0648\u062A\u0644\u0645\u064A\u0639 \u0627\u0644\u0631\u062E\u0627\u0645",
] as const;

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, siteConfig.url).toString();
}

export function createMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  noIndex = false,
}: CreateMetadataParams = {}): Metadata {
  const pageDescription = description ?? siteConfig.description;
  const canonicalUrl = absoluteUrl(path);
  const businessName = `${siteConfig.name} ${siteConfig.nameAr}`;
  const resolvedKeywords = Array.from(new Set([...defaultKeywords, ...keywords]));
  const ogImage = absoluteUrl("/opengraph-image");

  return {
    metadataBase: new URL(siteConfig.url),
    title: title
      ? title
      : {
          default: siteConfig.title,
          template: `%s | ${siteConfig.name}`,
        },
    description: pageDescription,
    applicationName: businessName,
    manifest: "/manifest.webmanifest",
    keywords: resolvedKeywords,
    alternates: {
      canonical: canonicalUrl,
    },
    category: "\u0627\u0644\u0631\u062E\u0627\u0645 \u0648\u0627\u0644\u062A\u0634\u0637\u064A\u0628",
    openGraph: {
      type: "website",
      locale: "ar_SA",
      url: canonicalUrl,
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.title,
      description: pageDescription,
      siteName: businessName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: businessName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.title,
      description: pageDescription,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}