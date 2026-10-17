import { useData } from '@/hooks/useData';
import { useSubjectSelection } from '@/contexts/subject-selection-context';
import { useRouter } from '@/router';
import { getTrackDefinition, type TrackId } from '@/data/tracks';
import { subjectsForScope } from '@/lib/track-scope';
import { isTrackEnrolled } from '@/lib/track-access';
import { TrackEnrollmentBanner } from '@/components/track/TrackEnrollmentBanner';
import { ExamProfilePicker } from '@/components/track/ExamProfilePicker';
import { PageContainer, Card, Button } from '@/components/ui';
import { trackAccentClasses, trackIcon } from '@/lib/track-chrome';
import { openTrackOptions } from '@/router/openTrack';

/**
 * Generic track overview for registry tracks that do not use FPSC/HAT branded landings.
 * Begin / Continue / profile picker share the same lifecycle as specialized screens.
 */
export function TrackOverviewScreen({ trackId }: { trackId: TrackId }) {
  const def = getTrackDefinition(trackId);
  const { data, enrollInTrack, setActiveEnrolledTrack, trackMembership } = useData();
  const { setActiveTrack } = useSubjectSelection();
  const { navigate } = useRouter();
  const enrolled = isTrackEnrolled(data, trackId);
  const isActive = trackMembership.activeTrackId === trackId;
  const subjects = subjectsForScope({
    trackId,
    examId: trackMembership.enrollments[trackId]?.activeExamId ?? null,
  });
  const accent = trackAccentClasses(trackId);
  const Icon = trackIcon(trackId);

  const handleBegin = () => {
    const r = enrollInTrack(trackId);
    if (r.ok) setActiveTrack(trackId);
  };

  return (
    <PageContainer>
      <div className={`rounded-card bg-gradient-to-r ${accent.gradient} text-white px-4 py-5 sm:px-6 sm:py-8 mb-4 sm:mb-6`}>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-btn bg-white/20 flex items-center justify-center">
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">{def.title}</h1>
            <p className="text-sm text-white/90 mt-0.5">{def.description}</p>
          </div>
        </div>
      </div>

      <TrackEnrollmentBanner
        trackTitle={def.shortTitle}
        enrolled={enrolled}
        isActiveFocus={isActive}
        onBegin={handleBegin}
        onContinue={() => {
          setActiveEnrolledTrack(trackId);
          setActiveTrack(trackId);
        }}
        accentClass={accent.gradient}
      />

      <ExamProfilePicker trackId={trackId} enrolled={enrolled} />

      <Card className="p-3.5 sm:p-5 mb-4">
        <h2 className="text-sm font-semibold text-slate-900 mb-2">Subjects</h2>
        <ul className="space-y-1.5">
          {subjects.map((s) => (
            <li key={s.id} className="text-sm text-slate-700">
              {s.title}
            </li>
          ))}
          {subjects.length === 0 && (
            <li className="text-sm text-slate-500">No subjects registered for this track yet.</li>
          )}
        </ul>
      </Card>

      {enrolled && (
        <div className="flex flex-wrap gap-2">
          <Button type="button" onClick={() => navigate({ screen: 'learn', parent: null })}>
            Study
          </Button>
          <Button type="button" variant="secondary" onClick={() => navigate({ screen: 'practice', parent: null })}>
            Practice
          </Button>
        </div>
      )}
    </PageContainer>
  );
}
