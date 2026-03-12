'use client';

import { useVoiceSessionStore } from '@/lib/stores/voice-session-store';
import { assets } from '@/assets';

export function BackgroundLayer() {
  const sessionState = useVoiceSessionStore((s) => s.sessionState);
  const agentState = useVoiceSessionStore((s) => s.agentState);

  const isConnected = sessionState === 'connected';
  const isConnecting = sessionState === 'connecting';
  const showPulse = isConnecting || (isConnected && agentState === 'thinking');

  return (
    <>
      {/* Base hero background — always visible */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: -1,
          pointerEvents: 'none',
          backgroundImage: `url(${assets.backgroundHero})`,
          backgroundPosition: 'right top',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          minWidth: '100vw',
          minHeight: '100vh',
          opacity: isConnected ? 1 : 0.8,
          filter: 'brightness(1.25) saturate(1)',
          transition: 'opacity 0.6s ease',
        }}
      />

      {/* Pulsing overlay — visible while connecting or thinking */}
      {showPulse && (
        <div
          className="hero-pulse-overlay"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: -1,
            pointerEvents: 'none',
            backgroundImage: `url(${assets.backgroundHero})`,
            backgroundPosition: 'right top',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            minWidth: '100vw',
            minHeight: '100vh',
          }}
        />
      )}
    </>
  );
}
