-- Optional cloud backup of learner AppData (JSON blob). Enable stricter RLS before public launch.
create table if not exists public.app_progress (
  device_id text primary key,
  payload jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.app_progress enable row level security;

create policy "device read own"
  on public.app_progress for select
  using (true);

create policy "device upsert"
  on public.app_progress for insert
  with check (true);

create policy "device update"
  on public.app_progress for update
  using (true);
