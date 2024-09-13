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

  if (
    carrierRow >= 0 &&
    carrierRow <= 9 &&
    carrierCol >= 0 &&
    carrierCol <= 9
  ) {
    gameboard.placeShip(
      board,
      ships[0],
      carrierRow,
      carrierCol,
      orientationCarrier
    );
  }

  if (
    battleshipRow >= 0 &&
    battleshipRow <= 9 &&
    battleshipCol >= 0 &&
    battleshipCol <= 9
  ) {
    gameboard.placeShip(
      board,
      ships[1],
      battleshipRow,
      battleshipCol,
      orientationBattleship
    );
  }
  if (
    destroyerRow >= 0 &&
    destroyerRow <= 9 &&
    destroyerCol >= 0 &&
    destroyerCol <= 9
  ) {
    gameboard.placeShip(
      board,
      ships[2],
      destroyerRow,
      destroyerCol,
      orientationDestroyer
    );
  }
  if (
    submarineRow >= 0 &&
    submarineRow <= 9 &&
    submarineCol >= 0 &&
    submarineCol <= 9
  ) {
    gameboard.placeShip(
      board,
      ships[3],
      submarineRow,
      submarineCol,
      orientationSubmarine
    );
  }
  if (
    patrolBoatRow >= 0 &&
    patrolBoatRow <= 9 &&
    patrolBoatCol >= 0 &&
    patrolBoatCol <= 9
  ) {
    gameboard.placeShip(
      board,
      ships[4],
      patrolBoatRow,
      patrolBoatCol,
      orientationPatrolBoat
    );
  }
}
