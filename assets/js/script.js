// Id Selectors
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
let sessionStartTime = sessionCounter * 60; // 1500
let breakStartTime = breakCounter * 60; // 300

sessionTime.append(sessionCounter + ":00");
breakTime.append(breakCounter + ":00");

// Sound
let windchime = new Audio("./assets/sound/windchime.mp3");
let piano = new Audio("./assets/sound/piano.mp3");

// Click Listeners
pomodoroTop.addEventListener("click", (e) => {
  e.preventDefault;
  let timer = sessionStartTime - 1;
  let minutes;
  let seconds;

  let startSession = setInterval(function() {
    if (timer === 0) {
      clearInterval(startSession);
      sessionTime = sessionTime.textContent = sessionCounter + ":00";
      windchime.play();
    }

    minutes = Math.floor(timer / 60);
    seconds = (timer % 60);
    
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    timer--;
    sessionTime.textContent = minutes + ":" + seconds;
  }, 1000);
})

pomodoroBottom.addEventListener("click", (e) => {
  e.preventDefault;
  let timer = breakStartTime - 1;
  let minutes;
  let seconds;
  let startBreak = setInterval(function() {
    if (timer === 0) {
      clearInterval(startBreak);
      breakTime = breakTime.textContent = breakCounter + ":00";
      piano.play();
    }

    minutes = Math.floor(timer / 60);
    seconds = (timer % 60);
    
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    timer--;
    breakTime.textContent = minutes + ":" + seconds;
  }, 1000);
})

sessionIncrease.addEventListener("click", (e) => {
  e.preventDefault;
  e.stopPropagation();
  sessionCounter += 1;
  sessionStartTime = sessionCounter * 60;
  sessionTime.textContent = sessionCounter + ":00";
  console.log("Session time increased to:" + sessionCounter + " minutes, " + sessionStartTime + " seconds");
});

sessionDecrease.addEventListener("click", (e) => {
  e.preventDefault;
  e.stopPropagation();
  sessionCounter -= 1;
  sessionStartTime = sessionCounter * 60;
  sessionTime.textContent = sessionCounter + ":00";
  console.log("Session time decreased to:" + sessionCounter + " minutes, " + sessionStartTime + " seconds");
});

breakIncrease.addEventListener("click", (e) => {
  e.preventDefault;
  e.stopPropagation();
  breakCounter += 1;
  breakStartTime = breakCounter * 60;
  breakTime.textContent = breakCounter + ":00";
  console.log("Break time increased to:" + breakCounter + " minutes, " + breakStartTime + " seconds");
});

breakDecrease.addEventListener("click", (e) => {
  e.preventDefault;
  e.stopPropagation();
  breakCounter -= 1;
  breakStartTime = breakCounter * 60;
  breakTime.textContent = breakCounter + ":00";
  console.log("Break time decreased to:" + breakCounter + " minutes, " + breakStartTime + " seconds");
});