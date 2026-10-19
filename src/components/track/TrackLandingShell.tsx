import type { ReactNode } from 'react';
import { ChevronRight, Lock, CheckCircle2, Sparkles, AlertCircle } from 'lucide-react';
import { PageContainer, Card, Button, ProgressBar } from '@/components/ui';

type TrackLandingShellProps = {
  title: string;
  description: string;
  enrolled: boolean;
  isActiveFocus: boolean;
  enrolling?: boolean;
  enrollError?: string | null;
  onBegin: () => void;
  onContinue: () => void;
  accentClass: string;
  profileSlot?: ReactNode;
  /** Plain text / numbers shown in the hero — must use text-white/90 */
  summary: ReactNode;
  catalog: ReactNode;
  footer?: ReactNode;
};

/**
 * Shared layout for track landing pages (FPSC, HAT, generic).
 * Hero band → enrollment gate → subject catalog → footer actions.
 */
export function TrackLandingShell({
  title,
  description,
  enrolled,
  isActiveFocus,
  enrolling = false,
  enrollError = null,
  onBegin,
  onContinue,
  accentClass,
  profileSlot,
  summary,
  catalog,
  footer,
}: TrackLandingShellProps) {
  return (
    <PageContainer>
      {/* Hero band */}
      <div
        className={`relative overflow-hidden rounded-card bg-gradient-to-br ${accentClass} text-white px-5 py-6 sm:px-8 sm:py-8 mb-5 shadow-card`}
      >
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            {enrolled ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-chip bg-white/15 text-white text-xs font-medium ring-1 ring-white/20">
                <CheckCircle2 className="w-3.5 h-3.5" aria-hidden />
                Enrolled
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-chip bg-white/15 text-white text-xs font-medium ring-1 ring-white/20">
                <Lock className="w-3.5 h-3.5" aria-hidden />
                Preview only
              </span>
            )}
            {isActiveFocus && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-chip bg-white/20 text-white text-xs font-semibold ring-1 ring-white/30">
                <Sparkles className="w-3.5 h-3.5" aria-hidden />
                Active workspace
              </span>
            )}
          </div>
          <h1 className="text-2xl sm:text-[1.75rem] font-semibold tracking-tight leading-tight">
            {title}
          </h1>
          <p className="text-white/80 text-sm mt-1.5 max-w-2xl leading-relaxed">{description}</p>
          {/* Summary slot — always white text inside the hero */}
          <div className="text-sm text-white/90 mt-3 font-medium">{summary}</div>
        </div>
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.4) 0%, transparent 50%)',
          }}
          aria-hidden
        />
      </div>

      {profileSlot}

      {/* Enrollment gate / action card */}
      {!enrolled ? (
        <Card className="p-5 sm:p-6 mb-5">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="min-w-0">
              <h2 className="text-base font-semibold text-slate-900">Begin this track</h2>
              <p className="text-sm text-slate-600 mt-1 max-w-lg leading-relaxed">
                Enrolling adds this track to your workspace. You can preview the catalog below —
                study and practice unlock after you begin.
              </p>
            </div>
            <div className="shrink-0 flex flex-col items-stretch sm:items-end gap-2">
              <Button onClick={onBegin} disabled={enrolling} size="lg">
                {enrolling ? 'Starting…' : 'Begin track'}
              </Button>
              {enrollError && (
                <p className="text-sm text-danger-600 flex items-center gap-1.5" role="alert">
                  <AlertCircle className="w-4 h-4" aria-hidden />
                  {enrollError}
                </p>
              )}
            </div>
          </div>
        </Card>
      ) : !isActiveFocus ? (
        <Card className="p-4 mb-5 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-slate-900">Track enrolled</p>
            <p className="text-xs text-slate-500 mt-0.5">
              This is not your active workspace. Switch to focus study here.
            </p>
          </div>
          <Button variant="secondary" onClick={onContinue} className="shrink-0">
            Switch here
          </Button>
        </Card>
      ) : null}

      {/* Subject catalog */}
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
          {enrolled ? 'Subjects' : 'Subject preview'}
        </p>
        {catalog}
      </div>

      {footer}
    </PageContainer>
  );
}

export function TrackSubjectList({ children }: { children: ReactNode }) {
  return <div className="space-y-2">{children}</div>;
}

type TrackSubjectRowProps = {
  title: string;
  meta: string;
  progressPct: number | null;
  disabled?: boolean;
  onOpen: () => void;
  actionLabel: string;
  /** Optional color dot class e.g. "bg-cyan-500" */
  dotClass?: string;
};

export function TrackSubjectRow({
  title,
  meta,
  progressPct,
  disabled = false,
  onOpen,
  actionLabel,
  dotClass,
}: TrackSubjectRowProps) {
  return (
    <Card
      elevation="interactive"
      className="p-0 overflow-hidden"
      onClick={disabled ? undefined : onOpen}
    >
      <div className="flex items-center gap-3 px-4 py-3.5">
        {/* Color dot */}
        {dotClass && (
          <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${dotClass}`} aria-hidden />
        )}
        <div className="min-w-0 flex-1">
          <p
            className={`font-semibold text-sm truncate ${
              disabled ? 'text-slate-500' : 'text-slate-900'
            }`}
          >
            {title}
          </p>
          <p className="text-xs text-slate-500 mt-0.5 truncate">{meta}</p>
          {progressPct !== null && (
            <div className="mt-2 max-w-[12rem]">
              <ProgressBar value={progressPct} ariaLabel={`${title} — ${progressPct}% studied`} />
            </div>
          )}
        </div>
        <div className="shrink-0 flex items-center gap-1.5">
          <span
            className={`text-xs font-medium px-2.5 py-1.5 rounded-btn ${
              disabled
                ? 'bg-slate-100 text-slate-400'
                : 'bg-brand-50 text-brand-700 hover:bg-brand-100'
            }`}
          >
            {actionLabel}
          </span>
          <ChevronRight className="w-4 h-4 text-slate-300" aria-hidden />
        </div>
      </div>
    </Card>
  );
}
