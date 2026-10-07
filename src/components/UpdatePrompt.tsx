import { useEffect, useState, useCallback, useRef } from 'react';
import { RefreshCw } from 'lucide-react';

/**
 * Detects a waiting service worker and offers a controlled restart.
 * Does not call skipWaiting itself — SW activates only after the user confirms.
 */
export function UpdatePrompt() {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [restarting, setRestarting] = useState(false);
  const registrationRef = useRef<ServiceWorkerRegistration | null>(null);
  /** Only reload after the user asked for Restart (avoid reload on first SW claim). */
  const userAcceptedUpdateRef = useRef(false);

  useEffect(() => {
    if (!('serviceWorker' in navigator)) return;

    let mounted = true;

    const watchWorker = (worker: ServiceWorker | null) => {
      if (!worker) return;
      if (worker.state === 'installed' && navigator.serviceWorker.controller) {
        if (mounted) setUpdateAvailable(true);
        return;
      }
      worker.addEventListener('statechange', () => {
        if (worker.state === 'installed' && navigator.serviceWorker.controller) {
          if (mounted) setUpdateAvailable(true);
        }
      });
    };

    const attachToRegistration = (reg: ServiceWorkerRegistration) => {
      registrationRef.current = reg;

      // Already waiting from a previous session
      if (reg.waiting && navigator.serviceWorker.controller) {
        if (mounted) setUpdateAvailable(true);
      }
      // Install in progress when we attach
      watchWorker(reg.installing);

      reg.addEventListener('updatefound', () => {
        watchWorker(reg.installing);
      });
    };

    const init = async () => {
      try {
        // Prefer an existing registration; if main.tsx is still registering,
        // `ready` waits until an active worker exists (first visit) or resolves
        // with the current registration.
        let reg = await navigator.serviceWorker.getRegistration();
        if (!reg) {
          // Concurrent with main.tsx register — ready bridges the race
          reg = await navigator.serviceWorker.ready;
        }
        if (!mounted || !reg) return;
        attachToRegistration(reg);

        // Pull latest SW file (no-op if unchanged)
        reg.update().catch(() => {});
      } catch {
        if (import.meta.env.DEV) console.warn('[SW] update check failed');
      }
    };

    init();

    const onVisibility = () => {
      if (document.visibilityState === 'visible') {
        registrationRef.current?.update().catch(() => {});
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    const interval = setInterval(() => {
      registrationRef.current?.update().catch(() => {});
    }, 4 * 60 * 60 * 1000);

    return () => {
      mounted = false;
      document.removeEventListener('visibilitychange', onVisibility);
      clearInterval(interval);
    };
  }, []);

  // Reload only after user-triggered SKIP_WAITING (not on first install claim)
  useEffect(() => {
    if (!('serviceWorker' in navigator)) return;
    const onControllerChange = () => {
      if (!userAcceptedUpdateRef.current) return;
      window.location.reload();
    };
    navigator.serviceWorker.addEventListener('controllerchange', onControllerChange);
    return () => {
      navigator.serviceWorker.removeEventListener('controllerchange', onControllerChange);
    };
  }, []);

  const handleUpdate = useCallback(() => {
    const reg = registrationRef.current;
    const waiting = reg?.waiting;
    if (!waiting) {
      // Waiting worker gone — still try a hard reload so the user is unstuck
      window.location.reload();
      return;
    }
    userAcceptedUpdateRef.current = true;
    setRestarting(true);
    waiting.postMessage({ type: 'SKIP_WAITING' });
    // Fallback if controllerchange never fires (rare)
    window.setTimeout(() => {
      if (userAcceptedUpdateRef.current) window.location.reload();
    }, 2000);
  }, []);

  if (!updateAvailable) return null;

  return (
    <div className="fixed top-0 inset-x-0 z-[60] animate-fade-in-up">
      <div className="mx-auto max-w-md px-4 pt-[env(safe-area-inset-top)]">
        <div className="rounded-b-2xl border border-b-0 border-slate-200 bg-white shadow-lg px-4 py-3 flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-400 to-sky-600 flex items-center justify-center shrink-0 shadow-sm">
            <RefreshCw className={`w-4 h-4 text-white ${restarting ? 'animate-spin' : ''}`} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-slate-900 text-sm">Update available</p>
            <p className="text-slate-500 text-xs mt-0.5">A new version of ExamPrep Hub is ready.</p>
          </div>
          <button
            type="button"
            onClick={handleUpdate}
            disabled={restarting}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-brand-500 to-brand-600 text-white text-xs font-semibold hover:opacity-90 transition-opacity shadow-sm shrink-0 disabled:opacity-70"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${restarting ? 'animate-spin' : ''}`} />
            {restarting ? 'Restarting…' : 'Restart'}
          </button>
        </div>
      </div>
    </div>
  );
}
