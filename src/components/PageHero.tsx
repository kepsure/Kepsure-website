import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumbs?: { href?: string; label: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 via-white to-white">
      <div className="bg-grid absolute inset-0 opacity-30" aria-hidden />
      <div
        className="absolute -right-40 top-0 h-80 w-80 rounded-full bg-accent-200/40 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        {breadcrumbs && (
          <nav
            className="flex items-center gap-1 text-xs font-medium text-ink/55"
            aria-label="Breadcrumb"
          >
            {breadcrumbs.map((b, i) => (
              <span key={i} className="inline-flex items-center gap-1">
                {b.href ? (
                  <Link
                    href={b.href}
                    className="hover:text-brand-700"
                  >
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-ink/80">{b.label}</span>
                )}
                {i < breadcrumbs.length - 1 && (
                  <ChevronRight className="h-3 w-3" strokeWidth={2} />
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="mt-5 max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-brand-700 backdrop-blur">
            {eyebrow}
          </span>
          <h1 className="font-display mt-5 text-4xl leading-[1.05] tracking-tight text-ink md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-lg text-ink/65">{description}</p>
          )}
        </div>
      </div>
    </section>
  );
}
