import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  metadataBase: new URL("https://cfs9.vercel.app"),
  title: {
    default: "CFS9 — Central Fitness Station | Premium Gym in Hyderabad",
    template: "%s | CFS9 — Central Fitness Station",
  },
  description:
    "CFS9 — Central Fitness Station. Premium gym with world-class equipment, expert coaches, and personalized training programs. Branches in Kondapur & Madhapur, Hyderabad.",
  keywords: [
    "CFS9", "Central Fitness Station", "gym Hyderabad", "gym Kondapur",
    "gym Madhapur", "fitness center", "bodybuilding", "personal training",
    "strength training", "best gym Hyderabad",
  ],
  authors: [{ name: "CFS9 — Central Fitness Station" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://cfs9.vercel.app",
    siteName: "CFS9 — Central Fitness Station",
    title: "CFS9 — Central Fitness Station | Premium Gym in Hyderabad",
    description:
      "Premium gym with world-class equipment, expert coaches, and personalized training programs in Kondapur & Madhapur, Hyderabad.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "CFS9 Gym" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CFS9 — Central Fitness Station",
    description: "Premium gym in Kondapur & Madhapur, Hyderabad.",
  },
  robots: { index: true, follow: true },
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
              "telephone": "+91-90001-90009",
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
                  addressRegion: "Telangana",
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
              image: "/og-image.jpg",
              sameAs: [
                "https://instagram.com/cfs9gym",
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
