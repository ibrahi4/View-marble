import { JsonLd } from "@/components/seo/json-ld";
import {
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