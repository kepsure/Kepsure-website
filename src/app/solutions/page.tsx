import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SolutionsIndexHero } from "@/components/SolutionsIndexHero";
import { SolutionsCardGrid } from "@/components/SolutionsCardGrid";
import { CTABanner } from "@/components/CTABanner";

export const metadata = {
  title: "Solutions",
  description:
    "Cyber security, IT infrastructure, data backup & recovery, email, software licensing and enterprise solutions — engineered, deployed and supported by Kepsure.",
};

export default function SolutionsIndex() {
  return (
    <>
      <Header />
      <main>
        <SolutionsIndexHero
          breadcrumbs={[
            { href: "/", label: "Home" },
            { label: "Solutions" },
          ]}
        />
        <SolutionsCardGrid />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
