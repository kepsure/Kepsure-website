"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { SOLUTIONS, type Solution } from "@/lib/solutions";

const ease = [0.16, 1, 0.3, 1] as const;

export function SolutionsCardGrid() {
  return (
    <section className="bg-white pb-24 pt-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {SOLUTIONS.map((s, i) => (
            <Card key={s.slug} solution={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ solution, index }: { solution: Solution; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
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
      id={solution.slug}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.7, delay: 0.1 + index * 0.08, ease }}
      className="group relative isolate flex scroll-mt-24 flex-col overflow-hidden rounded-3xl border border-mist-2 bg-white shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:border-brand-300 hover:shadow-2xl hover:shadow-brand-900/10"
      style={
        {
          "--mx": "50%",
          "--my": "50%",
        } as React.CSSProperties
      }
    >
      {/* Spotlight follow */}
      <span
        className="pointer-events-none absolute -inset-px -z-10 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx) var(--my), rgba(243,146,0,0.12), transparent 50%)",
        }}
        aria-hidden
      />

      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={solution.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(10,31,58,0.55) 0%, rgba(10,31,58,0.85) 60%, rgba(20,43,80,0.95) 100%)",
          }}
          aria-hidden
        />
        <div
          className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-accent-500/30 blur-2xl"
          aria-hidden
        />

        <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-white backdrop-blur">
          <span className="h-1 w-1 rounded-full bg-accent-400" />
          0{index + 1}
        </span>

        <div className="absolute bottom-5 left-5 flex items-center gap-3">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-md transition group-hover:bg-accent-500 group-hover:text-brand-900 group-hover:ring-accent-400">
            <Icon className="h-7 w-7" strokeWidth={1.7} />
          </span>
          <div>
            <div className="font-display text-2xl text-white">
              {solution.name}
            </div>
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent-300">
              {solution.tagline}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-7 md:p-8">
        <p className="text-sm leading-relaxed text-ink/65">{solution.summary}</p>
        <ul className="mt-5 grid gap-1.5 text-sm text-ink/70">
          {solution.capabilities.slice(0, 3).map((c) => (
            <li key={c} className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-500" />
              {c}
            </li>
          ))}
        </ul>
        <span className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-semibold text-brand-700 transition group-hover:gap-2">
          Explore {solution.name.toLowerCase()}
          <ArrowUpRight
            className="h-4 w-4 transition group-hover:rotate-45"
            strokeWidth={2}
          />
        </span>
      </div>
    </motion.a>
  );
}
