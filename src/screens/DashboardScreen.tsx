import { getAttentionItems, getDashboardRecommendation } from '@/lib/attention';
import {
  Zap, ChevronRight, GraduationCap, Clock,
  AlertTriangle, Target, Flame, TrendingUp, Brain,
  RotateCcw, BarChart3, FileText, Sparkles,
} from 'lucide-react';
import { useRouter } from '@/router';
import { useSubjectData } from '@/hooks/useSubjectData';
import { useSubjectSelection } from '@/contexts/subject-selection-context';
import { useData } from '@/hooks/useData';
import { subjects, examTracks, subjectsByTrack, type ExamTrack } from '@/data/subjects';
import type { SubjectId } from '@/types';
import { getTopic } from '@/data/topics';
import { sectionMap, sections } from '@/data/sections';
import { topics } from '@/data/topics';
import { PageContainer, Card, ProgressBar, EmptyState, ActionCard, PurposeLine, StreakIndicator } from '@/components/ui';
import { getSubjectColor, getSubjectStyle, getTrackStyle } from '@/data/subject-colors';
import { computeStreak, getTodayActivity, getWeekActivity, getWeakTopics } from '@/lib/streak';
import { getLandingScreenForTrack } from '@/lib/exam-track';

function getGreeting(): string {
  const h = new Date().getHours();
  if (h >= 5 && h < 12) return 'Good morning';
  if (h >= 12 && h < 17) return 'Good afternoon';
  if (h >= 17 && h < 21) return 'Good evening';
  return 'Burning the midnight oil';
}


