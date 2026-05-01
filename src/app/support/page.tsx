"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Ticket,
  Mail,
  Phone,
  Clock,
  Calendar,
  LifeBuoy,
  ArrowUpRight,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SupportHero } from "@/components/SupportHero";
import { CTABanner } from "@/components/CTABanner";

const ease = [0.16, 1, 0.3, 1] as const;

type Channel = {
  icon: LucideIcon;
  title: string;
  body: string;
  cta: string;
  href: string;
  external?: boolean;
  accent?: boolean;
};

const CHANNELS: Channel[] = [
  {
    icon: Ticket,
    title: "Raise a ticket",
    body: "Track end-to-end through our ticketing portal. Best for issues with attachments, screenshots or longer history.",
    cta: "Open ticketing portal",
    href: "https://kepsuresupport.raiseaticket.com",
    external: true,
    accent: true,
  },
  {
    icon: Mail,
    title: "Email support",
    body: "Drop a note describing the issue and we’ll convert it into a tracked ticket within service hours.",
    cta: "support@kepsuresupport.com",
    href: "mailto:support@kepsuresupport.com",
  },
  {
    icon: Phone,
    title: "Call us",
    body: "Best for live incidents. SLA customers get a senior engineer first; new enquiries are routed to our duty manager.",
    cta: "+91 99044 08606",
    href: "tel:+919904408606",
  },
  {
    icon: Calendar,
    title: "Schedule a session",
    body: "Reserve a 30-minute slot for design walkthroughs, capacity reviews or change discussions.",
    cta: "Book on Outlook",
    href: "https://outlook.office365.com/owa/calendar/kepsure@kepsure.com/bookings/",
    external: true,
  },
];

const PRIORITY_TABLE: {
  p: string;
  title: string;
  desc: string;
  response: string;
  update: string;
  tone: "red" | "amber" | "blue" | "slate";
}[] = [
  {
    p: "P1",
    title: "Business stopped",
    desc: "Production outage, ransomware, data loss in progress",
    response: "15 min",
    update: "Hourly",
    tone: "red",
  },
  {
    p: "P2",
    title: "Major impact",
    desc: "Site / app degraded, single-region outage, significant user pain",
    response: "1 hour",
    update: "Every 2h",
    tone: "amber",
  },
  {
    p: "P3",
    title: "Minor impact",
    desc: "Workaround available, single-user issue, cosmetic defects",
    response: "4 hours",
    update: "Daily",
    tone: "blue",
  },
  {
    p: "P4",
    title: "Request",
    desc: "Change request, advisory, scheduled work",
    response: "1 business day",
    update: "On milestone",
    tone: "slate",
  },
];

const TONE: Record<
  "red" | "amber" | "blue" | "slate",
  { bg: string; text: string; ring: string; dot: string }
> = {
  red: {
    bg: "bg-red-500/15",
    text: "text-red-700",
    ring: "ring-red-200",
    dot: "bg-red-500",
  },
  amber: {
    bg: "bg-amber-500/15",
    text: "text-amber-700",
    ring: "ring-amber-200",
    dot: "bg-amber-500",
  },
  blue: {
    bg: "bg-brand-500/15",
    text: "text-brand-800",
    ring: "ring-brand-200",
    dot: "bg-brand-500",
  },
  slate: {
    bg: "bg-mist",
    text: "text-ink/65",
    ring: "ring-mist-2",
    dot: "bg-ink/35",
  },
};

