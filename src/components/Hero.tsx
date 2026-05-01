"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Lock,
  Network,
  PlayCircle,
  Server,
  Cable,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const VENDORS = [
  "CISCO",
  "MICROSOFT",
  "VMWARE",
  "BARRACUDA",
  "FORTINET",
  "SOPHOS",
  "VEEAM",
  "DELL",
  "HPE",
  "VERITAS",
  "AZURE",
  "AWS",
];

/**
 * To use a custom hero photo, drop a JPG/WebP at:
 *   /public/hero/banner.jpg
 * and change BANNER_SRC below to "/hero/banner.jpg".
 * Default uses an Unsplash server-rack photo as a placeholder.
 */
const BANNER_SRC =
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2400&q=80";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#040814] text-white">
      {/* Background photo + treatment layers */}
      <div className="absolute inset-0 -z-30">
        <Image
          src={BANNER_SRC}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ animation: "kenburns 24s ease-in-out infinite alternate" }}
        />
      </div>

      {/* Dark colour grade — left-heavy so copy stays legible */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: `
            linear-gradient(95deg, rgba(4,8,20,0.97) 0%, rgba(8,18,40,0.92) 35%, rgba(8,18,40,0.7) 65%, rgba(8,18,40,0.55) 100%),
            radial-gradient(60% 50% at 85% 30%, rgba(243,146,0,0.22) 0%, transparent 60%),
            radial-gradient(70% 50% at 0% 60%, rgba(45,93,154,0.32) 0%, transparent 65%)
          `,
        }}
        aria-hidden
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.20) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.20) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 95%)",
        }}
        aria-hidden
      />

      {/* Film grain */}
      <svg
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-[0.06] mix-blend-overlay"
        aria-hidden
      >
        <filter id="hero-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-noise)" />
      </svg>

      {/* Animated scan line / data stream accent */}
      <ScanLine />

      <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-20 md:px-8 md:pb-16 md:pt-28 lg:pt-36">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
          {/* LEFT — copy */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease }}
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/85">
                A Total IT Solution Provider
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.05, ease }}
              className="font-display mt-7 text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl md:text-6xl lg:text-[84px]"
            >
              <span className="block text-white">We engineer the IT</span>
              <span className="block">
                <span className="text-white">your business </span>
                <span className="bg-gradient-to-r from-accent-300 via-accent-500 to-accent-400 bg-clip-text text-transparent">
                  runs on.
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="mt-7 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
            >
              Cyber security, infrastructure, backup, email, licensing and
              enterprise platforms — planned, deployed and run by a 15+
              engineer team holding Cisco, Microsoft, VMware and Barracuda
              certifications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-accent-500 px-7 py-3.5 text-sm font-bold text-brand-900 shadow-[0_18px_40px_-10px_rgba(243,146,0,0.6)] transition hover:bg-accent-400"
              >
                <span className="relative z-10">Request a consultation</span>
                <ArrowRight
                  className="relative z-10 h-4 w-4 transition group-hover:translate-x-0.5"
                  strokeWidth={2.4}
                />
                <span
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition group-hover:translate-x-full"
                  aria-hidden
                />
              </Link>
              <Link
                href="/solutions"
                className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:border-accent-400/60 hover:bg-white/10"
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-white/10 transition group-hover:bg-accent-500 group-hover:text-brand-900">
                  <PlayCircle className="h-3 w-3" strokeWidth={2.2} />
                </span>
                Explore solutions
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5, ease }}
              className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-white/55"
            >
              <span className="flex items-center gap-2">
                <ShieldCheck
                  className="h-4 w-4 text-accent-400"
                  strokeWidth={1.8}
                />
                ISO-aligned controls
              </span>
              <span className="h-3 w-px bg-white/15" />
              <span className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-accent-400" strokeWidth={1.8} />
                15+ certified engineers
              </span>
              <span className="h-3 w-px bg-white/15" />
              <span className="flex items-center gap-2">
                <Network
                  className="h-4 w-4 text-accent-400"
                  strokeWidth={1.8}
                />
                120+ active SLAs
              </span>
            </motion.div>
          </div>

          {/* RIGHT — floating live cards over the photo */}
          <div className="relative hidden h-[480px] lg:col-span-5 lg:block">
            <FloatingCards />
          </div>
        </div>
      </div>

      {/* Vendor marquee */}
      <div className="relative border-t border-white/8 bg-black/40 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex items-center gap-6 py-5">
            <span className="hidden shrink-0 text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 md:block">
              Authorised partner ·
            </span>
            <div
              className="relative flex-1 overflow-hidden"
              style={{
                maskImage:
                  "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
              }}
            >
              <div className="flex w-max animate-marquee gap-12">
                {[...VENDORS, ...VENDORS].map((v, i) => (
                  <span
                    key={`${v}-${i}`}
                    className="font-display whitespace-nowrap text-base font-bold tracking-[0.22em] text-white/35 transition hover:text-accent-300 md:text-lg"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Animated scan line over the photo ---------- */

function ScanLine() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden
      >
        <div
          className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-400/70 to-transparent"
          style={{ animation: "scan-down 8s ease-in-out infinite" }}
        />
      </div>
    </>
  );
}

/* ---------- Floating live cards (right column) ---------- */

/**
 * Floating photo cards — drop your own JPG/WebP at /public/hero/card-1.jpg
 * (etc.) and replace the `src` values below to use brand-owned imagery.
 */
const PHOTO_CARDS = [
  {
    src: "/herosection/Infrastructure.jpeg",
    eyebrow: "Infrastructure",
    title: "Datacenter operations",
    icon: Server,
    badge: "ONLINE",
    badgeColor: "emerald",
  },
  {
    src: "https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&w=1200&q=80",
    eyebrow: "Cyber security",
    title: "Edge & endpoint defence",
    icon: ShieldCheck,
    badge: "PROTECTED",
    badgeColor: "accent",
  },
  {
    src: "/herosection/Network_multi-site_connectivity.jpeg",
    eyebrow: "Network",
    title: "Multi-site connectivity",
    icon: Cable,
    badge: "LIVE",
    badgeColor: "brand",
    objectPosition: "center",
  },
] as const;

function FloatingCards() {
  return (
    <div className="absolute inset-0">
      {/* Soft halo behind cards */}
      <div
        className="absolute right-0 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-gradient-to-tr from-accent-500/20 via-brand-500/15 to-transparent blur-3xl"
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, y: 20, rotate: -3 }}
        animate={{ opacity: 1, y: 0, rotate: -3 }}
        transition={{ duration: 0.7, delay: 0.4, ease }}
        className="absolute right-[8%] top-[2%] w-[78%] -rotate-3"
        style={{ animation: "float-y 7s ease-in-out infinite" }}
      >
        <PhotoCard {...PHOTO_CARDS[0]} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20, rotate: 2 }}
        animate={{ opacity: 1, y: 0, rotate: 2 }}
        transition={{ duration: 0.7, delay: 0.55, ease }}
        className="absolute left-[2%] top-[36%] w-[80%] rotate-2"
        style={{ animation: "float-y 8s ease-in-out 0.5s infinite" }}
      >
        <PhotoCard {...PHOTO_CARDS[1]} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: -2 }}
        transition={{ duration: 0.7, delay: 0.7, ease }}
        className="absolute bottom-[2%] right-[2%] w-[68%] -rotate-2"
        style={{ animation: "float-y 9s ease-in-out 1s infinite" }}
      >
        <PhotoCard {...PHOTO_CARDS[2]} />
      </motion.div>
    </div>
  );
}

