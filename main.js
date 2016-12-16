var board   = document.querySelector('.board');
var input1  = document.querySelector('.p1');
var input2  = document.querySelector('.p2');
var p1score = document.querySelector('p1-score');
var p2score = document.querySelector('p2-score');

var $divs  = document.querySelectorAll('.divs');
var $boxes = [];
var bars   = [];

var boxOne   = [];
var boxTwo   = [];
var boxThree = [];
var boxFour  = [];

var playerOne = {
  name:   null,
  boxes:    [],
  number:'one',
  first:  null,
  second: null,
  third:  null,
  fourth: null
  }
var playerTwo = {
  name:   null,
  boxes:    [],
  number:'two',
  first:  null,
  second: null,
  third:  null,
  fourth: null
};

var currentPlayer = playerOne;

var nextTurn = function() {
  //change who currentPlayer points at
  if (currentPlayer === playerTwo) {
    currentPlayer = playerOne;
    input1.style.color = 'black';
    input2.style.color = 'pink';
  } else {
    currentPlayer = playerTwo;
    input2.style.color = 'black';
    input1.style.color = 'lightblue';
  }
};

input1.addEventListener('keyup', function(e) {
  if ( e.keyCode === 13 ) {
    input1.style.color = 'lightblue';
    input2.focus();
    playerOne.name = e.target.value;
  }
})
input2.addEventListener('keyup', function(e) {
  if ( e.keyCode === 13 ) {
    input2.style.color = 'pink';
    playerTwo.name = e.target.value;
    input2.blur();
  }
})



// via http://stackoverflow.com/questions/37010277/cannot-push-element-to-array-after-using-queryselectorall
bars.forEach.call(document.querySelectorAll('.bar'), function(e) {
        bars.push(e);
});
$boxes.forEach.call(document.querySelectorAll('.box'), function(e) {
        $boxes.push(e);
});


/**
 * checks if a vertical or horixontal bar is clicked, based on class names.
 * adds 'clicked-bar' class to event target.
 * invokes funciton nextTurn() if a bar is clicked.
 * @param {Object} e - event object
 */
function barClassAdder(e){
  if ( e.target.classList.contains('h') || e.target.classList.contains('v') ) {
    e.target.classList.add('clicked-bar');
    nextTurn();
  }
}



function boxChecker(e){
  if ( currentPlayer === playerOne ) {
    if ( bars[0].classList.contains('clicked-bar') &&
      bars[2].classList.contains('clicked-bar') &&
      bars[3].classList.contains('clicked-bar') &&
      bars[5].classList.contains('clicked-bar') ) {
        if ( !playerTwo.first ){
          playerOne.boxes.push(1);
          playerOne.first = 'playerOne';
          $boxes[0].style.background = 'lightblue';
          nextTurn()
        }
    }
    if ( bars[1].classList.contains('clicked-bar') &&
      bars[3].classList.contains('clicked-bar') &&
      bars[4].classList.contains('clicked-bar') &&
      bars[6].classList.contains('clicked-bar') ) {
        if ( !playerTwo.second ){
          playerOne.boxes.push(1);
          playerOne.second = 'playerOne';
          $boxes[1].style.background = 'lightblue';
          nextTurn()
        }
    };
    if ( bars[5].classList.contains('clicked-bar') &&
      bars[7].classList.contains('clicked-bar') &&
      bars[8].classList.contains('clicked-bar') &&
      bars[10].classList.contains('clicked-bar') ) {
        if ( !playerTwo.third ){
          playerOne.boxes.push(1);
          playerOne.third = 'playerOne';
          $boxes[2].style.background = 'lightblue';
          nextTurn()
        }
    };
    if ( bars[6].classList.contains('clicked-bar') &&
      bars[8].classList.contains('clicked-bar') &&
      bars[9].classList.contains('clicked-bar') &&
      bars[11].classList.contains('clicked-bar') ) {
        if ( !playerTwo.fourth ){
          playerOne.boxes.push(1);
          playerOne.fourth = 'playerOne';
          $boxes[3].style.background = 'lightblue';
          nextTurn()
        }
    };
    if (playerOne.score === true){
      updateScore();
    }
  }


  if ( currentPlayer === playerTwo ) {
    if ( bars[0].classList.contains('clicked-bar') &&
      bars[2].classList.contains('clicked-bar') &&
      bars[3].classList.contains('clicked-bar') &&
      bars[5].classList.contains('clicked-bar') ) {
        if ( !playerOne.first ){
          playerTwo.boxes.push(1);
          playerTwo.first = 'playerTwo';
          $boxes[0].style.background = 'pink';
          nextTurn();
        }
    }
    if ( bars[1].classList.contains('clicked-bar') &&
      bars[3].classList.contains('clicked-bar') &&
      bars[4].classList.contains('clicked-bar') &&
      bars[6].classList.contains('clicked-bar') ) {
        if ( !playerOne.second ){
          playerTwo.boxes.push(1);
          playerTwo.second = 'playerTwo';
          $boxes[1].style.background = 'pink';
          nextTurn();
        }
    };
    if ( bars[5].classList.contains('clicked-bar') &&
      bars[7].classList.contains('clicked-bar') &&
      bars[8].classList.contains('clicked-bar') &&
      bars[10].classList.contains('clicked-bar') ) {
         if ( !playerOne.third ){
          playerTwo.boxes.push(1);
          playerTwo.third = 'playerTwo';
          $boxes[2].style.background = 'pink';
          nextTurn();
        }
    };
    if ( bars[6].classList.contains('clicked-bar') &&
      bars[8].classList.contains('clicked-bar') &&
      bars[9].classList.contains('clicked-bar') &&
      bars[11].classList.contains('clicked-bar') ) {
        if ( !playerOne.fourth ){
          playerTwo.boxes.push(1);
          playerTwo.fourth = 'playerTwo';
          $boxes[3].style.background = 'pink';
          nextTurn();
        }
    };
    if (playerTwo.score === true){
      updateScore();
    }
  }
}

board.addEventListener('click', barClassAdder)
board.addEventListener('click', boxChecker)


var updateScore = function() {
  var sum = playerOne.boxes.reduce(function(a,b){
    return a + b;
  })
  p1score.textContent = sum;

}
