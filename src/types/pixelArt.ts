/** One string per row. Each character is a key into a PixelPalette. */
export type PixelGrid = readonly string[];

/** Maps a grid character to a CSS color (hex or CSS variable). */
export type PixelPalette = Readonly<Record<string, string>>;

/** A horizontal run of same-colored pixels, in grid units. */
export interface PixelRect {
  x: number;
  y: number;
  width: number;
  fill: string;
}
