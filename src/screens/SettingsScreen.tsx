import {
  Trash2, GraduationCap, Flame, TrendingUp, BookOpen, Brain, Target,
  Check, Minus, AlertTriangle, FileText, Database, Info,
} from 'lucide-react';
import { useState } from 'react';
import { useData } from '@/hooks/useData';
import { useSubjectData } from '@/hooks/useSubjectData';
import {
  subjects, subjectsByTrack,
  examTracks, examTrackMap,
} from '@/data/subjects';
import { getSubjectStyle, getTrackStyle } from '@/data/subject-colors';
import { PageContainer, Card, Button } from '@/components/ui';
import { computeStreak, getTodayActivity, getWeekActivity } from '@/lib/streak';
import { sections } from '@/data/sections';
import type { SubjectId } from '@/types';

export function SettingsScreen() {
  const { data, reset, resetSubjects } = useData();
  const sd = useSubjectData();
  const [selectedSubjects, setSelectedSubjects] = useState<Set<SubjectId>>(new Set());
  const [confirming, setConfirming] = useState(false);
  const [resetDone, setResetDone] = useState<string | null>(null);

  const streak = computeStreak(data);
  const today = getTodayActivity(data);
  const week = getWeekActivity(data);

  const globalStudied = data.studiedTopics.length;
  const globalAnswered = Object.keys(data.questionResults).length;
  const globalCorrect = Object.values(data.questionResults).filter((r) => r.correct).length;

  // App-wide inventory (both tracks) — not scoped to activeTrack
  const globalTopicCount = sections.reduce((sum, s) => sum + s.topicCount, 0);
  const globalQuestionCount = sections.reduce((sum, s) => sum + s.questionCount, 0);
  const globalAcc = globalAnswered > 0 ? Math.round((globalCorrect / globalAnswered) * 100) : 0;

  const allSelected = selectedSubjects.size === subjects.length;
  const noneSelected = selectedSubjects.size === 0;
  const isFullReset = allSelected;

  const toggleSubject = (id: SubjectId) => {
    setSelectedSubjects((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
    setConfirming(false);
    setResetDone(null);
  };

  const toggleAll = () => {
    setSelectedSubjects(allSelected ? new Set() : new Set(subjects.map((s) => s.id as SubjectId)));
    setConfirming(false);
    setResetDone(null);
  };

  const toggleTrack = (trackId: string) => {
    setSelectedSubjects((prev) => {
      const next = new Set(prev);
      const trackSubjects = subjectsByTrack(trackId as typeof subjects[number]['track']);
      const allTrackSelected = trackSubjects.every((s) => next.has(s.id as SubjectId));
      if (allTrackSelected) {
        trackSubjects.forEach((s) => next.delete(s.id as SubjectId));
      } else {
        trackSubjects.forEach((s) => next.add(s.id as SubjectId));
      }
      return next;
    });
    setConfirming(false);
    setResetDone(null);
  };

  const handleReset = () => {
    if (isFullReset) {
      reset();
      setResetDone('All data has been reset');
    } else {
      resetSubjects([...selectedSubjects]);
      const n = selectedSubjects.size;
      setResetDone(`${n} subject${n !== 1 ? 's' : ''} reset successfully`);
    }
    setSelectedSubjects(new Set());
    setConfirming(false);
  };

  return (
    <PageContainer>
      <div className="mb-6 animate-fade-in-up">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Settings</h1>
        <p className="text-slate-500 mt-1">App information and data management</p>
      </div>

      {resetDone && (
        <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2 animate-fade-in-up">
          <Check className="w-5 h-5 text-emerald-600 shrink-0" />
          <p className="text-emerald-800 text-sm font-medium">{resetDone}</p>
        </div>
      )}

      {/* App info — global totals across both tracks */}
      <Card className="p-5 mb-4 animate-fade-in-up" style={{ animationDelay: '0.05s' }}>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-card bg-gradient-to-br from-brand-500 to-blue-600 flex items-center justify-center shrink-0 shadow-sm shadow-brand-500/20">
            <GraduationCap className="w-7 h-7 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-slate-900 text-base leading-tight">ExamPrep Hub</p>
            <p className="text-slate-500 text-sm leading-tight">FPSC &amp; HAT Study Hub · v1.0.0</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 pt-3 border-t border-slate-100">
          <InfoStat icon={<BookOpen className="w-4 h-4 text-brand-500" />} value={`${subjects.length}`} label="subjects" />
          <InfoStat icon={<FileText className="w-4 h-4 text-violet-500" />} value={`${globalTopicCount}`} label="topics" />
          <InfoStat icon={<Database className="w-4 h-4 text-emerald-500" />} value={`${globalQuestionCount}`} label="questions" />
        </div>
      </Card>

      {/* Activity strip */}
      <div className="grid grid-cols-3 gap-3 mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <Card className="p-3">
          <div className="flex items-center gap-1.5 mb-1">
            <Flame className={`w-4 h-4 ${streak.streak > 0 ? 'text-orange-500' : 'text-slate-400'}`} />
            <span className="text-slate-400 text-xs font-medium">Streak</span>
          </div>
          <p className="text-xl font-bold text-slate-900 leading-tight">{streak.streak}<span className="text-sm font-normal text-slate-400">d</span></p>
          <p className="text-slate-400 text-xs mt-0.5 truncate">
            {streak.studiedToday ? 'On track' : streak.atRisk ? 'At risk' : 'Start today'}
          </p>
        </Card>
        <Card className="p-3">
          <div className="flex items-center gap-1.5 mb-1">
            <TrendingUp className="w-4 h-4 text-brand-500" />
            <span className="text-slate-400 text-xs font-medium">Today</span>
          </div>
          <p className="text-xl font-bold text-slate-900 leading-tight">{today.questionsAnswered}</p>
          <p className="text-slate-400 text-xs mt-0.5 truncate">{today.quizCount} quizzes</p>
        </Card>
        <Card className="p-3">
          <div className="flex items-center gap-1.5 mb-1">
            <Target className="w-4 h-4 text-emerald-500" />
            <span className="text-slate-400 text-xs font-medium">Week</span>
          </div>
          <p className="text-xl font-bold text-slate-900 leading-tight">{week.avgAccuracy}<span className="text-sm font-normal text-slate-400">%</span></p>
          <p className="text-slate-400 text-xs mt-0.5 truncate">{week.questionsAnswered} answered</p>
        </Card>
      </div>

      {/* Per-subject data management — grouped by exam track */}
      <Card className="p-4 mb-4 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-slate-500" />
            <h3 className="font-semibold text-slate-900">Subject Data</h3>
          </div>
          <button
            onClick={toggleAll}
            className="text-sm font-medium text-sky-600 hover:text-sky-700 transition-colors"
          >
            {allSelected ? 'Clear all' : 'Select all'}
          </button>
        </div>

        {examTracks.map((track) => {
          const trackSubjects = subjectsByTrack(track.id);
          const trackMeta = examTrackMap[track.id];
          const TrackIcon = trackMeta.icon;
          const selectedInTrack = trackSubjects.filter((s) => selectedSubjects.has(s.id as SubjectId));
          const allTrackSelected = selectedInTrack.length === trackSubjects.length;

          return (
            <div key={track.id} className="mb-4 last:mb-0">
              {/* Track sub-header */}
              <button
                onClick={() => toggleTrack(track.id)}
                className="w-full flex items-center justify-between mb-2 px-1 group"
              >
                <div className="flex items-center gap-2">
                  <span className={`w-6 h-6 rounded-md bg-gradient-to-br ${getTrackStyle(track.id).gradient} flex items-center justify-center shrink-0`}>
                    <TrackIcon className="w-3.5 h-3.5 text-white" />
                  </span>
                  <span className="text-sm font-semibold text-slate-700">{trackMeta.title}</span>
                  <span className="text-slate-400 text-xs">({trackSubjects.length})</span>
                </div>
                <span className={`text-xs font-medium transition-colors ${allTrackSelected ? 'text-sky-600' : 'text-slate-400 group-hover:text-slate-600'}`}>
                  {allTrackSelected ? 'Clear track' : 'Select track'}
                </span>
              </button>

              {/* Compact table header */}
              <div className="hidden sm:grid grid-cols-[1fr_50px_50px_50px_24px] gap-2 px-2 pb-1 text-slate-400 text-xs font-medium uppercase tracking-wide">
                <span>Subject</span>
                <span className="text-right">Studied</span>
                <span className="text-right">Answered</span>
                <span className="text-right">Acc.</span>
                <span />
              </div>

              <div className="space-y-0.5">
                {trackSubjects.map((subject) => {
                  const colors = getSubjectStyle(subject.id);
                  const selected = selectedSubjects.has(subject.id as SubjectId);
                  const stats = sd.statsFor(subject.id as SubjectId);
                  const Icon = subject.lucideIcon;
                  const hasData = stats.studiedTopics > 0 || stats.questionsAnswered > 0;
                  return (
                    <button
                      key={subject.id}
                      onClick={() => toggleSubject(subject.id as SubjectId)}
                      className={`w-full grid grid-cols-[1fr_50px_50px_50px_24px] gap-2 items-center px-2 py-2 rounded-lg transition-colors text-left ${
                        selected ? 'bg-sky-50 ring-1 ring-sky-200' : 'hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span className={`w-7 h-7 rounded-md ${colors.bg} flex items-center justify-center shrink-0`}>
                          {Icon && <Icon className="w-4 h-4 text-white" />}
                        </span>
                        <span className="text-sm font-medium text-slate-800 truncate">{subject.title}</span>
                      </div>
                      <span className="text-sm text-slate-600 text-right tabular-nums">
                        {hasData ? `${stats.studiedTopics}/${stats.totalTopics}` : '—'}
                      </span>
                      <span className="text-sm text-slate-600 text-right tabular-nums">
                        {hasData ? stats.questionsAnswered : '—'}
                      </span>
                      <span className={`text-sm text-right tabular-nums font-medium ${
                        !hasData || stats.accuracy === 0 ? 'text-slate-400'
                        : stats.accuracy >= 75 ? 'text-emerald-600'
                        : stats.accuracy >= 50 ? 'text-amber-600' : 'text-red-600'
                      }`}>
                        {hasData && stats.accuracy > 0 ? `${stats.accuracy}%` : '—'}
                      </span>
                      <span className="flex items-center justify-center">
                        {selected
                          ? <Check className="w-4 h-4 text-sky-600" />
                          : <Minus className="w-4 h-4 text-slate-300" />}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* Unified reset action */}
        <div className="mt-4 pt-3 border-t border-slate-100">
          {!confirming ? (
            <div className="flex items-center justify-between">
              <p className="text-slate-500 text-sm">
                {noneSelected
                  ? 'Select subjects above to reset their data'
                  : isFullReset
                    ? 'All subjects selected — this will reset everything'
                    : `${selectedSubjects.size} subject${selectedSubjects.size !== 1 ? 's' : ''} selected`}
              </p>
              <Button
                variant="danger"
                disabled={noneSelected}
                onClick={() => setConfirming(true)}
              >
                <Trash2 className="w-4 h-4 inline mr-1" />
                {isFullReset ? 'Reset All' : `Reset (${selectedSubjects.size})`}
              </Button>
            </div>
          ) : (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
                <p className="text-red-800 text-sm font-medium">
                  {isFullReset
                    ? 'Delete all progress?'
                    : `Delete progress for ${selectedSubjects.size} subject${selectedSubjects.size !== 1 ? 's' : ''}?`}
                </p>
              </div>
              <p className="text-red-600 text-xs mb-3">
                This permanently removes study progress, quiz results, and revision schedules. It cannot be undone.
              </p>
              <div className="flex gap-2">
                <Button variant="danger" onClick={handleReset}>Yes, Delete</Button>
                <Button variant="secondary" onClick={() => setConfirming(false)}>Cancel</Button>
              </div>
            </div>
          )}
        </div>
      </Card>

      {/* Global totals */}
      <Card className="p-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <h3 className="font-semibold text-slate-900 mb-3">All Data</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <MiniStat icon={<BookOpen className="w-4 h-4 text-brand-500" />} label="Studied" value={`${globalStudied}`} />
          <MiniStat icon={<Brain className="w-4 h-4 text-violet-500" />} label="Answered" value={`${globalAnswered}`} />
          <MiniStat icon={<Target className="w-4 h-4 text-emerald-500" />} label="Accuracy" value={`${globalAcc}%`} />
          <MiniStat icon={<TrendingUp className="w-4 h-4 text-amber-500" />} label="Quizzes" value={`${data.quizHistory.length}`} />
        </div>
        <div className="flex items-start gap-1.5 mt-3">
          <Info className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
          <p className="text-slate-400 text-xs leading-relaxed">
            Stored locally in your browser. No account or server required.
          </p>
        </div>
      </Card>
    </PageContainer>
  );
}

function InfoStat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-0.5">
      {icon}
      <p className="text-lg font-bold text-slate-900 font-mono tabular-nums leading-tight">{value}</p>
      <p className="text-slate-400 text-xs leading-tight">{label}</p>
    </div>
  );
}

function MiniStat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <div>
        <p className="text-slate-900 text-sm font-bold font-mono tabular-nums leading-tight">{value}</p>
        <p className="text-slate-400 text-xs leading-tight">{label}</p>
      </div>
    </div>
  );
}
