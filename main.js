var gameWinner = function() {
    testTurn = playerTurn();
    if(testTurn === 'Player 1'){
      setTimeout(function(){alert('Congratulations Player 1 You Won!!!');},500);
      pOneWin = pOneWin + 1;
      pTwoLoss = pTwoLoss + 1;
    } else if(testTurn === 'Player 2'){
        setTimeout(function(){alert('Congratulations Player 2 You Won!!!');},500);
        pTwoWin = pTwoWin + 1;
        pOneLoss = pOneLoss + 1;
      }
    player1WinTally.textContent = pOneWin;
    player1LossTally.textContent = pOneLoss;
    player2WinTally.textContent = pTwoWin;
    player2LossTally.textContent = pTwoLoss;
    setTimeout(function(){resetGame();},2500);

}

var diagonalTest = function(target,rowNum,colNum){
    if (rowNum !== 5 && colNum !== 0){
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+1][colNum-1].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+2][colNum-2].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+3][colNum-3].getAttribute('color')){
            gameWinner(); // Diagonal Down Left
          }
        }
      }
    }
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-1][colNum+1].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-2][colNum+2].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-3][colNum+3].getAttribute('color')){
            gameWinner(); // Diagonal Up Right
          }
        }
      }
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-1][colNum+1].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+1][colNum-1].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+2][colNum-2].getAttribute('color')){
            gameWinner(); // Diagonal UpRight 1 DownLeft 2
          }
        }
      }
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-1][colNum+1].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-2][colNum+2].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+1][colNum-1].getAttribute('color')){
            gameWinner(); // Diagonal UpRight 2 DownLeft 1
          }
        }
      }
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+1][colNum+1].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+2][colNum+2].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+3][colNum+3].getAttribute('color')){
            gameWinner(); // Diagonal Down Right
          }
        }
      }
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-1][colNum-1].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-2][colNum-2].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-3][colNum-3].getAttribute('color')){
            gameWinner(); // Diagonal Up Left
          }
        }
      }
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+1][colNum+1].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-1][colNum-1].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-2][colNum-2].getAttribute('color')){
            gameWinner(); // Diagonal DownRight 1 UpLeft 2
          }
        }
      }
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+1][colNum+1].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+2][colNum+2].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-1][colNum-1].getAttribute('color')){
            gameWinner(); // Diagonal Down Right 2 UpLeft 1
          }
        }
      }
}

var verticalTest = function(target,rowNum,colNum){
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-1][colNum].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-2][colNum].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-3][colNum].getAttribute('color')){
            gameWinner(); // Vertical Up
          }
        }
      }
      if (rowNum !== 5) {
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+1][colNum].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+2][colNum].getAttribute('color')){
            if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+3][colNum].getAttribute('color')){
              return gameWinner(); // Vertical Down
            }
          }
        }
      }
}

var horizontalTest = function(target,rowNum,colNum){
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum+1].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum+2].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum+3].getAttribute('color')){
            return gameWinner(); //Horizontal right
          }
        }
      }
      if (colNum !== 0) {
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum-1].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum-2].getAttribute('color')){
            if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum-3].getAttribute('color')){
              gameWinner(); //Horizontal left
            }
          }
        }
      }
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum+1].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum-1].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum-2].getAttribute('color')){
            gameWinner(); //Horizontal Right 1 Left 2
          }
        }
      }
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum+1].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum+2].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum-1].getAttribute('color')){
            gameWinner(); //Horizontal Right 2 Left 1
          }
        }
      }
}

var checkWin = function(target,rowNum,columnNum){
  //console.log(target);
  //console.log(rowNum);
  //console.log(columnNum);
  var colNum = parseInt(columnNum);
  horizontalTest(target,rowNum,colNum);
  verticalTest(target,rowNum,colNum);
  diagonalTest(target,rowNum,colNum);
}

var inputPiece = function(evtTarget){
  var columnNum = evtTarget.dataset.column;
  turnResult.textContent = playerTurn();
  if (testTurn === player2){  //inversion of the testTurn toggle equality value
    for (var i = 5; i >= 0; i--){
      if (openBoard[i][columnNum].getAttribute('color') === ''){
        openBoard[i][columnNum].setAttribute('color','red');
        checkWin(openBoard[i][columnNum],i,columnNum);
        break;
      }
    }
  } else if (testTurn === player1){ //Second half of testTurn Inversion equality value
      for (var j = 5; j >= 0; j--){
        if (openBoard[j][columnNum].getAttribute('color') === ''){
          openBoard[j][columnNum].setAttribute('color','green');
          checkWin(openBoard[j][columnNum],j,columnNum);
          break;
        }
      }

    }
}

var playerTurn = function(){
  setTimeout(function(){},100000);
  if (num % 2 === 0){
        num++;
    return player1;
  } else if (num % 2 !== 0){
        num++;
      return player2;
  }
}

