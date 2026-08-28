/**
 * `localStorage` access that never throws. Reads/writes are unavailable in some contexts
 * (sandboxed iframes, "block site data", private-mode quirks); callers should degrade quietly
 * rather than break rendering.
 */
export function readLocalStorage(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function writeLocalStorage(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
  } catch {
    // ignore — persistence is best-effort
  }
}
