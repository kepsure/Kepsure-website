import { createSupabaseServerClient, isSupabaseConfigured } from "./supabase/server";
import type { Product } from "./supabase/types";

const SAMPLE: Product[] = [
  {
    id: "demo-1",
    name: "Sophos XGS 2100 Firewall",
    category: "Firewall",
    brand: "Sophos",
    description:
      "Next-generation firewall with Xstream architecture — IPS, sandboxing, TLS 1.3 inspection and integrated SD-WAN. Sized for 100–200 user sites.",
    price: null,
    in_stock: true,
    stock_qty: 4,
    image_url: null,
    featured: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "demo-2",
    name: "Microsoft 365 Business Premium (per user / yr)",
    category: "Software Licence",
    brand: "Microsoft",
    description:
      "Office desktop apps, Exchange + SharePoint + Teams, Intune device management and Defender for Business. Annual commitment.",
    price: null,
    in_stock: true,
    stock_qty: 999,
    image_url: null,
    featured: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "demo-3",
    name: "Veeam Data Platform Foundation",
    category: "Backup",
    brand: "Veeam",
    description:
      "Image-based backup, replication and instant recovery for VMware, Hyper-V and physical workloads. Per-instance licensing.",
    price: null,
    in_stock: true,
    stock_qty: 12,
    image_url: null,
    featured: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "demo-4",
    name: "Cisco Catalyst 9200L 24-port",
    category: "Switch",
    brand: "Cisco",
    description:
      "24× 1 GbE access switch with PoE+, modular uplinks and Cisco DNA Essentials — for distribution-layer office networks.",
    price: null,
    in_stock: true,
    stock_qty: 7,
    image_url: null,
    featured: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "demo-5",
    name: "Barracuda Email Gateway Defense",
    category: "Email Security",
    brand: "Barracuda",
    description:
      "Inbound and outbound email security — anti-phishing, AI-driven impersonation defence, link protection and DMARC reporting.",
    price: null,
    in_stock: true,
    stock_qty: 25,
    image_url: null,
    featured: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "demo-6",
    name: "HPE ProLiant DL380 Gen11",
    category: "Server",
    brand: "HPE",
    description:
      "2U dual-socket Intel Xeon server — flexible storage, GPU-ready, iLO 6 management. Configurable for virtualisation, databases and HCI.",
    price: null,
    in_stock: false,
    stock_qty: 0,
    image_url: null,
    featured: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

export async function listProducts(opts?: {
  featured?: boolean;
  category?: string;
  limit?: number;
}): Promise<Product[]> {
  if (!isSupabaseConfigured()) {
    let items = [...SAMPLE];
    if (opts?.featured) items = items.filter((p) => p.featured);
    if (opts?.category) items = items.filter((p) => p.category === opts.category);
    if (opts?.limit) items = items.slice(0, opts.limit);
    return items;
  }

  const supabase = await createSupabaseServerClient();
  let query = supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  if (opts?.featured) query = query.eq("featured", true);
  if (opts?.category) query = query.eq("category", opts.category);
  if (opts?.limit) query = query.limit(opts.limit);

  const { data, error } = await query;
  if (error) {
    console.error("[products] supabase error:", error.message);
    return [];
  }
  return (data ?? []) as Product[];
}

export async function getProduct(id: string): Promise<Product | null> {
  if (!isSupabaseConfigured()) {
    return SAMPLE.find((p) => p.id === id) ?? null;
  }
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .maybeSingle();
  if (error) {
    console.error("[products] supabase error:", error.message);
    return null;
  }
  return (data as Product) ?? null;
}

export function formatPrice(p: number | null) {
  if (p == null) return "On request";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(p);
}
