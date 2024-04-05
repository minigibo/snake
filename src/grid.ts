export const createGrid = () => {
  const numColumns = 22;
  const numRows = 15;
  const gameGrid = document.getElementById("gameGrid");
  if (!gameGrid) return;

  const gridWidth = gameGrid.clientWidth;
  const gridHeight = gameGrid.clientHeight;
  const cellWidth = gridWidth / numColumns;
  const cellHeight = gridHeight / numRows;

  gameGrid.style.display = "grid";
  gameGrid.style.gridTemplateColumns = `repeat(${numColumns}, ${cellWidth}px)`;
  gameGrid.style.gridTemplateRows = `repeat(${numRows}, ${cellHeight}px)`;

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numColumns; col++) {
      const cell = document.createElement("div");
      cell.classList.add("gridCell");
      cell.style.width = `${cellWidth}px`;
      cell.style.height = `${cellHeight}px`;
      gameGrid.appendChild(cell);
    }
  }
};
