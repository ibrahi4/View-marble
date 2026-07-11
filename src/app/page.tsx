import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { HomeAboutPreview } from "@/components/sections/home/home-about-preview";
import { HomeCoverage } from "@/components/sections/home/home-coverage";
import { HomeFaq } from "@/components/sections/home/home-faq";
import { HomeFinalCta } from "@/components/sections/home/home-final-cta";
import { HomeHero } from "@/components/sections/home/home-hero";
import { HomeProcess } from "@/components/sections/home/home-process";
import { HomeProjects } from "@/components/sections/home/home-projects";
import { HomeServices } from "@/components/sections/home/home-services";
import { HomeTestimonials } from "@/components/sections/home/home-testimonials";
import { HomeTrust } from "@/components/sections/home/home-trust";
import { Newsletter } from "@/components/sections/shared/newsletter";
import { Reveal } from "@/components/shared/reveal";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main id="main-content">
        <HomeHero />

        <Reveal>
          <HomeTrust />
        </Reveal>
        <Reveal>
          <HomeServices />
        </Reveal>
        <Reveal>
          <HomeProjects />
        </Reveal>
        <Reveal>
          <HomeAboutPreview />
        </Reveal>
        <Reveal>
          <HomeCoverage />
        </Reveal>
        <Reveal>
          <HomeProcess />
        </Reveal>
        <Reveal>
          <HomeTestimonials />
        </Reveal>
        <Reveal>
          <HomeFaq />
        </Reveal>
        <Reveal>
          <Newsletter />
        </Reveal>
        <Reveal>
          <HomeFinalCta />
        </Reveal>
      </main>

      <SiteFooter />
    </>
  );
}