"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { PRODUCT_CATEGORIES, type Product } from "@/lib/supabase/types";

type Mode = "create" | "edit";

const STORAGE_BUCKET = "product-images";
const STORAGE_PATH_MARKER = `/storage/v1/object/public/${STORAGE_BUCKET}/`;

/** Pull the storage object path from a Supabase public URL. Returns null
 *  for non-Supabase URLs (e.g. /services-page/foo.jpg seeded photos), so we
 *  don't accidentally try to delete a static asset. */
function extractStoragePath(url: string | null | undefined): string | null {
  if (!url) return null;
  const idx = url.indexOf(STORAGE_PATH_MARKER);
  if (idx === -1) return null;
  const path = url.slice(idx + STORAGE_PATH_MARKER.length);
  const q = path.indexOf("?");
  return q === -1 ? path : path.slice(0, q);
}

export function ProductForm({
  mode,
  initial,
}: {
  mode: Mode;
  initial?: Product;
}) {
  const router = useRouter();
  const supabase = createSupabaseBrowserClient();

  const [name, setName] = useState(initial?.name ?? "");
  const [category, setCategory] = useState(initial?.category ?? "Laptop");
  const [brand, setBrand] = useState(initial?.brand ?? "");
  const [description, setDescription] = useState(initial?.description ?? "");
  const [price, setPrice] = useState<string>(
    initial?.price != null ? String(initial.price) : "",
  );
  const [stockQty, setStockQty] = useState<string>(
    initial?.stock_qty != null ? String(initial.stock_qty) : "0",
  );
  const [inStock, setInStock] = useState(initial?.in_stock ?? true);
  const [featured, setFeatured] = useState(initial?.featured ?? false);
  const [imageUrl, setImageUrl] = useState<string | null>(
    initial?.image_url ?? null,
  );

  // Storage paths that should be deleted from the bucket once the form is
  // successfully saved (the user replaced or removed them but the DB row
  // still points at them until save commits).
  const [pendingDelete, setPendingDelete] = useState<string[]>([]);

  const [busy, setBusy] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function queueOldImageForDelete(currentUrl: string | null | undefined) {
    const path = extractStoragePath(currentUrl);
    if (path) setPendingDelete((prev) => [...prev, path]);
  }

  async function onUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setError(null);
    setUploading(true);

    // Mark the existing image (if any, and if it's in Supabase storage) for
    // cleanup once the form is saved.
    queueOldImageForDelete(imageUrl);

    const ext = file.name.split(".").pop() ?? "jpg";
    const path = `products/${crypto.randomUUID()}.${ext}`;

    const { error: upErr } = await supabase.storage
      .from(STORAGE_BUCKET)
      .upload(path, file, { upsert: false });

    if (upErr) {
      setError(upErr.message);
      setUploading(false);
      return;
    }

    const { data } = supabase.storage.from(STORAGE_BUCKET).getPublicUrl(path);

    setImageUrl(data.publicUrl);
    setUploading(false);
    // Reset the file input so re-selecting the same file still triggers
    e.target.value = "";
  }

  function onRemoveImage() {
    queueOldImageForDelete(imageUrl);
    setImageUrl(null);
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setBusy(true);

    const payload = {
      name: name.trim(),
      category,
      brand: brand.trim() || null,
      description: description.trim() || null,
      price: price.trim() === "" ? null : Number(price),
      stock_qty: stockQty.trim() === "" ? 0 : Number(stockQty),
      in_stock: inStock,
      featured,
      image_url: imageUrl,
    };

    const { error: dbErr } =
      mode === "create"
        ? await supabase.from("products").insert(payload)
        : await supabase
            .from("products")
            .update(payload)
            .eq("id", initial!.id);

    if (dbErr) {
      setBusy(false);
      setError(dbErr.message);
      return;
    }

    // Best-effort cleanup of any storage objects orphaned by this edit.
    // Failures are silenced — DB write succeeded; an orphan is recoverable.
    if (pendingDelete.length > 0) {
      const unique = Array.from(new Set(pendingDelete));
      const { error: rmErr } = await supabase.storage
        .from(STORAGE_BUCKET)
        .remove(unique);
      if (rmErr) console.warn("[admin] storage cleanup failed:", rmErr.message);
    }

    setBusy(false);
    router.push("/admin/products");
    router.refresh();
  }

  async function onDelete() {
    if (!initial) return;
    if (!confirm(`Delete "${initial.name}"? This cannot be undone.`)) return;
    setBusy(true);

    // Capture the photo path (if any) before the row goes away.
    const photoPath = extractStoragePath(initial.image_url);

    const { error: dbErr } = await supabase
      .from("products")
      .delete()
      .eq("id", initial.id);

    if (dbErr) {
      setBusy(false);
      setError(dbErr.message);
      return;
    }

    // Drop the photo from storage too. Plus any orphans queued in this session.
    const toRemove = Array.from(
      new Set([...pendingDelete, ...(photoPath ? [photoPath] : [])]),
    );
    if (toRemove.length > 0) {
      const { error: rmErr } = await supabase.storage
        .from(STORAGE_BUCKET)
        .remove(toRemove);
      if (rmErr) console.warn("[admin] storage cleanup failed:", rmErr.message);
    }

    setBusy(false);
    router.push("/admin/products");
    router.refresh();
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-8 lg:grid-cols-[1.4fr_1fr]"
    >
      <div className="space-y-5 rounded-2xl border border-mist-2 bg-white p-7">
        <Field label="Product name" required>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={inputClass}
            placeholder="HP ProBook 450 G11"
          />
        </Field>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Category" required>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={inputClass}
            >
              {PRODUCT_CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Brand">
            <input
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className={inputClass}
              placeholder="HP"
            />
          </Field>
        </div>

        <Field label="Description">
          <textarea
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={inputClass}
            placeholder="Specs, warranty terms, included accessories..."
          />
        </Field>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Price (INR)">
            <input
              type="number"
              min="0"
              step="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className={inputClass}
              placeholder="68900"
            />
          </Field>
          <Field label="Stock quantity">
            <input
              type="number"
              min="0"
              value={stockQty}
              onChange={(e) => setStockQty(e.target.value)}
              className={inputClass}
            />
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Toggle
            label="In stock"
            value={inStock}
            onChange={setInStock}
            description="Show as available on the public catalogue."
          />
          <Toggle
            label="Featured"
            value={featured}
            onChange={setFeatured}
            description="Appear in the homepage 'Featured stock' section."
          />
        </div>

        {error && (
          <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
            {error}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-3 border-t border-mist-2 pt-5">
          <button
            type="submit"
            disabled={busy || uploading}
            className="rounded-full bg-brand-600 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-brand-600/20 hover:bg-brand-700 disabled:opacity-60 transition"
          >
            {busy
              ? "Saving..."
              : mode === "create"
                ? "Create product"
                : "Save changes"}
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="rounded-full border border-mist-2 px-5 py-3 text-sm font-semibold text-ink/65 hover:bg-mist transition"
          >
            Cancel
          </button>
          {mode === "edit" && (
            <button
              type="button"
              onClick={onDelete}
              disabled={busy}
              className="ml-auto rounded-full border border-red-200 px-5 py-3 text-sm font-semibold text-red-700 hover:bg-red-50 disabled:opacity-60 transition"
            >
              Delete product
            </button>
          )}
        </div>
      </div>

      <aside className="space-y-5">
        <div className="rounded-2xl border border-mist-2 bg-white p-7">
          <h3 className="font-display text-lg text-ink">Product photo</h3>
          <p className="mt-1 text-xs text-ink/55">
            Uploaded to Supabase Storage. PNG, JPG or WebP recommended.
          </p>

          <div className="mt-5 aspect-[4/3] overflow-hidden rounded-xl border border-dashed border-mist-2 bg-mist">
            {imageUrl ? (
              <div className="relative h-full w-full">
                <Image
                  src={imageUrl}
                  alt="Product preview"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="grid h-full place-items-center text-xs uppercase tracking-widest text-ink/40">
                No photo yet
              </div>
            )}
          </div>

          <label className="mt-4 inline-flex cursor-pointer items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-xs font-semibold text-white hover:bg-ink-soft transition">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={onUpload}
            />
            {uploading
              ? "Uploading..."
              : imageUrl
                ? "Replace image"
                : "Upload image"}
          </label>
          {imageUrl && (
            <button
              type="button"
              onClick={onRemoveImage}
              className="ml-3 text-xs font-semibold text-ink/55 hover:text-red-600"
            >
              Remove
            </button>
          )}
          {pendingDelete.length > 0 && (
            <p className="mt-3 text-[11px] text-ink/45">
              {pendingDelete.length} previous photo
              {pendingDelete.length === 1 ? "" : "s"} will be removed from
              storage when you save.
            </p>
          )}
        </div>
      </aside>
    </form>
  );
}

const inputClass =
  "mt-2 w-full rounded-xl border border-mist-2 bg-mist px-4 py-3 text-sm text-ink outline-none transition focus:border-brand-500 focus:bg-white";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-widest text-ink/60">
        {label}
        {required && <span className="ml-1 text-accent-500">*</span>}
      </label>
      {children}
    </div>
  );
}

function Toggle({
  label,
  description,
  value,
  onChange,
}: {
  label: string;
  description: string;
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!value)}
      className={`flex items-start justify-between gap-4 rounded-xl border p-4 text-left transition ${
        value
          ? "border-brand-300 bg-brand-50"
          : "border-mist-2 bg-mist hover:border-brand-200"
      }`}
    >
      <div>
        <div className="text-sm font-semibold text-ink">{label}</div>
        <div className="mt-1 text-xs text-ink/55">{description}</div>
      </div>
      <span
        className={`mt-1 inline-flex h-6 w-10 shrink-0 items-center rounded-full p-0.5 transition ${
          value ? "bg-brand-600" : "bg-mist-2"
        }`}
      >
        <span
          className={`inline-block h-5 w-5 rounded-full bg-white shadow transition ${
            value ? "translate-x-4" : "translate-x-0"
          }`}
        />
      </span>
    </button>
  );
}
