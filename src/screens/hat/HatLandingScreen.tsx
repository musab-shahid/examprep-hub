import { useEffect } from 'react';
import { GraduationCap, Clock, BookOpen, Brain, Calculator, ChevronRight, ArrowRight, Sparkles, Target, TrendingUp, Layers } from 'lucide-react';
import { useRouter } from '@/router';
import { PageContainer, Card, Button } from '@/components/ui';
import { HAT_SECTIONS, HAT_EXAM_DURATION_MINUTES, HAT_TOTAL_QUESTIONS, HAT_PASSING_SCORE } from '@/data/hat/hat-meta';
import { allHatTopics, allHatQuestions, hatQuestionsBySection } from '@/data/hat';
import { useSubjectSelection } from '@/contexts/subject-selection-context';
import { useData } from '@/hooks/useData';
import { getSubjectsForTrack } from '@/lib/exam-track';
import { getSubjectStyle, getTrackStyle } from '@/data/subject-colors';
import type { SubjectId } from '@/types';

const SECTION_ICONS = {
  verbal: BookOpen,
  analytical: Brain,
  quantitative: Calculator,
} as const;

/** Map a HAT section code (verbal / analytical / quantitative) to its SubjectId. */
function subjectIdForHatSection(sectionCode: string): SubjectId {
  const hatSubjects = getSubjectsForTrack('hat');
  const code = sectionCode.toLowerCase();
  const match =
    hatSubjects.find((s) => s.subjectId === code) ??
    hatSubjects.find((s) => s.subjectId === `hat-${code}`) ??
    hatSubjects.find((s) => s.subjectId.includes(code) || s.title.toLowerCase().includes(code));
  return (match?.subjectId ?? hatSubjects[0]?.subjectId ?? 'hat-verbal') as SubjectId;
}

