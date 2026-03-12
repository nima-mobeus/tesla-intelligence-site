'use client';

import { useVoiceSessionStore } from '@/lib/stores/voice-session-store';
import { AgentComponentSlot } from '@/components/voice/AgentComponentSlot';
import { SceneManager } from '@/components/voice/SceneManager';

export function SceneLayout({ children }: { children: React.ReactNode }) {
  const sceneActive = useVoiceSessionStore((s) => s.sceneActive);

  // Always-immersive: no Header/Footer
  if (sceneActive) {
    return (
      <>
        <SceneManager />
        <AgentComponentSlot />
      </>
    );
  }

  return (
    <>
      {children}
      <AgentComponentSlot />
    </>
  );
}
