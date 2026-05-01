"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  BadgeCheck,
  Compass,
  TrendingUp,
  Headphones,
  Sparkles,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const PILLARS = [
  {
    icon: BadgeCheck,
    eyebrow: "01",
    title: "OEM-certified team",
    body: "15+ engineers with Cisco, Microsoft, VMware, Barracuda and Sophos certifications. The same person scopes, designs and runs.",
  },
  {
    icon: Compass,
    eyebrow: "02",
    title: "Vendor-neutral by design",
    body: "We recommend what fits — not what's on our shelf. Architecture before procurement, every time.",
  },
  {
    icon: TrendingUp,
    eyebrow: "03",
    title: "Built to scale",
    body: "Designs that hold up as your team, traffic and risk surface grow. Year-three additions don't require year-one rework.",
  },
  {
    icon: Headphones,
    eyebrow: "04",
    title: "Senior-engineer support",
    body: "No L1 gating. The first person who looks at your ticket is qualified to actually fix it.",
  },
];

export function WhyKepsure() {
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
        style={{ animation: "blob-drift 26s ease-in-out 5s infinite reverse" }}
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
              Why Kepsure
              <motion.span
                initial={{ scaleX: 0, originX: 0 }}
                animate={inView ? { scaleX: 1 } : undefined}
                transition={{ duration: 0.8, delay: 0.4, ease }}
                className="absolute -bottom-1 left-0 right-0 h-px origin-left bg-accent-500"
              />
            </span>
          </span>
          <h2 className="font-display mt-4 text-4xl text-ink md:text-5xl">
            An IT partner that{" "}
            <span className="text-gradient">behaves like an in-house team.</span>
          </h2>
        </motion.div>

        {/* 4 pillars — clean row */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <PillarCard key={p.title} {...p} index={i} inView={inView} />
          ))}
        </div>

      </div>
    </section>
  );
}

function PillarCard({
  icon: Icon,
  eyebrow,
  title,
  body,
  index,
  inView,
}: {
  icon: typeof BadgeCheck;
  eyebrow: string;
  title: string;
  body: string;
  index: number;
  inView: boolean;
}) {
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.7, delay: 0.15 + index * 0.08, ease }}
      onMouseMove={handleMouseMove}
      className="group relative isolate overflow-hidden rounded-2xl border border-mist-2 bg-white p-6 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-900/8"
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
            "radial-gradient(320px circle at var(--mx) var(--my), rgba(243,146,0,0.12), transparent 50%)",
        }}
        aria-hidden
      />

      <div className="flex items-start justify-between">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-[-6deg] group-hover:bg-brand-700 group-hover:text-white">
          <Icon className="h-5 w-5" strokeWidth={1.8} />
        </div>
        <span className="font-display text-[11px] font-bold uppercase tracking-[0.28em] text-brand-300">
          {eyebrow}
        </span>
      </div>
      <h3 className="font-display mt-5 text-lg text-ink transition-colors duration-300 group-hover:text-brand-800">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/65">{body}</p>
    </motion.div>
  );
}
