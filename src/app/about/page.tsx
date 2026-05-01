"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowUpRight,
  Target,
  Compass,
  HeartHandshake,
  Sparkles,
  Building2,
  Phone,
  Mail,
  MapPin,
  Users,
  Clock,
  Tag,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutHero } from "@/components/AboutHero";
import { StatsBand } from "@/components/StatsBand";
import { CTABanner } from "@/components/CTABanner";

const ease = [0.16, 1, 0.3, 1] as const;

const VALUES = [
  {
    icon: Target,
    title: "Engineering before sales",
    body: "Every recommendation is signed off by a senior engineer. The first person you meet is also the person who will own the design.",
  },
  {
    icon: Compass,
    title: "Vendor-neutral by default",
    body: "We resell what we’ve audited and trust. We’ll happily say no to a deal if the gear isn’t the right fit for your environment.",
  },
  {
    icon: HeartHandshake,
    title: "Long relationships over fast deals",
    body: "Most of our customer base has been with us for 5+ years. The next quote we send isn’t a sales event — it’s a continuation.",
  },
];

const FACTS: { icon: typeof Building2; label: string; value: string }[] = [
  { icon: Building2, label: "Entity", value: "Kepsure Solutions Pvt. Ltd." },
  { icon: Tag, label: "Tagline", value: "A Total IT Solution Provider" },
  { icon: MapPin, label: "Headquarters", value: "Ahmedabad, Gujarat" },
  { icon: Users, label: "Engineers", value: "15+ OEM-certified" },
  { icon: Clock, label: "Support hours", value: "10:00 AM – 6:00 PM, Mon–Sat" },
  { icon: Mail, label: "Email", value: "hradmin@kepsure.com" },
  { icon: Phone, label: "Phone", value: "+91 99044 08606" },
];

const PARTNERS = [
  "Cisco",
  "Microsoft",
  "VMware",
  "Barracuda",
  "Sophos",
  "Veeam",
  "Fortinet",
  "HPE",
  "Dell",
  "Acronis",
  "CrowdStrike",
  "Aruba",
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero
          breadcrumbs={[
            { href: "/", label: "Home" },
            { label: "About" },
          ]}
        />

        <StorySection />
        <PartnersStrip />
        <StatsBand />
        <ValuesSection />

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}

/* ---------- Our story + at-a-glance card ---------- */

