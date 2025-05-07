// Define timer variables
let timer;
let isRunning = false;
let timeLeft = 25 * 60; // 25 minutes in seconds

// Elements
const timeLeftDisplay = document.getElementById("time-left");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const statusMessage = document.getElementById("status-message");

// Function to start or resume the timer
function startTimer() {
    if (isRunning) return;

    isRunning = true;
    startButton.disabled = true;
    stopButton.disabled = false;

    timer = setInterval(() => {
        timeLeft--;

        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timeLeftDisplay.textContent = `${formatTime(minutes)}:${formatTime(seconds)}`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            isRunning = false;
            statusMessage.textContent = "Time's up! Take a break!";
            startButton.disabled = false;
            stopButton.disabled = true;
            timeLeft = 25 * 60; // Reset to 25 minutes
            timeLeftDisplay.textContent = "25:00";
        }
    }, 1000);
}

// Function to stop the timer
function stopTimer() {
    clearInterval(timer);
    isRunning = false;
    startButton.disabled = false;
    stopButton.disabled = true;
    statusMessage.textContent = "Timer stopped! Resume when ready.";
}

// Function to format time (add leading zero if necessary)
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Event listeners
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);

// Initial state
stopButton.disabled = true;
