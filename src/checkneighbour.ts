import { Cell } from "./Cell";

export function countAliveNeighbors(
  grid: Cell[][],
  x: number,
  y: number
): number {
  const height = grid.length;
  const width = grid[0].length;
  let count = 0;

  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) continue;

      const neighborX = x + j;
      const neighborY = y + i;

      if (
        neighborX >= 0 &&
        neighborX < width &&
        neighborY >= 0 &&
        neighborY < height
      ) {
        if (grid[neighborY][neighborX].alive) {
          count++;
        }
      }
    }
  }

  return count;
}
