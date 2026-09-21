import { useState, useMemo, useEffect } from 'react';
import { Search, BookOpen, Calculator, ChevronRight, GraduationCap, AlertTriangle } from 'lucide-react';
import { useRouter } from '@/router';
import { useSubjectSelection } from '@/contexts/subject-selection-context';
import { SubjectSelector, type SubjectFilterValue } from '@/components/subject/SubjectSelector';
import { searchTopics } from '@/lib/search';
import { sectionMap } from '@/data/sections';
import { subjectMap } from '@/data/subjects';
import { topics } from '@/data/topics';
import { PageContainer, Card, EmptyState, LoadingSpinner, Button } from '@/components/ui';
import { ensureTopicsLoaded, getAllCachedTopics } from '@/data/lazy-data';
import type { SubjectId } from '@/types';

export function SearchScreen() {
  const { navigate } = useRouter();
  const { getActiveSubject, setActiveSubjectForScreen } = useSubjectSelection();
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  const activeSubject = getActiveSubject('search');
  const isAllSubjects = activeSubject === 'all';
  const subjectTitle = isAllSubjects ? 'All Subjects' : (subjectMap[activeSubject as string]?.title ?? 'Subject');

  const handleSubjectChange = (value: SubjectFilterValue) => {
    setActiveSubjectForScreen('search', value);
  };

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setLoadError(false);
    ensureTopicsLoaded(isAllSubjects ? 'all' : (activeSubject as SubjectId))
      .then(() => { if (!cancelled) setLoading(false); })
      .catch(() => { if (!cancelled) { setLoading(false); setLoadError(true); } });
    return () => { cancelled = true; };
  }, [isAllSubjects, activeSubject]);

  // Merge metadata (always) with cached full topics; include loading so scope refreshes after load
  const searchScope = useMemo(() => {
    const byId = new Map(topics.map((t) => [t.id, t]));
    for (const t of getAllCachedTopics()) {
      byId.set(t.id, t);
    }
    const merged = Array.from(byId.values());
    if (isAllSubjects) return merged;
    return merged.filter((t) => sectionMap[t.sectionId]?.subjectId === activeSubject);
    // loading in deps forces recompute after ensureTopicsLoaded completes
  }, [isAllSubjects, activeSubject, loading]);

  const hasContent = isAllSubjects || searchScope.length > 0 || topics.some(
    (t) => sectionMap[t.sectionId]?.subjectId === activeSubject,
  );

  const results = useMemo(() => {
    if (loading) return [];
    return searchTopics(query, searchScope);
  }, [query, searchScope, loading]);

  if (loadError) return (
    <PageContainer>
      <Card className="p-8">
        <EmptyState title="Failed to load" message="Something went wrong while loading topics. Please try again." icon={<AlertTriangle className="w-12 h-12" />} />
        <div className="flex justify-center mt-4">
          <Button onClick={() => { setLoadError(false); setLoading(true); ensureTopicsLoaded(isAllSubjects ? 'all' : (activeSubject as SubjectId)).then(() => setLoading(false)).catch(() => { setLoading(false); setLoadError(true); }); }}>Retry</Button>
        </div>
      </Card>
    </PageContainer>
  );

  if (loading) return <PageContainer><LoadingSpinner label="Loading topics…" /></PageContainer>;

  return (
    <PageContainer>
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Search</h1>
        <p className="text-slate-500 mt-1">Search across topic titles, definitions, key facts, and formulas</p>
      </div>

      <div className="mb-4">
        <SubjectSelector value={activeSubject} onChange={handleSubjectChange} showAllOption compact />
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
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search topics, facts, formulas..."
              className="w-full pl-12 pr-4 py-3.5 rounded-btn border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-colors duration-DEFAULT"
            />
          </div>

          {query.trim() === '' ? (
            <Card className="p-8">
              <EmptyState
                title="Start typing to search"
                message="Find topics by title, definition, key facts, or formula names."
                icon={<Search className="w-12 h-12" />}
              />
            </Card>
          ) : results.length === 0 ? (
            <Card className="p-8">
              <EmptyState
                title="No results found"
                message={`No matches for "${query}" in ${subjectTitle}. Try different keywords.`}
                icon={<Search className="w-12 h-12" />}
              />
            </Card>
          ) : (
            <div>
              <p className="text-slate-500 text-sm mb-3">{results.length} result{results.length !== 1 ? 's' : ''}</p>
              <div className="space-y-2">
                {results.map((result) => {
                  const section = sectionMap[result.sectionId];
                  return (
                    <Card key={`${result.type}-${result.topicId}`} className="p-0">
                      <button
                        onClick={() => navigate({ screen: 'topic', topicId: result.topicId })}
                        className="w-full flex items-start gap-3 p-4 hover:bg-slate-50 transition-colors text-left rounded-2xl"
                      >
                        <div className="w-9 h-9 rounded-btn bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                          {result.type === 'formula'
                            ? <Calculator className="w-4 h-4 text-slate-600" />
                            : <BookOpen className="w-4 h-4 text-slate-600" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-slate-900 text-sm">{result.title}</p>
                          <p className="text-slate-500 text-xs mt-0.5">Section {section?.id} — {section?.title}</p>
                          <p className="text-slate-600 text-sm mt-2 line-clamp-2 bg-slate-50 px-3 py-2 rounded-lg">
                            {result.match}
                          </p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                      </button>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}
        </>
      )}
    </PageContainer>
  );
}
