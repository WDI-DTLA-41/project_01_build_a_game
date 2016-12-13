console.log('beep boop beep');

// querySelectors for the Buttons
var greenBtn = document.querySelector('#green');
var redBtn = document.querySelector('#red');
var yellowBtn = document.querySelector('#yellow');
var blueBtn = document.querySelector('#blue');
var startBtn = document.querySelector('#start');
var counter = document.querySelector('#counter');
var btnContainer = document.querySelector('#btn-container');
var timerId0 = null;
var timerId1 = null;
var timerId2 = null;
var timerId3 = null;
var timerId4 = null;
var counterVal = parseInt(counter.textContent);
var sequenceArr = [];






// random number generator bet
var randomGen = function() {
  return Math.ceil(Math.random()*4);
}


// test function for all color changes
var fourColorFlash = function () {
  sequence = randomGen();
  if (sequence === 1) {
    greenBtn.style.backgroundColor = 'white';
    timerId1 = setTimeout(function() {
    greenBtn.style.backgroundColor = 'green';
    },250);
  } else if (sequence === 2) {
    redBtn.style.backgroundColor = 'white';
    timerId2 = setTimeout(function() {
    redBtn.style.backgroundColor = 'red';
    },250);
  } else if (sequence === 3) {
    yellowBtn.style.backgroundColor = 'white';
    timerId3 = setTimeout(function() {
    yellowBtn.style.backgroundColor = 'yellow';
    },250);
  } else {
    blueBtn.style.backgroundColor = 'white';
    timerId4 = setTimeout(function() {
    blueBtn.style.backgroundColor = 'blue';
    },250);
  }
  sequenceArr.push(sequence);
};

// adds to the counter for each function loop
var addCounter = function() {
  counterVal += 1;
  counter.textContent = counterVal;
};

// resets the Counter back to 0
var resetCounter = function() {
  counter.textContent = 0;
}
// gameOver function when userInput is incorrect
var gameOver = function() {
  // playing gameOver audio file
  resetCounter();
};

// handle start game
var handleStartGame = function() {
  addCounter();
  console.log(Math.floor);
  timerId0 = setTimeout(fourColorFlash,1000);
};


// add EventListener for startBtn to start game
startBtn.addEventListener('click',handleStartGame);

// add EventListener for userInputs
// btnContainer.addEventListener('click', );

























