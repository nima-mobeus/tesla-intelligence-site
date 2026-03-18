import { create } from 'zustand';
import {
  Room,
  RoomEvent,
  ConnectionState,
  Track,
  RemoteTrack,
  RemoteTrackPublication,
  RemoteParticipant,
  Participant,
  ParticipantKind
} from 'livekit-client';
import { ComponentTemplate, SceneData } from '@/types';
import { CERTIFIED_SCENES } from '@/data/certified-scenes';

// Module-level timing anchor for click-to-speech measurement
let _connectStartTime = 0;

// Agent state from LiveKit
export type AgentState =
  | 'initializing'
  | 'listening'
  | 'thinking'
  | 'speaking';

// Connection state
export type SessionState =
  | 'idle'
  | 'connecting'
  | 'connected'
  | 'disconnecting'
  | 'error';

// Transcript entry
export interface TranscriptEntry {
  id: string;
  text: string;
  participant: 'user' | 'agent' | 'tool';
  participantName: string;
  timestamp: Date;
  isFinal: boolean;
  isAgent: boolean;
}

// UI Component from agent RPC
export interface UIComponent {
  id: string;
  templateId: string;
  data: Record<string, unknown>;
  timestamp: Date;
}

// Pre-warm data saved between prepare and activate
interface PreWarmData {
  room: Room;
  roomName: string;
  sessionId: string;
  templates: ComponentTemplate[];
  defaults: {
    avatarEnabled: boolean;
    avatarVisible: boolean;
    micMuted: boolean;
    volumeMuted: boolean;
    avatarAvailable: boolean;
  };
  agentName: string;
}

// Store state
interface VoiceSessionState {
  // Connection
  room: Room | null;
  sessionId: string | null;
  sessionState: SessionState;
  error: string | null;

  // Pre-warm (invisible to UI — room connected in background)
  _preWarm: PreWarmData | null;
  _preWarmState: 'idle' | 'warming' | 'ready' | 'failed';

  // Agent
  agentName: string | null;
  currentAgentName: string | null;
  agentState: AgentState;
  agentParticipant: RemoteParticipant | null;

  // Avatar state
  avatarEnabled: boolean;
  avatarVisible: boolean;
  avatarAvailable: boolean;
  avatarTogglePending: boolean;
  avatarVideoTrack: RemoteTrack | null;
  avatarAudioTrack: RemoteTrack | null;
  agentAudioTrack: RemoteTrack | null;
  avatarParticipant: RemoteParticipant | null;
  avatarAudioElement: HTMLAudioElement | null;
  agentAudioElement: HTMLAudioElement | null;

  // Audio
  isMuted: boolean;
  isVolumeMuted: boolean;

  // Transcripts
  transcripts: TranscriptEntry[];

  // UI Components (from agent RPC)
  uiComponents: UIComponent[];
  templates: ComponentTemplate[];

  // Scene state
  currentScene: SceneData | null;
  sceneHistory: SceneData[];
  sceneFuture: SceneData[];     // Forward stack for back/forward navigation
  sceneActive: boolean;
  sceneLoading: boolean;        // True while skeleton is shown, waiting for full scene
  sceneSkeletonLayout: string | null;  // Layout code for skeleton (e.g. "1-2-3")

  // Chat panel state
  isChatPanelOpen: boolean;

  // Theme
  theme: 'light' | 'dark';

  // Legacy overlay state (kept for compatibility)
  isOverlayExpanded: boolean;
  isOverlayVisible: boolean;

  // Actions
  preWarm: () => Promise<void>;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
  toggleMute: () => void;
  toggleVolume: () => void;
  toggleAvatarVisible: () => void;
  toggleAvatarHard: () => Promise<void>;
  sendTextMessage: (text: string) => Promise<void>;
  toggleChatPanel: () => void;
  toggleTheme: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
  setOverlayExpanded: (expanded: boolean) => void;
  setOverlayVisible: (visible: boolean) => void;
  clearTranscripts: () => void;
  addUIComponent: (component: Omit<UIComponent, 'id' | 'timestamp'>) => void;
  removeUIComponent: (id: string) => void;
  clearUIComponents: () => void;
  submitForm: (templateId: string, formId: string, values: Record<string, unknown>) => Promise<void>;

  // Scene actions
  applyScene: (payload: Record<string, any>) => void;
  clearScene: () => void;
  navigateSceneBack: () => void;
  navigateSceneForward: () => void;
  tellAgent: (message: string) => Promise<void>;
  informAgent: (message: string) => Promise<void>;
}

const AGENT_STATE_ATTRIBUTE = 'lk.agent.state';

