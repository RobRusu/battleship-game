export function computerPlacement(gameboard, board, ships) {
  ships.forEach((ship) => {
    let placed = false;

    while (!placed) {
      let orientation = generateOrientation();
      let randomRow = Math.floor(Math.random() * 10);
      let randomCol = Math.floor(Math.random() * 10);

      if (
        gameboard.isValidPlacement(
          board,
          ship,
          randomRow,
          randomCol,
          orientation
        )
      ) {
        gameboard.placeShip(board, ship, randomRow, randomCol, orientation);
        placed = true;
      }
    }
  });
}

function generateOrientation() {
  const isHorizontal = Math.random() < 0.5;

  if (isHorizontal) {
    return "horizontal";
  } else {
    return "vertical";
  }
}
