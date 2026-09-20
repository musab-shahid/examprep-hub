import {
  FileText, Clock, BookOpen, ChevronRight, ArrowRight, Sparkles,
  Target, TrendingUp, Layers,
  Zap, RotateCcw,
} from 'lucide-react';
import { useEffect } from 'react';
import { useRouter } from '@/router';
import { PageContainer, Card, Button } from '@/components/ui';
import { useSubjectData } from '@/hooks/useSubjectData';
import { useSubjectSelection } from '@/contexts/subject-selection-context';
import { useData } from '@/hooks/useData';
import { subjectsByTrack } from '@/data/subjects';
import { getSubjectStyle, getTrackStyle } from '@/data/subject-colors';
import { sectionsBySubject } from '@/data/sections';
import type { SubjectId } from '@/types';

const SUBJECT_DESCRIPTIONS: Record<string, string> = {
  'meteo-climatology': 'Atmospheric science, weather systems, climate classification, and Pakistan-specific meteorology — the most content-rich subject.',
  'earth-science': 'Physical geology, seismology, plate tectonics, and geophysics with Pakistan-focused seismic hazard content.',
  physics: 'Classical mechanics, thermodynamics, waves, electromagnetism, and modern physics — built for the FPSC syllabus.',
  maths: 'Arithmetic through coordinate geometry, sequences, and word problems — the quantitative backbone of the exam.',
  'env-studies': 'Ecosystems, biodiversity, pollution, climate policy, and Pakistan\'s environmental challenges.',
  'research-analysis': 'Scientific method, research design, descriptive and inferential statistics, data interpretation, and ethics.',
  english: 'Grammar, vocabulary, sentence mechanics, and comprehension — covering both BS-16 and BS-17 tiers.',
};

