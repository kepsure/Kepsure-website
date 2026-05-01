"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  ShieldCheck,
  Network,
  DatabaseBackup,
  Mail,
  FileKey,
  ServerCog,
  type LucideIcon,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const ICON_BY_SLUG: Record<string, LucideIcon> = {
  "cyber-security": ShieldCheck,
  "it-infrastructure": Network,
  "data-backup-recovery": DatabaseBackup,
  "email-solutions": Mail,
  "software-licensing": FileKey,
  "enterprise-solutions": ServerCog,
};

export function SolutionHero({
  slug,
  name,
  tagline,
  summary,
  breadcrumbs,
}: {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  breadcrumbs: { href?: string; label: string }[];
}) {
  const Icon = ICON_BY_SLUG[slug] ?? ShieldCheck;
  return (
    <section className="relative isolate overflow-hidden bg-[#050a18] text-white">
      <Backdrop />
      <Particles />

      <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-24 lg:py-28">
        {/* Breadcrumbs */}
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

        <div className="mt-10 flex flex-col gap-10 lg:grid lg:grid-cols-12 lg:items-center lg:gap-8">
          {/* RIGHT (lg) / TOP (mobile reordered) — copy */}
          <div className="order-2 lg:order-2 lg:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease }}
              className="inline-flex items-center gap-2 rounded-full border border-accent-400/40 bg-accent-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.28em] text-accent-300"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-400" />
              </span>
              {tagline}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18, ease }}
              className="font-display mt-6 text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[72px]"
            >
              <span className="bg-gradient-to-r from-white via-white to-accent-200 bg-clip-text text-transparent">
                {name}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="mt-6 max-w-2xl border-l border-accent-400/40 pl-5 text-base leading-relaxed text-white/70 md:text-lg"
            >
              {summary}
            </motion.p>
          </div>

          {/* LEFT (lg) / BOTTOM (mobile) — animated icon orb */}
          <div className="order-1 flex justify-center lg:order-1 lg:col-span-5 lg:justify-start">
            <IconOrb Icon={Icon} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Icon orb with rotating rings + orbital satellites ---------- */

function IconOrb({ Icon }: { Icon: LucideIcon }) {
  // 6 satellite dots evenly spaced around the orbit
  const satellites = Array.from({ length: 6 }, (_, i) => i * 60);

  return (
    <div className="relative h-[220px] w-[220px] sm:h-[280px] sm:w-[280px] md:h-[340px] md:w-[340px] lg:h-[380px] lg:w-[380px]">
      {/* outer pulse halo */}
      <motion.span
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease }}
        className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-accent-500/20 via-brand-500/15 to-transparent blur-3xl"
        aria-hidden
      />

      {/* outermost dashed ring (slow spin) */}
      <span
        className="pointer-events-none absolute inset-0 rounded-full border border-dashed border-white/15"
        style={{ animation: "spin-slow 28s linear infinite" }}
        aria-hidden
      />

      {/* mid ring (gradient stroke) */}
      <span
        className="pointer-events-none absolute inset-[10%] rounded-full border-2 border-accent-400/25"
        style={{ animation: "spin-slow 18s linear reverse infinite" }}
        aria-hidden
      />

      {/* inner dotted ring */}
      <span
        className="pointer-events-none absolute inset-[24%] rounded-full border border-dotted border-white/20"
        style={{ animation: "spin-slow 14s linear infinite" }}
        aria-hidden
      />

      {/* satellites — orbiting on the outermost ring (each wrapper rotated, dot at top) */}
      <span
        className="pointer-events-none absolute inset-0"
        style={{ animation: "spin-slow 22s linear infinite" }}
        aria-hidden
      >
        {satellites.map((angle, i) => (
          <span
            key={i}
            className="absolute inset-0"
            style={{ transform: `rotate(${angle}deg)` }}
          >
            <span
              className={`absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full ${
                i % 2 === 0
                  ? "bg-accent-500 shadow-[0_0_18px_4px_rgba(243,146,0,0.55)]"
                  : "bg-brand-300 shadow-[0_0_14px_3px_rgba(126,161,210,0.45)]"
              }`}
            />
          </span>
        ))}
      </span>

      {/* central pulse ring */}
      <span
        className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full ring-2 ring-accent-400/0"
        style={{ animation: "orb-pulse 3.4s ease-out infinite" }}
        aria-hidden
      />

      {/* core — big icon disc */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease }}
        className="absolute left-1/2 top-1/2 grid h-32 w-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900 ring-4 ring-white/8 shadow-[0_30px_70px_-12px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.10)]"
      >
        {/* inner glow */}
        <span
          className="pointer-events-none absolute inset-1 rounded-full bg-gradient-to-tr from-accent-500/0 via-accent-400/15 to-transparent"
          aria-hidden
        />
        <Icon
          className="relative h-14 w-14 text-accent-300"
          strokeWidth={1.6}
          style={{ animation: "orb-bob 4.5s ease-in-out infinite" }}
        />
      </motion.div>
    </div>
  );
}

/* ---------- Background ---------- */

function Backdrop() {
  return (
    <>
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            radial-gradient(60% 50% at 80% 30%, rgba(243,146,0,0.22) 0%, transparent 60%),
            radial-gradient(60% 50% at 0% 60%, rgba(45,93,154,0.32) 0%, transparent 65%),
            linear-gradient(180deg, #050a18 0%, #07112a 60%, #050a18 100%)
          `,
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 opacity-[0.12]"
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
        className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-brand-500/26 blur-[140px]"
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
        <linearGradient id="sh-curve-a" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#fd9a1c" stopOpacity="0" />
          <stop offset="50%" stopColor="#fd9a1c" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#fd9a1c" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="sh-curve-b" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7ea1d2" stopOpacity="0" />
          <stop offset="50%" stopColor="#7ea1d2" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#7ea1d2" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M -40 140 C 280 60, 580 220, 880 130 S 1320 50, 1500 150"
        fill="none"
        stroke="url(#sh-curve-a)"
        strokeWidth="1.4"
        style={{ animation: "curve-drift-a 18s ease-in-out infinite" }}
      />
      <path
        d="M -40 460 C 360 380, 660 540, 960 450 S 1340 380, 1500 460"
        fill="none"
        stroke="url(#sh-curve-b)"
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
      <Particle x="44%" y="50%" size={2} delay={0.9} />
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
