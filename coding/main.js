console.log('Hello World');

var inputPlayerOne = document.getElementById('playerOneInput');
var inputPlayerTwo = document.getElementById('playerTwoInput');
var playerOneSpan = document.getElementById('playerOne');
var playerTwoSpan = document.getElementById('playerTwo');

var redPeace = document.getElementById('redPeace');
var blackPeace = document.getElementById('blackPeace');

redPeace.addEventListener('click', function(event) {
  redPeace.classList.add('activeRed');
  blackPeace.classList.remove('activeBlack');
  console.log('red clicked');
});

blackPeace.addEventListener('click', function(event) {
  blackPeace.classList.add('activeBlack');
  redPeace.classList.remove('activeRed');
  console.log('black clicked')
});


inputPlayerOne.addEventListener('keyup', function(event) {
  if(event.keyCode === 13) {
    playerOneSpan.textContent = inputPlayerOne.value;
  }
});
inputPlayerTwo.addEventListener('keyup', function(event) {
  if(event.keyCode === 13) {
    playerTwoSpan.textContent = inputPlayerTwo.value;
  }
});

