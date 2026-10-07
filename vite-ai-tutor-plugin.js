import { loadEnv } from 'vite';

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

function buildContextPreamble(topicTitle, topicContext) {
  return topicTitle
    ? `${SYSTEM_PROMPT}\n\nThe student is currently studying: ${topicTitle}${topicContext ? `\nTopic context: ${topicContext}` : ''}`
    : SYSTEM_PROMPT;
}

async function callGemini(apiKey, messages, preamble) {
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

  if (!res.ok) {
    const errText = await res.text();
    console.error('Gemini API error:', res.status, errText);
    throw new Error('AI request failed. Please try again.');
  }

  const data = await res.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error('No response from AI. Please try again.');
  return text.trim();
}

async function callOpenRouter(apiKey, messages, preamble) {
  const chatMessages = [
    { role: 'system', content: preamble },
    ...messages.map((m) => ({ role: m.role, content: m.content })),
  ];

  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
      'HTTP-Referer': 'http://localhost:5173',
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

  if (!res.ok) {
    const errText = await res.text();
    console.error('OpenRouter API error:', res.status, errText);
    throw new Error('AI request failed. Please try again.');
  }

  const data = await res.json();
  const text = data?.choices?.[0]?.message?.content;
  if (!text) throw new Error('No response from AI. Please try again.');
  return text.trim();
}

const PROVIDERS = {
  gemini: { name: 'Gemini', call: callGemini, envKey: 'GEMINI_API_KEY' },
  openrouter: { name: 'OpenRouter', call: callOpenRouter, envKey: 'OPENROUTER_API_KEY' },
};

export function aiTutorPlugin() {
  return {
    name: 'ai-tutor-proxy',
    configureServer(server) {
      const env = loadEnv('all', server.config.root, '');

      server.middlewares.use('/api/ai-tutor', async (req, res) => {
        if (req.method === 'OPTIONS') {
          res.writeHead(204, {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
          });
          res.end();
          return;
        }

        if (req.method !== 'POST') {
          res.writeHead(405, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Method not allowed' }));
          return;
        }

        try {
          const body = await readBody(req);
          const { messages, topicTitle, topicContext, provider: requestedProvider } = JSON.parse(body);

          if (!messages || !Array.isArray(messages) || messages.length === 0) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'messages array is required' }));
            return;
          }

          const availableProviders = {};
          for (const [key, p] of Object.entries(PROVIDERS)) {
            const apiKey = env[p.envKey] || process.env[p.envKey];
            if (apiKey) availableProviders[key] = { name: p.name };
          }

          const providerKey = requestedProvider && availableProviders[requestedProvider]
            ? requestedProvider
            : Object.keys(availableProviders)[0];

          if (!providerKey) {
            res.writeHead(503, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'No AI service configured. Add an API key to .env' }));
            return;
          }

          const provider = PROVIDERS[providerKey];
          const apiKey = env[provider.envKey] || process.env[provider.envKey];
          const preamble = buildContextPreamble(topicTitle, topicContext);

          const reply = await provider.call(apiKey, messages, preamble);

          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ reply, provider: providerKey, availableProviders: Object.keys(availableProviders) }));
        } catch (err) {
          console.error('AI tutor proxy error:', err);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: err.message || 'Something went wrong. Please try again.' }));
        }
      });

      // Endpoint to list available providers
      server.middlewares.use('/api/ai-providers', (_req, res) => {
        const available = {};
        for (const [key, p] of Object.entries(PROVIDERS)) {
          const apiKey = env[p.envKey] || process.env[p.envKey];
          if (apiKey) available[key] = p.name;
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ providers: available }));
      });
    },
  };
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => { body += chunk; });
    req.on('end', () => resolve(body));
    req.on('error', reject);
  });
}
