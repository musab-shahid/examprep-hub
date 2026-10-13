/**
 * Runtime environment values that Vite bundles into the production build.
 * Variables prefixed with VITE_ are replaced at build time.
 *
 * Under Node (unit tests / scripts), import.meta.env may be undefined —
 * treat missing env as empty strings so modules can load without Vite.
 */
const viteEnv =
  (typeof import.meta !== 'undefined' &&
    (import.meta as ImportMeta & { env?: Record<string, string | undefined> }).env) ||
  {};

export const env = {
  GEMINI_API_KEY: viteEnv.VITE_GEMINI_API_KEY || '',
  OPENROUTER_API_KEY: viteEnv.VITE_OPENROUTER_API_KEY || '',
  GROQ_API_KEY: viteEnv.VITE_GROQ_API_KEY || '',
  MISTRAL_API_KEY: viteEnv.VITE_MISTRAL_API_KEY || '',
  DEEPSEEK_API_KEY: viteEnv.VITE_DEEPSEEK_API_KEY || '',
  OPENAI_API_KEY: viteEnv.VITE_OPENAI_API_KEY || '',
  XAI_API_KEY: viteEnv.VITE_XAI_API_KEY || '',
  ANTHROPIC_API_KEY: viteEnv.VITE_ANTHROPIC_API_KEY || '',
} as const;
