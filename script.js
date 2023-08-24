const ball = document.querySelector('.ball');

function getRandomPosition(min, max) {
  return Math.random() * (max - min) + min;
}

function moveBallRandomly() {
  const maxX = window.innerWidth - ball.clientWidth;
  const maxY = window.innerHeight - ball.clientHeight;
  
  const randomX = getRandomPosition(0, maxX);
  const randomY = getRandomPosition(0, maxY);
  
  ball.style.left = `${randomX}px`;
  ball.style.top = `${randomY}px`;
}

// Move the ball randomly every 1 second
setInterval(moveBallRandomly, 1000);
