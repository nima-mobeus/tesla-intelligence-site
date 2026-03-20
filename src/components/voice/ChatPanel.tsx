'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { Send, Sparkles, Bot, User } from 'lucide-react';
import { useVoiceSessionStore } from '@/lib/stores/voice-session-store';

import { ToolCallIndicator } from './ToolCallIndicator';


const SLEEP_TIMEOUT = 5000;

export function ChatPanel() {
  const sessionState = useVoiceSessionStore((s) => s.sessionState);
  const transcripts = useVoiceSessionStore((s) => s.transcripts);
  const isChatPanelOpen = useVoiceSessionStore((s) => s.isChatPanelOpen);
  const sendTextMessage = useVoiceSessionStore((s) => s.sendTextMessage);


  const [textInput, setTextInput] = useState('');
  const [isSleeping, setIsSleeping] = useState(false);
  const [showToolCalls, setShowToolCalls] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const sleepTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const isConnected = sessionState === 'connected';

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [transcripts]);

  // Sleep mode: dim after mouse idle
  const resetSleep = useCallback(() => {
    setIsSleeping(false);
    if (sleepTimerRef.current) clearTimeout(sleepTimerRef.current);
    sleepTimerRef.current = setTimeout(() => {
      if (document.activeElement !== inputRef.current) {
        setIsSleeping(true);
      }
    }, SLEEP_TIMEOUT);
  }, []);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel || !isChatPanelOpen) return;

    resetSleep();
    panel.addEventListener('mousemove', resetSleep);
    panel.addEventListener('mousedown', resetSleep);

    return () => {
      panel.removeEventListener('mousemove', resetSleep);
      panel.removeEventListener('mousedown', resetSleep);
      if (sleepTimerRef.current) clearTimeout(sleepTimerRef.current);
    };
  }, [isChatPanelOpen, resetSleep]);

  useEffect(() => {
    if (isSleeping) {
      document.body.classList.add('chat-sleeping');
    } else {
      document.body.classList.remove('chat-sleeping');
    }
    return () => {
      document.body.classList.remove('chat-sleeping');
    };
  }, [isSleeping]);

  const handleSend = async () => {
    const message = textInput.trim();
    if (!message) return;
    setTextInput('');
    await sendTextMessage(message);
  };

  // Filter transcripts based on smart mode
  const visibleTranscripts = transcripts.filter((t) => {
    if (t.participant === 'tool') return showToolCalls;
    return t.isFinal || t.isAgent;
  });

  return (
    <div
      ref={panelRef}
      className={`fixed telelabor-panel top-0 h-dvh z-50 flex flex-col
        transition-[right,opacity] duration-500 ease-out
        max-xl:left-0 max-xl:right-0 max-xl:w-full
      `}
      style={{
        width: 'var(--glass-chat-width)',
        maxWidth: '100vw',
        right: isChatPanelOpen ? '0' : 'calc(-1 * var(--glass-chat-width))',
        opacity: isChatPanelOpen ? 1 : 0,
        pointerEvents: isChatPanelOpen ? 'auto' : 'none',
      }}
    >
      {/* Chat messages area — no mask (mask blocks backdrop-filter), overflow clips naturally */}
      <div
        className="chat-messages-container flex-1 px-4 pt-20 pb-4 flex flex-col gap-3 overflow-y-auto"
      >
        {transcripts.length === 0 && isConnected && (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-body font-voice" style={{ color: 'rgba(255,255,255,0.25)' }}>
              Conversation will appear here...
            </p>
          </div>
        )}

        {visibleTranscripts.map((t, i) => {
          if (t.participant === 'tool') {
            if (t.participantName === 'generate_scene') {
              return (
                <ToolCallIndicator
                  key={t.id}
                  toolName={t.participantName}
                  parameters={{}}
                  compact
                  clipboardText={t.text}
                  blurred={isChatPanelOpen}
                />
              );
            }
            let toolParams: Record<string, unknown> = {};
            try { toolParams = JSON.parse(t.text); } catch { toolParams = { raw: t.text }; }
            return (
              <ToolCallIndicator
                key={t.id}
                toolName={t.participantName}
                parameters={toolParams}
                timestamp={t.timestamp}
                blurred={isChatPanelOpen}
              />
            );
          }

          const isUser = t.participant === 'user';

          return (
            // CONFIRMED FIX: backdrop-filter only works on DIRECT children of the
            // flex-col scroll container. Debug test proved any flex wrapper breaks it.
            // Solution: bubble IS the direct child. Avatar inside the bubble.
            <div
              key={t.id}
              className={`chat-message-bubble flex gap-2 items-center max-w-[78%] sm:max-w-[72%] px-3 py-2.5 sm:px-4 sm:py-3 text-body leading-relaxed rounded-2xl overflow-hidden border ${isUser ? 'flex-row-reverse self-end ml-auto' : 'flex-row self-start mr-auto'}`}
              style={isUser ? {
                background: 'rgba(255, 255, 255, 0.10)',
                color: 'rgba(255, 255, 255, 0.95)',
                borderColor: 'rgba(255, 255, 255, 0.12)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
              } : {
                background: 'rgba(255, 255, 255, 0.07)',
                color: 'rgba(255, 255, 255, 0.90)',
                borderColor: 'rgba(255, 255, 255, 0.10)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
              }}
            >
              {/* Avatar inside the bubble */}
              <div
                className="chat-avatar w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center"
                style={{
                  background: isUser ? 'rgba(0, 180, 216, 0.15)' : 'rgba(255,255,255,0.08)',
                  border: isUser ? '1px solid rgba(0, 212, 245, 0.40)' : '1px solid rgba(255,255,255,0.15)',
                }}
              >
                {isUser
                  ? <User className="chat-icon w-3 h-3" style={{ color: 'rgba(0, 212, 245, 0.90)' }} />
                  : <Bot className="chat-icon w-3 h-3" style={{ color: 'rgba(255,255,255,0.55)' }} />
                }
              </div>
              <span>{t.text}</span>
            </div>
          );
        })}

        <div ref={messagesEndRef} />
      </div>

      {/* Text input area */}
      <div className="shrink-0 px-3 pb-4 pt-2">
        <div
          className="flex items-center gap-2 rounded-full px-3 sm:px-4 py-2 sm:py-2.5"
          style={{
            background: 'rgba(0, 0, 0, 0.20)',
            border: '1px solid rgba(255, 255, 255, 0.10)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <button
            onClick={() => setShowToolCalls(!showToolCalls)}
            className={`flex items-center justify-center w-7 h-7 transition-all duration-300 flex-shrink-0 bg-transparent ${showToolCalls ? 'text-[#00d4f5]' : 'text-white/20 hover:text-white/40'}`}
            title={showToolCalls ? 'Smart Mode: ON' : 'Smart Mode: OFF'}
          >
            <Sparkles className="w-4 h-4" />
          </button>

          <input
            ref={inputRef}
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
            onFocus={resetSleep}
            placeholder="Type a message..."
            className="flex-1 min-w-0 bg-transparent text-body placeholder:text-white/25 focus:outline-none font-voice"
            style={{ color: 'rgba(220, 232, 240, 0.92)' }}
            disabled={!isConnected}
          />
          <button
            onClick={handleSend}
            disabled={!isConnected || textInput.trim().length === 0}
            className="chat-icon p-1.5 rounded-lg transition-colors disabled:opacity-20"
            style={{ color: 'rgba(0, 212, 245, 0.80)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(0, 212, 245, 1)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(0, 212, 245, 0.80)')}
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
