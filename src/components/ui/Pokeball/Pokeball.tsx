import { PixelSprite } from "@/components/ui/PixelSprite";
import {
  POKEBALL_BOTTOM_GRID,
  POKEBALL_PALETTE,
  POKEBALL_TOP_GRID,
} from "@/constants/pokeballSprite";
import { cn } from "@/lib/cn";

export interface PokeballProps {
  /** When true, the halves split apart. */
  isOpen?: boolean;
  /** Controls size, e.g. "w-40". Defaults to "w-full" (fills its container) when omitted. */
  className?: string;
}

/** Pixel-art pokeball built from two halves so it can open. */
export function Pokeball({ isOpen = false, className }: PokeballProps) {
  return (
    <div className={cn("flex flex-col", className ?? "w-full")}>
      <div className={cn(isOpen && "animate-pokeball-top-open")}>
        <PixelSprite grid={POKEBALL_TOP_GRID} palette={POKEBALL_PALETTE} className="block w-full" />
      </div>
      <div className={cn(isOpen && "animate-pokeball-bottom-open")}>
        <PixelSprite grid={POKEBALL_BOTTOM_GRID} palette={POKEBALL_PALETTE} className="block w-full" />
      </div>
    </div>
  );
}
