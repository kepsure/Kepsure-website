import Link from "next/link";

/**
 * Kepsure Solutions logo — recreated as inline SVG so it scales crisply at any
 * size and theme. Replace with the official PNG at /public/brand/logo.png
 * whenever supplied (and switch to next/image).
 */
export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const wordmarkColor = variant === "light" ? "#ffffff" : "#1a3a6b";
  const subColor = variant === "light" ? "rgba(255,255,255,0.85)" : "#1a3a6b";
  const swooshColor = "#f39200";
  const underlineColor = variant === "light" ? "#fd9a1c" : "#1a3a6b";

  return (
    <Link
      href="/"
      className="inline-flex items-center group"
      aria-label="Kepsure Solutions Pvt. Ltd."
    >
      <svg
        viewBox="0 0 360 110"
        className="h-12 w-auto md:h-14 transition group-hover:opacity-95"
        role="img"
      >
        <title>Kepsure Solutions Pvt. Ltd.</title>
        <path
          d="M 16 60 C 36 14, 132 -2, 246 26 L 252 38 C 158 14, 64 26, 30 66 Z"
          fill={swooshColor}
        />
        <text
          x="22"
          y="78"
          fontFamily="'Space Grotesk', system-ui, sans-serif"
          fontWeight="800"
          fontSize="46"
          letterSpacing="-1"
          fill={wordmarkColor}
        >
          KEPSURE
        </text>
        <rect x="22" y="84" width="266" height="2.5" fill={underlineColor} />
        <text
          x="24"
          y="102"
          fontFamily="'Space Grotesk', system-ui, sans-serif"
          fontWeight="700"
          fontSize="13"
          letterSpacing="3.5"
          fill={subColor}
        >
          SOLUTIONS PVT. LTD.
        </text>
      </svg>
    </Link>
  );
}
