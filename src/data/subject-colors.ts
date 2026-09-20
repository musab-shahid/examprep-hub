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

/**
 * Refined 10-subject + 2-track palette
 * Goal: strong thematic association, clear visual distinction, harmonious together.
 *
 * FPSC subjects (7)
 * 1. Meteo      → Sky / Cyan     (atmosphere)
 * 2. Physics    → Violet         (energy / quantum)
 * 3. Maths      → Amber          (classic academic orange-gold)
 * 4. Earth      → Teal           (geology / terrain — was dull stone)
 * 5. Env        → Emerald        (nature)
 * 6. Research   → Rose           (analysis / insight — softer than pure red)
 * 7. English    → Fuchsia/Pink   (language / expression)
 *
 * HAT modules (3)
 * 8. Verbal       → Indigo
 * 9. Analytical   → Emerald/Teal
 * 10. Quantitative → Amber/Orange
 *
 * Tracks (2)
 * - FPSC hero → deep sky navy
 * - HAT  hero → deep indigo violet
 */

// ── Subject styles (single source of truth) ──

export const subjectStyles: Record<string, SubjectStyle> = {
  'meteo-climatology': {
    dot: '#0ea5e9',
    dotBg: 'bg-sky-500',
    bar: 'bg-sky-500',
    tint: 'bg-sky-50',
    text: 'text-sky-600',
    borderLeft: 'border-l-sky-500',
    bg: 'bg-sky-500',
    border: 'border-sky-200',
    borderActive: 'border-sky-500',
    hoverBorder: 'hover:border-sky-400',
    glow: 'shadow-sky-500/20',
    gradient: 'from-sky-500 to-cyan-600',
    lightGradient: 'from-sky-50 to-cyan-50',
  },
  physics: {
    dot: '#8b5cf6',
    dotBg: 'bg-violet-500',
    bar: 'bg-violet-500',
    tint: 'bg-violet-50',
    text: 'text-violet-600',
    borderLeft: 'border-l-violet-500',
    bg: 'bg-violet-500',
    border: 'border-violet-200',
    borderActive: 'border-violet-500',
    hoverBorder: 'hover:border-violet-400',
    glow: 'shadow-violet-500/20',
    gradient: 'from-violet-500 to-purple-600',
    lightGradient: 'from-violet-50 to-purple-50',
  },
  maths: {
    dot: '#f59e0b',
    dotBg: 'bg-amber-500',
    bar: 'bg-amber-500',
    tint: 'bg-amber-50',
    text: 'text-amber-600',
    borderLeft: 'border-l-amber-500',
    bg: 'bg-amber-500',
    border: 'border-amber-200',
    borderActive: 'border-amber-500',
    hoverBorder: 'hover:border-amber-400',
    glow: 'shadow-amber-500/20',
    gradient: 'from-amber-500 to-orange-600',
    lightGradient: 'from-amber-50 to-orange-50',
  },
  'earth-science': {
    // Was dull stone — now a richer teal that still feels “earthy”
    dot: '#0d9488',
    dotBg: 'bg-teal-600',
    bar: 'bg-teal-600',
    tint: 'bg-teal-50',
    text: 'text-teal-700',
    borderLeft: 'border-l-teal-600',
    bg: 'bg-teal-600',
    border: 'border-teal-200',
    borderActive: 'border-teal-600',
    hoverBorder: 'hover:border-teal-400',
    glow: 'shadow-teal-600/20',
    gradient: 'from-teal-500 to-cyan-700',
    lightGradient: 'from-teal-50 to-cyan-50',
  },
  'env-studies': {
    dot: '#10b981',
    dotBg: 'bg-emerald-500',
    bar: 'bg-emerald-500',
    tint: 'bg-emerald-50',
    text: 'text-emerald-600',
    borderLeft: 'border-l-emerald-500',
    bg: 'bg-emerald-500',
    border: 'border-emerald-200',
    borderActive: 'border-emerald-500',
    hoverBorder: 'hover:border-emerald-400',
    glow: 'shadow-emerald-500/20',
    gradient: 'from-emerald-500 to-green-600',
    lightGradient: 'from-emerald-50 to-green-50',
  },
  'research-analysis': {
    // Softened from pure red → rose (more academic, less alarm)
    dot: '#f43f5e',
    dotBg: 'bg-rose-500',
    bar: 'bg-rose-500',
    tint: 'bg-rose-50',
    text: 'text-rose-600',
    borderLeft: 'border-l-rose-500',
    bg: 'bg-rose-500',
    border: 'border-rose-200',
    borderActive: 'border-rose-500',
    hoverBorder: 'hover:border-rose-400',
    glow: 'shadow-rose-500/20',
    gradient: 'from-rose-500 to-pink-600',
    lightGradient: 'from-rose-50 to-pink-50',
  },
  english: {
    dot: '#d946ef',
    dotBg: 'bg-fuchsia-500',
    bar: 'bg-fuchsia-500',
    tint: 'bg-fuchsia-50',
    text: 'text-fuchsia-600',
    borderLeft: 'border-l-fuchsia-500',
    bg: 'bg-fuchsia-500',
    border: 'border-fuchsia-200',
    borderActive: 'border-fuchsia-500',
    hoverBorder: 'hover:border-fuchsia-400',
    glow: 'shadow-fuchsia-500/20',
    gradient: 'from-fuchsia-500 to-pink-600',
    lightGradient: 'from-fuchsia-50 to-pink-50',
  },
  // HAT aggregate (used when track-level color is needed)
  hat: {
    dot: '#6366f1',
    dotBg: 'bg-indigo-500',
    bar: 'bg-indigo-500',
    tint: 'bg-indigo-50',
    text: 'text-indigo-600',
    borderLeft: 'border-l-indigo-500',
    bg: 'bg-indigo-500',
    border: 'border-indigo-200',
    borderActive: 'border-indigo-500',
    hoverBorder: 'hover:border-indigo-400',
    glow: 'shadow-indigo-500/20',
    gradient: 'from-indigo-500 to-violet-600',
    lightGradient: 'from-indigo-50 to-violet-50',
  },
  'hat-verbal': {
    dot: '#6366f1',
    dotBg: 'bg-indigo-500',
    bar: 'bg-indigo-500',
    tint: 'bg-indigo-50',
    text: 'text-indigo-600',
    borderLeft: 'border-l-indigo-500',
    bg: 'bg-indigo-500',
    border: 'border-indigo-200',
    borderActive: 'border-indigo-500',
    hoverBorder: 'hover:border-indigo-400',
    glow: 'shadow-indigo-500/20',
    gradient: 'from-indigo-500 to-violet-600',
    lightGradient: 'from-indigo-50 to-violet-50',
  },
  'hat-analytical': {
    dot: '#14b8a6',
    dotBg: 'bg-teal-500',
    bar: 'bg-teal-500',
    tint: 'bg-teal-50',
    text: 'text-teal-600',
    borderLeft: 'border-l-teal-500',
    bg: 'bg-teal-500',
    border: 'border-teal-200',
    borderActive: 'border-teal-500',
    hoverBorder: 'hover:border-teal-400',
    glow: 'shadow-teal-500/20',
    gradient: 'from-teal-500 to-emerald-600',
    lightGradient: 'from-teal-50 to-emerald-50',
  },
  'hat-quantitative': {
    dot: '#f59e0b',
    dotBg: 'bg-amber-500',
    bar: 'bg-amber-500',
    tint: 'bg-amber-50',
    text: 'text-amber-600',
    borderLeft: 'border-l-amber-500',
    bg: 'bg-amber-500',
    border: 'border-amber-200',
    borderActive: 'border-amber-500',
    hoverBorder: 'hover:border-amber-400',
    glow: 'shadow-amber-500/20',
    gradient: 'from-amber-500 to-orange-600',
    lightGradient: 'from-amber-50 to-orange-50',
  },
};

