const env = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://view.sa",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "+966564893699",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "+966564893699",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "hello@view.sa",
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
  gscVerification: process.env.NEXT_PUBLIC_GSC_VERIFICATION ?? "",
};

const formatPhoneDisplay = (raw: string) => {
  const cleaned = raw.replace(/[^\d+]/g, "");
  const digits = cleaned.replace(/^\+?966/, "").replace(/^0/, "");
  if (digits.length !== 9) return raw;
  return `+966 ${digits.slice(0, 2)} ${digits.slice(2, 5)} ${digits.slice(5)}`;
};

const normalizeDigits = (raw: string) => raw.replace(/[^\d]/g, "");

export const siteConfig = {
  name: "View",
  nameAr: "فيو",
  url: env.url,
  phone: env.phone,
  phoneDisplay: formatPhoneDisplay(env.phone),
  phoneDigits: normalizeDigits(env.phone),
  whatsapp: env.whatsapp,
  whatsappDigits: normalizeDigits(env.whatsapp),
  email: env.email,
  gaId: env.gaId,
  gscVerification: env.gscVerification,
  location: "الدمام",
  region: "المنطقة الشرقية",
  country: "SA",
  countryName: "المملكة العربية السعودية",
  locale: "ar_SA",
  founded: "2013",
  title:
    "فيو | توريد وتركيب الرخام والمغاسل ودرج السلالم في الدمام والمنطقة الشرقية",
  description:
    "شركة فيو متخصصة في توريد وتركيب الرخام، المغاسل الرخامية، درج السلالم، وواجهات الرخام الفاخرة في الدمام والخبر والظهران والجبيل والمنطقة الشرقية بجودة تناسب الفلل والقصور والمشاريع التجارية.",
  geo: {
    latitude: 26.4207,
    longitude: 50.0888,
  },
  address: {
    street: "المنطقة الشرقية",
    city: "الدمام",
    region: "المنطقة الشرقية",
    postalCode: "31411",
    country: "SA",
  },
  openingHours: {
    days: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
    opens: "08:00",
    closes: "22:00",
  },
  serviceAreas: [
    "الدمام",
    "الخبر",
    "الظهران",
    "الجبيل",
    "القطيف",
    "سيهات",
    "صفوى",
    "رأس تنورة",
    "بقيق",
  ],
  navItems: [
    { label: "الرئيسية", href: "/" },
    { label: "خدماتنا", href: "/services" },
    { label: "المناطق", href: "/areas" },
    { label: "المدونة", href: "/blog" },
    { label: "تواصل", href: "/contact" },
  ],
  sameAs: [
    "https://www.google.com/maps",
    "https://www.instagram.com/view.sa",
    "https://twitter.com/view_sa",
    "https://www.tiktok.com/@view.sa",
  ],
} as const;