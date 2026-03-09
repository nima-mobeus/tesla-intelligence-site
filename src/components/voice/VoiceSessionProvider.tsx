'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useVoiceSessionStore } from '@/lib/stores/voice-session-store';
import { registerSiteFunctions } from '@/site-functions/register';

interface VoiceSessionProviderProps {
  children: React.ReactNode;
}

export function VoiceSessionProvider({ children }: VoiceSessionProviderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const disconnect = useVoiceSessionStore((state) => state.disconnect);
  const preWarm = useVoiceSessionStore((state) => state.preWarm);

  // Pre-warm the LiveKit room on page load.
  // This establishes the WebRTC connection in the background so that
  // when the user clicks "Start", we only need to dispatch the agent
  // (saving ~1-2s of WebRTC handshake time).
  useEffect(() => {
    preWarm();
  }, [preWarm]);

  // Listen for agent navigation commands
  useEffect(() => {
    const handleAgentNavigate = (event: CustomEvent) => {
      const { page, params } = event.detail;

      // Build URL with params
      let url = page;
      if (params && Object.keys(params).length > 0) {
        const searchParams = new URLSearchParams(params);
        url = `${page}?${searchParams.toString()}`;
      }

      // If scene is active, clear it before navigating
      const { sceneActive, clearScene, informAgent } = useVoiceSessionStore.getState();
      if (sceneActive) {
        clearScene();
      }

      // Use Next.js router for client-side navigation
      // This preserves the voice connection!
      router.push(url);

      // Inform agent about the navigation
      informAgent(`User navigated to ${url}. The scene has been dismissed.`);
    };

    window.addEventListener('agent-navigate', handleAgentNavigate as EventListener);

    return () => {
      window.removeEventListener('agent-navigate', handleAgentNavigate as EventListener);
    };
  }, [router]);

  // Inform agent when user navigates while scene is active (via Next.js <Link> clicks)
  useEffect(() => {
    const { sceneActive, clearScene, informAgent, sessionState } = useVoiceSessionStore.getState();

    if (sceneActive && sessionState === 'connected') {
      clearScene();
      informAgent(`User navigated to ${pathname}. The scene has been dismissed.`);
    }
  }, [pathname]);

  // Register site functions on window.__siteFunctions
  useEffect(() => {
    registerSiteFunctions();
  }, []);

  // Cleanup on unmount (app close)
  useEffect(() => {
    const handleBeforeUnload = () => {
      disconnect();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [disconnect]);

  return <>{children}</>;
}
