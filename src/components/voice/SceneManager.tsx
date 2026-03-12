'use client';

import { useVoiceSessionStore } from '@/lib/stores/voice-session-store';
import { getComponent } from '@/components/tele-components/component-registry';
import { Suspense, useMemo, useCallback } from 'react';
import Image from 'next/image';
import { teslaLogoWhite, teslaLogo } from '@/assets';
import { ChevronLeft, Sun, Moon, Camera, Download, Mail, Link2 } from 'lucide-react';

export function SceneManager() {
  const currentScene = useVoiceSessionStore((s) => s.currentScene);
  const sceneActive = useVoiceSessionStore((s) => s.sceneActive);
  const navigateSceneBack = useVoiceSessionStore((s) => s.navigateSceneBack);
  const sceneHistory = useVoiceSessionStore((s) => s.sceneHistory);
  const tellAgent = useVoiceSessionStore((s) => s.tellAgent);
  const avatarVideoTrack = useVoiceSessionStore((s) => s.avatarVideoTrack);
  const avatarEnabled = useVoiceSessionStore((s) => s.avatarEnabled);
  const avatarVisible = useVoiceSessionStore((s) => s.avatarVisible);
  const theme = useVoiceSessionStore((s) => s.theme);
  const toggleTheme = useVoiceSessionStore((s) => s.toggleTheme);

  const GridView = useMemo(() => getComponent('GridView'), []);

  const handleAction = useCallback(
    (phrase: string) => {
      tellAgent(phrase);
    },
    [tellAgent]
  );

  const handleScreenshot = useCallback(() => {
    tellAgent('Take a screenshot of this briefing for me.');
  }, [tellAgent]);

  const handleEmail = useCallback(() => {
    tellAgent('Email me this briefing.');
  }, [tellAgent]);

  const handleCreateDoc = useCallback(() => {
    tellAgent('Create a Google Doc from this briefing.');
  }, [tellAgent]);

  if (!sceneActive || !currentScene) return null;

  const hasHistory = sceneHistory.length > 1;
  const isDark = theme === 'dark';
  const logoSrc = isDark ? teslaLogoWhite : teslaLogo;

  return (
    <div className="relative w-full lg:h-dvh overflow-hidden grid grid-rows-[auto_1fr_auto] p-3 md:p-6 lg:p-8">
      {/* Semi-transparent background overlay with gradient for avatar peek-through */}
      <div className="absolute inset-0 z-0 scene-gradient-overlay" />

      {/* Avatar background layer (visible through gradient) */}
      {avatarEnabled && avatarVisible && avatarVideoTrack && (
        <div className="absolute inset-0 z-[-1] pointer-events-none">
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
            style={{
              filter: `brightness(var(--theme-video-brightness)) saturate(var(--theme-video-saturate))`,
            }}
          />
        </div>
      )}

      {/* Slide action icons — fixed to viewport, shifts left on chat squeeze */}
      <div className="slide-action-icons fixed top-3 right-3 md:top-6 md:right-6 z-[60] flex items-center gap-1.5">
        <ActionIcon icon={isDark ? Sun : Moon} onClick={toggleTheme} title="Toggle theme" />
        <ActionIcon icon={Camera} onClick={handleScreenshot} title="Screenshot" />
        <ActionIcon icon={Download} onClick={handleScreenshot} title="Download" />
        <ActionIcon icon={Mail} onClick={handleEmail} title="Email briefing" />
        <ActionIcon icon={Link2} onClick={handleCreateDoc} title="Create document" />
      </div>

      {/* Header row — logo + badge + back button */}
      <header className="relative z-10 flex items-center gap-4 shrink-0">
        <Image
          src={logoSrc}
          alt="Tesla"
          className="h-5 md:h-6 w-auto"
          priority
        />
        {currentScene.badge && (
          <span
            className="inline-block rounded-full px-3 py-1 text-[10px] font-data tracking-[0.15em] uppercase"
            style={{
              background: 'var(--theme-scene-badge-bg)',
              color: 'var(--theme-scene-badge-text)',
            }}
          >
            {currentScene.badge}
          </span>
        )}
        {hasHistory && (
          <button
            onClick={navigateSceneBack}
            className="flex items-center gap-1 text-sm transition-colors ml-auto"
            style={{ color: 'var(--theme-scene-text-muted)' }}
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
              <h1
                className="font-hero text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight"
                style={{ color: 'var(--theme-scene-text)' }}
              >
                {currentScene.title}
              </h1>
            )}
            {currentScene.subtitle && (
              <p
                className="text-sm mt-1 font-voice"
                style={{ color: 'var(--theme-scene-text-muted)' }}
              >
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
                <div className="animate-pulse h-full rounded-xl" style={{ background: 'var(--theme-card-bg)' }} />
              }
            >
              <GridView
                data={{
                  layout: currentScene.layout,
                  cards: currentScene.cards,
                  maxRows: currentScene.maxRows,
                }}
                accentColor={isDark ? '#3b82f6' : '#1e293b'}
                onAction={handleAction}
              />
            </Suspense>
          ) : (
            <div className="flex items-center justify-center h-full" style={{ color: 'var(--theme-scene-text-muted)' }}>
              No content to display
            </div>
          )}
        </div>
      </main>

      {/* Footer row */}
      <footer
        className="relative z-10 flex items-center justify-between text-[10px] sm:text-xs font-data uppercase tracking-widest shrink-0 pt-2"
        style={{ color: 'var(--theme-scene-footer)' }}
      >
        <span>{currentScene.footerLeft || ''}</span>
        <span>{currentScene.footerRight || ''}</span>
      </footer>
    </div>
  );
}

/** Small icon button for slide actions */
function ActionIcon({ icon: Icon, onClick, title }: {
  icon: React.ComponentType<{ className?: string }>;
  onClick: () => void;
  title: string;
}) {
  return (
    <button
      onClick={onClick}
      title={title}
      className="p-1.5 rounded-md transition-colors hover:scale-105"
      style={{ color: 'var(--theme-action-btn)' }}
      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--theme-action-btn-hover)'}
      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--theme-action-btn)'}
    >
      <Icon className="w-4 h-4" />
    </button>
  );
}
