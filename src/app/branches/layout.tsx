import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Gym Branches in Hyderabad",
  description:
    "Find CFS9 gym branches in Kondapur and Madhapur, Hyderabad, with location details, facilities, timings, and directions.",
  path: "/branches",
  keywords: [
    "CFS9 branches",
    "gym Kondapur",
    "gym Madhapur",
    "gym near me Hyderabad",
    "CFS9 locations",
    "gym Jubilee Hills",
  ],
});

export default function BranchesLayout({ children }: { children: ReactNode }) {
  return children;
}