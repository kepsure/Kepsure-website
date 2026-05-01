"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Filter } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

export function ProductsFilter({
  categories,
  counts,
  totalCount,
  active,
}: {
  categories: readonly string[];
  counts: Record<string, number>;
  totalCount: number;
  active: string | undefined;
}) {
  return (
    <section className="sticky top-[68px] z-20 border-b border-mist-2 bg-white/85 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex items-center gap-3 py-4">
          <span className="hidden shrink-0 items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.28em] text-ink/50 md:inline-flex">
            <Filter className="h-3 w-3" strokeWidth={2.4} />
            Filter by
          </span>
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="-mx-4 flex flex-1 gap-2 overflow-x-auto px-4 [scrollbar-width:none] md:mx-0 md:flex-wrap md:overflow-visible md:px-0 [&::-webkit-scrollbar]:hidden"
          >
            <Pill href="/products" label="All" count={totalCount} active={!active} />
            {categories.map((c) => (
              <Pill
                key={c}
                href={`/products?category=${encodeURIComponent(c)}`}
                label={c}
                count={counts[c] ?? 0}
                active={active === c}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Pill({
  href,
  label,
  count,
  active,
}: {
  href: string;
  label: string;
  count: number;
  active: boolean;
}) {
  const disabled = count === 0 && !active;
  return (
    <Link
      href={href}
      aria-disabled={disabled}
      className={`group inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition ${
        active
          ? "bg-brand-700 text-white shadow-md shadow-brand-700/25"
          : disabled
            ? "border border-mist-2 bg-mist text-ink/35 pointer-events-none"
            : "border border-mist-2 bg-white text-ink/70 hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700 hover:shadow"
      }`}
    >
      <span>{label}</span>
      <span
        className={`grid h-5 min-w-[20px] place-items-center rounded-full px-1 text-[10px] font-bold ${
          active
            ? "bg-white/15 text-white"
            : "bg-mist text-ink/55 group-hover:bg-accent-100 group-hover:text-accent-700"
        }`}
      >
        {count}
      </span>
    </Link>
  );
}
