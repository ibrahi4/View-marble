import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} ${siteConfig.nameAr}`,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f8f4ed",
    theme_color: "#4f463c",
    lang: "ar-SA",
    dir: "rtl",
  };
}