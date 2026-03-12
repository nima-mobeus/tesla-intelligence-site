'use client';

import { useVoiceSessionStore } from '@/lib/stores/voice-session-store';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { teslaLogo } from '@/assets';

const agentName = process.env.NEXT_PUBLIC_AGENT_NAME || 'Tesla Intelligence';

export function WelcomeLanding() {
  const connect = useVoiceSessionStore((s) => s.connect);
  const sessionState = useVoiceSessionStore((s) => s.sessionState);

  const isConnecting = sessionState === 'connecting';

  return (
    <div className="min-h-dvh lg:h-dvh lg:overflow-hidden grid grid-rows-[auto_1fr_auto] p-3 md:p-6 lg:p-8">
      {/* Header — logo top-left */}
      <header className="flex items-center">
        <Image
          src={teslaLogo}
          alt="Tesla"
          className="h-5 md:h-6 w-auto"
          priority
        />
      </header>

      {/* Content — left-aligned, vertically centered */}
      <main className="flex items-center">
        <div className="max-w-2xl space-y-6">
          {/* Badge pill */}
          <div
            className="animate-slide-in-left"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="inline-block rounded-full bg-gray-900/80 px-4 py-1.5 text-xs font-data tracking-[0.15em] text-white uppercase">
              {agentName} &middot; TESLA 2030
            </span>
          </div>

          {/* Title */}
          <h1
            className="animate-slide-in-left font-hero text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-gray-900"
            style={{ animationDelay: '0.25s' }}
          >
            The Command{' '}
            <span className="bg-gradient-to-r from-gray-900 via-gray-600 to-gray-400 bg-clip-text text-transparent">
              Layer
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="animate-slide-in-left text-base sm:text-lg md:text-xl text-gray-600 max-w-lg"
            style={{ animationDelay: '0.4s' }}
          >
            48.2M vehicles &middot; 8 gigafactories &middot; 1.2M Optimus units &middot; 8.4M robotaxi rides/day
          </p>

          {/* BEGIN BRIEFING button */}
          <div
            className="animate-slide-in-left"
            style={{ animationDelay: '0.55s' }}
          >
            <button
              onClick={connect}
              disabled={isConnecting}
              className="start-button inline-flex items-center gap-3 rounded-none disabled:opacity-60"
            >
              {isConnecting ? 'CONNECTING...' : 'BEGIN BRIEFING'}
              {!isConnecting && <ArrowRight className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-between text-[10px] sm:text-xs font-data text-gray-400 uppercase tracking-widest">
        <span>43 MCP DOMAINS &middot; MAR 2030</span>
        <span>48.2M FLEET NODES &middot; 8.4M ROBOTAXI RIDES/DAY</span>
      </footer>
    </div>
  );
}
