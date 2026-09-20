import type { SubjectId } from '@/types';

// ── Types ──

export interface SubjectColor {
  dot: string;
  bar: string;
  tint: string;
  text: string;
  borderLeft: string;
}

export interface SubjectStyle extends SubjectColor {
  bg: string;
  border: string;
  borderActive: string;
  hoverBorder: string;
  glow: string;
  gradient: string;
  lightGradient: string;
  dotBg: string;
}

export interface TrackStyle {
  label: string;
  accent: string;
  gradient: string;
  heroGradient: string;
  heroOrb: string;
  heroOrbSecondary: string;
  iconGradient: string;
  iconGlow: string;
  accentText: string;
  borderTint: string;
  progressGradient: string;
  progressIcon: string;
  sparklesIcon: string;
  mockOrb: string;
  mockIconGradient: string;
  mockIconGlow: string;
  statIconColors: [string, string, string, string];
}

// ── Subject styles (single source of truth) ──

export const subjectStyles: Record<string, SubjectStyle> = {
  'meteo-climatology': {
    dot: '#0ea5e9', dotBg: 'bg-sky-500',
    bar: 'bg-sky-500', tint: 'bg-sky-50', text: 'text-sky-600', borderLeft: 'border-l-sky-500',
    bg: 'bg-sky-500', border: 'border-sky-200', borderActive: 'border-sky-500', hoverBorder: 'hover:border-sky-400',
    glow: 'shadow-sky-500/20',
    gradient: 'from-sky-500 to-cyan-600', lightGradient: 'from-sky-50 to-cyan-50',
  },
  physics: {
    dot: '#a855f7', dotBg: 'bg-purple-500',
    bar: 'bg-purple-500', tint: 'bg-purple-50', text: 'text-purple-600', borderLeft: 'border-l-purple-500',
    bg: 'bg-purple-500', border: 'border-purple-200', borderActive: 'border-purple-500', hoverBorder: 'hover:border-purple-400',
    glow: 'shadow-purple-500/20',
    gradient: 'from-purple-500 to-fuchsia-600', lightGradient: 'from-purple-50 to-fuchsia-50',
  },
  maths: {
    dot: '#f97316', dotBg: 'bg-orange-500',
    bar: 'bg-orange-500', tint: 'bg-orange-50', text: 'text-orange-600', borderLeft: 'border-l-orange-500',
    bg: 'bg-orange-500', border: 'border-orange-200', borderActive: 'border-orange-500', hoverBorder: 'hover:border-orange-400',
    glow: 'shadow-orange-500/20',
    gradient: 'from-orange-500 to-red-600', lightGradient: 'from-orange-50 to-red-50',
  },
  'earth-science': {
    dot: '#78716c', dotBg: 'bg-stone-500',
    bar: 'bg-stone-500', tint: 'bg-stone-50', text: 'text-stone-600', borderLeft: 'border-l-stone-500',
    bg: 'bg-stone-500', border: 'border-stone-200', borderActive: 'border-stone-500', hoverBorder: 'hover:border-stone-400',
    glow: 'shadow-stone-500/20',
    gradient: 'from-stone-500 to-amber-700', lightGradient: 'from-stone-50 to-amber-50',
  },
  'env-studies': {
    dot: '#22c55e', dotBg: 'bg-green-500',
    bar: 'bg-green-500', tint: 'bg-green-50', text: 'text-green-600', borderLeft: 'border-l-green-500',
    bg: 'bg-green-500', border: 'border-green-200', borderActive: 'border-green-500', hoverBorder: 'hover:border-green-400',
    glow: 'shadow-green-500/20',
    gradient: 'from-green-500 to-emerald-600', lightGradient: 'from-green-50 to-emerald-50',
  },
  'research-analysis': {
    dot: '#ef4444', dotBg: 'bg-red-500',
    bar: 'bg-red-500', tint: 'bg-red-50', text: 'text-red-600', borderLeft: 'border-l-red-500',
    bg: 'bg-red-500', border: 'border-red-200', borderActive: 'border-red-500', hoverBorder: 'hover:border-red-400',
    glow: 'shadow-red-500/20',
    gradient: 'from-red-500 to-rose-600', lightGradient: 'from-red-50 to-rose-50',
  },
  english: {
    dot: '#ec4899', dotBg: 'bg-pink-500',
    bar: 'bg-pink-500', tint: 'bg-pink-50', text: 'text-pink-600', borderLeft: 'border-l-pink-500',
    bg: 'bg-pink-500', border: 'border-pink-200', borderActive: 'border-pink-500', hoverBorder: 'hover:border-pink-400',
    glow: 'shadow-pink-500/20',
    gradient: 'from-pink-500 to-rose-600', lightGradient: 'from-pink-50 to-rose-50',
  },
  hat: {
    dot: '#6366f1', dotBg: 'bg-indigo-500',
    bar: 'bg-indigo-500', tint: 'bg-indigo-50', text: 'text-indigo-600', borderLeft: 'border-l-indigo-500',
    bg: 'bg-indigo-500', border: 'border-indigo-200', borderActive: 'border-indigo-500', hoverBorder: 'hover:border-indigo-400',
    glow: 'shadow-indigo-500/20',
    gradient: 'from-indigo-500 to-blue-600', lightGradient: 'from-indigo-50 to-blue-50',
  },
  'hat-verbal': {
    dot: '#6366f1', dotBg: 'bg-indigo-500',
    bar: 'bg-indigo-500', tint: 'bg-indigo-50', text: 'text-indigo-600', borderLeft: 'border-l-indigo-500',
    bg: 'bg-indigo-500', border: 'border-indigo-200', borderActive: 'border-indigo-500', hoverBorder: 'hover:border-indigo-400',
    glow: 'shadow-indigo-500/20',
    gradient: 'from-indigo-500 to-blue-600', lightGradient: 'from-indigo-50 to-blue-50',
  },
  'hat-analytical': {
    dot: '#10b981', dotBg: 'bg-emerald-500',
    bar: 'bg-emerald-500', tint: 'bg-emerald-50', text: 'text-emerald-600', borderLeft: 'border-l-emerald-500',
    bg: 'bg-emerald-500', border: 'border-emerald-200', borderActive: 'border-emerald-500', hoverBorder: 'hover:border-emerald-400',
    glow: 'shadow-emerald-500/20',
    gradient: 'from-emerald-500 to-teal-600', lightGradient: 'from-emerald-50 to-teal-50',
  },
  'hat-quantitative': {
    dot: '#f59e0b', dotBg: 'bg-amber-500',
    bar: 'bg-amber-500', tint: 'bg-amber-50', text: 'text-amber-600', borderLeft: 'border-l-amber-500',
    bg: 'bg-amber-500', border: 'border-amber-200', borderActive: 'border-amber-500', hoverBorder: 'hover:border-amber-400',
    glow: 'shadow-amber-500/20',
    gradient: 'from-amber-500 to-orange-600', lightGradient: 'from-amber-50 to-orange-50',
  },
};

