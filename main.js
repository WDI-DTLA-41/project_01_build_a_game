var gameTie = function() {
  if ((openBoard[0][0].getAttribute('color') !== '') && (openBoard[0][1].getAttribute('color') !== '') &&
       (openBoard[0][2].getAttribute('color') !== '') && (openBoard[0][3].getAttribute('color') !== '') &&
       (openBoard[0][4].getAttribute('color') !== '') && (openBoard[0][5].getAttribute('color') !== '') &&
       (openBoard[0][6].getAttribute('color') !== '')){
    alert('This Game is a Draw!!!');
    setTimeout(function(){resetGame();},2500);
  }
};

var gameTournamentTie = function() {
  if ((openBoard[0][0].getAttribute('color') !== '') && (openBoard[0][1].getAttribute('color') !== '') &&
       (openBoard[0][2].getAttribute('color') !== '') && (openBoard[0][3].getAttribute('color') !== '') &&
       (openBoard[0][4].getAttribute('color') !== '') && (openBoard[0][5].getAttribute('color') !== '') &&
       (openBoard[0][6].getAttribute('color') !== '')){
    alert('This Game is a Draw!!!');
    setTimeout(function(){resetTournamentGame();},2500);
  }
};

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

};

var gameTournamentWinner = function() {
    testTurn = playerTurn();
      if(testTurn === 'Player 1'){
        ptOneWin = ptOneWin + 1;
        ptTwoLoss = ptTwoLoss + 1;
        player1TournamentWinTally.textContent = ptOneWin;
        player1TournamentLossTally.textContent = ptOneLoss;
        player2TournamentWinTally.textContent = ptTwoWin;
        player2TournamentLossTally.textContent = ptTwoLoss;
        if(ptOneWin === 3){
          setTimeout(function(){
            alert("Congratulations Player 1, You're the Tournament Champion!!!");
            resetTournament();
          },500);
        } else {
            setTimeout(function(){alert("Congratulations Player 1, You've Won This Match!!!");},500);
            setTimeout(function(){resetTournamentGame();},2500);
          }
      } else if(testTurn === 'Player 2'){
          ptTwoWin = ptTwoWin + 1;
          ptOneLoss = ptOneLoss + 1;
          player1TournamentWinTally.textContent = ptOneWin;
          player1TournamentLossTally.textContent = ptOneLoss;
          player2TournamentWinTally.textContent = ptTwoWin;
          player2TournamentLossTally.textContent = ptTwoLoss;
          if (ptTwoWin === 3) {
            setTimeout(function(){
              alert("Congratulations Player 2, You're the Tournament Champion!!!");
              resetTournament();
            },500);
          } else {
              setTimeout(function(){alert("Congratulations Player 2, You've Won This Match!!!");},500);
              setTimeout(function(){resetTournamentGame();},2500);
            }
        }
};

var diagonalUpRight1DownLeft2 = function(target,rowNum,colNum){
    if((rowNum <= 3 && rowNum >= 1) && (colNum >=2 && colNum <= 5)){
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-1][colNum+1].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+1][colNum-1].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+2][colNum-2].getAttribute('color')){
            gameWinner(); // Diagonal UpRight 1 DownLeft 2
          }
        }
      }
    }
};

var diagonalUpRight2DownLeft1 = function(target,rowNum,colNum){
    if((rowNum >= 2 && rowNum <= 4) && (colNum >= 1 && colNum <= 4)){
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-1][colNum+1].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-2][colNum+2].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+1][colNum-1].getAttribute('color')){
            gameWinner(); // Diagonal UpRight 2 DownLeft 1
          }
        }
      }
    }
};

var diagonalDownRight1UpLeft2 = function(target,rowNum,colNum){
    if((rowNum >= 2 && rowNum <= 4) && (colNum >= 2 && colNum <= 5)){
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+1][colNum+1].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-1][colNum-1].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-2][colNum-2].getAttribute('color')){
            gameWinner(); // Diagonal DownRight 1 UpLeft 2
          }
        }
      }
    }
};

