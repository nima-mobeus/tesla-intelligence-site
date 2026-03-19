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
      <header className="flex items-center animate-slide-in-left" style={{ animationDelay: '0s' }}>
        <Image
          src={teslaLogoWhite}
          alt="Tesla"
          className="h-5 md:h-6 w-auto"
          priority
        />
      </header>

      {/* Content — left-aligned, vertically centered */}
      <main className="flex items-center">
        <div className="max-w-4xl space-y-5 sm:space-y-6">

          {/* Badge pill */}
          <div className="animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
            <span className="inline-block rounded-full px-4 py-1.5 text-micro font-data tracking-[0.15em] uppercase backdrop-blur-sm border"
              style={{
                background: 'rgba(255, 255, 255, 0.10)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: 'rgba(255, 255, 255, 0.80)',
              }}
            >
              {agentName} &middot; Executive Observability
            </span>
          </div>

          {/* Title */}
          <h1
            className="animate-slide-in-left font-hero text-display leading-[0.95] tracking-tight text-white"
            style={{ animationDelay: '0.25s' }}
          >
            Every signal.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b4d8] to-white">
              Every decision.
            </span>
            {' '}Now.
          </h1>

          {/* Subtitle */}
          <p
            className="animate-slide-in-left text-body max-w-xl"
            style={{ animationDelay: '0.4s', color: 'rgba(255, 255, 255, 0.60)' }}
          >
            The rules changed. Leaders who see everything — in real time, across every domain — move faster, decide better, and never get surprised. This is what that looks like.
          </p>

          {/* Three market force cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 animate-slide-in-left"
            style={{ animationDelay: '0.5s' }}
          >
            <div className="card-glass" style={{ borderRadius: '0.75rem', padding: '1rem 1.25rem', animation: 'none' }}>
              <div className="text-caption font-semibold tracking-widest uppercase mb-1" style={{ color: '#00b4d8' }}>10× Output Pressure</div>
              <div className="text-caption leading-relaxed" style={{ color: 'rgba(255,255,255,0.70)' }}>Every leader must now do 10× more — AI sets a new baseline for what teams are expected to deliver.</div>
            </div>
            <div className="card-glass" style={{ borderRadius: '0.75rem', padding: '1rem 1.25rem', animation: 'none' }}>
              <div className="text-caption font-semibold tracking-widest uppercase mb-1" style={{ color: '#00b4d8' }}>AI-Native Exponentials</div>
              <div className="text-caption leading-relaxed" style={{ color: 'rgba(255,255,255,0.70)' }}>New competitors are 100× more efficient, born AI-native, without legacy cost structures or decision latency.</div>
            </div>
            <div className="card-glass" style={{ borderRadius: '0.75rem', padding: '1rem 1.25rem', animation: 'none' }}>
              <div className="text-caption font-semibold tracking-widest uppercase mb-1" style={{ color: '#00b4d8' }}>Data Observable at Scale</div>
              <div className="text-caption leading-relaxed" style={{ color: 'rgba(255,255,255,0.70)' }}>For the first time, everything is measurable in real time — creating instant action, zero-latency decisions.</div>
            </div>
          </div>

          {/* BEGIN BRIEFING button */}
          <div className="animate-slide-in-left mt-6" style={{ animationDelay: '0.65s' }}>
            <button
              onClick={connect}
              disabled={isConnecting}
              className="btn-action flex items-center gap-3 disabled:opacity-60 disabled:cursor-wait"
            >
              {isConnecting ? 'CONNECTING...' : 'BEGIN BRIEFING'}
              {!isConnecting && <ArrowRight className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="flex items-center justify-between text-micro font-data uppercase tracking-widest animate-slide-in-left"
        style={{ color: 'rgba(255, 255, 255, 0.40)', animationDelay: '0.75s' }}
      >
        <span>TESLA INTELLIGENCE &middot; REAL-TIME OBSERVABILITY &middot; MAR 2030</span>
        <span>43 MCP DOMAINS &middot; 48.2M FLEET &middot; 2.1M OPTIMUS UNITS</span>
      </footer>
    </div>
  );
}