var gameFunc = function(){
      if (event.target.getAttribute('class') === 'standardPieceOne'){
        testTurn = playerTurn();
        turnResult.textContent = playerTurn();
        if(testTurn === 'Player 1'){
          //I am the result of player 1's click.
          for(var i = 0; i < 7; i++){
            standardPieceOne[i].setAttribute('id','player1Hov');
          }
        } else if (testTurn === 'Player 2'){
            //I am the result of player 2's click.
            for(var i = 0; i < 7; i++){
              standardPieceOne[i].setAttribute('id','player2Hov');
            }
          }
        if(event.target === standardPieceOne[0]){
          inputPiece(event.target);
        } else if (event.target === standardPieceOne[1]){
            inputPiece(event.target);
          } else if (event.target === standardPieceOne[2]){
              inputPiece(event.target);
            } else if (event.target === standardPieceOne[3]){
                inputPiece(event.target);
              } else if (event.target === standardPieceOne[4]){
                  inputPiece(event.target);
                } else if (event.target === standardPieceOne[5]){
                    inputPiece(event.target);
                  } else if (event.target === standardPieceOne[6]){
                      inputPiece(event.target);
                    }

      }
}

var resetTournament = function(){
      num = 1;
      for (var i = 0; i < tablePiece.length; i++){
        tablePiece[i].setAttribute('color','');
      }
      for(var i = 0; i < 7; i++){
        standardPieceOne[i].setAttribute('id','');
      }
      turnResult.textContent = 'Game not active';
      pieceTitle.textContent = '';
}

var resetGame = function(){
      num = 0;
      for (var i = 0; i < tablePiece.length; i++){
        tablePiece[i].setAttribute('color','');
      }
      for(var i = 0; i < 7; i++){
        standardPieceOne[i].setAttribute('id','');
      }
      moveSelectTable.removeEventListener('click', gameFunc);
      turnResult.textContent = 'Game not active';
      pieceTitle.textContent = '';
}

var startTournament = function(){
      for(var i = 0; i < 7; i++){
        standardPieceOne[i].setAttribute('id','player1Hov');
      }
      //testTurn = playerTurn();
      turnResult.textContent = playerTurn();
      pieceTitle.textContent = 'Move Select Below';
      moveSelectTable.addEventListener('click', gameFunc);
}

var startGame = function(){
      for(var i = 0; i < 7; i++){
        standardPieceOne[i].setAttribute('id','player1Hov');
      }
      turnResult.textContent = playerTurn();
      pieceTitle.textContent = 'Move Select Below';
      moveSelectTable.addEventListener('click', gameFunc);
      player1WinTally.textContent = pOneWin;
      player1LossTally.textContent = pOneLoss;
      player2WinTally.textContent = pTwoWin;
      player2LossTally.textContent = pTwoLoss;
}

var buttonLogic = function(){
  if(event.target.getAttribute('id') === 'startGameButton'){
    startGame();

  }
  if(event.target.getAttribute('id') === 'startTournamentButton'){
    startTournament();
  }
  if(event.target.getAttribute('id') === 'resetGameButton'){
    resetGame();
  }
  if(event.target.getAttribute('id') === 'resestTournamentButton'){
    resetTournament();
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
      standardPiece.setAttribute('color', '');
      td.appendChild(standardPiece);
      openBoard[i].push(standardPiece);
    }
  }
}

var body = document.querySelector('body');
var testTurn;
var openBoard = [[],[],[],[],[],[]];
var standardPieceOne = document.querySelectorAll('.standardPieceOne');
var moveSelectTable = document.querySelector('table');
var pieceTitle = document.querySelector('#pieceTitle');
var pieceSelector = document.querySelector('.pieceSelector');
var gameButton = document.querySelector('.gameButton');
var startBtn = document.querySelector('#startGameButton');
var turnResult = document.querySelector('#turnResult');
var gameBoard = document.querySelector('.gameBoard');
var num = 0;
var player1 = 'Player 1';
var player2 = 'Player 2';
var player1WinTally = document.querySelector('#player1WinTally');
var player1LossTally = document.querySelector('#player1LossTally');
var player2WinTally = document.querySelector('#player2WinTally');
var player2LossTally = document.querySelector('#player2LossTally');
var player1TournamentWinTally = document.querySelector('#player1TournamentWinTally');
var player1TournamentLossTally = document.querySelector('#player1TournamentLossTally');
var player2TournamentWinTally = document.querySelector('#player2TournamentWinTally');
var player2TournamentLossTally = document.querySelector('#player2TournamentLossTally');
var pOneWin = 0;
var pOneLoss = 0;
var pTwoWin = 0;
var pTwoLoss = 0;

createBoard();
var tablePiece = document.querySelectorAll('table>tr>td>div');
gameButton.addEventListener('click', buttonLogic);

