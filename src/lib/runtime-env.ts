/**
 * Runtime environment values that Vite bundles into the production build.
 * Variables prefixed with VITE_ are replaced at build time.
 */
export const env = {
  GEMINI_API_KEY: import.meta.env.VITE_GEMINI_API_KEY || '',
} as const;
