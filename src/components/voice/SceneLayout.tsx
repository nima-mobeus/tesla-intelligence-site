'use client';

import { useVoiceSessionStore } from '@/lib/stores/voice-session-store';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AgentComponentSlot } from '@/components/voice/AgentComponentSlot';
import { SceneManager } from '@/components/voice/SceneManager';

export function SceneLayout({ children }: { children: React.ReactNode }) {
  const sceneActive = useVoiceSessionStore((s) => s.sceneActive);

  if (sceneActive) {
    return <SceneManager />;
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <AgentComponentSlot />
      <Footer />
    </>
  );
}