export const allSubjectsStyle: SubjectStyle = {
  dot: '#94a3b8',
  dotBg: 'bg-slate-400',
  bar: 'bg-slate-400',
  tint: 'bg-slate-50',
  text: 'text-slate-600',
  borderLeft: 'border-l-slate-400',
  bg: 'bg-slate-400',
  border: 'border-slate-200',
  borderActive: 'border-slate-400',
  hoverBorder: 'hover:border-slate-400',
  glow: 'shadow-slate-500/20',
  gradient: 'from-slate-500 to-slate-600',
  lightGradient: 'from-slate-50 to-slate-100',
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

// ── Track styles (hero cards + track chrome) ──

export const trackStyles: Record<string, TrackStyle> = {
  fpsc: {
    label: 'FPSC Subjects',
    accent: 'text-sky-600',
    gradient: 'from-sky-500 to-blue-600',
    // Deep navy-sky hero
    heroGradient: 'from-slate-900 via-sky-950 to-slate-900',
    heroOrb: 'bg-sky-500/25',
    heroOrbSecondary: 'bg-cyan-400/10',
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
    // Deep indigo-violet hero
    heroGradient: 'from-slate-900 via-indigo-950 to-slate-900',
    heroOrb: 'bg-indigo-500/25',
    heroOrbSecondary: 'bg-violet-400/10',
    iconGradient: 'from-indigo-400 to-violet-500',
    iconGlow: 'shadow-indigo-500/30',
    accentText: 'text-indigo-200',
    borderTint: 'border-indigo-100',
    progressGradient: 'from-indigo-500 to-violet-500',
    progressIcon: 'text-indigo-500',
    sparklesIcon: 'text-indigo-500',
    mockOrb: 'bg-indigo-500/15',
    mockIconGradient: 'from-indigo-400 to-violet-500',
    mockIconGlow: 'shadow-indigo-500/20',
    statIconColors: ['text-indigo-400', 'text-teal-400', 'text-amber-400', 'text-rose-400'],
  },
};

export function getTrackStyle(track: string): TrackStyle {
  return trackStyles[track] ?? trackStyles.fpsc;
}

// ── HAT section helper ──

export function getHatSectionStyle(sectionId: string): SubjectStyle {
  return getSubjectStyle(`hat-${sectionId}`);
}
