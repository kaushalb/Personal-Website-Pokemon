/** sessionStorage wrappers that never throw (private mode, SSR, blocked storage). */

export function getSessionItem(key: string): string | null {
  try {
    return window.sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

export function setSessionItem(key: string, value: string): void {
  try {
    window.sessionStorage.setItem(key, value);
  } catch {
    // Storage unavailable; the intro will simply replay next load.
  }
}
