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


/** Cap study-material context sent to the model (chars). */
const MAX_CONTEXT_CHARS = 3500;

/**
 * Build a compact study-material brief for the tutor from a topic-like object.
 * Prefer this over passing definition alone so answers stay aligned with notes.
 */
export function buildTopicContext(topic: {
  definition?: string;
  keyFacts?: string[];
  examPoints?: string[];
  commonMistakes?: Array<string | { mistake?: string; correction?: string }>;
  explanationSections?: Array<{ heading?: string; body?: string }>;
  formula?: { name?: string; expression?: string } | Array<{ name?: string; expression?: string }>;
}): string {
  const parts: string[] = [];
  if (topic.definition?.trim()) {
    parts.push(`Definition: ${topic.definition.trim()}`);
  }
  if (topic.keyFacts?.length) {
    parts.push('Key facts:\n' + topic.keyFacts.slice(0, 12).map((f) => `- ${f}`).join('\n'));
  }
  if (topic.explanationSections?.length) {
    const sections = topic.explanationSections.slice(0, 2).map((s) => {
      const body = (s.body || '').trim();
      const clipped = body.length > 600 ? body.slice(0, 600) + '…' : body;
      return `${s.heading ? s.heading + ': ' : ''}${clipped}`;
    });
    parts.push('Explanations:\n' + sections.join('\n\n'));
  }
  if (topic.commonMistakes?.length) {
    const mistakes = topic.commonMistakes.slice(0, 6).map((m) => {
      if (typeof m === 'string') return `- ${m}`;
      const o = m as { mistake?: string; correction?: string };
      return `- ${o.mistake || ''}${o.correction ? ' → ' + o.correction : ''}`.trim();
    });
    parts.push('Common mistakes:\n' + mistakes.join('\n'));
  }
  if (topic.examPoints?.length) {
    parts.push('Exam points:\n' + topic.examPoints.slice(0, 8).map((p) => `- ${p}`).join('\n'));
  }
  const formulas = Array.isArray(topic.formula) ? topic.formula : topic.formula ? [topic.formula] : [];
  if (formulas.length) {
    parts.push(
      'Formulas:\n' +
        formulas
          .slice(0, 6)
          .map((f) => `- ${f.name || 'Formula'}: ${f.expression || ''}`)
          .join('\n'),
    );
  }
  const joined = parts.join('\n\n');
  if (joined.length <= MAX_CONTEXT_CHARS) return joined;
  return joined.slice(0, MAX_CONTEXT_CHARS) + '\n…';
}

function buildPreamble(topicTitle?: string, topicContext?: string): string {
  return topicTitle
    ? `${SYSTEM_PROMPT}\n\nThe student is currently studying: ${topicTitle}${topicContext ? `\nTopic context: ${topicContext}` : ''}`
    : SYSTEM_PROMPT;
}

export interface TutorMessage {
  role: 'user' | 'assistant';
  content: string;
}

export type ProviderKey =
  | 'gemini'
  | 'openrouter'
  | 'groq'
  | 'mistral'
  | 'deepseek'
  | 'openai'
  | 'xai'
  | 'anthropic';

export interface ModelOption {
  id: string;
  label: string;
  provider: ProviderKey;
  model: string;
  badge?: string;
  free?: boolean;
}

