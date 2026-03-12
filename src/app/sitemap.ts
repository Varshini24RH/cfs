import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/programs",
    "/coaching",
    "/founder",
    "/about",
    "/branches",
    "/gallery",
    "/contact",
  ] as const;
  const lastModified = new Date();

  return routes.map((route) => ({
    url: new URL(route, siteConfig.url).toString(),
    lastModified,
    changeFrequency: route === "/" || route === "/gallery" ? "weekly" : route === "/contact" ? "yearly" : "monthly",
    priority: route === "/" ? 1 : route === "/contact" ? 0.9 : route === "/about" || route === "/gallery" ? 0.7 : 0.8,
  }));
}
