import { Button } from '@/components/ui';

type Props = {
  trackTitle: string;
  enrolled: boolean;
  enrolling?: boolean;
  onBegin: () => void;
  accentClass?: string;
};

/** Preview vs enrolled CTA for track landings. Preview never enrolls; only Begin does. */
export function TrackEnrollmentBanner({
  trackTitle,
  enrolled,
  enrolling,
  onBegin,
  accentClass = 'from-sky-500 to-cyan-600',
}: Props) {
  if (enrolled) {
    return (
      <div className="rounded-card border border-emerald-200 bg-emerald-50 px-3.5 py-3 sm:px-5 sm:py-4 mb-4 sm:mb-6">
        <p className="text-sm font-semibold text-emerald-900">Enrolled · Active workspace</p>
        <p className="text-xs text-emerald-800 mt-0.5">
          {trackTitle} is in My Tracks. Study, practice, and review use this track&apos;s subjects.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-card border border-slate-200 bg-white px-3.5 py-3 sm:px-5 sm:py-4 mb-4 sm:mb-6 shadow-card">
      <p className="text-sm font-semibold text-slate-900">Not started</p>
      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
        You are previewing {trackTitle}. Browsing this page does not enroll you or change your other
        tracks. Begin to add it to My Tracks and unlock study and practice.
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <Button
          type="button"
          className={`bg-gradient-to-r ${accentClass} text-white border-0`}
          disabled={enrolling}
          onClick={onBegin}
        >
          {enrolling ? 'Starting…' : `Begin ${trackTitle}`}
        </Button>
      </div>
    </div>
  );
}
