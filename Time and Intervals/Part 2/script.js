

/* 
  📌 Topic: Time Intervals with All Operations (JavaScript)

  👉 Important Points (Definitions):
  1. setInterval() → Calls a function repeatedly at a fixed time interval (in ms).
  2. clearInterval() → Stops the function calls started by setInterval().
  3. Start → Begins the timer using setInterval().
  4. Pause → Temporarily stops the timer (clearInterval()) but keeps the elapsed time.
  5. Resume → Starts the timer again from where it was paused.
  6. Stop → Completely stops the timer without resetting the time.
  7. Reset → Stops the timer and sets the time back to 00:00:00.
*/

let intervalId;
let elapsedSeconds = 0;
let isRunning = false;

// Function to update the timer display
function updateDisplay() {
  let hours = String(Math.floor(elapsedSeconds / 3600)).padStart(2, '0');
  let minutes = String(Math.floor((elapsedSeconds % 3600) / 60)).padStart(2, '0');
  let seconds = String(elapsedSeconds % 60).padStart(2, '0');
  document.getElementById("timeDisplay").textContent = `${hours}:${minutes}:${seconds}`;
}

// Start timer
function startTimer() {
  if (!isRunning) {
    intervalId = setInterval(() => {
      elapsedSeconds++;
      updateDisplay();
    }, 1000);
    isRunning = true;
  }
}

// Pause timer
function pauseTimer() {
  if (isRunning) {
    clearInterval(intervalId);
    isRunning = false;
  }
}

// Resume timer
function resumeTimer() {
  if (!isRunning) {
    startTimer();
  }
}

// Stop timer (halt without reset)
function stopTimer() {
  clearInterval(intervalId);
  isRunning = false;
}

// Reset timer (stop + clear time)
function resetTimer() {
  stopTimer();
  elapsedSeconds = 0;
  updateDisplay();
}

// Initial display
updateDisplay();

/* 
  📌 Output:
  - A stopwatch-like timer appears on the screen.
  - Buttons available: Start, Pause, Resume, Stop, Reset.
  - Clicking "Start" → Timer begins counting from 00:00:00.
  - "Pause" → Freezes time.
  - "Resume" → Continues counting.
  - "Stop" → Halts timer but keeps the current time.
  - "Reset" → Stops and resets timer to 00:00:00.
*/
