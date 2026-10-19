import { useMemo, useState } from 'react';
import { useRouter } from '@/router';
import { Button } from '@/components/ui';
import { useSubjectData } from '@/hooks/useSubjectData';
import { useSubjectSelection } from '@/contexts/subject-selection-context';
import { useData } from '@/hooks/useData';
import type { SubjectId } from '@/types';
import { ExamProfilePicker } from '@/components/track/ExamProfilePicker';
import {
  TrackLandingShell,
  TrackSubjectList,
  TrackSubjectRow,
} from '@/components/track/TrackLandingShell';
import { buildTrackCatalog, formatCatalogCount } from '@/lib/track-catalog';

export function FpscLandingScreen() {
  const { navigate, currentRoute } = useRouter();
  const sd = useSubjectData();
  const { setActiveSubjectForScreen, setActiveTrack } = useSubjectSelection();
  const { data, enrollInTrack, setActiveEnrolledTrack, trackMembership } = useData();
  const enrolled = Boolean(trackMembership.enrollments.fpsc);
  const isActive = trackMembership.activeTrackId === 'fpsc';
  const [enrolling, setEnrolling] = useState(false);
  const [enrollError, setEnrollError] = useState<string | null>(null);

  const examId = trackMembership.enrollments.fpsc?.activeExamId ?? null;

  const catalog = useMemo(() => {
    const topicIdsBySubject = new Map<string, string[]>();
    // Prefer loaded topic lists when present (exact); else estimates
    const scopeSubjects = buildTrackCatalog({ trackId: 'fpsc', examId }).subjects.map((e) => e.subject);
    for (const s of scopeSubjects) {
      const topics = sd.topicsFor(s.id as SubjectId);
      if (topics.length > 0) {
        topicIdsBySubject.set(s.id, topics.map((t) => t.id));
      }
    }
    return buildTrackCatalog(
      { trackId: 'fpsc', examId },
      {
        topicIdsBySubject: topicIdsBySubject.size > 0 ? topicIdsBySubject : undefined,
        studiedTopicIds: data.studiedTopics,
      },
    );
  }, [examId, sd, data.studiedTopics]);

  const handleBegin = () => {
    setEnrolling(true);
    setEnrollError(null);
    const r = enrollInTrack('fpsc');
    setEnrolling(false);
    if (!r.ok) {
      setEnrollError(
        r.reason === 'not-enrollable'
          ? 'This track is not available to begin yet.'
          : 'Could not start this track. Try again.',
      );
      return;
    }
    setActiveTrack('fpsc');
  };

  const guard = (fn: () => void) => {
    if (!enrolled) return;
    fn();
  };

  const openSubject = (subjectId: SubjectId) => {
    guard(() => {
      setActiveSubjectForScreen('learn', subjectId);
      navigate({ screen: 'learn', parent: currentRoute });
    });
  };

  return (
    <TrackLandingShell
      title="FPSC"
      description="Federal competitive exams — meteorology, sciences, English, and more. Begin to study and practice under this track."
      enrolled={enrolled}
      isActiveFocus={isActive}
      enrolling={enrolling}
      onBegin={handleBegin}
      onContinue={
        enrolled && !isActive
          ? () => {
              const r = setActiveEnrolledTrack('fpsc');
              if (r.ok) setActiveTrack('fpsc');
            }
          : undefined
      }
      enrollError={enrollError}
      accentClass="from-sky-500 to-brand-600"
      profileSlot={enrolled ? <ExamProfilePicker trackId="fpsc" /> : undefined}
      summary={
        <p>
          Catalog: {formatCatalogCount(catalog.totalTopics, 'topics')} ·{' '}
          {formatCatalogCount(catalog.totalQuestions, 'questions')}
          {(catalog.totalTopics.precision === 'estimated' ||
            catalog.totalQuestions.precision === 'estimated') && (
            <span className="text-slate-400"> (estimates until content loads)</span>
          )}
        </p>
      }
      catalog={
        <TrackSubjectList>
          {catalog.subjects.map((entry) => {
            const s = entry.subject;
            const topics = entry.topicCount;
            const qs = entry.questionCount;
            const studied = entry.studiedTopicCount;
            const progressPct =
              topics.precision === 'exact' && topics.value > 0
                ? Math.round((studied / topics.value) * 100)
                : null;
            const meta = [
              formatCatalogCount(topics, 'topics'),
              formatCatalogCount(qs, 'questions'),
              studied > 0 ? `${studied} studied` : null,
            ]
              .filter(Boolean)
              .join(' · ');
            return (
              <TrackSubjectRow
                key={s.id}
                title={s.name}
                meta={meta}
                progressPct={progressPct}
                disabled={!enrolled}
                onOpen={() => openSubject(s.id as SubjectId)}
                actionLabel={enrolled ? 'Study' : 'Locked'}
              />
            );
          })}
        </TrackSubjectList>
      }
      footer={
        enrolled ? (
          <div className="flex flex-wrap gap-2">
            <Button
              type="button"
              variant="secondary"
              onClick={() =>
                guard(() => navigate({ screen: 'practice', parent: currentRoute }))
              }
            >
              Practice
            </Button>
          </div>
        ) : null
      }
    />
  );
}
