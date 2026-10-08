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
  // Groq — free tier
  {
    id: 'groq-llama-3.3-70b',
    label: 'Llama 3.3 70B',
    provider: 'groq',
    model: 'llama-3.3-70b-versatile',
    badge: 'Groq',
    free: true,
  },
  {
    id: 'groq-llama-3.1-8b',
    label: 'Llama 3.1 8B',
    provider: 'groq',
    model: 'llama-3.1-8b-instant',
    badge: 'Groq',
    free: true,
  },
  {
    id: 'groq-gemma2-9b',
    label: 'Gemma 2 9B',
    provider: 'groq',
    model: 'gemma2-9b-it',
    badge: 'Groq',
    free: true,
  },
  // Gemini — Google AI Studio free tier
  {
    id: 'gemini-flash',
    label: 'Gemini 3.5 Flash',
    provider: 'gemini',
    model: 'gemini-3.5-flash',
    badge: 'Google',
    free: true,
  },
  {
    id: 'gemini-flash-lite',
    label: 'Gemini 3.5 Flash Lite',
    provider: 'gemini',
    model: 'gemini-3.5-flash-lite',
    badge: 'Google',
    free: true,
  },
  // OpenRouter — free models
  {
    id: 'or-llama-3.3-70b-free',
    label: 'Llama 3.3 70B (free)',
    provider: 'openrouter',
    model: 'meta-llama/llama-3.3-70b-instruct:free',
    badge: 'Meta',
    free: true,
  },
  {
    id: 'or-nemotron-ultra-free',
    label: 'Nemotron 3 Ultra (free)',
    provider: 'openrouter',
    model: 'nvidia/nemotron-3-ultra-550b-a55b:free',
    badge: 'NVIDIA',
    free: true,
  },
  {
    id: 'or-nemotron-super-free',
    label: 'Nemotron 3 Super (free)',
    provider: 'openrouter',
    model: 'nvidia/nemotron-3-super-120b-a12b:free',
    badge: 'NVIDIA',
    free: true,
  },
  {
    id: 'or-nemotron-lightning-free',
    label: 'Nemotron 3.5 Lightning (free)',
    provider: 'openrouter',
    model: 'nvidia/nemotron-3.5-lightning:free',
    badge: 'NVIDIA',
    free: true,
  },
  // OpenRouter — paid models
  {
    id: 'or-gpt-4.1-mini',
    label: 'GPT-4.1 mini',
    provider: 'openrouter',
    model: 'openai/gpt-4.1-mini',
    badge: 'OpenAI',
  },
  {
    id: 'or-gpt-4.1',
    label: 'GPT-4.1',
    provider: 'openrouter',
    model: 'openai/gpt-4.1',
    badge: 'OpenAI',
  },
  {
    id: 'or-claude-sonnet',
    label: 'Claude Sonnet 5',
    provider: 'openrouter',
    model: 'anthropic/claude-sonnet-5',
    badge: 'Anthropic',
  },
  {
    id: 'or-claude-haiku',
    label: 'Claude Haiku 4.5',
    provider: 'openrouter',
    model: 'anthropic/claude-haiku-4.5',
    badge: 'Anthropic',
  },
  {
    id: 'or-deepseek-chat',
    label: 'DeepSeek V4 Flash',
    provider: 'openrouter',
    model: 'deepseek/deepseek-v4-flash',
    badge: 'DeepSeek',
  },
  {
    id: 'or-gemini-3.5-flash',
    label: 'Gemini 3.5 Flash',
    provider: 'openrouter',
    model: 'google/gemini-3.5-flash',
    badge: 'Google',
  },
  {
    id: 'or-gemini-3.5-pro',
    label: 'Gemini 3.5 Pro',
    provider: 'openrouter',
    model: 'google/gemini-3.5-pro',
    badge: 'Google',
  },
  // Mistral — direct API
  {
    id: 'mistral-small',
    label: 'Mistral Small',
    provider: 'mistral',
    model: 'mistral-small-latest',
    badge: 'Mistral',
  },
  {
    id: 'mistral-large',
    label: 'Mistral Large',
    provider: 'mistral',
    model: 'mistral-large-latest',
    badge: 'Mistral',
  },
  // DeepSeek — direct API
  {
    id: 'deepseek-chat',
    label: 'DeepSeek V4 Flash',
    provider: 'deepseek',
    model: 'deepseek-v4-flash',
    badge: 'DeepSeek',
  },
  // OpenAI — direct API
  {
    id: 'openai-gpt-4.1-mini',
    label: 'GPT-4.1 mini',
    provider: 'openai',
    model: 'gpt-4.1-mini',
    badge: 'OpenAI',
  },
  {
    id: 'openai-gpt-4.1',
    label: 'GPT-4.1',
    provider: 'openai',
    model: 'gpt-4.1',
    badge: 'OpenAI',
  },
  // xAI — direct API
  {
    id: 'xai-grok-4.3',
    label: 'Grok 4.3',
    provider: 'xai',
    model: 'grok-4.3',
    badge: 'xAI',
  },
  {
    id: 'xai-grok-4.1',
    label: 'Grok 4.1',
    provider: 'xai',
    model: 'grok-4.1',
    badge: 'xAI',
  },
  // Anthropic — direct API
  {
    id: 'anthropic-sonnet',
    label: 'Claude Sonnet 5',
    provider: 'anthropic',
    model: 'claude-sonnet-5',
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

const PROVIDER_KEYS: Record<ProviderKey, keyof typeof env> = {
  gemini: 'GEMINI_API_KEY',
  openrouter: 'OPENROUTER_API_KEY',
  groq: 'GROQ_API_KEY',
  mistral: 'MISTRAL_API_KEY',
  deepseek: 'DEEPSEEK_API_KEY',
  openai: 'OPENAI_API_KEY',
  xai: 'XAI_API_KEY',
  anthropic: 'ANTHROPIC_API_KEY',
};

function isProviderAvailable(provider: ProviderKey): boolean {
  return Boolean(env[PROVIDER_KEYS[provider]]);
}

export function getAvailableModels(): ModelOption[] {
  return MODEL_OPTIONS.filter((m) => isProviderAvailable(m.provider));
}

export function isTutorAvailable(): boolean {
  return Boolean(
    env.GEMINI_API_KEY ||
      env.OPENROUTER_API_KEY ||
      env.GROQ_API_KEY ||
      env.MISTRAL_API_KEY ||
      env.DEEPSEEK_API_KEY ||
      env.OPENAI_API_KEY ||
      env.XAI_API_KEY ||
      env.ANTHROPIC_API_KEY,
  );
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

function callOpenAICompatible(
  baseUrl: string,
  apiKey: string,
  messages: TutorMessage[],
  preamble: string,
  model: string,
  signal?: AbortSignal,
  providerLabel?: string,
): Promise<string> {
  const chatMessages = [
    { role: 'system' as const, content: preamble },
    ...messages.map((m) => ({ role: m.role, content: m.content })),
  ];

  const res = fetch(`${baseUrl}/chat/completions`, {
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
  }).then(async (res) => {
    if (!res.ok) {
      let detail = '';
      try { const errData = await res.json(); detail = errData?.error?.message || ''; } catch { detail = await res.text().catch(() => ''); }
      throw new Error(detail || `${providerLabel || 'Request'} failed (${res.status}). Please try again.`);
    }
    const data = await res.json();
    const text = data?.choices?.[0]?.message?.content;
    if (!text) throw new Error('No response from AI. Please try again.');
    return text.trim();
  });

  return res;
}

async function callMistral(
  messages: TutorMessage[],
  preamble: string,
  model: string,
  signal?: AbortSignal,
): Promise<string> {
  return callOpenAICompatible(
    'https://api.mistral.ai/v1',
    env.MISTRAL_API_KEY,
    messages,
    preamble,
    model,
    signal,
    'Mistral',
  );
}

async function callDeepSeek(
  messages: TutorMessage[],
  preamble: string,
  model: string,
  signal?: AbortSignal,
): Promise<string> {
  return callOpenAICompatible(
    'https://api.deepseek.com/v1',
    env.DEEPSEEK_API_KEY,
    messages,
    preamble,
    model,
    signal,
    'DeepSeek',
  );
}

async function callOpenAI(
  messages: TutorMessage[],
  preamble: string,
  model: string,
  signal?: AbortSignal,
): Promise<string> {
  return callOpenAICompatible(
    'https://api.openai.com/v1',
    env.OPENAI_API_KEY,
    messages,
    preamble,
    model,
    signal,
    'OpenAI',
  );
}

async function callXAI(
  messages: TutorMessage[],
  preamble: string,
  model: string,
  signal?: AbortSignal,
): Promise<string> {
  return callOpenAICompatible(
    'https://api.x.ai/v1',
    env.XAI_API_KEY,
    messages,
    preamble,
    model,
    signal,
    'xAI',
  );
}

async function callAnthropic(
  messages: TutorMessage[],
  preamble: string,
  model: string,
  signal?: AbortSignal,
): Promise<string> {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model,
      max_tokens: 1024,
      system: preamble,
      messages: messages.map((m) => ({ role: m.role, content: m.content })),
    }),
    signal,
  });

  if (!res.ok) {
    let detail = '';
    try { const errData = await res.json(); detail = errData?.error?.message || ''; } catch { detail = await res.text().catch(() => ''); }
    throw new Error(detail || `Anthropic request failed (${res.status}). Please try again.`);
  }
  const data = await res.json();
  const text = data?.content?.[0]?.text;
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

  const timeoutMs = 90_000;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  if (signal) {
    signal.addEventListener('abort', () => controller.abort(), { once: true });
  }

  try {
    let reply: string;
    switch (modelOption.provider) {
      case 'openrouter':
        reply = await callOpenRouter(messages, preamble, modelOption.model, controller.signal);
        break;
      case 'groq':
        reply = await callGroq(messages, preamble, modelOption.model, controller.signal);
        break;
      case 'gemini':
        reply = await callGemini(messages, preamble, modelOption.model, controller.signal);
        break;
      case 'mistral':
        reply = await callMistral(messages, preamble, modelOption.model, controller.signal);
        break;
      case 'deepseek':
        reply = await callDeepSeek(messages, preamble, modelOption.model, controller.signal);
        break;
      case 'openai':
        reply = await callOpenAI(messages, preamble, modelOption.model, controller.signal);
        break;
      case 'xai':
        reply = await callXAI(messages, preamble, modelOption.model, controller.signal);
        break;
      case 'anthropic':
        reply = await callAnthropic(messages, preamble, modelOption.model, controller.signal);
        break;
      default:
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
