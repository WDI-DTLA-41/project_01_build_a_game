
var boardWidth = 8;
var board = [[],[], [], [], [], [], [], []];
var pieces = [{color: 'red', isKing: false}, {color: 'black', isKing: false}];
var currentPlayer = pieces[0].color;
var selectClick = true;

setBoard(boardWidth);
setPieces();
renderBoard();
addEventListeners();


function handleClick(evt){
  var position = this.dataset;

  console.log(selectClick);
  if(selectClick){
    if(board[position.row][position.col].color===currentPlayer){
      selectClick = !selectClick;

      console.log(currentPlayer);
      console.log('selectclick inside if');
    }
  }
  else {
    selectClick = !selectClick;
    // 2nd click, click square to set piece
  }
  console.log('clicked on ' + position.row + ':' + position.col);
}
// adds listeners to all squares
function addEventListeners(){
  var squares = document.querySelectorAll('.square');
  for(var i=0;i<squares.length;i++){
    squares[i].addEventListener('click', handleClick);
  }
}
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
