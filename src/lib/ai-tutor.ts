import { env } from '@/lib/runtime-env';

const SYSTEM_PROMPT = `You are an expert tutor for Pakistani civil service exam preparation (FPSC and HAT exams).
Your role is to help students understand study topics deeply.

Guidelines:
- Explain concepts in simple, clear language
- Use examples relevant to Pakistan where possible
- When a student is confused, break the concept into smaller steps
- If asked for practice questions, generate 2-3 MCQs with options and indicate the correct answer
- Keep responses concise and focused (under 300 words unless the student asks for detail)
- If the student's question is off-topic from the study material, gently redirect
- Use plain text formatting — no markdown headers, just clear paragraphs and bullet points
- Be encouraging and patient`;

function buildPreamble(topicTitle?: string, topicContext?: string): string {
  return topicTitle
    ? `${SYSTEM_PROMPT}\n\nThe student is currently studying: ${topicTitle}${topicContext ? `\nTopic context: ${topicContext}` : ''}`
    : SYSTEM_PROMPT;
}

export interface TutorMessage {
  role: 'user' | 'assistant';
  content: string;
}

export type ProviderKey = 'gemini' | 'openrouter';

interface ProviderConfig {
  name: string;
  available: boolean;
}

const PROVIDER_ORDER: ProviderKey[] = ['gemini', 'openrouter'];

export function getAvailableProviders(): Record<ProviderKey, string> {
  const providers: Partial<Record<ProviderKey, string>> = {};
  if (env.GEMINI_API_KEY) providers.gemini = 'Gemini';
  if (env.OPENROUTER_API_KEY) providers.openrouter = 'GPT-4o mini';
  return providers as Record<ProviderKey, string>;
}

export function isTutorAvailable(): boolean {
  return Boolean(env.GEMINI_API_KEY || env.OPENROUTER_API_KEY);
}

function resolveProvider(requested?: string): ProviderKey {
  if (requested === 'openrouter' && env.OPENROUTER_API_KEY) return 'openrouter';
  if (requested === 'gemini' && env.GEMINI_API_KEY) return 'gemini';
  return env.GEMINI_API_KEY ? 'gemini' : 'openrouter';
}

async function callGemini(messages: TutorMessage[], preamble: string): Promise<string> {
  const apiKey = env.GEMINI_API_KEY;
  const contents = messages.map((m) => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }],
  }));

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: preamble }] },
        contents,
        generationConfig: { temperature: 0.7, maxOutputTokens: 1024, topP: 0.95 },
      }),
    },
  );

  if (!res.ok) throw new Error('AI request failed. Please try again.');
  const data = await res.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error('No response from AI. Please try again.');
  return text.trim();
}

async function callOpenRouter(messages: TutorMessage[], preamble: string): Promise<string> {
  const apiKey = env.OPENROUTER_API_KEY;
  const chatMessages = [
    { role: 'system', content: preamble },
    ...messages.map((m) => ({ role: m.role, content: m.content })),
  ];

  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
      'HTTP-Referer': window.location.origin,
      'X-Title': 'ExamPrep AI Tutor',
    },
    body: JSON.stringify({
      model: 'openai/gpt-4o-mini',
      messages: chatMessages,
      temperature: 0.7,
      max_tokens: 1024,
      top_p: 0.95,
    }),
  });

  if (!res.ok) throw new Error('AI request failed. Please try again.');
  const data = await res.json();
  const text = data?.choices?.[0]?.message?.content;
  if (!text) throw new Error('No response from AI. Please try again.');
  return text.trim();
}

export async function askTutor(
  messages: TutorMessage[],
  topicTitle?: string,
  topicContext?: string,
  provider?: string,
): Promise<{ reply: string; provider: ProviderKey }> {
  const providers = getAvailableProviders();
  if (Object.keys(providers).length === 0) {
    throw new Error('AI service is not configured. Please add an API key.');
  }

  const providerKey = resolveProvider(provider);
  const preamble = buildPreamble(topicTitle, topicContext);

  const reply = providerKey === 'openrouter'
    ? await callOpenRouter(messages, preamble)
    : await callGemini(messages, preamble);

  return { reply, provider: providerKey };
}
