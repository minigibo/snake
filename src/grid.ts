export const createGrid = () => {
  const gameGrid = document.getElementById("gameGrid");
  if (!gameGrid) return;

  const gridWidth = gameGrid.clientWidth;
  const gridHeight = gameGrid.clientHeight;

  let numColumns, numRows;
  if (gridWidth >= 768) {
    numColumns = 22;
    numRows = 15;
  } else {
    numColumns = 10;
    numRows = 20;
  }

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
