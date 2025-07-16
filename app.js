let count = 0;
let sessions = 0;

function updateDisplay() {
  document.getElementById("counter").textContent = count;
  document.getElementById(
    "sessions"
  ).textContent = `Total Sessions Completed: ${sessions}`;
  localStorage.setItem("japCount", count);
  localStorage.setItem("japSessions", sessions);
}

function incrementCounter() {
  const message = document.getElementById("message");
  const bell = document.getElementById("bellSound");

  bell.play();
  count++;
  if (count > 108) {
    count = 0;
    sessions++;
    message.textContent = "108 Chants Completed! Starting Over.";
  } else {
    message.textContent = "";
  }
  updateDisplay();
}

function resetCounter() {
  count = 0;
  sessions = 0;
  document.getElementById("message").textContent = "";
  updateDisplay();
  localStorage.removeItem("japCount");
  localStorage.removeItem("japSessions");
}

window.onload = function () {
  const savedCount = localStorage.getItem("japCount");
  const savedSessions = localStorage.getItem("japSessions");
  if (savedCount !== null) count = parseInt(savedCount, 10);
  if (savedSessions !== null) sessions = parseInt(savedSessions, 10);
  updateDisplay();
  document
    .getElementById("japButton")
    .addEventListener("click", incrementCounter);
};