function PhotoCard({
  src,
  eyebrow,
  title,
  icon: Icon,
  badge,
  badgeColor,
  objectPosition = "center",
}: {
  src: string;
  eyebrow: string;
  title: string;
  icon: typeof ShieldCheck;
  badge: string;
  badgeColor: "emerald" | "accent" | "brand";
  objectPosition?: string;
}) {
  const badgeCls =
    badgeColor === "emerald"
      ? "bg-emerald-500/20 text-emerald-300 ring-emerald-400/30"
      : badgeColor === "accent"
        ? "bg-accent-500/25 text-accent-200 ring-accent-400/40"
        : "bg-brand-500/25 text-brand-100 ring-brand-300/30";
  const dotCls =
    badgeColor === "emerald"
      ? "bg-emerald-400"
      : badgeColor === "accent"
        ? "bg-accent-400"
        : "bg-brand-300";

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/15 shadow-[0_30px_70px_-16px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.04)]">
      <div className="relative aspect-[16/9]">
        <Image
          src={src}
          alt=""
          fill
          sizes="(min-width: 1024px) 30vw, 80vw"
          className="object-cover"
          style={{ objectPosition }}
        />
        {/* Cool blue colour grade so photos feel coherent over the dark hero */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(8,18,40,0.10) 0%, rgba(4,8,20,0.55) 60%, rgba(4,8,20,0.92) 100%)",
          }}
          aria-hidden
        />

        {/* Sweeping highlight */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ animation: "card-sheen 6s ease-in-out infinite" }}
          aria-hidden
        >
          <div
            className="absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            style={{ animation: "card-sheen-move 6s ease-in-out infinite" }}
          />
        </div>

        {/* Top badge */}
        <div
          className={`absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.18em] ring-1 backdrop-blur ${badgeCls}`}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span
              className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-70 ${dotCls}`}
            />
            <span
              className={`relative inline-flex h-1.5 w-1.5 rounded-full ${dotCls}`}
            />
          </span>
          {badge}
        </div>

        {/* Top-left icon chip */}
        <div className="absolute left-3 top-3 grid h-9 w-9 place-items-center rounded-xl border border-white/15 bg-white/10 text-white backdrop-blur-md">
          <Icon className="h-4 w-4" strokeWidth={1.8} />
        </div>

        {/* Bottom label */}
        {(eyebrow || title) && (
          <div className="absolute inset-x-0 bottom-0 px-4 pb-4">
            {eyebrow && (
              <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-accent-300">
                {eyebrow}
              </div>
            )}
            {title && (
              <div className="font-display mt-0.5 text-base text-white">
                {title}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