export const useVoiceSessionStore = create<VoiceSessionState>((set, get) => ({
  // Initial state
  room: null,
  sessionId: null,
  sessionState: 'idle',
  error: null,
  _preWarm: null,
  _preWarmState: 'idle',
  agentName: null,
  currentAgentName: null,
  agentState: 'initializing',
  agentParticipant: null,

  // Avatar state
  avatarEnabled: false,
  avatarVisible: true,
  avatarAvailable: false,
  avatarTogglePending: false,
  avatarVideoTrack: null,
  avatarAudioTrack: null,
  agentAudioTrack: null,
  avatarParticipant: null,
  avatarAudioElement: null,
  agentAudioElement: null,

  isMuted: false,
  isVolumeMuted: false,
  transcripts: [],
  uiComponents: [],
  templates: [],

  // Scene state
  currentScene: null,
  sceneHistory: [],
  sceneFuture: [],
  sceneActive: false,
  sceneLoading: false,
  sceneSkeletonLayout: null,

  isChatPanelOpen: false,
  theme: 'dark',
  isOverlayExpanded: false,
  isOverlayVisible: true,

  // Pre-warm: create room + connect WebRTC in the background on page load.
  // Invisible to the user — no mic permission, no UI change.
  preWarm: async () => {
    const { _preWarmState, sessionState } = get();

    // Don't pre-warm if already warming, ready, or actively connected
    if (_preWarmState !== 'idle' && _preWarmState !== 'failed') return;
    if (sessionState === 'connected' || sessionState === 'connecting') return;

    set({ _preWarmState: 'warming' });
    const t0 = performance.now();
    console.log('[TIMING] preWarm: started');

    try {
      const widgetHost = process.env.NEXT_PUBLIC_WIDGET_HOST || 'https://app.mobeus.ai';
      const apiKey = process.env.NEXT_PUBLIC_WIDGET_API_KEY || '';

      if (!apiKey) {
        set({ _preWarmState: 'failed' });
        return;
      }

      // Call prepare endpoint — creates room, returns token (no agent dispatch)
      const response = await fetch(`${widgetHost}/api/widget/session/prepare`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ apiKey }),
      });

      console.log(`[TIMING] preWarm: +${(performance.now() - t0).toFixed(0)}ms | prepare API responded (status=${response.status})`);

      if (!response.ok) {
        console.warn('Pre-warm prepare failed:', response.status);
        set({ _preWarmState: 'failed' });
        return;
      }

      const sessionData = await response.json();

      const defaults = sessionData.defaults || {};

      // Create room and connect (WebRTC handshake happens here)
      const room = new Room({
        adaptiveStream: true,
        dynacast: true,
        audioCaptureDefaults: {
          autoGainControl: true,
          echoCancellation: true,
          noiseSuppression: true,
        },
      });

      // Set up event listeners early so they're ready when agent joins
      setupRoomEventListeners(room, set, get);

      // Connect to room — this is the WebRTC warm-up
      await room.connect(sessionData.wsUrl || sessionData.livekitUrl, sessionData.token);

      console.log(`[TIMING] preWarm: +${(performance.now() - t0).toFixed(0)}ms | room.connect() done, WebRTC warm`);

      // Pre-request mic permission so it's instant when user clicks TALK.
      // This triggers the browser permission prompt during page load (invisible warm-up).
      try {
        const micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        // Stop tracks immediately — we just needed the permission grant
        micStream.getTracks().forEach(t => t.stop());
        console.log(`[TIMING] preWarm: +${(performance.now() - t0).toFixed(0)}ms | mic permission granted`);
      } catch (micErr) {
        console.warn('Pre-warm: mic permission denied or failed (will retry on connect):', micErr);
      }

      // Do NOT register RPC handlers yet (agent not present)

      // Handle the pre-warmed room being disconnected (e.g. timeout)
      room.once(RoomEvent.Disconnected, () => {
        const { _preWarmState } = get();
        if (_preWarmState === 'ready') {
          console.log('Pre-warm: room disconnected, resetting');
          set({ _preWarm: null, _preWarmState: 'idle' });
        }
      });

      set({
        _preWarm: {
          room,
          roomName: sessionData.roomName,
          sessionId: sessionData.sessionId,
          templates: Array.isArray(sessionData.templates) ? sessionData.templates : [],
          defaults: {
            avatarEnabled: Boolean(defaults.avatarEnabled),
            avatarVisible: typeof defaults.avatarVisible === 'boolean' ? defaults.avatarVisible : true,
            micMuted: typeof defaults.micMuted === 'boolean' ? defaults.micMuted : false,
            volumeMuted: typeof defaults.volumeMuted === 'boolean' ? defaults.volumeMuted : false,
            avatarAvailable: Boolean(defaults.avatarAvailable),
          },
          agentName: sessionData.agent?.name || 'AI Assistant',
        },
        _preWarmState: 'ready',
      });
    } catch (err) {
      console.warn('Pre-warm failed (will fall back to normal flow):', err);
      set({ _preWarmState: 'failed' });
    }
  },

  // Connect to voice session — uses pre-warmed room if available, otherwise falls back
  connect: async () => {
    const { sessionState, room: existingRoom, _preWarmState, _preWarm } = get();
    const tConnect = performance.now();
    _connectStartTime = tConnect;
    console.log(`[TIMING] connect: started (preWarmState=${_preWarmState})`);

    if (sessionState !== 'idle' && sessionState !== 'error') {
      console.warn('Already connecting or connected');
      return;
    }

    // Clean up any existing room (not the pre-warm room)
    if (existingRoom) {
      await existingRoom.disconnect();
    }

    set({
      sessionState: 'connecting',
      error: null,
      transcripts: [],
      uiComponents: [],
      templates: [],
      agentState: 'initializing',
      agentName: null,
      currentAgentName: null,
      // Reset scene state
      currentScene: null,
      sceneHistory: [],
      sceneFuture: [],
      sceneActive: false,
      sceneLoading: false,
      sceneSkeletonLayout: null,
      // Reset avatar state
      avatarEnabled: false,
      avatarVisible: true,
      avatarAvailable: false,
      avatarTogglePending: false,
      avatarVideoTrack: null,
      avatarAudioTrack: null,
      agentAudioTrack: null,
      avatarParticipant: null,
      avatarAudioElement: null,
      agentAudioElement: null,
      isVolumeMuted: false,
    });

    try {
      const widgetHost = process.env.NEXT_PUBLIC_WIDGET_HOST || 'https://app.mobeus.ai';
      const apiKey = process.env.NEXT_PUBLIC_WIDGET_API_KEY || '';

      if (!apiKey) {
        throw new Error('Widget API key not configured');
      }

      // ── Fast path: pre-warmed room is ready ──
      if (_preWarmState === 'ready' && _preWarm && _preWarm.room.state === 'connected') {
        console.log(`[TIMING] connect: +${(performance.now() - tConnect).toFixed(0)}ms | using pre-warmed room: ${_preWarm.roomName}`);

        const { room, roomName, sessionId, templates, defaults, agentName } = _preWarm;

        const avatarAvailable = defaults.avatarAvailable;
        const defaultAvatarEnabled = avatarAvailable ? defaults.avatarEnabled : false;
        const defaultAvatarVisible = avatarAvailable ? defaults.avatarVisible : defaultAvatarEnabled;

        set({
          avatarEnabled: defaultAvatarEnabled,
          avatarVisible: defaultAvatarVisible,
          avatarAvailable,
          avatarTogglePending: false,
          isMuted: defaults.micMuted,
          isVolumeMuted: defaults.volumeMuted,
          agentName,
          currentAgentName: agentName,
          templates,
        });

        // Dispatch agent AND enable mic in parallel (mic permission was pre-granted in preWarm)
        const activatePromise = fetch(`${widgetHost}/api/widget/session/activate`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            apiKey,
            roomName,
          }),
        });

        const micPromise = room.localParticipant.setMicrophoneEnabled(!defaults.micMuted);

        const [activateResponse] = await Promise.all([activatePromise, micPromise]);

        console.log(`[TIMING] connect: +${(performance.now() - tConnect).toFixed(0)}ms | activate API + mic enabled (parallel)`);

        if (!activateResponse.ok) {
          const errData = await activateResponse.json().catch(() => ({}));
          throw new Error(errData.error || 'Failed to activate session');
        }

        // Register RPC handlers (agent is about to join)
        registerRpcHandlers(room, set, get);

        set({
          room,
          sessionId,
          sessionState: 'connected',
          isChatPanelOpen: true,
          isOverlayExpanded: true,
          _preWarm: null,
          _preWarmState: 'idle',
        });
        console.log(`[TIMING] connect: +${(performance.now() - tConnect).toFixed(0)}ms | CONNECTED (fast path, pre-warmed)`);
        if (typeof document !== 'undefined') {
          document.body.classList.add('chat-squeezed');
        }
        applyAudioRouting(get);

        return;
      }

      // ── Slow path: fallback (no pre-warm or pre-warm failed) ──
      console.log(`[TIMING] connect: +${(performance.now() - tConnect).toFixed(0)}ms | no pre-warm, using slow path`);

      // Clean up stale pre-warm if any
      if (_preWarm?.room) {
        try { await _preWarm.room.disconnect(); } catch {}
      }
      set({ _preWarm: null, _preWarmState: 'idle' });

      // Create session via widget API (original flow: room + agent dispatch together)
      const response = await fetch(`${widgetHost}/api/widget/session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ apiKey }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create session');
      }

      const sessionData = await response.json();

      // API response: { agent: { name }, defaults: { avatarEnabled, avatarVisible, micMuted, volumeMuted, avatarAvailable }, ... }
      const defaults = sessionData.defaults || {};
      const avatarAvailable = Boolean(defaults.avatarAvailable);
      const rawAvatarEnabled =
        typeof defaults.avatarEnabled === 'boolean'
          ? defaults.avatarEnabled
          : false;
      const defaultAvatarEnabled = avatarAvailable ? rawAvatarEnabled : false;
      const defaultAvatarVisible =
        avatarAvailable && typeof defaults.avatarVisible === 'boolean'
          ? defaults.avatarVisible
          : defaultAvatarEnabled;
      const defaultMicMuted =
        typeof defaults.micMuted === 'boolean' ? defaults.micMuted : false;
      const defaultVolumeMuted =
        typeof defaults.volumeMuted === 'boolean' ? defaults.volumeMuted : false;

      const resolvedAgentName = sessionData.agent?.name || 'AI Assistant';

      set({
        avatarEnabled: defaultAvatarEnabled,
        avatarVisible: defaultAvatarVisible,
        avatarAvailable,
        avatarTogglePending: false,
        isMuted: defaultMicMuted,
        isVolumeMuted: defaultVolumeMuted,
        agentName: resolvedAgentName,
        currentAgentName: resolvedAgentName,
      });

      // Store templates for rendering
      if (Array.isArray(sessionData.templates)) {
        set({ templates: sessionData.templates });
      } else {
        set({ templates: [] });
      }

      // Create and configure room
      const room = new Room({
        adaptiveStream: true,
        dynacast: true,
        audioCaptureDefaults: {
          autoGainControl: true,
          echoCancellation: true,
          noiseSuppression: true,
        },
      });

      // Set up event listeners
      setupRoomEventListeners(room, set, get);

      // Connect to the room
      await room.connect(sessionData.wsUrl || sessionData.livekitUrl, sessionData.token);
      console.log(`[TIMING] connect: +${(performance.now() - tConnect).toFixed(0)}ms | room.connect() done`);

      // Enable microphone
      await room.localParticipant.setMicrophoneEnabled(!defaultMicMuted);
      console.log(`[TIMING] connect: +${(performance.now() - tConnect).toFixed(0)}ms | mic enabled`);

      // Register RPC handlers for agent UI control
      registerRpcHandlers(room, set, get);

      set({
        room,
        sessionId: sessionData.sessionId,
        sessionState: 'connected',
        isChatPanelOpen: true,
        isOverlayExpanded: true,
      });
      console.log(`[TIMING] connect: +${(performance.now() - tConnect).toFixed(0)}ms | CONNECTED (slow path)`);
      if (typeof document !== 'undefined') {
        document.body.classList.add('chat-squeezed');
      }
      applyAudioRouting(get);

      // Note: No PATCH /api/sessions/{id} needed — agent shutdown callback handles persistence

    } catch (err) {
      const error = err instanceof Error ? err : new Error('Connection failed');
      set({
        sessionState: 'error',
        error: error.message,
      });
      console.error(error);
    }
  },

  // Disconnect from session
  disconnect: async () => {
    const { room, avatarAudioElement, agentAudioElement, _preWarm } = get();

    if (!room) return;

    set({ sessionState: 'disconnecting' });

    try {
      // Note: No PATCH /api/sessions/{id} needed — agent shutdown callback handles persistence
      await room.disconnect();

    } catch (err) {
      console.error('Disconnect error:', err);
    } finally {
      avatarAudioElement?.remove();
      agentAudioElement?.remove();

      // Also clean up pre-warm room if different from active room
      if (_preWarm?.room && _preWarm.room !== room) {
        try { await _preWarm.room.disconnect(); } catch {}
      }

      if (typeof document !== 'undefined') {
        document.body.classList.remove('chat-squeezed');
      }
      set({
        room: null,
        sessionId: null,
        sessionState: 'idle',
        agentState: 'initializing',
        agentParticipant: null,
        isMuted: false,
        isVolumeMuted: false,
        isChatPanelOpen: false,
        isOverlayExpanded: false,
        avatarEnabled: false,
        avatarVisible: true,
        avatarAvailable: false,
        avatarTogglePending: false,
        avatarVideoTrack: null,
        avatarAudioTrack: null,
        agentAudioTrack: null,
        avatarParticipant: null,
        avatarAudioElement: null,
        agentAudioElement: null,
        uiComponents: [],
        templates: [],
        currentScene: null,
        sceneHistory: [],
        sceneFuture: [],
        sceneActive: false,
        sceneLoading: false,
        sceneSkeletonLayout: null,
        theme: 'dark',
        _preWarm: null,
        _preWarmState: 'idle',
      });
      // Reset body to dark theme
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.body.classList.remove('chat-squeezed', 'chat-sleeping');
      }

      // Re-trigger preWarm so next connect() is fast (no slow path)
      console.log('[TIMING] disconnect: re-triggering preWarm for next session');
      setTimeout(() => get().preWarm(), 100);
    }
  },

  // Toggle microphone mute
  toggleMute: () => {
    const { room, isMuted } = get();
    if (!room?.localParticipant) return;

    const newMuted = !isMuted;
    room.localParticipant.setMicrophoneEnabled(!newMuted);
    set({ isMuted: newMuted });
  },

  // Toggle output volume (avatar audio or agent audio)
  toggleVolume: () => {
    const { isVolumeMuted } = get();
    const newMuted = !isVolumeMuted;
    set({ isVolumeMuted: newMuted });
    applyAudioRouting(get);
  },

  // Toggle avatar visibility (soft)
  toggleAvatarVisible: () => {
    const { avatarVisible } = get();
    set({ avatarVisible: !avatarVisible });
  },

  // Toggle avatar connection (hard)
  toggleAvatarHard: async () => {
    const { room, agentParticipant, avatarEnabled, avatarAvailable } = get();
    if (!room?.localParticipant || !avatarAvailable) return;

    let targetAgent = agentParticipant;
    if (!targetAgent) {
      for (const participant of room.remoteParticipants.values()) {
        if (
          participant.kind === ParticipantKind.AGENT &&
          !participant.attributes?.['lk.publish_on_behalf']
        ) {
          targetAgent = participant;
          set({ agentParticipant: participant });
          break;
        }
      }
    }

    if (!targetAgent) {
      console.warn('No agent participant available for avatar toggle');
      return;
    }

    const nextEnabled = !avatarEnabled;
    try {
      set({ avatarTogglePending: true });
      const response = await room.localParticipant.performRpc({
        destinationIdentity: targetAgent.identity,
        method: 'avatarToggle',
        payload: JSON.stringify({ enabled: nextEnabled }),
      });

      let parsed: { success?: boolean } = {};
      try {
        parsed = JSON.parse(response || '{}');
      } catch {
        parsed = {};
      }

      if (parsed.success !== false) {
        set({ avatarEnabled: nextEnabled });
        if (nextEnabled) {
          set({ avatarVisible: true });
        }
        applyAudioRouting(get);
      }
    } catch (error) {
      console.error('RPC avatarToggle error:', error);
    } finally {
      set({ avatarTogglePending: false });
    }
  },

  // Send typed text input to the agent
  sendTextMessage: async (text: string) => {
    const { room } = get();
    if (!room?.localParticipant) return;

    const trimmed = text.trim();
    if (!trimmed) return;

    try {
      await room.localParticipant.sendText(trimmed, { topic: 'lk.chat' });
      set((state) => ({
        transcripts: [
          ...state.transcripts,
          {
            id: `user-text-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
            text: trimmed,
            participant: 'user',
            participantName: 'You',
            timestamp: new Date(),
            isFinal: true,
            isAgent: false,
          },
        ],
      }));
    } catch (error) {
      console.error('Failed to send text input:', error);
    }
  },

  // Chat panel toggle
  toggleChatPanel: () => {
    const next = !get().isChatPanelOpen;
    set({ isChatPanelOpen: next });
    if (typeof document !== 'undefined') {
      if (next) {
        document.body.classList.add('chat-squeezed');
      } else {
        document.body.classList.remove('chat-squeezed');
      }
    }
  },

  // Theme controls
  toggleTheme: () => {
    const next = get().theme === 'light' ? 'dark' : 'light';
    set({ theme: next });
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('scene-theme', next);
    }
  },
  setTheme: (theme) => {
    set({ theme });
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('scene-theme', theme);
    }
  },

  // Overlay controls
  setOverlayExpanded: (expanded) => set({ isOverlayExpanded: expanded }),
  setOverlayVisible: (visible) => set({ isOverlayVisible: visible }),

  // Transcript management
  clearTranscripts: () => set({ transcripts: [] }),

  // UI Component management (for agent RPC)
  addUIComponent: (component) => {
    const newComponent: UIComponent = {
      ...component,
      id: `ui-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date(),
    };
    set((state) => ({
      uiComponents: [...state.uiComponents, newComponent],
    }));
  },

  removeUIComponent: (id) => {
    set((state) => ({
      uiComponents: state.uiComponents.filter((c) => c.id !== id),
    }));
  },

  clearUIComponents: () => set({ uiComponents: [] }),

  submitForm: async (templateId, formId, values) => {
    const { room, agentParticipant } = get();
    if (!room?.localParticipant || !agentParticipant) return;

    try {
      await room.localParticipant.performRpc({
        destinationIdentity: agentParticipant.identity,
        method: 'formSubmit',
        payload: JSON.stringify({ templateId, formId, values }),
      });
    } catch (error) {
      console.error('RPC formSubmit error:', error);
    }
  },

  // Scene actions

  // Apply a scene payload (from RPC or intercepted JSON speech).
  // If the scene has a certified ID and empty/sparse cards, fill from
  // the CERTIFIED_SCENES library.
  applyScene: (payload: Record<string, any>) => {
    let cards = payload.cards || [];
    let layout = payload.layout;
    let badge = payload.badge;
    let title = payload.title;
    let subtitle = payload.subtitle;
    let footerLeft = payload.footerLeft;
    let footerRight = payload.footerRight;

    // Certified scene fallback: if agent sent an id we recognise and
    // cards are empty or very sparse (≤1 card), use the pre-built scene.
    const sceneId = payload.id;
    if (sceneId && CERTIFIED_SCENES[sceneId]) {
      const certified = CERTIFIED_SCENES[sceneId];
      if (!cards.length || cards.length <= 1) {
        console.log(`Certified scene fallback: ${sceneId} (agent sent ${cards.length} cards, using pre-built)`);
        cards = certified.cards;
        layout = layout || certified.layout;
        badge = badge || certified.badge;
        title = title || certified.title;
        subtitle = subtitle || certified.subtitle;
        footerLeft = footerLeft || certified.footerLeft;
        footerRight = footerRight || certified.footerRight;
      }
    }

    const sceneData: SceneData = {
      id: sceneId || `scene-${Date.now()}`,
      badge,
      title,
      subtitle,
      layout,
      cards,
      maxRows: payload.maxRows,
      footerLeft,
      footerRight,
      timestamp: new Date(),
    };

    set((state) => ({
      currentScene: sceneData,
      sceneActive: true,
      sceneHistory: [...state.sceneHistory, sceneData],
      sceneFuture: [],  // New scene clears forward stack (like browser)
    }));
  },

  clearScene: () => {
    set({ sceneActive: false, currentScene: null });
    get().setTheme('dark');
  },

  navigateSceneBack: () => {
    const { sceneHistory, sceneFuture } = get();
    if (sceneHistory.length > 1) {
      const newHistory = [...sceneHistory];
      const popped = newHistory.pop()!; // Remove current
      const previous = newHistory[newHistory.length - 1];
      set({
        currentScene: previous,
        sceneHistory: newHistory,
        sceneFuture: [popped, ...sceneFuture],
        sceneActive: true,
      });
    } else if (sceneHistory.length === 1) {
      // Going back to welcome page — preserve the scene in future stack
      const popped = sceneHistory[0];
      set({
        sceneActive: false,
        currentScene: null,
        sceneHistory: [],
        sceneFuture: [popped, ...sceneFuture],
      });
      get().setTheme('dark');
    } else {
      set({ sceneActive: false, currentScene: null, sceneHistory: [] });
      get().setTheme('dark');
    }
  },

  navigateSceneForward: () => {
    const { sceneFuture, sceneHistory } = get();
    if (sceneFuture.length === 0) return;
    const [next, ...rest] = sceneFuture;
    set({
      currentScene: next,
      sceneActive: true,
      sceneHistory: [...sceneHistory, next],
      sceneFuture: rest,
    });
  },

  tellAgent: async (message: string) => {
    const { room, agentParticipant } = get();
    if (!room?.localParticipant || !agentParticipant) return;

    const trimmed = message.trim();
    if (!trimmed) return;

    try {
      // Add to transcripts as user message (visible)
      set((state) => ({
        transcripts: [
          ...state.transcripts,
          {
            id: `tell-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
            text: trimmed,
            participant: 'user' as const,
            participantName: 'You',
            timestamp: new Date(),
            isFinal: true,
            isAgent: false,
          },
        ],
      }));

      // Send RPC to agent
      await room.localParticipant.performRpc({
        destinationIdentity: agentParticipant.identity,
        method: 'tellAgent',
        payload: JSON.stringify({ message: trimmed }),
      });
    } catch (error) {
      console.error('tellAgent error:', error);
    }
  },

  informAgent: async (message: string) => {
    const { room, agentParticipant } = get();
    if (!room?.localParticipant || !agentParticipant) return;

    try {
      // NOT added to transcripts (invisible context)
      await room.localParticipant.performRpc({
        destinationIdentity: agentParticipant.identity,
        method: 'informAgent',
        payload: JSON.stringify({ message }),
      });
    } catch (error) {
      console.error('informAgent error:', error);
    }
  },
}));

