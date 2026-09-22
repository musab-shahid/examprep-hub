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
  /** Coarse token name; prefer getTrackStyle for UI */
  color: string;
  /** Tailwind gradient classes — keep in sync with getTrackStyle(track).gradient */
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
    accent: 'from-sky-500 to-cyan-600', // matches getTrackStyle('fpsc').gradient
  },
  {
    id: 'hat',
    title: 'HAT Exam',
    shortTitle: 'HAT',
    description: 'Higher Education Aptitude Test — reasoning-based examination',
    icon: GraduationCap,
    color: 'indigo',
    accent: 'from-indigo-500 to-blue-600', // matches getTrackStyle('hat').gradient
  },
];

export const examTrackMap: Record<ExamTrack, ExamTrackMeta> = Object.fromEntries(
  examTracks.map((t) => [t.id, t])
) as Record<ExamTrack, ExamTrackMeta>;

export interface SubjectWithMeta extends Subject {
  /**
   * @deprecated Not used for UI. Visual colors live in subject-colors.ts (getSubjectStyle).
   * Kept only as a coarse human label; do not style from this string.
   */
  color: string;
  icon?: string;
  lucideIcon?: LucideIcon;
  examScope?: ('bs17' | 'bs16')[];
  track: ExamTrack;
}

export const subjects: SubjectWithMeta[] = [
  { id: 'maths', title: 'Mathematics', color: 'orange', lucideIcon: Calculator, track: 'fpsc' },
  { id: 'physics', title: 'Physics', color: 'blue', lucideIcon: Atom, track: 'fpsc' },
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
