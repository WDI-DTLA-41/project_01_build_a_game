var board = document.querySelector('.board');
var boxes = document.querySelectorAll('.box');
var $divs = document.querySelectorAll('.divs');

var gameBoard = [
   [1, 2, 3, 4, 5 ],
   [6, 7, 8, 9, 10],
   [11,12,13,14,15],
   [16,17,18,19,20],
   [21,22,23,24,25]
];

var players = [
  {
    name: null
  },
  {
    name: null
  }
];


var input1 = document.querySelector('.p1');
var input2 = document.querySelector('.p2');

input1.addEventListener('keyup', e => {
  // console.log('code', e.keyCode);
  if ( e.keyCode === 13 ) {
    input2.focus();
    players[0].name = e.target.value;
  }
})
input2.addEventListener('keyup', e => {
  // console.log('code', e.keyCode);
  if ( e.keyCode === 13 ) {
    players[1].name = e.target.value;
  }
})


var handleClick = function(e) {
  if ( e.target.classList.contains('bar') ){
    console.log(this);
    this.removeEventListener('click', handleClick);
    e.target.classList.add('clicked-bar');
    var position = this.dataset;
    gameBoard[position.row][position.col] = 'bar';
    checkBoard();
  }
}

for ( var i = 0; i < $divs.length; i++ ) {
  $divs[i].addEventListener('click', handleClick);
}

var checkBoard = function(x, y) {
  for ( var j = 0; j < $divs.length; j++ ) {
    // for clicked vertical bar, checks for clicked bars around box to the right
    if ( gameBoard[x][y] === 'bar' && gameBoard[x+2][y] === 'bar' &&
          gameBoard[x+1][y+1] === 'bar' && gameBoard[x+1][y-1] === 'bar' ) {
      $divs[j+1].classList.add('player1');
    }
    // for clicked vertical bar, checks for clicked bars around box to the left
    if ( gameBoard[x][y] === 'bar' && gameBoard[x-2][y] === 'bar' &&
          gameBoard[x-1][y-1] === 'bar' && gameBoard[x-1][y+1] === 'bar' ) {
      $divs[j-1].classList.add('player1');
    }
    // for clicked horizontal bar, checks for clicked bars around box below
    if ( gameBoard[x][y] === 'bar' && gameBoard[x+1][y+1] === 'bar' &&
          gameBoard[x-1][y+1] === 'bar' && gameBoard[x][y+2] === 'bar' ) {
      $divs[j+5].classList.add('player1');
    }
    // for clicked horizontal bar, checks for clicked bars around box above
    if ( gameBoard[x][y] === 'bar' && gameBoard[x-1][y-1] === 'bar' &&
          gameBoard[x+1][y-1] === 'bar' && gameBoard[x][y-2] === 'bar' ) {
      $divs[j-5].classList.add('player1');
    }
  }
}

























// via http://stackoverflow.com/questions/37010277/cannot-push-element-to-array-after-using-queryselectorall
// boxes.forEach.call(document.querySelectorAll('.box'), function(e){
//         boxes.push(e);
// });

// var bars = [];
// bars.forEach.call(document.querySelectorAll('.bar'), function(e){
//         bars.push(e);
// });
