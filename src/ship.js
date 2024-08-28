export class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.sunk = false;
    this.coordinates = [];
  }

  hit() {
    this.hits++;
    this.isSunk();
  }

  isSunk() {
    if (this.hits >= this.length) this.sunk = true;
  }

  setCoordinates(coordinates) {
    this.coordinates = coordinates;
  }
}
