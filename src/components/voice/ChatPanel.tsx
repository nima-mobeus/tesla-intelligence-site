'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { Send } from 'lucide-react';
import { useVoiceSessionStore } from '@/lib/stores/voice-session-store';
import { assets } from '@/assets';

const SLEEP_TIMEOUT = 5000; // 5 seconds of no mouse movement → sleep

export function ChatPanel() {
  const sessionState = useVoiceSessionStore((s) => s.sessionState);
  const transcripts = useVoiceSessionStore((s) => s.transcripts);
  const isChatPanelOpen = useVoiceSessionStore((s) => s.isChatPanelOpen);
  const sendTextMessage = useVoiceSessionStore((s) => s.sendTextMessage);
  const currentAgentName = useVoiceSessionStore((s) => s.currentAgentName);

  const [textInput, setTextInput] = useState('');
  const [isSleeping, setIsSleeping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const sleepTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isConnected = sessionState === 'connected';

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [transcripts]);

  // Sleep mode: dim after mouse idle
  const resetSleep = useCallback(() => {
    setIsSleeping(false);
    if (sleepTimerRef.current) clearTimeout(sleepTimerRef.current);
    sleepTimerRef.current = setTimeout(() => setIsSleeping(true), SLEEP_TIMEOUT);
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

  const handleSend = async () => {
    const message = textInput.trim();
    if (!message) return;
    setTextInput('');
    await sendTextMessage(message);
  };

  return (
    <div
      ref={panelRef}
      className={`fixed top-0 h-dvh z-50 flex flex-col
        bg-white/10 border-l border-white/10
        transition-all duration-500 ease-out
        ${isSleeping ? 'chat-sleeping' : ''}
      `}
      style={{
        width: 'var(--glass-chat-width)',
        right: isChatPanelOpen ? '0' : 'calc(var(--glass-chat-width) * -1)',
        opacity: isChatPanelOpen ? 1 : 0,
      }}
    >
      {/* Chat messages area */}
      <div className="chat-messages-container flex-1 px-4 pt-20 pb-4 flex flex-col gap-3">
        {transcripts.length === 0 && isConnected && (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-white/30 text-sm font-voice">Conversation will appear here...</p>
          </div>
        )}

        {transcripts.filter((t) => t.isFinal || t.isAgent).map((t, i) => (
          <div
            key={t.id}
            className={`animate-chat-bubble-enter flex gap-2.5 ${
              t.participant === 'user' ? 'flex-row-reverse' : 'flex-row'
            }`}
            style={{ animationDelay: `${Math.min(i * 0.05, 0.3)}s` }}
          >
            {/* Avatar (agent only) */}
            {t.participant === 'agent' && (
              <div className="chat-avatar w-7 h-7 rounded-full overflow-hidden shrink-0 mt-1">
                <img
                  src={assets.avatarProfile}
                  alt={currentAgentName || 'Agent'}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Bubble */}
            <div
              className={`chat-message-bubble max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                t.participant === 'user'
                  ? 'bg-white/20 text-white ml-auto'
                  : 'bg-white/10 text-white/90'
              }`}
            >
              {t.text}
            </div>
          </div>
        ))}

        <div ref={messagesEndRef} />
      </div>

      {/* Text input area */}
      <div className="shrink-0 px-4 pb-4 pt-2">
        <div className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2">
          <input
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Type a message..."
            className="flex-1 bg-transparent text-white text-sm placeholder:text-white/30 focus:outline-none font-voice"
            disabled={!isConnected}
          />
          <button
            onClick={handleSend}
            disabled={!isConnected || textInput.trim().length === 0}
            className="chat-icon p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-30"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