var diagonalDownRight2UpLeft1 = function(target,rowNum,colNum){
    if((rowNum >= 1 && rowNum <= 3) && (colNum >= 1 && colNum <= 4)){
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+1][colNum+1].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+2][colNum+2].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-1][colNum-1].getAttribute('color')){
            gameWinner(); // Diagonal Down Right 2 UpLeft 1
          }
        }
      }
    }
};

var diagonalDownLeft = function(target,rowNum,colNum){
    if (rowNum <= 2  && colNum >= 3){
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+1][colNum-1].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+2][colNum-2].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+3][colNum-3].getAttribute('color')){
            gameWinner(); // Diagonal Down Left
          }
        }
      }
    }
};

var diagonalUpRight = function(target,rowNum,colNum){
    if(rowNum >= 3 && colNum <= 3){
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-1][colNum+1].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-2][colNum+2].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-3][colNum+3].getAttribute('color')){
            gameWinner(); // Diagonal Up Right
          }
        }
      }
    }
};

var diagonalDownRight = function(target,rowNum,colNum){
    if(rowNum <= 2 && colNum <= 3){
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+1][colNum+1].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+2][colNum+2].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+3][colNum+3].getAttribute('color')){
            gameWinner(); // Diagonal Down Right
          }
        }
      }
    }
};

var diagonalUpLeft = function(target,rowNum,colNum){
    if(rowNum >= 3 && colNum >= 3){
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-1][colNum-1].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-2][colNum-2].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-3][colNum-3].getAttribute('color')){
            gameWinner(); // Diagonal Up Left
          }
        }
      }
    }
};

var verticalUp = function(target,rowNum,colNum){
    if(rowNum >= 3){
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-1][colNum].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-2][colNum].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-3][colNum].getAttribute('color')){
            gameWinner(); // Vertical Up
          }
        }
      }
    }
};

var verticalDown = function(target,rowNum,colNum){
      if (rowNum <= 2) {
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+1][colNum].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+2][colNum].getAttribute('color')){
            if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+3][colNum].getAttribute('color')){
              gameWinner(); // Vertical Down
            }
          }
        }
      }
};

var horizontalRight = function(target,rowNum,colNum){
    if(colNum <= 3){
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum+1].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum+2].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum+3].getAttribute('color')){
            gameWinner(); //Horizontal right
          }
        }
      }
    }
};

var horizontalLeft = function(target,rowNum,colNum){
      if (colNum >= 3) {
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum-1].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum-2].getAttribute('color')){
            if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum-3].getAttribute('color')){
              gameWinner(); //Horizontal left
            }
          }
        }
      }
};

var horizontalRight1Left2 = function(target,rowNum,colNum){
    if(colNum <= 5 && colNum >= 2){
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum+1].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum-1].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum-2].getAttribute('color')){
            gameWinner(); //Horizontal Right 1 Left 2
          }
        }
      }
    }
};

var horizontalRight2Left1 = function(target,rowNum,colNum){
    if(colNum >= 1 && colNum <= 4){
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum+1].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum+2].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum-1].getAttribute('color')){
            gameWinner(); //Horizontal Right 2 Left 1
          }
        }
      }
    }
};

var checkWin = function(target,rowNum,columnNum){
  var colNum = parseInt(columnNum);
  verticalUp(target,rowNum,colNum);
  verticalDown(target,rowNum,colNum);
  horizontalLeft(target,rowNum,colNum);
  horizontalRight(target,rowNum,colNum);
  horizontalRight1Left2(target,rowNum,colNum);
  horizontalRight2Left1(target,rowNum,colNum);
  diagonalDownLeft(target,rowNum,colNum);
  diagonalDownRight(target,rowNum,colNum);
  diagonalDownRight2UpLeft1(target,rowNum,colNum);
  diagonalDownRight1UpLeft2(target,rowNum,colNum);
  diagonalUpLeft(target,rowNum,colNum);
  diagonalUpRight(target,rowNum,colNum);
  diagonalUpRight1DownLeft2(target,rowNum,colNum);
  diagonalUpRight2DownLeft1(target,rowNum,colNum);
  gameTie();
};

