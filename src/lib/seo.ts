import type { Metadata } from "next";

export const siteConfig = {
  name: "CFS9 — Central Fitness Station",
  shortName: "CFS9 — Central Fitness Station",
  description:
    "Premium gym in Hyderabad with expert coaches, world-class equipment, and personalized fitness programs across Kondapur and Madhapur.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.cfs9gym.com",
  locale: "en_IN",
  defaultOgImage: "/opengraph-image",
} as const;

export const shouldIndex = process.env.VERCEL_ENV !== "preview";

type BuildPageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
};

export function buildPageMetadata({
  title,
  description,
  path,
  image = siteConfig.defaultOgImage,
  keywords,
}: BuildPageMetadataInput): Metadata {
  const absoluteUrl = new URL(path, siteConfig.url).toString();
  const fullTitle = `${title} | ${siteConfig.shortName}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: absoluteUrl,
      siteName: siteConfig.shortName,
      title: fullTitle,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}