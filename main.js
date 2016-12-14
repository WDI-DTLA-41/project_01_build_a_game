var playerTurn = function(){
    num++;
    console.log(num)
  if (num % 2 === 0){
    return player1;
  } else if (num % 2 !== 0){
      return player2;
  }
}

var gameFunc = function(){
      if (event.target.getAttribute('class') === 'standardPieceOne'){
        console.log(event.target);
        var testTurn = playerTurn();
        turnResult.textContent = testTurn;
        if(testTurn === 'Player 1'){
          console.log('i am player 1');  //I am the result of player 1's click.
          for(var i = 0; i < 7; i++){
            standardPieceOne[i].setAttribute('id','player1Hov');
          }
        } else if (testTurn === 'Player 2'){
            console.log('i am player 2'); //I am the result of player 2's click.
            for(var i = 0; i < 7; i++){
              standardPieceOne[i].setAttribute('id','player2Hov');
            }
          }


      }
}

var buttonLogic = function(){

  if(event.target.getAttribute('id') === 'startGameButton'){
      num = 1;
      for(var i = 0; i < 7; i++){
        standardPieceOne[i].setAttribute('id','player1Hov');
      }
      var testTurn = playerTurn();
      turnResult.textContent = testTurn;
      pieceTitle.textContent = 'Move Select Below';
      moveSelectTable.addEventListener('click', gameFunc);
  }
  if(event.target.getAttribute('id') === 'startTournamentButton'){

  }
  if(event.target.getAttribute('id') === 'resetGameButton'){

  }
  if(event.target.getAttribute('id') === 'resestTournamentButton'){

  }
}

var createBoard = function(){
  for(var i = 0; i < 6; i++){
    var tr = document.createElement('tr');
    gameBoard.appendChild(tr);
    for (var j = 0; j < 7; j++){
      var td = document.createElement('td');
      tr.appendChild(td);
      var standardPiece = document.createElement('div');
      standardPiece.setAttribute('class','standardPiece');
      td.appendChild(standardPiece);
    }
  }
}

var standardPieceOne = document.querySelectorAll('.standardPieceOne');
var moveSelectTable = document.querySelector('table');
var pieceTitle = document.querySelector('#pieceTitle');
var pieceSelector = document.querySelector('.pieceSelector');
var gameButton = document.querySelector('.gameButton');
var startBtn = document.querySelector('#startGameButton');
var turnResult = document.querySelector('#turnResult');
var gameBoard = document.querySelector('.gameBoard');
var num = 1;
var player1 = 'Player 1';
var player2 = 'Player 2';

createBoard();
gameButton.addEventListener('click', buttonLogic);

