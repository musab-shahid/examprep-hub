import { useState, useMemo, useEffect } from 'react';
import { ChevronRight, GraduationCap, AlertTriangle } from 'lucide-react';
import { useRouter } from '@/router';
import { useSubjectData } from '@/hooks/useSubjectData';
import { useSubjectSelection } from '@/contexts/subject-selection-context';
import { SubjectSelector, type SubjectFilterValue } from '@/components/subject/SubjectSelector';
import { refreshFormulaVault } from '@/data/formulas';
import { subjectMap } from '@/data/subjects';
import { PageContainer, Card, EmptyState, LoadingSpinner, Button } from '@/components/ui';
import { ensureTopicsLoaded } from '@/data/lazy-data';
import type { SubjectId } from '@/types';

export function FormulaVaultScreen() {
  const { navigate } = useRouter();
  const sd = useSubjectData();
  const { getActiveSubject, setActiveSubjectForScreen } = useSubjectSelection();
  const [expanded, setExpanded] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  const activeSubject = getActiveSubject('formulas');
  const isAllSubjects = activeSubject === 'all';
  const subjectTitle = isAllSubjects ? 'All Subjects' : (subjectMap[activeSubject as string]?.title ?? 'Subject');

  const handleSubjectChange = (value: SubjectFilterValue) => {
    setActiveSubjectForScreen('formulas', value);
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

  const scopedFormulas = useMemo(() => {
    if (loading) return [];
    if (isAllSubjects) return refreshFormulaVault();
    return sd.formulasFor(activeSubject as SubjectId);
  }, [isAllSubjects, activeSubject, sd, loading]);

  if (loadError) return (
    <PageContainer>
      <Card className="p-8">
        <EmptyState title="Failed to load" message="Something went wrong while loading formulas. Please try again." icon={<AlertTriangle className="w-12 h-12" />} />
        <div className="flex justify-center mt-4">
          <Button onClick={() => { setLoadError(false); setLoading(true); ensureTopicsLoaded(isAllSubjects ? 'all' : (activeSubject as SubjectId)).then(() => setLoading(false)).catch(() => { setLoading(false); setLoadError(true); }); }}>Retry</Button>
        </div>
      </Card>
    </PageContainer>
  );

  if (loading) return <PageContainer><LoadingSpinner label="Loading formulas…" /></PageContainer>;

  const categories = [...new Set(scopedFormulas.map((f) => f.category))];

  return (
    <PageContainer>
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Formulas</h1>
        <p className="text-slate-500 mt-1">
          {isAllSubjects ? 'All formulas across all subjects' : `All formulas in ${subjectTitle}`}, grouped by category
        </p>
      </div>

      <div className="mb-6">
        <SubjectSelector value={activeSubject} onChange={handleSubjectChange} showAllOption />
      </div>

      {scopedFormulas.length === 0 ? (
        <Card className="p-8">
          <EmptyState
            title={`No formulas for ${subjectTitle} yet`}
            message="This subject doesn't have any formulas yet. Formulas will appear here as topics with formula content are added."
            icon={<GraduationCap className="w-12 h-12" />}
          />
        </Card>
      ) : (
        <div className="space-y-6">
          {categories.map((cat) => {
            const formulas = scopedFormulas.filter((f) => f.category === cat);
            if (formulas.length === 0) return null;
            return (
              <div key={cat}>
                <h2 className="font-semibold text-slate-900 mb-3 text-lg">{cat}</h2>
                <div className="space-y-3">
                  {formulas.map((f) => (
                    <Card key={`${f.topicId}-${f.name}`} className="p-4">
                      <button
                        onClick={() => setExpanded(expanded === f.name ? null : f.name)}
                        className="w-full text-left"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="min-w-0">
                            <p className="font-semibold text-slate-900 text-sm">{f.name}</p>
                            <p className="text-sky-600 font-mono text-sm mt-1">{f.expression}</p>
                            <p className="text-slate-500 text-xs mt-1">From: {f.topicTitle}</p>
                          </div>
                          <ChevronRight className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${expanded === f.name ? 'rotate-90' : ''}`} />
                        </div>
                      </button>
                      {expanded === f.name && (
                        <div className="mt-4 pt-4 border-t border-slate-100">
                          <div className="space-y-1.5 mb-4">
                            {f.variables.map((v, i) => (
                              <div key={i} className="flex items-baseline gap-3 text-sm">
                                <span className="text-sky-600 font-mono font-bold w-8 shrink-0">{v.symbol}</span>
                                <span className="text-slate-600">= {v.meaning}</span>
                              </div>
                            ))}
                          </div>
                          <button
                            onClick={() => navigate({ screen: 'topic', topicId: f.topicId })}
                            className="text-sky-600 text-sm font-medium hover:text-sky-700"
                          >
                            Go to source topic →
                          </button>
                        </div>
                      )}
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </PageContainer>
  );
}
