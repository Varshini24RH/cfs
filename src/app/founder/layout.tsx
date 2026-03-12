import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Founder Satish Bachala",
  description:
    "Read the story of Satish Bachala, founder of CFS9, and his journey building a premium fitness brand in Hyderabad.",
  path: "/founder",
  keywords: [
    "Satish Bachala",
    "CFS9 founder",
    "fitness entrepreneur Hyderabad",
    "celebrity trainer Hyderabad",
    "CFS9 gym owner",
  ],
});

export default function FounderLayout({ children }: { children: ReactNode }) {
  return children;
}