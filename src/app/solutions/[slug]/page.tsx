import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";
import { SOLUTIONS, getSolution } from "@/lib/solutions";

export function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = getSolution(slug);
  if (!s) return { title: "Solution not found" };
  return {
    title: s.name,
    description: s.summary,
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();
  const Icon = solution.icon;
  const others = SOLUTIONS.filter((s) => s.slug !== slug);

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow={solution.tagline}
          title={solution.name}
          description={solution.summary}
          breadcrumbs={[
            { href: "/", label: "Home" },
            { href: "/solutions", label: "Solutions" },
            { label: solution.name },
          ]}
        />

        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-700 to-brand-900 text-white shadow-lg shadow-brand-700/15">
                <Icon className="h-8 w-8" strokeWidth={1.7} />
              </div>
              <h2 className="font-display mt-8 text-3xl text-ink md:text-4xl">
                What we deliver
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {solution.capabilities.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-3 rounded-xl border border-mist-2 bg-mist/50 p-4"
                  >
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-500 text-white">
                      <Check className="h-3.5 w-3.5" strokeWidth={2.6} />
                    </span>
                    <span className="text-sm leading-relaxed text-ink/75">
                      {c}
                    </span>
                  </li>
                ))}
              </ul>

              <h2 className="font-display mt-16 text-3xl text-ink md:text-4xl">
                Outcomes you can measure
              </h2>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {solution.outcomes.map((o, i) => (
                  <div
                    key={o.title}
                    className="rounded-2xl border border-mist-2 bg-white p-6 shadow-sm"
                  >
                    <span className="text-xs font-bold uppercase tracking-[0.28em] text-accent-600">
                      Outcome 0{i + 1}
                    </span>
                    <h3 className="font-display mt-3 text-xl text-ink">
                      {o.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/65">
                      {o.body}
                    </p>
                  </div>
                ))}
              </div>

              <h2 className="font-display mt-16 text-3xl text-ink md:text-4xl">
                Frequently asked
              </h2>
              <div className="mt-6 divide-y divide-mist-2 overflow-hidden rounded-2xl border border-mist-2 bg-white">
                {solution.faqs.map((f) => (
                  <details key={f.q} className="group p-6 open:bg-mist/30">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-semibold text-ink">
                      <span>{f.q}</span>
                      <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700 transition group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 text-sm leading-relaxed text-ink/65">
                      {f.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-5">
                <div className="rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-7 shadow-sm">
                  <span className="text-xs font-bold uppercase tracking-[0.28em] text-accent-600">
                    Get started
                  </span>
                  <h3 className="font-display mt-2 text-2xl text-ink">
                    Talk to a {solution.name.toLowerCase()} engineer
                  </h3>
                  <p className="mt-3 text-sm text-ink/65">
                    A 30-minute scoping call — no slide deck, no soft sell. We
                    respond same business day.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-700/15 transition hover:bg-brand-800"
                  >
                    Request consultation
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
                  </Link>
                </div>

                <div className="rounded-3xl border border-mist-2 bg-white p-7">
                  <h4 className="text-xs font-bold uppercase tracking-[0.28em] text-brand-700">
                    Other solutions
                  </h4>
                  <ul className="mt-4 divide-y divide-mist-2">
                    {others.map((o) => {
                      const OIcon = o.icon;
                      return (
                        <li key={o.slug}>
                          <Link
                            href={`/solutions/${o.slug}`}
                            className="group flex items-center gap-3 py-3 text-sm text-ink/75 hover:text-brand-700"
                          >
                            <span className="grid h-9 w-9 place-items-center rounded-lg bg-mist text-brand-700 transition group-hover:bg-brand-700 group-hover:text-white">
                              <OIcon className="h-4 w-4" strokeWidth={1.8} />
                            </span>
                            <span className="flex-1 font-medium">{o.name}</span>
                            <ArrowUpRight
                              className="h-4 w-4 text-ink/30 transition group-hover:text-brand-700"
                              strokeWidth={2}
                            />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
