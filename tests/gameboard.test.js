import { Gameboard } from "../src/gameboard";
import { Ship } from "../src/ship";

let gameboard = new Gameboard();
let board = gameboard.createBoard();
let carrier = new Ship(5);
let battleship = new Ship(4);
let submarine = new Ship(3);
let destroyer = new Ship(3);
let patrolBoat = new Ship(2);

let ships = [battleship, carrier, submarine, destroyer, patrolBoat];

let sunkBoard = gameboard.createBoard();

test("check if coordinates exist in the board", () => {
  expect(board[9][9]).toEqual(0);
});

test("Ship can be placed horizontally", () => {
  expect(
    gameboard.isValidPlacement(board, battleship, 2, 3, "horizontal")
  ).toBe(true);
});

test("Ship goes out of bounds horizontally", () => {
  expect(gameboard.isValidPlacement(board, carrier, 5, 6, "horizontal")).toBe(
    false
  );
});

test("Ship can be placed vertically", () => {
  expect(gameboard.isValidPlacement(board, submarine, 6, 9, "vertical")).toBe(
    true
  );
});

test("Ship can't go out of bounds vertically", () => {
  expect(gameboard.isValidPlacement(board, destroyer, 8, 6, "vertical")).toBe(
    false
  );
});

test("Ship can be placed at specific coordinates horizontally", () => {
  gameboard.placeShip(board, battleship, 4, 5, "horizontal");
  expect(board[4][8]).toBe(1);
});

test("Ship can be placed at specific coordinates vertically", () => {
  gameboard.placeShip(board, carrier, 3, 3, "vertical");
  expect(board[7][3]).toBe(1);
});

test("Ship cannot be placed out of bounds", () => {
  let ship = gameboard.placeShip(board, carrier, 7, 3, "vertical");
  expect(ship).toBe(false);
});

test("Ship cannot overlap with other ships", () => {
  let ship = gameboard.placeShip(board, destroyer, 4, 3, "horizontal");
  expect(ship).toBe(false);
});

test("Check for ship coordinates on the object", () => {
  expect(carrier.coordinates).toContainEqual([3, 3]);
});

test("Ship receives an attack and registers the hit", () => {
  gameboard.receiveAttack(board, 4, 6, ships);
  expect(board[4][6]).toBe("X");
  expect(board[4][7]).toBe(1);
  expect(battleship.hits).toBe(1);
});

test("Empty place receives an attack and registers the missed hit", () => {
  gameboard.receiveAttack(board, 9, 8, ships);
  expect(board[9][8]).toBe("O");
  expect(gameboard.missedHits).toContainEqual([9, 8]);
});

test("Not all ships have sunk", () => {
  let attack = gameboard.receiveAttack(board, 4, 7, ships);
  expect(attack).toBe(false);
});

test("All ships have sunk", () => {
  let sunkCarrier = new Ship(5);
  let sunkBattleship = new Ship(4);
  let sunkDestroyer = new Ship(3);
  let sunkSubmarine = new Ship(3);
  let sunkPatrolBoat = new Ship(2);

  let sunkShips = [
    sunkSubmarine,
    sunkPatrolBoat,
    sunkDestroyer,
    sunkBattleship,
    sunkCarrier,
  ];

  gameboard.placeShip(sunkBoard, sunkSubmarine, 2, 4, "horizontal");
  gameboard.placeShip(sunkBoard, sunkPatrolBoat, 3, 4, "horizontal");
  gameboard.placeShip(sunkBoard, sunkDestroyer, 4, 4, "horizontal");
  gameboard.placeShip(sunkBoard, sunkBattleship, 5, 4, "horizontal");
  gameboard.placeShip(sunkBoard, sunkCarrier, 6, 4, "horizontal");

  let firstAttack = gameboard.receiveAttack(sunkBoard, 2, 4, sunkShips);
  gameboard.receiveAttack(sunkBoard, 2, 5, sunkShips);
  gameboard.receiveAttack(sunkBoard, 2, 6, sunkShips);

  gameboard.receiveAttack(sunkBoard, 3, 4, sunkShips);
  gameboard.receiveAttack(sunkBoard, 3, 5, sunkShips);

  gameboard.receiveAttack(sunkBoard, 4, 4, sunkShips);
  gameboard.receiveAttack(sunkBoard, 4, 5, sunkShips);
  gameboard.receiveAttack(sunkBoard, 4, 6, sunkShips);

  gameboard.receiveAttack(sunkBoard, 5, 4, sunkShips);
  gameboard.receiveAttack(sunkBoard, 5, 5, sunkShips);
  gameboard.receiveAttack(sunkBoard, 5, 6, sunkShips);
  gameboard.receiveAttack(sunkBoard, 5, 7, sunkShips);

  gameboard.receiveAttack(sunkBoard, 6, 4, sunkShips);
  gameboard.receiveAttack(sunkBoard, 6, 5, sunkShips);
  gameboard.receiveAttack(sunkBoard, 6, 6, sunkShips);
  gameboard.receiveAttack(sunkBoard, 6, 7, sunkShips);
  let lastAttack = gameboard.receiveAttack(sunkBoard, 6, 8, sunkShips);

  expect(firstAttack).toBe(false);
  expect(lastAttack).toBe(true);
});
