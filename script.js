const ball = document.querySelector('.ball');
const histogramCanvas = document.getElementById('histogram');
const ctx = histogramCanvas.getContext('2d');

const positionData = []; // Array to store position data for histogram

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

  // If 10 seconds have passed, update histogram and reset positionData
  if (positionData.length >= 100) {
    updateHistogram();
    positionData.length = 0; // Clear the array
  }
}

function updateHistogram() {
  const histogramChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Array.from({ length: 10 }, (_, i) => (i + 1) * 10),
      datasets: [{
        label: 'Position Distribution',
        data: calculateHistogramData(),
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        x: {
          beginAtZero: true
        },
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function calculateHistogramData() {
  const binCount = 10;
  const binWidth = 100;
  const histogramData = Array.from({ length: binCount }, () => 0);

  for (const position of positionData) {
    const binIndex = Math.floor(position / binWidth);
    if (binIndex < binCount) {
      histogramData[binIndex]++;
    }
  }

  return histogramData;
}

// Move the ball randomly every 100 milliseconds
setInterval(moveBallRandomly, 100);
