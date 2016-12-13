console.log('beep boop beep');

// querySelectors for the Buttons
var greenBtn = document.querySelector('#green');
var redBtn = document.querySelector('#red');
var yellowBtn = document.querySelector('#yellow');
var blueBtn = document.querySelector('#blue');
var startBtn = document.querySelector('#start');
var counter = document.querySelector('#counter');





















// handle start game
var handleStartGame = function(){
  greenBtn.style.removeProperty('background-color');
  greenBtn.classList.toggle('flash-green');
};


// add EventListener for startBtn to start game
startBtn.addEventListener('click',handleStartGame);



























