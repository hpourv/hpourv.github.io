const ball = document.querySelector('.ball');
const paddleLeft = document.querySelector('.paddle-left');
const paddleRight = document.querySelector('.paddle-right');
const gameContainer = document.querySelector('.game-container');

let ballX = 300;
let ballY = 200;
let ballSpeedX = 5;
let ballSpeedY = 2;

function updateBallPosition() {
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  if (ballY >= gameContainer.clientHeight || ballY <= 0) {
    ballSpeedY *= -1;
  }

  if (ballX >= gameContainer.clientWidth || ballX <= 0) {
    ballSpeedX *= -1;
  }

  ball.style.transform = `translate(${ballX}px, ${ballY}px)`;
  requestAnimationFrame(updateBallPosition);
}

updateBallPosition();
