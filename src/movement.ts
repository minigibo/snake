import { keys } from "./keys";

export const handleArrowKeys = (
  snakeSegments: { x: number; y: number }[],
  numColumns: number
) => {
  document.addEventListener("keydown", (event) => {
    const key = event.key;

    switch (key) {
      case keys[keys.UP]:
        moveSnakeUp(snakeSegments, numColumns);
        break;
      case keys[keys.DOWN]:
        moveSnakeDown(snakeSegments, numColumns);
        break;
      case keys[keys.LEFT]:
        moveSnakeLeft(snakeSegments);
        break;
      case keys[keys.RIGHT]:
        moveSnakeRight(snakeSegments);
        break;
    }
  });
};

const moveSnakeUp = (
  snakeSegments: { x: number; y: number }[],
  numColumns: number
) => {
  const head = snakeSegments[0];
  const newHead = { x: head.x, y: head.y - 1 };
  if (newHead.y >= numColumns) {
    snakeSegments.unshift(newHead);
    snakeSegments.pop();
  }
};

const moveSnakeDown = (
  snakeSegments: { x: number; y: number }[],
  numColumns: number
) => {
  const head = snakeSegments[0];
  const newHead = { x: head.x, y: head.y + 1 };
  if (newHead.y < numColumns) {
    snakeSegments.unshift(newHead);
    snakeSegments.pop();
  }
};

const moveSnakeLeft = (snakeSegments: { x: number; y: number }[]) => {
  const head = snakeSegments[0];
  const newHead = { x: head.x - 1, y: head.y };
  snakeSegments.unshift(newHead);
  snakeSegments.pop();
};

const moveSnakeRight = (snakeSegments: { x: number; y: number }[]) => {
  const head = snakeSegments[0];
  const newHead = { x: head.x + 1, y: head.y };
  snakeSegments.unshift(newHead);
  snakeSegments.pop();
};
