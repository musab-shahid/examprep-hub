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
- Format responses using markdown: use **bold** for key terms, bullet points for lists, short headings (## or ###) for sections, and \`inline code\` for formulas or technical terms
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

export type ProviderKey = 'gemini' | 'openrouter' | 'groq';

export interface ModelOption {
  id: string;
  label: string;
  provider: ProviderKey;
  model: string;
  badge?: string;
  free?: boolean;
}

export const MODEL_OPTIONS: ModelOption[] = [
  // Groq — fully free, fast inference, OpenAI-compatible API
  {
    id: 'groq-gpt-oss-120b',
    label: 'GPT-OSS 120B',
    provider: 'groq',
    model: 'openai/gpt-oss-120b',
    badge: 'Groq',
    free: true,
  },
  {
    id: 'groq-gpt-oss-20b',
    label: 'GPT-OSS 20B',
    provider: 'groq',
    model: 'openai/gpt-oss-20b',
    badge: 'Groq',
    free: true,
  },
  {
    id: 'groq-qwen-3.8-27b',
    label: 'Qwen 3.8 27B',
    provider: 'groq',
    model: 'qwen/qwen3.8-27b',
    badge: 'Groq',
    free: true,
  },
  // Gemini — direct Google API (free tier via AI Studio)
  {
    id: 'gemini',
    label: 'Gemini 3.8 Flash',
    provider: 'gemini',
    model: 'gemini-3.8-flash',
    badge: 'Google',
    free: true,
  },
  // OpenRouter — free models (verified active, $0 cost)
  {
    id: 'or-nemotron-ultra',
    label: 'Nemotron 3 Ultra',
    provider: 'openrouter',
    model: 'nvidia/nemotron-3-ultra-550b-a55b:free',
    badge: 'NVIDIA',
    free: true,
  },
  // OpenRouter — paid models, verified active IDs
  {
    id: 'gpt-4o-mini',
    label: 'GPT-4o mini',
    provider: 'openrouter',
    model: 'openai/gpt-4o-mini',
    badge: 'OpenAI',
  },
  {
    id: 'gpt-4o',
    label: 'GPT-4o',
    provider: 'openrouter',
    model: 'openai/gpt-4o',
    badge: 'OpenAI',
  },
  {
    id: 'claude-sonnet-4.5',
    label: 'Claude Sonnet 4.5',
    provider: 'openrouter',
    model: 'anthropic/claude-sonnet-4.5',
    badge: 'Anthropic',
  },
  {
    id: 'claude-haiku-4.5',
    label: 'Claude Haiku 4.5',
    provider: 'openrouter',
    model: 'anthropic/claude-haiku-4.5',
    badge: 'Anthropic',
  },
  {
    id: 'llama-3.3-70b',
    label: 'Llama 3.3 70B',
    provider: 'openrouter',
    model: 'meta-llama/llama-3.3-70b-instruct',
    badge: 'Meta',
  },
  {
    id: 'deepseek-chat',
    label: 'DeepSeek V3',
    provider: 'openrouter',
    model: 'deepseek/deepseek-chat',
    badge: 'DeepSeek',
  },
  {
    id: 'mistral-large',
    label: 'Mistral Large',
    provider: 'openrouter',
    model: 'mistralai/mistral-large',
    badge: 'Mistral',
  },
  {
    id: 'gemini-2.5-flash',
    label: 'Gemini 2.5 Flash',
    provider: 'openrouter',
    model: 'google/gemini-2.5-flash',
    badge: 'Google',
  },
  {
    id: 'gemini-2.5-pro',
    label: 'Gemini 2.5 Pro',
    provider: 'openrouter',
    model: 'google/gemini-2.5-pro',
    badge: 'Google',
  },
];

export function getAvailableModels(): ModelOption[] {
  const geminiOk = Boolean(env.GEMINI_API_KEY);
  const openrouterOk = Boolean(env.OPENROUTER_API_KEY);
  const groqOk = Boolean(env.GROQ_API_KEY);
  return MODEL_OPTIONS.filter((m) => {
    if (m.provider === 'gemini') return geminiOk;
    if (m.provider === 'groq') return groqOk;
    return openrouterOk;
  });
}

export function isTutorAvailable(): boolean {
  return Boolean(env.GEMINI_API_KEY || env.OPENROUTER_API_KEY || env.GROQ_API_KEY);
}

export function getDefaultModelId(): string {
  const available = getAvailableModels();
  return available[0]?.id ?? '';
}

async function callGemini(messages: TutorMessage[], preamble: string, model: string, signal?: AbortSignal): Promise<string> {
  const apiKey = env.GEMINI_API_KEY;
  const contents = messages.map((m) => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }],
  }));

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: preamble }] },
        contents,
        generationConfig: { temperature: 0.7, maxOutputTokens: 1024, topP: 0.95 },
      }),
      signal,
    },
  );

  if (!res.ok) {
    let detail = '';
    try { const errData = await res.json(); detail = errData?.error?.message || ''; } catch { detail = await res.text().catch(() => ''); }
    throw new Error(detail || `Gemini request failed (${res.status}). Please try again.`);
  }
  const data = await res.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error('No response from AI. Please try again.');
  return text.trim();
}

