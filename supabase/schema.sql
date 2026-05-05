-- Kepsure Solutions — Supabase schema
-- Run this in the Supabase SQL editor of a fresh project.

create extension if not exists "uuid-ossp";

-- =====================================================================
-- products table
-- =====================================================================
create table if not exists public.products (
  id           uuid primary key default uuid_generate_v4(),
  name         text not null,
  category     text not null,
  brand        text,
  description  text,
  price        numeric(12, 2),
  in_stock     boolean not null default true,
  stock_qty    integer default 0,
  image_url    text,
  featured     boolean not null default false,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

create index if not exists products_category_idx on public.products (category);
create index if not exists products_featured_idx on public.products (featured) where featured = true;
create index if not exists products_created_idx  on public.products (created_at desc);

-- updated_at auto-update
create or replace function public.set_updated_at() returns trigger
language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

drop trigger if exists products_set_updated_at on public.products;
create trigger products_set_updated_at
before update on public.products
for each row execute function public.set_updated_at();

-- =====================================================================
-- Table-level GRANTs for Supabase API roles.
--   Without these, RLS doesn't even get a chance — Postgres rejects with
--   "permission denied for table products" before policy evaluation.
-- =====================================================================
grant select on public.products to anon;
grant select, insert, update, delete on public.products to authenticated;

-- =====================================================================
-- Row Level Security
--   Public site can READ products.
--   Authenticated admins can WRITE.
-- =====================================================================
alter table public.products enable row level security;

drop policy if exists "products read for everyone" on public.products;
create policy "products read for everyone"
  on public.products for select
  to anon, authenticated
  using (true);

drop policy if exists "products write for authenticated" on public.products;
create policy "products write for authenticated"
  on public.products for all
  to authenticated
  using (true)
  with check (true);

-- =====================================================================
-- Storage bucket for product photos
--   Run this in the SQL editor (Storage tab uses the same RPC).
-- =====================================================================
insert into storage.buckets (id, name, public)
  values ('product-images', 'product-images', true)
  on conflict (id) do nothing;

drop policy if exists "product-images public read" on storage.objects;
create policy "product-images public read"
  on storage.objects for select
  using (bucket_id = 'product-images');

drop policy if exists "product-images authenticated write" on storage.objects;
create policy "product-images authenticated write"
  on storage.objects for all
  to authenticated
  using (bucket_id = 'product-images')
  with check (bucket_id = 'product-images');
