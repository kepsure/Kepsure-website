// Client-safe formatting helpers (no server-only imports).

export function formatPrice(p: number | null) {
  if (p == null) return "On request";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(p);
}
