import type { Subject } from '@/types';
import { Calculator, Atom, Globe, Cloud, Leaf, BarChart3, BookOpen, GraduationCap, FileText, MessageSquareText, Puzzle, Sigma } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type ExamTrack = 'fpsc' | 'hat';

export interface ExamTrackMeta {
  id: ExamTrack;
  title: string;
  shortTitle: string;
  description: string;
  icon: LucideIcon;
  color: string;
  accent: string;
}

export const examTracks: ExamTrackMeta[] = [
  {
    id: 'fpsc',
    title: 'FPSC Exam',
    shortTitle: 'FPSC',
    description: 'Federal Public Service Commission — subject-based examination',
    icon: FileText,
    color: 'sky',
    accent: 'from-sky-500 to-blue-600',
  },
  {
    id: 'hat',
    title: 'HAT Exam',
    shortTitle: 'HAT',
    description: 'Higher Education Aptitude Test — reasoning-based examination',
    icon: GraduationCap,
    color: 'indigo',
    accent: 'from-indigo-500 to-violet-600',
  },
];

export const examTrackMap: Record<ExamTrack, ExamTrackMeta> = Object.fromEntries(
  examTracks.map((t) => [t.id, t])
) as Record<ExamTrack, ExamTrackMeta>;

export interface SubjectWithMeta extends Subject {
  color: string;
  icon?: string;
  lucideIcon?: LucideIcon;
  examScope?: ('bs17' | 'bs16')[];
  track: ExamTrack;
}

export const subjects: SubjectWithMeta[] = [
  { id: 'maths', title: 'Mathematics', color: 'orange', lucideIcon: Calculator, track: 'fpsc' },
  { id: 'physics', title: 'Physics', color: 'purple', lucideIcon: Atom, track: 'fpsc' },
  { id: 'earth-science', title: 'Earth Sciences', color: 'stone', lucideIcon: Globe, track: 'fpsc' },
  { id: 'meteo-climatology', title: 'Meteorology & Climatology', color: 'sky', lucideIcon: Cloud, track: 'fpsc' },
  { id: 'env-studies', title: 'Environmental Studies', color: 'green', lucideIcon: Leaf, track: 'fpsc' },
  { id: 'research-analysis', title: 'Research & Analysis', color: 'red', lucideIcon: BarChart3, track: 'fpsc' },
  { id: 'english', title: 'English', color: 'pink', lucideIcon: BookOpen, examScope: ['bs17', 'bs16'], track: 'fpsc' },
  { id: 'hat-verbal', title: 'Verbal Reasoning', color: 'indigo', lucideIcon: MessageSquareText, examScope: ['bs17'], track: 'hat' },
  { id: 'hat-analytical', title: 'Analytical Reasoning', color: 'emerald', lucideIcon: Puzzle, examScope: ['bs17'], track: 'hat' },
  { id: 'hat-quantitative', title: 'Quantitative Reasoning', color: 'amber', lucideIcon: Sigma, examScope: ['bs17'], track: 'hat' },
];

export const subjectMap: Record<string, SubjectWithMeta> = Object.fromEntries(
  subjects.map((s) => [s.id, s])
);

export function subjectsByTrack(track: ExamTrack): SubjectWithMeta[] {
  return subjects.filter((s) => s.track === track);
}

export const subjectColorClasses: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  sky: { bg: 'bg-sky-500', text: 'text-sky-600', border: 'border-sky-500', dot: 'bg-sky-500' },
  stone: { bg: 'bg-stone-500', text: 'text-stone-600', border: 'border-stone-500', dot: 'bg-stone-500' },
  purple: { bg: 'bg-purple-500', text: 'text-purple-600', border: 'border-purple-500', dot: 'bg-purple-500' },
  orange: { bg: 'bg-orange-500', text: 'text-orange-600', border: 'border-orange-500', dot: 'bg-orange-500' },
  green: { bg: 'bg-green-500', text: 'text-green-600', border: 'border-green-500', dot: 'bg-green-500' },
  slate: { bg: 'bg-slate-500', text: 'text-slate-600', border: 'border-slate-500', dot: 'bg-slate-500' },
  red: { bg: 'bg-red-500', text: 'text-red-600', border: 'border-red-500', dot: 'bg-red-500' },
  pink: { bg: 'bg-pink-500', text: 'text-pink-600', border: 'border-pink-500', dot: 'bg-pink-500' },
  indigo: { bg: 'bg-indigo-500', text: 'text-indigo-600', border: 'border-indigo-500', dot: 'bg-indigo-500' },
  emerald: { bg: 'bg-emerald-500', text: 'text-emerald-600', border: 'border-emerald-500', dot: 'bg-emerald-500' },
  amber: { bg: 'bg-amber-500', text: 'text-amber-600', border: 'border-amber-500', dot: 'bg-amber-500' },
};

export function getSubjectColorClasses(color: string) {
  return subjectColorClasses[color] ?? subjectColorClasses.slate;
}
