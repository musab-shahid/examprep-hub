import type { ReactNode } from 'react';
import { PageContainer, ScreenHeader, Button } from '@/components/ui';
import { TrackEnrollmentBanner } from '@/components/track/TrackEnrollmentBanner';

type Props = {
  title: string;
  description: string;
  enrolled: boolean;
  isActiveFocus: boolean;
  enrolling?: boolean;
  onBegin: () => void;
  onContinue?: () => void;
  enrollError?: string | null;
  accentClass?: string;
  /** Compact profile control (e.g. ExamProfilePicker) */
  profileSlot?: ReactNode;
  /** One-line orientation metrics — keep small */
  summary?: ReactNode;
  /** Subject / section catalog */
  catalog: ReactNode;
  /** Secondary actions (mock, practice all) */
  footer?: ReactNode;
};

/**
 * Shared track landing composition:
 * 1) Identity  2) Begin/Continue  3) Profile  4) Summary  5) Catalog  6) Secondary
 */
export function TrackLandingShell({
  title,
  description,
  enrolled,
  isActiveFocus,
  enrolling,
  onBegin,
  onContinue,
  enrollError,
  accentClass,
  profileSlot,
  summary,
  catalog,
  footer,
}: Props) {
  return (
    <PageContainer>
      <ScreenHeader title={title} subtitle={description} />

      <TrackEnrollmentBanner
        trackTitle={title}
        enrolled={enrolled}
        isActiveFocus={isActiveFocus}
        enrolling={enrolling}
        onBegin={onBegin}
        onContinue={onContinue}
        accentClass={accentClass}
      />

      {enrollError && (
        <p className="text-sm text-danger-600 mb-4" role="alert">
          {enrollError}
        </p>
      )}

      {profileSlot && <div className="mb-5">{profileSlot}</div>}

      {summary && <div className="mb-5 text-sm text-slate-600">{summary}</div>}

      <section className="mb-6" aria-label="Subjects">
        <h2 className="text-sm font-medium text-slate-600 mb-3">Subjects</h2>
        {catalog}
      </section>

      {footer && <div className="mt-2">{footer}</div>}
    </PageContainer>
  );
}

/** Compact subject row for track catalogs — list, not decorative grid cards */
export function TrackSubjectRow({
  title,
  meta,
  progressPct,
  onOpen,
  disabled,
  actionLabel = 'Open',
}: {
  title: string;
  meta: string;
  progressPct?: number | null;
  onOpen: () => void;
  disabled?: boolean;
  actionLabel?: string;
}) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-3 border-b border-slate-100 last:border-b-0 ${
        disabled ? 'opacity-60' : 'hover:bg-slate-50'
      }`}
    >
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-slate-900 truncate">{title}</p>
        <p className="text-xs text-slate-500 mt-0.5 truncate">{meta}</p>
        {typeof progressPct === 'number' && (
          <div className="mt-1.5 h-1 w-full max-w-[12rem] rounded-full bg-slate-200 overflow-hidden">
            <div
              className="h-full rounded-full bg-brand-600"
              style={{ width: `${Math.max(0, Math.min(100, progressPct))}%` }}
              role="progressbar"
              aria-valuenow={progressPct}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${progressPct}% topics studied`}
            />
          </div>
        )}
      </div>
      <Button
        type="button"
        variant="secondary"
        disabled={disabled}
        onClick={onOpen}
        className="shrink-0 text-sm px-3 py-1.5"
      >
        {actionLabel}
      </Button>
    </div>
  );
}

export function TrackSubjectList({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-card border border-slate-200 bg-white overflow-hidden divide-y-0">
      {children}
    </div>
  );
}
