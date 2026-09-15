import type { ReactNode } from "react";
import type { Viewport } from "next";
import { Analytics } from "@/components/layout/analytics";
import { CallFloat } from "@/components/layout/call-float";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { SkipToContent } from "@/components/layout/skip-to-content";
import { StickyContactBar } from "@/components/layout/sticky-contact-bar";
import { WhatsappFloat } from "@/components/layout/whatsapp-float";
import { GlobalStructuredData } from "@/components/seo/global-structured-data";
import { siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/seo";
import "./globals.css";

export const metadata = createMetadata();

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f1e7" },
    { media: "(prefers-color-scheme: dark)", color: "#1b1712" },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

const gtmScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${siteConfig.gtmId}');`;

const googleAdsScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${siteConfig.googleAdsId}');
`;

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: gtmScript }} />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.googleAdsId}`} />
        <script dangerouslySetInnerHTML={{ __html: googleAdsScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans bg-background text-foreground antialiased">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${siteConfig.gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <SkipToContent />
        <ScrollProgress />
        <GlobalStructuredData />
        <Analytics />
        <div className="min-h-screen pb-24 md:pb-0">{children}</div>
        <ScrollToTop />
        <WhatsappFloat />
        <CallFloat />
        <StickyContactBar />
      </body>
    </html>
  );
}