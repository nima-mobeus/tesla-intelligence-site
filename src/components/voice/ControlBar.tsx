'use client';

import { useState, useEffect } from 'react';
import { Mic, MicOff, MessageCircle, X, ArrowRight } from 'lucide-react';
import { useVoiceSessionStore } from '@/lib/stores/voice-session-store';
import { assets } from '@/assets';

export function ControlBar() {
  const sessionState = useVoiceSessionStore((s) => s.sessionState);
  const isMuted = useVoiceSessionStore((s) => s.isMuted);
  const isChatPanelOpen = useVoiceSessionStore((s) => s.isChatPanelOpen);
  const sceneActive = useVoiceSessionStore((s) => s.sceneActive);
  const theme = useVoiceSessionStore((s) => s.theme);
  const connect = useVoiceSessionStore((s) => s.connect);
  const disconnect = useVoiceSessionStore((s) => s.disconnect);
  const toggleMute = useVoiceSessionStore((s) => s.toggleMute);
  const toggleChatPanel = useVoiceSessionStore((s) => s.toggleChatPanel);

  const [showTalkButton, setShowTalkButton] = useState(false);

  const isConnected = sessionState === 'connected';
  const isConnecting = sessionState === 'connecting';
  const isIdle = sessionState === 'idle' || sessionState === 'error';

  // When scene is active, icons shift right to avoid overlap with slide action icons
  // Slide actions are at top-right z-45, control bar is at z-50
  const isDark = theme === 'dark';
  // On idle (landing page): always dark bg → white icons
  // On scene: depends on theme
  const iconColor = (!sceneActive || isDark) ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900';
  const iconBg = (!sceneActive || isDark) ? 'bg-white/10 hover:bg-white/20' : 'bg-black/5 hover:bg-black/10';

  // Delay TALK button appearance by 2s
  useEffect(() => {
    if (isIdle) {
      const timer = setTimeout(() => setShowTalkButton(true), 2000);
      return () => clearTimeout(timer);
    }
    setShowTalkButton(false);
  }, [isIdle]);

  // z-100 when chat open so icons float above chat panel (z-50)
  // z-60 when closed (above slide action icons at z-40)
  const zIndex = isChatPanelOpen ? 'z-[100]' : 'z-[60]';
  // Position: when connected + scene active, push below slide action icons row
  const rightOffset = isConnected && sceneActive ? 'right-4 md:right-8 top-12 md:top-14' : 'right-4 md:right-8 top-4 md:top-6';

  return (
    <div className={`fixed ${rightOffset} ${zIndex} flex items-center gap-2`}>
      {/* Before connect: TALK button + avatar thumbnail */}
      {isIdle && showTalkButton && (
        <>
          <button
            onClick={connect}
            className="start-button inline-flex items-center gap-2 rounded-none text-sm"
          >
            TALK <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/30 shadow-lg">
            <img
              src={assets.avatarProfile}
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </>
      )}

      {/* Connecting: loading spinner on avatar */}
      {isConnecting && (
        <div className="relative w-10 h-10">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/30 shadow-lg">
            <img
              src={assets.avatarProfile}
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <svg className="absolute inset-0 w-10 h-10 loading-ring" viewBox="0 0 40 40">
            <circle
              cx="20" cy="20" r="18"
              fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2"
              strokeDasharray="80 40"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}

      {/* Connected: control icons */}
      {isConnected && (
        <>
          {/* Mic toggle */}
          <button
            onClick={toggleMute}
            className={`p-2 rounded-full transition-colors ${
              isMuted
                ? 'bg-red-500/80 text-white hover:bg-red-600/80'
                : `${iconBg} ${iconColor}`
            }`}
            title={isMuted ? 'Unmute mic' : 'Mute mic'}
          >
            {isMuted ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
          </button>

          {/* Chat toggle */}
          <button
            onClick={toggleChatPanel}
            className={`p-2 rounded-full transition-colors ${
              isChatPanelOpen
                ? 'bg-red-500/80 text-white'
                : `${iconBg} ${iconColor}`
            }`}
            title={isChatPanelOpen ? 'Close chat' : 'Open chat'}
          >
            {isChatPanelOpen ? <X className="w-4 h-4" /> : <MessageCircle className="w-4 h-4" />}
          </button>

          {/* Disconnect */}
          <button
            onClick={disconnect}
            className="p-2 rounded-full bg-red-500/80 text-white hover:bg-red-600 transition-colors"
            title="Disconnect"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Avatar thumbnail */}
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/30 shadow-lg">
            <img
              src={assets.avatarProfile}
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </>
      )}
    </div>
  );
}
