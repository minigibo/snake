import "./styles.scss";
import { createGrid } from "./grid";
import { initialiseSnake, handleSpaceKey } from "./initialiseSnake";

createGrid();
initialiseSnake(22);
handleSpaceKey();
