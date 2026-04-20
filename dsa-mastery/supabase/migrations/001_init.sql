-- DSA Mastery · v1 schema
-- Run this in the Supabase SQL editor (or via `supabase db push` if using the CLI).
-- It creates the day_logs table, enables RLS, and restricts rows to the authenticated user.

create table if not exists public.day_logs (
  user_id uuid not null references auth.users(id) on delete cascade,
  day_key text not null,
  completed boolean not null default false,
  confidence smallint,
  time_spent_sec integer,
  completed_at timestamptz,
  updated_at timestamptz not null default now(),
  primary key (user_id, day_key)
);

create index if not exists day_logs_user_updated_idx
  on public.day_logs (user_id, updated_at desc);

alter table public.day_logs enable row level security;

-- Each user can only read/write their own rows.
drop policy if exists "own rows select" on public.day_logs;
create policy "own rows select"
  on public.day_logs for select
  using (auth.uid() = user_id);

drop policy if exists "own rows insert" on public.day_logs;
create policy "own rows insert"
  on public.day_logs for insert
  with check (auth.uid() = user_id);

drop policy if exists "own rows update" on public.day_logs;
create policy "own rows update"
  on public.day_logs for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "own rows delete" on public.day_logs;
create policy "own rows delete"
  on public.day_logs for delete
  using (auth.uid() = user_id);

-- Room for future tables (journal_entries, reviews, excalidraw_files) — added in v2+.
