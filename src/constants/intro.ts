import type { IntroStage } from "@/types/intro";

/** sessionStorage key marking that the intro already played this session. */
export const INTRO_SEEN_STORAGE_KEY = "pokeball-intro-seen";

/**
 * Attribute set on <html> before first paint when the intro was already seen.
 * NOTE: also referenced by name in styles/intro.css.
 */
export const INTRO_SEEN_HTML_ATTRIBUTE = "data-intro-seen";

/** Stage order; each animation end moves to the next entry. */
export const INTRO_STAGE_ORDER: readonly IntroStage[] = [
  "dropping",
  "opening",
  "fading",
  "done",
];

/** Keys that skip the intro. */
export const INTRO_SKIP_KEYS: readonly string[] = ["Escape", "Enter", " "];
