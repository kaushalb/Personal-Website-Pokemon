/** True when the user asked the OS/browser to minimize motion. Client-only. */
export function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
