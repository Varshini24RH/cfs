import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig, shouldIndex } from "@/lib/seo";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "CFS9 — Central Fitness Station | Premium Gym in Hyderabad",
    template: "%s | CFS9 — Central Fitness Station",
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "CFS9", "Central Fitness Station", "gym Hyderabad", "gym Kondapur",
    "gym Madhapur", "fitness center", "bodybuilding", "personal training",
    "strength training", "best gym Hyderabad",
  ],
  authors: [{ name: "CFS9 — Central Fitness Station" }],
  creator: "CFS9 — Central Fitness Station",
  publisher: "CFS9 — Central Fitness Station",
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.shortName,
    title: "CFS9 — Central Fitness Station | Premium Gym in Hyderabad",
    description: siteConfig.description,
    images: [{ url: siteConfig.defaultOgImage, width: 1200, height: 630, alt: "CFS9 Gym" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CFS9 — Central Fitness Station",
    description: "Premium gym in Kondapur & Madhapur, Hyderabad.",
    images: [siteConfig.defaultOgImage],
  },
  robots: shouldIndex
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      }
    : {
        index: false,
        follow: false,
        googleBot: {
          index: false,
          follow: false,
        },
      },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${inter.variable} antialiased bg-background text-foreground`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HealthClub",
              name: "CFS9 — Central Fitness Station",
              description: "Premium gym with world-class equipment and expert coaches in Hyderabad",
              url: "https://cfs9.vercel.app",
              "telephone": "+91-88865-64999",
              address: [
                {
                  "@type": "PostalAddress",
                  streetAddress: "Kondapur Main Road",
                  addressLocality: "Kondapur",
                  addressRegion: "Telangana",
                  postalCode: "500084",
                  addressCountry: "IN",
                },
                {
                  "@type": "PostalAddress",
                  streetAddress: "Madhapur Hi-Tech City Road",
                  addressLocality: "Madhapur",
                  url: siteConfig.url,
                  postalCode: "500081",
                  addressCountry: "IN",
                },
              ],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                opens: "05:00",
                closes: "22:00",
              },
              priceRange: "$$",
              image: new URL(siteConfig.defaultOgImage, siteConfig.url).toString(),
              sameAs: [
                "https://www.instagram.com/cfs9_gym_madhapur/",
                "https://facebook.com/cfs9gym",
                "https://youtube.com/@cfs9gym",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
