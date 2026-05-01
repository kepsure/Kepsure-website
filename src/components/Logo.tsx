import Image from "next/image";
import Link from "next/link";

/**
 * Brand logo.
 *
 *  variant="dark"  (default) — full-colour PNG on a transparent background.
 *                  Use on LIGHT backgrounds (header, page heros, admin, etc).
 *  variant="light" — same artwork wrapped in a white pill so the dark
 *                  wordmark stays readable on dark backgrounds (footer).
 */
export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  if (variant === "light") {
    return (
      <Link
        href="/"
        className="inline-flex items-center group"
        aria-label="Kepsure Solutions Pvt. Ltd."
      >
        <span className="inline-flex items-center rounded-xl bg-white px-4 py-3 shadow-sm ring-1 ring-white/30">
          <Image
            src="/brand/logo.png"
            alt="Kepsure Solutions Pvt. Ltd."
            width={1658}
            height={620}
            className="h-10 w-auto md:h-12"
          />
        </span>
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className="inline-flex items-center group"
      aria-label="Kepsure Solutions Pvt. Ltd."
    >
      <Image
        src="/brand/logo.png"
        alt="Kepsure Solutions Pvt. Ltd."
        width={1658}
        height={620}
        priority
        className="h-11 w-auto md:h-12 transition group-hover:opacity-90"
      />
    </Link>
  );
}
