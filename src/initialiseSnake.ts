import { keys } from "./keys";
import { startSnakeMovement } from "./movement";

export const initialiseSnake = (numColumns: number) => {
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

  handleSpaceKey();
};

export const handleSpaceKey = () => {
  document.addEventListener("keydown", (event: KeyboardEvent) => {
    switch (event.keyCode) {
      case keys.SPACE:
        startGame(22, keys.RIGHT);
        break;
    }
  });
};

const startGame = (numColumns: number, initialDirection: keys) => {
  const playDiv = document.querySelector(".play") as HTMLElement;
  if (playDiv) {
    playDiv.style.display = "none";
    startSnakeMovement(initialDirection, numColumns);
  }
};
