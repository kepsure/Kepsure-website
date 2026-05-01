"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Logo } from "../Logo";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { LayoutDashboard, Package, LogOut, Plus } from "lucide-react";

const NAV = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/products", label: "Products", icon: Package },
  { href: "/admin/products/new", label: "Add Product", icon: Plus },
];

export function AdminShell({
  email,
  children,
}: {
  email: string | null;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createSupabaseBrowserClient();

  async function signOut() {
    await supabase.auth.signOut();
    router.replace("/admin/login");
    router.refresh();
  }

  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-[260px_1fr]">
      <aside className="border-r border-mist-2 bg-white p-6 md:sticky md:top-0 md:h-screen">
        <Logo />
        <nav className="mt-8 space-y-1">
          {NAV.map((n) => {
            const active =
              n.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                  active
                    ? "bg-brand-50 text-brand-800"
                    : "text-ink/65 hover:bg-mist hover:text-ink"
                }`}
              >
                <n.icon className="h-4 w-4" strokeWidth={1.8} />
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-12 rounded-2xl border border-mist-2 bg-mist p-4">
          <div className="text-xs uppercase tracking-widest text-ink/50">
            Signed in as
          </div>
          <div className="mt-1 truncate text-sm font-semibold text-ink">
            {email ?? "Unknown"}
          </div>
          <button
            onClick={signOut}
            className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-ink/65 hover:text-brand-700"
          >
            <LogOut className="h-3.5 w-3.5" strokeWidth={2} />
            Sign out
          </button>
        </div>

        <Link
          href="/"
          className="mt-6 block text-xs text-ink/50 hover:text-brand-700"
        >
          ← View public site
        </Link>
      </aside>

      <main className="p-6 md:p-10">{children}</main>
    </div>
  );
}
