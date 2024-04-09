import { keys } from "./keys";
import { addFruit } from "./fruit";

let intervalId: number | null = null;
let currentDirection: keys | null = null;
let snakeSegments: { x: number; y: number }[] = [];
let numColumns: number;

export const startSnakeMovement = (initialDirection: keys, columns: number) => {
  if (intervalId !== null) {
    clearInterval(intervalId);
  }
  currentDirection = initialDirection;
  numColumns = columns;

  snakeSegments = [];

  const initialX = 0;
  const initialY = 3;
  const snakeLength = 3;

  for (let i = 0; i < snakeLength; i++) {
    snakeSegments.push({ x: initialX + i, y: initialY });
  }

  intervalId = setInterval(moveSnake, 200);

  document.addEventListener("keydown", handleKeyPress);
};

const handleKeyPress = (event: KeyboardEvent) => {
  switch (event.keyCode) {
    case keys.LEFT:
      if (currentDirection !== keys.RIGHT) {
        currentDirection = keys.LEFT;
      }
      break;
    case keys.RIGHT:
      if (currentDirection !== keys.LEFT) {
        currentDirection = keys.RIGHT;
      }
      break;
    case keys.UP:
      if (currentDirection !== keys.DOWN) {
        currentDirection = keys.UP;
      }
      break;
    case keys.DOWN:
      if (currentDirection !== keys.UP) {
        currentDirection = keys.DOWN;
      }
      break;
  }
};

const moveSnake = () => {
  const head = snakeSegments[0];
  let newHead = { x: head.x, y: head.y };

  switch (currentDirection) {
    case keys.LEFT:
      newHead.x -= 1;
      break;
    case keys.RIGHT:
      newHead.x += 1;
      break;
    case keys.UP:
      newHead.y -= 1;
      break;
    case keys.DOWN:
      newHead.y += 1;
      break;
  }
  if (isFruitCollision(newHead)) {
    growSnake(newHead);
    removeFruit();
    addFruit();
  } else {
    snakeSegments.unshift(newHead);
    snakeSegments.pop();
    updateSnakeDisplay();
  }
};

const updateSnakeDisplay = () => {
  const gridCells = document.querySelectorAll(".gridCell");
  gridCells.forEach((cell) => cell.classList.remove("snakeSegment"));

  snakeSegments.forEach((segment) => {
    const cellIndex = segment.y * numColumns + segment.x;
    const cell = gridCells[cellIndex] as HTMLElement;
    cell.classList.add("snakeSegment");
  });
};

const isFruitCollision = (head: { x: number; y: number }) => {
  const gridCell = document.querySelector(
    `.gridCell[data-x='${head.x}'][data-y='${head.y}']`
  );
  return gridCell?.classList.contains("fruit");
};

const growSnake = (newHead: { x: number; y: number }) => {
  snakeSegments.unshift(newHead);
};

const removeFruit = () => {
  const fruitCell = document.querySelector(".gridCell.fruit");
  if (fruitCell) {
    fruitCell.classList.remove("fruit");
    fruitCell.innerHTML = "";
  }
};
