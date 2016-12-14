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

var redPeace = document.getElementById('Peace');
var blackPeace = document.getElementById('Peace');


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
  selectedPeace = event.target.style.backgroundColor;
  console.log(event.target.style.backgroundColor);
});

blackPeace.addEventListener('click', function(event) {
  blackPeace.classList.add('activeBlack');
  redPeace.classList.remove('activeRed');
  selectedPeace = event.target.style.backgroundColor;
  console.log('black clicked')
});

  rowOne.addEventListener('click', function(event) {
    console.log('clicked');
    for(var i = 6; i >= 0; i--) {
      if(ColumnOne[i].getAttribute('id') === 'backGroundColorOne'){
        console.log('i worked');
        ColumnOne[i].style.backgroundColor = selectedPeace;
        break;
      }
    }
  });
  rowTwo.addEventListener('click', function(event) {
    console.log('clicked');
    for(var i = 6; i >= 0; i--) {
      if(ColumnTwo[i].getAttribute('id') === 'backGroundColorOne'){
        console.log('i worked');
        ColumnTwo[i].style.backgroundColor = selectedPeace;
        break;
      }
    }
  });
  rowThree.addEventListener('click', function(event) {
    console.log('clicked');
    for(var i = 6; i >= 0; i--) {
      if(ColumnThree[i].getAttribute('id') === 'backGroundColorOne'){
        console.log('i worked');
        ColumnThree[i].style.backgroundColor = selectedPeace;
        break;
      }
    }
  });






