/**
 * Shared types for tele-components.
 *
 * Every tele-component receives these base props from DynamicComponentRenderer.
 * Component-specific props extend this interface.
 */

export interface TeleComponentProps {
  /** Merged data from template defaults + agent-provided overrides */
  data: Record<string, any>;
  /** The accent color — provided by SceneManager (dark: #00d4f5, light: #00b4d8) */
  accentColor?: string;
  /** Callback the agent can use via CTA buttons — sends an action phrase back to the voice agent */
  onAction?: (actionPhrase: string) => void;
}
