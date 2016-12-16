var player1 = document.querySelector("#player1");
var player2 = document.querySelector("#player2");
var player1Deck;
var player2Deck;
var realCards;
var num = 0;


var isWar = false;
var cards;
var gameBoard = document.querySelector('.gameBoard');
var gameOver;
var tempHand1;
var tempHand2;
var showImg;



var cardsDefault = [
  2,3,4,5,6,7,8,9,10,11,12,13,14,  //index 0-12
  2,3,4,5,6,7,8,9,10,11,12,13,14,  //index 13-25
  2,3,4,5,6,7,8,9,10,11,12,13,14,  //index 26-38
  2,3,4,5,6,7,8,9,10,11,12,13,14   //index 39-51
];

var cardsPlaying = [
  2,3,4,5,6,7,8,9,10,11,12,13,14,  //index 0-12
  2,3,4,5,6,7,8,9,10,11,12,13,14,  //index 13-25
  2,3,4,5,6,7,8,9,10,11,12,13,14,  //index 26-38
  2,3,4,5,6,7,8,9,10,11,12,13,14   //index 39-51
];


var connectBoard = function() {
      var inviscard;
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

// stop button on html page
 /**
  Remove the stop button, instead, add gameover()
 **/

var $stop = document.querySelector('#stop');




//shuffle(deckOfCards);
var makeDeck = function() {
  // organize cards function. Ace is #14
  // each row represents card suit
  // var cards = [
  //   2,3,4,5,6,7,8,9,10,11,12,13,14,  //index 0-12 CLUBS
  //   2,3,4,5,6,7,8,9,10,11,12,13,14,  //index 13-25 SPADES
  //   2,3,4,5,6,7,8,9,10,11,12,13,14,  //index 26-38 DIAMONDS
  //   2,3,4,5,6,7,8,9,10,11,12,13,14   //index 39-51 HEARTS
  // ];

  //shuffleArray(cards);
  return cards;
}

var startGame = function(){

  //cards = makeDeck();
  connectBoard();
   showImg = document.querySelectorAll('.gameBoard>div');
   showImg[0].appendChild.innerHTML = '<img src="images/2clubs.jpg">';
  // cut deck in half
  shuffleArray(cardsPlaying);
  player1Deck = cardsPlaying.splice(0, 26);
  player2Deck = cardsPlaying;
  // turnCards();
  $play.addEventListener('click', turnCards);


}

/**
 * Shows first two cards in play
 * and compares the value of first number of other
 */
var turnCards = function() {
    var topCardP1 = player1Deck[num];
    var topCardP2 = player2Deck[num];
    player1.innerHTML = topCardP1;
    player2.innerHTML = topCardP2;
    num = num + 1;
    compareCards(topCardP1, topCardP2);
    if (topCardP1 === undefined){
        alert('Player 2 wins! GAME OVER');
        //connectBoard();
    } else if (topCardP2 === undefined) {
        alert('Player 1 wins! GAME OVER');
        //connectBoard();
    }


}
// function to shuffle arrays numbers
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


// var shuffle = function (array) {
//       array.sort(function(a, b) {
//           return 0.5 - Math.random()
//         });
//         console.log(shuffle(array));
//       }



// function to compare first two cards
// maybe give the cards to compare cards first...
function compareCards(compareCardP1, compareCardP2) {

  if (compareCardP1 > compareCardP2) {

        //logic here to add card back
        // remove cards from players' hands
        var removedCard1 = player1Deck.shift();
        var removedCard2 = player2Deck.shift();
        // add both cards to bottom of player1 pile
        player1Deck.push(removedCard1, removedCard2);
        isWar = false;
        return 'Winner is Player 1';


    } else if (compareCardP1 < compareCardP2) {

          // If WAR flag is on, do this, if off, fall through
          // if (isWar !== false) {
          //     console.log("At war");
          //     startWar();
          // }

        //logic here to add card back
        // remove cards from players' hands
        var removedCard1 = player1Deck.shift();
        var removedCard2 = player2Deck.shift();
        // add both cards to bottom of player 2 pile
        player2Deck.push(removedCard1,removedCard2);
        // helper to visualize
        isWar = false;
        return 'Winner is Player 2';


   } else if (compareCardP1 === compareCardP2){

          // cards match
          // War function
          alert('Declare War');

          //This logic needs to work
          warCardsRemoved();

          console.log(player1Deck);
          console.log(player2Deck);



          if (tempHand1[0] > tempHand2[0]) {
              var removedCard1 = player1Deck.shift();
              var removedCard2 = player2Deck.shift();
              // player 1 wins 'WAR' and gets all 8 cards

              console.log(tempHand1);
              console.log(tempHand2);

              player1Deck.concat(tempHand1, tempHand2);
              console.log(player1Deck + '-player1 Deck');
              player1Deck.push(removedCard1, removedCard2);
              //resets war flag to off
              isWar = false;
              alert('Player 1 is WINNER of WAR!');


          } else if (tempHand1[0] < tempHand2[0]){
              var removedCard1 = player1Deck.shift();
              var removedCard2 = player2Deck.shift();
              // add both cards to bottom of player 2 pile
              player2Deck.push(removedCard1, removedCard2);
              // player 2 wins 'WAR' and gets all 8 cards
              console.log(tempHand1);
              console.log(tempHand2);
              player2Deck.concat(tempHand1, tempHand2);
              console.log(player2Deck+ '-player2 Deck');
              player2Deck.push(removedCard1, removedCard2);
              //resets war flag to off
              isWar = false;
              alert('Player 2 is WINNER of WAR!');
          }
}
}



// war might actually be part of compareCards
// and we just use isWar to change variables
// function of War comparison
// var war = function () {

// start button
$start.addEventListener('click', startGame);
// Play button
$stop.removeEventListener('click',compareCards);

// subtract 10 cards from deck (loser of war)
/// this is how we could put cards for war in a holding tank first

var warCardsRemoved = function() {
      tempHand1 = player1Deck.slice(0, 4);  // this removes first 4 cards
      tempHand2 = player2Deck.slice(0, 4);  // this removes first 4 cards
      // below code is above added at Line 179
      // var compareCardP1 = tempHand1[0];    // compares 1st card
      // var compareCardP2 = tempHand2[0];    // compares 1st card
      //player1.concat(tempHand1, tempHand2); // this adds 8 cards to winner
}
// var startWar = function () {
//     // run func to hold out cards 3 facedown, 1 up


gameOver = function () {
do {
    player1Deck[i] < player1Deck.length;
    i++;
}
while (i < 1);
}