export default function SupportPage() {
  return (
    <>
      <Header />
      <main>
        <SupportHero
          breadcrumbs={[
            { href: "/", label: "Home" },
            { label: "Support" },
          ]}
        />

        <ChannelsSection />
        <PriorityMatrixSection />

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}

/* ---------- Channels ---------- */

function ChannelsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-accent-200/30 blur-3xl"
        style={{ animation: "blob-drift 22s ease-in-out infinite" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-brand-200/30 blur-3xl"
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
              Reach us four ways
              <motion.span
                initial={{ scaleX: 0, originX: 0 }}
                animate={inView ? { scaleX: 1 } : undefined}
                transition={{ duration: 0.8, delay: 0.4, ease }}
                className="absolute -bottom-1 left-0 right-0 h-px origin-left bg-accent-500"
              />
            </span>
          </span>
          <h2 className="font-display mt-4 text-3xl text-ink md:text-4xl">
            Pick the channel that{" "}
            <span className="text-gradient">fits the moment.</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {CHANNELS.map((c, i) => (
            <ChannelCard key={c.title} c={c} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ChannelCard({
  c,
  index,
  inView,
}: {
  c: Channel;
  index: number;
  inView: boolean;
}) {
  const Icon = c.icon;
  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }
  return (
    <motion.a
      href={c.href}
      target={c.external ? "_blank" : undefined}
      rel={c.external ? "noopener noreferrer" : undefined}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.65, delay: 0.15 + index * 0.08, ease }}
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
        className={`pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full transition-all duration-500 ease-out group-hover:scale-150 ${
          c.accent ? "bg-accent-100/70" : "bg-brand-50"
        }`}
        aria-hidden
      />

      <div className="relative">
        <div className="flex items-start justify-between">
          <div
            className={`inline-flex h-12 w-12 items-center justify-center rounded-xl text-white transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-[-6deg] ${
              c.accent ? "bg-accent-500 text-brand-900" : "bg-brand-700"
            }`}
          >
            <Icon className="h-6 w-6" strokeWidth={1.7} />
          </div>
          <ArrowUpRight
            className="h-5 w-5 text-ink/30 transition group-hover:text-brand-700"
            strokeWidth={2}
          />
        </div>
        <h3 className="font-display mt-5 text-xl text-ink transition-colors duration-300 group-hover:text-brand-800">
          {c.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink/65">{c.body}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-mist-2 bg-mist/60 px-3 py-1.5 text-xs font-semibold text-brand-700">
          {c.cta}
          <ArrowUpRight className="h-3 w-3" strokeWidth={2.2} />
        </span>
      </div>
    </motion.a>
  );
}

/* ---------- Service hours + Priority matrix ---------- */

function PriorityMatrixSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section className="relative overflow-hidden bg-mist py-24">
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-accent-200/30 blur-3xl"
        style={{ animation: "blob-drift 22s ease-in-out infinite" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-brand-200/30 blur-3xl"
        style={{ animation: "blob-drift 28s ease-in-out 5s infinite reverse" }}
        aria-hidden
      />
      <div ref={ref} className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-5"
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-accent-600">
              <Sparkles className="h-3.5 w-3.5" strokeWidth={2.2} />
              Service hours
            </span>
            <h2 className="font-display mt-3 text-3xl text-ink md:text-4xl">
              Standard hours.
              <br />
              <span className="text-gradient">24×7 for SLA customers.</span>
            </h2>
            <ul className="mt-8 space-y-4">
              <HourCard
                icon={Clock}
                title="Standard support"
                body="10:00 AM – 6:00 PM, Mon–Sat"
                tag="STD"
              />
              <HourCard
                icon={LifeBuoy}
                title="Premium / 24×7 SLA"
                body="Round-the-clock for AMC and managed-service customers"
                tag="24×7"
                highlight
              />
            </ul>

            <div className="mt-8 rounded-2xl border border-mist-2 bg-white p-5">
              <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-brand-700">
                Need an SLA upgrade?
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">
                Most managed-service customers run on premium 24×7. Tell us
                your downtime tolerance and we&apos;ll size the right tier.
              </p>
              <Link
                href="/contact"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
              >
                Talk SLAs
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-accent-600">
              <Sparkles className="h-3.5 w-3.5" strokeWidth={2.2} />
              Priority matrix
            </span>
            <h3 className="font-display mt-3 text-2xl text-ink md:text-3xl">
              Response and update targets
            </h3>

            {/* Cards stack on mobile, grid on lg */}
            <div className="mt-6 space-y-3">
              {PRIORITY_TABLE.map((p, i) => {
                const tone = TONE[p.tone];
                return (
                  <motion.div
                    key={p.p}
                    initial={{ opacity: 0, x: 20 }}
                    animate={
                      inView ? { opacity: 1, x: 0 } : undefined
                    }
                    transition={{
                      duration: 0.6,
                      delay: 0.3 + i * 0.1,
                      ease,
                    }}
                    className="group grid grid-cols-1 gap-3 rounded-2xl border border-mist-2 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md md:grid-cols-12 md:items-center"
                  >
                    <div className="md:col-span-3">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest ${tone.bg} ${tone.text} ring-1 ${tone.ring}`}
                      >
                        <span
                          className={`relative flex h-1.5 w-1.5 ${tone.dot} rounded-full`}
                        />
                        {p.p}
                      </span>
                      <div className="font-display mt-2 text-base text-ink">
                        {p.title}
                      </div>
                    </div>
                    <div className="text-sm text-ink/65 md:col-span-5">
                      {p.desc}
                    </div>
                    <div className="md:col-span-2">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-ink/45">
                        Response
                      </div>
                      <div className="mt-0.5 font-display text-base font-semibold text-ink">
                        {p.response}
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-ink/45">
                        Updates
                      </div>
                      <div className="mt-0.5 text-sm font-semibold text-ink/75">
                        {p.update}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HourCard({
  icon: Icon,
  title,
  body,
  tag,
  highlight,
}: {
  icon: typeof Clock;
  title: string;
  body: string;
  tag: string;
  highlight?: boolean;
}) {
  return (
    <li
      className={`flex items-start gap-4 rounded-2xl border p-4 transition ${
        highlight
          ? "border-accent-300/60 bg-gradient-to-br from-accent-50/50 to-white"
          : "border-mist-2 bg-white"
      }`}
    >
      <span
        className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${
          highlight
            ? "bg-accent-500 text-brand-900"
            : "bg-brand-50 text-brand-700"
        }`}
      >
        <Icon className="h-5 w-5" strokeWidth={1.8} />
      </span>
      <div className="flex-1">
        <div className="flex items-center justify-between gap-3">
          <div className="font-display text-base text-ink">{title}</div>
          <span
            className={`rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest ${
              highlight
                ? "bg-accent-500/20 text-accent-700"
                : "bg-mist text-ink/55"
            }`}
          >
            {tag}
          </span>
        </div>
        <p className="mt-1 text-sm text-ink/65">{body}</p>
      </div>
    </li>
  );
}
