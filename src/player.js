import { Gameboard } from "./gameboard";

export class Player {
  constructor(type) {
    this.playerType = type;
    this.board = new Gameboard();
  }
}
