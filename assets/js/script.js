let pomodoroTop = document.getElementById("pomodoroTop");
let pomodoroBottom = document.getElementById("pomodoroBottom");

let sessionIncrease = document.getElementById("sessionIncrease");
let sessionTime = document.getElementById("sessionTime");
let sessionDecrease = document.getElementById("sessionDecrease");

let breakIncrease = document.getElementById("breakIncrease");
let breakTime = document.getElementById("breakTime");
let breakDecrease = document.getElementById("breakDecrease");

let sessionCounter = 25;
let breakCounter = 5;

sessionTime.append(sessionCounter);
breakTime.append(breakCounter);

sessionIncrease.addEventListener("click", (e) => {
  e.preventDefault;
  sessionCounter += 1;
  sessionTime.innerHTML = sessionCounter;
});

sessionDecrease.addEventListener("click", (e) => {
  e.preventDefault;
  sessionCounter -= 1;
  sessionTime.innerHTML = sessionCounter;
});

breakIncrease.addEventListener("click", (e) => {
  e.preventDefault;
  breakCounter += 1;
  breakTime.innerHTML = breakCounter;
});

breakDecrease.addEventListener("click", (e) => {
  e.preventDefault;
  breakCounter -= 1;
  breakTime.innerHTML = breakCounter;
});