import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";

import { Analytics } from "@/components/layout/analytics";
import { CallFloat } from "@/components/layout/call-float";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { SkipToContent } from "@/components/layout/skip-to-content";
import { StickyContactBar } from "@/components/layout/sticky-contact-bar";
import { WhatsappFloat } from "@/components/layout/whatsapp-float";
import { GlobalStructuredData } from "@/components/seo/global-structured-data";
import { createMetadata } from "@/lib/seo";

import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-cairo",
  preload: true,
  adjustFontFallback: true,
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  ...createMetadata(),

  icons: {
    icon: [
      {
        url: "/images/logo.jpg",
        type: "image/jpeg",
      },
    ],
    shortcut: ["/images/logo.jpg"],
    apple: ["/images/logo.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f1e7" },
    { media: "(prefers-color-scheme: dark)", color: "#1b1712" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link
          rel="preconnect"
          href="https://images.unsplash.com"
          crossOrigin=""
        />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>

      <body
        suppressHydrationWarning
        className={`${cairo.variable} font-sans bg-background text-foreground antialiased`}
      >
        <SkipToContent />
        <ScrollProgress />
        <GlobalStructuredData />
        <Analytics />

        <div className="min-h-screen pb-24 md:pb-0">
          {children}
        </div>

        <ScrollToTop />
        <WhatsappFloat />
        <CallFloat />
        <StickyContactBar />
      </body>
    </html>
  );
}