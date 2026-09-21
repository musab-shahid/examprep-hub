import { useState, useEffect, useMemo } from 'react';
import { BookOpen, ChevronRight, ChevronDown, Cloud, Calculator, Map, GraduationCap, ArrowRight, AlertTriangle, Library, BookCopy, Type, Sparkles, Check, X, BookA, PenLine, Atom, Lightbulb, TrendingUp, AlertCircle } from 'lucide-react';
import { useRouter } from '@/router';
import { useSubjectData } from '@/hooks/useSubjectData';
import { useSubjectSelection } from '@/contexts/subject-selection-context';
import { SubjectSelector, type SubjectFilterValue } from '@/components/subject/SubjectSelector';
import { useData } from '@/hooks/useData';
import { subjects, subjectMap, subjectsByTrack } from '@/data/subjects';
import { topicsBySection, getTopic } from '@/data/topics';
import { sectionMap } from '@/data/sections';
import { SectionBadge } from '@/components/SectionBadge';
import { getSubjectColor } from '@/data/subject-colors';
import { PageContainer, Card, EmptyState, ProgressBar, ActionCard, PurposeLine, TopicStatusIcon, LoadingSpinner, Button } from '@/components/ui';
import { MathText } from '@/components/MathText';
import { BackButton, Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { getTopicAsync } from '@/data/topics';
import { loadQuestionsForTopic } from '@/data/lazy-data';
import type { SubjectId, Topic, Question } from '@/types';
import { deriveAccuracy, deriveStatus } from '@/lib/constants';

// ---- Learn Landing ----
export function StudyScreen() {
  const { navigate } = useRouter();
  const sd = useSubjectData();
  const { getActiveSubject, setActiveSubjectForScreen, activeTrack } = useSubjectSelection();
  const { data } = useData();

  const activeSubject = getActiveSubject('learn');
  const isAllSubjects = activeSubject === 'all';
  const subjectId = isAllSubjects ? 'all' : (activeSubject as SubjectId);

  const subjectSections = isAllSubjects ? [] : sd.sectionsFor(subjectId);
  const subjectTopics = sd.topicsFor(subjectId);
  const hasContent = isAllSubjects || subjectTopics.length > 0;
  const subjectTitle = isAllSubjects ? 'All Subjects' : (subjectMap[subjectId]?.title ?? 'Subject');

  const handleSubjectChange = (value: SubjectFilterValue) => {
    setActiveSubjectForScreen('learn', value);
  };

  // Continue Learning logic
  const continueTopic = useMemo(() => {
    if (isAllSubjects || !hasContent) return null;
    if (data.lastOpenedTopic) {
      const t = getTopic(data.lastOpenedTopic);
      if (t && subjectTopics.some((st) => st.id === t.id) && !data.studiedTopics.includes(t.id)) {
        return t;
      }
    }
    const inProgress = subjectTopics
      .filter((t) => {
        const p = data.topicProgress[t.id];
        const studied = data.studiedTopics.includes(t.id);
        return deriveStatus(studied, p?.quizTotal ?? 0, deriveAccuracy(p?.quizCorrect ?? 0, p?.quizTotal ?? 0)) === 'studied';
      })
      .sort((a, b) => {
        const aTime = data.topicProgress[a.id]?.lastStudied ? new Date(data.topicProgress[a.id]!.lastStudied!).getTime() : 0;
        const bTime = data.topicProgress[b.id]?.lastStudied ? new Date(data.topicProgress[b.id]!.lastStudied!).getTime() : 0;
        return bTime - aTime;
      });
    if (inProgress.length > 0) return inProgress[0];
    const notStarted = subjectTopics.find((t) => !data.studiedTopics.includes(t.id));
    if (notStarted) return notStarted;
    return null;
  }, [isAllSubjects, hasContent, data.lastOpenedTopic, data.topicProgress, data.studiedTopics, subjectTopics]);

  // Accordion state
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  // All subjects view
  if (isAllSubjects) {
    const trackSubjects = subjectsByTrack(activeTrack);
    const subjectsWithContent = trackSubjects.filter((s) => sd.topicsFor(s.id as SubjectId).length > 0);
    return (
      <PageContainer>
        <div className="mb-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Learn</h1>
        </div>
        <PurposeLine>Read new material or revisit what you've seen.</PurposeLine>
        <div className="mb-6">
          <SubjectSelector value={activeSubject} onChange={handleSubjectChange} showAllOption />
        </div>
        <div className="space-y-3">
          {subjectsWithContent.map((subject) => {
            const topics = sd.topicsFor(subject.id as SubjectId);
            const studied = topics.filter((t) => data.studiedTopics.includes(t.id)).length;
            const color = getSubjectColor(subject.id);
            const Icon = subject.lucideIcon;
            return (
              <Card key={subject.id} className="p-4">
                <button onClick={() => handleSubjectChange(subject.id as SubjectId)} className="w-full flex items-center gap-4 text-left">
                  <div className={`w-12 h-12 rounded-xl ${color.tint} flex items-center justify-center shrink-0`}>
                    {Icon && <Icon className={`w-6 h-6 ${color.text}`} />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`font-semibold text-sm sm:text-base truncate ${color.text}`}>{subject.title}</p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-slate-500 text-xs">{topics.length} topics</span>
                      <span className={`text-xs font-medium ${color.text}`}>{studied}/{topics.length} studied</span>
                    </div>
                    <div className="mt-2"><ProgressBar value={topics.length > 0 ? Math.round((studied / topics.length) * 100) : 0} colorClass={getSubjectColor(subject.id).bar} /></div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 shrink-0" />
                </button>
              </Card>
            );
          })}
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <div className="mb-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Learn</h1>
      </div>
      <PurposeLine>Read new material or revisit what you've seen.</PurposeLine>

      <div className="mb-6">
        <SubjectSelector value={activeSubject} onChange={handleSubjectChange} showAllOption />
      </div>

      {!hasContent ? (
        <Card className="p-8">
          <EmptyState title={`No content for ${subjectTitle} yet`} message="Try selecting a different subject or use All Subjects." icon={<GraduationCap className="w-12 h-12" />} />
        </Card>
      ) : (
        <>
          {/* Continue Learning card */}
          {continueTopic && (() => {
            const contColor = getSubjectColor(subjectId as string);
            return (
            <ActionCard className="mb-6" borderColorClass={contColor.borderLeft}>
              <p className={`text-xs font-semibold uppercase tracking-wide mb-1 ${contColor.text}`}>Continue Learning</p>
              <p className="text-lg font-bold text-slate-900 mb-1">{continueTopic.title}</p>
              <p className="text-slate-500 text-sm mb-1">Section: {sectionMap[continueTopic.sectionId]?.title ?? continueTopic.sectionId}</p>
              <p className="text-slate-400 text-xs mb-4">
                {data.studiedTopics.includes(continueTopic.id) ? '100% read' : '0% read'}
              </p>
              <button
                onClick={() => navigate({ screen: 'topic', topicId: continueTopic.id })}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl ${contColor.bar} text-white text-sm font-semibold hover:opacity-90 transition-opacity`}
              >
                Continue Reading <ArrowRight className="w-4 h-4" />
              </button>
            </ActionCard>
            );
          })()}

          {/* Featured links */}
          {subjectId === 'meteo-climatology' && (
            <button
              onClick={() => navigate({ screen: 'section', sectionId: 'MC-I' })}
              className="w-full flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-sky-500 to-sky-600 text-white hover:from-sky-600 hover:to-sky-700 transition-colors text-left mb-4"
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0"><Map className="w-6 h-6 text-white" /></div>
              <div className="flex-1">
                <p className="font-semibold text-lg">Pakistan Climate</p>
                <p className="text-sky-100 text-sm">7 topics covering climate zones, monsoon patterns, and climate change</p>
              </div>
              <ChevronRight className="w-5 h-5 text-white/70 shrink-0" />
            </button>
          )}

          <div className={`grid gap-3 mb-6 ${subjectId === 'meteo-climatology' ? 'grid-cols-2' : 'grid-cols-1'}`}>
            <button onClick={() => navigate({ screen: 'formulas' })} className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 transition-colors text-left">
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0"><Calculator className="w-5 h-5 text-slate-700" /></div>
              <div className="min-w-0"><p className="font-semibold text-slate-900 text-sm">Formula Vault</p><p className="text-slate-500 text-xs">All formulas in {subjectTitle}</p></div>
            </button>
            {subjectId === 'meteo-climatology' && (
              <button onClick={() => navigate({ screen: 'cloud-atlas' })} className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 transition-colors text-left">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0"><Cloud className="w-5 h-5 text-slate-700" /></div>
                <div className="min-w-0"><p className="font-semibold text-slate-900 text-sm">Cloud Atlas</p><p className="text-slate-500 text-xs">10 cloud genera</p></div>
              </button>
            )}
          </div>

          {/* Sections accordion */}
          <Card className="p-5 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-900">Sections</h3>
              <span className="text-slate-400 text-sm">{subjectSections.length}</span>
            </div>
            <div className="space-y-2">
              {subjectSections.map((section) => {
                const sectionTopics = topicsBySection(section.id);
                const studiedInSection = sectionTopics.filter((t) => data.studiedTopics.includes(t.id)).length;
                const masteredInSection = sectionTopics.filter((t) => {
                  const p = data.topicProgress[t.id];
                  const studied = data.studiedTopics.includes(t.id);
                  return deriveStatus(studied, p?.quizTotal ?? 0, deriveAccuracy(p?.quizCorrect ?? 0, p?.quizTotal ?? 0)) === 'mastered';
                }).length;
                const isExpanded = expandedSection === section.id;
                return (
                  <div key={section.id}>
                    <button
                      onClick={() => setExpandedSection(isExpanded ? null : section.id)}
                      className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors text-left"
                    >
                      <SectionBadge section={section} />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-slate-900 text-sm truncate">{section.title}</p>
                        <p className="text-slate-500 text-xs mt-0.5">{section.topicCount} topics · {studiedInSection} studied · {masteredInSection} mastered</p>
                      </div>
                      {isExpanded ? <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" /> : <ChevronRight className="w-5 h-5 text-slate-400 shrink-0" />}
                    </button>
                    {isExpanded && (
                      <div className="ml-12 pl-3 pr-1 py-1 space-y-1">
                        {sectionTopics.map((topic) => {
                          const p = data.topicProgress[topic.id];
                          const studied = data.studiedTopics.includes(topic.id);
                          const status = deriveStatus(studied, p?.quizTotal ?? 0, deriveAccuracy(p?.quizCorrect ?? 0, p?.quizTotal ?? 0));
                          const statusLabel = status === 'mastered' ? 'mastered' : status === 'studied' ? 'studied' : 'not started';
                          return (
                            <button
                              key={topic.id}
                              onClick={() => navigate({ screen: 'topic', topicId: topic.id })}
                              className="w-full flex items-center gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors text-left"
                            >
                              <TopicStatusIcon status={status} />
                              <span className="text-slate-700 text-sm font-medium truncate flex-1">{topic.title}</span>
                              {topic.postRestriction === 'bs17' && (
                                <span className="text-xs font-medium px-2 py-0.5 rounded bg-amber-100 text-amber-700 border border-amber-200 shrink-0">BS-17</span>
                              )}
                              <span className="text-slate-400 text-xs shrink-0">{statusLabel}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Stats footer */}
          <p className="text-slate-500 text-sm text-center">
            {subjectTopics.filter((t) => data.studiedTopics.includes(t.id)).length} / {subjectTopics.length} topics studied · {subjectTopics.length > 0 ? Math.round((subjectTopics.filter((t) => data.studiedTopics.includes(t.id)).length / subjectTopics.length) * 100) : 0}% complete
          </p>
        </>
      )}
    </PageContainer>
  );
}

// ---- Section → Topic List ----
export function SectionScreen({ sectionId }: { sectionId: string }) {
  const { navigate } = useRouter();
  const { data } = useData();
  const section = sectionMap[sectionId];
  const sectionTopics = topicsBySection(sectionId);

  if (!section) return <EmptyState title="Section not found" message="This section does not exist." />;

  return (
    <PageContainer>
      <div className="flex items-center gap-2 mb-4"><BackButton /><Breadcrumbs /></div>
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <SectionBadge section={section} />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">{section.title}</h1>
        <p className="text-slate-500 mt-1">{section.topicCount} topics</p>
      </div>
      <div className="space-y-2">
        {sectionTopics.map((topic) => {
          const prog = data.topicProgress[topic.id];
          const studied = data.studiedTopics.includes(topic.id);
          const status = deriveStatus(studied, prog?.quizTotal ?? 0, deriveAccuracy(prog?.quizCorrect ?? 0, prog?.quizTotal ?? 0));
          return (
            <Card key={topic.id} className="p-0">
              <button onClick={() => navigate({ screen: 'topic', topicId: topic.id })} className="w-full flex items-center gap-3 p-4 hover:bg-slate-50 transition-colors text-left rounded-2xl">
                <span className="text-slate-400 text-xs font-bold w-6 shrink-0">{topic.order}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-slate-900 text-sm sm:text-base truncate">{topic.title}</p>
                  {topic.content ? <span className="text-emerald-600 text-xs font-medium">Content available</span> : <span className="text-slate-400 text-xs">Content coming soon</span>}
                </div>
                <TopicStatusIcon status={status} />
                <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
              </button>
            </Card>
          );
        })}
      </div>
    </PageContainer>
  );
}

// ---- Topic Reader ----
export function TopicScreen({ topicId }: { topicId: string }) {
  const { navigate } = useRouter();
  const { data, markStudied, setLastTopic } = useData();
  const meta = getTopic(topicId);
  const [topic, setTopic] = useState<Topic | undefined>(meta);
  const [topicQuestions, setTopicQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState<Set<number>>(new Set([0]));
  const [expandedSubGroups, setExpandedSubGroups] = useState<Set<number>>(new Set([0]));
  const [expandedVocabGroups, setExpandedVocabGroups] = useState<Set<number>>(new Set([0]));
  const [expandedPrefixGroups, setExpandedPrefixGroups] = useState<Set<number>>(new Set([0]));
  const [expandedSuffixGroups, setExpandedSuffixGroups] = useState<Set<number>>(new Set([0]));
  const [expandedRootGroups, setExpandedRootGroups] = useState<Set<number>>(new Set([0]));
  const [expandedGrammarGroups, setExpandedGrammarGroups] = useState<Set<number>>(new Set([0]));
  const [expandedSubtopics, setExpandedSubtopics] = useState<Set<number>>(new Set([0]));

  useEffect(() => { window.scrollTo(0, 0); }, [topicId]);

  useEffect(() => { setLastTopic(topicId); }, [topicId, setLastTopic]);

  const toggleSet = (setter: React.Dispatch<React.SetStateAction<Set<number>>>) => (idx: number) => {
    setter((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setLoadError(false);
    getTopicAsync(topicId).then((t) => {
      if (cancelled) return;
      setTopic(t);
      setLoading(false);
      if (t?.content) {
        loadQuestionsForTopic(topicId).then((qs) => {
          if (!cancelled) setTopicQuestions(qs);
        }).catch(() => {});
      }
    }).catch(() => {
      if (cancelled) return;
      setLoadError(true);
      setLoading(false);
    });
    return () => { cancelled = true; };
  }, [topicId]);

  if (loading) return <PageContainer><LoadingSpinner label="Loading topic…" /></PageContainer>;
  if (loadError) return (
    <PageContainer>
      <div className="flex items-center gap-2 mb-4"><BackButton /><Breadcrumbs /></div>
      <Card className="p-8">
        <EmptyState title="Failed to load" message="Something went wrong while loading this topic." icon={<AlertTriangle className="w-12 h-12" />} />
        <div className="flex justify-center mt-4">
          <Button onClick={() => window.location.reload()}>Retry</Button>
        </div>
      </Card>
    </PageContainer>
  );
  if (!topic) return <EmptyState title="Topic not found" message="This topic does not exist." />;

  const isStudied = data.studiedTopics.includes(topicId);

  if (!topic.content) {
    return (
      <PageContainer>
        <div className="flex items-center gap-2 mb-4"><BackButton /><Breadcrumbs /></div>
        <div className="mb-4">
          <span className="text-xs font-bold text-sky-600 bg-sky-100 px-2 py-0.5 rounded">Section {topic.sectionId} · Topic {topic.order}</span>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">{topic.title}</h1>
        </div>
        <Card className="p-8">
          <EmptyState title="Content Coming Soon" message="This topic hasn't been authored yet." icon={<BookOpen className="w-12 h-12" />} />
          <div className="flex justify-center mt-4">
            <Button variant="secondary" onClick={() => navigate({ screen: 'section', sectionId: topic.sectionId })}>Back to Section</Button>
          </div>
        </Card>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <div className="flex items-center gap-2 mb-4"><BackButton /><Breadcrumbs /></div>
      <div className="mb-6">
        <span className="text-xs font-bold text-sky-600 bg-sky-100 px-2 py-0.5 rounded">Section {topic.sectionId} · Topic {topic.order}</span>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">{topic.title}</h1>
        {isStudied && <span className="inline-flex items-center gap-1 text-emerald-600 text-sm font-medium mt-2"><BookOpen className="w-4 h-4" /> Studied</span>}
      </div>
      <div className="space-y-4">
        {topic.definition && (
          <Card className="p-5 border-l-4 border-l-sky-500">
            <div className="flex items-center gap-2 mb-2"><BookOpen className="w-4 h-4 text-sky-500" /><h3 className="font-semibold text-slate-900 text-sm uppercase tracking-wide">Definition</h3></div>
            <p className="text-slate-700 text-base leading-relaxed">{topic.definition}</p>
          </Card>
        )}
        {topic.keyFacts && topic.keyFacts.length > 0 && (
          <Card className="p-5">
            <h3 className="font-semibold text-slate-900 text-sm uppercase tracking-wide mb-3">Key Facts</h3>
            <ul className="space-y-2">{topic.keyFacts.map((fact, i) => <li key={i} className="flex items-start gap-2 text-slate-700 text-sm leading-relaxed"><span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 shrink-0" />{fact}</li>)}</ul>
          </Card>
        )}
        {topic.explanationSections && topic.explanationSections.map((sec, i) => (
          <Card key={i} className="p-5"><h3 className="font-semibold text-slate-900 mb-2">{sec.heading}</h3><p className="text-slate-700 text-base leading-relaxed">{sec.body}</p></Card>
        ))}
        {(topic as Topic & { subtopics?: unknown[] }).subtopics && (topic as Topic & { subtopics?: unknown[] }).subtopics!.length > 0 && (
          <SubtopicsBlock subtopics={(topic as Topic & { subtopics?: QuantSubtopic[] }).subtopics!} expandedGroups={expandedSubtopics} onToggleGroup={toggleSet(setExpandedSubtopics)} />
        )}
        {topic.vocabularyGroups && topic.vocabularyGroups.length > 0 && (
          <VocabularyGroupsBlock groups={topic.vocabularyGroups} expandedGroups={expandedVocabGroups} onToggleGroup={toggleSet(setExpandedVocabGroups)} />
        )}
        {topic.prefixGroups && topic.prefixGroups.length > 0 && (
          <PrefixGroupsBlock groups={topic.prefixGroups} expandedGroups={expandedPrefixGroups} onToggleGroup={toggleSet(setExpandedPrefixGroups)} />
        )}
        {topic.suffixGroups && topic.suffixGroups.length > 0 && (
          <SuffixGroupsBlock groups={topic.suffixGroups} expandedGroups={expandedSuffixGroups} onToggleGroup={toggleSet(setExpandedSuffixGroups)} />
        )}
        {topic.rootGroups && topic.rootGroups.length > 0 && (
          <RootGroupsBlock groups={topic.rootGroups} expandedGroups={expandedRootGroups} onToggleGroup={toggleSet(setExpandedRootGroups)} />
        )}
        {topic.grammarRules && topic.grammarRules.length > 0 && (
          <GrammarRulesBlock groups={topic.grammarRules} expandedGroups={expandedGrammarGroups} onToggleGroup={toggleSet(setExpandedGrammarGroups)} />
        )}
        {topic.substitutionGroups && topic.substitutionGroups.length > 0 && (
          <SubstitutionGroupsBlock groups={topic.substitutionGroups} expandedGroups={expandedSubGroups} onToggleGroup={toggleSet(setExpandedSubGroups)} />
        )}
        {topic.idiomGroups && topic.idiomGroups.length > 0 && (
          <IdiomGroupsBlock groups={topic.idiomGroups} expandedGroups={expandedGroups} onToggleGroup={toggleSet(setExpandedGroups)} />
        )}
        {topic.formula && (() => { const formulas = Array.isArray(topic.formula) ? topic.formula : [topic.formula]; return formulas.map((f, fi) => (
          <Card key={fi} className="p-5 bg-slate-900">
            <div className="flex items-center gap-2 mb-3"><Calculator className="w-4 h-4 text-sky-400" /><h3 className="font-semibold text-white text-sm uppercase tracking-wide">Formula — {f.name}</h3></div>
            <p className="text-sky-300 text-xl font-mono mb-4 text-center py-3 bg-slate-800 rounded-xl">{f.expression}</p>
            <div className="space-y-1.5">{f.variables.map((v, i) => <div key={i} className="flex items-baseline gap-3 text-sm"><span className="text-sky-400 font-mono font-bold w-8 shrink-0">{v.symbol}</span><span className="text-slate-300">= {v.meaning}</span></div>)}</div>
          </Card>
        )); })()}
        {(topic as Topic & { quantFormulas?: unknown[] }).quantFormulas && (topic as Topic & { quantFormulas?: unknown[] }).quantFormulas!.length > 0 && (
          <QuantFormulasBlock formulas={(topic as Topic & { quantFormulas?: QuantFormulaEntry[] }).quantFormulas!} />
        )}
        {topic.examPoints && topic.examPoints.length > 0 && (
          <Card className="p-5 border-l-4 border-l-amber-500 bg-amber-50/50">
            <div className="flex items-center gap-2 mb-3"><span className="text-amber-600 font-semibold text-sm uppercase tracking-wide">Exam Points</span></div>
            <ul className="space-y-2">{topic.examPoints.map((point, i) => <li key={i} className="flex items-start gap-2 text-slate-800 text-sm leading-relaxed"><span className="text-amber-500 font-bold shrink-0">★</span>{point}</li>)}</ul>
          </Card>
        )}
        {topic.comparisonTable && (
          <Card className="p-5 overflow-hidden">
            <h3 className="font-semibold text-slate-900 text-sm uppercase tracking-wide mb-3">Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    {topic.comparisonTable.headers.map((h, i) => (
                      <th key={i} className="text-left py-2 px-3 font-semibold text-slate-900"><MathText text={h} /></th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {topic.comparisonTable.rows.map((row, i) => (
                    <tr key={i} className="border-b border-slate-100 last:border-0">
                      {row.map((cell, j) => (
                        <td key={j} className={`py-2.5 px-3 ${j === 0 ? 'font-medium text-slate-900' : 'text-slate-600'}`}><MathText text={cell} /></td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}
        {topic.workedExample && (() => { const examples = Array.isArray(topic.workedExample) ? topic.workedExample : [topic.workedExample]; return examples.map((ex, ei) => (
          <Card key={ei} className="p-5 border-l-4 border-l-emerald-500 bg-emerald-50/40">
            <div className="flex items-center gap-2 mb-3"><span className="text-emerald-700 font-semibold text-sm uppercase tracking-wide">Worked Example{examples.length > 1 ? ` ${ei + 1}` : ''}</span></div>
            <div className="space-y-3"><div><p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Problem</p><p className="text-slate-800 text-base leading-relaxed"><MathText text={ex.problem} /></p></div><div><p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Solution</p><p className="text-slate-700 text-sm leading-relaxed"><MathText text={ex.solution} /></p></div><div className="pt-2 border-t border-emerald-200"><p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Answer</p><p className="text-emerald-800 text-base font-semibold"><MathText text={ex.answer} /></p></div></div>
          </Card>
        )); })()}
        {topic.commonMistakes && topic.commonMistakes.length > 0 && (
          <Card className="p-5 border-l-4 border-l-rose-500 bg-rose-50/40">
            <div className="flex items-center gap-2 mb-3"><span className="text-rose-700 font-semibold text-sm uppercase tracking-wide">Common Mistakes</span></div>
            <ul className="space-y-2">{topic.commonMistakes.map((mistake, i) => <li key={i} className="flex items-start gap-2 text-slate-800 text-sm leading-relaxed"><span className="text-rose-500 font-bold shrink-0">✗</span><MathText text={mistake} /></li>)}</ul>
          </Card>
        )}
        {(() => {
          const groups: { label: string; ids: string[]; chipClass: string }[] = [];
          if (topic.buildsOn?.length) groups.push({ label: 'Builds On', ids: topic.buildsOn, chipClass: 'bg-green-50 hover:bg-green-100 text-green-700' });
          if (topic.leadsTo?.length) groups.push({ label: 'Leads To', ids: topic.leadsTo, chipClass: 'bg-blue-50 hover:bg-blue-100 text-blue-700' });
          if (topic.usedIn?.length) groups.push({ label: 'Used In', ids: topic.usedIn, chipClass: 'bg-amber-50 hover:bg-amber-100 text-amber-700' });
          if (groups.length === 0) return null;
          return (
            <Card className="p-5">
              <h3 className="font-semibold text-slate-900 text-sm uppercase tracking-wide mb-3">Connected Topics</h3>
              <div className="space-y-3">
                {groups.map((g) => (
                  <div key={g.label}>
                    <p className="text-slate-400 text-xs font-medium mb-1.5">{g.label}</p>
                    <div className="flex flex-wrap gap-2">
                      {g.ids.map((rid) => { const t = getTopic(rid); if (!t) return null; return (
                        <button key={rid} onClick={() => navigate({ screen: 'topic', topicId: rid })} className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${g.chipClass}`}>{t.title}</button>
                      ); })}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          );
        })()}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button onClick={() => markStudied(topicId)} disabled={isStudied} variant={isStudied ? 'secondary' : 'primary'} className="flex-1">{isStudied ? 'Marked as Studied' : 'Mark as Studied'}</Button>
          {topicQuestions.length > 0 && <Button variant="secondary" onClick={() => navigate({ screen: 'quiz', mode: 'topic', topicId })} className="flex-1">Test Me — {topicQuestions.length} Question{topicQuestions.length !== 1 ? 's' : ''}</Button>}
        </div>
      </div>
    </PageContainer>
  );
}

