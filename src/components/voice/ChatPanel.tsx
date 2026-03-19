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
        border-l-0
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
      {/* Chat messages area */}
      <div className="chat-messages-container flex-1 px-3 sm:px-4 pt-20 pb-2 space-y-3 sm:space-y-4">
        {transcripts.length === 0 && isConnected && (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-body font-voice" style={{ color: 'rgba(255,255,255,0.30)' }}>
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
              />
            );
          }

          const isUser = t.participant === 'user';

          return (
            <div
              key={t.id}
              className={`chat-bubble-row flex ${isUser ? 'justify-end' : 'justify-start'} items-start space-x-2 animate-chat-bubble-enter opacity-0`}
              style={{ animationDelay: `${Math.min(i * 0.05, 0.3)}s` }}
            >
              {/* Agent avatar */}
              {!isUser && (
                <div className="chat-avatar w-7 h-7 sm:w-9 sm:h-9 rounded-full backdrop-blur-sm flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'rgba(0, 180, 216, 0.10)',
                    border: '1px solid rgba(0, 180, 216, 0.20)',
                  }}
                >
                  <Bot className="chat-icon w-4 h-4 sm:w-5 sm:h-5" style={{ color: 'rgba(0, 180, 216, 0.80)' }} />
                </div>
              )}

              {/* Bubble */}
              <div
                className="chat-message-bubble max-w-[75%] sm:max-w-[70%] p-3 sm:p-4 rounded-2xl transition-all duration-500 hover:brightness-110 hover:shadow-lg text-sm sm:text-base"
                style={{
                  background: 'var(--theme-chat-bubble)',
                  border: 'none',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.10)',
                  color: 'var(--theme-chat-text)',
                }}
              >
                {t.text}
              </div>

              {/* User avatar */}
              {isUser && (
                <div className="chat-avatar w-7 h-7 sm:w-9 sm:h-9 rounded-full backdrop-blur-sm flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'rgba(0, 180, 216, 0.10)',
                    border: '1px solid rgba(0, 180, 216, 0.20)',
                  }}
                >
                  <User className="chat-icon w-4 h-4 sm:w-5 sm:h-5" style={{ color: 'rgba(0, 180, 216, 0.80)' }} />
                </div>
              )}
            </div>
          );
        })}

        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input Area */}
      <div className="px-3 sm:px-4 pb-4 pt-2">
        <div className="flex items-center gap-1.5 py-2 sm:py-3">
          {/* Smart Mode sparkle toggle */}
          <button
            onClick={() => setShowToolCalls(!showToolCalls)}
            className={`flex items-center justify-center w-7 h-7 transition-all duration-300 flex-shrink-0 bg-transparent
              ${showToolCalls ? 'text-[#00b4d8]' : 'text-white/25 hover:text-white/50'}`}
            title={showToolCalls ? 'Smart Mode: ON' : 'Smart Mode: OFF'}
          >
            <Sparkles className="w-4 h-4" />
          </button>

          <input
            ref={inputRef}
            type="text"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
            placeholder="Type your message..."
            className="flex-1 min-w-0 px-3 sm:px-4 py-2 sm:py-2.5 backdrop-blur-sm rounded-full text-white placeholder:text-white/30 text-sm transition-all duration-300 focus:outline-none"
            style={{
              background: 'rgba(0, 0, 0, 0.40)',
              border: '1px solid rgba(0, 180, 216, 0.15)',
            }}
            onFocus={(e) => { resetSleep(); e.currentTarget.style.borderColor = 'rgba(0, 180, 216, 0.40)'; e.currentTarget.style.background = 'rgba(0, 0, 0, 0.50)'; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(0, 180, 216, 0.15)'; e.currentTarget.style.background = 'rgba(0, 0, 0, 0.40)'; }}
            disabled={!isConnected}
          />

          <button
            onClick={handleSend}
            disabled={!isConnected || textInput.trim().length === 0}
            className="chat-icon p-2 rounded-full transition-all duration-200 disabled:opacity-20"
            style={{
              background: 'rgba(0, 180, 216, 0.15)',
              border: '1px solid rgba(0, 180, 216, 0.25)',
              color: 'rgba(0, 180, 216, 0.90)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(0, 180, 216, 0.25)'; e.currentTarget.style.color = 'rgba(0, 212, 245, 1)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(0, 180, 216, 0.15)'; e.currentTarget.style.color = 'rgba(0, 180, 216, 0.90)'; }}
          >
            <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
