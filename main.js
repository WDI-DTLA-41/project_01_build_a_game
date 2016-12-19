
// # Project Sprint 1 Checklist

/**
 * Variables used
 */
var player1 = document.querySelector("#player1");
var player2 = document.querySelector("#player2");
var player1Deck;
var player2Deck;
var realCards;
var num = 0;
var cards;
var gameBoard = document.querySelector('.gameBoard');
var gameOver;
var tempHand1;
var tempHand2;
var showImg;

// test cards for WAR
player1Deck = [2, 4, 5, 6, 2, 4, 5, 7, 8];
player2Deck = [2, 4, 5, 6, 2, 4, 5, 9, 9];

var cardsDefault = [
  2,3,4,5,6,7,8,9,10,11,12,13,14,  //index 0-12
  2,3,4,5,6,7,8,9,10,11,12,13,14,  //index 13-25
  2,3,4,5,6,7,8,9,10,11,12,13,14,  //index 26-38
  2,3,4,5,6,7,8,9,10,11,12,13,14   //index 39-51
];

var cardsTest = [
  7,5,8,9,  //index 0-12
  6,4,7,8 //index 39-51
];
var cardsPlaying = [
  2,3,4,5,6,7,8,9,10,11,12,13,14,  //index 0-12
  2,3,4,5,6,7,8,9,10,11,12,13,14,  //index 13-25
  2,3,4,5,6,7,8,9,10,11,12,13,14,  //index 26-38
  2,3,4,5,6,7,8,9,10,11,12,13,14   //index 39-51
];

/***************=================================
 * Connect -- not yet.. for images
 * @param {Number}  w - represents width
 * @param {Number} h - represents height
 * @return {Number} Sum of w and h
 */
var connectBoard = function() {
      // for (var i = 0; i < cardsDefault.length; i++) {
      for (var i = 0; i < cardsPlaying.length; i++) {

        realCards = document.createElement('div');
        realCards.setAttribute('class', 'cardPosition');
        gameBoard.appendChild(realCards);
      }
}

// start button on html page
var $start = document.querySelector('#start');

// play button on html page
var $play = document.querySelector('#play');


/**
 * Start Game calls 'connectBoard' and 'shuffleDeck' functions
 * Connect Board
 * Shuffles cards
 * @param {cardsPlaying}  represents cards played
 * deck is cut in half
 */
var startGame = function(){
  alert('The game is starting, press Play');
  //cards
  connectBoard();
   // showImg = document.querySelectorAll('.gameBoard>div');
   // showImg[0].appendChild.innerHTML = '<img src="images/2clubs.jpg">';
  // cut deck in half
  shuffleArray(cardsPlaying);
  player1Deck = cardsPlaying.splice(0, 26);
  player2Deck = cardsPlaying;
  // player1Deck = cardsPlaying.splice(0, 1);
  // player2Deck = cardsTest;
  //shuffleArray(cardsTest);
  // turnCards();
  $play.addEventListener('click', turnCards);

}


/**
 * Reset button calls Start Game function
 */
var $reset = document.querySelector('#reset');
var resetGame = function() {

      cardsPlaying = cardsDefault;
      player1.innerHTML = "";
      player2.innerHTML = "";
      startGame();
}



/* Card is visible on page
 * Shows first two cards in play
 * and compares the value of first number of other
 */
var turnCards = function() {

    var topCardP1 = player1Deck[num];
    var topCardP2 = player2Deck[num];
    player1.innerHTML = topCardP1;
    player2.innerHTML = topCardP2;
    // num = num + 1;

    compareCards(topCardP1, topCardP2);
    //if (topCardP1 === topCardP2) {
        player1.innerHTML = topCardP1;
        player2.innerHTML = topCardP2;
        gameOver();
    //}
}


gameOver = function () {
    if (player1Deck.length < 1){

          //.querySelector('#message').innerHTML = "Player 1 has no cards left, ' Player 2 WINS GAME";
          $play.removeEventListener('click', turnCards);
          alert('Player 2 wins! GAME OVER');
          resetGame();
          //connectBoard();
       } else if (player2Deck.length < 1) {
          //document.querySelector('#message').innerHTML = "Player 2 has no cards left Player 1 WINS GAME";
          $play.removeEventListener('click', turnCards);
          alert('Player 1 wins! GAME OVER');
          resetGame();
    }
}



/**
 * Shuffles array of cards
 * @param {array}  shuffles array numbers
 * @return {array} shuffles numbers
 */

