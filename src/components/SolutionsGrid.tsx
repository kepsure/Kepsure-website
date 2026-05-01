"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { SOLUTIONS, type Solution } from "@/lib/solutions";

const ease = [0.16, 1, 0.3, 1] as const;

export function SolutionsGrid() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section className="relative overflow-hidden bg-mist py-24">
      <div className="bg-dots-soft absolute inset-0 opacity-50" aria-hidden />
      {/* Soft moving glow blobs in the background */}
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-accent-200/50 blur-3xl"
        style={{ animation: "blob-drift 18s ease-in-out infinite" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-brand-200/50 blur-3xl"
        style={{ animation: "blob-drift 22s ease-in-out 4s infinite reverse" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div
          ref={headerRef}
          className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.7, ease }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-accent-600">
              <Sparkles className="h-3.5 w-3.5" strokeWidth={2.2} />
              <span className="relative">
                What we do
                <motion.span
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={headerInView ? { scaleX: 1 } : undefined}
                  transition={{ duration: 0.8, delay: 0.4, ease }}
                  className="absolute -bottom-1 left-0 right-0 h-px origin-left bg-accent-500"
                />
              </span>
            </span>
            <h2 className="font-display mt-4 text-4xl text-ink md:text-5xl">
              Six solution lines.{" "}
              <span className="text-gradient">One accountable team.</span>
            </h2>
            <p className="mt-4 text-ink/65">
              From the firewall at the edge to the identity provider at the
              core, Kepsure designs, deploys and operates every layer your
              business depends on.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={headerInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6, delay: 0.25, ease }}
          >
            <Link
              href="/solutions"
              className="group inline-flex items-center gap-1.5 rounded-full border border-brand-300 bg-white px-5 py-2.5 text-sm font-semibold text-brand-800 transition hover:border-brand-500 hover:bg-brand-50"
            >
              All solutions
              <ArrowUpRight
                className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
              />
            </Link>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((s, i) => (
            <SolutionCard key={s.slug} solution={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionCard({
  solution,
  index,
}: {
  solution: Solution;
  index: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = solution.icon;

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <motion.a
      ref={ref}
      href={`/solutions/${solution.slug}`}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{
        duration: 0.7,
        delay: 0.1 + index * 0.08,
        ease,
      }}
      className="group relative isolate block overflow-hidden rounded-2xl border border-mist-2 bg-white p-7 transition duration-300 ease-out hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-2xl hover:shadow-brand-900/10"
      style={
        {
          "--mx": "50%",
          "--my": "50%",
        } as React.CSSProperties
      }
    >
      {/* Pointer-follow spotlight */}
      <span
        className="pointer-events-none absolute -inset-px -z-10 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(380px circle at var(--mx) var(--my), rgba(243,146,0,0.15), transparent 50%)",
        }}
        aria-hidden
      />

      {/* Top-right decorative blob */}
      <span
        className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-accent-100/70 transition-all duration-500 ease-out group-hover:-right-8 group-hover:-top-8 group-hover:scale-150 group-hover:bg-accent-200/70"
        aria-hidden
      />

      <div className="relative">
        {/* Icon — gentle float + glow on hover */}
        <div className="relative mb-5 inline-flex">
          <span
            className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent-400 to-brand-500 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-60"
            aria-hidden
          />
          <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-700 to-brand-800 text-white shadow-lg shadow-brand-700/20 transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:rotate-[-6deg]">
            <Icon className="h-7 w-7" strokeWidth={1.7} />
          </div>
        </div>

        {/* Number badge that gets bolder on hover */}
        <span className="font-display pointer-events-none absolute right-0 top-0 inline-flex items-center text-[11px] font-bold uppercase tracking-[0.28em] text-brand-300 transition-all duration-300 group-hover:text-accent-600">
          {String(index + 1).padStart(2, "0")}
        </span>

        <h3 className="font-display text-xl text-ink transition-colors duration-300 group-hover:text-brand-800">
          {solution.name}
        </h3>
        <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-accent-600">
          {solution.tagline}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ink/65">
          {solution.summary}
        </p>
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
          <span className="relative">
            Learn more
            <span
              className="absolute -bottom-0.5 left-0 right-0 h-px origin-left scale-x-0 bg-brand-700 transition-transform duration-500 ease-out group-hover:scale-x-100"
              aria-hidden
            />
          </span>
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-45"
            strokeWidth={2}
          />
        </span>
      </div>
    </motion.a>
  );
}
