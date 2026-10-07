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

export function aiTutorPlugin() {
  return {
    name: 'ai-tutor-proxy',
    configureServer(server) {
      const env = loadEnv('all', server.config.root, '');
      const apiKey = env.GEMINI_API_KEY || process.env.GEMINI_API_KEY;

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

        if (!apiKey) {
          res.writeHead(503, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'AI service not configured. Add GEMINI_API_KEY to .env' }));
          return;
        }

        try {
          const body = await readBody(req);
          const { messages, topicTitle, topicContext } = JSON.parse(body);

          if (!messages || !Array.isArray(messages) || messages.length === 0) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'messages array is required' }));
            return;
          }

          const contextPreamble = topicTitle
            ? `${SYSTEM_PROMPT}\n\nThe student is currently studying: ${topicTitle}${topicContext ? `\nTopic context: ${topicContext}` : ''}`
            : SYSTEM_PROMPT;

          const contents = messages.map((m) => ({
            role: m.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: m.content }],
          }));

          const geminiRes = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                systemInstruction: { parts: [{ text: contextPreamble }] },
                contents,
                generationConfig: {
                  temperature: 0.7,
                  maxOutputTokens: 1024,
                  topP: 0.95,
                },
              }),
            },
          );

          if (!geminiRes.ok) {
            const errText = await geminiRes.text();
            console.error('Gemini API error:', geminiRes.status, errText);
            res.writeHead(502, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'AI request failed. Please try again.' }));
            return;
          }

          const data = await geminiRes.json();
          const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

          if (!text) {
            res.writeHead(502, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'No response from AI. Please try again.' }));
            return;
          }

          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ reply: text.trim() }));
        } catch (err) {
          console.error('AI tutor proxy error:', err);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Something went wrong. Please try again.' }));
        }
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