async function callOpenRouter(
  messages: TutorMessage[],
  preamble: string,
  model: string,
  signal?: AbortSignal,
): Promise<string> {
  const apiKey = env.OPENROUTER_API_KEY;
  const chatMessages = [
    { role: 'system' as const, content: preamble },
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
      model,
      messages: chatMessages,
      temperature: 0.7,
      max_tokens: 1024,
      top_p: 0.95,
    }),
    signal,
  });

  if (!res.ok) {
    let detail = '';
    try { const errData = await res.json(); detail = errData?.error?.message || ''; } catch { detail = await res.text().catch(() => ''); }
    throw new Error(detail || `Request failed (${res.status}). Please try again.`);
  }
  const data = await res.json();
  const text = data?.choices?.[0]?.message?.content;
  if (!text) throw new Error('No response from AI. Please try again.');
  return text.trim();
}

async function callGroq(
  messages: TutorMessage[],
  preamble: string,
  model: string,
  signal?: AbortSignal,
): Promise<string> {
  const apiKey = env.GROQ_API_KEY;
  const chatMessages = [
    { role: 'system' as const, content: preamble },
    ...messages.map((m) => ({ role: m.role, content: m.content })),
  ];

  const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages: chatMessages,
      temperature: 0.7,
      max_tokens: 1024,
      top_p: 0.95,
    }),
    signal,
  });

  if (!res.ok) {
    let detail = '';
    try { const errData = await res.json(); detail = errData?.error?.message || ''; } catch { detail = await res.text().catch(() => ''); }
    throw new Error(detail || `Groq request failed (${res.status}). Please try again.`);
  }
  const data = await res.json();
  const text = data?.choices?.[0]?.message?.content;
  if (!text) throw new Error('No response from AI. Please try again.');
  return text.trim();
}

export async function askTutor(
  messages: TutorMessage[],
  topicTitle?: string,
  topicContext?: string,
  modelId?: string,
  signal?: AbortSignal,
): Promise<{ reply: string; modelLabel: string }> {
  const available = getAvailableModels();
  if (available.length === 0) {
    throw new Error('AI service is not configured. Please add an API key.');
  }

  const modelOption = available.find((m) => m.id === modelId) ?? available[0];
  const preamble = buildPreamble(topicTitle, topicContext);

  const timeoutMs = 30_000;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  if (signal) {
    signal.addEventListener('abort', () => controller.abort(), { once: true });
  }

  try {
    let reply: string;
    if (modelOption.provider === 'openrouter') {
      reply = await callOpenRouter(messages, preamble, modelOption.model, controller.signal);
    } else if (modelOption.provider === 'groq') {
      reply = await callGroq(messages, preamble, modelOption.model, controller.signal);
    } else {
      reply = await callGemini(messages, preamble, modelOption.model, controller.signal);
    }

    return { reply, modelLabel: modelOption.label };
  } catch (err) {
    if (controller.signal.aborted && (!signal || !signal.aborted)) {
      throw new Error('The AI took too long to respond. Please try again or pick a different model.');
    }
    throw err;
  } finally {
    clearTimeout(timeoutId);
  }
}
