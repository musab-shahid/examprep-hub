import { useState, useRef, useEffect, useCallback } from 'react';
import { MessageCircle, X, Send, Sparkles, AlertCircle, Loader2, ChevronDown, Check, GripVertical, Maximize2, Minimize2, Square, RotateCcw, Copy, Check as CheckIcon } from 'lucide-react';
import { askTutor, isTutorAvailable, getAvailableModels, getDefaultModelId, type TutorMessage, type ModelOption } from '@/lib/ai-tutor';
import { ChatMarkdown } from '@/components/ChatMarkdown';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

interface AiTutorChatProps {
  topicTitle: string;
  topicContext?: string;
}

const SUGGESTED_PROMPTS = [
  'Explain this topic in simpler terms',
  'Give me a practice question',
  'What are the key points to memorize?',
];

const COOLDOWN_MS = 2000;
const MAX_INPUT_LENGTH = 2000;
const MAX_STORED_MESSAGES = 50;
const STORAGE_KEY_PREFIX = 'ai-tutor-chat:';

function makeId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function loadStoredMessages(topicKey: string): ChatMessage[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PREFIX + topicKey);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed.slice(-MAX_STORED_MESSAGES);
    return [];
  } catch {
    return [];
  }
}

function saveMessages(topicKey: string, msgs: ChatMessage[]) {
  try {
    localStorage.setItem(STORAGE_KEY_PREFIX + topicKey, JSON.stringify(msgs.slice(-MAX_STORED_MESSAGES)));
  } catch {
    /* storage full or unavailable */
  }
}

