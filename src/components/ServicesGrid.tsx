"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Compass,
  ShieldAlert,
  Wrench,
  Activity,
  Users,
  ClipboardList,
  ArrowUpRight,
  Check,
  Clock,
  type LucideIcon,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

type Phase = "PLAN" | "BUILD" | "RUN";

const PHASE_TONE: Record<Phase, { dot: string; text: string; bg: string }> = {
  PLAN: {
    dot: "bg-accent-500",
    text: "text-accent-700",
    bg: "bg-accent-50",
  },
  BUILD: {
    dot: "bg-brand-500",
    text: "text-brand-800",
    bg: "bg-brand-50",
  },
  RUN: {
    dot: "bg-emerald-500",
    text: "text-emerald-700",
    bg: "bg-emerald-50",
  },
};

type Service = {
  phase: Phase;
  icon: LucideIcon;
  title: string;
  tagline: string;
  body: string;
  deliverables: string[];
  scope: string;
  duration: string;
};

const SERVICES: Service[] = [
  {
    phase: "PLAN",
    icon: Compass,
    title: "IT Consulting & Advisory",
    tagline: "Where to spend, where to stop.",
    body: "Architecture reviews, technology selection and 5-year IT roadmap — output is a board-ready document, not a Visio diagram.",
    deliverables: [
      "5-year IT roadmap with prioritised initiatives",
      "Reference architecture & vendor selection memo",
      "Risk register with remediation effort sized",
      "Total cost of ownership over 5 years",
    ],
    scope: "Discovery → Workshops → Roadmap",
    duration: "2 – 6 weeks",
  },
  {
    phase: "PLAN",
    icon: ClipboardList,
    title: "Audit & Compliance",
    tagline: "Evidence ready for auditors.",
    body: "ISO 27001, RBI, SEBI and PCI-DSS gap analyses with evidence collection, remediation tracking and auditor-facing reports.",
    deliverables: [
      "Control mapping to ISO 27001 / RBI / SEBI / PCI",
      "Gap analysis & risk-rated remediation plan",
      "Evidence collection portal & change log",
      "Auditor-facing report pack",
    ],
    scope: "Gap audit → Remediation → Evidence pack",
    duration: "3 – 8 weeks",
  },
  {
    phase: "RUN",
    icon: Wrench,
    title: "Annual Maintenance Contracts",
    tagline: "Predictable uptime, fixed budget.",
    body: "Preventive and breakfix AMC for compute, network, security and end-user devices. Tiered SLAs with monthly service reviews.",
    deliverables: [
      "Quarterly preventive site visits",
      "P1–P4 SLA-bound breakfix coverage",
      "Local spare-parts pool",
      "Monthly health & ticket-trend report",
    ],
    scope: "Preventive · Breakfix · MSR",
    duration: "12-month renewable",
  },
  {
    phase: "RUN",
    icon: Activity,
    title: "Managed IT Services",
    tagline: "We run it. You grow.",
    body: "Fully managed operations — monitoring, patching, backup health, capacity planning, incident response.",
    deliverables: [
      "24×7 monitoring & alerting",
      "Patch & vulnerability management",
      "Backup health verification & restore drills",
      "Capacity planning & quarterly business review",
    ],
    scope: "Monitor · Patch · Respond · Report",
    duration: "Rolling, 30-day exit",
  },
  {
    phase: "RUN",
    icon: ShieldAlert,
    title: "Security Operations",
    tagline: "SOC that pages on the right things.",
    body: "SIEM tuning, SOC build-out and 24×7 alert handling with playbooks that escalate the right things and silence the rest.",
    deliverables: [
      "SIEM ingestion & detection tuning",
      "L1 → L3 alert triage",
      "Incident response playbooks per attack class",
      "Monthly threat-hunt cadence",
    ],
    scope: "Build · Tune · Operate · Hunt",
    duration: "Rolling SOC retainer",
  },
  {
    phase: "RUN",
    icon: Users,
    title: "Resident Engineers",
    tagline: "Senior bench, embedded.",
    body: "Senior on-site engineers — network, server, security or end-user computing — embedded in your team for project or steady-state windows.",
    deliverables: [
      "Network · Server · Security · EUC profiles",
      "Senior-only — no L1 trainees on site",
      "Knowledge transfer to your team built in",
      "Bench backup if your engineer is on leave",
    ],
    scope: "Onboard → Embed → Handover",
    duration: "1 month – 1 year",
  },
];

