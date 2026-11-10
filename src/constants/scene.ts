import type { PixelGrid, PixelPalette } from "@/types/pixelArt";

/** W = white, B = shaded underside, . = transparent. 24x7. */
export const CLOUD_GRID: PixelGrid = [
  "........WWWW............",
  "......WWWWWWWW...WWWW...",
  "....WWWWWWWWWWWWWWWWWW..",
  "..WWWWWWWWWWWWWWWWWWWWWW",
  ".WWWWWWWWWWWWWWWWWWWWWWW",
  ".BBBBBBBBBBBBBBBBBBBBBBB",
  "..BBBBBBBBBBBBBBBBBBBB..",
];

export const CLOUD_PALETTE: PixelPalette = { W: "#ffffff", B: "#cfe8fa" };

/** D = dark blade, L = light blade, . = transparent. One 8x8 tuft of tall grass. */
const TUFT: PixelGrid = [
  "...D....",
  "D..DL..D",
  "DL.DL.DL",
  "DLDDLDDL",
  "DLLDLLDL",
  "DDLDDLDD",
  "........",
  "........",
];

const BLANK = "........";

/** 16x16 repeating tile: two tufts on a diagonal so the field looks staggered. */
export const GRASS_TILE: PixelGrid = [
  ...TUFT.map((row) => row + BLANK),
  ...TUFT.map((row) => BLANK + row),
];

export const GRASS_PALETTE: PixelPalette = { D: "#2f7a24", L: "#9be36d" };

/** Screen pixels per art pixel for the grass tile. */
export const GRASS_SCALE = 6;

/** Where the horizon sits, as a percentage of viewport height. Must match globals.css. */
export const HORIZON_PERCENT = 70;

/** Drifting clouds. top is a % of viewport height; duration/delay are seconds. */
export const CLOUDS = [
  { top: 6, width: 160, duration: 140, delay: -20 },
  { top: 18, width: 110, duration: 190, delay: -120 },
  { top: 32, width: 200, duration: 160, delay: -70 },
  { top: 48, width: 120, duration: 210, delay: -160 },
] as const;
