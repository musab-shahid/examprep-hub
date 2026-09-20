import { useState, useEffect, useRef } from 'react';
import { Cloud, ChevronRight, X } from 'lucide-react';
import { clouds } from '@/data/clouds';
import { PageContainer, Card } from '@/components/ui';
import { BackButton, Breadcrumbs } from '@/components/layout/Breadcrumbs';
import type { CloudEntry } from '@/types';

const LEVELS: CloudEntry['level'][] = ['High', 'Middle', 'Low', 'Vertical'];

const levelColors: Record<CloudEntry['level'], string> = {
  High: 'bg-sky-100 text-sky-700 border-sky-200',
  Middle: 'bg-violet-100 text-violet-700 border-violet-200',
  Low: 'bg-slate-100 text-slate-700 border-slate-200',
  Vertical: 'bg-amber-100 text-amber-700 border-amber-200',
};

export function CloudAtlasScreen() {
  const [selected, setSelected] = useState<CloudEntry | null>(null);

  return (
    <PageContainer>
      <div className="flex items-center gap-2 mb-4"><BackButton /><Breadcrumbs /></div>
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Cloud Atlas</h1>
        <p className="text-slate-500 mt-1">10 cloud genera grouped by altitude level</p>
      </div>

      <div className="space-y-6">
        {LEVELS.map((level) => {
          const levelClouds = clouds.filter((c) => c.level === level);
          return (
            <div key={level}>
              <div className="flex items-center gap-2 mb-3">
                <Cloud className="w-5 h-5 text-slate-700" />
                <h2 className="font-semibold text-slate-900 text-lg">{level} Clouds</h2>
                <span className="text-slate-400 text-sm">({levelClouds.length})</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {levelClouds.map((cloud) => (
                  <Card key={cloud.name} className="p-4 cursor-pointer hover:shadow-md transition-shadow" >
                    <button onClick={() => setSelected(cloud)} className="w-full text-left">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-semibold text-slate-900">{cloud.name}</p>
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      </div>
                      <p className="text-slate-500 text-xs">{cloud.altitude}</p>
                    </button>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Detail modal */}
      {selected && (
        <CloudModal cloud={selected} levelColors={levelColors} onClose={() => setSelected(null)} />
      )}
    </PageContainer>
  );
}

function CloudModal({ cloud, levelColors, onClose }: {
  cloud: CloudEntry;
  levelColors: Record<CloudEntry['level'], string>;
  onClose: () => void;
}) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        if (focusable.length === 0) return;
        if (e.shiftKey && document.activeElement === focusable[0]) {
          e.preventDefault();
          focusable[focusable.length - 1].focus();
        } else if (!e.shiftKey && document.activeElement === focusable[focusable.length - 1]) {
          e.preventDefault();
          focusable[0].focus();
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
    >
      <Card className="max-w-md w-full p-6" >
        <div
          ref={modalRef}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cloud-modal-title"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 id="cloud-modal-title" className="text-xl font-bold text-slate-900">{cloud.name}</h3>
              <span className={`inline-block mt-1 px-2.5 py-0.5 rounded-full text-xs font-medium border ${levelColors[cloud.level]}`}>
                {cloud.level}
              </span>
            </div>
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="text-slate-400 hover:text-slate-600"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wide mb-1">Altitude</p>
              <p className="text-slate-700 text-sm">{cloud.altitude}</p>
            </div>
            <div>
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wide mb-1">Composition</p>
              <p className="text-slate-700 text-sm">{cloud.composition}</p>
            </div>
            <div>
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wide mb-1">Appearance</p>
              <p className="text-slate-700 text-sm leading-relaxed">{cloud.appearance}</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
