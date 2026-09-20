import type { SubjectId } from '@/types';

export interface SubjectColor {
  dot: string;
  bar: string;
  tint: string;
  text: string;
  borderLeft: string;
}

export const subjectColors: Record<string, SubjectColor> = {
  'meteo-climatology': { dot: '#0ea5e9', bar: 'bg-sky-500',     tint: 'bg-sky-50',     text: 'text-sky-600',     borderLeft: 'border-l-sky-500' },
  physics:     { dot: '#a855f7', bar: 'bg-purple-500', tint: 'bg-purple-50', text: 'text-purple-600', borderLeft: 'border-l-purple-500' },
  maths:       { dot: '#f97316', bar: 'bg-orange-500', tint: 'bg-orange-50', text: 'text-orange-600', borderLeft: 'border-l-orange-500' },
  'earth-science': { dot: '#78716c', bar: 'bg-stone-500',   tint: 'bg-stone-50',   text: 'text-stone-600',   borderLeft: 'border-l-stone-500' },
  'env-studies': { dot: '#22c55e', bar: 'bg-green-500', tint: 'bg-green-50', text: 'text-green-600', borderLeft: 'border-l-green-500' },
  'research-analysis': { dot: '#ef4444', bar: 'bg-red-500', tint: 'bg-red-50', text: 'text-red-600', borderLeft: 'border-l-red-500' },
  english: { dot: '#ec4899', bar: 'bg-pink-500', tint: 'bg-pink-50', text: 'text-pink-600', borderLeft: 'border-l-pink-500' },
  hat: { dot: '#6366f1', bar: 'bg-indigo-500', tint: 'bg-indigo-50', text: 'text-indigo-600', borderLeft: 'border-l-indigo-500' },
  'hat-verbal': { dot: '#6366f1', bar: 'bg-indigo-500', tint: 'bg-indigo-50', text: 'text-indigo-600', borderLeft: 'border-l-indigo-500' },
  'hat-analytical': { dot: '#10b981', bar: 'bg-emerald-500', tint: 'bg-emerald-50', text: 'text-emerald-600', borderLeft: 'border-l-emerald-500' },
  'hat-quantitative': { dot: '#f59e0b', bar: 'bg-amber-500', tint: 'bg-amber-50', text: 'text-amber-600', borderLeft: 'border-l-amber-500' },
};

export const allSubjectsColor: SubjectColor = {
  dot: '#94a3b8',
  bar: 'bg-slate-400',
  tint: 'bg-slate-50',
  text: 'text-slate-600',
  borderLeft: 'border-l-slate-400',
};

export function getSubjectColor(id: string | SubjectId): SubjectColor {
  return subjectColors[id] ?? allSubjectsColor;
}
