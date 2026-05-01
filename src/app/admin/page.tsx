import Link from "next/link";
import {
  createSupabaseServerClient,
  isSupabaseConfigured,
} from "@/lib/supabase/server";
import { AdminShell } from "@/components/admin/AdminShell";
import { Package, CheckCircle2, AlertTriangle, Star } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminHome() {
  if (!isSupabaseConfigured()) {
    return <SetupNeeded />;
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { count: total } = await supabase
    .from("products")
    .select("*", { count: "exact", head: true });
  const { count: outOfStock } = await supabase
    .from("products")
    .select("*", { count: "exact", head: true })
    .eq("in_stock", false);
  const { count: featured } = await supabase
    .from("products")
    .select("*", { count: "exact", head: true })
    .eq("featured", true);

  const stats = [
    { icon: Package, label: "Total products", value: total ?? 0 },
    {
      icon: CheckCircle2,
      label: "In stock",
      value: (total ?? 0) - (outOfStock ?? 0),
    },
    { icon: AlertTriangle, label: "Out of stock", value: outOfStock ?? 0 },
    { icon: Star, label: "Featured", value: featured ?? 0 },
  ];

  return (
    <AdminShell email={user?.email ?? null}>
      <header className="mb-10">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-700">
          Dashboard
        </span>
        <h1 className="font-display mt-2 text-4xl text-ink">
          Welcome back{user?.email ? `, ${user.email.split("@")[0]}` : ""}.
        </h1>
        <p className="mt-2 text-ink/65">
          Live snapshot of your inventory.
        </p>
      </header>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-mist-2 bg-white p-6"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-widest text-ink/55">
                {s.label}
              </span>
              <s.icon className="h-4 w-4 text-brand-600" strokeWidth={1.8} />
            </div>
            <div className="font-display mt-3 text-4xl text-ink">
              {s.value}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Link
          href="/admin/products/new"
          className="group rounded-2xl border border-mist-2 bg-white p-7 transition hover:-translate-y-0.5 hover:border-brand-400 hover:shadow-lg hover:shadow-brand-500/5"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-700">
            Quick action
          </span>
          <h3 className="font-display mt-2 text-2xl text-ink">
            Add a new product
          </h3>
          <p className="mt-2 text-sm text-ink/65">
            Upload a photo, set price and availability — appears on the public
            catalogue immediately.
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
            New product →
          </span>
        </Link>
        <Link
          href="/admin/products"
          className="group rounded-2xl border border-mist-2 bg-white p-7 transition hover:-translate-y-0.5 hover:border-brand-400 hover:shadow-lg hover:shadow-brand-500/5"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-700">
            Inventory
          </span>
          <h3 className="font-display mt-2 text-2xl text-ink">
            Manage all products
          </h3>
          <p className="mt-2 text-sm text-ink/65">
            Edit, mark out-of-stock or remove items from your catalogue.
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
            Open product list →
          </span>
        </Link>
      </div>
    </AdminShell>
  );
}

function SetupNeeded() {
  return (
    <div className="grid min-h-screen place-items-center p-6">
      <div className="max-w-2xl rounded-3xl border border-mist-2 bg-white p-10 shadow-sm">
        <h1 className="font-display text-3xl text-ink">
          Supabase not configured yet
        </h1>
        <p className="mt-3 text-ink/70">
          To enable the admin panel and live product catalogue, create a Supabase
          project and add credentials to <code>.env.local</code>:
        </p>
        <pre className="mt-4 overflow-x-auto rounded-xl bg-ink p-4 text-xs leading-relaxed text-brand-200">
{`NEXT_PUBLIC_SUPABASE_URL=https://YOUR-PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR-ANON-KEY
SUPABASE_SERVICE_ROLE_KEY=YOUR-SERVICE-ROLE-KEY`}
        </pre>
        <p className="mt-4 text-sm text-ink/65">
          Then run <code>supabase/schema.sql</code> in the Supabase SQL editor and
          create an admin user under Authentication → Users. Restart{" "}
          <code>npm run dev</code> and visit{" "}
          <Link href="/admin/login" className="text-brand-700 underline">
            /admin/login
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