function IdiomGroupsBlock({ groups, expandedGroups, onToggleGroup }: {
  groups: NonNullable<Topic['idiomGroups']>;
  expandedGroups: Set<number>;
  onToggleGroup: (index: number) => void;
}) {
  const validGroups = groups.filter((g) => g.idioms.length > 0);

  return (
    <Card className="p-5">
      <div className="flex items-center gap-2 mb-4">
        <Library className="w-5 h-5 text-slate-600" />
        <h3 className="font-semibold text-slate-900 text-sm uppercase tracking-wide">Idioms by Category</h3>
      </div>
      <div className="space-y-3">
        {validGroups.map((group, gi) => {
          const isExpanded = expandedGroups.has(gi);
          return (
            <div key={gi} className="rounded-xl border border-slate-200 overflow-hidden">
              <button
                onClick={() => onToggleGroup(gi)}
                className="w-full flex items-center justify-between gap-3 p-4 hover:bg-slate-50 transition-colors text-left"
              >
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-slate-900 text-sm">{group.title}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{group.description}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full tabular-nums">{group.idioms.length}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                </div>
              </button>
              {isExpanded && (
                <div className="px-4 pb-4 pt-1 border-t border-slate-100">
                  <div className="space-y-3 mt-3">
                    {group.idioms.map((item, ii) => (
                      <div key={ii} className="pl-3 border-l-2 border-slate-200">
                        <p className="text-slate-900 text-sm font-semibold">&ldquo;{item.idiom}&rdquo;</p>
                        <p className="text-slate-600 text-sm mt-0.5">{item.meaning}</p>
                        <p className="text-slate-500 text-sm italic mt-1 pl-3">e.g. {item.example}</p>
                        {item.origin && (
                          <p className="text-slate-400 text-xs italic mt-1 pl-3">Origin: {item.origin}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
}
function SubstitutionGroupsBlock({ groups, expandedGroups, onToggleGroup }: {
  groups: NonNullable<Topic['substitutionGroups']>;
  expandedGroups: Set<number>;
  onToggleGroup: (index: number) => void;
}) {
  const validGroups = groups.filter((g) => g.entries.length > 0);

  return (
    <Card className="p-5">
      <div className="flex items-center gap-2 mb-4">
        <BookCopy className="w-5 h-5 text-violet-600" />
        <h3 className="font-semibold text-slate-900 text-sm uppercase tracking-wide">One-Word Substitutions by Category</h3>
      </div>
      <div className="space-y-3">
        {validGroups.map((group, gi) => {
          const isExpanded = expandedGroups.has(gi);
          return (
            <div key={gi} className="rounded-xl border border-violet-200 overflow-hidden">
              <button
                onClick={() => onToggleGroup(gi)}
                className="w-full flex items-center justify-between gap-3 p-4 hover:bg-violet-50/50 transition-colors text-left"
              >
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-slate-900 text-sm">{group.groupTitle}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{group.groupDescription}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs font-medium text-violet-600 bg-violet-100 px-2 py-0.5 rounded-full tabular-nums">{group.entries.length}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                </div>
              </button>
              {isExpanded && (
                <div className="px-4 pb-4 pt-1 border-t border-violet-100">
                  <div className="space-y-3 mt-3">
                    {group.entries.map((entry, ei) => (
                      <div key={ei} className="pl-3 border-l-2 border-violet-200">
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-slate-900 text-sm font-semibold">{entry.term}</p>
                          {entry.difficulty && (
                            <span className={`text-xs font-medium px-2 py-0.5 rounded-full shrink-0 ${
                              entry.difficulty === 'easy'
                                ? 'bg-emerald-100 text-emerald-700'
                                : entry.difficulty === 'medium'
                                  ? 'bg-amber-100 text-amber-700'
                                  : 'bg-red-100 text-red-700'
                            }`}>
                              {entry.difficulty}
                            </span>
                          )}
                        </div>
                        <p className="text-slate-600 text-sm mt-0.5">{entry.definition}</p>
                        {entry.example && (
                          <p className="text-slate-500 text-sm italic mt-1 pl-3">e.g. {entry.example}</p>
                        )}
                        {entry.relatedTerms && entry.relatedTerms.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mt-1.5">
                            {entry.relatedTerms.map((rt, ri) => (
                              <span key={ri} className="text-xs font-medium px-2 py-0.5 rounded-full bg-violet-50 text-violet-600 border border-violet-200">{rt}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
}
// ---- Vocabulary Groups Block (V1) ----
function VocabularyGroupsBlock({ groups, expandedGroups, onToggleGroup }: {
  groups: NonNullable<Topic['vocabularyGroups']>;
  expandedGroups: Set<number>;
  onToggleGroup: (index: number) => void;
}) {
  const validGroups = groups.filter((g) => g.words.length > 0);

  return (
    <Card className="p-5">
      <div className="flex items-center gap-2 mb-4">
        <BookA className="w-5 h-5 text-sky-600" />
        <h3 className="font-semibold text-slate-900 text-sm uppercase tracking-wide">Vocabulary by Group</h3>
      </div>
      <div className="space-y-3">
        {validGroups.map((group, gi) => {
          const isExpanded = expandedGroups.has(gi);
          return (
            <div key={gi} className="rounded-xl border border-sky-200 overflow-hidden">
              <button
                onClick={() => onToggleGroup(gi)}
                className="w-full flex items-center justify-between gap-3 p-4 hover:bg-sky-50/50 transition-colors text-left"
              >
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-slate-900 text-sm">{group.title}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{group.description}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs font-medium text-sky-600 bg-sky-100 px-2 py-0.5 rounded-full tabular-nums">{group.words.length}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                </div>
              </button>
              {isExpanded && (
                <div className="px-4 pb-4 pt-1 border-t border-sky-100">
                  <div className="space-y-3 mt-3">
                    {group.words.map((item, ii) => (
                      <div key={ii} className="pl-3 border-l-2 border-sky-200">
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-slate-900 text-sm font-semibold">{item.word}</p>
                          {item.difficulty && (
                            <span className={`text-xs font-medium px-2 py-0.5 rounded-full shrink-0 ${
                              item.difficulty === 'easy' ? 'bg-emerald-100 text-emerald-700'
                                : item.difficulty === 'medium' ? 'bg-amber-100 text-amber-700'
                                : 'bg-red-100 text-red-700'
                            }`}>{item.difficulty}</span>
                          )}
                        </div>
                        <p className="text-slate-600 text-sm mt-0.5">{item.definition}</p>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
                          {item.synonym && item.synonym !== '—' && (
                            <span className="text-xs text-slate-500"><span className="font-medium text-emerald-600">Syn:</span> {item.synonym}</span>
                          )}
                          {item.antonym && item.antonym !== '—' && (
                            <span className="text-xs text-slate-500"><span className="font-medium text-rose-600">Ant:</span> {item.antonym}</span>
                          )}
                        </div>
                        {item.example && (
                          <p className="text-slate-500 text-sm italic mt-1 pl-3">e.g. {item.example}</p>
                        )}
                        {item.notes && (
                          <p className="text-slate-400 text-xs mt-1 pl-3">{item.notes}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
}
// ---- Prefix Groups Block (V2) ----
function PrefixGroupsBlock({ groups, expandedGroups, onToggleGroup }: {
  groups: NonNullable<Topic['prefixGroups']>;
  expandedGroups: Set<number>;
  onToggleGroup: (index: number) => void;
}) {
  const validGroups = groups.filter((g) => g.prefixes.length > 0);

  return (
    <Card className="p-5">
      <div className="flex items-center gap-2 mb-4">
        <Type className="w-5 h-5 text-teal-600" />
        <h3 className="font-semibold text-slate-900 text-sm uppercase tracking-wide">Prefixes by Category</h3>
      </div>
      <div className="space-y-3">
        {validGroups.map((group, gi) => {
          const isExpanded = expandedGroups.has(gi);
          return (
            <div key={gi} className="rounded-xl border border-teal-200 overflow-hidden">
              <button
                onClick={() => onToggleGroup(gi)}
                className="w-full flex items-center justify-between gap-3 p-4 hover:bg-teal-50/50 transition-colors text-left"
              >
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-slate-900 text-sm">{group.title}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{group.description}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs font-medium text-teal-600 bg-teal-100 px-2 py-0.5 rounded-full tabular-nums">{group.prefixes.length}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                </div>
              </button>
              {isExpanded && (
                <div className="px-4 pb-4 pt-1 border-t border-teal-100">
                  <div className="space-y-3 mt-3">
                    {group.prefixes.map((item, ii) => (
                      <div key={ii} className="pl-3 border-l-2 border-teal-200">
                        <p className="text-slate-900 text-sm font-semibold font-mono">{item.prefix}</p>
                        <p className="text-slate-600 text-sm mt-0.5">{item.meaning}</p>
                        <div className="flex flex-wrap gap-1.5 mt-1.5">
                          {item.examples.map((ex, ei) => (
                            <span key={ei} className="text-xs font-medium px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200">{ex}</span>
                          ))}
                        </div>
                        {item.notes && (
                          <p className="text-slate-400 text-xs mt-1.5 italic">{item.notes}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
}
// ---- Suffix Groups Block (V2) ----
function SuffixGroupsBlock({ groups, expandedGroups, onToggleGroup }: {
  groups: NonNullable<Topic['suffixGroups']>;
  expandedGroups: Set<number>;
  onToggleGroup: (index: number) => void;
}) {
  const validGroups = groups.filter((g) => g.suffixes.length > 0);

  return (
    <Card className="p-5">
      <div className="flex items-center gap-2 mb-4">
        <PenLine className="w-5 h-5 text-indigo-600" />
        <h3 className="font-semibold text-slate-900 text-sm uppercase tracking-wide">Suffixes by Category</h3>
      </div>
      <div className="space-y-3">
        {validGroups.map((group, gi) => {
          const isExpanded = expandedGroups.has(gi);
          return (
            <div key={gi} className="rounded-xl border border-indigo-200 overflow-hidden">
              <button
                onClick={() => onToggleGroup(gi)}
                className="w-full flex items-center justify-between gap-3 p-4 hover:bg-indigo-50/50 transition-colors text-left"
              >
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-slate-900 text-sm">{group.title}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{group.description}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs font-medium text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded-full tabular-nums">{group.suffixes.length}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                </div>
              </button>
              {isExpanded && (
                <div className="px-4 pb-4 pt-1 border-t border-indigo-100">
                  <div className="space-y-3 mt-3">
                    {group.suffixes.map((item, ii) => (
                      <div key={ii} className="pl-3 border-l-2 border-indigo-200">
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-slate-900 text-sm font-semibold font-mono">{item.suffix}</p>
                          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-200 shrink-0">{item.partOfSpeech}</span>
                        </div>
                        <p className="text-slate-600 text-sm mt-0.5">{item.meaning}</p>
                        <div className="flex flex-wrap gap-1.5 mt-1.5">
                          {item.examples.map((ex, ei) => (
                            <span key={ei} className="text-xs font-medium px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">{ex}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
}
// ---- Root Groups Block (V2) ----
function RootGroupsBlock({ groups, expandedGroups, onToggleGroup }: {
  groups: NonNullable<Topic['rootGroups']>;
  expandedGroups: Set<number>;
  onToggleGroup: (index: number) => void;
}) {
  const validGroups = groups.filter((g) => g.roots.length > 0);

  return (
    <Card className="p-5">
      <div className="flex items-center gap-2 mb-4">
        <Atom className="w-5 h-5 text-orange-600" />
        <h3 className="font-semibold text-slate-900 text-sm uppercase tracking-wide">Roots by Category</h3>
      </div>
      <div className="space-y-3">
        {validGroups.map((group, gi) => {
          const isExpanded = expandedGroups.has(gi);
          return (
            <div key={gi} className="rounded-xl border border-orange-200 overflow-hidden">
              <button
                onClick={() => onToggleGroup(gi)}
                className="w-full flex items-center justify-between gap-3 p-4 hover:bg-orange-50/50 transition-colors text-left"
              >
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-slate-900 text-sm">{group.title}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{group.description}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs font-medium text-orange-600 bg-orange-100 px-2 py-0.5 rounded-full tabular-nums">{group.roots.length}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                </div>
              </button>
              {isExpanded && (
                <div className="px-4 pb-4 pt-1 border-t border-orange-100">
                  <div className="space-y-3 mt-3">
                    {group.roots.map((item, ii) => (
                      <div key={ii} className="pl-3 border-l-2 border-orange-200">
                        <p className="text-slate-900 text-sm font-semibold font-mono">{item.root}</p>
                        <p className="text-slate-600 text-sm mt-0.5">{item.meaning}</p>
                        <div className="flex flex-wrap gap-1.5 mt-1.5">
                          {item.wordFamily.map((word, wi) => (
                            <span key={wi} className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-50 text-orange-700 border border-orange-200">{word}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
}
// ---- Grammar Rules Block (V3) ----
function GrammarRulesBlock({ groups, expandedGroups, onToggleGroup }: {
  groups: NonNullable<Topic['grammarRules']>;
  expandedGroups: Set<number>;
  onToggleGroup: (index: number) => void;
}) {
  const validGroups = groups.filter((g) => g.rules.length > 0);

  return (
    <Card className="p-5">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-5 h-5 text-amber-600" />
        <h3 className="font-semibold text-slate-900 text-sm uppercase tracking-wide">Grammar Rules by Category</h3>
      </div>
      <div className="space-y-3">
        {validGroups.map((group, gi) => {
          const isExpanded = expandedGroups.has(gi);
          return (
            <div key={gi} className="rounded-xl border border-amber-200 overflow-hidden">
              <button
                onClick={() => onToggleGroup(gi)}
                className="w-full flex items-center justify-between gap-3 p-4 hover:bg-amber-50/50 transition-colors text-left"
              >
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-slate-900 text-sm">{group.category}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{group.description}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs font-medium text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full tabular-nums">{group.rules.length}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                </div>
              </button>
              {isExpanded && (
                <div className="px-4 pb-4 pt-1 border-t border-amber-100">
                  <div className="space-y-3 mt-3">
                    {group.rules.map((rule, ri) => (
                      <div key={ri} className="pl-3 border-l-2 border-amber-200">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded shrink-0">{rule.ruleNumber}</span>
                          <p className="text-slate-900 text-sm font-semibold">{rule.title}</p>
                        </div>
                        <p className="text-slate-600 text-sm mt-1">{rule.description}</p>
                        <div className="mt-1.5 space-y-1">
                          <div className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                            <p className="text-emerald-800 text-xs">{rule.correctExample}</p>
                          </div>
                          {rule.incorrectExample !== '—' && rule.incorrectExample !== '— (context-dependent)' && (
                            <div className="flex items-start gap-1.5">
                              <X className="w-3.5 h-3.5 text-rose-600 mt-0.5 shrink-0" />
                              <p className="text-rose-800 text-xs line-through">{rule.incorrectExample}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
}

// ---- Quant Subtopics Block ----
interface QuantSubtopic {
  id: string;
  title: string;
  summary: string;
  explanation: string;
  examples: Array<{ problem: string; solution: string; answer?: string }>;
  shortcuts: string[];
  traps: string[];
}

interface QuantFormulaEntry {
  name: string;
  expression: string;
  note?: string;
}

function SubtopicsBlock({ subtopics, expandedGroups, onToggleGroup }: {
  subtopics: QuantSubtopic[];
  expandedGroups: Set<number>;
  onToggleGroup: (index: number) => void;
}) {
  return (
    <Card className="p-5">
      <div className="flex items-center gap-2 mb-4">
        <GraduationCap className="w-5 h-5 text-amber-600" />
        <h3 className="font-semibold text-slate-900 text-sm uppercase tracking-wide">Subtopics</h3>
      </div>
      <div className="space-y-3">
        {subtopics.map((sub, si) => {
          const isExpanded = expandedGroups.has(si);
          return (
            <div key={si} className="rounded-xl border border-amber-200 overflow-hidden">
              <button
                onClick={() => onToggleGroup(si)}
                className="w-full flex items-center justify-between gap-3 p-4 hover:bg-amber-50/50 transition-colors text-left"
              >
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-slate-900 text-sm">{sub.title}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{sub.summary}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs font-medium text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full tabular-nums">{sub.examples.length}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                </div>
              </button>
              {isExpanded && (
                <div className="px-4 pb-4 pt-1 border-t border-amber-100">
                  <div className="space-y-3 mt-3">
                    <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-line">{sub.explanation}</p>
                    {sub.examples.length > 0 && (
                      <div className="space-y-2">
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Worked Examples</p>
                        {sub.examples.map((ex, ei) => (
                          <div key={ei} className="pl-3 border-l-2 border-emerald-300">
                            <p className="text-slate-800 text-sm font-medium"><MathText text={ex.problem} /></p>
                            <p className="text-slate-600 text-sm mt-0.5"><MathText text={ex.solution} /></p>
                            {ex.answer && <p className="text-emerald-700 text-sm font-semibold mt-0.5">Answer: <MathText text={ex.answer} /></p>}
                          </div>
                        ))}
                      </div>
                    )}
                    {sub.shortcuts.length > 0 && (
                      <div className="rounded-lg bg-sky-50/60 p-3">
                        <div className="flex items-center gap-1.5 mb-1.5"><Lightbulb className="w-3.5 h-3.5 text-sky-600" /><span className="text-xs font-semibold text-sky-700 uppercase tracking-wide">Shortcuts</span></div>
                        <ul className="space-y-1">{sub.shortcuts.map((s, si2) => <li key={si2} className="flex items-start gap-2 text-slate-700 text-sm leading-relaxed"><span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" /><MathText text={s} /></li>)}</ul>
                      </div>
                    )}
                    {sub.traps.length > 0 && (
                      <div className="rounded-lg bg-rose-50/60 p-3">
                        <div className="flex items-center gap-1.5 mb-1.5"><AlertCircle className="w-3.5 h-3.5 text-rose-600" /><span className="text-xs font-semibold text-rose-700 uppercase tracking-wide">Traps</span></div>
                        <ul className="space-y-1">{sub.traps.map((t, ti) => <li key={ti} className="flex items-start gap-2 text-slate-800 text-sm leading-relaxed"><span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" /><MathText text={t} /></li>)}</ul>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
}

// ---- Quant Formulas Block ----
function QuantFormulasBlock({ formulas }: { formulas: QuantFormulaEntry[] }) {
  return (
    <Card className="p-5 bg-slate-900">
      <div className="flex items-center gap-2 mb-3"><Calculator className="w-4 h-4 text-sky-400" /><h3 className="font-semibold text-white text-sm uppercase tracking-wide">Key Formulas</h3></div>
      <div className="space-y-3">
        {formulas.map((f, fi) => (
          <div key={fi} className="py-2">
            <p className="text-sky-300 text-sm font-medium mb-1">{f.name}</p>
            <p className="text-sky-200 text-lg font-mono text-center py-2 bg-slate-800 rounded-xl"><MathText text={`$${f.expression}$`} /></p>
            {f.note && <p className="text-slate-400 text-xs mt-1">{f.note}</p>}
          </div>
        ))}
      </div>
    </Card>
  );
}
