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
  const fruitCell = gridCells[randomCellIndex] as HTMLElement;
  fruitCell.classList.add("fruit");

  const numColumns = window.innerWidth >= 768 ? 22 : 10;

  fruitCell.appendChild(fruitImage);
  fruitCell.setAttribute("data-x", (randomCellIndex % numColumns).toString());
  fruitCell.setAttribute(
    "data-y",
    Math.floor(randomCellIndex / numColumns).toString()
  );
};