var diagonalUpRight1DownLeft2Tournament = function(target,rowNum,colNum){
    if((rowNum <= 3 && rowNum >= 1) && (colNum >=2 && colNum <= 5)){
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-1][colNum+1].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+1][colNum-1].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+2][colNum-2].getAttribute('color')){
            gameTournamentWinner(); // Diagonal UpRight 1 DownLeft 2
          }
        }
      }
    }
};

var diagonalUpRight2DownLeft1Tournament = function(target,rowNum,colNum){
    if((rowNum >= 2 && rowNum <= 4) && (colNum >= 1 && colNum <= 4)){
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-1][colNum+1].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-2][colNum+2].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+1][colNum-1].getAttribute('color')){
            gameTournamentWinner(); // Diagonal UpRight 2 DownLeft 1
          }
        }
      }
    }
};

var diagonalDownRight1UpLeft2Tournament = function(target,rowNum,colNum){
    if((rowNum >= 2 && rowNum <= 4) && (colNum >= 2 && colNum <= 5)){
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+1][colNum+1].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-1][colNum-1].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-2][colNum-2].getAttribute('color')){
            gameTournamentWinner(); // Diagonal DownRight 1 UpLeft 2
          }
        }
      }
    }
};

var diagonalDownRight2UpLeft1Tournament = function(target,rowNum,colNum){
    if((rowNum >= 1 && rowNum <= 3) && (colNum >= 1 && colNum <= 4)){
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+1][colNum+1].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+2][colNum+2].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-1][colNum-1].getAttribute('color')){
            gameTournamentWinner(); // Diagonal Down Right 2 UpLeft 1
          }
        }
      }
    }
};

var diagonalDownLeftTournament = function(target,rowNum,colNum){
    if (rowNum <= 2  && colNum >= 3){
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+1][colNum-1].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+2][colNum-2].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+3][colNum-3].getAttribute('color')){
            gameTournamentWinner(); // Diagonal Down Left
          }
        }
      }
    }
};

var diagonalUpRightTournament = function(target,rowNum,colNum){
    if(rowNum >= 3 && colNum <= 3){
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-1][colNum+1].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-2][colNum+2].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-3][colNum+3].getAttribute('color')){
            gameTournamentWinner(); // Diagonal Up Right
          }
        }
      }
    }
};

var diagonalDownRightTournament = function(target,rowNum,colNum){
    if(rowNum <= 2 && colNum <= 3){
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+1][colNum+1].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+2][colNum+2].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+3][colNum+3].getAttribute('color')){
            gameTournamentWinner(); // Diagonal Down Right
          }
        }
      }
    }
};

var diagonalUpLeftTournament = function(target,rowNum,colNum){
    if(rowNum >= 3 && colNum >= 3){
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-1][colNum-1].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-2][colNum-2].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-3][colNum-3].getAttribute('color')){
            gameTournamentWinner(); // Diagonal Up Left
          }
        }
      }
    }
};

var verticalUpTournament = function(target,rowNum,colNum){
    if(rowNum >= 3){
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-1][colNum].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-2][colNum].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum-3][colNum].getAttribute('color')){
            gameTournamentWinner(); // Vertical Up
          }
        }
      }
    }
};

var verticalDownTournament = function(target,rowNum,colNum){
      if (rowNum <= 2) {
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+1][colNum].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+2][colNum].getAttribute('color')){
            if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum+3][colNum].getAttribute('color')){
              gameTournamentWinner(); // Vertical Down
            }
          }
        }
      }
};

