import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductsHero } from "@/components/ProductsHero";
import { ProductsFilter } from "@/components/ProductsFilter";
import { ProductCard } from "@/components/ProductCard";
import { CTABanner } from "@/components/CTABanner";
import { listProducts } from "@/lib/products";
import { PRODUCT_CATEGORIES } from "@/lib/supabase/types";

export const metadata = {
  title: "Product Zone",
  description:
    "Browse Kepsure's curated catalogue of firewalls, servers, switches, backup, email security and software licensing — sourced from Cisco, Microsoft, VMware, Sophos, Veeam, Barracuda, HPE and more.",
};

export default async function ProductZonePage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const sp = await searchParams;
  const category = sp.category;

  // Always pull the full catalogue for stats + counts; filter for the grid.
  const allProducts = await listProducts();
  const products = category
    ? allProducts.filter((p) => p.category === category)
    : allProducts;

  const counts: Record<string, number> = {};
  for (const c of PRODUCT_CATEGORIES) counts[c] = 0;
  for (const p of allProducts) {
    counts[p.category] = (counts[p.category] ?? 0) + 1;
  }
  const totalCount = allProducts.length;
  const inStockCount = allProducts.filter((p) => p.in_stock).length;
  const brandCount = new Set(
    allProducts.map((p) => p.brand).filter(Boolean),
  ).size;
  const categoryCount = Object.values(counts).filter((n) => n > 0).length;

  return (
    <>
      <Header />
      <main>
        <ProductsHero
          breadcrumbs={[
            { href: "/", label: "Home" },
            { label: "Product Zone" },
            ...(category ? [{ label: category }] : []),
          ]}
          totalCount={totalCount}
          inStockCount={inStockCount}
          brandCount={brandCount}
          categoryCount={categoryCount}
        />

        <ProductsFilter
          categories={PRODUCT_CATEGORIES}
          counts={counts}
          totalCount={totalCount}
          active={category}
        />

        <section className="relative overflow-hidden bg-white pb-24 pt-12">
          <div
            className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-accent-200/30 blur-3xl"
            style={{ animation: "blob-drift 22s ease-in-out infinite" }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-brand-200/30 blur-3xl"
            style={{ animation: "blob-drift 28s ease-in-out 5s infinite reverse" }}
            aria-hidden
          />

          <div className="relative mx-auto max-w-7xl px-4 md:px-8">
            {category && (
              <div className="mb-6 flex items-baseline justify-between gap-4">
                <h2 className="font-display text-2xl text-ink md:text-3xl">
                  {category}
                </h2>
                <span className="text-xs font-semibold uppercase tracking-widest text-ink/55">
                  {products.length}{" "}
                  {products.length === 1 ? "product" : "products"}
                </span>
              </div>
            )}

            {products.length === 0 ? (
              <EmptyState category={category} />
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((p, i) => (
                  <ProductCard key={p.id} p={p} index={i} />
                ))}
              </div>
            )}
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}

function EmptyState({ category }: { category?: string }) {
  return (
    <div className="rounded-3xl border border-dashed border-mist-2 bg-mist/60 p-16 text-center">
      <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-brand-700" aria-hidden>
          <path
            d="M3 7l9-4 9 4-9 4-9-4z M3 7v10l9 4 9-4V7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h3 className="font-display mt-5 text-2xl text-ink">
        {category
          ? `Nothing in ${category} yet`
          : "Catalogue coming soon"}
      </h3>
      <p className="mx-auto mt-3 max-w-md text-ink/65">
        We&apos;re still publishing this category. In the meantime — tell us
        what you need and we&apos;ll specify it.
      </p>
      <Link
        href="/contact"
        className="mt-6 inline-flex rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-brand-700/15 transition hover:bg-brand-800"
      >
        Request a custom quote
      </Link>
    </div>
  );
}
