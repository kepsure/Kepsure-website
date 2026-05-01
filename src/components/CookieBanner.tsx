"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "kepsure-cookie-ack";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const ack = window.localStorage.getItem(STORAGE_KEY);
    if (!ack) {
      const t = setTimeout(() => setShow(true), 700);
      return () => clearTimeout(t);
    }
  }, []);

  function dismiss() {
    setShow(false);
    if (typeof window !== "undefined") {
      try {
        window.localStorage.setItem(STORAGE_KEY, new Date().toISOString());
      } catch {
        /* localStorage may be blocked — ignore */
      }
    }
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="dialog"
          aria-label="Cookie notice"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-2xl rounded-2xl bg-brand-900/95 p-5 shadow-2xl shadow-brand-900/30 ring-1 ring-accent-400/20 backdrop-blur-md md:bottom-6 md:left-1/2 md:-translate-x-1/2"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-500/15 text-accent-300 ring-1 ring-accent-400/30">
              <Cookie className="h-5 w-5" strokeWidth={1.6} />
            </span>
            <div className="flex-1 text-sm text-white/90">
              <p className="font-semibold text-white">We use minimal cookies</p>
              <p className="mt-1 text-white/65">
                Only what&apos;s required for the site to work — no analytics,
                no tracking, no ads. See our{" "}
                <Link
                  href="/cookies"
                  className="font-semibold text-accent-300 underline underline-offset-2 hover:text-accent-200"
                >
                  Cookie policy
                </Link>{" "}
                for details.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="/cookies"
                onClick={dismiss}
                className="rounded-full px-4 py-2 text-xs font-semibold text-white/65 hover:text-white transition"
              >
                Learn more
              </Link>
              <button
                onClick={dismiss}
                className="rounded-full bg-accent-500 px-5 py-2.5 text-xs font-semibold text-brand-900 shadow-md shadow-accent-600/30 hover:bg-accent-400 transition"
              >
                Got it
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
