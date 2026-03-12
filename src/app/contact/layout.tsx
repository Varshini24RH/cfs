import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact CFS9",
  description:
    "Contact CFS9 for memberships, free trials, program enquiries, and branch details for Kondapur and Madhapur in Hyderabad.",
  path: "/contact",
  keywords: [
    "contact CFS9",
    "gym membership Hyderabad",
    "free gym trial Hyderabad",
    "CFS9 phone number",
    "join CFS9 gym",
  ],
});

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}