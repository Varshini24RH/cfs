import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "CFS9 Gallery",
  description:
    "Browse photos of the CFS9 gym floor, training environment, coaches, equipment, and community across our Hyderabad branches.",
  path: "/gallery",
});

export default function GalleryLayout({ children }: { children: ReactNode }) {
  return children;
}