import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type CreateMetadataParams = {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
  ogImage?: string;
};

const defaultKeywords = [
  "توريد وتركيب الرخام",
  "مغاسل رخام",
  "درج السلالم رخام",
  "واجهات رخام",
  "رخام الدمام",
  "رخام الخبر",
  "رخام الظهران",
  "رخام الجبيل",
  "تفصيل مغاسل رخام",
  "صيانة وتلميع الرخام",
  "رخام المنطقة الشرقية",
  "شركة رخام السعودية",
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
  ogImage,
}: CreateMetadataParams = {}): Metadata {
  const pageDescription = description ?? siteConfig.description;
  const canonicalUrl = absoluteUrl(path);
  const businessName = `${siteConfig.name} ${siteConfig.nameAr}`;
  const resolvedKeywords = Array.from(new Set([...defaultKeywords, ...keywords]));
  const image = ogImage ? absoluteUrl(ogImage) : absoluteUrl("/opengraph-image");

  const resolvedTitle = title
    ? { absolute: `${title} | ${businessName}` }
    : {
        default: siteConfig.title,
        template: `%s | ${businessName}`,
      };

  return {
    metadataBase: new URL(siteConfig.url),
    title: resolvedTitle,
    description: pageDescription,
    applicationName: businessName,
    authors: [{ name: businessName, url: siteConfig.url }],
    creator: businessName,
    publisher: businessName,
    generator: "Next.js",
    keywords: resolvedKeywords,
    referrer: "origin-when-cross-origin",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "ar-SA": canonicalUrl,
        "x-default": canonicalUrl,
      },
    },
    category: "الرخام والتشطيبات",
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: canonicalUrl,
      title: title ? `${title} | ${businessName}` : siteConfig.title,
      description: pageDescription,
      siteName: businessName,
      countryName: siteConfig.countryName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: businessName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${businessName}` : siteConfig.title,
      description: pageDescription,
      images: [image],
    },
    verification: siteConfig.gscVerification
      ? { google: siteConfig.gscVerification }
      : undefined,
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: { index: false, follow: false },
        }
      : {
          index: true,
          follow: true,
          nocache: false,
          googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

export function createArticleMetadata(params: {
  title: string;
  description: string;
  path: string;
  publishedTime: string;
  modifiedTime: string;
  authors: string[];
  keywords?: string[];
  ogImage?: string;
}): Metadata {
  const base = createMetadata({
    title: params.title,
    description: params.description,
    path: params.path,
    keywords: params.keywords,
    ogImage: params.ogImage,
  });

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: params.publishedTime,
      modifiedTime: params.modifiedTime,
      authors: params.authors,
    },
  };
}