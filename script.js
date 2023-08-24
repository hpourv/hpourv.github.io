const paddleSpeed = 5; // Adjust this value as needed

let paddleLeftY = (gameContainer.clientHeight - paddleLeft.clientHeight) / 2;
let paddleRightY = (gameContainer.clientHeight - paddleRight.clientHeight) / 2;

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') {
    paddleRightY = Math.max(0, paddleRightY - paddleSpeed);
  } else if (event.key === 'ArrowDown') {
    paddleRightY = Math.min(gameContainer.clientHeight - paddleRight.clientHeight, paddleRightY + paddleSpeed);
  } else if (event.key === 'w' || event.key === 'W') {
    paddleLeftY = Math.max(0, paddleLeftY - paddleSpeed);
  } else if (event.key === 's' || event.key === 'S') {
    paddleLeftY = Math.min(gameContainer.clientHeight - paddleLeft.clientHeight, paddleLeftY + paddleSpeed);
  }
});

function updatePaddlePositions() {
  paddleLeft.style.transform = `translateY(${paddleLeftY}px)`;
  paddleRight.style.transform = `translateY(${paddleRightY}px)`;
  requestAnimationFrame(updatePaddlePositions);
}

updatePaddlePositions();