export function FpscLandingScreen() {
  const { navigate } = useRouter();
  const sd = useSubjectData();
  const { setActiveSubjectForScreen, setActiveTrack } = useSubjectSelection();
  useEffect(() => { setActiveTrack('fpsc'); }, [setActiveTrack]);
  const { data } = useData();

  const fpscSubjects = subjectsByTrack('fpsc');
  const ts = getTrackStyle('fpsc');

  const totalTopics = fpscSubjects.reduce((sum, s) => sum + sd.topicsFor(s.id as SubjectId).length, 0);
  const totalQuestions = fpscSubjects.reduce((sum, s) => {
    const sections = sectionsBySubject(s.id);
    return sum + sections.reduce((qs, sec) => qs + sec.questionCount, 0);
  }, 0);
  const totalSections = fpscSubjects.reduce((sum, s) => sum + sectionsBySubject(s.id).length, 0);

  const studiedFpscTopics = fpscSubjects.reduce((sum, s) => {
    return sum + sd.topicsFor(s.id as SubjectId).filter((t) => data.studiedTopics.includes(t.id)).length;
  }, 0);
  const quizTouchedFpscTopics = fpscSubjects.reduce((sum, s) => {
    return sum + sd.topicsFor(s.id as SubjectId).filter((t) => (data.topicProgress[t.id]?.quizAttempts ?? 0) > 0).length;
  }, 0);
  const overallProgress = totalTopics > 0 ? Math.round((studiedFpscTopics / totalTopics) * 100) : 0;

  const stats = [
    { icon: Layers, label: 'Subjects', value: String(fpscSubjects.length), color: ts.statIconColors[0] },
    { icon: BookOpen, label: 'Topics', value: String(totalTopics), color: ts.statIconColors[1] },
    { icon: Target, label: 'Questions', value: String(totalQuestions), color: ts.statIconColors[2] },
    { icon: FileText, label: 'Sections', value: String(totalSections), color: ts.statIconColors[3] },
  ];

  const handleStudySubject = (subjectId: SubjectId) => {
    setActiveSubjectForScreen('learn', subjectId);
    navigate({ screen: 'learn', parent: null });
  };

  const handlePracticeSubject = (subjectId: SubjectId) => {
    setActiveSubjectForScreen('practice', subjectId);
    navigate({ screen: 'practice', parent: null });
  };

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
              <div className={`w-14 h-14 rounded-card bg-gradient-to-br ${ts.iconGradient} flex items-center justify-center shrink-0 shadow-lg ${ts.iconGlow}`}>
                <FileText className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white">FPSC Exam</h1>
                <p className={`${ts.accentText} text-sm`}>Federal Public Service Commission</p>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-xl mb-5">
              Seven subject tracks covering the full FPSC syllabus — from Meteorology and Earth Sciences
              to Physics, Mathematics, English, Environmental Studies, and Research Methods.
              Study materials, practice questions, and formula vaults all in one place.
            </p>

            {/* Stat pills */}
            <div className="grid grid-cols-4 gap-3">
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="flex flex-col items-center gap-1 rounded-card bg-white/5 backdrop-blur-sm border border-white/10 px-2 py-3">
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
      {(studiedFpscTopics > 0 || quizTouchedFpscTopics > 0) && (
        <Card className={`p-4 mb-6 animate-fade-in-up ${ts.borderTint}`} style={{ animationDelay: '0.05s' }}>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <TrendingUp className={`w-4 h-4 ${ts.progressIcon}`} />
              <span className="font-semibold text-slate-900 text-sm">Your Progress</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className={`${ts.accent} font-bold`}>{studiedFpscTopics}/{totalTopics} studied</span>
              {quizTouchedFpscTopics > 0 && (
                <span className="text-amber-600 font-bold">{quizTouchedFpscTopics} practiced</span>
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

      {/* Quick Actions Card */}
      <Card className="p-5 mb-6 animate-fade-in-up bg-gradient-to-br from-slate-50 to-white border-slate-200" style={{ animationDelay: '0.1s' }}>
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className={`w-5 h-5 ${ts.sparklesIcon}`} />
          <h2 className="font-bold text-slate-900 text-base">Quick Actions</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <button
            onClick={() => navigate({ screen: 'practice', mode: 'quick', parent: null })}
            className="flex flex-col items-center gap-2 p-4 rounded-card bg-amber-50 border border-amber-200 hover:bg-amber-100 transition-colors"
          >
            <Zap className="w-5 h-5 text-amber-600" />
            <span className="text-sm font-semibold text-slate-900">Quick Practice</span>
            <span className="text-slate-500 text-xs">10 Qs · 5 min</span>
          </button>
          <button
            onClick={() => navigate({ screen: 'review', parent: null })}
            className="flex flex-col items-center gap-2 p-4 rounded-card bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-colors"
          >
            <RotateCcw className="w-5 h-5 text-emerald-600" />
            <span className="text-sm font-semibold text-slate-900">Review</span>
            <span className="text-slate-500 text-xs">Spaced repetition</span>
          </button>
          <button
            onClick={() => navigate({ screen: 'search', parent: null })}
            className="flex flex-col items-center gap-2 p-4 rounded-card bg-brand-50 border border-brand-200 hover:bg-brand-100 transition-colors"
          >
            <BookOpen className="w-5 h-5 text-brand-600" />
            <span className="text-sm font-semibold text-slate-900">Search</span>
            <span className="text-slate-500 text-xs">Find any topic</span>
          </button>
          <button
            onClick={() => navigate({ screen: 'practice', mode: 'mock', parent: null })}
            disabled={totalQuestions < 10}
            className="flex flex-col items-center gap-2 p-4 rounded-card bg-slate-900 text-white hover:bg-slate-800 transition-colors disabled:opacity-50"
          >
            <Clock className="w-5 h-5 text-brand-400" />
            <span className="text-sm font-semibold">Mock Exam</span>
            <span className="text-slate-400 text-xs">Full simulation</span>
          </button>
        </div>
      </Card>

      {/* Subject Cards */}
      <div className="grid grid-cols-1 gap-4 mb-6">
        {fpscSubjects.map((subject, idx) => {
          const style = getSubjectStyle(subject.id);
          const Icon = subject.lucideIcon ?? BookOpen;
          const subjectSections = sectionsBySubject(subject.id);
          const topicCount = sd.topicsFor(subject.id as SubjectId).length;
          const questionCount = subjectSections.reduce((sum, s) => sum + s.questionCount, 0);
          const studiedCount = sd.topicsFor(subject.id as SubjectId).filter((t) => data.studiedTopics.includes(t.id)).length;
          const quizCount = sd.topicsFor(subject.id as SubjectId).filter((t) => (data.topicProgress[t.id]?.quizAttempts ?? 0) > 0).length;
          const subjectProgress = topicCount > 0 ? Math.round((studiedCount / topicCount) * 100) : 0;
          const description = SUBJECT_DESCRIPTIONS[subject.id] ?? 'FPSC subject preparation.';

          return (
            <Card
              key={subject.id}
              className={`p-5 animate-fade-in-up border ${style.border} ${style.hoverBorder} transition-all hover:shadow-lg ${style.glow}`}
              style={{ animationDelay: `${0.15 + idx * 0.06}s` }}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-card bg-gradient-to-br ${style.gradient} flex items-center justify-center shrink-0 shadow-lg ${style.glow}`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-slate-900 text-base">{subject.title}</h3>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${style.tint} ${style.text}`}>
                      {subjectSections.length} sections
                    </span>
                    {subject.examScope && (
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        {subject.examScope.map((e) => e.toUpperCase()).join(' · ')}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-500 text-sm mb-3">{description}</p>

                  {/* Stats row */}
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs text-slate-500">
                      <span className="font-bold text-slate-700">{topicCount}</span> topics
                    </span>
                    <span className="text-xs text-slate-500">
                      <span className="font-bold text-slate-700">{questionCount}</span> questions
                    </span>
                    {studiedCount > 0 && (
                      <span className={`text-xs font-medium ${style.text}`}>
                        {studiedCount}/{topicCount} studied
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
                          style={{ width: `${subjectProgress}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Action buttons */}
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => handleStudySubject(subject.id as SubjectId)}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r ${style.gradient} text-white text-sm font-semibold hover:opacity-90 transition-all hover:shadow-md`}
                    >
                      Study <ChevronRight className="w-4 h-4" />
                    </button>
                    {questionCount > 0 && (
                      <button
                        onClick={() => handlePracticeSubject(subject.id as SubjectId)}
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

      {/* Mock Exam CTA */}
      <div className="animate-fade-in-up" style={{ animationDelay: '0.55s' }}>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 sm:p-7">
          <div className={`absolute top-0 right-0 w-48 h-48 ${ts.mockOrb} rounded-full blur-3xl pointer-events-none`} />

          <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className={`w-14 h-14 rounded-card bg-gradient-to-br ${ts.mockIconGradient} flex items-center justify-center shrink-0 shadow-lg ${ts.mockIconGlow}`}>
              <Clock className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-white text-lg">Full Mock Exam</h3>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
                  {totalQuestions}+ questions
                </span>
              </div>
              <p className="text-slate-400 text-sm max-w-md">
                Simulate the real exam — pull questions from all subjects, timed, with a
                detailed breakdown of your performance by subject and section.
              </p>
            </div>
            <Button
              onClick={() => navigate({ screen: 'practice', mode: 'mock', parent: null })}
              disabled={totalQuestions < 10}
              className="shrink-0 bg-white/10 text-slate-300 border-white/20 hover:bg-white/10"
            >
              Start Mock
            </Button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
