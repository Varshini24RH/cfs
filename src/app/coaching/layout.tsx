import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Personal Trainers and Coaches",
  description:
    "Meet the certified CFS9 coaching team specializing in strength training, body transformation, nutrition, functional training, and rehabilitation.",
  path: "/coaching",
  keywords: [
    "personal trainer Hyderabad",
    "fitness coach Kondapur",
    "CFS9 trainers",
    "certified gym coach",
    "body transformation coach",
    "strength training coach Hyderabad",
  ],
});

export default function CoachingLayout({ children }: { children: ReactNode }) {
  return children;
}