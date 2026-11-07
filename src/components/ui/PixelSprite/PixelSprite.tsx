import { gridToRects } from "@/lib/pixelArt";
import type { PixelGrid, PixelPalette } from "@/types/pixelArt";

export interface PixelSpriteProps {
  grid: PixelGrid;
  palette: PixelPalette;
  className?: string;
}

/** Renders any pixel grid as crisp SVG. Scales to its container width. */
export function PixelSprite({ grid, palette, className }: PixelSpriteProps) {
  const width = Math.max(...grid.map((row) => row.length));
  const height = grid.length;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      shapeRendering="crispEdges"
      aria-hidden="true"
      className={className}
    >
      {gridToRects(grid, palette).map(({ x, y, width: w, fill }) => (
        <rect key={`${x}-${y}`} x={x} y={y} width={w} height={1} fill={fill} />
      ))}
    </svg>
  );
}
