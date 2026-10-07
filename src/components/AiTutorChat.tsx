import { useState, useRef, useEffect, useCallback } from 'react';
import { MessageCircle, X, Send, Sparkles, AlertCircle, Loader2, ChevronDown } from 'lucide-react';
import { askTutor, isTutorAvailable, getAvailableProviders, type TutorMessage } from '@/lib/ai-tutor';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface AiTutorChatProps {
  topicTitle: string;
  topicContext?: string;
}

const PROVIDER_LABELS: Record<string, string> = {
  gemini: 'Gemini',
  openrouter: 'GPT-4o mini',
};

const SUGGESTED_PROMPTS = [
  'Explain this topic in simpler terms',
  'Give me a practice question',
  'What are the key points to memorize?',
];

export function AiTutorChat({ topicTitle, topicContext }: AiTutorChatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [provider, setProvider] = useState<string>('');
  const [availableProviders, setAvailableProviders] = useState<Record<string, string>>({});
  const [showProviderDropdown, setShowProviderDropdown] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const providers = getAvailableProviders();
    setAvailableProviders(providers);
    const keys = Object.keys(providers);
    if (keys.length > 0 && !provider) setProvider(keys[0]);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const sendMessage = useCallback(async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    setInput('');
    setError(null);
    const userMsg: ChatMessage = { role: 'user', content: trimmed };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setLoading(true);

    try {
      const tutorMessages: TutorMessage[] = newMessages.map((m) => ({ role: m.role, content: m.content }));
      const { reply } = await askTutor(tutorMessages, topicTitle, topicContext, provider || undefined);
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Something went wrong.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  }, [messages, loading, topicTitle, topicContext, provider]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const resetChat = () => {
    setMessages([]);
    setError(null);
  };

  const providerKeys = Object.keys(availableProviders);
  const providerLabel = provider ? (PROVIDER_LABELS[provider] || availableProviders[provider] || provider) : 'Select AI';

  if (!isTutorAvailable()) {
    return null;
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3.5 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/40 hover:scale-105 transition-all"
      >
        <Sparkles className="w-5 h-5" />
        Ask AI Tutor
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] max-w-md flex flex-col rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden" style={{ maxHeight: '70vh' }}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white">
        <div className="flex items-center gap-2 min-w-0">
          <MessageCircle className="w-5 h-5 shrink-0" />
          <div className="min-w-0">
            <p className="font-semibold text-sm">AI Tutor</p>
            <p className="text-sky-100 text-xs truncate max-w-[200px]">{topicTitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-1 shrink-0">
          {messages.length > 0 && (
            <button
              onClick={resetChat}
              className="text-sky-100 hover:text-white text-xs px-2 py-1 rounded hover:bg-white/10 transition-colors"
            >
              Clear
            </button>
          )}
          <button
            onClick={() => setIsOpen(false)}
            className="text-sky-100 hover:text-white p-1 rounded hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Provider selector bar */}
      {providerKeys.length > 1 && (
        <div className="relative flex items-center justify-between px-4 py-2 bg-slate-50 border-b border-slate-200">
          <div className="flex items-center gap-1.5 text-slate-500 text-xs">
            <Sparkles className="w-3 h-3" />
            <span>Powered by</span>
          </div>
          <button
            onClick={() => setShowProviderDropdown(!showProviderDropdown)}
            className="flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-sky-600 transition-colors"
          >
            {providerLabel}
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showProviderDropdown ? 'rotate-180' : ''}`} />
          </button>
          {showProviderDropdown && (
            <div className="absolute right-3 top-full mt-1 z-10 bg-white rounded-lg shadow-lg border border-slate-200 py-1 min-w-[160px]">
              {providerKeys.map((key) => (
                <button
                  key={key}
                  onClick={() => {
                    setProvider(key);
                    setShowProviderDropdown(false);
                  }}
                  className={`flex items-center justify-between w-full px-3 py-2 text-sm text-left hover:bg-slate-50 transition-colors ${
                    provider === key ? 'text-sky-600 font-medium' : 'text-slate-700'
                  }`}
                >
                  {PROVIDER_LABELS[key] || availableProviders[key] || key}
                  {provider === key && <span className="w-2 h-2 rounded-full bg-sky-500" />}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-slate-50">
        {messages.length === 0 && !loading && (
          <div className="text-center py-6">
            <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mx-auto mb-3">
              <Sparkles className="w-6 h-6 text-sky-500" />
            </div>
            <p className="text-slate-600 text-sm mb-4">
              Ask me anything about <span className="font-semibold">{topicTitle}</span>
            </p>
            <div className="space-y-2">
              {SUGGESTED_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => sendMessage(prompt)}
                  className="block w-full text-left px-3 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-sm hover:border-sky-300 hover:bg-sky-50/50 transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                msg.role === 'user'
                  ? 'bg-sky-500 text-white rounded-br-md'
                  : 'bg-white border border-slate-200 text-slate-700 rounded-bl-md'
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-md px-4 py-3 flex items-center gap-2">
              <Loader2 className="w-4 h-4 text-sky-500 animate-spin" />
              <span className="text-slate-400 text-xs">{providerLabel}</span>
            </div>
          </div>
        )}

        {error && (
          <div className="flex items-start gap-2 px-3 py-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-sm">
            <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
            <span>{error}</span>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="px-3 py-3 border-t border-slate-200 bg-white">
        <div className="flex items-end gap-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your question..."
            rows={1}
            className="flex-1 resize-none px-3 py-2 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors max-h-24"
            style={{ minHeight: '40px' }}
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={!input.trim() || loading}
            className="p-2.5 rounded-xl bg-sky-500 text-white hover:bg-sky-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
