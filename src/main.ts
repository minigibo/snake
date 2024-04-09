import "./styles.scss";
import { createGrid } from "./grid";
import { addFruit } from "./fruit";
import { fruitPosition, handleSpaceKey } from "./movement";

createGrid();
handleSpaceKey();
addFruit(22);
fruitPosition();
