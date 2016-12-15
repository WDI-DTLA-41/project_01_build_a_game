
var boardWidth = 8;
var board = [[],[], [], [], [], [], [], []];
var pieces = [{color: 'red', isKing: false}, {color: 'black', isKing: false}];
var currentPlayer = pieces[0].color;
var firstClick = true;
var highlighted;
var selectedPos;

setBoard(boardWidth);
setPieces();
renderBoard();

// toggles current currentPlayer between red and black
function changePlayer(){
  if(currentPlayer==='red'){
    currentPlayer = pieces[1].color;
  } else {
    currentPlayer = pieces[0].color;
  }
}

function handleClick(evt){
  var position = this.dataset;
  var target;

  if(firstClick){
    console.log('position ' + position.row + ':' + position.col);
    // select piece if belongs current player
    if(board[position.row][position.col].color===currentPlayer){
      firstClick = !firstClick;
      highlighted = this.classList.add('highlight');
      selectedPos = position;


    }
  }
  else {
    console.log('targeted ' + position.row + ':' + position.col);
    firstClick = !firstClick;
    highlighted = document.querySelector('.highlight');
    highlighted.classList.remove('highlight');
    // 2nd click, click square to set piece if legal
    if(isValidMove(position)){
      changePlayer();
      changeBoard(position);
      checkKing(position);
      renderBoard();
    } else {
      // invalid move and do nothing?
    }
  }
}
function checkKing(position){
  console.log('checkking outside', board[position.row][position.col].color, position.row);
  if(board[position.row][position.col].color === 'red' && position.row === '0'){
    board[position.row][position.col].isKing = 'true';
    console.log('setting king for red');
  }
  if(board[position.row][position.col].color === 'black' && position.row === '7'){
    board[position.row][position.col].isKing = 'true';
    console.log('setting king for black');
  }
}
function isValidMove(position){
  // if target position is empty
  if(typeof board[position.row][position.col].color==='undefined'){
    console.log('position '+position.row+':'+position.col+' is open');
    // run if red player else run for black
    if(currentPlayer==='red'){
      if(board[selectedPos.row][selectedPos.col].isKing){
        // check absolute value of row diff and col diff for RED King
        if(Math.abs(selectedPos.row-position.row)===1 && Math.abs(selectedPos.col-position.col)===1){
          return true;
        } else {
          return false;
        }
      } else {
        // not a king, restrict movement for RED
        if(selectedPos.row-position.row===1 && Math.abs(selectedPos.col-position.col)===1){
          return true;
        } else {
          return false;
        }
      }
    } else {
      if(board[selectedPos.row][selectedPos.col].isKing){
        // check absolute value of row diff and col diff for BLACK King
        if(Math.abs(selectedPos.row-position.row)===1 && Math.abs(selectedPos.col-position.col)===1){
          return true;
        } else {
          return false;
        }
      } else {
        // not a king, restrict movement for BLACK
        if(selectedPos.row-position.row===(-1) && Math.abs(selectedPos.col-position.col)===1){
          return true;
        } else {
          return false;
        }
      }
    }
  } else {
    // position is occupied
    console.log('Position is occupied');
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
      if(i%2===0){
        // if even row, add black pieces to every odd position
        if(j%2>0){
          board[i][j] = pieces[1];
        }
      }
      else if(j%2===0){
        // else it is odd row, add pieces to every even position
        board[i][j] = pieces[1];
      }
    }
  }
  for(var i=7; i>4; i--){
    for(var j=0; j<8; j++){
      if(i%2===0){
        // add  black pieces to every odd position
        if(j%2>0){
          board[i][j] = pieces[0];
        }
      }
      else if(j%2===0){
        // else it is odd row, add pieces to every even position
        board[i][j] = pieces[0];
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
            html += '<div class="square" data-row="' + i + '" data-col="' + j + '">' + board[i][j].color + '</div>';
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
            html += '<div class="square" data-row="' + i + '" data-col="' + j + '">' + board[i][j].color + '</div>';
          }
        }
      }
    html += '</div>';
  }
  document.querySelector('#board').innerHTML = html;
  addEventListeners();
}
