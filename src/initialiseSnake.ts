import { keys } from "./keys";
import { startSnakeMovement, resetScore } from "./movement";

export const handleSpaceKey = () => {
  document.addEventListener("keydown", (event: KeyboardEvent) => {
    switch (event.keyCode) {
      case keys.SPACE:
        startGame(22, keys.RIGHT);
        resetScore();
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
