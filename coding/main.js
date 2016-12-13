console.log('Hello World');

var inputPlayerOne = document.getElementById('playerOneInput');
var inputPlayerTwo = document.getElementById('playerTwoInput');
var playerOneSpan = document.getElementById('playerOne');
var playerTwoSpan = document.getElementById('playerTwo');

var redPeace = document.getElementById('redPeace');
var blackPeace = document.getElementById('blackPeace');

var rowOne = document.getElementById('trRow1');
var rowTwo = document.getElementById('trRow2');
var rowThree = document.getElementById('trRow3');
var rowFour = document.getElementById('trRow4');
var rowFive = document.getElementById('trRow5');
var rowSix = document.getElementById('trRow6');
var rowSeven = document.getElementById('trRow7');

var ColumnOne = document.getElementById('tdColumnOne');
var ColumnTwo = document.getElementById('tdColumnTwo');
var ColumnThree = document.getElementById('tdColumnThree');
var ColumnFour = document.getElementById('tdColumnFour');
var ColumnFive = document.getElementById('tdColumnFive');
var ColumnSix = document.getElementById('tdColumnSix');
var ColumnSeven = document.getElementById('tdColumnSeven');


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

var selectedPeace = null;

redPeace.addEventListener('click', function(event) {
  redPeace.classList.add('activeRed');
  blackPeace.classList.remove('activeBlack');
  console.log('red clicked');
  selectedPeace = redPeace;
  return selectedPeace;
});

blackPeace.addEventListener('click', function(event) {
  blackPeace.classList.add('activeBlack');
  redPeace.classList.remove('activeRed');
  console.log('black clicked')
  selectedPeace = blackPeace;
  return selectedPeace;
});

rowOne.addEventListener('click', function(event) {
  console.log('clicked');
})

