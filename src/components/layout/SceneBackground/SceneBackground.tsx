import { PixelSprite } from "@/components/ui/PixelSprite";
import {
  CLOUDS,
  CLOUD_GRID,
  CLOUD_PALETTE,
  GRASS_PALETTE,
  GRASS_SCALE,
  GRASS_TILE,
  HORIZON_PERCENT,
} from "@/constants/scene";
import { gridToRects } from "@/lib/pixelArt";

const TILE_SIZE = GRASS_TILE[0].length * GRASS_SCALE;

/** Fixed pixel-art layers over the body gradient: drifting clouds and tall grass. */
export function SceneBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {CLOUDS.map(({ top, width, duration, delay }) => (
        <div
          key={top}
          className="absolute left-0 animate-cloud-drift motion-reduce:animate-none"
          style={{
            top: `${top}%`,
            width,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
          }}
        >
          <PixelSprite grid={CLOUD_GRID} palette={CLOUD_PALETTE} className="block w-full" />
        </div>
      ))}

      <svg
        shapeRendering="crispEdges"
        className="absolute inset-x-0 bottom-0 w-full"
        style={{ top: `${HORIZON_PERCENT}%`, height: `${100 - HORIZON_PERCENT}%` }}
      >
        <defs>
          <pattern id="tall-grass" width={TILE_SIZE} height={TILE_SIZE} patternUnits="userSpaceOnUse">
            <g transform={`scale(${GRASS_SCALE})`}>
              {gridToRects(GRASS_TILE, GRASS_PALETTE).map(({ x, y, width, fill }) => (
                <rect key={`${x}-${y}`} x={x} y={y} width={width} height={1} fill={fill} />
              ))}
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tall-grass)" />
      </svg>
    </div>
  );
}
