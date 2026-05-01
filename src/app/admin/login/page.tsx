"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

export default function LoginPage() {
  return (
    <div className="grid min-h-screen place-items-center bg-mist p-6">
      <div className="w-full max-w-md rounded-3xl border border-mist-2 bg-white p-8 shadow-sm md:p-10">
        <Logo />
        <h1 className="font-display mt-8 text-3xl text-ink">Admin sign in</h1>
        <p className="mt-2 text-sm text-ink/65">
          Manage your inventory and product listings.
        </p>
        <Suspense fallback={<FormFallback />}>
          <LoginForm />
        </Suspense>
        <Link
          href="/"
          className="mt-8 block text-center text-xs text-ink/55 hover:text-brand-700"
        >
          ← Back to public site
        </Link>
      </div>
    </div>
  );
}

function FormFallback() {
  return <div className="mt-8 h-44 animate-pulse rounded-xl bg-mist" />;
}

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const supabase = createSupabaseBrowserClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setBusy(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setBusy(false);
    if (error) {
      setError(error.message);
      return;
    }
    const redirectTo = params.get("redirectTo") ?? "/admin";
    router.replace(redirectTo);
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 space-y-4">
      <div>
        <label
          htmlFor="email"
          className="text-xs font-semibold uppercase tracking-widest text-ink/60"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 w-full rounded-xl border border-mist-2 bg-mist px-4 py-3 text-sm text-ink outline-none transition focus:border-brand-500 focus:bg-white"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="text-xs font-semibold uppercase tracking-widest text-ink/60"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          required
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-2 w-full rounded-xl border border-mist-2 bg-mist px-4 py-3 text-sm text-ink outline-none transition focus:border-brand-500 focus:bg-white"
        />
      </div>
      {error && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={busy}
        className="w-full rounded-full bg-brand-700 px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-brand-700/20 hover:bg-brand-800 disabled:opacity-60 transition"
      >
        {busy ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
}
