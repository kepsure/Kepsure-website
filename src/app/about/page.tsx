import Link from "next/link";
import { ArrowUpRight, Target, Compass, HeartHandshake } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { StatsBand } from "@/components/StatsBand";
import { CTABanner } from "@/components/CTABanner";

export const metadata = {
  title: "About",
  description:
    "Kepsure Solutions Pvt. Ltd. — engineers who came from inside enterprise IT, now building turnkey solutions for the businesses that depend on it.",
};

const VALUES = [
  {
    icon: Target,
    title: "Engineering before sales",
    body: "Every recommendation is signed off by a senior engineer. The first person you meet is also the person who will own the design.",
  },
  {
    icon: Compass,
    title: "Vendor-neutral by default",
    body: "We resell what we&apos;ve audited and trust. We&apos;ll happily say no to a deal if the gear isn&apos;t the right fit for your environment.",
  },
  {
    icon: HeartHandshake,
    title: "Long relationships over fast deals",
    body: "Most of our customer base has been with us for 5+ years. The next quote we send isn&apos;t a sales event — it&apos;s a continuation.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="About Kepsure"
          title="Built by engineers. For the businesses they used to work in."
          description="Kepsure Solutions Pvt. Ltd. was founded by a small team of senior IT operators who&apos;d run platforms inside banks, factories and BPOs. The promise was simple — apply that internal-team rigour as a service."
          breadcrumbs={[
            { href: "/", label: "Home" },
            { label: "About" },
          ]}
        />

        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent-600">
                Our story
              </span>
              <h2 className="font-display mt-3 text-3xl text-ink md:text-4xl">
                A turnkey IT partner for businesses that take uptime seriously.
              </h2>
              <div className="mt-6 space-y-4 text-ink/70 leading-relaxed">
                <p>
                  Kepsure was set up to fix a specific frustration — that most
                  IT vendors sell boxes, then disappear. Our founders had run
                  enterprise IT operations from the inside, and knew what
                  &ldquo;good support&rdquo; actually feels like: senior
                  engineers on first response, change windows that respect
                  business calendars, and post-incident reviews that improve
                  the system instead of assigning blame.
                </p>
                <p>
                  Today, Kepsure delivers across six solution lines — cyber
                  security, IT infrastructure, data backup &amp; recovery,
                  email, software licensing and enterprise platforms — for
                  customers across manufacturing, BFSI, healthcare and
                  professional services.
                </p>
                <p>
                  We are headquartered in India and operate as an authorised
                  partner / reseller for Cisco, Microsoft, VMware, Barracuda,
                  Sophos, Veeam, Fortinet, HPE, Dell and more. Every one of our
                  15+ engineers carries OEM certification, and we hold internal
                  process accreditations aligned to ISO 27001.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-8 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-[0.28em] text-accent-600">
                  At a glance
                </span>
                <dl className="mt-5 divide-y divide-brand-100 text-sm">
                  {[
                    ["Entity", "Kepsure Solutions Pvt. Ltd."],
                    ["Tagline", "A Total IT Solution Provider"],
                    ["Headquarters", "India"],
                    ["Engineers", "15+ certified"],
                    ["Industries", "Manufacturing, BFSI, Healthcare, more"],
                    ["Support hours", "10:00 AM – 6:00 PM, Mon–Sat"],
                    ["Email", "hradmin@kepsure.com"],
                    ["Phone", "+91 99044 08606"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-6 py-3.5">
                      <dt className="text-ink/55">{k}</dt>
                      <dd className="text-right font-semibold text-ink">{v}</dd>
                    </div>
                  ))}
                </dl>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
                >
                  Reach the team
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <StatsBand />

        <section className="bg-mist py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent-600">
                What we believe
              </span>
              <h2 className="font-display mt-3 text-3xl text-ink md:text-4xl">
                Three principles, applied without exception.
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {VALUES.map((v) => {
                const Icon = v.icon;
                return (
                  <div
                    key={v.title}
                    className="rounded-2xl border border-mist-2 bg-white p-7 shadow-sm"
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                      <Icon className="h-6 w-6" strokeWidth={1.7} />
                    </div>
                    <h3 className="font-display mt-5 text-xl text-ink">
                      {v.title}
                    </h3>
                    <p
                      className="mt-3 text-sm leading-relaxed text-ink/65"
                      dangerouslySetInnerHTML={{ __html: v.body }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
