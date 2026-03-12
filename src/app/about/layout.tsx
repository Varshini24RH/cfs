import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About CFS9",
  description:
    "Learn how CFS9 grew into a results-driven premium gym in Hyderabad, built around expert coaching, elite equipment, and a strong fitness community.",
  path: "/about",
});

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}