import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { SolutionsGrid } from "@/components/SolutionsGrid";
import { StatsBand } from "@/components/StatsBand";
import { ProcessSteps } from "@/components/ProcessSteps";
import { WhyKepsure } from "@/components/WhyKepsure";
import { IndustriesStrip } from "@/components/IndustriesStrip";
import { CTABanner } from "@/components/CTABanner";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <SolutionsGrid />
        <StatsBand />
        <ProcessSteps />
        <WhyKepsure />
        <IndustriesStrip />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
