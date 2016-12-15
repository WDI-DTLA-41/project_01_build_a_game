var diagonalTest = function(target,rowNum,colNum){
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+1][colNum-1].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+2][colNum-2].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+3][colNum-3].getAttribute('color')){
            alert('Congratulations '+ playerTurn() + ' You Won!!!'); // Diagonal Down Left
          }
        }
      }
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-1][colNum+1].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-2][colNum+2].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-3][colNum+3].getAttribute('color')){
            alert('Congratulations '+ playerTurn() + ' You Won!!!'); // Diagonal Up Right
          }
        }
      }
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-1][colNum+1].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+1][colNum-1].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+2][colNum-2].getAttribute('color')){
            alert('Congratulations '+ playerTurn() + ' You Won!!!'); // Diagonal UpRight 1 DownLeft 2
          }
        }
      }
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-1][colNum+1].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-2][colNum+2].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+1][colNum-1].getAttribute('color')){
            alert('Congratulations '+ playerTurn() + ' You Won!!!'); // Diagonal UpRight 2 DownLeft 1
          }
        }
      }
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+1][colNum+1].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+2][colNum+2].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+3][colNum+3].getAttribute('color')){
            alert('Congratulations '+ playerTurn() + ' You Won!!!'); // Diagonal Down Right
          }
        }
      }
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-1][colNum-1].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-2][colNum-2].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-3][colNum-3].getAttribute('color')){
            alert('Congratulations '+ playerTurn() + ' You Won!!!'); // Diagonal Up Left
          }
        }
      }
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+1][colNum+1].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-1][colNum-1].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-2][colNum-2].getAttribute('color')){
            alert('Congratulations '+ playerTurn() + ' You Won!!!'); // Diagonal DownRight 1 UpLeft 2
          }
        }
      }
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+1][colNum+1].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+2][colNum+2].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-1][colNum-1].getAttribute('color')){
            alert('Congratulations '+ playerTurn() + ' You Won!!!'); // Diagonal Down Right 2 UpLeft 1
          }
        }
      }
}

var verticalTest = function(target,rowNum,colNum){
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-1][colNum].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-2][colNum].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-3][colNum].getAttribute('color')){
            alert('Congratulations '+ playerTurn() + ' You Won!!!'); // Vertical Up
          }
        }
      }
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+1][colNum].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+2][colNum].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+3][colNum].getAttribute('color')){
            alert('Congratulations '+ playerTurn() + ' You Won!!!'); // Vertical Down
          }
        }
      }

      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-1][colNum].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+1][colNum].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+2][colNum].getAttribute('color')){
            alert('Congratulations '+ playerTurn() + ' You Won!!!'); //Vertical Up 1 Down 2
          }
        }
      }
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-1][colNum].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-2][colNum].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+1][colNum].getAttribute('color')){
            alert('Congratulations '+ playerTurn() + ' You Won!!!'); //Vertical Up 2 Down 1
          }
        }
      }
}

var horizontalTest = function(target,rowNum,colNum){
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum+1].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum+2].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum+3].getAttribute('color')){
            alert('Congratulations '+ playerTurn() + ' You Won!!!'); //Horizontal right
          }
        }
      }
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum-1].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum-2].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum-3].getAttribute('color')){
            alert('Congratulations '+ playerTurn() + ' You Won!!!'); //Horizontal left
          }
        }
      }
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum+1].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum-1].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum-2].getAttribute('color')){
            alert('Congratulations '+ playerTurn() + ' You Won!!!'); //Horizontal Right 1 Left 2
          }
        }
      }
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum+1].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum+2].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum-1].getAttribute('color')){
            alert('Congratulations '+ playerTurn() + ' You Won!!!'); //Horizontal Right 2 Left 1
          }
        }
      }
}

var checkWin = function(target,rowNum,columnNum){
  console.log(target);
  console.log(rowNum);
  console.log(columnNum);
  var colNum = parseInt(columnNum);
  horizontalTest(target,rowNum,colNum);
  verticalTest(target,rowNum,colNum);
  diagonalTest(target,rowNum,colNum);
}

var inputPiece = function(evtTarget){
  //console.log(evtTarget.dataset.column);
  var columnNum = evtTarget.dataset.column;
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
    num++;
  if (num % 2 === 0){
    return player1;
  } else if (num % 2 !== 0){
      return player2;
  }
}

var gameFunc = function(){
      if (event.target.getAttribute('class') === 'standardPieceOne'){
        testTurn = playerTurn();
        turnResult.textContent = testTurn;
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

var buttonLogic = function(){
  if(event.target.getAttribute('id') === 'startGameButton'){
      num = 1;
      for(var i = 0; i < 7; i++){
        standardPieceOne[i].setAttribute('id','player1Hov');
      }
      testTurn = playerTurn();
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
      standardPiece.setAttribute('color', '');
      td.appendChild(standardPiece);
      openBoard[i].push(standardPiece);
    }
  }
}

var testTurn;
var openBoard = [[],[],[],[],[],[]];
var standardPieceOne = document.querySelectorAll('.standardPieceOne');
var standardPiece = document.querySelectorAll('.standardPiece');
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