function applyAudioRouting(get: () => VoiceSessionState) {
  const {
    avatarEnabled,
    isVolumeMuted,
    avatarAudioElement,
    agentAudioElement,
  } = get();

  const useAvatarAudio = avatarEnabled && !!avatarAudioElement;

  if (agentAudioElement) {
    agentAudioElement.muted = isVolumeMuted || useAvatarAudio;
  }

  if (avatarAudioElement) {
    avatarAudioElement.muted = isVolumeMuted || !useAvatarAudio;
  }
}

// Helper: Set up room event listeners
function setupRoomEventListeners(
  room: Room,
  set: (state: Partial<VoiceSessionState> | ((state: VoiceSessionState) => Partial<VoiceSessionState>)) => void,
  get: () => VoiceSessionState
) {
  // Connection state changes
  room.on(RoomEvent.ConnectionStateChanged, (connectionState: ConnectionState) => {
    console.log('Connection state:', connectionState);
    if (connectionState === ConnectionState.Disconnected) {
      const { avatarAudioElement, agentAudioElement } = get();
      avatarAudioElement?.remove();
      agentAudioElement?.remove();
      set({
        sessionState: 'idle',
        agentState: 'initializing',
        agentParticipant: null,
        room: null,
        avatarEnabled: false,
        avatarVisible: true,
        avatarAvailable: false,
        avatarTogglePending: false,
        avatarVideoTrack: null,
        avatarAudioTrack: null,
        agentAudioTrack: null,
        avatarParticipant: null,
        avatarAudioElement: null,
        agentAudioElement: null,
        isMuted: false,
        isVolumeMuted: false,
        uiComponents: [],
        templates: [],
        currentScene: null,
        sceneHistory: [],
        sceneFuture: [],
        sceneActive: false,
        sceneLoading: false,
        sceneSkeletonLayout: null,
      });
    }
  });

  // Track subscriptions (for agent/avatar audio and video)
  room.on(RoomEvent.TrackSubscribed, (track: RemoteTrack, publication: RemoteTrackPublication, participant: RemoteParticipant) => {
    console.log('Track subscribed:', track.kind, 'from', participant.identity);

    const publishOnBehalf = participant.attributes?.['lk.publish_on_behalf'];

    if (publishOnBehalf) {
      console.log('Avatar worker track received:', track.kind);

      if (track.kind === Track.Kind.Video) {
        set({
          avatarVideoTrack: track,
          avatarParticipant: participant,
        });
      } else if (track.kind === Track.Kind.Audio) {
        const audioElement = track.attach() as HTMLAudioElement;
        audioElement.id = `audio-avatar-${participant.identity}`;
        audioElement.autoplay = true;
        document.body.appendChild(audioElement);
        audioElement.play().catch((e) => console.warn('Avatar audio autoplay blocked:', e));
        set({ avatarAudioTrack: track, avatarAudioElement: audioElement });
        applyAudioRouting(get);
      }
    } else if (track.kind === Track.Kind.Audio) {
      if (participant.kind === ParticipantKind.AGENT) {
        if (_connectStartTime) {
          console.log(`[TIMING] connect: +${(performance.now() - _connectStartTime).toFixed(0)}ms | AGENT AUDIO TRACK received`);
        }
        const audioElement = track.attach() as HTMLAudioElement;
        audioElement.id = `audio-agent-${participant.identity}`;
        audioElement.autoplay = true;
        document.body.appendChild(audioElement);
        audioElement.play().catch((e) => console.warn('Agent audio autoplay blocked:', e));
        set({ agentAudioTrack: track, agentAudioElement: audioElement });
        applyAudioRouting(get);
      }
    }
  });

  room.on(RoomEvent.TrackUnsubscribed, (track: RemoteTrack, publication: RemoteTrackPublication, participant: RemoteParticipant) => {
    console.log('Track unsubscribed:', track.kind);

    if (track.kind === Track.Kind.Audio) {
      const avatarElementId = `audio-avatar-${participant.identity}`;
      const agentElementId = `audio-agent-${participant.identity}`;
      document.getElementById(avatarElementId)?.remove();
      document.getElementById(agentElementId)?.remove();
    }

    const publishOnBehalf = participant.attributes?.['lk.publish_on_behalf'];
    if (publishOnBehalf) {
      if (track.kind === Track.Kind.Video) {
        set({ avatarVideoTrack: null });
      } else if (track.kind === Track.Kind.Audio) {
        set({ avatarAudioTrack: null, avatarAudioElement: null });
        applyAudioRouting(get);
      }
    } else if (track.kind === Track.Kind.Audio && participant.kind === ParticipantKind.AGENT) {
      set({ agentAudioTrack: null, agentAudioElement: null });
      applyAudioRouting(get);
    }

    track.detach();
  });

  // Participant connected
  room.on(RoomEvent.ParticipantConnected, (participant: RemoteParticipant) => {
    console.log('Participant connected:', participant.identity, 'kind:', participant.kind);

    const publishOnBehalf = participant.attributes?.['lk.publish_on_behalf'];
    if (publishOnBehalf) {
      console.log('Avatar worker connected');
      set({ avatarParticipant: participant });
      return;
    }

    if (participant.kind === ParticipantKind.AGENT) {
      if (_connectStartTime) {
        console.log(`[TIMING] connect: +${(performance.now() - _connectStartTime).toFixed(0)}ms | AGENT JOINED: ${participant.identity}`);
      }
      set({ agentParticipant: participant });
      updateAgentStateFromAttributes(participant, set);

      participant.on('attributesChanged', (changedAttributes) => {
        if (AGENT_STATE_ATTRIBUTE in changedAttributes) {
          updateAgentStateFromAttributes(participant, set);
        }
      });
    }
  });

  // Participant disconnected
  room.on(RoomEvent.ParticipantDisconnected, (participant: RemoteParticipant) => {
    console.log('Participant disconnected:', participant.identity);

    const state = get();
    if (state.avatarParticipant?.identity === participant.identity) {
      set({
        avatarParticipant: null,
        avatarVideoTrack: null,
        avatarAudioTrack: null,
        avatarAudioElement: null,
      });
      applyAudioRouting(get);
    }
  });

  // Participant attribute changes (agent state updates)
  room.on(RoomEvent.ParticipantAttributesChanged, (changedAttributes, participant) => {
    const { agentParticipant } = get();
    if (
      participant.kind === ParticipantKind.AGENT ||
      participant.identity === agentParticipant?.identity
    ) {
      if (participant.attributes?.['lk.publish_on_behalf']) {
        return;
      }
      if (AGENT_STATE_ATTRIBUTE in changedAttributes) {
        updateAgentStateFromAttributes(participant, set);
      }
    }
  });

  // Transcription received
  let _firstAgentTranscriptLogged = false;
  room.on(RoomEvent.TranscriptionReceived, (segments, participant, publication) => {
    const { agentParticipant } = get();

    for (const segment of segments) {
      const isAgent =
        participant?.kind === ParticipantKind.AGENT ||
        participant?.identity === agentParticipant?.identity;

      // Log first agent speech for click-to-speech timing
      if (isAgent && !_firstAgentTranscriptLogged && segment.text.trim()) {
        _firstAgentTranscriptLogged = true;
        if (_connectStartTime) {
          console.log(`[TIMING] connect: +${(performance.now() - _connectStartTime).toFixed(0)}ms | FIRST AGENT SPEECH: "${segment.text.slice(0, 60)}"`);
        }
      }

      // --- Fix: Intercept JSON-like agent speech (Realtime API leak) ---
      // The Realtime API sometimes echoes set_scene function call arguments
      // as spoken text. Detect this, suppress from transcript, and route
      // the data to setScene if no scene was already set for this content.
      if (isAgent && segment.final) {
        const trimmed = segment.text.trim();
        if (trimmed.startsWith('{') && trimmed.endsWith('}')) {
          try {
            const parsed = JSON.parse(trimmed);
            // Check if it looks like set_scene args (has scene_json key or cards array)
            const scenePayload = parsed.scene_json
              ? JSON.parse(parsed.scene_json)
              : (Array.isArray(parsed.cards) ? parsed : null);

            if (scenePayload && Array.isArray(scenePayload.cards)) {
              console.log('Intercepted JSON speech → routing to setScene', scenePayload.id || '(dynamic)');
              // Route to scene handler (acts as fallback if RPC didn't fire)
              const { applyScene } = get();
              applyScene(scenePayload);
              // Suppress from transcript — don't add this segment
              continue;
            }
          } catch {
            // Not valid JSON or not a scene — fall through to normal transcript
          }
        }
      }

      const entry: TranscriptEntry = {
        id: segment.id,
        text: segment.text,
        participant: isAgent ? 'agent' : 'user',
        participantName: participant?.name || participant?.identity || 'Unknown',
        timestamp: new Date(),
        isFinal: segment.final,
        isAgent,
      };

      set((state) => {
        const existingIndex = state.transcripts.findIndex((t) => t.id === segment.id);
        if (existingIndex >= 0) {
          const updated = [...state.transcripts];
          updated[existingIndex] = entry;
          return { transcripts: updated };
        }
        return { transcripts: [...state.transcripts, entry] };
      });
    }
  });

  // ── UI Engine: Data Channel listener ──────────────────────────
  // The UI Engine publishes scene data (skeleton + full scenes) to the room
  // via LiveKit Server SDK send_data(). This runs in parallel with the voice
  // agent — both receive the same user transcript independently.
  room.on(RoomEvent.DataReceived, (payload: Uint8Array, participant, kind, topic) => {
    if (topic !== 'ui-engine:scene') return;

    try {
      const data = JSON.parse(new TextDecoder().decode(payload));
      console.log('UI Engine data received:', data.type, data.id || '');

      if (data.type === 'skeleton') {
        // Show skeleton loading state with the given layout
        set({
          sceneLoading: true,
          sceneSkeletonLayout: data.layout || '1-2-3',
          sceneActive: true,
        });
      } else if (data.type === 'scene') {
        // Full scene arrived — replace skeleton with real content
        const { applyScene } = get();
        applyScene(data);
        set({ sceneLoading: false, sceneSkeletonLayout: null });
      }
    } catch (err) {
      console.error('UI Engine data parse error:', err);
    }
  });

  // Disconnection
  room.on(RoomEvent.Disconnected, () => {
    const { avatarAudioElement, agentAudioElement } = get();
    avatarAudioElement?.remove();
    agentAudioElement?.remove();
    set({
      sessionState: 'idle',
      agentState: 'initializing',
      agentParticipant: null,
      room: null,
      avatarEnabled: false,
      avatarVisible: true,
      avatarAvailable: false,
      avatarTogglePending: false,
      avatarVideoTrack: null,
      avatarAudioTrack: null,
      agentAudioTrack: null,
      avatarParticipant: null,
      avatarAudioElement: null,
      agentAudioElement: null,
      isMuted: false,
      isVolumeMuted: false,
      uiComponents: [],
      templates: [],
      currentScene: null,
      sceneHistory: [],
      sceneFuture: [],
      sceneActive: false,
      _preWarm: null,
      _preWarmState: 'idle',
    });
    // Re-trigger preWarm for next session after unexpected disconnect
    console.log('[TIMING] room disconnected event: re-triggering preWarm');
    setTimeout(() => get().preWarm(), 100);
  });

  // Check for existing agent participants
  for (const participant of room.remoteParticipants.values()) {
    if (participant.attributes?.['lk.publish_on_behalf']) {
      set({ avatarParticipant: participant });
      continue;
    }

    if (participant.kind === ParticipantKind.AGENT) {
      set({ agentParticipant: participant });
      updateAgentStateFromAttributes(participant, set);

      participant.on('attributesChanged', (changedAttributes) => {
        if (AGENT_STATE_ATTRIBUTE in changedAttributes) {
          updateAgentStateFromAttributes(participant, set);
        }
      });
    }
  }
}

