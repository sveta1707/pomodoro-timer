const pomodoroTime = document.getElementById("pomodoro-time");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");

let time = 1500; 
let interval;

function formatTime(value) {
  return value < 10 ? "0" + value : value.toString();
}


function updateTimer() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  pomodoroTime.textContent = `${formatTime(minutes)}:${formatTime(seconds)}`;
  
  if (time === 0) {
    clearInterval(interval); 
    pomodoroTime.textContent = "25:00"; 
    startBtn.textContent = "start"; 
  } else {
    time--; 
  }
}

startBtn.addEventListener("click", () => {
  if (startBtn.textContent === "start") {
    startBtn.textContent = "stop";
    interval = setInterval(updateTimer, 1000);
  } else {
    startBtn.textContent = "start";
    clearInterval(interval); 
  }
});

resetBtn.addEventListener("click", () => {
  clearInterval(interval); 
  time = 1500; 
  pomodoroTime.textContent = "25:00"; 
  startBtn.textContent = "start"; 
});