var horizontalRightTournament = function(target,rowNum,colNum){
    if(colNum <= 3){
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum+1].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum+2].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum+3].getAttribute('color')){
            gameTournamentWinner(); //Horizontal right
          }
        }
      }
    }
};

var horizontalLeftTournament = function(target,rowNum,colNum){
      if (colNum >= 3) {
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum-1].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum-2].getAttribute('color')){
            if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum-3].getAttribute('color')){
              gameTournamentWinner(); //Horizontal left
            }
          }
        }
      }
};

var horizontalRight1Left2Tournament = function(target,rowNum,colNum){
    if(colNum <= 5 && colNum >= 2){
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum+1].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum-1].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum-2].getAttribute('color')){
            gameTournamentWinner(); //Horizontal Right 1 Left 2
          }
        }
      }
    }
};

var horizontalRight2Left1Tournament = function(target,rowNum,colNum){
    if(colNum >= 1 && colNum <= 4){
      if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum+1].getAttribute('color')){
        if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum+2].getAttribute('color')){
          if(openBoard[rowNum][colNum].getAttribute('color') === openBoard[rowNum][colNum-1].getAttribute('color')){
            gameTournamentWinner(); //Horizontal Right 2 Left 1
          }
        }
      }
    }
};

var checkWinTournament = function(target,rowNum,columnNum){
  var colNum = parseInt(columnNum);
  verticalUpTournament(target,rowNum,colNum);
  verticalDownTournament(target,rowNum,colNum);
  horizontalLeftTournament(target,rowNum,colNum);
  horizontalRightTournament(target,rowNum,colNum);
  horizontalRight1Left2Tournament(target,rowNum,colNum);
  horizontalRight2Left1Tournament(target,rowNum,colNum);
  diagonalDownLeftTournament(target,rowNum,colNum);
  diagonalDownRightTournament(target,rowNum,colNum);
  diagonalDownRight2UpLeft1Tournament(target,rowNum,colNum);
  diagonalDownRight1UpLeft2Tournament(target,rowNum,colNum);
  diagonalUpLeftTournament(target,rowNum,colNum);
  diagonalUpRightTournament(target,rowNum,colNum);
  diagonalUpRight1DownLeft2Tournament(target,rowNum,colNum);
  diagonalUpRight2DownLeft1Tournament(target,rowNum,colNum);
  gameTournamentTie();
};

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
};

var inputPieceTournament = function(evtTarget){
  var columnNum = evtTarget.dataset.column;
  turnResult.textContent = playerTurn();
  if (testTurn === player2){  //inversion of the testTurn toggle equality value
    for (var i = 5; i >= 0; i--){
      if (openBoard[i][columnNum].getAttribute('color') === ''){
        openBoard[i][columnNum].setAttribute('color','red');
        checkWinTournament(openBoard[i][columnNum],i,columnNum);
        break;
      }
    }
  } else if (testTurn === player1){ //Second half of testTurn Inversion equality value
      for (var j = 5; j >= 0; j--){
        if (openBoard[j][columnNum].getAttribute('color') === ''){
          openBoard[j][columnNum].setAttribute('color','green');
          checkWinTournament(openBoard[j][columnNum],j,columnNum);
          break;
        }
      }

    }
};

var playerTurn = function(){
  if (num % 2 === 0){
        num++;
    return player1;
  } else if (num % 2 !== 0){
        num++;
      return player2;
  }
};

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
            for(var j = 0; j < 7; j++){
              standardPieceOne[j].setAttribute('id','player2Hov');
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
};

