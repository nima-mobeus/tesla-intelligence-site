'use client';

import { useVoiceSessionStore } from '@/lib/stores/voice-session-store';
import { getComponent } from '@/components/tele-components/component-registry';
import { Suspense, useMemo, useCallback } from 'react';
import Image from 'next/image';
import { teslaLogoWhite } from '@/assets';
import { ChevronLeft } from 'lucide-react';

export function SceneManager() {
  const currentScene = useVoiceSessionStore((s) => s.currentScene);
  const sceneActive = useVoiceSessionStore((s) => s.sceneActive);
  const navigateSceneBack = useVoiceSessionStore((s) => s.navigateSceneBack);
  const sceneHistory = useVoiceSessionStore((s) => s.sceneHistory);
  const tellAgent = useVoiceSessionStore((s) => s.tellAgent);
  const avatarVideoTrack = useVoiceSessionStore((s) => s.avatarVideoTrack);
  const avatarEnabled = useVoiceSessionStore((s) => s.avatarEnabled);
  const avatarVisible = useVoiceSessionStore((s) => s.avatarVisible);

  const GridView = useMemo(() => getComponent('GridView'), []);

  const handleAction = useCallback(
    (phrase: string) => {
      tellAgent(phrase);
    },
    [tellAgent]
  );

  if (!sceneActive || !currentScene) return null;

  const hasHistory = sceneHistory.length > 1;

  return (
    <div className="fixed inset-0 z-40 bg-gray-950 text-white overflow-hidden grid grid-rows-[auto_1fr_auto] p-3 md:p-6 lg:p-8">
      {/* Avatar background layer */}
      {avatarEnabled && avatarVisible && avatarVideoTrack && (
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <video
            ref={(el) => {
              if (el && avatarVideoTrack) {
                avatarVideoTrack.attach(el);
              }
            }}
            autoPlay
            playsInline
            muted
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Header row — logo + badge + back button */}
      <header className="relative z-10 flex items-center gap-4 shrink-0">
        <Image
          src={teslaLogoWhite}
          alt="Tesla"
          className="h-5 md:h-6 w-auto"
          priority
        />
        {currentScene.badge && (
          <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-[10px] font-data tracking-[0.15em] text-white/70 uppercase">
            {currentScene.badge}
          </span>
        )}
        {hasHistory && (
          <button
            onClick={navigateSceneBack}
            className="flex items-center gap-1 text-sm text-white/50 hover:text-white transition-colors ml-auto"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>
        )}
      </header>

      {/* Content row — title + GridView */}
      <main className="relative z-10 flex flex-col min-h-0 pt-4">
        {/* Title */}
        {(currentScene.title || currentScene.subtitle) && (
          <div className="shrink-0 pb-4">
            {currentScene.title && (
              <h1 className="font-hero text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
                {currentScene.title}
              </h1>
            )}
            {currentScene.subtitle && (
              <p className="text-sm text-white/60 mt-1 font-voice">
                {currentScene.subtitle}
              </p>
            )}
          </div>
        )}

        {/* Grid content */}
        <div className="flex-1 overflow-auto min-h-0">
          {GridView && currentScene.cards && currentScene.cards.length > 0 ? (
            <Suspense
              fallback={
                <div className="animate-pulse h-full bg-white/5 rounded-xl" />
              }
            >
              <GridView
                data={{
                  layout: currentScene.layout,
                  cards: currentScene.cards,
                  maxRows: currentScene.maxRows,
                }}
                accentColor="#3b82f6"
                onAction={handleAction}
              />
            </Suspense>
          ) : (
            <div className="flex items-center justify-center h-full text-white/40">
              No content to display
            </div>
          )}
        </div>
      </main>

      {/* Footer row */}
      <footer className="relative z-10 flex items-center justify-between text-[10px] sm:text-xs font-data text-white/40 uppercase tracking-widest shrink-0 pt-2">
        <span>{currentScene.footerLeft || ''}</span>
        <span>{currentScene.footerRight || ''}</span>
      </footer>
    </div>
  );
}
