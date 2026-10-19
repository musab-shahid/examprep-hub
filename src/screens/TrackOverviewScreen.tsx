import { useData } from '@/hooks/useData';
import { useSubjectSelection } from '@/contexts/subject-selection-context';
import { useRouter } from '@/router';
import { getTrackDefinition, type TrackId } from '@/data/tracks';
import { subjectsForScope } from '@/lib/track-scope';
import { isTrackEnrolled } from '@/lib/track-access';
import { ExamProfilePicker } from '@/components/track/ExamProfilePicker';
import { Button } from '@/components/ui';
import { trackAccentClasses } from '@/lib/track-chrome';
import {
  TrackLandingShell,
  TrackSubjectList,
  TrackSubjectRow,
} from '@/components/track/TrackLandingShell';
import { useSubjectData } from '@/hooks/useSubjectData';
import type { SubjectId } from '@/types';

/**
 * Generic track overview for registry tracks that do not use FPSC/HAT branded landings.
 */
export function TrackOverviewScreen({ trackId }: { trackId: TrackId }) {
  const def = getTrackDefinition(trackId);
  const { data, enrollInTrack, setActiveEnrolledTrack, trackMembership } = useData();
  const { setActiveTrack, setActiveSubjectForScreen } = useSubjectSelection();
  const { navigate, currentRoute } = useRouter();
  const sd = useSubjectData();
  const enrolled = isTrackEnrolled(data, trackId);
  const isActive = trackMembership.activeTrackId === trackId;
  const examId = trackMembership.enrollments[trackId]?.activeExamId ?? null;
  const subjects = subjectsForScope({ trackId, examId });
  const accent = trackAccentClasses(trackId);

  const handleBegin = () => {
    const r = enrollInTrack(trackId);
    if (r.ok) setActiveTrack(trackId);
  };

  const openSubject = (subjectId: SubjectId) => {
    if (!enrolled) return;
    setActiveSubjectForScreen('learn', subjectId);
    navigate({ screen: 'learn', parent: currentRoute });
  };

  return (
    <TrackLandingShell
      title={def.title}
      description={def.description}
      enrolled={enrolled}
      isActiveFocus={isActive}
      onBegin={handleBegin}
      onContinue={() => {
        const sw = setActiveEnrolledTrack(trackId);
        if (sw.ok) setActiveTrack(trackId);
      }}
      accentClass={accent.gradient}
      profileSlot={
        def.examProfiles && def.examProfiles.length > 0 ? (
          <ExamProfilePicker trackId={trackId} enrolled={enrolled} />
        ) : null
      }
      summary={
        <p>
          <span className="font-medium text-slate-800">{subjects.length}</span> subjects in current
          scope
        </p>
      }
      catalog={
        subjects.length === 0 ? (
          <p className="text-sm text-slate-500 border border-dashed border-slate-200 rounded-card px-4 py-6 text-center">
            No subjects available for this exam profile.
          </p>
        ) : (
          <TrackSubjectList>
            {subjects.map((subject) => {
              const sid = subject.id as SubjectId;
              const topics = sd.topicsFor(sid);
              const studied = topics.filter((t) =>
                (data.studiedTopics ?? []).includes(t.id),
              ).length;
              const progressPct =
                topics.length > 0 ? Math.round((studied / topics.length) * 100) : null;
              const qCount = sd.statsFor(sid).totalQuestions;
              return (
                <TrackSubjectRow
                  key={sid}
                  title={subject.title}
                  meta={`${topics.length} topics · ${qCount} questions`}
                  progressPct={enrolled ? progressPct : null}
                  disabled={!enrolled}
                  onOpen={() => openSubject(sid)}
                  actionLabel={enrolled ? 'Study' : 'Preview'}
                />
              );
            })}
          </TrackSubjectList>
        )
      }
      footer={
        enrolled ? (
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200">
            <Button
              type="button"
              variant="secondary"
              onClick={() => navigate({ screen: 'practice', parent: currentRoute })}
            >
              Practice
            </Button>
          </div>
        ) : null
      }
    />
  );
}