var gameFuncTournament = function(){
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
            for(var j = 0; j < 7; j++){
              standardPieceOne[j].setAttribute('id','player2Hov');
            }
          }
        if(event.target === standardPieceOne[0]){
          inputPieceTournament(event.target);
        } else if (event.target === standardPieceOne[1]){
            inputPieceTournament(event.target);
          } else if (event.target === standardPieceOne[2]){
              inputPieceTournament(event.target);
            } else if (event.target === standardPieceOne[3]){
                inputPieceTournament(event.target);
              } else if (event.target === standardPieceOne[4]){
                  inputPieceTournament(event.target);
                } else if (event.target === standardPieceOne[5]){
                    inputPieceTournament(event.target);
                  } else if (event.target === standardPieceOne[6]){
                      inputPieceTournament(event.target);
                    }

      }
};

var resetScore = function(){
  pOneWin = 0;
  pOneLoss = 0;
  pTwoWin = 0;
  pTwoLoss = 0;
  player1WinTally.textContent = pOneWin;
  player1LossTally.textContent = pOneLoss;
  player2WinTally.textContent = pTwoWin;
  player2LossTally.textContent = pTwoLoss;
};

var resetTournamentScore = function(){
  ptOneWin = 0;
  ptOneLoss = 0;
  ptTwoWin = 0;
  ptTwoLoss = 0;
  player1TournamentWinTally.textContent = ptOneWin;
  player1TournamentLossTally.textContent = ptOneLoss;
  player2TournamentWinTally.textContent = ptTwoWin;
  player2TournamentLossTally.textContent = ptTwoLoss;
};

var resetTournamentGame = function(){
      num = 0;
      for (var i = 0; i < tablePiece.length; i++){
        tablePiece[i].setAttribute('color','');
      }
      for(var j = 0; j < 7; j++){
        standardPieceOne[i].setAttribute('id','player1Hov');
      }
      turnResult.textContent = playerTurn();
      pieceTitle.textContent = 'Move Select Below';
};

var resetTournament = function(){
      num = 0;
      for (var i = 0; i < tablePiece.length; i++){
        tablePiece[i].setAttribute('color','');
      }
      for(i = 0; i < 7; i++){
        standardPieceOne[i].setAttribute('id','');
      }
      moveSelectTable.removeEventListener('click', gameFuncTournament);
      resetTournamentScore();
      turnResult.textContent = 'Game not active';
      pieceTitle.textContent = '';
};

var resetGame = function(){
      num = 0;
      for (var i = 0; i < tablePiece.length; i++){
        tablePiece[i].setAttribute('color','');
      }
      for(i = 0; i < 7; i++){
        standardPieceOne[i].setAttribute('id','');
      }
      moveSelectTable.removeEventListener('click', gameFunc);
      turnResult.textContent = 'Game not active';
      pieceTitle.textContent = '';
};

var startTournament = function(){
      for(var i = 0; i < 7; i++){
        standardPieceOne[i].setAttribute('id','player1Hov');
      }
      turnResult.textContent = playerTurn();
      pieceTitle.textContent = 'Move Select Below';
      moveSelectTable.addEventListener('click', gameFuncTournament);
      player1TournamentWinTally.textContent = ptOneWin;
      player1TournamentLossTally.textContent = ptOneLoss;
      player2TournamentWinTally.textContent = ptTwoWin;
      player2TournamentLossTally.textContent = ptTwoLoss;
};

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
};

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
  if(event.target.getAttribute('id') === 'resetTournamentButton'){
    resetTournament();
  }
  if(event.target.getAttribute('id') === 'clearScore'){
    resetScore();
  }
};

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
};

var testTurn;
var openBoard = [[],[],[],[],[],[]];
var standardPieceOne = document.querySelectorAll('.standardPieceOne');
var moveSelectTable = document.querySelector('table');
var pieceTitle = document.querySelector('#pieceTitle');
var gameButton = document.querySelector('.gameButton');
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
var ptOneWin = 0;
var ptOneLoss = 0;
var ptTwoWin = 0;
var ptTwoLoss = 0;

createBoard();
var tablePiece = document.querySelectorAll('table>tr>td>div');
gameButton.addEventListener('click', buttonLogic);

