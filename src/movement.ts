import { keys } from "./keys";
import { addFruit } from "./fruit";

let intervalId: number | null = null;
let currentDirection: keys | null = null;
let snakeSegments: { x: number; y: number }[] = [];
let score = 0;
let intervalDuration = 200;

const getGridDimensions = () => {
  return {
    numColumns: window.innerWidth >= 768 ? 22 : 10,
    numRows: window.innerWidth >= 768 ? 15 : 20,
  };
};

export const handleSpaceKey = () => {
  document.addEventListener("keydown", (event: KeyboardEvent) => {
    switch (event.keyCode) {
      case keys.SPACE:
        startGame(keys.RIGHT);
        resetScore();
        document.removeEventListener("keydown", handleSpaceKey);
        break;
    }
  });
};

const startGame = (initialDirection: keys) => {
  const playDiv = document.querySelector(".play") as HTMLElement;
  if (playDiv) {
    playDiv.style.display = "none";
    startSnakeMovement(initialDirection);
  }
};

export const startSnakeMovement = (initialDirection: keys) => {
  if (intervalId !== null) {
    clearInterval(intervalId);
  }
  currentDirection = initialDirection;
  snakeSegments = [];

  const initialX = 0;
  const initialY = 3;
  const snakeLength = 3;

  for (let i = 0; i < snakeLength; i++) {
    snakeSegments.push({ x: initialX + i, y: initialY });
  }

  intervalId = setInterval(moveSnake, intervalDuration);

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
  const { numColumns, numRows } = getGridDimensions();
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

  if (
    newHead.x < 0 ||
    newHead.x >= numColumns ||
    newHead.y < 0 ||
    newHead.y >= numRows
  ) {
    boundaryHit();
    return;
  }

  const fruitPos = fruitPosition();
  if (fruitPos && newHead.x === fruitPos.x && newHead.y === fruitPos.y) {
    snakeSegments.unshift({ x: fruitPos.x, y: fruitPos.y });
    removeFruit();
    increaseScore();
    addFruit();
    snakeSegments.unshift(newHead);
    snakeSegments.pop();
    updateSnakeDisplay();
    intervalDuration -= 5;
    clearInterval(intervalId!);
    intervalId = setInterval(moveSnake, intervalDuration);
  } else {
    snakeSegments.unshift(newHead);
    snakeSegments.pop();
    updateSnakeDisplay();
    headBodyCollision();
  }
};

const updateSnakeDisplay = () => {
  const gridCells = document.querySelectorAll(".gridCell");
  const numColumns = window.innerWidth >= 768 ? 22 : 10;

  gridCells.forEach((cell) =>
    cell.classList.remove("snakeSegment", "snakeHead")
  );

  snakeSegments.forEach((segment, index) => {
    const cellIndex = segment.y * numColumns + segment.x;
    const cell = gridCells[cellIndex] as HTMLElement;
    cell.classList.add("snakeSegment");

    if (index === 0) {
      cell.classList.add("snakeHead");
    }
  });
};

export const fruitPosition = () => {
  const fruitCell = document.querySelector(".gridCell.fruit");
  if (fruitCell) {
    const fruitPositionX = parseInt(
      fruitCell.getAttribute("data-x") || "0",
      10
    );
    const fruitPositionY = parseInt(
      fruitCell.getAttribute("data-y") || "0",
      10
    );
    return { x: fruitPositionX, y: fruitPositionY };
  } else {
    return null;
  }
};

const removeFruit = () => {
  const fruitCell = document.querySelector(".gridCell.fruit");
  if (fruitCell) {
    fruitCell.classList.remove("fruit");
    fruitCell.innerHTML = "";
  }
};

const updateScoreDisplay = () => {
  const scoreElement = document.querySelector(".score");
  if (scoreElement) {
    scoreElement.textContent = `SCORE: ${score}`;
  }
};

const increaseScore = () => {
  score += 1;
  updateScoreDisplay();
};

export const resetScore = () => {
  score = 0;
  intervalDuration = 200;
  updateScoreDisplay();
};

const headBodyCollision = () => {
  if (snakeSegments.length <= 3) {
    return false;
  }

  const head = snakeSegments[0];
  const body = snakeSegments.slice(1);

  for (const segment of body) {
    if (head.x === segment.x && head.y === segment.y) {
      gameEnded();
    }
  }
};

const gameEnded = () => {
  const playDiv = document.querySelector(".play") as HTMLElement;
  if (playDiv) {
    playDiv.style.display = "flex";
    playDiv.style.flexDirection = "column";
    playDiv.textContent = `Snake-ception achieved! Your score: ${score}`;
    clearInterval(intervalId!);
    document.addEventListener("keydown", handleSpaceKey);
    intervalDuration = 200;
    playDiv.insertAdjacentHTML("beforeend", "<p>Press space to play again</p>");
  }
};

const boundaryHit = () => {
  const playDiv = document.querySelector(".play") as HTMLElement;
  if (playDiv) {
    playDiv.style.display = "flex";
    playDiv.style.flexDirection = "column";
    playDiv.textContent = `Splatttt! Your score: ${score}`;
    clearInterval(intervalId!);
    document.addEventListener("keydown", handleSpaceKey);
    intervalDuration = 200;
    playDiv.insertAdjacentHTML("beforeend", "<p>Press space to play again</p>");
  }
};
