export function playerPlacement(gameboard, board, ships) {
  //get carrier values
  let carrierRow = Number(document.getElementById("carrierRow").value);
  let carrierCol = Number(document.getElementById("carrierCol").value);
  let orientationCarrier = document.getElementById("orientationCarrier").value;

  //get battleship values
  let battleshipRow = Number(document.getElementById("battleshipRow").value);
  let battleshipCol = Number(document.getElementById("battleshipCol").value);
  let orientationBattleship = document.getElementById(
    "orientationBattleship"
  ).value;

  //get destroyer values
  let destroyerRow = Number(document.getElementById("destroyerRow").value);
  let destroyerCol = Number(document.getElementById("destroyerCol").value);
  let orientationDestroyer = document.getElementById(
    "orientationDestroyer"
  ).value;

  //get submarine values
  let submarineRow = Number(document.getElementById("submarineRow").value);
  let submarineCol = Number(document.getElementById("submarineCol").value);
  let orientationSubmarine = document.getElementById(
    "orientationSubmarine"
  ).value;

  //get patrolBoat values
  let patrolBoatRow = Number(document.getElementById("patrolBoatRow").value);
  let patrolBoatCol = Number(document.getElementById("patrolBoatCol").value);
  let orientationPatrolBoat = document.getElementById(
    "orientationPatrolBoat"
  ).value;

  gameboard.placeShip(
    board,
    ships[0],
    carrierRow,
    carrierCol,
    orientationCarrier
  );
  gameboard.placeShip(
    board,
    ships[1],
    battleshipRow,
    battleshipCol,
    orientationBattleship
  );
  gameboard.placeShip(
    board,
    ships[2],
    destroyerRow,
    destroyerCol,
    orientationDestroyer
  );
  gameboard.placeShip(
    board,
    ships[3],
    submarineRow,
    submarineCol,
    orientationSubmarine
  );
  gameboard.placeShip(
    board,
    ships[4],
    patrolBoatRow,
    patrolBoatCol,
    orientationPatrolBoat
  );
}