export function ServicesGrid() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-accent-200/40 blur-3xl"
        style={{ animation: "blob-drift 22s ease-in-out infinite" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-brand-200/40 blur-3xl"
        style={{ animation: "blob-drift 28s ease-in-out 5s infinite reverse" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Card key={s.title} service={s} index={i} />
          ))}
        </div>

        <NeedSomethingElse />
      </div>
    </section>
  );
}

function Card({ service, index }: { service: Service; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = service.icon;
  const tone = PHASE_TONE[service.phase];

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.06, ease }}
      onMouseMove={handleMouseMove}
      className="group relative isolate flex flex-col overflow-hidden rounded-2xl border border-mist-2 bg-white p-7 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-900/8"
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
        className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-50 transition-all duration-500 ease-out group-hover:scale-150 group-hover:bg-accent-100"
        aria-hidden
      />

      <div className="relative flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-700 text-white transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-6deg]">
            <Icon className="h-6 w-6" strokeWidth={1.7} />
          </div>
          <div className="text-right">
            <span className="font-display block text-[11px] font-bold uppercase tracking-[0.28em] text-brand-300">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              className={`mt-1.5 inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest ${tone.bg} ${tone.text}`}
            >
              <span className={`h-1 w-1 rounded-full ${tone.dot}`} />
              {service.phase}
            </span>
          </div>
        </div>

        <h3 className="font-display mt-5 text-xl text-ink transition-colors duration-300 group-hover:text-brand-800">
          {service.title}
        </h3>
        <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-accent-600">
          {service.tagline}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ink/65">
          {service.body}
        </p>

        {/* Deliverables */}
        <ul className="mt-5 space-y-2 border-t border-mist-2 pt-5">
          {service.deliverables.map((d) => (
            <li key={d} className="flex items-start gap-2.5 text-xs text-ink/75">
              <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700">
                <Check className="h-2.5 w-2.5" strokeWidth={3} />
              </span>
              {d}
            </li>
          ))}
        </ul>

        {/* Scope + duration footer */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-mist-2 pt-4 text-[10px] uppercase tracking-widest">
          <span className="font-semibold text-ink/55">{service.scope}</span>
          <span className="inline-flex items-center gap-1.5 font-semibold text-brand-700">
            <Clock className="h-3 w-3" strokeWidth={2} />
            {service.duration}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function NeedSomethingElse() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.7, delay: 0.2, ease }}
      className="group relative mt-5 overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900 p-8 text-white shadow-xl shadow-brand-700/15 md:p-10"
    >
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-accent-500/30 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-12 h-64 w-64 rounded-full bg-brand-500/30 blur-3xl"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full border border-dashed border-accent-400/30"
        style={{ animation: "spin-slow 24s linear infinite" }}
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 30% 30%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 30% 30%, black 30%, transparent 100%)",
        }}
        aria-hidden
      />

      <div className="relative grid items-center gap-8 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-7 lg:col-span-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-400/40 bg-accent-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-accent-300">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-400" />
            </span>
            Custom engagement
          </span>
          <h3 className="font-display mt-4 text-3xl text-white md:text-4xl">
            Need something else?{" "}
            <span className="bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">
              Tell us the outcome.
            </span>
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">
            Our service catalogue is wider than this page. From short scoping
            engagements to multi-year managed-service agreements — describe
            the outcome you need and we&apos;ll scope what fits.
          </p>
        </div>

        <div className="md:col-span-5 lg:col-span-4">
          <Link
            href="/contact"
            className="group relative inline-flex w-full items-center justify-between gap-2 overflow-hidden rounded-2xl bg-accent-500 px-7 py-5 text-sm font-bold text-brand-900 shadow-xl shadow-accent-500/30 transition hover:bg-accent-400"
          >
            <span className="relative z-10">Talk to us about scope</span>
            <span className="relative z-10 grid h-9 w-9 place-items-center rounded-full bg-brand-900/15 transition group-hover:bg-brand-900 group-hover:text-white">
              <ArrowUpRight
                className="h-4 w-4 transition group-hover:rotate-45"
                strokeWidth={2.4}
              />
            </span>
            <span
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              aria-hidden
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
