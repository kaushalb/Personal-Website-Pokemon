"use client";

import type { AnimationEvent } from "react";
import { Pokeball } from "@/components/ui/Pokeball";
import { cn } from "@/lib/cn";
import type { IntroStage } from "@/types/intro";
import { useIntroSequence } from "../hooks/useIntroSequence";

/** Ignores animation events bubbling up from child elements. */
function onOwnAnimationEnd(handler: () => void) {
  return (event: AnimationEvent<HTMLElement>) => {
    if (event.target === event.currentTarget) handler();
  };
}

/** Full-screen intro: pokeball drops, opens with a flash, then reveals the page. */
export function IntroOverlay() {
  const { stage, advance, skip } = useIntroSequence();
  const isPast = (s: IntroStage) => stage === s;

  if (stage === "done") return null;

  return (
    <div
      data-intro-overlay
      aria-hidden="true"
      onClick={skip}
      onAnimationEnd={onOwnAnimationEnd(() => advance("fading"))}
      className={cn(
        "fixed inset-0 z-50 grid cursor-pointer place-items-center overflow-hidden bg-poke-blue-dark",
        isPast("fading") && "animate-intro-fade",
      )}
    >
      <div
        className="w-40 animate-pokeball-drop"
        onAnimationEnd={onOwnAnimationEnd(() => advance("dropping"))}
      >
        <Pokeball isOpen={!isPast("dropping")} />
      </div>

      {!isPast("dropping") && (
        <div
          className="absolute inset-0 m-auto size-[10vmin] animate-pokeball-flash rounded-full bg-poke-white"
          onAnimationEnd={onOwnAnimationEnd(() => advance("opening"))}
        />
      )}

      <p className="absolute bottom-6 text-xs text-poke-white/60">Click or press Enter to skip</p>
    </div>
  );
}
