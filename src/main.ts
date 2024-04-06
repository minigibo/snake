import "./styles.scss";
import { createGrid } from "./grid";
import { initialiseSnake, handleSpaceKey } from "./initialiseSnake";
import { keys } from "./keys";

createGrid();
initialiseSnake(22, keys.RIGHT);
handleSpaceKey();
