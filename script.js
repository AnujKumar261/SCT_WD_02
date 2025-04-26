// script.js
let time = 0;
let interval = null;
let isRunning = false;

const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');
const lapBtn = document.getElementById('lap');
const lapsList = document.getElementById('laps');

function updateDisplay() {
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);
  display.textContent =
    `${String(minutes).padStart(2, '0')}:` +
    `${String(seconds).padStart(2, '0')}:` +
    `${String(milliseconds).padStart(2, '0')}`;
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    interval = setInterval(() => {
      time += 10;
      updateDisplay();
    }, 10);
  }
}

function pauseTimer() {
  isRunning = false;
  clearInterval(interval);
}

function resetTimer() {
  isRunning = false;
  clearInterval(interval);
  time = 0;
  updateDisplay();
  lapsList.innerHTML = '';
}

function recordLap() {
  const li = document.createElement('li');
  li.textContent = display.textContent;
  lapsList.appendChild(li);
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', recordLap);