function shuffleArray(array) {

    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

/**
 * Compares cards for play
 * @param {compareCardP1} Player 1 card
 * @param {compareCardP2} Player 2 card
 * @return {winner of card} Winner of card played in regular play or who wins War cards (10 total)
 */
function compareCards(compareCardP1, compareCardP2) {
   //console.log('Player1 cards: ' + player1Deck);
  // console.log('Player1 deck length: ' + player1Deck.length);
   //console.log('Player2 cards: ' + player2Deck);
  // console.log('Player2 deck length: ' + player2Deck.length);
  // console.log('total cards in play: ' + (player2Deck.length + player1Deck.length));

      if (compareCardP1 > compareCardP2) {

              //logic here to add card back
              // remove cards from players' hands
              var removedCard1 = player1Deck.shift();
              var removedCard2 = player2Deck.shift();
              //alert('Player 1 wins cards');
              //console.log('P1 WON - Moved 2 cards to beginning of deck ' + player1Deck);
              // add both cards to bottom of player1 pile
              player1Deck.push(removedCard1, removedCard2);
              // console.log('P1 - pushed card ' + player1Deck);
              console.log('P1 cards ' + player1Deck);
              console.log('P2 cards ' + player2Deck);
              // isWar = false;
              return 'Winner is Player 1';

          } else if (compareCardP1 < compareCardP2) {

              //logic here to add card back
              // remove cards from players' hands
              var removedCard1 = player1Deck.shift();
              var removedCard2 = player2Deck.shift();
              //console.log('P2 WON - Moved 2 cards to beginning of deck ' + player2Deck);
              //alert('Player 2 wins cards');
              // add both cards to bottom of player 2 pile
              player2Deck.push(removedCard1,removedCard2);
              // console.log('P2 - pushed card ' + player2Deck);
              console.log('P1 cards ' + player1Deck);
              console.log('P2 cards ' + player2Deck);
              // helper to visualize
              // isWar = false;
              return 'Winner is Player 2';


         } else if (compareCardP1 === compareCardP2) {


                //document.querySelector('#players');

                //document.querySelector('#message').textContent = "Cards Match - WAR!";
                // 4 cards from each deck held in temp area for winner
                warCardsRemoved();

                // cards match - War is played
                alert('Declare War! ' + compareCardP1 + " vs. " + compareCardP2);

                // console.log(player1Deck);
                // console.log(player2Deck);

                if (tempHand1[3] > tempHand2[3]) {
                    var removedCard1 = player1Deck.shift();
                    var removedCard2 = player2Deck.shift();
                    // player 1 wins 'WAR' and gets all 8 cards

                    player1.innerHTML = tempHand1[0];
                    player2.innerHTML = tempHand2[0];
                    console.log('P1 wins War cards ' + tempHand1 + tempHand1[3]);

                    player1Deck = player1Deck.concat(tempHand1, tempHand2);
                    //console.log(player1Deck + ' concatanated player1 Deck');
                    player1Deck.push(removedCard1, removedCard2);
                    //console.log(player1Deck + ' player1Decked pushed')
                    //console.log('player1 deck: ' + player2Deck)
                    // console.log('Player 2 ')
                    alert('Player 1 is WINNER of WAR! ' + tempHand1[3] + ' vs. ' + tempHand2[3]);


                } else {

                    var removedCard1 = player1Deck.shift();
                    var removedCard2 = player2Deck.shift();
                    // add both cards to bottom of player 2 pile
                    // player2Deck.push(removedCard1, removedCard2);
                    // player 2 wins 'WAR' and gets all 8 cards
                    // console.log('tempHand1: ' + tempHand1);
                    // console.log('tempHand2: ' + tempHand2);
                    console.log('P2 wins War cards ' + tempHand2 + tempHand2[3]);
                    player2Deck = player2Deck.concat(tempHand1, tempHand2);
                    //console.log(player2Deck + ' player2 Deck');
                    player2Deck.push(removedCard1, removedCard2);
                    alert('Player 2 is WINNER of WAR! ' + tempHand2[3] + ' vs. ' + tempHand1[3]);

                }
          }

}

/**
 * Event Listeners for Start and Reset button
 */
$start.addEventListener('click', startGame);
$reset.addEventListener('click',resetGame);

/**
 * Removes 4 cards from each hand into temporary area when WAR
 */
function warCardsRemoved() {
      // var topCardP1 = player1Deck[num];
      // var topCardP2 = player2Deck[num];
      // player1.innerHTML = topCardP1;
      // player2.innerHTML = topCardP2;

      //document.querySelector('#message').textContent = "Cards Match - WAR!";
      tempHand1 = player1Deck.splice(0, 4);  // this removes first 4 cards
      tempHand2 = player2Deck.splice(0, 4);  // this removes first 4 cards
      player1.innerHTML = tempHand1[0];
      player2.innerHTML = tempHand2[0];
      // console.log('In warCardsRemoved func ' + tempHand1);
      // console.log('In warCardsRemoved func ' + tempHand2);


}




