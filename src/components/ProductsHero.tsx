"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Package,
  ShieldCheck,
  Layers,
  Activity,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

export function ProductsHero({
  breadcrumbs,
  totalCount,
  inStockCount,
  brandCount,
  categoryCount,
}: {
  breadcrumbs: { href?: string; label: string }[];
  totalCount: number;
  inStockCount: number;
  brandCount: number;
  categoryCount: number;
}) {
  const stats = [
    { icon: Package, label: "SKUs catalogued", value: String(totalCount) },
    { icon: Activity, label: "In stock now", value: String(inStockCount) },
    { icon: Layers, label: "Categories", value: String(categoryCount) },
    { icon: ShieldCheck, label: "Vendors", value: `${brandCount}+` },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-[#050a18] text-white">
      <Backdrop />
      <Particles />

      <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-24">
        <motion.nav
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
          className="flex items-center gap-1 text-xs font-medium text-white/55"
          aria-label="Breadcrumb"
        >
          {breadcrumbs.map((b, i) => (
            <span key={i} className="inline-flex items-center gap-1">
              {b.href ? (
                <Link href={b.href} className="hover:text-accent-300">
                  {b.label}
                </Link>
              ) : (
                <span className="text-white/85">{b.label}</span>
              )}
              {i < breadcrumbs.length - 1 && (
                <ChevronRight className="h-3 w-3" strokeWidth={2} />
              )}
            </span>
          ))}
        </motion.nav>

        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease }}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-accent-400/40 bg-accent-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.28em] text-accent-300"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-400" />
          </span>
          Product Zone
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.18, ease }}
          className="font-display mt-6 max-w-4xl text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[64px]"
        >
          <span className="bg-gradient-to-r from-white via-white to-accent-200 bg-clip-text text-transparent">
            The gear we trust.
          </span>{" "}
          <span className="text-white/65">Curated by our engineers.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="mt-6 max-w-2xl border-l border-accent-400/40 pl-5 text-base leading-relaxed text-white/70 md:text-lg"
        >
          A short list of products Kepsure has audited, deployed and supported
          in production. Don&apos;t see what you need? Tell us the problem —
          we&apos;ll specify it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease }}
          className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur md:grid-cols-4"
        >
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="bg-[#050a18]/40 p-5 transition hover:bg-white/[0.03] md:p-6"
                style={{
                  animation: `vendor-pulse 4.2s ease-in-out ${i * 0.3}s infinite`,
                }}
              >
                <div className="flex items-center gap-2 text-accent-300">
                  <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    {s.label}
                  </span>
                </div>
                <div className="font-display mt-2 text-3xl text-white md:text-4xl">
                  {s.value}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function Backdrop() {
  return (
    <>
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            radial-gradient(60% 50% at 80% 30%, rgba(243,146,0,0.20) 0%, transparent 60%),
            radial-gradient(60% 50% at 0% 60%, rgba(45,93,154,0.32) 0%, transparent 65%),
            linear-gradient(180deg, #050a18 0%, #07112a 60%, #050a18 100%)
          `,
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 opacity-[0.10]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.20) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.20) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 100%)",
        }}
        aria-hidden
      />
      <BackdropCurves />
      <div
        className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-accent-500/22 blur-[140px]"
        style={{ animation: "blob-drift 20s ease-in-out infinite" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-brand-500/25 blur-[140px]"
        style={{ animation: "blob-drift 26s ease-in-out 4s infinite reverse" }}
        aria-hidden
      />
    </>
  );
}

function BackdropCurves() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
      viewBox="0 0 1440 600"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="prod-curve-a" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#fd9a1c" stopOpacity="0" />
          <stop offset="50%" stopColor="#fd9a1c" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#fd9a1c" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="prod-curve-b" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7ea1d2" stopOpacity="0" />
          <stop offset="50%" stopColor="#7ea1d2" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#7ea1d2" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M -40 140 C 280 60, 580 220, 880 130 S 1320 50, 1500 150"
        fill="none"
        stroke="url(#prod-curve-a)"
        strokeWidth="1.4"
        style={{ animation: "curve-drift-a 18s ease-in-out infinite" }}
      />
      <path
        d="M -40 460 C 360 380, 660 540, 960 450 S 1340 380, 1500 460"
        fill="none"
        stroke="url(#prod-curve-b)"
        strokeWidth="1.4"
        style={{ animation: "curve-drift-b 22s ease-in-out infinite" }}
      />
    </svg>
  );
}

function Particles() {
  return (
    <>
      <Particle x="10%" y="20%" size={3} delay={0} />
      <Particle x="30%" y="78%" size={2} delay={1.4} />
      <Particle x="62%" y="14%" size={4} delay={0.6} />
      <Particle x="86%" y="68%" size={3} delay={2.2} />
      <Particle x="74%" y="32%" size={2} delay={1.8} />
      <Particle x="44%" y="85%" size={2} delay={0.9} />
    </>
  );
}

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
