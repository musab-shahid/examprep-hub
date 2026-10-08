/**
 * Runtime environment values that Vite bundles into the production build.
 * Variables prefixed with VITE_ are replaced at build time.
 * Never commit real keys — use .env / host secrets only.
 */
export const env = {
  GEMINI_API_KEY: import.meta.env.VITE_GEMINI_API_KEY || '',
  OPENROUTER_API_KEY: import.meta.env.VITE_OPENROUTER_API_KEY || '',
  GROQ_API_KEY: import.meta.env.VITE_GROQ_API_KEY || '',
  MISTRAL_API_KEY: import.meta.env.VITE_MISTRAL_API_KEY || '',
  DEEPSEEK_API_KEY: import.meta.env.VITE_DEEPSEEK_API_KEY || '',
  OPENAI_API_KEY: import.meta.env.VITE_OPENAI_API_KEY || '',
  XAI_API_KEY: import.meta.env.VITE_XAI_API_KEY || '',
  ANTHROPIC_API_KEY: import.meta.env.VITE_ANTHROPIC_API_KEY || '',
} as const;
