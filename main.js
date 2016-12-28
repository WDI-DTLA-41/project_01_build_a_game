
// # Project Sprint 1 Checklist



// var cardsPlaying = [2,3,4,5,6,7,8,9,10,10,10,10,11],
//     suits = ['diamonds', 'clubs', 'hearts', 'spades'],
//     names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'],
//     isFaceUp = [true];



// var currentPlayer; //= players[0];

// function nextTurn() {
//   if (currentPlayer && currentPlayer.name === 'player') {
//     currentPlayer = players[1];
//   } else {
//     currentPlayer = players[0];
//   }
// }





//attach imgs
// var showImg = function() {
//   for (i = 0; i < cardsPlaying.length; i++)
//   realCards.textContent()
// }








/* Show matching cards is visible on page
 * Shows first two cards in play
 * and compares the value of first number of other
 */
// var showWar = function() {
//     compareCards(player1Deck[num], player2Deck[num]);
//     if (player1Deck[num] === player2Deck[num]) {
//         player1.innerHTML = topCardP1;
//         player2.innerHTML = topCardP2;

//     }
// }











//animate Flash of winner of card
// function animationFlash(element, animation){
//   // var winnerOfCard = document.querySelector('class',winMessage);
//     element = $(element);
//     element.flash(
//         function() {
//             element.addClass('animated ' + animation);
//         },
//         function(){
//             //wait for animation to finish before removing classes
//             window.setTimeout( function(){
//                 element.removeClass('animated ' + animation);
//             }, 2000);
//         });
// }

// $(document).ready(function(){
//     $('#winMessage').each(function() {
//         animationHover(this, 'flash');
//     });
// });


//show Winner
// function showWin(message) {
//   if (message === 'WINNER!') {
//     $winMsg.style.color = 'gold';
//     $winMsg.style.top = '120px';
//     $winMsg.style.fontSize = '180px';
//     $winMsg.style.left = '-100px';
//     $winMsg.textContent = message;
//   }

// //hide Winner
// function hideWin() {
//   showWin('');
// }
/**
 * Game over
 * @param {compareCardP1} Player 1 card
 * @param {compareCardP2} Player 2 card
 * @return {winner of card} Winner of card played in regular play or who wins War cards (10 total)
 */
gameOver = function () {
    if (player1Deck.length < 1){
          $play.removeEventListener('click', turnCards);
          alert('Player 2 wins! GAME OVER');
          resetGame();
          //connectBoard();
       } else if (player2Deck.length < 1) {
          $play.removeEventListener('click', turnCards);
          alert('Player 1 wins! GAME OVER');
          resetGame();
    }
};

warCardDisplay = function() {
  warCard[3].innerHTML = tempHand1[3];
  warCard[7].innerHTML= tempHand2[3];
};





/**
 * Removes 4 cards from each hand into temporary area when WAR
 */
function warCardsRemoved() {
      //document.querySelector('#message').textContent = "Cards Match - WAR!";
      tempHand1 = player1Deck.splice(0, 4);  // this removes first 4 cards
      tempHand2 = player2Deck.splice(0, 4);  // this removes first 4 cards
      warCardDisplay();
      player1.innerHTML = tempHand1[0];
      player2.innerHTML = tempHand2[0];
      console.log('In warCardsRemoved func ' + tempHand1);
      console.log('In warCardsRemoved func ' + tempHand2);
};

/**
 * Cards match - Play War
 * @param {compareCardP1} Player 1's card
 * @return {compareCardP2} Player 2's card
 */
var winsWarCards = function() {
    // 4 cards from each deck held in temp area for winner
    warCardsRemoved();
    setTimeout(function (){
      alert('Declare War! ' + compareCardP1 + " vs. " + compareCardP2);
    },2000);
    if (tempHand1[3] > tempHand2[3]) {
          removedCard1 = player1Deck.shift();
          removedCard2 = player2Deck.shift();
          // player 1 wins 'WAR' and gets all 8 cards
          player1.innerHTML = tempHand1[0];
          player2.innerHTML = tempHand2[0];
          console.log('P1 wins War cards ' + tempHand1[3]);
          player1Deck = player1Deck.concat(tempHand1, tempHand2);
          player1Deck.push(removedCard1, removedCard2);
          //alert('Player 1 is WINNER of WAR! ' + tempHand1[3] + ' vs. ' + tempHand2[3]);
    } else {
          removedCard1 = player1Deck.shift();
          removedCard2 = player2Deck.shift();
          // add both cards to bottom of player 2 pile
          console.log('P2 wins War cards ' + tempHand2[3]);
          player2Deck = player2Deck.concat(tempHand1, tempHand2);
          //console.log(player2Deck + ' player2 Deck');
          player2Deck.push(removedCard1, removedCard2);
          //alert('Player 2 is WINNER of WAR! ' + tempHand2[3] + ' vs. ' + tempHand1[3]);
      }
}; // end war function

