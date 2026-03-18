'use client';

import { useVoiceSessionStore } from '@/lib/stores/voice-session-store';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { teslaLogoWhite } from '@/assets';

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
          src={teslaLogoWhite}
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
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-micro font-data tracking-[0.15em] text-white/80 uppercase backdrop-blur-sm border border-white/10">
              {agentName} &middot; TESLA 2030
            </span>
          </div>

          {/* Title */}
          <h1
            className="animate-slide-in-left font-hero text-display leading-[0.95] tracking-tight text-white"
            style={{ animationDelay: '0.25s' }}
          >
            The Command{' '}
            <span className="text-[#00e5ff]">
              Layer
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="animate-slide-in-left text-body text-white/60 max-w-lg"
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
      <footer className="flex items-center justify-between text-micro font-data text-white/40 uppercase tracking-widest">
        <span>43 MCP DOMAINS &middot; MAR 2030</span>
        <span>48.2M FLEET NODES &middot; 8.4M ROBOTAXI RIDES/DAY</span>
      </footer>
    </div>
  );
}
