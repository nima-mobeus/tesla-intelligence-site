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
          className="h-6 md:h-8 w-auto"
          priority
        />
      </header>

      {/* Content — left-aligned, vertically centered */}
      <main className="flex items-center">
        <div className="max-w-4xl space-y-5 sm:space-y-6">

          {/* Badge — dark pill, exact project-elon style */}
          <div className="animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
            <span
              className="inline-block px-4 py-1 rounded-full backdrop-blur-md"
              style={{
                background: 'rgba(68, 62, 68, 0.85)',
                border: '1px solid rgba(68, 62, 68, 0.30)',
                color: 'white',
                fontFamily: 'var(--font-data)',
                fontSize: '0.875rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
              }}
            >
              {agentName} · Executive Observability
            </span>
          </div>

          {/* Title — large hero, exact project-elon sizing */}
          <h1
            className="text-white leading-[0.9] tracking-tight animate-slide-in-left"
            style={{
              fontFamily: 'var(--font-hero)',
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              animationDelay: '0.2s',
            }}
          >
            Every signal.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b4d8] to-white">
              Every decision.
            </span>
            {' '}Now.
          </h1>

          {/* Subtitle — larger, with left amber border like project-elon */}
          <p
            className="max-w-2xl leading-relaxed font-light animate-slide-in-left"
            style={{
              fontFamily: 'var(--font-voice)',
              fontSize: 'clamp(1rem, 2vw, 1.5rem)',
              color: 'rgba(255,255,255,0.80)',
              borderLeft: '2px solid rgba(0, 180, 216, 0.40)',
              paddingLeft: '1.25rem',
              animationDelay: '0.3s',
            }}
          >
            The rules changed. Leaders who see everything — in real time, across every domain — move faster, decide better, and never get surprised. This is what that looks like.
          </p>

          {/* Three market force cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 animate-slide-in-left"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="card-glass" style={{ borderRadius: '0.75rem', padding: '1rem 1.25rem', animation: 'none' }}>
              <div className="text-sm font-semibold tracking-widest uppercase mb-1" style={{ color: '#00b4d8' }}>10× Output Pressure</div>
              <div className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.80)' }}>Every leader must now do 10× more — AI sets a new baseline for what teams are expected to deliver.</div>
            </div>
            <div className="card-glass" style={{ borderRadius: '0.75rem', padding: '1rem 1.25rem', animation: 'none' }}>
              <div className="text-sm font-semibold tracking-widest uppercase mb-1" style={{ color: '#00b4d8' }}>AI-Native Exponentials</div>
              <div className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.80)' }}>New competitors are 100× more efficient, born AI-native, without legacy cost structures or decision latency.</div>
            </div>
            <div className="card-glass" style={{ borderRadius: '0.75rem', padding: '1rem 1.25rem', animation: 'none' }}>
              <div className="text-sm font-semibold tracking-widest uppercase mb-1" style={{ color: '#00b4d8' }}>Data Observable at Scale</div>
              <div className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.80)' }}>For the first time, everything is measurable in real time — creating instant action, zero-latency decisions, and frictionless pivots.</div>
            </div>
          </div>

          {/* BEGIN BRIEFING */}
          <div className="animate-slide-in-left" style={{ animationDelay: '0.55s' }}>
            <button
              onClick={connect}
              disabled={isConnecting}
              className="btn-action flex items-center gap-3 disabled:opacity-50 disabled:cursor-wait"
            >
              {isConnecting ? 'CONNECTING...' : 'BEGIN BRIEFING'}
              {!isConnecting && <ArrowRight className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="flex items-center justify-between uppercase animate-slide-in-left"
        style={{
          fontFamily: 'var(--font-data)',
          fontSize: '0.6875rem',
          letterSpacing: '0.1em',
          color: 'rgba(255,255,255,0.40)',
          animationDelay: '0.65s',
        }}
      >
        <span>TESLA INTELLIGENCE · REAL-TIME OBSERVABILITY · MAR 2030</span>
        <span>43 MCP DOMAINS · 48.2M FLEET · 2.1M OPTIMUS UNITS</span>
      </footer>

    </div>
  );
}
