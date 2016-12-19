var boardWidth = 8;
var board = [[],[], [], [], [], [], [], []];
var players = [{color: 'red', isKing: false}, {color: 'black', isKing: false}];
var currentPlayer = players[0].color;
var selectedPiece = false;
var highlighted;
var lastClickedPos;
var removedBlack = [];
var removedRed = [];
var btnNewGame = document.querySelector('.newGame');
var redWins = 0;
var blackWins = 0;
var btnResetScore = document.querySelector('.resetScore');

btnNewGame.addEventListener('click', handleClickNewGame);
btnResetScore.addEventListener('click', handleClickResetScore);
updateScore();
setBoard(boardWidth);
setPieces();
renderBoard();

function handleClickResetScore(evt){
  redWins=0;
  blackWins=0;
  updateScore();
}
function updateScore(){
  var redScore = document.querySelector('.redScore');
  var blackScore = document.querySelector('.blackScore');
  redScore.textContent = redWins;
  blackScore.textContent = blackWins;
}
function handleClickNewGame(evt){
  resetBoard();
  setBoard(boardWidth);
  setPieces();
  renderBoard();
}
function handleClick(evt){
  var clickedPos = {row: parseInt(this.dataset.row), col: parseInt(this.dataset.col)};

  if(!selectedPiece){
    // select piece if belongs current player
    if(board[clickedPos.row][clickedPos.col].color===currentPlayer){
      console.log('Selected Piece ' + clickedPos.row + ':' + clickedPos.col);
      selectedPiece = !selectedPiece;
      highlighted = this.classList.add('highlight');
      lastClickedPos = clickedPos;
    }
  }
  else {
    console.log('targeted ' + clickedPos.row + ':' + clickedPos.col);
    selectedPiece = !selectedPiece;
    highlighted = document.querySelector('.highlight');
    highlighted.classList.remove('highlight');
    // 2nd click, click square to set piece if legal
    if(isPositionEmpty(clickedPos)){
      if(isValidMove(clickedPos)){
        changePlayer();
        changeBoard(clickedPos);
        checkKing(clickedPos);
        renderBoard();
      }
      isWinner();
    } else {
      // invalid move so do nothing?
      return false;
    }
  }
}
// toggles current currentPlayer between red and black
function changePlayer(){
  if(currentPlayer==='red'){
    currentPlayer = 'black';
  } else {
    currentPlayer = 'red';
  }
}
function isPositionEmpty(target){
  if(typeof board[target.row][target.col].color==='undefined'){
    return true;
  } else {
    return false;
  }
}
function isValidMove(targetPosition){
  if(board[lastClickedPos.row][lastClickedPos.col].isKing){
    if(canKingJump(lastClickedPos, targetPosition)){
      return true;
    } else {
      return canKingMove(targetPosition);
    }
  } else {
    if(canJump(lastClickedPos, targetPosition)){
      return true;
    } else {
      return canMoveUpOrDown(targetPosition);
    }
  }
}
function canKingJump(previous, target){
  if(Math.abs(previous.row-target.row) === 2 && Math.abs(previous.col - target.col) === 2){
    return (canJumpUp(previous, target) || canJumpDown(previous, target))
  }
}
function canJump(previous, target){
  if(currentPlayer==='red'){
    return canJumpUp(previous, target);
  } else {
    return canJumpDown(previous, target);
  }
}
function canJumpUp(previous, target){
  var targetCol;
  if(currentPlayer==='red'){
    jumpedPlayer = 'black';
  } else {
    jumpedPlayer = 'red';
  }
  if(previous.row-target.row === 2 && Math.abs(previous.col - target.col) === 2){
    if(previous.col - target.col > 0){
      targetCol = target.col+1;
    } else if(previous.col - target.col < 0){
      targetCol = target.col-1;
    }
    if(board[target.row+1][targetCol].color === jumpedPlayer){
      removePiece(jumpedPlayer, target.row+1, targetCol);
      return true;
    }
  }
  else {
    return false;
  }
}
function canJumpDown(previous, target){
  var targetCol;
  if(currentPlayer==='red'){
    jumpedPlayer = 'black';
  } else {
    jumpedPlayer = 'red';
  }
  if(previous.row-target.row === (-2) && Math.abs(previous.col - target.col) === 2){
    if(previous.col - target.col > 0){
      targetCol = target.col+1;
    } else if(previous.col - target.col < 0){
      targetCol = target.col-1;
    }
    if(board[target.row-1][targetCol].color === jumpedPlayer){
      removePiece(jumpedPlayer, target.row-1, targetCol);
      return true;
    }
  }
  return false;
}
/**
* Removes a player piece from the board/array in position board[row][col]
* and adds to array of removed pieces of that player
* then call function to check for win condition
* @param {string} player - 'red' or 'black' player
* @param {Number} row - piece row value
* @param {Number} col - piece col value
*/
function removePiece(player, row, col){
  if(player==='red'){
      removedRed.push(board[row][col]);
      board[row][col] = '';
  } else {
    removedBlack.push(board[row][col]);
    board[row][col] = '';
  }
}
function isWinner(){
  if(removedRed.length===3*boardWidth/2){
    blackWins+=1;
    updateScore();
    alert('Congratulations, Player Black Wins!');
    return true;
  }
  if(removedBlack.length===3*boardWidth/2){
    redWins+=1;
    updateScore();
    alert('Congratulations, Player Red Wins!');
    return true;
  }
  return false;
}
/**
* Checks if position is a valid move for a King Checkers piece
* @param {Object} position - contains data for row and column position with .row and .col
* @return {Boolean} true - if position is 1 space away diagonally (any four corners); false otherwise
*/
function canKingMove(position){
  if(Math.abs(lastClickedPos.row-position.row)===1 && Math.abs(lastClickedPos.col-position.col)===1){
    return true;
  } else {
    return false;
  }
}
function canMoveUpOrDown(targetPosition){
  if(currentPlayer==='red'){
    return canMoveUp(targetPosition);
  } else {
    return canMoveDown(targetPosition);
  }
}
// returns true if selected red can move up to target position
function canMoveUp(position){
  if(lastClickedPos.row-position.row===1 && Math.abs(lastClickedPos.col-position.col)===1){
    return true;
  } else {
    return false;
  }
}
// returns true if selected black can move down to target position
function canMoveDown(position){
  if(lastClickedPos.row-position.row===(-1) && Math.abs(lastClickedPos.col-position.col)===1){
    return true;
  } else {
    return false;
  }
}
function checkKing(position){
  return (isRedKing(position) || isBlackKing(position));
}
function isRedKing(position){
  if(board[position.row][position.col].color === 'red' && position.row === 0){
    board[position.row][position.col].isKing = 'true';
  }
  return false;
}
function isBlackKing(position){
  if(board[position.row][position.col].color === 'black' && position.row === 7){
    board[position.row][position.col].isKing = 'true';
  }
  return false;
}
// updates array
function changeBoard(position){
  // remove selectedPos from its location and add it to position
  board[position.row][position.col] = board[lastClickedPos.row][lastClickedPos.col];
  board[lastClickedPos.row][lastClickedPos.col] = '';
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
      board[i].push({});
    }
  }
}
function resetBoard(){
  board = [[],[], [], [], [], [], [], []];
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
            if(board[i][j].isKing && board[i][j].color==='red'){
              html += '<div class="square king" data-row="' + i + '" data-col="' + j + '">' + '<div class="red king circle">' + "King" + '</div></div>';
            } else if(board[i][j].isKing && board[i][j].color==='black'){
              html += '<div class="square king" data-row="' + i + '" data-col="' + j + '">' + '<div class="black king circle">' + "King" + '</div></div>';
            } else {
              if(board[i][j].color==='red'){
                html += '<div class="square" data-row="' + i + '" data-col="' + j + '">' + '<div class="red circle">' + board[i][j].color + '</div></div>';
              } else {
                html += '<div class="square" data-row="' + i + '" data-col="' + j + '">' + '<div class="black circle">' + board[i][j].color + '</div></div>';
              }
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
            if(board[i][j].isKing && board[i][j].color==='red'){
              html += '<div class="square king" data-row="' + i + '" data-col="' + j + '">' + '<div class="red king circle">' + "King" + '</div></div>';
            } else if(board[i][j].isKing && board[i][j].color==='black'){
              html += '<div class="square king" data-row="' + i + '" data-col="' + j + '">' + '<div class="black king circle">' + "King" + '</div></div>';
            } else {
              if(board[i][j].color==='red'){
                html += '<div class="square" data-row="' + i + '" data-col="' + j + '">' + '<div class="red circle">' + board[i][j].color + '</div></div>';
              } else {
                html += '<div class="square" data-row="' + i + '" data-col="' + j + '">' + '<div class="black circle">' + board[i][j].color + '</div></div>';
              }
            }
          }
        }
      }
    html += '</div>';
  }
  document.querySelector('#board').innerHTML = html;
  addEventListeners();
}
