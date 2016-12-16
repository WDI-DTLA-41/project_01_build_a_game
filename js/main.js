var boardWidth = 8;
var board = [[],[], [], [], [], [], [], []];
var players = [{color: 'red', isKing: false}, {color: 'black', isKing: false}];
var currentPlayer = players[0].color;
var selectedPiece = false;
var highlighted;
var selectedPos;
var removedBlack = [];
var removedRed = [];

setBoard(boardWidth);
setPieces();
renderBoard();

// toggles current currentPlayer between red and black
function changePlayer(){
  if(currentPlayer==='red'){
    currentPlayer = players[1].color;
  } else {
    currentPlayer = players[0].color;
  }
}


function handleClick(evt){
  var position = this.dataset;
  var target;

  if(!selectedPiece){
    // select piece if belongs current player
    if(board[position.row][position.col].color===currentPlayer){
      console.log('Selected Piece ' + position.row + ':' + position.col);
      selectedPiece = !selectedPiece;
      highlighted = this.classList.add('highlight');
      selectedPos = position;


    }
  }
  else {
    console.log('targeted ' + position.row + ':' + position.col);
    selectedPiece = !selectedPiece;
    highlighted = document.querySelector('.highlight');
    highlighted.classList.remove('highlight');
    // 2nd click, click square to set piece if legal
    if(isValidMove(position)){
      changePlayer();
      changeBoard(position);
      checkKing(position);
      renderBoard();
    } else {
      // invalid move so do nothing?
      return false;
    }
  }
}
function checkKing(position){
  switch(board[position.row][position.col].color){
    case 'red':
      if(position.row === '0'){
        board[position.row][position.col].isKing = 'true';
      }
      break;
    case 'black':
      if(position.row === '7'){
        board[position.row][position.col].isKing = 'true';
      }
      break;
  }
}
function isValidMove(position){
  // if target position is empty
  if(typeof board[position.row][position.col].color==='undefined'){
    return isEmpty(position);
  }
  else {
    // square position is occupied
    console.log('Position is occupied');
    return false;
  }
}
function isEmpty(position){
  switch(currentPlayer){
    case 'red':
      if(board[selectedPos.row][selectedPos.col].isKing){
        return isMoveUpDown(position);
      } else {
        if(isJump(position, selectedPos)){
          return true;
        } else {
          return isMoveUp(position);
        }
      }
      break;
    case 'black':
      if(board[selectedPos.row][selectedPos.col].isKing){
        return isMoveUpDown(position);
      } else {
        if(isJump(position, selectedPos)){
          return true;
        } else {
          return isMoveDown(position);
        }
      }
      break;
    default:
      return false;
  }
}
function isJump(target, previous){
  switch(currentPlayer){
    case 'red':
    console.log('red isJumping?');
      // target is 2 spaces away, check both middle squares if occupied by opposite piece
      if(previous.row-target.row === 2 && Math.abs(previous.col - target.col) === 2){
        console.log('Red isJumping');
        console.log(target, previous);
        // if jumping to the top right
        if(previous.col - target.col < 0){
          console.log(board[target.row+1][target.col-1]);
          if(board[target.row+1][target.col-1].color === 'black'){
            console.log('jumped top left');
            removePiece('black', target.row+1, target.col-1);
            return true;
          }
        }
        // if jumping to the top left
        if(previous.col - target.col > 0){
          console.log(board[3][4].color); // 'black'
          if(board[parseInt(target.row + 1)][parseInt(target.col + 1)].color === 'black'){
            console.log('jumped top left');
            removePiece('black', target.row+1, target.col+1)
            return true;
          }
        }
      }
      break;
    case 'black':
    console.log('black isJumping?');
    // if target spaces is 2 squares away diagonally
      if(previous.row-target.row === (-2) && Math.abs(previous.col - target.col) === 2){
        console.log('Black isJumping');
        // if jumping to bottom left
        if(previous.col - target.col > 0){
          if(board[target.row-1][target.col+1].color === 'red'){
            console.log('jumped bottom left');
            removePiece('red', target.row-1, target.col+1);
            return true;
          }
        }
        // if jumping to bottom right
        if(previous.col - target.col < 0){
          if(board[target.row-1][target.col-1].color === 'red'){
            console.log('jumped bottom right');
            removePiece('red', target.row-1, target.col-1);
            return true;
          }
        }
      }
  }
}
function removePiece(player, row, col){
  switch(player){
    case 'red':
      // add to array
      removedBlack.push(board[row][col]);
      // remove from board
      board[row][col] = '';
      break;
    case 'black':
      // add to array
      removedRed.push(board[row][col]);
      // remove from board
      board[row][col] = '';
  }
}
// returns true if piece can move up and down to position
function isMoveUpDown(position){
  if(Math.abs(selectedPos.row-position.row)===1 && Math.abs(selectedPos.col-position.col)===1){
    return true;
  } else {
    return false;
  }
}
// returns true if selected red can move up to target position
function isMoveUp(position){
  if(selectedPos.row-position.row===1 && Math.abs(selectedPos.col-position.col)===1){
    return true;
  } else {
    return false;
  }
}
// returns true if selected black can move down to target position
function isMoveDown(position){
  if(selectedPos.row-position.row===(-1) && Math.abs(selectedPos.col-position.col)===1){
    return true;
  } else {
    return false;
  }
}
// updates array
function changeBoard(position){
  // remove selectedPos from its location and add it to position
  board[position.row][position.col] = board[selectedPos.row][selectedPos.col];
  board[selectedPos.row][selectedPos.col] = '';
}
// adds listeners to all squares
function addEventListeners(){
  var squares = document.querySelectorAll('.square');
  for(var i=0;i<squares.length;i++){
    squares[i].addEventListener('click', handleClick);
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
// set player pieces in the board[]
function setPieces(){
  for(var i=0; i<3; i++){
    for(var j=0; j<8; j++){
      var blackPiece = {color: 'black', isKing: false};
      if(i%2===0){
        // if even row, add black pieces to every odd position
        if(j%2>0){
          board[i][j] = blackPiece;
        }
      }
      else if(j%2===0){
        // else it is odd row, add black pieces to every even position
        board[i][j] = blackPiece;
      }
    }
  }
  for(var i=7; i>4; i--){
    for(var j=0; j<8; j++){
      var redPiece = {color: 'red', isKing: false};
      if(i%2===0){
        // add  red pieces to every odd position
        if(j%2>0){
          board[i][j] = redPiece;
        }
      }
      else if(j%2===0){
        // else it is odd row, add red pieces to every even position
        board[i][j] = redPiece;
      }
    }
  }
}
// borrowed from Tic-Tac-Toe
function renderBoard(){
  var html = '';
  for(var i=0; i<board.length; i++){
    html += '<div class="row">';
    for(var j=0; j<board[i].length; j++){
      if(i%2===0){
        // if even row, even squares are unplayable
        if(j%2===0){
          html += '<div class="square background" data-row="' + i + '" data-col="' + j + '"></div>';
        }
        else {
          // update playable squares
          if(typeof board[i][j].color === 'undefined'){
            html += '<div class="square" data-row="' + i + '" data-col="' + j + '"></div>';
          } else {
            if(board[i][j].isKing){
              html += '<div class="square king" data-row="' + i + '" data-col="' + j + '">' + board[i][j].color + '</div>';
            } else{
              html += '<div class="square" data-row="' + i + '" data-col="' + j + '">' + board[i][j].color + '</div>';
            }
          }
        }
      } else if(j%2>0){
          // else it is odd row, odd squares are unplayable
          html += '<div class="square background" data-row="' + i + '" data-col="' + j + '"></div>';
        } else {
          // update playable squares
          if(typeof board[i][j].color === 'undefined'){
            html += '<div class="square" data-row="' + i + '" data-col="' + j + '"></div>';
          } else {
            if(board[i][j].isKing){
              html += '<div class="square king" data-row="' + i + '" data-col="' + j + '">' + board[i][j].color + '</div>';
            } else {
              html += '<div class="square" data-row="' + i + '" data-col="' + j + '">' + board[i][j].color + '</div>';
            }
          }
        }
      }
    html += '</div>';
  }
  document.querySelector('#board').innerHTML = html;
  addEventListeners();
}
