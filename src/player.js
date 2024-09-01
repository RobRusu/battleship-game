import { Gameboard } from "./gameboard";

class Player {
  constructor(type) {
    this.playerType = type;
    this.board = new Gameboard();
  }
}
