import { useState, useMemo, useEffect } from 'react';
import { ChevronRight, GraduationCap, AlertTriangle } from 'lucide-react';
import { MathText } from '@/components/MathText';
import { useRouter } from '@/router';
import { useSubjectData } from '@/hooks/useSubjectData';
import { useSubjectSelection } from '@/contexts/subject-selection-context';
import { SubjectSelector, type SubjectFilterValue } from '@/components/subject/SubjectSelector';
import { getFormulasForSubject, refreshFormulaVault } from '@/data/formulas';
import { subjectMap } from '@/data/subjects';
import { PageContainer, Card, EmptyState, LoadingSpinner, Button } from '@/components/ui';
import type { SubjectId } from '@/types';

/** Formula-heavy subjects load first so the vault is usable before every bank finishes. */
const FORMULA_PRIORITY: SubjectId[] = [
  'physics',
  'maths',
  'meteo-climatology',
  'earth-science',
  'env-studies',
];

export function FormulaVaultScreen() {
  const { navigate } = useRouter();
  const sd = useSubjectData();
  const { getActiveSubject, setActiveSubjectForScreen } = useSubjectSelection();
  const [expanded, setExpanded] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [vaultTick, setVaultTick] = useState(0);

  const activeSubject = getActiveSubject('formulas');
  const isAllSubjects = activeSubject === 'all';
  const subjectTitle = isAllSubjects ? 'All Subjects' : (subjectMap[activeSubject as string]?.title ?? 'Subject');

  const handleSubjectChange = (value: SubjectFilterValue) => {
    setActiveSubjectForScreen('formulas', value);
  };

  const { ensureTopicsLoaded } = sd;
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setLoadError(false);

    async function load() {
      try {
        if (isAllSubjects) {
          // Show useful content ASAP; one slow subject must not brick the whole vault
          await Promise.allSettled(FORMULA_PRIORITY.map((id) => ensureTopicsLoaded(id)));
          if (cancelled) return;
          setVaultTick((n) => n + 1);
          setLoading(false);
          await ensureTopicsLoaded('all');
          if (cancelled) return;
          setVaultTick((n) => n + 1);
        } else {
          await ensureTopicsLoaded(activeSubject as SubjectId);
          if (cancelled) return;
          setVaultTick((n) => n + 1);
          setLoading(false);
        }
      } catch {
        if (!cancelled) {
          setLoading(false);
          setLoadError(true);
        }
      }
    }

    void load();
    return () => { cancelled = true; };
  }, [isAllSubjects, activeSubject, ensureTopicsLoaded]);

  const scopedFormulas = useMemo(() => {
    if (isAllSubjects) return refreshFormulaVault();
    return getFormulasForSubject(activeSubject as SubjectId);
  }, [isAllSubjects, activeSubject, vaultTick]);

  if (loadError && scopedFormulas.length === 0) return (
    <PageContainer>
      <Card className="p-8">
        <EmptyState title="Failed to load" message="Something went wrong while loading formulas. Please try again." icon={<AlertTriangle className="w-12 h-12" />} />
        <div className="flex justify-center mt-4">
          <Button onClick={() => { setLoadError(false); setLoading(true); setVaultTick((n) => n + 1); }}>Retry</Button>
        </div>
      </Card>
    </PageContainer>
  );

  if (loading && scopedFormulas.length === 0) {
    return <PageContainer><LoadingSpinner label="Loading formulas…" /></PageContainer>;
  }

  const categories = [...new Set(scopedFormulas.map((f) => f.category))];

  return (
    <PageContainer>
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Formulas</h1>
        <p className="text-slate-500 mt-1">
          {isAllSubjects ? 'All formulas across all subjects' : `All formulas in ${subjectTitle}`}, grouped by category{loading ? ' · loading more…' : ''}
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
                        onClick={() => { const k = `${f.topicId}:${f.name}`; setExpanded(expanded === k ? null : k); }}
                        className="w-full text-left"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="min-w-0">
                            <p className="font-semibold text-slate-900 text-sm">{f.name}</p>
                            <div className="text-sky-600 text-sm mt-1 overflow-x-auto">
                              <MathText text={`$$${f.expression}$$`} />
                            </div>
                            <p className="text-slate-500 text-xs mt-1">From: {f.topicTitle}</p>
                          </div>
                          <ChevronRight className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${expanded === `${f.topicId}:${f.name}` ? 'rotate-90' : ''}`} />
                        </div>
                      </button>
                      {expanded === `${f.topicId}:${f.name}` && (
                        <div className="mt-4 pt-4 border-t border-slate-100">
                          <div className="space-y-1.5 mb-4">
                            {f.variables.map((v, i) => (
                              <div key={i} className="flex items-baseline gap-3 text-sm">
                                <span className="text-sky-600 font-bold shrink-0">
                                  <MathText text={`$${v.symbol}$`} />
                                </span>
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
