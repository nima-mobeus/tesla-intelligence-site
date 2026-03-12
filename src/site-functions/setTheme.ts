/**
 * setTheme — Switch the website theme dynamically.
 *
 * @param args.theme - 'light' | 'dark'
 *
 * Registered as window.__siteFunctions.setTheme
 * The voice agent can call this via the callSiteFunction RPC.
 */
export default function setTheme(args: { theme: 'light' | 'dark' }): { success: boolean; theme: string } {
  const { theme } = args;

  if (!['light', 'dark'].includes(theme)) {
    return { success: false, theme: 'unknown' };
  }

  document.documentElement.setAttribute('data-theme', theme);

  // Also expose for direct window access
  (window as any).__currentTheme = theme;

  // Persist
  try {
    localStorage.setItem('scene-theme', theme);
  } catch {
    // ignore
  }

  return { success: true, theme };
}
