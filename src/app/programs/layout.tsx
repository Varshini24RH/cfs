import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Fitness Programs",
  description:
    "Explore CFS9 fitness programs including strength training, bodybuilding, CrossFit, HIIT, personal training, yoga, and nutrition coaching.",
  path: "/programs",
  keywords: [
    "gym programs Hyderabad",
    "strength training program",
    "bodybuilding Hyderabad",
    "CrossFit Hyderabad",
    "HIIT training",
    "personal training program",
    "yoga classes Hyderabad",
  ],
});

export default function ProgramsLayout({ children }: { children: ReactNode }) {
  return children;
}