export function HatLandingScreen() {
  const { navigate, currentRoute } = useRouter();
  const { setActiveSubjectForScreen, setActiveTrack } = useSubjectSelection();
  useEffect(() => { setActiveTrack('hat'); }, [setActiveTrack]);
  const { data } = useData();
  const ts = getTrackStyle('hat');
  const handleStudySection = (sectionCode: string) => {
    setActiveSubjectForScreen('learn', subjectIdForHatSection(sectionCode));
    navigate({ screen: 'learn', parent: currentRoute });
  };
  const handlePracticeSection = (sectionCode: string) => {
    setActiveSubjectForScreen('practice', subjectIdForHatSection(sectionCode));
    navigate({ screen: 'practice', parent: currentRoute });
  };
  const sectionEntries = Object.values(HAT_SECTIONS);
  const totalTopics = allHatTopics.length;
  const totalQuestions = allHatQuestions.length;
  const studiedHatTopics = allHatTopics.filter((t) => data.studiedTopics.includes(t.id)).length;
  const quizTouchedHatTopics = allHatTopics.filter((t) => (data.topicProgress[t.id]?.quizAttempts ?? 0) > 0).length;
  const overallProgress = totalTopics > 0 ? Math.round((studiedHatTopics / totalTopics) * 100) : 0;
  const stats = [
    { icon: Layers, label: 'Sections', value: '3', color: ts.statIconColors[0] },
    { icon: BookOpen, label: 'Topics', value: String(totalTopics), color: ts.statIconColors[1] },
    { icon: Target, label: 'Questions', value: String(totalQuestions), color: ts.statIconColors[2] },
    { icon: Clock, label: 'Minutes', value: String(HAT_EXAM_DURATION_MINUTES), color: ts.statIconColors[3] },
  ];
  return (
    <PageContainer>
      {/* Hero Banner */}
      <div className="mb-6 animate-fade-in-up">
        <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${ts.heroGradient} p-6 sm:p-8`}>
          {/* Decorative gradient orbs */}
          <div className={`absolute top-0 right-0 w-64 h-64 ${ts.heroOrb} rounded-full blur-3xl pointer-events-none`} />
          <div className={`absolute bottom-0 left-1/4 w-48 h-48 ${ts.heroOrbSecondary} rounded-full blur-3xl pointer-events-none`} />
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${ts.iconGradient} flex items-center justify-center shrink-0 shadow-lg ${ts.iconGlow}`}>
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white">HAT Prep</h1>
                <p className={`${ts.accentText} text-sm`}>Higher Education Aptitude Test</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-xl mb-5">
              Comprehensive preparation for all three reasoning sections — Verbal, Analytical, and Quantitative.
              Study materials, practice questions, and timed mock exams in one place.
            </p>
            {/* Stat pills */}
            <div className="grid grid-cols-4 gap-3">
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="flex flex-col items-center gap-1 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 px-2 py-3">
                    <Icon className={`w-4 h-4 ${s.color}`} />
                    <span className="text-white font-bold text-lg leading-tight">{s.value}</span>
                    <span className="text-slate-400 text-[10px] uppercase tracking-wide leading-tight">{s.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* Progress Bar Card */}
      {(studiedHatTopics > 0 || quizTouchedHatTopics > 0) && (
        <Card className={`p-4 mb-6 animate-fade-in-up ${ts.borderTint}`} style={{ animationDelay: '0.05s' }}>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <TrendingUp className={`w-4 h-4 ${ts.progressIcon}`} />
              <span className="font-semibold text-slate-900 text-sm">Your Progress</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className={`${ts.accent} font-bold`}>{studiedHatTopics}/{totalTopics} studied</span>
              {quizTouchedHatTopics > 0 && (
                <span className="text-amber-600 font-bold">{quizTouchedHatTopics} practiced</span>
              )}
            </div>
          </div>
          <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${ts.progressGradient} rounded-full transition-all duration-700 ease-out`}
              style={{ width: `${overallProgress}%` }}
            />
          </div>
          <p className="text-slate-400 text-xs mt-1.5">Study progress shows topics you've read. Practice shows topics you've answered questions on.</p>
        </Card>
      )}
      {/* Exam Overview Card */}
      <Card className="p-5 mb-6 animate-fade-in-up bg-gradient-to-br from-slate-50 to-white border-slate-200" style={{ animationDelay: '0.1s' }}>
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className={`w-5 h-5 ${ts.sparklesIcon}`} />
          <h2 className="font-bold text-slate-900 text-base">Exam Overview</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {sectionEntries.map((section) => {
            const style = getSubjectStyle(`hat-${section.id}`);
            return (
              <div key={section.id} className={`rounded-2xl bg-gradient-to-br ${style.lightGradient} p-4 border ${style.border}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wide text-slate-600">{section.shortName}</span>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${style.bg} text-white`}>
                    {Math.round(section.weight * 100)}%
                  </span>
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-bold text-slate-900">{section.questionCount}</span>
                  <span className="text-slate-500 text-xs">questions</span>
                </div>
                <div className="flex items-baseline gap-1.5 mt-0.5">
                  <span className="text-lg font-semibold text-slate-700">{section.topicCount}</span>
                  <span className="text-slate-500 text-xs">topics</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-slate-200">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-slate-400" />
            <span className="text-slate-600 text-sm font-medium">{HAT_EXAM_DURATION_MINUTES} min</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Target className="w-4 h-4 text-slate-400" />
            <span className="text-slate-600 text-sm font-medium">{HAT_TOTAL_QUESTIONS} total Qs</span>
          </div>
          <div className="flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4 text-slate-400" />
            <span className="text-slate-600 text-sm font-medium">Pass: {HAT_PASSING_SCORE}/100</span>
          </div>
        </div>
      </Card>
      {/* Section Cards */}
      <div className="grid grid-cols-1 gap-4 mb-6">
        {sectionEntries.map((section, idx) => {
          const style = getSubjectStyle(`hat-${section.id}`);
          const Icon = SECTION_ICONS[section.id];
          const topics = allHatTopics.filter((t) => t.hatSection === section.id);
          const sectionQuestionCount = hatQuestionsBySection(section.sectionCode).length;
          const studiedCount = topics.filter((t) => data.studiedTopics.includes(t.id)).length;
          const quizCount = topics.filter((t) => (data.topicProgress[t.id]?.quizAttempts ?? 0) > 0).length;
          const sectionProgress = topics.length > 0 ? Math.round((studiedCount / topics.length) * 100) : 0;
          return (
            <Card
              key={section.id}
              className={`p-5 animate-fade-in-up border ${style.border} ${style.hoverBorder} transition-all hover:shadow-lg ${style.glow}`}
              style={{ animationDelay: `${0.15 + idx * 0.08}s` }}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${style.gradient} flex items-center justify-center shrink-0 shadow-lg ${style.glow}`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-slate-900 text-base">{section.name}</h3>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${style.tint} ${style.text}`}>
                      {Math.round(section.weight * 100)}% weight
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm mb-3">{section.longDescription}</p>
                  {/* Stats row */}
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs text-slate-500">
                      <span className="font-bold text-slate-700">{topics.length}</span> topics
                    </span>
                    <span className="text-xs text-slate-500">
                      <span className="font-bold text-slate-700">{sectionQuestionCount}</span> questions
                    </span>
                    {studiedCount > 0 && (
                      <span className={`text-xs font-medium ${style.text}`}>
                        {studiedCount}/{topics.length} studied
                      </span>
                    )}
                    {quizCount > 0 && (
                      <span className="text-xs font-medium text-amber-600">
                        {quizCount} practiced
                      </span>
                    )}
                  </div>
                  {/* Progress bar */}
                  {studiedCount > 0 && (
                    <div className="mb-4">
                      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${style.bar} rounded-full transition-all duration-500 ease-out`}
                          style={{ width: `${sectionProgress}%` }}
                        />
                      </div>
                    </div>
                  )}
                  {/* Action buttons */}
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => handleStudySection(section.id)}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r ${style.gradient} text-white text-sm font-semibold hover:opacity-90 transition-all hover:shadow-md`}
                    >
                      Study <ChevronRight className="w-4 h-4" />
                    </button>
                    {sectionQuestionCount > 0 && (
                      <button
                        onClick={() => handlePracticeSection(section.id)}
                        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl ${style.tint} ${style.text} text-sm font-semibold hover:opacity-80 transition-all border ${style.border}`}
                      >
                        Practice <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      {/* Full Mock Exam CTA */}
      <div className="animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 sm:p-7">
          <div className={`absolute top-0 right-0 w-48 h-48 ${ts.mockOrb} rounded-full blur-3xl pointer-events-none`} />
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${ts.mockIconGradient} flex items-center justify-center shrink-0 shadow-lg ${ts.mockIconGlow}`}>
              <Clock className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-white text-lg">Full Mock Exam</h3>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
                  {HAT_EXAM_DURATION_MINUTES} min
                </span>
              </div>
              <p className="text-slate-400 text-sm max-w-md">
                Simulate the complete HAT — all 3 sections, {HAT_TOTAL_QUESTIONS} questions, timed.
                Get a detailed breakdown of your performance by section.
              </p>
            </div>
            <Button
              variant="secondary"
              disabled
              className="shrink-0 bg-white/10 text-slate-300 border-white/20 hover:bg-white/10"
            >
              Coming Soon
            </Button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
