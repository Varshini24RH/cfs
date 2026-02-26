import HeroSection from "@/components/home/HeroSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import TrainersSection from "@/components/home/TrainersSection";
import StatsSection from "@/components/home/StatsSection";
import FounderSection from "@/components/home/FounderSection";
import BranchesSection from "@/components/home/BranchesSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProgramsSection />
      <StatsSection />
      <FounderSection />
      <TrainersSection />
      <BranchesSection />
      <CTASection />
    </>
  );
}
