import { siteConfig } from "@/config/site";
import type { QuoteFormValues } from "@/lib/quote-schema";

export function buildQuoteWhatsappUrl(values: QuoteFormValues) {
  const lines = [
    "\u0637\u0644\u0628 \u0639\u0631\u0636 \u0633\u0639\u0631 - View \u0641\u064A\u0648",
    "",
    `\u0627\u0644\u0627\u0633\u0645: ${values.name}`,
    `\u0627\u0644\u062C\u0648\u0627\u0644: ${values.phone}`,
    `\u0627\u0644\u0645\u0646\u0637\u0642\u0629: ${values.area}`,
    `\u0627\u0644\u062E\u062F\u0645\u0629: ${values.service}`,
  ];

  if (values.message && values.message.trim().length > 0) {
    lines.push("", `\u062A\u0641\u0627\u0635\u064A\u0644 \u0625\u0636\u0627\u0641\u064A\u0629: ${values.message.trim()}`);
  }

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${siteConfig.whatsapp}?text=${text}`;
}