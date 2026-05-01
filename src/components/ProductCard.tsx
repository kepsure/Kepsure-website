import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { formatPrice } from "@/lib/products";
import type { Product } from "@/lib/supabase/types";

export function ProductCard({ p }: { p: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-mist-2 bg-white transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-900/8">
      <div className="relative aspect-[4/3] overflow-hidden bg-mist">
        {p.image_url ? (
          <Image
            src={p.image_url}
            alt={p.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition group-hover:scale-105"
          />
        ) : (
          <div className="grid h-full place-items-center bg-gradient-to-br from-brand-50 to-mist text-brand-300">
            <svg viewBox="0 0 64 64" className="h-16 w-16" aria-hidden>
              <rect x="10" y="14" width="44" height="34" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="32" cy="31" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
              <rect x="22" y="50" width="20" height="3" rx="1" fill="currentColor" />
            </svg>
          </div>
        )}
        <span className="absolute left-3 top-3 inline-flex rounded-full bg-white/95 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-widest text-brand-700 shadow-sm backdrop-blur">
          {p.category}
        </span>
        {p.featured && (
          <span className="absolute right-3 top-3 inline-flex rounded-full bg-accent-500 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-widest text-white shadow-sm">
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
        <h3 className="font-display mt-1 text-lg leading-tight text-ink">
          {p.name}
        </h3>
        {p.description && (
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink/65">
            {p.description}
          </p>
        )}

        <div className="mt-5 flex items-end justify-between gap-3 border-t border-mist-2 pt-4">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-widest text-ink/45">
              Price
            </div>
            <div className="font-display mt-0.5 text-lg text-ink">
              {formatPrice(p.price)}
            </div>
          </div>
          <div className="text-right">
            {p.in_stock ? (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-semibold text-brand-800">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                In stock
              </span>
            ) : (
              <span className="inline-flex rounded-full bg-mist-2 px-2.5 py-1 text-[11px] font-semibold text-ink/55">
                On order
              </span>
            )}
          </div>
        </div>

        <Link
          href="/contact"
          className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full border border-brand-200 bg-white px-4 py-2 text-xs font-semibold text-brand-800 transition hover:border-brand-400 hover:bg-brand-50"
        >
          Request quote
          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
        </Link>
      </div>
    </article>
  );
}
