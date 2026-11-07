import { EMPTY_PIXEL } from "@/constants/pixelArt";
import type { PixelGrid, PixelPalette, PixelRect } from "@/types/pixelArt";

/** Converts a character grid into horizontal runs, merging same-colored neighbors. */
export function gridToRects(grid: PixelGrid, palette: PixelPalette): PixelRect[] {
  const rects: PixelRect[] = [];

  grid.forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      const char = row[x];
      const fill = palette[char];
      if (char === EMPTY_PIXEL || !fill) {
        x += 1;
        continue;
      }
      let width = 1;
      while (row[x + width] === char) width += 1;
      rects.push({ x, y, width, fill });
      x += width;
    }
  });

  return rects;
}