export function DashboardScreen() {
  const { navigate } = useRouter();
  const sd = useSubjectData();
  const { setActiveSubjectForScreen, activeTrack } = useSubjectSelection();
  const { data } = useData();

  const streakInfo = computeStreak(data);
  const todayActivity = getTodayActivity(data);
  const weekActivity = getWeekActivity(data);

  const globalTopicIds = new Set(topics.map((t) => t.id));
  const stats = sd.statsFor('all');
  const globalStats = {
    ...stats,
    totalTopics: topics.length,
    studiedTopics: data.studiedTopics.filter((id) => globalTopicIds.has(id)).length,
  };
  const allStats = subjects.map((s) => sd.statsFor(s.id as SubjectId));

  const reviewDue = sd.revisionQueueAll();
  const trackTopicsList = topics.filter((t) => {
    const subjId = sectionMap[t.sectionId]?.subjectId;
    return subjId ? subjectsByTrack(activeTrack).some((s) => s.id === subjId) : false;
  });
  const trackTopicIds = new Set(trackTopicsList.map((t) => t.id));
  const weakTopics = getWeakTopics(data, trackTopicIds);


  const overallProgress = globalStats.totalTopics > 0 ? Math.round((globalStats.studiedTopics / globalStats.totalTopics) * 100) : 0;

  // Single recommendation source (attention.ts) — do not duplicate priority logic here
  const attention = getAttentionItems(data, trackTopicIds, {
    getTopicExists: (id) => Boolean(getTopic(id)),
  });
  const rec = getDashboardRecommendation(attention, {
    getTopicTitle: (id) => getTopic(id)?.title,
    getTopicSectionLabel: (id) => {
      const topic = getTopic(id);
      return topic ? sectionMap[topic.sectionId]?.title : undefined;
    },
    isTopicStudied: (id) => data.studiedTopics.includes(id),
  });
  const recHeadline = rec.headline;
  const recSubtext = rec.subtext;
  const recAction = rec.action;
  const recNavigate = () => {
    const p = rec.payload;
    if (p.screen === 'topic' && p.topicId) {
      navigate({ screen: 'topic', topicId: p.topicId, parent: null });
    } else if (p.screen === 'practice') {
      navigate({ screen: 'practice', mode: p.mode, parent: null });
    } else if (p.screen === 'review') {
      navigate({ screen: 'review', parent: null });
    }
  };

  const statsByTrack: Record<ExamTrack, typeof allStats> = { fpsc: [], hat: [] };
  for (const s of allStats) {
    const sub = subjects.find((sub) => sub.id === s.subjectId);
    if (sub) statsByTrack[sub.track].push(s);
  }

  return (
    <PageContainer>
      <div className="mb-2 animate-fade-in-up">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Home</h1>
      </div>
      <PurposeLine className="animate-fade-in-up">Your study command center — see what to do and how you're doing.</PurposeLine>

      {/* Hero card */}
      <Card elevation="hero" className="hero-glow p-5 sm:p-6 mb-4 bg-gradient-to-br from-brand-50 via-white to-slate-50 border-brand-100 animate-fade-in-up" style={{ animationDelay: '0.05s' }}>
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="min-w-0">
            <p className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">{getGreeting()}!</p>
            <div className="mt-1.5">
              {streakInfo.streak === 0 ? (
                <p className="text-slate-600 text-sm">Start a streak by answering a question today.</p>
              ) : (
                <StreakIndicator streak={streakInfo.streak} atRisk={streakInfo.atRisk} />
              )}
            </div>
          </div>
          <div className="text-right shrink-0">
            <p className="text-3xl sm:text-4xl font-bold text-slate-900 font-mono tabular-nums leading-none">{overallProgress}<span className="text-lg text-slate-400">%</span></p>
            <p className="text-slate-400 text-xs mt-1">overall progress</p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 pt-3 border-t border-brand-100">
          <HeroStat icon={<Flame className="w-4 h-4 text-orange-500" />} value={`${streakInfo.streak}`} label="streak" />
          <HeroStat icon={<Brain className="w-4 h-4 text-violet-500" />} value={`${todayActivity.questionsAnswered}`} label="today" />
          <HeroStat icon={<TrendingUp className="w-4 h-4 text-emerald-500" />} value={`${weekActivity.avgAccuracy}%`} label="week acc" />
          <HeroStat icon={<RotateCcw className="w-4 h-4 text-amber-500" />} value={`${reviewDue.length}`} label="due" />
        </div>
      </Card>

      {/* Today's Recommendation */}
      <ActionCard className="mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <div className="flex items-center gap-1.5 mb-1">
          <Sparkles className="w-3.5 h-3.5 text-brand-500" />
          <p className="text-xs font-semibold text-brand-600 uppercase tracking-wide">Today's Recommendation</p>
        </div>
        <p className="text-lg font-bold text-slate-900 mb-1 tracking-tight">{recHeadline}</p>
        <p className="text-slate-500 text-sm mb-4">{recSubtext}</p>
        <button
          onClick={recNavigate}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-btn bg-brand-500 text-white text-sm font-semibold hover:bg-brand-600 transition-colors duration-DEFAULT shadow-sm shadow-brand-500/20"
        >
          {recAction} <ChevronRight className="w-4 h-4" />
        </button>
      </ActionCard>

      {/* Exam Track Sections */}
      {examTracks.map((track, trackIdx) => {
        const trackStats = statsByTrack[track.id];
        const trackTs = getTrackStyle(track.id);
        const TrackIcon = track.id === 'fpsc' ? FileText : GraduationCap;

        return (
          <Card key={track.id} className="p-4 mb-4 animate-fade-in-up" style={{ animationDelay: `${0.15 + trackIdx * 0.05}s` }}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${trackTs.gradient} flex items-center justify-center shrink-0 shadow-sm`}>
                  <TrackIcon className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900">{trackTs.label}</h3>
              </div>
              <button
                onClick={() => navigate({ screen: getLandingScreenForTrack(track.id), parent: null })}
                className={`text-sm font-medium hover:underline ${trackTs.accent}`}
              >
                Open {track.shortTitle}
              </button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
              {trackStats.map((sStats) => {
                const subject = subjects.find((s) => s.id === sStats.subjectId);
                if (!subject) return null;
                const color = getSubjectColor(sStats.subjectId);
                const colors = getSubjectStyle(sStats.subjectId);
                const studiedPct = sStats.totalTopics > 0 ? Math.round((sStats.studiedTopics / sStats.totalTopics) * 100) : 0;
                const isComplete = studiedPct === 100;
                const hasContent = sStats.hasContent;
                const Icon = subject.lucideIcon;
                return (
                  <button
                    key={sStats.subjectId}
                    onClick={() => {
                      setActiveSubjectForScreen('learn', sStats.subjectId);
                      navigate({ screen: 'learn', parent: null });
                    }}
                    disabled={!hasContent}
                    className="text-left p-3 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-card-hover transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`w-7 h-7 rounded-md ${colors.bg} flex items-center justify-center shrink-0`}>
                        {Icon && <Icon className="w-4 h-4 text-white" />}
                      </span>
                      <p className="text-sm font-semibold text-slate-900 truncate flex-1">{subject.title}</p>
                    </div>
                    {hasContent ? (
                      <>
                        <div className="mb-1.5">
                          <ProgressBar value={studiedPct} colorClass={isComplete ? 'bg-emerald-500' : color.bar} />
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className={color.text}>{studiedPct}%</span>
                          {sStats.accuracy > 0 && (
                            <span className={`font-mono tabular-nums ${sStats.accuracy >= 75 ? 'text-emerald-600' : sStats.accuracy >= 50 ? 'text-amber-600' : 'text-red-600'}`}>
                              {sStats.accuracy}% acc
                            </span>
                          )}
                        </div>
                      </>
                    ) : (
                      <p className="text-slate-400 text-xs">Coming soon</p>
                    )}
                  </button>
                );
              })}
            </div>
          </Card>
        );
      })}

      {/* Three-column: Weak Areas + Quick Actions (wider) */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-4 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
        {/* Weak Areas — 2 cols */}
        <Card className="p-4 bg-amber-50/50 border-amber-200 lg:col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-4 h-4 text-amber-500" />
            <h3 className="font-semibold text-slate-900 text-sm">Areas needing attention</h3>
          </div>
          {weakTopics.length > 0 ? (
            <>
              <div className="space-y-1 mb-3">
                {weakTopics.slice(0, 4).map((w, i) => {
                  const topic = getTopic(w.topicId);
                  if (!topic) return null;
                  const subjId = sectionMap[topic.sectionId]?.subjectId;
                  const color = subjId ? getSubjectColor(subjId) : null;
                  return (
                    <button
                      key={w.topicId}
                      onClick={() => navigate({ screen: 'topic', topicId: w.topicId, parent: null })}
                      className="w-full flex items-center justify-between px-2 py-2 rounded-lg hover:bg-white transition-colors text-left"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-slate-400 text-xs font-bold w-4 shrink-0">{i + 1}</span>
                        {color && <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: color.dot }} />}
                        <span className="text-slate-700 text-sm font-medium truncate">{topic.title}</span>
                      </div>
                      <span className={`text-sm font-bold shrink-0 ml-2 ${w.accuracy < 60 ? 'text-red-500' : 'text-amber-500'}`}>
                        {w.accuracy}%
                      </span>
                    </button>
                  );
                })}
              </div>
              <button
                onClick={() => navigate({ screen: 'practice', parent: null })}
                className="text-amber-700 text-sm font-semibold hover:text-amber-800"
              >
                Practice these
              </button>
            </>
          ) : (
            <EmptyState
              title="No weak areas yet"
              message="Take some quizzes to find topics that need extra attention."
              icon={<Target className="w-10 h-10" />}
            />
          )}
        </Card>

        {/* Quick Actions — 3 cols, grid layout */}
        <Card className="p-4 lg:col-span-3">
          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-4 h-4 text-slate-500" />
            <h3 className="font-semibold text-slate-900 text-sm">Quick actions</h3>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <QuickActionTile
              icon={<Zap className="w-5 h-5 text-amber-600" />}
              iconBg="bg-amber-50 border border-amber-200"
              title="Quick Practice"
              subtitle="10 questions"
              onClick={() => navigate({ screen: 'practice', mode: 'quick', parent: null })}
            />
            <QuickActionTile
              icon={<Target className="w-5 h-5 text-brand-600" />}
              iconBg="bg-brand-50 border border-brand-200"
              title="Focus Practice"
              subtitle="Pick your topics"
              onClick={() => navigate({ screen: 'practice', parent: null })}
            />
            <QuickActionTile
              icon={<FileText className="w-5 h-5 text-brand-600" />}
              iconBg="bg-brand-50 border border-brand-200"
              title="FPSC Exam"
              subtitle="7 subjects"
              onClick={() => navigate({ screen: 'fpsc', parent: null })}
            />
            <QuickActionTile
              icon={<GraduationCap className="w-5 h-5 text-indigo-600" />}
              iconBg="bg-indigo-50 border border-indigo-200"
              title="HAT Prep"
              subtitle="3 modules"
              onClick={() => navigate({ screen: 'hat', parent: null })}
            />
            <QuickActionTile
              icon={<RotateCcw className="w-5 h-5 text-emerald-600" />}
              iconBg="bg-emerald-50 border border-emerald-200"
              title="Review Queue"
              subtitle={`${reviewDue.length} due`}
              onClick={() => navigate({ screen: 'review', parent: null })}
            />
            <QuickActionTile
              icon={<Clock className="w-5 h-5 text-brand-400" />}
              iconBg="bg-slate-900 border border-slate-700"
              title="Mock Exam"
              subtitle="Full simulation"
              onClick={() => navigate({ screen: 'practice', mode: 'mock', parent: null })}
              disabled={sd.totalQuestions < 30}
              dark
            />
          </div>
        </Card>
      </div>

      {/* Weekly accuracy mini-chart */}
      <Card className="p-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <div className="flex items-center gap-2 mb-3">
          <BarChart3 className="w-4 h-4 text-slate-500" />
          <h3 className="font-semibold text-slate-900 text-sm">Weekly accuracy trend</h3>
        </div>
        <WeeklyAccuracyChart data={data} />
      </Card>
    </PageContainer>
  );
}

function HeroStat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-0.5">
      {icon}
      <p className="text-lg font-bold text-slate-900 leading-tight">{value}</p>
      <p className="text-slate-400 text-xs leading-tight">{label}</p>
    </div>
  );
}

function QuickActionTile({
  icon, iconBg, title, subtitle, onClick, disabled, dark,
}: {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  subtitle: string;
  onClick: () => void;
  disabled?: boolean;
  dark?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center gap-3 p-3 rounded-xl text-left transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
        dark
          ? 'bg-slate-900 hover:bg-slate-800'
          : 'bg-slate-50 border border-slate-200 hover:bg-white hover:shadow-card-hover hover:border-slate-300'
      }`}
    >
      <span className={`w-9 h-9 rounded-lg ${iconBg} flex items-center justify-center shrink-0`}>
        {icon}
      </span>
      <div className="flex-1 min-w-0">
        <p className={`font-semibold text-sm truncate ${dark ? 'text-white' : 'text-slate-900'}`}>{title}</p>
        <p className={`text-xs truncate ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{subtitle}</p>
      </div>
      <ChevronRight className={`w-4 h-4 shrink-0 ${dark ? 'text-slate-400' : 'text-slate-300'}`} />
    </button>
  );
}

import { getWeeklyAccuracy } from '@/lib/streak';

function WeeklyAccuracyChart({ data }: { data: import('@/types').AppData }) {
  const weeks = getWeeklyAccuracy(data, 8);
  const maxBarHeight = 48;
  const hasData = weeks.some((w) => w.accuracy !== null);

  if (!hasData) {
    return (
      <p className="text-slate-400 text-sm text-center py-4">
        Take quizzes to see your weekly accuracy trend.
      </p>
    );
  }

  return (
    <div className="flex items-end justify-between gap-1.5 h-16">
      {weeks.map((w, i) => {
        const height = w.accuracy !== null ? Math.max(4, (w.accuracy / 100) * maxBarHeight) : 2;
        const color = w.accuracy === null
          ? 'bg-slate-200'
          : w.accuracy >= 75 ? 'bg-emerald-400'
          : w.accuracy >= 50 ? 'bg-amber-400' : 'bg-red-400';
        return (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div className="w-full rounded-t-md transition-all" style={{ height: `${height}px` }}>
              <div className={`w-full h-full rounded-t-md ${color}`} />
            </div>
            <span className="text-slate-400 text-xs">{w.label}</span>
          </div>
        );
      })}
    </div>
  );
}
