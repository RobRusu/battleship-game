import "./style.css";
import { createGameboard } from "./renderGameboard";

const placeShips = document.querySelector(".place");

placeShips.addEventListener("click", () => {
  createGameboard("player");
  createGameboard("computer");
});
