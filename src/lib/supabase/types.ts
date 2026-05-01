export type Product = {
  id: string;
  name: string;
  category: string;
  brand: string | null;
  description: string | null;
  price: number | null;
  in_stock: boolean;
  stock_qty: number | null;
  image_url: string | null;
  featured: boolean;
  created_at: string;
  updated_at: string;
};

export type ProductInput = Omit<Product, "id" | "created_at" | "updated_at">;

export const PRODUCT_CATEGORIES = [
  "Firewall",
  "Server",
  "Storage",
  "Switch",
  "Router",
  "Access Point",
  "Endpoint Security",
  "Backup",
  "SIEM",
  "Email Security",
  "Software Licence",
  "Service",
] as const;

export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number];
