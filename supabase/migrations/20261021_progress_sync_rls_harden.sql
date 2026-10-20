-- P0: Harden app_progress isolation.
-- Previous policies used USING (true) / WITH CHECK (true), which allowed any
-- role with table grants to read/write every device row.
--
-- Model: authenticated ownership only.
--   - user_id must equal auth.uid()
--   - device_id is a secondary label within that user's rows (not a secret)
-- Anonymous clients using only the anon key cannot SELECT/INSERT/UPDATE.
-- Apply this migration in the Supabase SQL editor or via CLI before public use.

alter table public.app_progress
  add column if not exists user_id uuid references auth.users (id) on delete cascade;

-- One row per (user, device). Keep device_id unique only among authenticated owners.
alter table public.app_progress drop constraint if exists app_progress_pkey;

-- If legacy rows exist without user_id, they become inaccessible under new policies
-- until claimed by a logged-in user (optional manual cleanup).
do $$
begin
  if not exists (
    select 1 from pg_constraint
    where conname = 'app_progress_user_device_pkey'
  ) then
    -- Prefer composite PK when possible; fall back if duplicates block it.
    begin
      alter table public.app_progress
        add constraint app_progress_user_device_pkey primary key (user_id, device_id);
    exception when others then
      -- Leave table without new PK if legacy data conflicts; unique index still helps.
      create unique index if not exists app_progress_user_device_uidx
        on public.app_progress (user_id, device_id)
        where user_id is not null;
    end;
  end if;
end $$;

create index if not exists app_progress_user_id_idx on public.app_progress (user_id);

alter table public.app_progress enable row level security;

drop policy if exists "device read own" on public.app_progress;
drop policy if exists "device upsert" on public.app_progress;
drop policy if exists "device update" on public.app_progress;
drop policy if exists "device delete own" on public.app_progress;

-- Authenticated users may only touch their own rows.
create policy "progress_select_own"
  on public.app_progress
  for select
  to authenticated
  using (user_id = auth.uid());

create policy "progress_insert_own"
  on public.app_progress
  for insert
  to authenticated
  with check (user_id = auth.uid());

create policy "progress_update_own"
  on public.app_progress
  for update
  to authenticated
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

create policy "progress_delete_own"
  on public.app_progress
  for delete
  to authenticated
  using (user_id = auth.uid());

-- Explicitly: no policies for anon → anon denied under RLS.
revoke all on table public.app_progress from anon;
grant select, insert, update, delete on table public.app_progress to authenticated;
