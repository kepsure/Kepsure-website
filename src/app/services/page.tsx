import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServicesHero } from "@/components/ServicesHero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { CTABanner } from "@/components/CTABanner";

export const metadata = {
  title: "Services",
  description:
    "Consulting, implementation, AMC, managed services, security operations and IT staff augmentation — Kepsure delivers across the full IT lifecycle.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesHero
          breadcrumbs={[
            { href: "/", label: "Home" },
            { label: "Services" },
          ]}
        />
        <ServicesGrid />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