export const MODEL_OPTIONS: ModelOption[] = [
  // ── Groq (https://console.groq.com/docs/models) ──
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
  // ── Google Gemini direct (https://ai.google.dev/gemini-api/docs/models) ──
  {
    id: 'gemini',
    label: 'Gemini 3.8 Flash',
    provider: 'gemini',
    model: 'gemini-3.8-flash',
    badge: 'Google',
    free: true,
  },
  {
    id: 'gemini-2.5-flash-direct',
    label: 'Gemini 2.5 Flash',
    provider: 'gemini',
    model: 'gemini-2.5-flash',
    badge: 'Google',
    free: true,
  },
  // ── OpenRouter free + paid ──
  {
    id: 'or-nemotron-ultra',
    label: 'Nemotron 3 Ultra',
    provider: 'openrouter',
    model: 'nvidia/nemotron-3-ultra-550b-a55b:free',
    badge: 'NVIDIA',
    free: true,
  },
  {
    id: 'or-free-router',
    label: 'Free router',
    provider: 'openrouter',
    model: 'openrouter/free',
    badge: 'OpenRouter',
    free: true,
  },
  {
    id: 'or-gpt-4o-mini',
    label: 'GPT-4o mini (OR)',
    provider: 'openrouter',
    model: 'openai/gpt-4o-mini',
    badge: 'OpenAI',
  },
  {
    id: 'or-claude-sonnet',
    label: 'Claude Sonnet 4.5 (OR)',
    provider: 'openrouter',
    model: 'anthropic/claude-sonnet-4.5',
    badge: 'Anthropic',
  },
  // ── Mistral direct (https://docs.mistral.ai) ──
  {
    id: 'mistral-small',
    label: 'Mistral Small',
    provider: 'mistral',
    model: 'mistral-small-latest',
    badge: 'Mistral',
    free: true,
  },
  {
    id: 'mistral-large',
    label: 'Mistral Large',
    provider: 'mistral',
    model: 'mistral-large-latest',
    badge: 'Mistral',
  },
  // ── DeepSeek direct (https://api-docs.deepseek.com) ──
  {
    id: 'deepseek-flash',
    label: 'DeepSeek Flash',
    provider: 'deepseek',
    model: 'deepseek-flash',
    badge: 'DeepSeek',
  },
  {
    id: 'deepseek-chat',
    label: 'DeepSeek Chat',
    provider: 'deepseek',
    model: 'deepseek-chat',
    badge: 'DeepSeek',
  },
  // ── OpenAI direct ──
  {
    id: 'openai-gpt-4o-mini',
    label: 'GPT-4o mini',
    provider: 'openai',
    model: 'gpt-4o-mini',
    badge: 'OpenAI',
  },
  {
    id: 'openai-gpt-4o',
    label: 'GPT-4o',
    provider: 'openai',
    model: 'gpt-4o',
    badge: 'OpenAI',
  },
  // ── xAI Grok (https://docs.x.ai) ──
  {
    id: 'xai-grok-4',
    label: 'Grok 4',
    provider: 'xai',
    model: 'grok-4',
    badge: 'xAI',
  },
  {
    id: 'xai-grok-3',
    label: 'Grok 3',
    provider: 'xai',
    model: 'grok-3',
    badge: 'xAI',
  },
  // ── Anthropic direct ──
  {
    id: 'anthropic-sonnet',
    label: 'Claude Sonnet 4.5',
    provider: 'anthropic',
    model: 'claude-sonnet-4-5',
    badge: 'Anthropic',
  },
  {
    id: 'anthropic-haiku',
    label: 'Claude Haiku 4.5',
    provider: 'anthropic',
    model: 'claude-haiku-4-5',
    badge: 'Anthropic',
  },
];