// Helper: Update agent state from participant attributes
function updateAgentStateFromAttributes(
  participant: Participant,
  set: (state: Partial<VoiceSessionState>) => void
) {
  const stateAttr = participant.attributes[AGENT_STATE_ATTRIBUTE];
  if (stateAttr) {
    set({ agentState: stateAttr as AgentState });
  }
}

// Helper: Add a tool call entry to transcripts
function addToolCallTranscript(
  set: (state: Partial<VoiceSessionState> | ((state: VoiceSessionState) => Partial<VoiceSessionState>)) => void,
  toolName: string,
  params: Record<string, unknown>
) {
  set((state) => ({
    transcripts: [
      ...state.transcripts,
      {
        id: `tool-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
        text: JSON.stringify(params),
        participant: 'tool' as const,
        participantName: toolName,
        timestamp: new Date(),
        isFinal: true,
        isAgent: false,
      },
    ],
  }));
}

// Helper: Register RPC handlers for agent UI control
function registerRpcHandlers(
  room: Room,
  set: (state: Partial<VoiceSessionState> | ((state: VoiceSessionState) => Partial<VoiceSessionState>)) => void,
  get: () => VoiceSessionState
) {
  const localParticipant = room.localParticipant;

  // Handler: Show UI component
  localParticipant.registerRpcMethod('showComponent', async (data) => {
    try {
      const payload = JSON.parse(data.payload);
      console.log('RPC: showComponent', payload);
      addToolCallTranscript(set, 'show_component', { templateId: payload.templateId, id: payload.id });
      if (!payload.templateId) {
        return JSON.stringify({ success: false, error: 'templateId is required' });
      }

      const componentId =
        typeof payload.id === 'string' && payload.id.length > 0
          ? payload.id
          : `ui-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

      set((state) => {
        const existingIndex = state.uiComponents.findIndex((c) => c.id === componentId);
        if (existingIndex >= 0) {
          const updated = [...state.uiComponents];
          updated[existingIndex] = {
            ...updated[existingIndex],
            templateId: payload.templateId,
            data: payload.data || {},
            timestamp: new Date(),
          };
          return { uiComponents: updated };
        }

        return {
          uiComponents: [
            ...state.uiComponents,
            {
              id: componentId,
              templateId: payload.templateId,
              data: payload.data || {},
              timestamp: new Date(),
            },
          ],
        };
      });

      return JSON.stringify({ success: true, id: componentId });
    } catch (error) {
      console.error('RPC showComponent error:', error);
      return JSON.stringify({ success: false, error: String(error) });
    }
  });

  // Handler: Hide/remove UI component
  localParticipant.registerRpcMethod('hideComponent', async (data) => {
    try {
      const payload = JSON.parse(data.payload);
      console.log('RPC: hideComponent', payload);
      addToolCallTranscript(set, 'hide_component', { id: payload.id });

      set((state) => ({
        uiComponents: state.uiComponents.filter((c) => c.id !== payload.id),
      }));

      return JSON.stringify({ success: true });
    } catch (error) {
      console.error('RPC hideComponent error:', error);
      return JSON.stringify({ success: false, error: String(error) });
    }
  });

  // Handler: Navigate to page (client-side navigation)
  localParticipant.registerRpcMethod('navigate', async (data) => {
    try {
      const payload = JSON.parse(data.payload);
      console.log('RPC: navigate', payload);

      // Use Next.js router for client-side navigation (preserves connection)
      window.dispatchEvent(
        new CustomEvent('agent-navigate', { detail: payload })
      );

      return JSON.stringify({ success: true });
    } catch (error) {
      console.error('RPC navigate error:', error);
      return JSON.stringify({ success: false, error: String(error) });
    }
  });

  // Handler: Clear all UI components
  localParticipant.registerRpcMethod('clearComponents', async () => {
    console.log('RPC: clearComponents');
    set({ uiComponents: [] });
    return JSON.stringify({ success: true });
  });

  // Handler: Set full-screen scene (delegates to applyScene for certified-scene logic)
  localParticipant.registerRpcMethod('setScene', async (data) => {
    try {
      const payload = JSON.parse(data.payload);
      console.log('RPC: setScene', payload);
      addToolCallTranscript(set, 'generate_scene', { sceneId: payload.id, layout: payload.layout, cards: payload.cards?.length });

      const { applyScene } = get();
      applyScene(payload);

      return JSON.stringify({ success: true });
    } catch (error) {
      console.error('RPC setScene error:', error);
      return JSON.stringify({ success: false, error: String(error) });
    }
  });

  // Handler: Clear scene (return to static page)
  localParticipant.registerRpcMethod('clearScene', async () => {
    console.log('RPC: clearScene');
    set({ sceneActive: false, currentScene: null });
    // Restore light theme when leaving scene
    get().setTheme('dark');
    return JSON.stringify({ success: true });
  });

  // Handler: Tool call notification (agent-side tools like search_knowledge)
  localParticipant.registerRpcMethod('toolCallNotification', async (data) => {
    try {
      const payload = JSON.parse(data.payload);
      console.log('RPC: toolCallNotification', payload);
      addToolCallTranscript(set, payload.toolName || 'unknown_tool', payload.params || {});
      return JSON.stringify({ success: true });
    } catch (error) {
      console.error('RPC toolCallNotification error:', error);
      return JSON.stringify({ success: false, error: String(error) });
    }
  });

  // Handler: Call site function
  localParticipant.registerRpcMethod('callSiteFunction', async (data) => {
    try {
      const payload = JSON.parse(data.payload);
      const { name, args } = payload;
      console.log('RPC: callSiteFunction', name, args);

      const fn = (window as any).__siteFunctions?.[name];
      if (!fn) {
        return JSON.stringify({ success: false, error: `Unknown site function: ${name}` });
      }

      const result = await fn(args);
      return JSON.stringify({ success: true, result });
    } catch (error) {
      console.error('RPC callSiteFunction error:', error);
      return JSON.stringify({ success: false, error: String(error) });
    }
  });
}
