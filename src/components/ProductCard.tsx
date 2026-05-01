"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { formatPrice } from "@/lib/format";
import type { Product } from "@/lib/supabase/types";

const ease = [0.16, 1, 0.3, 1] as const;

export function ProductCard({ p, index = 0 }: { p: Product; index?: number }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 26 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.65, delay: 0.08 + index * 0.06, ease }}
      onMouseMove={handleMouseMove}
      className="group relative isolate flex flex-col overflow-hidden rounded-2xl border border-mist-2 bg-white shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-900/10"
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
            "radial-gradient(360px circle at var(--mx) var(--my), rgba(243,146,0,0.13), transparent 50%)",
        }}
        aria-hidden
      />

      <div className="relative aspect-[4/3] overflow-hidden bg-mist">
        {p.image_url ? (
          <Image
            src={p.image_url}
            alt={p.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <PlaceholderArt />
        )}

        {/* Top badges */}
        <span className="absolute left-3 top-3 inline-flex rounded-full border border-mist-2 bg-white/95 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-700 shadow-sm backdrop-blur">
          {p.category}
        </span>
        {p.featured && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-accent-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-900 shadow-sm">
            <span className="h-1 w-1 rounded-full bg-brand-900" />
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        {p.brand && (
          <span className="text-[11px] font-bold uppercase tracking-widest text-ink/40">
            {p.brand}
          </span>
        )}
        <h3 className="font-display mt-1 text-lg leading-tight text-ink transition-colors duration-300 group-hover:text-brand-800">
          {p.name}
        </h3>
        {p.description && (
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink/65">
            {p.description}
          </p>
        )}

        <div className="mt-5 flex items-end justify-between gap-3 border-t border-mist-2 pt-4">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-ink/45">
              Price
            </div>
            <div className="font-display mt-0.5 text-lg text-ink">
              {formatPrice(p.price)}
            </div>
          </div>
          <div className="text-right">
            {p.in_stock ? (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-700">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>
                In stock
              </span>
            ) : (
              <span className="inline-flex rounded-full bg-mist-2 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-ink/55">
                On order
              </span>
            )}
          </div>
        </div>

        <Link
          href="/contact"
          className="group/cta mt-4 inline-flex items-center justify-between gap-1.5 rounded-full border border-brand-200 bg-white px-4 py-2.5 text-xs font-semibold text-brand-800 transition hover:border-brand-400 hover:bg-brand-50"
        >
          <span className="inline-flex items-center gap-1.5">
            <Check className="h-3.5 w-3.5 text-accent-500" strokeWidth={2.4} />
            Request quote
          </span>
          <ArrowUpRight
            className="h-3.5 w-3.5 transition group-hover/cta:rotate-45"
            strokeWidth={2}
          />
        </Link>
      </div>
    </motion.article>
  );
}

function PlaceholderArt() {
  return (
    <div className="grid h-full place-items-center bg-gradient-to-br from-brand-50 via-white to-mist text-brand-300">
      <svg viewBox="0 0 64 64" className="h-16 w-16" aria-hidden>
        <rect
          x="10"
          y="14"
          width="44"
          height="34"
          rx="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="32"
          cy="31"
          r="6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="22"
          y="50"
          width="20"
          height="3"
          rx="1"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
