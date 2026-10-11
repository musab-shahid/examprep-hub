import { env } from '@/lib/runtime-env';
import type { Topic, Formula, WorkedExample, MethodChooser, MethodChooserStep, LimitCase, ComparisonTable } from '@/types';

// TEMP RESTORE STUB - will be replaced with full file
export function buildTopicContext(topic: Topic): string { return topic.title || ''; }
export function isTutorAvailable(): boolean { return false; }
export function getAvailableModels(): any[] { return []; }
export function getDefaultModelId(): string { return ''; }
export async function askTutor(): Promise<{ reply: string; modelLabel: string }> { throw new Error('Restoring...'); }
export type TutorMessage = { role: 'user' | 'assistant'; content: string };
export type ModelOption = { id: string; label: string; provider: string; model: string; badge?: string; free?: boolean };