export function getAvailableModels(): ModelOption[] {
  const keys: Record<ProviderKey, boolean> = {
    gemini: Boolean(env.GEMINI_API_KEY),
    openrouter: Boolean(env.OPENROUTER_API_KEY),
    groq: Boolean(env.GROQ_API_KEY),
    mistral: Boolean(env.MISTRAL_API_KEY),
    deepseek: Boolean(env.DEEPSEEK_API_KEY),
    openai: Boolean(env.OPENAI_API_KEY),
    xai: Boolean(env.XAI_API_KEY),
    anthropic: Boolean(env.ANTHROPIC_API_KEY),
  };
  return MODEL_OPTIONS.filter((m) => keys[m.provider]);
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


/** Shared OpenAI-compatible chat completions (Groq/OR/Mistral/DeepSeek/OpenAI/xAI). */
async function callOpenAICompatible(
  baseUrl: string,
  apiKey: string,
  providerLabel: string,
  messages: TutorMessage[],
  preamble: string,
  model: string,
  signal?: AbortSignal,
  extraHeaders?: Record<string, string>,
): Promise<string> {
  if (!apiKey) throw new Error(`${providerLabel} API key is not configured.`);

  const chatMessages = [
    { role: 'system', content: SYSTEM_PROMPT + preamble },
    ...messages.map((m) => ({ role: m.role, content: m.content })),
  ];

  const res = await fetch(`${baseUrl.replace(/\/$/, '')}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
      ...extraHeaders,
    },
    body: JSON.stringify({
      model,
      messages: chatMessages,
      temperature: 0.7,
      max_tokens: 1024,
    }),
    signal,
  });

  if (!res.ok) {
    let detail = '';
    try {
      const errData = await res.json();
      detail = errData?.error?.message || errData?.message || '';
    } catch {
      detail = await res.text().catch(() => '');
    }
    throw new Error(detail || `${providerLabel} request failed (${res.status}). Please try again.`);
  }
  const data = await res.json();
  const textOut = data?.choices?.[0]?.message?.content;
  if (!textOut) throw new Error('No response from AI. Please try again.');
  return String(textOut).trim();
}

async function callAnthropic(
  messages: TutorMessage[],
  preamble: string,
  model: string,
  signal?: AbortSignal,
): Promise<string> {
  const apiKey = env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error('Anthropic API key is not configured.');

  const system = SYSTEM_PROMPT + preamble;
  const anthropicMessages = messages.map((m) => ({
    role: m.role === 'assistant' ? 'assistant' : 'user',
    content: m.content,
  }));

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model,
      max_tokens: 1024,
      system,
      messages: anthropicMessages,
    }),
    signal,
  });

  if (!res.ok) {
    let detail = '';
    try {
      const errData = await res.json();
      detail = errData?.error?.message || '';
    } catch {
      detail = await res.text().catch(() => '');
    }
    throw new Error(detail || `Anthropic request failed (${res.status}). Please try again.`);
  }
  const data = await res.json();
  const parts = data?.content;
  const textOut = Array.isArray(parts)
    ? parts.filter((p: { type?: string }) => p.type === 'text').map((p: { text?: string }) => p.text || '').join('')
    : '';
  if (!textOut) throw new Error('No response from AI. Please try again.');
  return textOut.trim();
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

  const timeoutMs = 90_000;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  if (signal) {
    signal.addEventListener('abort', () => controller.abort(), { once: true });
  }

  try {
    let reply: string;
    const p = modelOption.provider;
    if (p === 'gemini') {
      reply = await callGemini(messages, preamble, modelOption.model, controller.signal);
    } else if (p === 'anthropic') {
      reply = await callAnthropic(messages, preamble, modelOption.model, controller.signal);
    } else if (p === 'openrouter') {
      reply = await callOpenAICompatible(
        'https://openrouter.ai/api/v1',
        env.OPENROUTER_API_KEY,
        'OpenRouter',
        messages,
        preamble,
        modelOption.model,
        controller.signal,
        {
          'HTTP-Referer': typeof window !== 'undefined' ? window.location.origin : 'https://examprep-hub.local',
          'X-Title': 'ExamPrep Hub',
        },
      );
    } else if (p === 'groq') {
      reply = await callOpenAICompatible(
        'https://api.groq.com/openai/v1',
        env.GROQ_API_KEY,
        'Groq',
        messages,
        preamble,
        modelOption.model,
        controller.signal,
      );
    } else if (p === 'mistral') {
      reply = await callOpenAICompatible(
        'https://api.mistral.ai/v1',
        env.MISTRAL_API_KEY,
        'Mistral',
        messages,
        preamble,
        modelOption.model,
        controller.signal,
      );
    } else if (p === 'deepseek') {
      reply = await callOpenAICompatible(
        'https://api.deepseek.com',
        env.DEEPSEEK_API_KEY,
        'DeepSeek',
        messages,
        preamble,
        modelOption.model,
        controller.signal,
      );
    } else if (p === 'openai') {
      reply = await callOpenAICompatible(
        'https://api.openai.com/v1',
        env.OPENAI_API_KEY,
        'OpenAI',
        messages,
        preamble,
        modelOption.model,
        controller.signal,
      );
    } else if (p === 'xai') {
      reply = await callOpenAICompatible(
        'https://api.x.ai/v1',
        env.XAI_API_KEY,
        'xAI',
        messages,
        preamble,
        modelOption.model,
        controller.signal,
      );
    } else {
      throw new Error('Unknown AI provider.');
    }

    return { reply, modelLabel: modelOption.label };
  } catch (err) {
    if (controller.signal.aborted && (!signal || !signal.aborted)) {
      throw new Error('The AI took too long to respond (over 90 seconds). Please try again or pick a different model.');
    }
    throw err;
  } finally {
    clearTimeout(timeoutId);
  }
}
