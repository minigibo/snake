import { keys } from "./keys";

export const initialiseSnake = (numColumns: number, initialDirection: keys) => {
  const initialX = 0;
  const initialY = 3;
  const snakeLength = 3;
  const snakeSegments = [];

  for (let i = 0; i < snakeLength; i++) {
    snakeSegments.push({ x: initialX + i, y: initialY });
  }

  const gridCells = document.querySelectorAll(".gridCell");

  snakeSegments.forEach((segment) => {
    const cellIndex = segment.y * numColumns + segment.x;
    const cell = gridCells[cellIndex] as HTMLElement;
    cell.classList.add("snakeSegment");
  });

  return { snakeSegments, currentDirection: initialDirection };
};