/**
 * Compares cards for play
 * @param {compareCardP1} Player 1 card
 * @param {compareCardP2} Player 2 card
 * @return {winner of card} Winner of card played in regular play or who wins War cards (10 total)
 */
function compareCards(compareCardP1, compareCardP2) {
        var removedCard1;
        var removedCard2;
        if (compareCardP1 === compareCardP2) {
             player1.innerHTML;
             player2.innerHTML;
             winsWarCards();
        } else if (compareCardP1 > compareCardP2) {
              // remove cards from players' hands
              removedCard1 = player1Deck.shift();
              removedCard2 = player2Deck.shift();
              // add both cards to bottom of player1 pile
              player1Deck.push(removedCard1, removedCard2);
              // winMsg();
              return 'Winner is Player 1';
          } else {
              removedCard1 = player1Deck.shift();
              removedCard2 = player2Deck.shift();
              player2Deck.push(removedCard1,removedCard2);
              // winMsg();
              return 'Winner is Player 2';
            }
};



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

    if (topCardP1 === topCardP2) {
      //playWar();
      player1.innerHTML = topCardP1;
      player2.innerHTML = topCardP2;
      gameOver();
    }
};

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
};


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
};

/**
 * Reset button calls Start Game function
 */

var resetGame = function() {
      cardsPlaying = cardsDefault;
      player1.innerHTML = "";
      player2.innerHTML = "";
      startGame();
};

/**
 * Start Game calls 'connectBoard' and 'shuffleDeck' functions
 * Connect Board
 * Shuffles cards
 * @param {cardsPlaying}  represents cards played
 * deck is cut in half
 */

var startGame = function(){
  alert('The game is starting, press Play');
  connectBoard();
  // cut deck in half
  shuffleArray(cardsPlaying);
  player1Deck = cardsPlaying.splice(0, 26);
  player2Deck = cardsPlaying;
  $play.addEventListener('click', turnCards);

}

// //IMAGES

function displayCards(i) {
  var img = document.createElement('img');
  var cardsPlaying = currentPlayer.hand[i];
  var currentName = currentCard.name;
  var currentSuit = currentCard.suits;
  var strSrc = 'images/cards/' + currentName + '_of_' + currentSuit + '.png';
  img.src = strSrc;
  if (currentPlayer.name === 'player1') {
    img.setAttribute('class', 'player1' + i);
    var location = document.querySelector('.dealer-cards');
    location.appendChild(img);
  } else {
    img.setAttribute('class', 'player-' + i);
    $playerCards.appendChild(img);
  }
}

/**
 * Variables used
 */
var player1 = document.querySelector("#player1");
var player2 = document.querySelector("#player2");
var gameBoard = document.querySelector('.warBoard');
var $reset = document.querySelector('#reset');
var $winMsg = document.querySelector('.winMessage');
var $start = document.querySelector('#start');
var $play = document.querySelector('#play');
var warCard = document.querySelectorAll('.tinyCard');
var player1Deck;
var player2Deck;
var realCards;
var num = 0;
var gameOver;
var tempHand1;
var tempHand2;
var removedCard1;
var removedCard2;
var compareCardP1;
var compareCardP2;
//var showImg;
var cardsDefault = [
  2,3,4,5,6,7,8,9,10,11,12,13,14,  //index 0-12
  2,3,4,5,6,7,8,9,10,11,12,13,14,  //index 13-25
  2,3,4,5,6,7,8,9,10,11,12,13,14,  //index 26-38
  2,3,4,5,6,7,8,9,10,11,12,13,14   //index 39-51
];

var cardsPlaying = [
  2,3,4,5,6,7,8,9,10,11,12,13,14,  //index 0-12 hearts
  2,3,4,5,6,7,8,9,10,11,12,13,14,  //index 13-25 spades
  2,3,4,5,6,7,8,9,10,11,12,13,14,  //index 26-38 clubs
  2,3,4,5,6,7,8,9,10,11,12,13,14   //index 39-51 diamonds
];


/**
 * Event Listeners for Start and Reset button
 */
$start.addEventListener('click', startGame);
$reset.addEventListener('click', resetGame);

