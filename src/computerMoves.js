import { switchTurns } from "./renderGameboard";

export function computerMoves(ships) {
  const delay = Math.floor(Math.random() * 1500);
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
        boardCell.classList.add("hit");
      } else {
        boardCell.classList.add("miss");
      }
      switchTurns();
    } else {
      computerMoves(ships);
    }
  }, delay);
}
