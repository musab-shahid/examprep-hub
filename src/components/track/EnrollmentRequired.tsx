import { useData } from '@/hooks/useData';
import { useRouter } from '@/router';
import { assertCanStudy, getMembership } from '@/lib/track-access';
import { openTrackOptions } from '@/router/openTrack';
import { listTrackDefinitions } from '@/data/tracks';
import { isTrackId, type TrackId } from '@/data/tracks';
import { Button } from '@/components/ui';
import { useSubjectSelection } from '@/contexts/subject-selection-context';
import { trackIcon, trackAccentClasses } from '@/lib/track-chrome';
import { BookOpen, ChevronRight, Lock } from 'lucide-react';

type Props = {
  children: React.ReactNode;
  requiredTrack?: TrackId;
};

/**
 * Blocks learning screens until enrollment is satisfied.
 * Shows a full-page centred gate — not a small floating card.
 */
export function EnrollmentRequired({ children, requiredTrack }: Props) {
  const { data, setActiveEnrolledTrack } = useData();
  const { setActiveTrack } = useSubjectSelection();
  const { navigate } = useRouter();

  const check = requiredTrack
    ? assertCanStudy(data, requiredTrack)
    : assertCanStudy(data);

  if (check.ok) return <>{children}</>;

  // Enrolled but no active workspace
  if (check.reason === 'no-active-workspace') {
    const enrolled = Object.keys(getMembership(data).enrollments).filter(isTrackId) as TrackId[];
    return (
      <GatePage
        icon={<BookOpen className="w-8 h-8 text-slate-400" />}
        title="Activate a workspace"
        description="You are enrolled, but no track is active. Activate one to open Study and Practice."
      >
        <div className="flex flex-wrap gap-3 justify-center">
          {enrolled.map((id) => {
            const title = listTrackDefinitions().find((t) => t.id === id)?.shortTitle ?? id;
            return (
              <Button
                key={id}
                onClick={() => {
                  const r = setActiveEnrolledTrack(id);
                  if (r.ok) setActiveTrack(id);
                }}
              >
                Activate {title}
              </Button>
            );
          })}
        </div>
      </GatePage>
    );
  }

  // Not enrolled at all — show track picker
  const exploreTrack: TrackId | null =
    requiredTrack && isTrackId(requiredTrack) ? requiredTrack : null;

  const tracks = exploreTrack
    ? listTrackDefinitions().filter((t) => t.id === exploreTrack)
    : listTrackDefinitions().filter((t) => t.status === 'available');

  return (
    <GatePage
      icon={<Lock className="w-8 h-8 text-slate-400" />}
      title="Begin a track to continue"
      description="Study, practice, and review unlock after you begin a track. Preview FPSC or HAT first — beginning is an explicit step."
    >
      <div className="w-full max-w-lg mx-auto space-y-3">
        {tracks.map((track) => {
          const Icon = trackIcon(track.id);
          const accent = trackAccentClasses(track.id);
          return (
            <button
              key={track.id}
              type="button"
              onClick={() => navigate({ ...openTrackOptions(track.id) })}
              className="w-full flex items-center gap-4 p-4 rounded-card bg-white border border-slate-200 hover:border-slate-300 hover:shadow-card-hover transition-all text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
            >
              <div className={`w-10 h-10 rounded-btn ${accent.iconWrap} flex items-center justify-center shrink-0`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-slate-900 text-sm leading-tight">{track.title}</p>
                <p className="text-xs text-slate-500 mt-0.5 line-clamp-2 leading-relaxed">{track.description}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
            </button>
          );
        })}
      </div>
    </GatePage>
  );
}

function GatePage({
  icon,
  title,
  description,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-16 text-center">
      <div className="mb-5 w-16 h-16 rounded-card bg-slate-50 border border-slate-100 flex items-center justify-center shadow-card">
        {icon}
      </div>
      <h2 className="text-xl font-semibold text-slate-900 tracking-tight mb-2">{title}</h2>
      <p className="text-sm text-slate-500 max-w-sm leading-relaxed mb-8">{description}</p>
      {children}
    </div>
  );
}
