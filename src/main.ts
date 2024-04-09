import "./styles.scss";
import { createGrid } from "./grid";
import { handleSpaceKey } from "./initialiseSnake";
import { addFruit } from "./fruit";
import { fruitPosition } from "./movement";

createGrid();
handleSpaceKey();
addFruit(22);
fruitPosition();