function StorySection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section className="bg-white py-20">
      <div ref={ref} className="mx-auto grid max-w-7xl gap-12 px-4 md:px-8 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, ease }}
          className="lg:col-span-7"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-accent-600">
            <Sparkles className="h-3.5 w-3.5" strokeWidth={2.2} />
            <span className="relative">
              Our story
              <motion.span
                initial={{ scaleX: 0, originX: 0 }}
                animate={inView ? { scaleX: 1 } : undefined}
                transition={{ duration: 0.8, delay: 0.4, ease }}
                className="absolute -bottom-1 left-0 right-0 h-px origin-left bg-accent-500"
              />
            </span>
          </span>
          <h2 className="font-display mt-4 text-3xl text-ink md:text-4xl">
            A turnkey IT partner for businesses that take{" "}
            <span className="text-gradient">uptime seriously.</span>
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/70 md:text-lg">
            <p>
              Kepsure was set up to fix a specific frustration — that most IT
              vendors sell boxes, then disappear. Our founders had run
              enterprise IT operations from the inside, and knew what
              &ldquo;good support&rdquo; actually feels like: senior engineers
              on first response, change windows that respect business
              calendars, and post-incident reviews that improve the system
              instead of assigning blame.
            </p>
            <p>
              Today, Kepsure delivers across six solution lines — cyber
              security, IT infrastructure, data backup &amp; recovery, email,
              software licensing and enterprise platforms — for customers
              across manufacturing, BFSI, healthcare and professional services.
            </p>
            <p>
              We are headquartered in Ahmedabad, Gujarat and operate as an
              authorised partner / reseller for Cisco, Microsoft, VMware,
              Barracuda, Sophos, Veeam, Fortinet, HPE, Dell and more. Every
              one of our 15+ engineers carries OEM certification, and we hold
              internal process accreditations aligned to ISO 27001.
            </p>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 26 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="lg:col-span-5"
        >
          <div className="sticky top-24 overflow-hidden rounded-3xl border border-mist-2 bg-gradient-to-br from-brand-50/50 via-white to-mist/40 p-7 shadow-sm">
            <span
              className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-accent-100/70 blur-2xl"
              aria-hidden
            />
            <span
              className="pointer-events-none absolute -bottom-16 -left-12 h-44 w-44 rounded-full bg-brand-100/70 blur-2xl"
              aria-hidden
            />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-brand-700 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                At a glance
              </span>
              <h3 className="font-display mt-3 text-2xl text-ink">
                Company facts.
              </h3>
              <ul className="mt-6 divide-y divide-mist-2">
                {FACTS.map((f) => {
                  const Icon = f.icon;
                  return (
                    <li
                      key={f.label}
                      className="flex items-start gap-3 py-3.5"
                    >
                      <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white text-brand-700 ring-1 ring-mist-2">
                        <Icon className="h-4 w-4" strokeWidth={1.8} />
                      </span>
                      <div className="flex-1">
                        <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-ink/45">
                          {f.label}
                        </div>
                        <div className="mt-0.5 text-sm font-semibold text-ink">
                          {f.value}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <Link
                href="/contact"
                className="mt-6 inline-flex w-full items-center justify-between gap-2 rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-brand-700/15 transition hover:bg-brand-800"
              >
                <span>Reach the team</span>
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </Link>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

/* ---------- Partners marquee strip ---------- */

function PartnersStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section ref={ref} className="border-y border-mist-2 bg-mist/40 py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, ease }}
          className="text-center"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-brand-700">
            Authorised partner across
          </span>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            {PARTNERS.map((p, i) => (
              <motion.span
                key={p}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={inView ? { opacity: 1, scale: 1 } : undefined}
                transition={{
                  duration: 0.5,
                  delay: 0.15 + i * 0.04,
                  ease,
                }}
                className="font-display rounded-full border border-mist-2 bg-white px-4 py-2 text-xs font-bold tracking-[0.16em] text-ink/65 shadow-sm transition hover:-translate-y-0.5 hover:border-accent-400 hover:text-brand-800 hover:shadow-md"
              >
                {p.toUpperCase()}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Values ---------- */

function ValuesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section className="relative overflow-hidden bg-mist py-24">
      <div
        className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-accent-200/40 blur-3xl"
        style={{ animation: "blob-drift 22s ease-in-out infinite" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-brand-200/40 blur-3xl"
        style={{ animation: "blob-drift 28s ease-in-out 5s infinite reverse" }}
        aria-hidden
      />

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, ease }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-accent-600">
            <Sparkles className="h-3.5 w-3.5" strokeWidth={2.2} />
            <span className="relative">
              What we believe
              <motion.span
                initial={{ scaleX: 0, originX: 0 }}
                animate={inView ? { scaleX: 1 } : undefined}
                transition={{ duration: 0.8, delay: 0.4, ease }}
                className="absolute -bottom-1 left-0 right-0 h-px origin-left bg-accent-500"
              />
            </span>
          </span>
          <h2 className="font-display mt-4 text-3xl text-ink md:text-4xl">
            Three principles, applied{" "}
            <span className="text-gradient">without exception.</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {VALUES.map((v, i) => (
            <ValueCard key={v.title} value={v} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueCard({
  value,
  index,
  inView,
}: {
  value: (typeof VALUES)[number];
  index: number;
  inView: boolean;
}) {
  const Icon = value.icon;
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.65, delay: 0.15 + index * 0.1, ease }}
      onMouseMove={handleMouseMove}
      className="group relative isolate overflow-hidden rounded-2xl border border-mist-2 bg-white p-7 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-900/8"
      style={
        {
          "--mx": "50%",
          "--my": "50%",
        } as React.CSSProperties
      }
    >
      <span
        className="pointer-events-none absolute -inset-px -z-10 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(360px circle at var(--mx) var(--my), rgba(243,146,0,0.13), transparent 50%)",
        }}
        aria-hidden
      />
      <span
        className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent-50 transition-all duration-500 ease-out group-hover:scale-150 group-hover:bg-accent-100"
        aria-hidden
      />

      <div className="relative">
        <div className="flex items-start justify-between">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600 transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-[-6deg] group-hover:bg-accent-500 group-hover:text-white">
            <Icon className="h-6 w-6" strokeWidth={1.7} />
          </div>
          <span className="font-display text-[11px] font-bold uppercase tracking-[0.28em] text-brand-300">
            0{index + 1}
          </span>
        </div>
        <h3 className="font-display mt-5 text-xl text-ink transition-colors duration-300 group-hover:text-brand-800">
          {value.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink/65">{value.body}</p>
      </div>
    </motion.div>
  );
}
