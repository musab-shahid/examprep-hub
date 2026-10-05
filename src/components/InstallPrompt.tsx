import { useEffect, useState, useCallback } from 'react';
import { Download, X, Smartphone } from 'lucide-react';

const DISMISS_KEY = 'pwa-install-dismissed';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(DISMISS_KEY)) return;

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setVisible(true);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = useCallback(async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted' || outcome === 'dismissed') {
      setVisible(false);
      setDeferredPrompt(null);
    }
  }, [deferredPrompt]);

  const handleDismiss = useCallback(() => {
    setVisible(false);
    localStorage.setItem(DISMISS_KEY, '1');
  }, []);

  if (!visible || !deferredPrompt) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-sm animate-fade-in-up">
      <div className="rounded-2xl border border-slate-200 bg-white shadow-xl p-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center shrink-0 shadow-md">
            <Smartphone className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-slate-900 text-sm">Add to Home Screen</h3>
            <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">
              Install ExamPrep Hub for quick access — it works offline just like a native app.
            </p>
            <div className="flex items-center gap-2 mt-3">
              <button
                onClick={handleInstall}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-brand-500 to-brand-600 text-white text-xs font-semibold hover:opacity-90 transition-opacity shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                Install
              </button>
              <button
                onClick={handleDismiss}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-lg text-slate-400 text-xs font-medium hover:text-slate-600 hover:bg-slate-100 transition-colors"
              >
                <X className="w-3.5 h-3.5" />
                Not now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
