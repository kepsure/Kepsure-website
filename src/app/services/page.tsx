import Link from "next/link";
import {
  Compass,
  Workflow,
  ShieldAlert,
  Wrench,
  Activity,
  Users,
  ClipboardList,
  ArrowUpRight,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";

export const metadata = {
  title: "Services",
  description:
    "Consulting, implementation, AMC, managed services, security operations and IT staff augmentation — Kepsure delivers across the full IT lifecycle.",
};

const SERVICES = [
  {
    icon: Compass,
    title: "IT Consulting & Advisory",
    body: "Architecture reviews, technology selection, vendor evaluations and 5-year IT roadmap — output is a board-ready document, not a Visio diagram.",
  },
  {
    icon: Workflow,
    title: "Implementation & Migration",
    body: "Greenfield builds, brownfield refresh and platform migrations with weekend cutover windows that respect your business calendar.",
  },
  {
    icon: Wrench,
    title: "Annual Maintenance Contracts",
    body: "Preventive and breakfix AMC for compute, network, security and end-user devices. Tiered SLAs with monthly service reviews.",
  },
  {
    icon: Activity,
    title: "Managed IT Services",
    body: "Fully managed operations — monitoring, patching, backup health, capacity planning, incident response. We run it; you focus on growth.",
  },
  {
    icon: ShieldAlert,
    title: "Security Operations",
    body: "SIEM tuning, SOC build-out and 24×7 alert handling with playbooks that escalate the right things and silence the rest.",
  },
  {
    icon: Users,
    title: "Resident Engineers",
    body: "Senior on-site engineers — network, server, security or end-user computing — embedded in your team for project or steady-state windows.",
  },
  {
    icon: ClipboardList,
    title: "Audit & Compliance",
    body: "ISO 27001, RBI, SEBI, PCI-DSS gap analyses with evidence collection, remediation tracking and auditor-facing reports.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Services"
          title="The full IT lifecycle, run by one accountable team."
          description="Whether you need a consulting opinion, a project delivery partner or a managed-service backbone — Kepsure plugs in at the layer that fits."
          breadcrumbs={[
            { href: "/", label: "Home" },
            { label: "Services" },
          ]}
        />

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    className="group relative overflow-hidden rounded-2xl border border-mist-2 bg-white p-7 transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-900/5"
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-700 text-white">
                      <Icon className="h-6 w-6" strokeWidth={1.7} />
                    </div>
                    <h3 className="font-display mt-5 text-xl text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink/65">
                      {s.body}
                    </p>
                  </div>
                );
              })}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-700 to-brand-900 p-7 text-white">
                <div
                  className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-accent-500/30 blur-2xl"
                  aria-hidden
                />
                <h3 className="font-display relative text-xl">
                  Need something else?
                </h3>
                <p className="relative mt-3 text-sm text-white/75">
                  Our service catalogue is wider than this page. Tell us the
                  outcome you need and we&apos;ll scope what fits.
                </p>
                <Link
                  href="/contact"
                  className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-300 hover:text-white"
                >
                  Talk to us
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
