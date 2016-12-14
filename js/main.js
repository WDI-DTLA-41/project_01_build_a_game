
var boardWidth = 8;
var board = [[],[], [], [], [], [], [], []];
// var red = { color: 'red',
//             isKing: false};
// var black = { color: 'black',
//               isKing: false};
var pieces = [{color: 'red', isKing: false}, {color: 'black', isKing: false}];
var currentPlayer = pieces[0].color;
var

setBoard(boardWidth);
setPieces();
renderBoard();
displayMovable(currentPlayer);

// highlight clickable pieces that can move
function displayMovable(player){
  var highlightMovable = [];
  // for each row, do the following
  for(var i=0; i<boardWidth; i++){
    // for each square, do the following
    for(var j=0; j<boardWidth; j++){
      // if the square holds a piece
      if(board[i][j]!=='' && board[i][j].color===player){
        if(checkPiece(player, i, j)){
          highlightMovable.push(board[i][j]);
        }
      }
    }
  }
}
// return true if piece can legally move
function checkPiece(player, row, col){
  // if its red
  if(player==='red'){
    // if its on left edge
    if(col===0){
      // check if right corner is empty then return true
      if(board[row-1][col+1]===''){
        return true;
      }// if not empty check if its a black piece
      else {
        if(board[row-1][col+1].color==='black'){
          // check if can jump


          // check if row-1 === 0, its top row
          if(row-1 === 0){
            return false;
          } else {
            // its not top row, check top left and top right corner
            if(board[row-2][col-1])
          }
        } else {

        }
      }
    }
    if(board[row+1][col-1]==='' || board[row+1][col+1]===''){

    }
  // else it is black
  else{

  }
}

// find valid moves for currentPlayer
// function findValidMoves(player){
//   var validMoves = [];
//   for(var i=0; i<boardWidth; i++){
//     // for each row, do the following
//     for(var j=0; j<boardWidth; j++){
//       // for each square, do the following
//       // if the current square holds a player piece
//       if(board[i][j].color===player){
//         // check if piece is on top edge
//         if(i===0){
//           // check
//         }
//         // check if piece is on bottom edge
//         if(i===7){
//           // check
//         }
//         // if piece is on left edge
//         if(j===0){
//           // check
//           if(player==='red'){
//             // if the piece is a king
//             if(board[i][j].isKing){

//             } else{
//               // check right corner is occupied
//               // if its occupied
//             }
//           } else{

//           }
//         }
//         // if piece is on right edge
//         if(j===7){
//           // check
//         }
//         // piece is not on any edge
//         default
//       }
//     }
//   }
// }


// toggles current currentPlayer between red and black
function changePlayer(){
  if(currentPlayer==='red'){
    currentPlayer = pieces[1].color;
  } else {
    currentPlayer = pieces[0].color;
  }
}
// creates empty board of width boardWidth
function setBoard(length){
  for(var i=0; i<length; i++){
    for(var j=0; j<length; j++){
      board[i].push('');
    }
  }
}
// create game pieces and place in the board[]
function setPieces(){
  // fill player Black side
  for(var i=0; i<3; i++){
    for(var j=0; j<8; j++){
      // if even row
      if(i%2===0){
        // add  black pieces to every odd position
        if(j%2>0){
          board[i][j] = pieces[1];
        }
      } else if(j%2===0){
        // else it is odd row, add pieces to every even position
        board[i][j] = pieces[1];
      }
    }
  }
  // fill player Red side
  for(var i=7; i>4; i--){
    for(var j=0; j<8; j++){
      // if even row
      if(i%2===0){
        // add  black pieces to every odd position
        if(j%2>0){
          board[i][j] = pieces[0];
        }
      } else if(j%2===0){
        // else it is odd row, add pieces to every even position
        board[i][j] = pieces[0];
      }
    }
  }
  // set current turn to player red?
}
// runs at new game or player makes a move
// borrowed from Tic-Tac-Toe
function renderBoard(){
  var html = '';
  for(var i=0; i<board.length; i++){
    html += '<div class="row">';
    for(var j=0; j<board[i].length; j++){
      if(typeof board[i][j].color === 'undefined'){
        html += '<div class="square" data-row="' + i + '" data-col="' + j + '"></div>';
      } else {
        html += '<div class="square" data-row="' + i + '" data-col="' + j + '">' + board[i][j].color + '</div>';
      }
    }
    html += '</div>';
  }
  document.querySelector('#board').innerHTML = html;
}
