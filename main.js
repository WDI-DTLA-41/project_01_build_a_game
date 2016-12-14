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
  if ( e.keyCode === 13 ) {
    input2.focus();
    players[0].name = e.target.value;
  }
})
input2.addEventListener('keyup', e => {
  if ( e.keyCode === 13 ) {
    players[1].name = e.target.value;
  }
})


var handleClick = function(e) {
  if ( e.target.classList.contains('bar') ){
    // console.log(this);
    this.removeEventListener('click', handleClick);
    e.target.classList.add('clicked-bar');
    var position = this.dataset;
    gameBoard[position.row][position.col] = 'bar';
    // checkBoard();
  }
}

for ( var i = 0; i < $divs.length; i++ ) {
  $divs[i].addEventListener('click', handleClick);
}

//  g a m e  l o g i c  //
board.addEventListener('click', function(e) {
  // console.log(e.target.dataset);
  // console.log('gameboard ', gameBoard);
  var pos2 = this.dataset;
  var x    = pos2.row;
  var y    = pos2.col;
  vBarBoxToLeft(x,y);
  vBarBoxToRight(x,y);
  hBarBoxBelow(x,y);
  hBarBoxAbove(x,y);
});

var vBarBoxToRight = function(x,y) {
  for ( var j = 0; j < $divs.length; j++ ) {
  // for ( var j in this.dataset ) {
    console.log('x: ' + x,'y: ' + y,'j: ' + j);
    // for clicked vertical bar, checks for clicked bars around box to the right
    if ( gameBoard[x][y]     === 'bar' && gameBoard[x+2][y]   === 'bar' &&
         gameBoard[x+1][y+1] === 'bar' && gameBoard[x+1][y-1] === 'bar' ) {
      $divs[j+1].classList.add('player1');
    }
  }
}
var vBarBoxToLeft = function(x,y) {
  for ( var j = 0; j < $divs.length; j++ ) {
    // for clicked vertical bar, checks for clicked bars around box to the left
    if ( gameBoard[x][y]     === 'bar' && gameBoard[x-2][y]   === 'bar' &&
         gameBoard[x-1][y-1] === 'bar' && gameBoard[x-1][y+1] === 'bar' ) {
      $divs[j-1].classList.add('player1');
    }
  }
}
var hBarBoxBelow = function(x,y) {
  for ( var j = 0; j < $divs.length; j++ ) {
    // for clicked horizontal bar, checks for clicked bars around box below
    if ( gameBoard[x][y]     === 'bar' && gameBoard[x+1][y+1] === 'bar' &&
         gameBoard[x-1][y+1] === 'bar' && gameBoard[x][y+2]   === 'bar' ) {
      $divs[j+5].classList.add('player1');
    }
  }
}
var hBarBoxAbove = function(x,y) {
  for ( var j = 0; j < $divs.length; j++ ) {
    // for clicked horizontal bar, checks for clicked bars around box above
    if ( gameBoard[x][y]     === 'bar' && gameBoard[x-1][y-1] === 'bar' &&
         gameBoard[x+1][y-1] === 'bar' && gameBoard[x][y-2]   === 'bar' ) {
      $divs[j-5].classList.add('player1');
    }
  }
};

        // var p1Score = document.querySelector('.p1-score');
        // var p1ScoreNum = 0;
        // var p2Score = document.querySelector('.p2-score');
        // var p2ScoreNum = 0;
        // //  s c o r i n g  l o g i c  //
        // var updateScore = function() {
        //   for (var k = 0; k < $divs.length; k++) {
        //     if (gameboard[x][y] === 'box' && $divs[k].classList.contains('player1')){
        //       p1ScoreNum++
        //     }
        //     if (gameboard[x][y] === 'box' && $divs[k].classList.contains('player2')){
        //       p2ScoreNum++
        //     }
        //     p1Score.textContent = p1ScoreNum;
        //     p2Score.textContent = p2ScoreNum;
        //   }
        // }


















// var gameBoard = [
//    [0, 1, 2, 3, 4],
//    [0, 1, 2, 3, 4],
//    [0, 1, 2, 3, 4],
//    [0, 1, 2, 3, 4],
//    [0, 1, 2, 3, 4]
// ];




// via http://stackoverflow.com/questions/37010277/cannot-push-element-to-array-after-using-queryselectorall
// boxes.forEach.call(document.querySelectorAll('.box'), function(e){
//         boxes.push(e);
// });

// var bars = [];
// bars.forEach.call(document.querySelectorAll('.bar'), function(e){
//         bars.push(e);
// });
