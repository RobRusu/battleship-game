export class Gameboard {
  constructor(size = 10) {
    this.size = size;
    this.missedHits = [];
  }

  createBoard() {
    let board = [];
    for (let i = 0; i < this.size; i++) {
      board.push([]);
      for (let j = 0; j < this.size; j++) {
        board[i].push(0);
      }
    }

    return board;
  }

  isValidPlacement(board, ship, startRow, startCol, orientation) {
    if (orientation === "horizontal") {
      if (startCol + ship.length > this.size) return false; // Ship goes out of bounds

      for (let i = 0; i < ship.length; i++) {
        if (board[startRow][startCol + i] !== 0) return false; // Overlaps another ship
      }
    } else if (orientation === "vertical") {
      if (startRow + ship.length > this.size) return false; // Ship goes out of bounds

      for (let i = 0; i < ship.length; i++) {
        if (board[startRow + i][startCol] !== 0) return false; // Overlaps another ship
      }
    }
    return true;
  }

  placeShip(board, ship, startRow, startCol, orientation) {
    if (this.isValidPlacement(board, ship, startRow, startCol, orientation)) {
      let coordinates = [];

      if (orientation === "horizontal") {
        for (let i = 0; i < ship.length; i++) {
          board[startRow][startCol + i] = 1; // Mark the ship's position on the board
          coordinates.push([startRow, startCol + i]); // Store the ship's coordinates
        }
      } else if (orientation === "vertical") {
        for (let i = 0; i < ship.length; i++) {
          board[startRow + i][startCol] = 1; // Mark the ship's position on the board
          coordinates.push([startRow + i, startCol]); // Store the ship's coordinates
        }
      }
      ship.setCoordinates(coordinates); // Assign coordinates to the ship
      // console.log(
      //   `${ship.length}-length ship placed at ${coordinates} ${orientation}`
      // );
    } else {
      // console.log(
      //   `Invalid placement for ${ship.length}-length ship at (${startRow}, ${startCol}) ${orientation}`
      // );
      return false;
    }
  }

  receiveAttack(board, row, col, ships) {
    if (board[row][col] == 1) {
      board[row][col] = "X";
      ships.forEach((ship) => {
        if (this.checkShipCoordinates(ship, row, col)) {
          ship.hit();
        }
      });
      if (this.allShipsSunk(ships)) return true;
      return false;
    } else if (board[row][col] == 0) {
      board[row][col] = "O";
      this.missedHits.push([row, col]);
    }
  }

  checkShipCoordinates(obj, row, col) {
    let target = [row, col];

    let exists = obj.coordinates.some(
      (coordinate) =>
        coordinate.length === target.length &&
        coordinate.every((value, index) => value === target[index])
    );

    if (exists) {
      return true;
    } else {
      return false;
    }
  }

  allShipsSunk(ships) {
    let shipsSunkCount = 0;
    ships.forEach((ship) => {
      if (ship.sunk === true) shipsSunkCount++;
    });

    if (shipsSunkCount === 5) return true;
    return false;
  }
}
