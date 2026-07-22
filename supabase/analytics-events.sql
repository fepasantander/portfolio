create table if not exists public.analytics_events (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  event text not null,
  route text not null,
  referer text,
  device text,
  viewport text,
  language text,
  session uuid not null,
  properties jsonb not null default '{}'::jsonb
);

alter table public.analytics_events enable row level security;
create policy "anonymous event insert" on public.analytics_events for insert to anon with check (true);
