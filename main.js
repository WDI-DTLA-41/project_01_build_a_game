var playerTurn = function(){
    num++;
  if (num % 2 === 0){
    return player1;
  } else if (num % 2 !== 0){
      return player2;
  }
}

var gameFunc = function(){

}

var createBoard = function(){
  for(var num = 0; num < 6; num++){
    var tr = document.createElement('tr');
    gameBoard.appendChild(tr);
    for (var num1 = 0; num1 < 7; num1++){
      var td = document.createElement('td');
      tr.appendChild(td);
      var standardPiece = document.createElement('div');
      standardPiece.setAttribute('class','standardPiece');
      td.appendChild(standardPiece);
    }
  }
}


var gameBoard = document.querySelector('.gameBoard');
var num = 0;
var player1 = 'Player 1';
var player2 = 'Player 2';
createBoard();
