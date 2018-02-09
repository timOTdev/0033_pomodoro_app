// Sound
let windchime = new Audio("./assets/sound/windchime.mp3");
let piano = new Audio("./assets/sound/piano.mp3");

// Id Selectors
let sessionTime = document.getElementById("sessionTime");
let sessionAction = document.getElementById("sessionAction");
let sessionIncrease = document.getElementById("sessionIncrease");
let sessionDecrease = document.getElementById("sessionDecrease");
let startIcon = document.getElementById("startIcon");
let pauseIcon = document.getElementById("pauseIcon");

let breakTime = document.getElementById("breakTime");
let breakAction = document.getElementById("breakAction");
let breakIncrease = document.getElementById("breakIncrease");
let breakDecrease = document.getElementById("breakDecrease");

let sessionCounter = 25;
let breakCounter = 1;
sessionTime.append(sessionCounter + ":00");
breakTime.append(breakCounter + ":00");

let sessionStartTime = sessionCounter * 60; // 1500
let sessionIsRunning = false;
let sessionTimer;
let startSessionTimer;

let breakStartTime = breakCounter * 60; // 300

// Click Listeners
sessionAction.addEventListener("click", (e) => {
  e.preventDefault;
  sessionIsRunning ? pauseSession() : startSession(sessionStartTime);
})

let startSession = function(sessionStartTime) {
  sessionIsRunning = true;
  startIcon.classList.toggle("hidden");
  pauseIcon.classList.toggle("hidden");
  // startIcon.className = "hidden";
  // pauseIcon.className = "";

  let sessionTime = document.getElementById("sessionTime");
  // sessionTimer = 10;
  sessionTimer = sessionStartTime;
  let minutes;
  let seconds;
  
  startSessionTimer = setInterval(function() {
    if (sessionTimer === 0) {
      console.log("Session timer is 0");
      sessionIsRunning = false;
      clearInterval(startSessionTimer);
      sessionTime = sessionTime.textContent = sessionCounter + ":00";
      windchime.play();
    }

    minutes = Math.floor(sessionTimer / 60);
    seconds = (sessionTimer % 60);
    
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    sessionTimer--;
    sessionTime.textContent = minutes + ":" + seconds;
    console.log(sessionIsRunning, sessionStartTime, sessionTimer);
  }, 1000);
}

let pauseSession = () => {
  sessionIsRunning = false;
  startIcon.classList.toggle("hidden");
  pauseIcon.classList.toggle("hidden");

  console.log(sessionTimer);
  sessionStartTime = sessionTimer;
  console.log(sessionStartTime);
  clearInterval(startSessionTimer);

  console.log(sessionIsRunning, sessionStartTime, sessionTimer);
}

sessionIncrease.addEventListener("click", (e) => {
  let sessionTime = document.getElementById("sessionTime");
  e.preventDefault;
  e.stopPropagation();
  sessionCounter += 1;
  sessionStartTime = sessionCounter * 60;
  sessionTime.textContent = sessionCounter + ":00";
  console.log("Session time increased to:" + sessionCounter + " minutes, " + sessionStartTime + " seconds");
});

sessionDecrease.addEventListener("click", (e) => {
  let sessionTime = document.getElementById("sessionTime");
  e.preventDefault;
  e.stopPropagation();
  sessionCounter -= 1;
  sessionStartTime = sessionCounter * 60;
  sessionTime.textContent = sessionCounter + ":00";
  console.log("Session time decreased to:" + sessionCounter + " minutes, " + sessionStartTime + " seconds");
});

// breakAction.addEventListener("click", (e) => {
//   let breakTime = document.getElementById("breakTime");
//   e.preventDefault;
//   let timer = breakStartTime - 1;
//   let minutes;
//   let seconds;
//   let startBreak = setInterval(function() {
//     if (timer === 0) {
//       clearInterval(startBreak);
//       breakTime = breakTime.textContent = breakCounter + ":00";
//       piano.play();
//     }

//     minutes = Math.floor(timer / 60);
//     seconds = (timer % 60);
    
//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     seconds = seconds < 10 ? "0" + seconds : seconds;
    
//     timer--;
//     breakTime.textContent = minutes + ":" + seconds;
//   }, 1000);
// })

// breakIncrease.addEventListener("click", (e) => {
//   let breakTime = document.getElementById("breakTime");
//   e.preventDefault;
//   e.stopPropagation();
//   breakCounter += 1;
//   breakStartTime = breakCounter * 60;
//   breakTime.textContent = breakCounter + ":00";
//   console.log("Break time increased to:" + breakCounter + " minutes, " + breakStartTime + " seconds");
// });

// breakDecrease.addEventListener("click", (e) => {
//   let breakTime = document.getElementById("breakTime");
//   e.preventDefault;
//   e.stopPropagation();
//   breakCounter -= 1;
//   breakStartTime = breakCounter * 60;
//   breakTime.textContent = breakCounter + ":00";
//   console.log("Break time decreased to:" + breakCounter + " minutes, " + breakStartTime + " seconds");
// });