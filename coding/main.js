console.log('Hello World');

var inputPlayerOne = document.getElementById('playerOneInput');
var inputPlayerTwo = document.getElementById('playerTwoInput');
var playerOneSpan = document.getElementById('playerOne');
var playerTwoSpan = document.getElementById('playerTwo');

var rowOne = document.getElementById('trRow1');
var rowTwo = document.getElementById('trRow2');
var rowThree = document.getElementById('trRow3');
var rowFour = document.getElementById('trRow4');
var rowFive = document.getElementById('trRow5');
var rowSix = document.getElementById('trRow6');
var rowSeven = document.getElementById('trRow7');

var ColumnOne = document.querySelectorAll('.tdColumnOne');
var ColumnTwo = document.querySelectorAll('.tdColumnTwo');
var ColumnThree = document.querySelectorAll('.tdColumnThree');
var ColumnFour = document.querySelectorAll('.tdColumnFour');
var ColumnFive = document.querySelectorAll('.tdColumnFive');
var ColumnSix = document.querySelectorAll('.tdColumnSix');
var ColumnSeven = document.querySelectorAll('.tdColumnSeven');

var redPeace = document.getElementById('redPeace');
var blackPeace = document.getElementById('blackPeace');



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


// This event handler removes active from all peaces
// and then sets the clicked on peace to active
// also sets global variable selectedPeace to 'red' or 'black'
var selectPeace = function(evt) {
  // make sure no peace is active
  var $peaces = document.querySelectorAll('.peace');
  $peaces.forEach(function(peace) {
    peace.classList.remove('active');
  });
  var $peace = evt.target // either redPeace or blackPeace;
  $peace.classList.add('active');
  if ( $peace.id === 'redPeace' ) {
    selectedPeace = 'red';
  } else {
    selectedPeace = 'black';
  }
}

// This event handler adds selected peace color class to
// the lowest empty cell
var addPeace = function(event) {
  // clicking on top tr, so we need to get all the siblings
  var column = event.target.parentElement.children;
  for (var i = 7; i >= 0; i--) {
    if ( column[i].classList.contains('empty') ) {
      console.log('i worked');
      column[i].classList.add(selectedPeace);
      column[i].classList.remove('empty');
      break;
    }
  }
}

redPeace.addEventListener('click', selectPeace);
blackPeace.addEventListener('click', selectPeace);

rowOne.addEventListener('click', addPeace);
rowTwo.addEventListener('click', addPeace);
rowThree.addEventListener('click', addPeace);





