console.log('beep boop beep');

// querySelectors for the Buttons
var greenBtn = document.querySelector('#green');
var redBtn = document.querySelector('#red');
var yellowBtn = document.querySelector('#yellow');
var blueBtn = document.querySelector('#blue');
var startBtn = document.querySelector('#start');
var counter = document.querySelector('#counter');
var timerId0 = null;
var timerId1 = null;
var timerId2 = null;
var timerId3 = null;
var timerId4 = null;
var counterVal = parseInt(counter.textContent);


// test function for all color changes
var fourColorFlash = function () {
  greenBtn.style.backgroundColor = 'red';
  timerId1 = setTimeout(function() {
  greenBtn.style.backgroundColor = 'green';
  },250);

  redBtn.style.backgroundColor = 'blue';
  timerId2 = setTimeout(function() {
  redBtn.style.backgroundColor = 'red';
  },250);

  yellowBtn.style.backgroundColor = 'green';
  timerId3 = setTimeout(function() {
  yellowBtn.style.backgroundColor = 'yellow';
  },250);

  blueBtn.style.backgroundColor = 'yellow';
  timerId4 = setTimeout(function() {
  blueBtn.style.backgroundColor = 'blue';
  },250);
};


var addCounter = function() {
  counterVal += 1;
  counter.textContent = counterVal;
}








// handle start game
var handleStartGame = function() {
  addCounter();
  timerId0 = setTimeout(fourColorFlash,1000);

  // greenBtn.style.backgroundColor = 'red';
  // timerId = setTimeout(function() {
  // greenBtn.style.backgroundColor = 'green';
  // },250);
  // greenBtn.classList.toggle('flash-green');
};


// add EventListener for startBtn to start game
startBtn.addEventListener('click',handleStartGame);



























