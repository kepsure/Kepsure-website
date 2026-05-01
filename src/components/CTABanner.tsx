"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, PhoneCall, Sparkles } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

export function CTABanner() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-brand-800 via-brand-700 to-brand-900 py-20 text-white"
    >
      {/* Static decoration */}
      <div className="bg-grid-dark absolute inset-0 opacity-60" aria-hidden />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent-500/25 blur-3xl"
        style={{ animation: "blob-drift 18s ease-in-out infinite" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-12 h-80 w-80 rounded-full bg-brand-500/30 blur-3xl"
        style={{ animation: "blob-drift 24s ease-in-out 4s infinite reverse" }}
        aria-hidden
      />

      {/* Animated curved background lines */}
      <CtaCurves />

      {/* Floating accent dots / sparkles */}
      <Particle x="8%" y="22%" size={3} delay={0} />
      <Particle x="38%" y="14%" size={2} delay={1.2} />
      <Particle x="64%" y="76%" size={4} delay={0.4} />
      <Particle x="86%" y="32%" size={2} delay={2} />
      <Particle x="22%" y="84%" size={3} delay={1.6} />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 md:px-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-accent-400/40 bg-accent-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-accent-300"
          >
            <Sparkles className="h-3.5 w-3.5" strokeWidth={2.2} />
            Let&apos;s build it together
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="font-display mt-5 text-4xl leading-[1.1] text-white md:text-5xl lg:text-6xl"
          >
            Tell us where your IT
            <br />
            <span className="relative inline-block">
              keeps you up at night.
              <motion.span
                initial={{ scaleX: 0, originX: 0 }}
                animate={inView ? { scaleX: 1 } : undefined}
                transition={{ duration: 0.9, delay: 0.7, ease }}
                className="absolute -bottom-1 left-0 right-0 h-1 origin-left rounded-full bg-gradient-to-r from-accent-500 via-accent-400 to-transparent"
                aria-hidden
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6, delay: 0.25, ease }}
            className="mt-5 max-w-xl text-lg text-white/70"
          >
            A 30-minute discovery call and we&apos;ll come back with a written
            view of risk, priority and effort — no slides, no soft-sell.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, delay: 0.35, ease }}
          className="lg:col-span-5"
        >
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {/* Primary CTA — radiating halo + shimmer */}
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-between gap-2 overflow-hidden rounded-2xl bg-accent-500 px-7 py-5 text-sm font-semibold text-brand-900 shadow-xl shadow-accent-500/30 transition hover:bg-accent-400"
            >
              {/* radiating halo on idle */}
              <span
                className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-accent-400/0"
                style={{ animation: "cta-halo 3.6s ease-out infinite" }}
                aria-hidden
              />
              {/* shimmer sweep on hover */}
              <span
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                aria-hidden
              />
              <span className="relative z-10">Book a discovery call</span>
              <span className="relative z-10 grid h-9 w-9 place-items-center rounded-full bg-brand-900/15 transition group-hover:bg-brand-900 group-hover:text-white">
                <ArrowRight
                  className="h-4 w-4 transition group-hover:translate-x-0.5"
                  strokeWidth={2.4}
                />
              </span>
            </Link>

            {/* Secondary CTA — phone */}
            <Link
              href="tel:+919904408606"
              className="group relative inline-flex items-center justify-between gap-2 rounded-2xl border border-white/20 bg-white/5 px-7 py-5 text-sm font-semibold text-white backdrop-blur transition hover:border-accent-400 hover:bg-white/10"
            >
              <span className="flex items-center gap-3">
                <span className="relative grid h-8 w-8 place-items-center rounded-full bg-accent-500/15 ring-1 ring-accent-400/40">
                  {/* ringer pulse */}
                  <span
                    className="absolute inset-0 rounded-full bg-accent-400/0"
                    style={{ animation: "ringer-pulse 2.4s ease-out infinite" }}
                    aria-hidden
                  />
                  <PhoneCall
                    className="relative h-4 w-4 text-accent-300"
                    strokeWidth={1.8}
                  />
                </span>
                +91 99044 08606
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">
                Live
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- decorative animated curves ---------- */

function CtaCurves() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1440 600"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="cta-curve-a" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#fd9a1c" stopOpacity="0" />
          <stop offset="50%" stopColor="#fd9a1c" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#fd9a1c" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="cta-curve-b" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7ea1d2" stopOpacity="0" />
          <stop offset="50%" stopColor="#7ea1d2" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#7ea1d2" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M -40 140 C 280 60, 580 220, 880 130 S 1320 50, 1500 150"
        fill="none"
        stroke="url(#cta-curve-a)"
        strokeWidth="1.6"
        style={{ animation: "curve-drift-a 18s ease-in-out infinite" }}
      />
      <path
        d="M -40 460 C 360 380, 660 540, 960 450 S 1340 380, 1500 460"
        fill="none"
        stroke="url(#cta-curve-b)"
        strokeWidth="1.6"
        style={{ animation: "curve-drift-b 22s ease-in-out infinite" }}
      />
      <path
        d="M -40 300 C 240 220, 540 400, 820 300 S 1240 200, 1500 300"
        fill="none"
        stroke="url(#cta-curve-a)"
        strokeWidth="1.2"
        style={{ animation: "curve-drift-a 26s ease-in-out 3s infinite reverse" }}
      />
    </svg>
  );
}

/* ---------- floating particles ---------- */

function Particle({
  x,
  y,
  size,
  delay,
}: {
  x: string;
  y: string;
  size: number;
  delay: number;
}) {
  return (
    <span
      className="pointer-events-none absolute rounded-full bg-accent-400 shadow-[0_0_18px_4px_rgba(243,146,0,0.35)]"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        animation: `particle-float 6s ease-in-out ${delay}s infinite`,
      }}
      aria-hidden
    />
  );
}
