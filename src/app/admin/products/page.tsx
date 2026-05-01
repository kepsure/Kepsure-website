import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import {
  createSupabaseServerClient,
  isSupabaseConfigured,
} from "@/lib/supabase/server";
import { AdminShell } from "@/components/admin/AdminShell";
import { formatPrice } from "@/lib/products";
import type { Product } from "@/lib/supabase/types";
import { Pencil, Plus } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminProducts() {
  if (!isSupabaseConfigured()) redirect("/admin");
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data: products } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  const items = (products ?? []) as Product[];

  return (
    <AdminShell email={user?.email ?? null}>
      <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-700">
            Inventory
          </span>
          <h1 className="font-display mt-2 text-4xl text-ink">All products</h1>
          <p className="mt-2 text-ink/65">
            {items.length} {items.length === 1 ? "item" : "items"} listed.
          </p>
        </div>
        <Link
          href="/admin/products/new"
          className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-600/20 hover:bg-brand-700 transition"
        >
          <Plus className="h-4 w-4" strokeWidth={2.2} />
          Add product
        </Link>
      </header>

      {items.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-mist-2 bg-white p-16 text-center">
          <h3 className="font-display text-2xl text-ink">
            No products yet
          </h3>
          <p className="mt-3 text-ink/65">
            Add your first product to populate the public catalogue.
          </p>
          <Link
            href="/admin/products/new"
            className="mt-6 inline-flex rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition"
          >
            Add product
          </Link>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-mist-2 bg-white">
          <table className="w-full text-sm">
            <thead className="bg-mist text-xs uppercase tracking-widest text-ink/55">
              <tr>
                <th className="px-5 py-4 text-left">Product</th>
                <th className="px-5 py-4 text-left">Category</th>
                <th className="px-5 py-4 text-right">Price</th>
                <th className="px-5 py-4 text-center">Stock</th>
                <th className="px-5 py-4 text-center">Featured</th>
                <th className="px-5 py-4 text-right"></th>
              </tr>
            </thead>
            <tbody>
              {items.map((p) => (
                <tr
                  key={p.id}
                  className="border-t border-mist-2 hover:bg-mist/40"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="relative h-12 w-12 overflow-hidden rounded-lg bg-mist">
                        {p.image_url ? (
                          <Image
                            src={p.image_url}
                            alt=""
                            fill
                            sizes="48px"
                            className="object-cover"
                          />
                        ) : (
                          <span className="grid h-full place-items-center text-xs text-ink/30">
                            —
                          </span>
                        )}
                      </div>
                      <div>
                        <div className="font-semibold text-ink">{p.name}</div>
                        {p.brand && (
                          <div className="text-xs text-ink/55">{p.brand}</div>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-ink/75">{p.category}</td>
                  <td className="px-5 py-4 text-right font-semibold text-ink">
                    {formatPrice(p.price)}
                  </td>
                  <td className="px-5 py-4 text-center">
                    {p.in_stock ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-800">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                        {p.stock_qty ?? 0}
                      </span>
                    ) : (
                      <span className="inline-flex rounded-full bg-mist-2 px-2.5 py-1 text-xs font-semibold text-ink/55">
                        Out
                      </span>
                    )}
                  </td>
                  <td className="px-5 py-4 text-center text-ink/65">
                    {p.featured ? "★" : "—"}
                  </td>
                  <td className="px-5 py-4 text-right">
                    <Link
                      href={`/admin/products/${p.id}/edit`}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-mist-2 px-3 py-1.5 text-xs font-semibold text-ink/75 hover:border-brand-300 hover:text-brand-700"
                    >
                      <Pencil className="h-3.5 w-3.5" strokeWidth={1.8} />
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </AdminShell>
  );
}
