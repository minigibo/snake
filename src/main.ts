import "./styles.scss";
import { createGrid } from "./grid";
import { initialiseSnake, handleSpaceKey } from "./initialiseSnake";
import { addFruit } from "./fruit";

createGrid();
initialiseSnake(22);
handleSpaceKey();
addFruit();
