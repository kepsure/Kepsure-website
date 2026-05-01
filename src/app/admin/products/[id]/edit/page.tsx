import { notFound, redirect } from "next/navigation";
import {
  createSupabaseServerClient,
  isSupabaseConfigured,
} from "@/lib/supabase/server";
import { AdminShell } from "@/components/admin/AdminShell";
import { ProductForm } from "@/components/admin/ProductForm";
import type { Product } from "@/lib/supabase/types";

export const dynamic = "force-dynamic";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  if (!isSupabaseConfigured()) redirect("/admin");
  const { id } = await params;
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: product } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (!product) notFound();

  return (
    <AdminShell email={user?.email ?? null}>
      <header className="mb-8">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-700">
          Inventory
        </span>
        <h1 className="font-display mt-2 text-4xl text-ink">Edit product</h1>
        <p className="mt-2 text-ink/65">
          Update details, swap the photo or remove this product entirely.
        </p>
      </header>
      <ProductForm mode="edit" initial={product as Product} />
    </AdminShell>
  );
}
