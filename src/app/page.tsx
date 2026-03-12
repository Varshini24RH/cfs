import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import LocationsSection from "@/components/home/LocationsSection";
import TransformationsSection from "@/components/home/TransformationsSection";
import CTASection from "@/components/home/CTASection";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Premium Gym in Hyderabad",
  description:
    "Train at CFS9 with premium equipment, expert coaches, and personalized fitness programs in Kondapur and Madhapur, Hyderabad.",
  path: "/",
  keywords: [
    "premium gym Hyderabad",
    "fitness center Kondapur",
    "fitness center Madhapur",
    "personal training Hyderabad",
  ],
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <WhyChooseSection />
      <LocationsSection />
      <TransformationsSection />
      <CTASection />
    </>
  );
}

