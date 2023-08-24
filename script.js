const ball = document.querySelector('.ball');
const histogramCanvas = document.getElementById('histogram');
const ctx = histogramCanvas.getContext('2d');

const positionData = []; // Array to store position data for histogram
let movementInterval; // Interval reference for ball movement

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

  // Add current position to positionData array
  positionData.push(Math.sqrt(randomX * randomX + randomY * randomY));

  // If 20 seconds have passed, stop ball movement and hide the ball
  if (positionData.length >= 200) {
    clearInterval(movementInterval); // Stop ball movement
    ball.style.display = 'none'; // Hide the ball
    updateHistogram();
  }
}

function updateHistogram() {
  // ... (same as before)
}

function calculateHistogramData() {
  // ... (same as before)
}

// Move the ball randomly every 100 milliseconds
movementInterval = setInterval(moveBallRandomly, 100);
