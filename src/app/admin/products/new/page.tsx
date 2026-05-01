import { redirect } from "next/navigation";
import {
  createSupabaseServerClient,
  isSupabaseConfigured,
} from "@/lib/supabase/server";
import { AdminShell } from "@/components/admin/AdminShell";
import { ProductForm } from "@/components/admin/ProductForm";

export const dynamic = "force-dynamic";

export default async function NewProductPage() {
  if (!isSupabaseConfigured()) redirect("/admin");
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <AdminShell email={user?.email ?? null}>
      <header className="mb-8">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-700">
          Inventory
        </span>
        <h1 className="font-display mt-2 text-4xl text-ink">Add product</h1>
        <p className="mt-2 text-ink/65">
          Fill in the details and upload a photo. Your product will appear on
          the public catalogue immediately.
        </p>
      </header>
      <ProductForm mode="create" />
    </AdminShell>
  );
}
