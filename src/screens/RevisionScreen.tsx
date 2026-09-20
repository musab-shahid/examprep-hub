import { RotateCcw, AlertTriangle, Clock, CheckCircle, GraduationCap, Dumbbell } from 'lucide-react';
import { useRouter } from '@/router';
import { useData } from '@/hooks/useData';
import { useSubjectData } from '@/hooks/useSubjectData';
import { useSubjectSelection } from '@/contexts/subject-selection-context';
import { SubjectSelector, type SubjectFilterValue } from '@/components/subject/SubjectSelector';
import { subjectMap } from '@/data/subjects';
import { getTopic } from '@/data/topics';
import { sectionMap } from '@/data/sections';
import { getSubjectColor } from '@/data/subject-colors';
import { PageContainer, Card, EmptyState, ProgressBar, Button } from '@/components/ui';
import type { SubjectId } from '@/types';

function getRevisionGroups(
  revisionDates: Record<string, string>,
  topicProgress: Record<string, { accuracy: number }>,
  scopedTopicIds: Set<string>,
) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const due = Object.entries(revisionDates)
    .filter(([topicId, dateStr]) => scopedTopicIds.has(topicId) && new Date(dateStr) <= today)
    .map(([topicId, dateStr]) => {
      const accuracy = topicProgress[topicId]?.accuracy ?? 0;
      let group: 'high' | 'review' | 'refresh';
      if (accuracy < 60) group = 'high';
      else if (accuracy < 75) group = 'review';
      else group = 'refresh';
      return { topicId, dateStr, accuracy, group };
    });

  const high = due.filter((d) => d.group === 'high');
  const review = due.filter((d) => d.group === 'review');
  const refresh = due.filter((d) => d.group === 'refresh');

  return { high, review, refresh };
}

export function RevisionScreen() {
  const { navigate } = useRouter();
  const sd = useSubjectData();
  const { data } = useData();
  const { getActiveSubject, setActiveSubjectForScreen } = useSubjectSelection();

  const activeSubject = getActiveSubject('review');
  const isAllSubjects = activeSubject === 'all';

  const handleSubjectChange = (value: SubjectFilterValue) => {
    setActiveSubjectForScreen('review', value);
  };

  // Build topic IDs set based on filter
  const scopedTopicIds = (() => {
    if (isAllSubjects) {
      return new Set(sd.topicsFor('all').map((t) => t.id));
    }
    return new Set(sd.topicsFor(activeSubject as SubjectId).map((t) => t.id));
  })();

  const hasContent = isAllSubjects || scopedTopicIds.size > 0;
  const subjectTitle = isAllSubjects ? 'All Subjects' : (subjectMap[activeSubject as string]?.title ?? 'Subject');

  const groups = getRevisionGroups(data.revisionDates, data.topicProgress, scopedTopicIds);
  const totalDue = groups.high.length + groups.review.length + groups.refresh.length;

  return (
    <PageContainer>
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Review</h1>
        <p className="text-slate-500 mt-1">Spaced repetition — review topics before you forget them</p>
      </div>

      <div className="mb-6">
        <SubjectSelector value={activeSubject} onChange={handleSubjectChange} showAllOption />
      </div>

      {!hasContent ? (
        <Card className="p-8">
          <EmptyState
            title={`No content for ${subjectTitle} yet`}
            message="This subject hasn't been authored yet. Try selecting a different subject or use All Subjects."
            icon={<GraduationCap className="w-12 h-12" />}
          />
        </Card>
      ) : (
        <>
          {/* Schedule info */}
          <Card className="p-4 mb-6 bg-slate-50/50">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-slate-600" />
              <p className="text-slate-700 text-sm font-medium">Schedule: New → 1d → 3d → 7d → 14d → 30d</p>
            </div>
            <p className="text-slate-500 text-xs">
              Topics are scheduled when you mark them as studied or complete a quiz.
              If accuracy is below 60%, the next review is pulled back one stage.
            </p>
          </Card>

          {totalDue === 0 ? (
            <Card className="p-8">
              <EmptyState
                title="Nothing due for revision"
                message="Mark topics as studied or take quizzes to build your revision schedule. Due topics will appear here grouped by priority."
                icon={<RotateCcw className="w-12 h-12" />}
              />
            </Card>
          ) : (
            <>
            <Card className="p-4 mb-6 bg-gradient-to-r from-sky-50 to-indigo-50 border border-sky-100">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{totalDue} topic{totalDue !== 1 ? 's' : ''} due for review</p>
                  <p className="text-slate-500 text-xs mt-0.5">Quiz yourself on all due topics at once</p>
                </div>
                <Button
                  onClick={() => navigate({ screen: 'quiz', mode: 'review', topicIds: [...groups.high.map(g => g.topicId), ...groups.review.map(g => g.topicId), ...groups.refresh.map(g => g.topicId)], count: Math.min(totalDue * 3, 20), parent: null })}
                  className="shrink-0"
                >
                  <Dumbbell className="w-4 h-4 inline mr-1" /> Start Review Quiz
                </Button>
              </div>
            </Card>
            <div className="space-y-6">
              {/* High Priority */}
              {groups.high.length > 0 && (
                <RevisionGroup
                  title="High Priority"
                  icon={<AlertTriangle className="w-5 h-5 text-red-500" />}
                  items={groups.high}
                  onOpen={(topicId) => navigate({ screen: 'topic', topicId })}
                />
              )}

              {/* Review */}
              {groups.review.length > 0 && (
                <RevisionGroup
                  title="Review"
                  icon={<Clock className="w-5 h-5 text-amber-500" />}
                  items={groups.review}
                  onOpen={(topicId) => navigate({ screen: 'topic', topicId })}
                />
              )}

              {/* Refresh */}
              {groups.refresh.length > 0 && (
                <RevisionGroup
                  title="Refresh"
                  icon={<CheckCircle className="w-5 h-5 text-emerald-500" />}
                  items={groups.refresh}
                  onOpen={(topicId) => navigate({ screen: 'topic', topicId })}
                />
              )}
            </div>
            </>
          )}
        </>
      )}
    </PageContainer>
  );
}

function RevisionGroup({ title, icon, items, onOpen }: {
  title: string;
  icon: React.ReactNode;
  items: { topicId: string; accuracy: number; dateStr: string }[];
  onOpen: (topicId: string) => void;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <h2 className="font-semibold text-slate-900 text-lg">{title}</h2>
        <span className="text-slate-400 text-sm">({items.length})</span>
      </div>
      <div className="space-y-2">
        {items.map((item) => {
          const topic = getTopic(item.topicId);
          if (!topic) return null;
          const subjId = sectionMap[topic.sectionId]?.subjectId;
          const subjColor = subjId ? getSubjectColor(subjId) : null;
          const borderColor = subjColor?.borderLeft ?? 'border-l-slate-400';
          return (
            <Card key={item.topicId} className={`p-4 border-l-4 ${borderColor}`}>
              <button onClick={() => onOpen(item.topicId)} className="w-full text-left">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <p className="font-medium text-slate-900 text-sm truncate flex-1">{topic.title}</p>
                  <span className={`text-sm font-bold shrink-0 ${item.accuracy < 60 ? 'text-red-500' : item.accuracy < 75 ? 'text-amber-500' : 'text-emerald-500'}`}>
                    {item.accuracy}%
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 text-xs">Due: {new Date(item.dateStr).toLocaleDateString()}</span>
                </div>
                <div className="mt-2">
                  <ProgressBar value={item.accuracy} colorClass={subjColor?.bar ?? 'bg-slate-400'} />
                </div>
              </button>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
