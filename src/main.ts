import "./styles.scss";
import { createGrid } from "./grid";
import { initialiseSnake, handleSpaceKey } from "./initialiseSnake";
import { addFruit } from "./fruit";
import { fruitPosition } from "./movement";

createGrid();
initialiseSnake(22);
handleSpaceKey();
addFruit(22);
fruitPosition();