export function AiTutorChat({ topicTitle, topicContext }: AiTutorChatProps) {
  const topicKey = topicTitle;
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [modelId, setModelId] = useState('');
  const [availableModels, setAvailableModels] = useState<ModelOption[]>([]);
  const [showModelDropdown, setShowModelDropdown] = useState(false);
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [size, setSize] = useState<{ w: number; h: number } | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [cooldownRemaining, setCooldownRemaining] = useState(0);

  const dragRef = useRef<{ startX: number; startY: number; origX: number; origY: number } | null>(null);
  const resizeRef = useRef<{ startX: number; startY: number; origW: number; origH: number } | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const lastSentRef = useRef<number>(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const cooldownTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const skipPersistRef = useRef(false);

  // Load persisted messages when topic changes
  useEffect(() => {
    const stored = loadStoredMessages(topicKey);
    setMessages(stored);
    setError(null);
    skipPersistRef.current = true;
  }, [topicKey]);

  // Persist messages whenever they change (skip the first run after a load to avoid overwriting)
  useEffect(() => {
    if (skipPersistRef.current) {
      skipPersistRef.current = false;
      return;
    }
    if (messages.length > 0) {
      saveMessages(topicKey, messages);
    } else {
      try { localStorage.removeItem(STORAGE_KEY_PREFIX + topicKey); } catch { /* noop */ }
    }
  }, [messages, topicKey]);

  // Cancel in-flight request on unmount
  useEffect(() => {
    return () => {
      abortRef.current?.abort();
      if (cooldownTimerRef.current) clearInterval(cooldownTimerRef.current);
    };
  }, []);

  const expandPanel = useCallback(() => {
    const w = Math.min(window.innerWidth - 32, 640);
    const h = Math.min(window.innerHeight - 32, window.innerHeight * 0.85);
    setSize({ w, h });
    setPosition({ x: Math.max(8, (window.innerWidth - w) / 2), y: Math.max(8, (window.innerHeight - h) / 2) });
    setIsExpanded(true);
  }, []);

  const collapsePanel = useCallback(() => {
    setSize(null);
    setIsExpanded(false);
    const w = Math.min(window.innerWidth - 24, 448);
    const h = Math.min(window.innerHeight * 0.7, 500);
    setPosition({ x: window.innerWidth - w - 24, y: window.innerHeight - h - 24 });
  }, []);

  const startCooldown = useCallback(() => {
    lastSentRef.current = Date.now();
    setCooldownRemaining(COOLDOWN_MS);
    if (cooldownTimerRef.current) clearInterval(cooldownTimerRef.current);
    cooldownTimerRef.current = setInterval(() => {
      const elapsed = Date.now() - lastSentRef.current;
      const remaining = Math.max(0, COOLDOWN_MS - elapsed);
      setCooldownRemaining(remaining);
      if (remaining <= 0 && cooldownTimerRef.current) {
        clearInterval(cooldownTimerRef.current);
        cooldownTimerRef.current = null;
      }
    }, 200);
  }, []);

  useEffect(() => {
    const models = getAvailableModels();
    setAvailableModels(models);
    if (models.length > 0 && !modelId) setModelId(getDefaultModelId());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!showModelDropdown) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowModelDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showModelDropdown]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const currentModel = availableModels.find((m) => m.id === modelId);

  const sendMessage = useCallback(async (text: string, retryMessages?: ChatMessage[]) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    // Cooldown only applies to new messages, not retries
    if (!retryMessages && Date.now() - lastSentRef.current < COOLDOWN_MS) return;

    setInput('');
    setError(null);
    const userMsg: ChatMessage = { id: makeId(), role: 'user', content: trimmed };
    const newMessages = retryMessages ?? [...messages, userMsg];
    if (!retryMessages) setMessages(newMessages);
    if (!retryMessages) startCooldown();
    setLoading(true);

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const tutorMessages: TutorMessage[] = newMessages.map((m) => ({ role: m.role, content: m.content }));
      const { reply } = await askTutor(tutorMessages, topicTitle, topicContext, modelId || undefined, controller.signal);
      setMessages((prev) => [...prev, { id: makeId(), role: 'assistant', content: reply }]);
    } catch (err) {
      if (controller.signal.aborted) {
        // User cancelled or timeout — don't show error if user initiated cancel
        if (err instanceof Error && err.message.includes('too long')) {
          setError(err.message);
        }
      } else {
        const msg = err instanceof Error ? err.message : 'Something went wrong.';
        setError(msg);
      }
    } finally {
      setLoading(false);
      abortRef.current = null;
    }
  }, [messages, loading, topicTitle, topicContext, modelId, startCooldown]);

  const handleStop = useCallback(() => {
    abortRef.current?.abort();
    setLoading(false);
    abortRef.current = null;
  }, []);

  const handleRetry = useCallback(() => {
    if (loading) return;
    // Remove the last user message (it's already in the list) and re-send
    const lastUserIdx = [...messages].reverse().findIndex((m) => m.role === 'user');
    if (lastUserIdx === -1) return;
    const actualIdx = messages.length - 1 - lastUserIdx;
    const messagesUpToAndIncluding = messages.slice(0, actualIdx + 1);
    const lastUserMsg = messages[actualIdx];
    setError(null);
    sendMessage(lastUserMsg.content, messagesUpToAndIncluding);
  }, [messages, loading, sendMessage]);

  const handleCopy = useCallback(async (msg: ChatMessage) => {
    try {
      await navigator.clipboard.writeText(msg.content);
      setCopiedId(msg.id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      /* clipboard not available */
    }
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const handleDragStart = (e: React.PointerEvent) => {
    e.preventDefault();
    const panel = (e.currentTarget.parentElement as HTMLElement);
    const rect = panel.getBoundingClientRect();
    const current = position ?? { x: rect.left, y: rect.top };
    dragRef.current = { startX: e.clientX, startY: e.clientY, origX: current.x, origY: current.y };
    setPosition(current);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handleDragMove = (e: React.PointerEvent) => {
    if (!dragRef.current) return;
    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;
    let nx = dragRef.current.origX + dx;
    let ny = dragRef.current.origY + dy;
    const maxX = window.innerWidth - 64;
    const maxY = window.innerHeight - 80;
    nx = Math.max(8, Math.min(nx, maxX));
    ny = Math.max(8, Math.min(ny, maxY));
    setPosition({ x: nx, y: ny });
  };

  const handleDragEnd = (e: React.PointerEvent) => {
    dragRef.current = null;
    try { e.currentTarget.releasePointerCapture(e.pointerId); } catch { /* noop */ }
  };

  const handleResizeStart = (e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const panel = panelRef.current;
    if (!panel) return;
    const rect = panel.getBoundingClientRect();
    const current = size ?? { w: rect.width, h: rect.height };
    resizeRef.current = { startX: e.clientX, startY: e.clientY, origW: current.w, origH: current.h };
    setSize(current);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handleResizeMove = (e: React.PointerEvent) => {
    if (!resizeRef.current) return;
    const dw = e.clientX - resizeRef.current.startX;
    const dh = e.clientY - resizeRef.current.startY;
    let nw = resizeRef.current.origW + dw;
    let nh = resizeRef.current.origH + dh;
    nw = Math.max(300, Math.min(nw, window.innerWidth - 16));
    nh = Math.max(320, Math.min(nh, window.innerHeight - 16));
    setSize({ w: nw, h: nh });
  };

  const handleResizeEnd = (e: React.PointerEvent) => {
    resizeRef.current = null;
    try { e.currentTarget.releasePointerCapture(e.pointerId); } catch { /* noop */ }
  };

  const stopDragPropagation = (e: React.PointerEvent) => {
    e.stopPropagation();
  };

  const resetChat = () => {
    setMessages([]);
    setError(null);
    try { localStorage.removeItem(STORAGE_KEY_PREFIX + topicKey); } catch { /* noop */ }
  };

  if (!isTutorAvailable()) {
    return null;
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => {
          const w = Math.min(window.innerWidth - 24, 448);
          const h = Math.min(window.innerHeight * 0.7, 500);
          setPosition({ x: window.innerWidth - w - 24, y: window.innerHeight - h - 24 });
          setIsOpen(true);
        }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3.5 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/40 hover:scale-105 transition-all"
      >
        <Sparkles className="w-5 h-5" />
        Ask AI Tutor
      </button>
    );
  }

  return (
    <div
      ref={panelRef}
      className="fixed z-50 flex flex-col rounded-2xl bg-white shadow-2xl border border-slate-200"
      style={
        size
          ? { left: position?.x ?? 8, top: position?.y ?? 8, width: size.w, height: size.h }
          : { left: position?.x ?? 8, top: position?.y ?? 8, width: 'min(100vw - 1.5rem, 28rem)', maxHeight: '70vh' }
      }
    >
      {/* Header */}
      <div
        onPointerDown={handleDragStart}
        onPointerMove={handleDragMove}
        onPointerUp={handleDragEnd}
        className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white cursor-grab active:cursor-grabbing touch-none select-none"
      >
        <div className="flex items-center gap-2 min-w-0">
          <GripVertical className="w-4 h-4 shrink-0 opacity-60" />
          <MessageCircle className="w-5 h-5 shrink-0" />
          <div className="min-w-0">
            <p className="font-semibold text-sm">AI Tutor</p>
            <p className="text-sky-100 text-xs truncate max-w-[200px]">{topicTitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-1 shrink-0" onPointerDown={stopDragPropagation}>
          {messages.length > 0 && (
            <button
              onClick={resetChat}
              className="text-sky-100 hover:text-white text-xs px-2 py-1 rounded hover:bg-white/10 transition-colors"
            >
              Clear
            </button>
          )}
          <button
            onClick={isExpanded ? collapsePanel : expandPanel}
            title={isExpanded ? 'Collapse' : 'Expand'}
            className="text-sky-100 hover:text-white p-1 rounded hover:bg-white/10 transition-colors"
          >
            {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={() => {
              handleStop();
              setIsOpen(false);
            }}
            className="text-sky-100 hover:text-white p-1 rounded hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Model selector bar */}
      <div ref={dropdownRef} className="relative flex items-center justify-between px-4 py-2 bg-slate-50 border-b border-slate-200">
        <div className="flex items-center gap-1.5 text-slate-500 text-xs">
          <Sparkles className="w-3 h-3" />
          <span>Model</span>
        </div>
        <button
          onClick={() => setShowModelDropdown(!showModelDropdown)}
          className="flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-sky-600 transition-colors"
        >
          {currentModel?.label ?? 'Select model'}
          {currentModel?.badge && (
            <span className="text-[10px] font-normal text-slate-400 bg-slate-200 px-1.5 py-0.5 rounded-full">
              {currentModel.badge}
            </span>
          )}
          {currentModel?.free && (
            <span className="text-[10px] font-normal text-emerald-600 bg-emerald-100 px-1.5 py-0.5 rounded-full">
              Free
            </span>
          )}
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showModelDropdown ? 'rotate-180' : ''}`} />
        </button>
        {showModelDropdown && (
          <div className="absolute right-3 top-full mt-1 z-10 bg-white rounded-lg shadow-lg border border-slate-200 py-1 min-w-[220px] max-h-[280px] overflow-y-auto">
            {availableModels.map((m) => (
              <button
                key={m.id}
                onClick={() => {
                  setModelId(m.id);
                  setShowModelDropdown(false);
                }}
                className={`flex items-center justify-between w-full px-3 py-2 text-sm text-left hover:bg-slate-50 transition-colors ${
                  modelId === m.id ? 'text-sky-600 font-medium' : 'text-slate-700'
                }`}
              >
                <span className="flex items-center gap-2">
                  {m.label}
                  {m.badge && (
                    <span className="text-[10px] font-normal text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded-full">
                      {m.badge}
                    </span>
                  )}
                  {m.free && (
                    <span className="text-[10px] font-normal text-emerald-600 bg-emerald-100 px-1.5 py-0.5 rounded-full">
                      Free
                    </span>
                  )}
                </span>
                {modelId === m.id && <Check className="w-3.5 h-3.5 text-sky-500" />}
              </button>
            ))}
          </div>
        )}
      </div>

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

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`group flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-sky-500 text-white rounded-br-md whitespace-pre-line'
                  : 'bg-white border border-slate-200 text-slate-700 rounded-bl-md'
              }`}
            >
              {msg.role === 'assistant'
                ? <ChatMarkdown text={msg.content} />
                : msg.content
              }
              {msg.role === 'assistant' && (
                <button
                  onClick={() => handleCopy(msg)}
                  className="mt-1.5 flex items-center gap-1 text-xs text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {copiedId === msg.id ? (
                    <><CheckIcon className="w-3 h-3" /> Copied</>
                  ) : (
                    <><Copy className="w-3 h-3" /> Copy</>
                  )}
                </button>
              )}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-md px-4 py-3 flex items-center gap-2">
              <Loader2 className="w-4 h-4 text-sky-500 animate-spin" />
              <span className="text-slate-400 text-xs">{currentModel?.label}</span>
              <button
                onClick={handleStop}
                className="ml-2 flex items-center gap-1 text-xs text-slate-500 hover:text-rose-500 transition-colors"
              >
                <Square className="w-3 h-3 fill-current" />
                Stop
              </button>
            </div>
          </div>
        )}

        {error && (
          <div className="flex flex-col gap-2 px-3 py-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-sm">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
              <span>{error}</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleRetry}
                className="flex items-center gap-1 text-xs font-medium text-rose-600 hover:text-rose-800 underline underline-offset-2"
              >
                <RotateCcw className="w-3 h-3" />
                Retry last message
              </button>
              {availableModels.length > 1 && (
                <button
                  onClick={() => setShowModelDropdown(true)}
                  className="text-xs font-medium text-rose-600 hover:text-rose-800 underline underline-offset-2"
                >
                  Try a different model
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="px-3 py-3 border-t border-slate-200 bg-white rounded-b-2xl">
        <div className="flex items-end gap-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value.slice(0, MAX_INPUT_LENGTH))}
            onKeyDown={handleKeyDown}
            placeholder="Type your question..."
            rows={1}
            maxLength={MAX_INPUT_LENGTH}
            className="flex-1 resize-none px-3 py-2 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors max-h-24"
            style={{ minHeight: '40px' }}
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={!input.trim() || loading || cooldownRemaining > 0}
            className="p-2.5 rounded-xl bg-sky-500 text-white hover:bg-sky-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center justify-between mt-1.5 px-1">
          <span className={`text-[10px] ${input.length > MAX_INPUT_LENGTH * 0.9 ? 'text-amber-500' : 'text-slate-300'}`}>
            {input.length}/{MAX_INPUT_LENGTH}
          </span>
          {cooldownRemaining > 0 && (
            <span className="text-[10px] text-slate-400">
              Please wait {Math.ceil(cooldownRemaining / 1000)}s...
            </span>
          )}
        </div>
      </div>

      {/* Resize handle */}
      <div
        onPointerDown={handleResizeStart}
        onPointerMove={handleResizeMove}
        onPointerUp={handleResizeEnd}
        className="absolute bottom-0 right-0 w-6 h-6 cursor-se-resize touch-none z-20"
      >
        <svg viewBox="0 0 10 10" className="w-full h-full text-slate-400" fill="currentColor">
          <path d="M9.5 9.5 L9.5 6.5 L6.5 9.5 Z" />
          <path d="M9.5 9.5 L9.5 3.5 L3.5 9.5 Z" opacity="0.5" />
        </svg>
      </div>
    </div>
  );
}
