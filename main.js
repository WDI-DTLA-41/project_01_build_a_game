var board  = document.querySelector('.board');
var boxes  = document.querySelectorAll('.box');
var input1 = document.querySelector('.p1');
var input2 = document.querySelector('.p2');
var $divs  = document.querySelectorAll('.divs');
var p1score = document.querySelector('p1-score');
var p2score = document.querySelector('p2-score');
var bars  = [];
var boxes = [];

var playerOne = {
  name:   null,
  boxes:    [],
  number: 'one'
  }
var playerTwo = {
  name:   null,
  boxes:    [],
  number: 'two'
};

var currentPlayer = playerTwo;

var nextTurn = function() {
  //change who currentPlayer points at
  if (currentPlayer === playerOne) {
    currentPlayer = playerTwo;
    input1.style.color = 'black';
    input2.style.color = 'pink';
  } else {
    currentPlayer = playerOne;
    input2.style.color = 'black';
    input1.style.color = 'lightblue';

  }
};

input1.addEventListener('keyup', function(e) {
  if ( e.keyCode === 13 ) {
    input2.focus();
    playerOne.name = e.target.value;
  }
})
input2.addEventListener('keyup', function(e) {
  if ( e.keyCode === 13 ) {
    playerTwo.name = e.target.value;
    input2.blur();
    nextTurn();
  }
})



// via http://stackoverflow.com/questions/37010277/cannot-push-element-to-array-after-using-queryselectorall
bars.forEach.call(document.querySelectorAll('.bar'), function(e){
        bars.push(e);
});
boxes.forEach.call(document.querySelectorAll('.box'), function(e){
        boxes.push(e);
});



board.addEventListener('click', function(e){
  if (e.target.classList.contains('h') || e.target.classList.contains('v')){
    e.target.classList.add('clicked-bar');
    nextTurn();
  }
});



board.addEventListener('click', function(e){
  // this.number = currentPlayer;
  if ( currentPlayer === playerOne &&
    bars[0].classList.contains('clicked-bar') &&
    bars[2].classList.contains('clicked-bar') &&
    bars[3].classList.contains('clicked-bar') &&
    bars[5].classList.contains('clicked-bar') ) {
      playerOne.boxes.push(1);
      boxes[0].style.background = 'lightblue';
  };
  if ( currentPlayer === playerOne &&
    bars[1].classList.contains('clicked-bar') &&
    bars[3].classList.contains('clicked-bar') &&
    bars[4].classList.contains('clicked-bar') &&
    bars[6].classList.contains('clicked-bar') ) {
      playerOne.boxes.push(1);
      boxes[1].style.background = 'lightblue';
  };
  if ( currentPlayer === playerOne &&
    bars[5].classList.contains('clicked-bar') &&
    bars[7].classList.contains('clicked-bar') &&
    bars[8].classList.contains('clicked-bar') &&
    bars[10].classList.contains('clicked-bar') ) {
      playerOne.boxes.push(1);
      boxes[2].style.background = 'lightblue';
  };
  if ( currentPlayer === playerOne &&
    bars[6].classList.contains('clicked-bar') &&
    bars[8].classList.contains('clicked-bar') &&
    bars[9].classList.contains('clicked-bar') &&
    bars[11].classList.contains('clicked-bar') ) {
      playerOne.boxes.push(1);
      boxes[3].style.background = 'lightblue';
  };


  if ( currentPlayer === playerTwo &&
    bars[0].classList.contains('clicked-bar') &&
    bars[2].classList.contains('clicked-bar') &&
    bars[3].classList.contains('clicked-bar') &&
    bars[5].classList.contains('clicked-bar') ) {
      playerTwo.boxes.push(1);
      boxes[0].style.background = 'pink';
  };
  if ( currentPlayer === playerTwo &&
    bars[1].classList.contains('clicked-bar') &&
    bars[3].classList.contains('clicked-bar') &&
    bars[4].classList.contains('clicked-bar') &&
    bars[6].classList.contains('clicked-bar') ) {
      playerTwo.boxes.push(1);
      boxes[1].style.background = 'pink';
  };
  if ( currentPlayer === playerTwo &&
    bars[5].classList.contains('clicked-bar') &&
    bars[7].classList.contains('clicked-bar') &&
    bars[8].classList.contains('clicked-bar') &&
    bars[10].classList.contains('clicked-bar') ) {
      playerTwo.boxes.push(1);
      boxes[2].style.background = 'pink';
  };
  if ( currentPlayer === playerTwo &&
    bars[6].classList.contains('clicked-bar') &&
    bars[8].classList.contains('clicked-bar') &&
    bars[9].classList.contains('clicked-bar') &&
    bars[11].classList.contains('clicked-bar') ) {
      playerTwo.boxes.push(1);
      boxes[3].style.background = 'pink';
  };
  if (playerOne.score === true){
    updateScore();
  }
});

var updateScore = function() {
  var sum = playerOne.boxes.reduce(function(a,b){
    return a + b;
  })
  p1score.textContent = sum;

}
