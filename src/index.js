import "./style.css";
import { createGameboard } from "./renderGameboard";
import Logo from "../img/logo-black-small.png";

const placeShips = document.querySelector(".place");
const placeShipsDiv = document.querySelector(".placeShips");
const logo = document.querySelector(".logoTitle");
const displayMessage = document.querySelector(".message");
const restart = document.querySelector(".restart");
const playerBoard = document.querySelector(".player");
const computerBoard = document.querySelector(".computer");
logo.src = Logo;
logo.alt = "aqua armada logo";

restart.style.display = "none";

placeShips.addEventListener("click", () => {
  createGameboard("player");
  createGameboard("computer");
  displayMessage.textContent = "Your turn";
  placeShipsDiv.style.display = "none";
  restart.style.display = "block";
});

restart.addEventListener("click", () => {
  let carrierRow = document.getElementById("carrierRow");
  let carrierCol = document.getElementById("carrierCol");

  let battleshipRow = document.getElementById("battleshipRow");
  let battleshipCol = document.getElementById("battleshipCol");

  let destroyerRow = document.getElementById("destroyerRow");
  let destroyerCol = document.getElementById("destroyerCol");

  let submarineRow = document.getElementById("submarineRow");
  let submarineCol = document.getElementById("submarineCol");

  let patrolBoatRow = document.getElementById("patrolBoatRow");
  let patrolBoatCol = document.getElementById("patrolBoatCol");

  placeShipsDiv.style.display = "flex";
  playerBoard.textContent = "";
  computerBoard.textContent = "";
  carrierRow.value = 0;
  carrierCol.value = 0;

  battleshipRow.value = 1;
  battleshipCol.value = 0;

  destroyerRow.value = 2;
  destroyerCol.value = 0;

  submarineRow.value = 3;
  submarineCol.value = 0;

  patrolBoatRow.value = 4;
  patrolBoatCol.value = 0;
});
