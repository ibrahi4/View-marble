import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo";

const businessName = `${siteConfig.name} ${siteConfig.nameAr}`;

const serviceNames = [
  "\u062A\u0648\u0631\u064A\u062F \u0648\u062A\u0631\u0643\u064A\u0628 \u0627\u0644\u0631\u062E\u0627\u0645",
  "\u0645\u063A\u0627\u0633\u0644 \u0631\u062E\u0627\u0645 \u062A\u0641\u0635\u064A\u0644",
  "\u062F\u0631\u062C \u0627\u0644\u0633\u0644\u0627\u0644\u0645",
  "\u0631\u062E\u0627\u0645 \u0627\u0644\u0645\u0637\u0627\u0628\u062E \u0648\u0627\u0644\u0643\u0627\u0648\u0646\u062A\u0631\u0627\u062A",
  "\u0643\u0633\u0648\u0629 \u0627\u0644\u062C\u062F\u0631\u0627\u0646 \u0648\u0627\u0644\u0623\u0631\u0636\u064A\u0627\u062A",
  "\u0635\u064A\u0627\u0646\u0629 \u0648\u062A\u0644\u0645\u064A\u0639 \u0627\u0644\u0631\u062E\u0627\u0645",
] as const;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: businessName,
    url: absoluteUrl("/"),
    email: siteConfig.email,
    telephone: `+${siteConfig.whatsapp}`,
    logo: absoluteUrl("/icon"),
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
    telephone: `+${siteConfig.whatsapp}`,
    image: absoluteUrl("/opengraph-image"),
    priceRange: "SAR",
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location,
      addressRegion: siteConfig.region,
      addressCountry: "SA",
    },
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    serviceType: [...serviceNames],
    knowsAbout: [...serviceNames],
    availableLanguage: ["ar", "en"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "22:00",
      },
    ],
  };
}

export function servicesListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": absoluteUrl("/#services"),
    name: "\u062E\u062F\u0645\u0627\u062A View",
    itemListElement: serviceNames.map((name, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
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