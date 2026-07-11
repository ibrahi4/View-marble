import { JsonLd } from "@/components/seo/json-ld";
import { faqItems } from "@/config/faq";
import {
  faqSchema,
  localBusinessSchema,
  organizationSchema,
  servicesListSchema,
  websiteSchema,
} from "@/lib/schema";

const structuredData = [
  organizationSchema(),
  websiteSchema(),
  localBusinessSchema(),
  servicesListSchema(),
  faqSchema([...faqItems]),
] as const;

export function GlobalStructuredData() {
  return (
    <>
      {structuredData.map((item, index) => (
        <JsonLd key={`structured-data-${index}`} data={item} />
      ))}
    </>
  );
}