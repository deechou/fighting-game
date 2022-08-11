function determineWinner({ player, enemy, timerID }) {
  document.querySelector("#displayText").style.display = "flex";
  clearTimeout(timerID);
  if (player.health === enemy.health) {
    document.querySelector("#displayText").innerHTML = "TIE";
  } else if (player.health > enemy.health) {
    document.querySelector("#displayText").innerHTML = "PLAYER 1 WINS";
  } else {
    document.querySelector("#displayText").innerHTML = "PLAYER 2 WINS";
  }
}

function decreaseTimer() {
  if (timer > 0) {
    timerID = setTimeout(decreaseTimer, 1000);
    timer--;
    document.querySelector("#timer").innerHTML = timer;
  } else {
    determineWinner({ player, enemy });
  }
}

function rectangularCollision({ rectangle1, rectangle2 }) {
  return (
    rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
    rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
    rectangle1.position.y + rectangle1.height >= rectangle2.position.y &&
    rectangle1.position.y <= rectangle2.position.y + rectangle2.height
  );
}
