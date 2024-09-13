import { switchTurns } from "./renderGameboard";

export function computerMoves(ships) {
  const delay = Math.floor(Math.random() * 1500);
  let playerBoard = document.querySelector(".player");
  let computerBoard = document.querySelector(".computer");
  let playerChildren = document.querySelector(".player").children;
  let displayMessage = document.querySelector(".message");
  let attackedCells = 0;
  let coordinates = [];

  ships.forEach((ship) => {
    let shipCoordinates = ship.coordinates;
    shipCoordinates.forEach((coordinate) => {
      coordinates.push(coordinate);
    });
  });

  setTimeout(() => {
    const randomRow = Math.floor(Math.random() * 10);
    const randomCol = Math.floor(Math.random() * 10);

    const boardCell = document.querySelector(
      `[data-row="${randomRow}"][data-col="${randomCol}"]`
    );

    if (
      !boardCell.classList.contains("hit") &&
      !boardCell.classList.contains("miss")
    ) {
      const isHit = coordinates.some(
        (coordinate) =>
          coordinate[0] === randomRow && coordinate[1] === randomCol
      );

      if (isHit) {
        boardCell.classList.remove("playerShip");
        boardCell.classList.add("hit");
      } else {
        boardCell.classList.add("miss");
      }

      for (let i = 0; i < playerChildren.length; i++) {
        let child = playerChildren[i];
        if (child.classList.contains("hit")) attackedCells++;
      }

      console.log(attackedCells);

      if (attackedCells === 17) {
        displayMessage.textContent = `Game over, computer won!`;
        playerBoard.style.pointerEvents = "none";
        computerBoard.style.pointerEvents = "none";
      } else {
        attackedCells = 0;
        switchTurns();
      }
    } else {
      computerMoves(ships);
    }
  }, delay);
}

function allShipsSunk(ships) {
  let shipsSunkCount = 0;
  ships.forEach((ship) => {
    if (ship.sunk === true) shipsSunkCount++;
  });

  if (shipsSunkCount === 5) return true;
  return false;
}
