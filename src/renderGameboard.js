import { Ship } from "./ship";
import { Player } from "./player";
import { computerMoves } from "./computerMoves";
import { playerPlacement } from "./shipsPlayerPlacement";
import { computerPlacement } from "./shipsComputerPlacement";

let playerShips = createPlayerShips();
let computerShips = createPlayerShips();
let currentPlayer = 1;

export function createGameboard(player) {
  if (player === "player") {
    let playerObj = new Player(player);
    let playerGameboard = playerObj.board;
    let playerBoard = playerGameboard.createBoard();
    playerPlacement(playerGameboard, playerBoard, playerShips);
    displayBoard(playerBoard, playerGameboard, player);
  } else if (player === "computer") {
    let computerObj = new Player(player);
    let computerGameboard = computerObj.board;
    let computerBoard = computerGameboard.createBoard();
    computerPlacement(computerGameboard, computerBoard, computerShips);
    displayBoard(computerBoard, computerGameboard, player);
  }
}

export function switchTurns() {
  let playerBoard = document.querySelector(".player");
  let computerBoard = document.querySelector(".computer");
  currentPlayer = currentPlayer === 1 ? 2 : 1;
  console.log(`Is player's ${currentPlayer} turn`);

  if (currentPlayer === 1) {
    playerBoard.style.pointerEvents = "none";
    computerBoard.style.pointerEvents = "auto";
  } else {
    playerBoard.style.pointerEvents = "none";
    computerBoard.style.pointerEvents = "none";
    computerMoves(playerShips);
  }
}

function displayBoard(board, gameboard, player) {
  let DOMBoard = document.querySelector(`.${player}`);
  let ships;
  if (player === "player") {
    ships = playerShips;
  } else {
    ships = computerShips;
  }
  board.forEach((row, i) => {
    row.forEach((cell, j) => {
      const boardCell = document.createElement("div");
      boardCell.classList.add("cell");
      boardCell.dataset.row = i;
      boardCell.dataset.col = j;
      if (cell === 1 && player === "player") boardCell.textContent = cell;

      boardCell.addEventListener("click", () => {
        gameboard.receiveAttack(board, i, j, ships, boardCell);
        if (gameboard.allShipsSunk(ships) === true) {
          console.log("Game over");
          DOMBoard.style.pointerEvents = "none";
        } else {
          switchTurns();
        }
      });
      DOMBoard.appendChild(boardCell);
    });
  });
}

function createPlayerShips() {
  return [
    new Ship(5), // carrier
    new Ship(4), // battleship
    new Ship(3), // destroyer
    new Ship(3), // submarine
    new Ship(2), // patrol boat
  ];
}
