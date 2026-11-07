"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import {
  INTRO_SEEN_STORAGE_KEY,
  INTRO_SKIP_KEYS,
  INTRO_STAGE_ORDER,
} from "@/constants/intro";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { prefersReducedMotion } from "@/lib/media";
import { getSessionItem, setSessionItem } from "@/lib/safeStorage";
import type { IntroStage } from "@/types/intro";

const subscribeNever = () => () => {};
const shouldSkipIntro = () =>
  Boolean(getSessionItem(INTRO_SEEN_STORAGE_KEY)) || prefersReducedMotion();

/** Drives the intro stages and the once-per-session rule. */
export function useIntroSequence() {
  // Server snapshot is false so the overlay is in the first HTML; client reads storage.
  const skipped = useSyncExternalStore(subscribeNever, shouldSkipIntro, () => false);
  const [currentStage, setStage] = useState<IntroStage>("dropping");
  const stage: IntroStage = skipped ? "done" : currentStage;
  const isActive = stage !== "done";

  const finish = useCallback(() => {
    setSessionItem(INTRO_SEEN_STORAGE_KEY, "true");
    setStage("done");
  }, []);

  /** Moves to the next stage, only if still in `from` (guards duplicate events). */
  const advance = useCallback(
    (from: IntroStage) => {
      if (stage !== from) return;
      const next = INTRO_STAGE_ORDER[INTRO_STAGE_ORDER.indexOf(from) + 1];
      if (next === "done") finish();
      else setStage(next);
    },
    [stage, finish],
  );

  // Keyboard skip.
  useEffect(() => {
    if (!isActive) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (INTRO_SKIP_KEYS.includes(event.key)) finish();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isActive, finish]);

  useLockBodyScroll(isActive);

  return { stage, advance, skip: finish };
}
