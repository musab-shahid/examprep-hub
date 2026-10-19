/**
 * ExamPrep Hub — AI tutor proxy.
 * Secrets (Dashboard → Edge Functions → Secrets), never VITE_*:
 *   GEMINI_API_KEY, OPENROUTER_API_KEY, GROQ_API_KEY, MISTRAL_API_KEY,
 *   DEEPSEEK_API_KEY, OPENAI_API_KEY, XAI_API_KEY, ANTHROPIC_API_KEY
 *
 * POST JSON: { provider, model, messages: {role,content}[], preamble?: string }
 * CORS open for the static app origin; tighten in production if needed.
 */
import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

type Msg = { role: string; content: string };

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: cors });
  }
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "POST only" }), {
      status: 405,
      headers: { ...cors, "Content-Type": "application/json" },
    });
  }

  try {
    const body = await req.json();
    const provider = String(body.provider || "");
    const model = String(body.model || "");
    const preamble = String(body.preamble || "");
    const messages = (body.messages || []) as Msg[];
    if (!provider || !model || !Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: "provider, model, messages required" }), {
        status: 400,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }

    const { text, truncated } = await routeProvider(provider, model, preamble, messages);
    return new Response(JSON.stringify({ text, truncated }), {
      headers: { ...cors, "Content-Type": "application/json" },
    });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "AI proxy error";
    return new Response(JSON.stringify({ error: msg }), {
      status: 502,
      headers: { ...cors, "Content-Type": "application/json" },
    });
  }
});

async function routeProvider(
  provider: string,
  model: string,
  preamble: string,
  messages: Msg[],
): Promise<{ text: string; truncated: boolean }> {
  switch (provider) {
    case "gemini":
      return callGemini(model, preamble, messages);
    case "openrouter":
      return callOpenAICompat(
        "https://openrouter.ai/api/v1/chat/completions",
        Deno.env.get("OPENROUTER_API_KEY"),
        model,
        preamble,
        messages,
        { "HTTP-Referer": "https://examprep-hub.local", "X-Title": "ExamPrep AI Tutor" },
      );
    case "groq":
      return callOpenAICompat(
        "https://api.groq.com/openai/v1/chat/completions",
        Deno.env.get("GROQ_API_KEY"),
        model,
        preamble,
        messages,
      );
    case "mistral":
      return callOpenAICompat(
        "https://api.mistral.ai/v1/chat/completions",
        Deno.env.get("MISTRAL_API_KEY"),
        model,
        preamble,
        messages,
      );
    case "deepseek":
      return callOpenAICompat(
        "https://api.deepseek.com/chat/completions",
        Deno.env.get("DEEPSEEK_API_KEY"),
        model,
        preamble,
        messages,
      );
    case "openai":
      return callOpenAICompat(
        "https://api.openai.com/v1/chat/completions",
        Deno.env.get("OPENAI_API_KEY"),
        model,
        preamble,
        messages,
      );
    case "xai":
      return callOpenAICompat(
        "https://api.x.ai/v1/chat/completions",
        Deno.env.get("XAI_API_KEY"),
        model,
        preamble,
        messages,
      );
    case "anthropic":
      return callAnthropic(model, preamble, messages);
    default:
      throw new Error(`Unknown provider: ${provider}`);
  }
}

async function callOpenAICompat(
  url: string,
  apiKey: string | undefined,
  model: string,
  preamble: string,
  messages: Msg[],
  extraHeaders: Record<string, string> = {},
): Promise<{ text: string; truncated: boolean }> {
  if (!apiKey) throw new Error("Provider key not configured on server");
  const chatMessages = [
    { role: "system", content: preamble },
    ...messages.map((m) => ({ role: m.role, content: m.content })),
  ];
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
      ...extraHeaders,
    },
    body: JSON.stringify({
      model,
      messages: chatMessages,
      temperature: 0.7,
      max_tokens: 4096,
    }),
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(detail || `Upstream ${res.status}`);
  }
  const data = await res.json();
  const text = data?.choices?.[0]?.message?.content;
  if (!text) throw new Error("Empty upstream response");
  const finish = data?.choices?.[0]?.finish_reason || "";
  return { text, truncated: finish === "length" || finish === "max_tokens" };
}

async function callGemini(
  model: string,
  preamble: string,
  messages: Msg[],
): Promise<{ text: string; truncated: boolean }> {
  const apiKey = Deno.env.get("GEMINI_API_KEY");
  if (!apiKey) throw new Error("GEMINI_API_KEY not configured on server");
  const contents = messages.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));
  const url =
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": apiKey,
    },
    body: JSON.stringify({
      system_instruction: { parts: [{ text: preamble }] },
      contents,
      generationConfig: { temperature: 0.7, maxOutputTokens: 4096 },
    }),
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(detail || `Gemini ${res.status}`);
  }
  const data = await res.json();
  const text = data?.candidates?.[0]?.content?.parts?.map((p: { text?: string }) => p.text || "").join("") || "";
  if (!text) throw new Error("Empty Gemini response");
  const reason = data?.candidates?.[0]?.finishReason || "";
  return { text, truncated: reason === "MAX_TOKENS" };
}

async function callAnthropic(
  model: string,
  preamble: string,
  messages: Msg[],
): Promise<{ text: string; truncated: boolean }> {
  const apiKey = Deno.env.get("ANTHROPIC_API_KEY");
  if (!apiKey) throw new Error("ANTHROPIC_API_KEY not configured on server");
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model,
      max_tokens: 4096,
      system: preamble,
      messages: messages.map((m) => ({
        role: m.role === "assistant" ? "assistant" : "user",
        content: m.content,
      })),
    }),
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(detail || `Anthropic ${res.status}`);
  }
  const data = await res.json();
  const text = data?.content?.filter((b: { type: string }) => b.type === "text")
    .map((b: { text: string }) => b.text).join("") || "";
  if (!text) throw new Error("Empty Anthropic response");
  return { text, truncated: data?.stop_reason === "max_tokens" };
}
