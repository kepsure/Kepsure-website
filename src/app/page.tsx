import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { SolutionsGrid } from "@/components/SolutionsGrid";
import { StatsBand } from "@/components/StatsBand";
import { WhyKepsure } from "@/components/WhyKepsure";
import { Testimonials } from "@/components/Testimonials";
import { IndustriesStrip } from "@/components/IndustriesStrip";
import { CTABanner } from "@/components/CTABanner";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SolutionsGrid />
        <StatsBand />
        <WhyKepsure />
        <Testimonials />
        <IndustriesStrip />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
