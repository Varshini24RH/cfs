import type { MetadataRoute } from "next";
import { siteConfig, shouldIndex } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: shouldIndex
      ? {
          userAgent: "*",
          allow: "/",
        }
      : {
          userAgent: "*",
          disallow: "/",
        },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
