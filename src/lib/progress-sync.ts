/**
 * Optional cloud backup of AppData via Supabase (app_progress table).
 * Requires VITE_SUPABASE_URL + VITE_SUPABASE_ANON_KEY and migration applied.
 * Local storage remains source of truth while offline.
 */
import { env, isAiProxyConfigured } from './runtime-env.ts';
import type { AppData } from '../types.ts';

const DEVICE_KEY = 'examprep-device-id';

export function isProgressSyncConfigured(): boolean {
  return Boolean(env.SUPABASE_URL && env.SUPABASE_ANON_KEY);
}

export function getDeviceId(): string {
  try {
    let id = localStorage.getItem(DEVICE_KEY);
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem(DEVICE_KEY, id);
    }
    return id;
  } catch {
    return 'anonymous';
  }
}

function restUrl(path: string): string {
  return `${env.SUPABASE_URL.replace(/\/$/, '')}/rest/v1/${path}`;
}

function headers(): HeadersInit {
  return {
    'Content-Type': 'application/json',
    apikey: env.SUPABASE_ANON_KEY,
    Authorization: `Bearer ${env.SUPABASE_ANON_KEY}`,
    Prefer: 'resolution=merge-duplicates,return=minimal',
  };
}

/** Push local AppData snapshot to Supabase. */
export async function pushProgress(data: AppData): Promise<{ ok: boolean; error?: string }> {
  if (!isProgressSyncConfigured()) return { ok: false, error: 'not-configured' };
  try {
    const res = await fetch(restUrl('app_progress'), {
      method: 'POST',
      headers: {
        ...headers(),
        Prefer: 'resolution=merge-duplicates,return=minimal',
      },
      body: JSON.stringify({
        device_id: getDeviceId(),
        payload: data,
        updated_at: new Date().toISOString(),
      }),
    });
    if (!res.ok) {
      const t = await res.text().catch(() => '');
      return { ok: false, error: t || `HTTP ${res.status}` };
    }
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : 'push-failed' };
  }
}

/** Pull cloud snapshot if newer than localUpdatedAt (ISO). */
export async function pullProgress(): Promise<{ ok: boolean; data?: AppData; error?: string }> {
  if (!isProgressSyncConfigured()) return { ok: false, error: 'not-configured' };
  try {
    const id = encodeURIComponent(getDeviceId());
    const res = await fetch(
      restUrl(`app_progress?device_id=eq.${id}&select=payload,updated_at`),
      { headers: headers() },
    );
    if (!res.ok) {
      return { ok: false, error: `HTTP ${res.status}` };
    }
    const rows = await res.json();
    if (!Array.isArray(rows) || rows.length === 0) {
      return { ok: false, error: 'empty' };
    }
    return { ok: true, data: rows[0].payload as AppData };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : 'pull-failed' };
  }
}

/** Re-export for settings UI convenience */
export { isAiProxyConfigured };
