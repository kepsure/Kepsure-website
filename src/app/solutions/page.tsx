import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";
import { SOLUTIONS } from "@/lib/solutions";

export const metadata = {
  title: "Solutions",
  description:
    "Cyber security, IT infrastructure, data backup & recovery, email, software licensing and enterprise solutions — engineered, deployed and supported by Kepsure.",
};

export default function SolutionsIndex() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Solutions"
          title="Six lines of defence for the IT your business depends on."
          description="From the firewall at the perimeter to the identity provider at the core — pick a layer and Kepsure designs, deploys and operates it."
          breadcrumbs={[
            { href: "/", label: "Home" },
            { label: "Solutions" },
          ]}
        />

        <section className="bg-white pb-24">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 md:px-8 lg:grid-cols-2">
            {SOLUTIONS.map((s, i) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.slug}
                  href={`/solutions/${s.slug}`}
                  className="group relative flex gap-6 overflow-hidden rounded-3xl border border-mist-2 bg-white p-7 transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-900/8 md:p-9"
                >
                  <div className="relative">
                    <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-brand-700 to-brand-900 text-white shadow-lg shadow-brand-700/15">
                      <Icon className="h-8 w-8" strokeWidth={1.7} />
                    </div>
                    <span className="mt-3 block text-center text-[10px] font-bold uppercase tracking-[0.28em] text-brand-300">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display text-2xl text-ink">
                      {s.name}
                    </h2>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-accent-600">
                      {s.tagline}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-ink/65">
                      {s.summary}
                    </p>
                    <ul className="mt-5 grid gap-1.5 text-sm text-ink/70">
                      {s.capabilities.slice(0, 3).map((c) => (
                        <li key={c} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-500" />
                          {c}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 transition group-hover:gap-2">
                      Explore {s.name.toLowerCase()}
                      <ArrowUpRight
                        className="h-4 w-4 transition group-hover:rotate-45"
                        strokeWidth={2}
                      />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
