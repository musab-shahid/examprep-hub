import { useEffect, useState, useCallback, useRef } from 'react';
import { RefreshCw, X } from 'lucide-react';

export function UpdatePrompt({ offlineVisible = false }: { offlineVisible?: boolean }) {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const registrationRef = useRef<ServiceWorkerRegistration | null>(null);

  useEffect(() => {
    if (!('serviceWorker' in navigator)) return;

    let mounted = true;

    const checkForUpdates = async () => {
      try {
        const reg = await navigator.serviceWorker.getRegistration();
        if (!reg) return;
        registrationRef.current = reg;

        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;
          if (!newWorker) return;
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              if (mounted) setUpdateAvailable(true);
            }
          });
        });

        // If a waiting worker already exists on load, show the banner
        if (reg.waiting && navigator.serviceWorker.controller) {
          setUpdateAvailable(true);
        }
      } catch {
        // Silently fail in production; log in dev
        if (import.meta.env.DEV) console.warn('[SW] update check failed');
      }
    };

    checkForUpdates();

    // Check for updates when the tab becomes visible
    const onVisibility = () => {
      if (document.visibilityState === 'visible') {
        registrationRef.current?.update().catch(() => {});
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    // Also check periodically (every 4 hours while open)
    const interval = setInterval(() => {
      registrationRef.current?.update().catch(() => {});
    }, 4 * 60 * 60 * 1000);

    return () => {
      mounted = false;
      document.removeEventListener('visibilitychange', onVisibility);
      clearInterval(interval);
    };
  }, []);

  const handleUpdate = useCallback(() => {
    const reg = registrationRef.current;
    if (reg?.waiting) {
      reg.waiting.postMessage({ type: 'SKIP_WAITING' });
    }
  }, []);

  // Reload when the new SW takes control
  useEffect(() => {
    if (!updateAvailable) return;
    const onControllerChange = () => location.reload();
    navigator.serviceWorker.addEventListener('controllerchange', onControllerChange);
    return () => navigator.serviceWorker.removeEventListener('controllerchange', onControllerChange);
  }, [updateAvailable]);

  if (!updateAvailable) return null;

  return (
    <div className="fixed top-0 inset-x-0 z-[60] animate-fade-in-up" style={{ top: offlineVisible ? '2.5rem' : 0 }}>
      <div className="mx-auto max-w-md px-4 pt-[env(safe-area-inset-top)]">
        <div className="rounded-b-2xl border border-b-0 border-slate-200 bg-white shadow-lg px-4 py-3 flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-400 to-sky-600 flex items-center justify-center shrink-0 shadow-sm">
            <RefreshCw className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-slate-900 text-sm">Update available <span className="text-slate-400 font-normal">v{__APP_VERSION__}</span></p>
            <p className="text-slate-500 text-xs mt-0.5">A new version of ExamPrep Hub is ready. Restart to get the latest questions and fixes.</p>
          </div>
          <button
            onClick={handleUpdate}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-brand-500 to-brand-600 text-white text-xs font-semibold hover:opacity-90 transition-opacity shadow-sm shrink-0"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Restart
          </button>
        </div>
      </div>
    </div>
  );
}
