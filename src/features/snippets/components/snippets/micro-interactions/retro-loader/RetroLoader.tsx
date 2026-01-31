import React, { useEffect, useState } from "react";

const GRID = {
  scale: 1, // multiplier
  rows: 12,
  cols: 12,
};
const GAP = 5 * GRID.scale; // px;
const BORDER_RADIUS = 2; // px;
const PIXEL = {
  height: 5 * GRID.scale, // px
  width: 5 * GRID.scale, // px
};

// TODO; Make this FPS
const FRAME_DURATION = 150; // ms

export default function RetroLoader() {
  const [currentFrame, setCurrentFrame] = useState(0);

  // Calculate dynamic values based on grid size
  const centerRow = (GRID.rows - 1) / 2;
  const centerCol = (GRID.cols - 1) / 2;
  // Calculate maximum Manhattan distance from center to any corner
  const maxDistance = centerRow + centerCol;
  const totalFrames = Math.ceil(maxDistance) + 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % totalFrames);
    }, FRAME_DURATION);

    return () => clearInterval(interval);
  }, [totalFrames]);

  // Determine if a cell should be lit based on current frame
  const isCellLit = (row: number, col: number): boolean => {
    // Calculate Manhattan distance (sum of row and col differences) for rhombus shape
    const distanceFromCenter =
      Math.abs(row - centerRow) + Math.abs(col - centerCol);

    // Each frame lights up cells at exactly that distance from center
    return distanceFromCenter === currentFrame;
  };

  return (
    <div
      className="flex flex-col"
      style={{
        gap: GAP,
      }}
    >
      {Array.from({ length: GRID.rows }).map((_, row) => (
        <div
          className="flex items-center justify-center"
          style={{
            gap: GAP,
          }}
          key={row}
        >
          {Array.from({ length: GRID.cols }).map((_, col) => (
            <div
              className={`transition-colors duration-[120ms] ease-[cubic-bezier(1,2,1,2)] ${
                isCellLit(row, col) ? "bg-primary" : "bg-secondary"
              }`}
              style={{
                height: PIXEL.height,
                width: PIXEL.width,
                borderRadius: BORDER_RADIUS,
              }}
              key={col}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
