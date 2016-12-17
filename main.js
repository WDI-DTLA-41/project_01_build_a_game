
// # Project Sprint 1 Checklist

// - [ ] Game is deployed via Github Pages
// - [ ] Game repo is up to date on Github
// - [ ] Game repo contains readme.md
// - [ ] Readme.md contains game rules
// - [ ] Game displays to user when they've won
// - [ ] HTML, CSS and JavScript are indented properly!

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

// test cards for WAR
player1Deck = [2, 4, 5, 6, 2, 4, 5, 7, 8];
player2Deck = [2, 4, 5, 6, 2, 4, 5, 9, 9];



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
// $play.addEventListener('click', console.log('test'));

// stop button on html page
 /**
  Remove the stop button, instead, add gameover()
 **/

var $reset = document.querySelector('#reset');
var resetGame = function() {
      cardsPlaying = cardsDefault;
      player1.innerHTML = "";
      player2.innerHTML = "";
      startGame();
}

  // $play.addEventListener('click', turnCards);


var startGame = function(){
  alert('The game is starting, press Play');
  //cards
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
    // num = num + 1;
    compareCards(topCardP1, topCardP2);
    if (topCardP1 === undefined){
        alert('Player 2 wins! GAME OVER');
        resetGame();
        //connectBoard();
    } else if (topCardP2 === undefined) {
        alert('Player 1 wins! GAME OVER');
        resetGame();
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
  console.log('Player1 cards: ' + player1Deck);
  console.log('Player1 deck length: ' + player1Deck.length);
  console.log('Player2 cards: ' + player2Deck);
  console.log('Player2 deck length: ' + player2Deck.length);
  console.log('total cards in play: ' + (player2Deck.length + player1Deck.length));

  if (compareCardP1 > compareCardP2) {

        //logic here to add card back
        // remove cards from players' hands
        var removedCard1 = player1Deck.shift();
        var removedCard2 = player2Deck.shift();
        console.log('P1 WON - Moved 2 cards to beginning of deck ' + player1Deck);
        // add both cards to bottom of player1 pile
        player1Deck.push(removedCard1, removedCard2);
        console.log('P1 - pushed card ' + player1Deck);
        console.log('P2 cards ' + player2Deck);
        isWar = false;
        return 'Winner is Player 1';


    } else if (compareCardP1 < compareCardP2) {

        //logic here to add card back
        // remove cards from players' hands
        var removedCard1 = player1Deck.shift();
        var removedCard2 = player2Deck.shift();
        console.log('P2 WON - Moved 2 cards to beginning of deck ' + player2Deck);
        // add both cards to bottom of player 2 pile
        player2Deck.push(removedCard1,removedCard2);
        console.log('P2 - pushed card ' + player2Deck);
        console.log('P1 cards ' + player1Deck);
        // helper to visualize
        isWar = false;
        return 'Winner is Player 2';


   } else {

          // cards match
          // Alert War
          alert('Declare War');

          //This logic needs to work
          warCardsRemoved();

          console.log(player1Deck);
          console.log(player2Deck);

          if (tempHand1[3] > tempHand2[3]) {
              var removedCard1 = player1Deck.shift();
              var removedCard2 = player2Deck.shift();
              // player 1 wins 'WAR' and gets all 8 cards

              console.log('P1 wins War cards ' + tempHand1);
              console.log('P1 wins War cards ' + tempHand2);

              player1Deck = player1Deck.concat(tempHand1, tempHand2);
              console.log(player1Deck + ' concatanated player1 Deck');
              player1Deck.push(removedCard1, removedCard2);
              console.log(player1Deck + ' player1Decked pushed')
              console.log('player12 deck: ' + player2Deck)
              //resets war flag to off
              isWar = false;
              alert('Player 1 is WINNER of WAR!');


          } else {
              var removedCard1 = player1Deck.shift();
              var removedCard2 = player2Deck.shift();
              // add both cards to bottom of player 2 pile
              // player2Deck.push(removedCard1, removedCard2);
              // player 2 wins 'WAR' and gets all 8 cards
              console.log('tempHand1: ' + tempHand1);
              console.log('tempHand2: ' + tempHand2);
              player2Deck = player2Deck.concat(tempHand1, tempHand2);
              console.log(player2Deck + ' player2 Deck');
              player2Deck.push(removedCard1, removedCard2);
              //resets war flag to off
              isWar = false;
              alert('Player 2 is WINNER of WAR!');
          }
    }
}

// start button
$start.addEventListener('click', startGame);
// Play button
$reset.addEventListener('click',resetGame);

// subtract 10 cards from deck (loser of war)
/// this is how we could put cards for war in a holding tank first

function warCardsRemoved() {
      tempHand1 = player1Deck.splice(0, 4);  // this removes first 4 cards
      tempHand2 = player2Deck.splice(0, 4);  // this removes first 4 cards
      player1.innerHTML = tempHand1[0];
      player2.innerHTML = tempHand2[0];
      console.log('In warCardsRemoved func ' + tempHand1);
      console.log('In warCardsRemoved func ' + tempHand2);
}



// gameOver = function () {
// do {
//     player1Deck[i] < player1Deck.length;
//     i++;
// }
// while (i < 1);
// }


