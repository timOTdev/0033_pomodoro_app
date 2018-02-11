// DOM Selectors
let sessionActionButton = document.getElementById("sessionActionButton");
let sessionIncreaseButton = document.getElementById("sessionIncreaseButton");
let sessionDecreaseButton = document.getElementById("sessionDecreaseButton");
let breakIncreaseButton = document.getElementById("breakIncreaseButton");
let breakDecreaseButton = document.getElementById("breakDecreaseButton");
let startIcon = document.getElementById("startIcon");
let pauseIcon = document.getElementById("pauseIcon");

// Sound Imports
let windchime = new Audio("./assets/sound/windchime.mp3");
let piano = new Audio("./assets/sound/piano.mp3");

// Clock Variables
let sessionTime = .1;
let breakTime = 5;
let sessionTimeConverted = sessionTime * 60;
let breakTimeConverted = breakTime * 60 - 1;
let sessionIsRunning = false;
let breakIsRunning = false;
let startSession, pauseSession, startBreak, sessionIntervalFunction, breakIntervalFunction, sessionCounter, breakCounter;
sessionDisplay.append(sessionTime + ":00");
breakDisplay.append(breakTime + ":00");

// Click Listeners
sessionActionButton.addEventListener("click", (e) => {
  e.preventDefault;
  sessionIsRunning ? pauseSession() : startSession(sessionTimeConverted);
})

sessionIncreaseButton.addEventListener("click", (e) => {
  e.preventDefault;
  let sessionDisplay = document.getElementById("sessionDisplay");
  sessionTime += 1;
  sessionTimeConverted = sessionTime * 60;
  sessionDisplay.textContent = sessionTime + ":00";
});

sessionDecreaseButton.addEventListener("click", (e) => {
  e.preventDefault;
  let sessionDisplay = document.getElementById("sessionDisplay");
  (sessionTime > 1) ? sessionTime -= 1 : null;
  sessionTimeConverted = sessionTime * 60;
  sessionDisplay.textContent = sessionTime + ":00";
});

breakIncreaseButton.addEventListener("click", (e) => {
  e.preventDefault;
  let breakDisplay = document.getElementById("breakDisplay");
  breakTime += 1;
  breakTimeConverted = breakTime * 60;
  breakDisplay.textContent = breakTime + ":00";
});

breakDecreaseButton.addEventListener("click", (e) => {
  e.preventDefault;
  let breakDisplay = document.getElementById("breakDisplay");
  (breakTime > 1) ? breakTime -= 1 : null;
  breakTimeConverted = breakTime * 60;
  breakDisplay.textContent = breakTime + ":00";
});

document.addEventListener('keyup', (event) => {
  switch(event.code) {
    case "Space":
      sessionIsRunning ? pauseSession() : startSession(sessionTimeConverted);
      break;
    case "ArrowUp":
      // let sessionDisplay = document.getElementById("sessionDisplay");
      sessionTime += 1;
      sessionTimeConverted = sessionTime * 60;
      sessionDisplay.textContent = sessionTime + ":00";
      break;
    case "ArrowDown":
      // let sessionDisplay = document.getElementById("sessionDisplay");
      (sessionTime > 1) ? sessionTime -= 1 : null;
      sessionTimeConverted = sessionTime * 60;
      sessionDisplay.textContent = sessionTime + ":00";
      break;
    case "ArrowLeft":
      // let breakDisplay = document.getElementById("breakDisplay");
      (breakTime > 1) ? breakTime -= 1 : null;
      breakTimeConverted = breakTime * 60;
      breakDisplay.textContent = breakTime + ":00";
      break;
    case "ArrowRight":
      // let breakDisplay = document.getElementById("breakDisplay");
      breakTime += 1;
      breakTimeConverted = breakTime * 60;
      breakDisplay.textContent = breakTime + ":00";
      break;
  }
});

// Core functions
startSession = () => {
  sessionIsRunning = true;
  startIcon.classList.toggle("hidden");
  pauseIcon.classList.toggle("hidden");

  let sessionDisplay = document.getElementById("sessionDisplay");
  let minutes, seconds;
  sessionCounter = sessionTimeConverted - 1;
  

  // let sessionDisplay = document.getElementById("sessionDisplay");
  let breakDisplay = document.getElementById("breakDisplay");
  // let minutes, seconds;
  // sessionisRunning = true;
  breakIsRunning = false;
  breakCounter = breakTimeConverted - 1;
  sessionIsRunning? sessionDisplay.classList.add("large") : sessionDisplay.classList.remove("large");
  breakIsRunning ? breakDisplay.classList.add("large") : breakDisplay.classList.remove("large");

  sessionIntervalFunction = setInterval(function() {
    if (sessionCounter === 0) {
      sessionIsRunning = false;
      sessionDisplay.classList.add("large");
      startIcon.classList.toggle("hidden");
      pauseIcon.classList.toggle("hidden");
      sessionTimeConverted = sessionTime * 60; 
      sessionDisplay = sessionDisplay.textContent = sessionTime + ":00";
      windchime.play();
      startBreak();
      clearInterval(sessionIntervalFunction);
    }

    minutes = Math.floor(sessionCounter / 60);
    seconds = (sessionCounter % 60);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    sessionCounter--;
    sessionDisplay.textContent = minutes + ":" + seconds;
  }, 1000);
}

pauseSession = () => {
  sessionIsRunning = false;
  startIcon.classList.toggle("hidden");
  pauseIcon.classList.toggle("hidden");
  sessionTimeConverted = sessionCounter + 1;
  clearInterval(sessionIntervalFunction);
}

startBreak = () => {
  let sessionDisplay = document.getElementById("sessionDisplay");
  let breakDisplay = document.getElementById("breakDisplay");
  let minutes, seconds;
  sessionisRunning = false;
  breakIsRunning = true;
  breakCounter = breakTimeConverted - 1;
  sessionIsRunning? sessionDisplay.classList.add("large") : sessionDisplay.classList.remove("large");
  breakIsRunning ? breakDisplay.classList.add("large") : breakDisplay.classList.remove("large");

  breakIntervalFunction = setInterval(function() {
    if (breakCounter === 0) {
      breakIsRunning = false;
      breakIsRunning ? breakDisplay.classList.add("large") : breakDisplay.classList.remove("large");
      breakTimeConverted = breakTime * 60; 
      breakDisplay = breakDisplay.textContent = breakTime + ":00";
      piano.play();
      clearInterval(breakIntervalFunction);
    }

    minutes = Math.floor(breakCounter / 60);
    seconds = (breakCounter % 60);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    breakCounter--;
    breakDisplay.textContent = minutes + ":" + seconds;
  }, 1000);
}
