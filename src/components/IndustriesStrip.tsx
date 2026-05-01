"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Factory,
  Landmark,
  Stethoscope,
  GraduationCap,
  ShoppingBag,
  Building2,
  Truck,
  Briefcase,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const INDUSTRIES = [
  { icon: Factory, label: "Manufacturing" },
  { icon: Landmark, label: "BFSI" },
  { icon: Stethoscope, label: "Healthcare" },
  { icon: GraduationCap, label: "Education" },
  { icon: ShoppingBag, label: "Retail" },
  { icon: Building2, label: "Real Estate" },
  { icon: Truck, label: "Logistics" },
  { icon: Briefcase, label: "Professional" },
];

export function IndustriesStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-mist/40 to-white py-20">
      {/* Background curves + soft drifting glow */}
      <BackgroundCurves />
      <div
        className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-accent-200/30 blur-[110px]"
        style={{ animation: "blob-drift 22s ease-in-out infinite" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-brand-200/30 blur-[110px]"
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
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent-600">
            <span className="relative">
              Industries we serve
              <motion.span
                initial={{ scaleX: 0, originX: 0 }}
                animate={inView ? { scaleX: 1 } : undefined}
                transition={{ duration: 0.8, delay: 0.4, ease }}
                className="absolute -bottom-1 left-0 right-0 h-px origin-left bg-accent-500"
              />
            </span>
          </span>
          <h2 className="font-display mt-4 text-3xl text-ink md:text-4xl">
            Eight sectors. Same engineering rigour.
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
          {INDUSTRIES.map((ind, i) => (
            <Tile
              key={ind.label}
              icon={ind.icon}
              label={ind.label}
              index={i}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Tile({
  icon: Icon,
  label,
  index,
  inView,
}: {
  icon: typeof Factory;
  label: string;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.92 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : undefined}
      transition={{ duration: 0.6, delay: 0.15 + index * 0.06, ease }}
      className="group relative h-full"
    >
      <div className="relative flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-mist-2 bg-white p-5 text-center transition-all duration-500 ease-out hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md">
        <div
          className="relative grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-700 transition-all duration-500 group-hover:bg-brand-700 group-hover:text-white"
        >
          {/* expanding ripple ring on its own loop, staggered */}
          <span
            className="pointer-events-none absolute inset-0 rounded-xl border border-accent-400/0"
            style={{
              animation: `industry-ripple 4.5s ease-out ${
                index * 0.55
              }s infinite`,
            }}
            aria-hidden
          />
          <Icon
            className="relative h-6 w-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-6deg]"
            strokeWidth={1.7}
          />
        </div>
        <span className="text-xs font-semibold text-ink/75">{label}</span>
      </div>
    </motion.div>
  );
}

/* ---------- decorative animated background curves ---------- */

function BackgroundCurves() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1440 600"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="curve-a" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1a3a6b" stopOpacity="0" />
          <stop offset="50%" stopColor="#1a3a6b" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#1a3a6b" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="curve-b" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f39200" stopOpacity="0" />
          <stop offset="50%" stopColor="#f39200" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#f39200" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Top sweeping curve — slow drift */}
      <path
        d="M -50 120 C 280 40, 560 200, 880 110 S 1300 30, 1500 130"
        fill="none"
        stroke="url(#curve-a)"
        strokeWidth="1.6"
        style={{ animation: "curve-drift-a 18s ease-in-out infinite" }}
      />
      {/* Mid accent curve — orange */}
      <path
        d="M -50 320 C 240 240, 540 420, 820 320 S 1240 220, 1500 320"
        fill="none"
        stroke="url(#curve-b)"
        strokeWidth="1.4"
        style={{ animation: "curve-drift-b 22s ease-in-out infinite" }}
      />
      {/* Bottom curve — soft navy */}
      <path
        d="M -50 480 C 320 400, 600 560, 920 470 S 1300 400, 1500 490"
        fill="none"
        stroke="url(#curve-a)"
        strokeWidth="1.6"
        style={{ animation: "curve-drift-a 26s ease-in-out 4s infinite" }}
      />
      {/* Faint background blob curve, large + filled */}
      <path
        d="M -50 380 C 360 280, 720 540, 1100 380 S 1480 300, 1500 360 L 1500 600 L -50 600 Z"
        fill="rgba(26,58,107,0.04)"
      />
    </svg>
  );
}