export const allSubjectsStyle: SubjectStyle = {
  dot: '#94a3b8', dotBg: 'bg-slate-400',
  bar: 'bg-slate-400', tint: 'bg-slate-50', text: 'text-slate-600', borderLeft: 'border-l-slate-400',
  bg: 'bg-slate-400', border: 'border-slate-200', borderActive: 'border-slate-400', hoverBorder: 'hover:border-slate-400',
  glow: 'shadow-slate-500/20',
  gradient: 'from-slate-500 to-slate-600', lightGradient: 'from-slate-50 to-slate-100',
};

export function getSubjectStyle(id: string | SubjectId): SubjectStyle {
  return subjectStyles[id] ?? allSubjectsStyle;
}

// Backward-compat aliases
export const subjectColors: Record<string, SubjectColor> = subjectStyles as unknown as Record<string, SubjectColor>;
export const allSubjectsColor: SubjectColor = allSubjectsStyle;
export function getSubjectColor(id: string | SubjectId): SubjectColor {
  return getSubjectStyle(id);
}

// ── Track styles ──

export const trackStyles: Record<string, TrackStyle> = {
  fpsc: {
    label: 'FPSC Subjects',
    accent: 'text-sky-600',
    gradient: 'from-sky-500 to-blue-600',
    heroGradient: 'from-slate-900 via-sky-950 to-slate-900',
    heroOrb: 'bg-sky-500/20',
    heroOrbSecondary: 'bg-emerald-500/10',
    iconGradient: 'from-sky-400 to-blue-500',
    iconGlow: 'shadow-sky-500/30',
    accentText: 'text-sky-200',
    borderTint: 'border-sky-100',
    progressGradient: 'from-sky-500 to-blue-500',
    progressIcon: 'text-sky-500',
    sparklesIcon: 'text-sky-500',
    mockOrb: 'bg-sky-500/15',
    mockIconGradient: 'from-sky-400 to-blue-500',
    mockIconGlow: 'shadow-sky-500/20',
    statIconColors: ['text-sky-400', 'text-emerald-400', 'text-amber-400', 'text-rose-400'],
  },
  hat: {
    label: 'HAT Modules',
    accent: 'text-indigo-600',
    gradient: 'from-indigo-500 to-violet-600',
    heroGradient: 'from-slate-900 via-indigo-950 to-slate-900',
    heroOrb: 'bg-indigo-500/20',
    heroOrbSecondary: 'bg-emerald-500/10',
    iconGradient: 'from-indigo-400 to-blue-500',
    iconGlow: 'shadow-indigo-500/30',
    accentText: 'text-indigo-200',
    borderTint: 'border-indigo-100',
    progressGradient: 'from-indigo-500 to-blue-500',
    progressIcon: 'text-indigo-500',
    sparklesIcon: 'text-indigo-500',
    mockOrb: 'bg-indigo-500/15',
    mockIconGradient: 'from-sky-400 to-indigo-500',
    mockIconGlow: 'shadow-sky-500/20',
    statIconColors: ['text-indigo-400', 'text-emerald-400', 'text-amber-400', 'text-rose-400'],
  },
};

export function getTrackStyle(track: string): TrackStyle {
  return trackStyles[track] ?? trackStyles.fpsc;
}

// ── HAT section helper ──

export function getHatSectionStyle(sectionId: string): SubjectStyle {
  return getSubjectStyle(`hat-${sectionId}`);
}
