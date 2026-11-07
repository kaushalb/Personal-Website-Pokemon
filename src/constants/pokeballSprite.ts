import type { PixelGrid, PixelPalette } from "@/types/pixelArt";

/** K = outline, R = red, W = white, . = transparent. 16x16, split at row 8. */
const POKEBALL_GRID: PixelGrid = [
  "....KKKKKKKK....",
  "..KKRRRRRRRRKK..",
  ".KRRRRRRRRRRRRK.",
  ".KRRRRRRRRRRRRK.",
  "KRRRRRRRRRRRRRRK",
  "KRRRRRRRRRRRRRRK",
  "KRRRRKKKKKKRRRRK",
  "KKKKKKWWWWKKKKKK",
  "KKKKKKWWWWKKKKKK",
  "KWWWWKKKKKKWWWWK",
  "KWWWWWWWWWWWWWWK",
  "KWWWWWWWWWWWWWWK",
  ".KWWWWWWWWWWWWK.",
  ".KWWWWWWWWWWWWK.",
  "..KKWWWWWWWWKK..",
  "....KKKKKKKK....",
];

const HALF_ROWS = POKEBALL_GRID.length / 2;

export const POKEBALL_TOP_GRID: PixelGrid = POKEBALL_GRID.slice(0, HALF_ROWS);
export const POKEBALL_BOTTOM_GRID: PixelGrid = POKEBALL_GRID.slice(HALF_ROWS);

/** Colors come from the shared theme tokens in styles/theme.css. */
export const POKEBALL_PALETTE: PixelPalette = {
  K: "var(--color-poke-ink)",
  R: "var(--color-poke-red)",
  W: "var(--color-poke-white)",
};
