import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
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
  const products = await listProducts({ category });

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Product Zone"
          title={
            category
              ? `${category} — what we recommend.`
              : "The gear we trust. Curated by our engineers."
          }
          description="A short list of products Kepsure has audited, deployed and supported in production. Don't see what you need? Tell us the problem — we&apos;ll specify it."
          breadcrumbs={[
            { href: "/", label: "Home" },
            { label: "Product Zone" },
            ...(category ? [{ label: category }] : []),
          ]}
        />

        <section className="bg-white pt-10">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] md:mx-0 md:flex-wrap md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden">
              <Link
                href="/products"
                className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                  !category
                    ? "bg-brand-700 text-white"
                    : "border border-mist-2 bg-white text-ink/70 hover:border-brand-300 hover:text-brand-700"
                }`}
              >
                All
              </Link>
              {PRODUCT_CATEGORIES.map((c) => (
                <Link
                  key={c}
                  href={`/products?category=${encodeURIComponent(c)}`}
                  className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                    category === c
                      ? "bg-brand-700 text-white"
                      : "border border-mist-2 bg-white text-ink/70 hover:border-brand-300 hover:text-brand-700"
                  }`}
                >
                  {c}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white pb-20 pt-10">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            {products.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-mist-2 bg-mist p-16 text-center">
                <h3 className="font-display text-2xl text-ink">
                  Nothing listed yet
                </h3>
                <p className="mt-3 text-ink/65">
                  Our team will publish the catalogue shortly. In the meantime —
                  tell us what you need and we&apos;ll specify it.
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-800"
                >
                  Request a custom quote
                </Link>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((p) => (
                  <ProductCard key={p.id} p={p} />
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
