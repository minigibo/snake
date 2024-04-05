import "./styles.scss";
import { createGrid } from "./grid";
import { initialiseSnake } from "./initialiseSnake";
import { handleArrowKeys } from "./movement";
import { keys } from "./keys";
const snakeSegmentsArray: { x: number; y: number }[] = [];

createGrid();
initialiseSnake(22, keys.RIGHT);
handleArrowKeys(snakeSegmentsArray, 22);
