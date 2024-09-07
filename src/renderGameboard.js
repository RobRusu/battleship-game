import { Gameboard } from "./gameboard";
import { Ship } from "./ship";
import { Player } from "./player";
import { computerMoves } from "./computerMoves";

let carrier = new Ship(5);
let battleship = new Ship(4);
let destroyer = new Ship(3);
let submarine = new Ship(3);
let patrolBoat = new Ship(2);

let currentPlayer = 1;

const ships = [carrier, battleship, destroyer, submarine, patrolBoat];

export function createGameboard(player) {
  let createPlayer = new Player(player);
  let gameboard = createPlayer.board;
  let board = gameboard.createBoard();
  let div = `.${player}`;
  let playerBoard = document.querySelector(".player");
  let computerBoard = document.querySelector(".computer");

  playerBoard.style.pointerEvents = "none";
  computerBoard.style.pointerEvents = "auto";

  gameboard.placeShip(board, carrier, 1, 4, "horizontal");
  gameboard.placeShip(board, battleship, 5, 8, "vertical");
  gameboard.placeShip(board, destroyer, 9, 5, "horizontal");
  gameboard.placeShip(board, submarine, 4, 5, "vertical");
  gameboard.placeShip(board, patrolBoat, 7, 2, "horizontal");

  const displayBoard = document.querySelector(`${div}`);
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
          playerBoard.style.pointerEvents = "none";
          computerBoard.style.pointerEvents = "none";
        } else {
          switchTurns();
        }
      });
      displayBoard.appendChild(boardCell);
    });
  });
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
    computerMoves(ships);
  }
}
