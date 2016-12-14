var board = document.querySelector('.board');
var boxes = document.querySelectorAll('.box');
var input1 = document.querySelector('.p1');
var input2 = document.querySelector('.p2');
var $divs = document.querySelectorAll('.divs');
var x = null;
var y = null;

var gameBoard = [
   [0, 1, 2, 3, 4],
   [0, 1, 2, 3, 4],
   [0, 1, 2, 3, 4],
   [0, 1, 2, 3, 4],
   [0, 1, 2, 3, 4]
];

var players = [
  {
    name: null
  },
  {
    name: null
  }
];



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
    x = position.row;
    y = position.col;
    x = parseInt(x);
    y = parseInt(y);
    gameBoard[y][x] = 'bar';
    checkPerimeter(e);
  }
}

for ( var i = 0; i < $divs.length; i++ ) {
  $divs[i].addEventListener('click', handleClick);
}


//  g a m e  l o g i c  //
var checkPerimeter = (e) => {
  // console.log(e.target);
  console.log('x: ' + x,'y: ' + y);
  console.log('gameBoard[y][x]: ' + gameBoard[y][x]);
  console.log('gameBoard[y + 2][x]: ' + gameBoard[y+2][x]);
  console.log('gameBoard[y + 1][x + 1]: ' + gameBoard[y+1][x+1]);
  console.log('gameBoard[y + 1][x - 1]: ' + gameBoard[y+1][x-1]);
  // for ( var j = 0; j < $divs.length; j++ ) {
          // for ( var j in this.dataset ) {
          // for clicked vertical bar, checks for clicked bars around box to the right
      if ( gameBoard[y][x]     === 'bar' &&   //vertical bar at click
           gameBoard[y+2][x]   === 'bar' &&   //vertical bar opposite of click on right
           gameBoard[y+1][x+1] === 'bar' &&   //horizontal bar below, right
           gameBoard[y+1][x-1] === 'bar' ) {  //horizontal bar above, right
        // console.log('j: ' + j);
        console.log('box!');
        $divs[x+5].classList.add('player1');
      }
  // }
}
  // console.log(e.target.dataset);
  // console.log('gameboard ', gameBoard);













// //  g a m e  l o g i c  //

// var vBarBoxToLeft = function(x,y) {
//   for ( var j = 0; j < $divs.length; j++ ) {
//     // for clicked vertical bar, checks for clicked bars around box to the left
//     if ( gameBoard[x][y]     === 'bar' && gameBoard[x-2][y]   === 'bar' &&
//          gameBoard[x-1][y-1] === 'bar' && gameBoard[x-1][y+1] === 'bar' ) {
//       $divs[j-1].classList.add('player1');
//     }
//   }
// }
// var hBarBoxBelow = function(x,y) {
//   for ( var j = 0; j < $divs.length; j++ ) {
//     // for clicked horizontal bar, checks for clicked bars around box below
//     if ( gameBoard[x][y]     === 'bar' && gameBoard[x+1][y+1] === 'bar' &&
//          gameBoard[x-1][y+1] === 'bar' && gameBoard[x][y+2]   === 'bar' ) {
//       $divs[j+5].classList.add('player1');
//     }
//   }
// }
// var hBarBoxAbove = function(x,y) {
//   for ( var j = 0; j < $divs.length; j++ ) {
//     // for clicked horizontal bar, checks for clicked bars around box above
//     if ( gameBoard[x][y]     === 'bar' && gameBoard[x-1][y-1] === 'bar' &&
//          gameBoard[x+1][y-1] === 'bar' && gameBoard[x][y-2]   === 'bar' ) {
//       $divs[j-5].classList.add('player1');
//     }
//   }
// };

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
//    [1, 2, 3, 4, 5 ],
//    [6, 7, 8, 9, 10],
//    [11,12,13,14,15],
//    [16,17,18,19,20],
//    [21,22,23,24,25]
// ];










// via http://stackoverflow.com/questions/37010277/cannot-push-element-to-array-after-using-queryselectorall
// boxes.forEach.call(document.querySelectorAll('.box'), function(e){
//         boxes.push(e);
// });

// var bars = [];
// bars.forEach.call(document.querySelectorAll('.bar'), function(e){
//         bars.push(e);
// });
