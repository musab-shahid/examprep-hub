import { useState } from 'react';
import { useRouter } from '@/router';
import { Button } from '@/components/ui';
import { useSubjectData } from '@/hooks/useSubjectData';
import { useSubjectSelection } from '@/contexts/subject-selection-context';
import { useData } from '@/hooks/useData';
import { subjectsByTrack } from '@/data/subjects';
import { sectionsBySubject } from '@/data/sections';
import type { SubjectId } from '@/types';
import { ExamProfilePicker } from '@/components/track/ExamProfilePicker';
import {
  TrackLandingShell,
  TrackSubjectList,
  TrackSubjectRow,
} from '@/components/track/TrackLandingShell';
import { subjectsForScope } from '@/lib/track-scope';
import { getSubjectStyle } from '@/data/subject-colors';

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
  const scopedSubjects = subjectsForScope({ trackId: 'fpsc', examId });
  // Prefer profile-scoped list; fall back to full FPSC registry order
  const fpscSubjects =
    scopedSubjects.length > 0 ? scopedSubjects : subjectsByTrack('fpsc');

  const totalTopics = fpscSubjects.reduce(
    (sum, s) => sum + sd.topicsFor(s.id as SubjectId).length,
    0,
  );
  const totalQuestions = fpscSubjects.reduce(
    (sum, s) => sum + (sd.statsFor(s.id as SubjectId).totalQuestions || 0),
    0,
  );

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
      title="FPSC Exam"
      description="Federal Public Service Commission — meteorology, sciences, maths, English, and research."
      enrolled={enrolled}
      isActiveFocus={isActive}
      enrolling={enrolling}
      onBegin={handleBegin}
      onContinue={() => {
        const sw = setActiveEnrolledTrack('fpsc');
        if (sw.ok) setActiveTrack('fpsc');
      }}
      enrollError={enrollError}
      accentClass="from-sky-600 to-sky-700"
      profileSlot={<ExamProfilePicker trackId="fpsc" enrolled={enrolled} />}
      summary={
        <p className="text-white/90">
          <span className="font-semibold text-white">{fpscSubjects.length}</span> subjects
          {' · '}
          <span className="font-semibold text-white">{totalTopics}</span> topics
          {' · '}
          <span className="font-semibold text-white">{totalQuestions}</span> questions in scope
        </p>
      }
      catalog={
        <TrackSubjectList>
          {fpscSubjects.map((subject) => {
            const sid = subject.id as SubjectId;
            const sections = sectionsBySubject(sid);
            const topics = sd.topicsFor(sid);
            const studied = topics.filter((t) => (data.studiedTopics ?? []).includes(t.id)).length;
            const progressPct =
              topics.length > 0 ? Math.round((studied / topics.length) * 100) : null;
            const qCount = sd.statsFor(sid).totalQuestions;
            return (
              <TrackSubjectRow
                key={sid}
                title={subject.title}
                meta={`${sections.length} sections · ${topics.length} topics · ${qCount} questions`}
                progressPct={enrolled ? progressPct : null}
                disabled={!enrolled}
                onOpen={() => openSubject(sid)}
                actionLabel={enrolled ? 'Study' : 'Preview'}
                dotClass={getSubjectStyle(sid).dotBg}
              />
            );
          })}
        </TrackSubjectList>
      }
      footer={
        enrolled ? (
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200">
            <Button
              type="button"
              variant="secondary"
              onClick={() => guard(() => navigate({ screen: 'practice', parent: currentRoute }))}
            >
              Practice
            </Button>
            <Button
              type="button"
              variant="secondary"
              disabled={totalQuestions < 10}
              onClick={() =>
                guard(() => navigate({ screen: 'practice', mode: 'mock', parent: currentRoute }))
              }
            >
              Mock exam
            </Button>
          </div>
        ) : null
      }
    />
  );
}
