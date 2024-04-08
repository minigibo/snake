export const addFruit = () => {
  const gridCells = document.querySelectorAll(".gridCell");

  const availableCells: number[] = [];
  for (let i = 0; i < gridCells.length; i++) {
    const cell = gridCells[i] as HTMLElement;
    if (!cell.classList.contains("snakeSegment")) {
      availableCells.push(i);
    }
  }

  const randomCellIndex =
    availableCells[Math.floor(Math.random() * availableCells.length)];

  const fruitImage = document.createElement("img");
  fruitImage.src = "./Banana.png";
  gridCells[randomCellIndex].classList.add("fruit");
  gridCells[randomCellIndex].appendChild(fruitImage);
};
