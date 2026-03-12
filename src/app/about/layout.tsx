import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About CFS9",
  description:
    "Learn how CFS9 grew into a results-driven premium gym in Hyderabad, built around expert coaching, elite equipment, and a strong fitness community.",
  path: "/about",
  keywords: [
    "about CFS9",
    "CFS9 gym story",
    "premium gym Hyderabad",
    "fitness community Hyderabad",
    "CFS9 values",
  ],
});

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}