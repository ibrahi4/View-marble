import type { AreaItem } from "@/config/areas";
import type { BlogPost } from "@/config/blog";
import type { ServiceItem } from "@/config/services";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo";

const businessName = `${siteConfig.name} ${siteConfig.nameAr}`;

const serviceNames = [
  "توريد وتركيب الرخام",
  "مغاسل رخام تفصيل",
  "درج السلالم",
  "رخام المطابخ والكاونترات",
  "واجهات الرخام",
  "صيانة وتلميع الرخام",
] as const;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: businessName,
    alternateName: [siteConfig.name, siteConfig.nameAr],
    url: absoluteUrl("/"),
    email: siteConfig.email,
    telephone: siteConfig.phone,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/icon"),
    },
    foundingDate: siteConfig.founded,
    sameAs: [...siteConfig.sameAs],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: businessName,
    url: absoluteUrl("/"),
    inLanguage: "ar-SA",
    publisher: {
      "@id": absoluteUrl("/#organization"),
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": absoluteUrl("/#local-business"),
    name: businessName,
    description: siteConfig.description,
    url: absoluteUrl("/"),
    email: siteConfig.email,
    telephone: siteConfig.phone,
    image: [absoluteUrl("/opengraph-image")],
    priceRange: "SAR",
    currenciesAccepted: "SAR",
    paymentAccepted: "Cash, Bank Transfer",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    hasMap: `https://www.google.com/maps?q=${siteConfig.geo.latitude},${siteConfig.geo.longitude}`,
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: siteConfig.region,
      },
    })),
    serviceType: [...serviceNames],
    knowsAbout: [...serviceNames],
    availableLanguage: ["ar", "en"],
    sameAs: [...siteConfig.sameAs],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...siteConfig.openingHours.days],
        opens: siteConfig.openingHours.opens,
        closes: siteConfig.openingHours.closes,
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        contactType: "customer service",
        areaServed: "SA",
        availableLanguage: ["ar", "en"],
      },
    ],
  };
}

export function servicesListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": absoluteUrl("/#services"),
    name: "خدمات View",
    itemListElement: serviceNames.map((name, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function serviceSchema(service: ServiceItem) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": absoluteUrl(`/services/${service.slug}#service`),
    name: service.title,
    description: service.metaDescription,
    url: absoluteUrl(`/services/${service.slug}`),
    image: absoluteUrl(service.image),
    serviceType: service.title,
    category: "الرخام والتشطيبات",
    provider: {
      "@id": absoluteUrl("/#organization"),
    },
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    audience: {
      "@type": "Audience",
      audienceType: "الفلل والقصور والمشاريع التجارية",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "SAR",
      availability: "https://schema.org/InStock",
      seller: {
        "@id": absoluteUrl("/#organization"),
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.title,
      itemListElement: service.useCases.map((useCase, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: useCase,
        },
      })),
    },
  };
}

export function areaServiceSchema(area: AreaItem) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": absoluteUrl(`/areas/${area.slug}#service`),
    name: `خدمات الرخام في ${area.name}`,
    description: area.metaDescription,
    url: absoluteUrl(`/areas/${area.slug}`),
    provider: {
      "@id": absoluteUrl("/#organization"),
    },
    areaServed: {
      "@type": "City",
      name: area.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: siteConfig.region,
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `خدمات فيو في ${area.name}`,
      itemListElement: area.services.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service,
        },
      })),
    },
  };
}

export function articleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": absoluteUrl(`/blog/${post.slug}#article`),
    headline: post.title,
    description: post.excerpt,
    image: [absoluteUrl(post.cover)],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    inLanguage: "ar-SA",
    articleSection: post.category,
    keywords: [...post.keywords],
    wordCount: post.content.reduce((sum, block) => {
      if (block.type === "list") {
        return sum + block.items.reduce((s, i) => s + i.split(/\s+/).length, 0);
      }
      return sum + (block.text?.split(/\s+/).length ?? 0);
    }, 0),
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@id": absoluteUrl("/#organization"),
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/blog/${post.slug}`),
    },
  };
}