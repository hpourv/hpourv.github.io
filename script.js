const ball = document.querySelector('.ball');
const scatterPlotCanvas = document.getElementById('scatterPlot');
const ctx = scatterPlotCanvas.getContext('2d');

const positionData = []; // Array to store position data for scatter plot

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
  positionData.push({ x: randomX, y: randomY });
  
  updateScatterPlot();
}

function updateScatterPlot() {
  const scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
      datasets: [{
        label: 'Ball Position',
        data: positionData,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        pointRadius: 5,
        pointHoverRadius: 8,
        showLine: false
      }]
    },
    options: {
      scales: {
        x: {
          type: 'linear',
          position: 'bottom'
        },
        y: {
          min: 0,
          max: window.innerHeight,
          type: 'linear',
          position: 'left'
        }
      }
    }
  });
}

// Move the ball randomly every 100 milliseconds
setInterval(moveBallRandomly, 100);
