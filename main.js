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


var turnCards = function() {
    var topCardP1 = player1Deck[num];
    var topCardP2 = player2Deck[num];
    // if (topCardP1 === undefined){
    //       alert('Player 2 won!');
    // } else if (topCardP2 === undefined) {
    //         alert('Player 1 won!');
    // } now RESET game
    player1.innerHTML = topCardP1;
    player2.innerHTML = topCardP2;
    num = num + 1;
    compareCards(topCardP1, topCardP2);

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
  //debugger
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
        // console.log(cardsSplitHalf1);
        // console.log(cardsSplitHalf2);
        isWar = false;
        return 'Winner is Player 2';


   } else if (compareCardP1 === compareCardP2){

          // cards match
          console.log('Declare War');



          warCardsRemoved();
          if (compareCardP1 < compareCardP2) {
              var removedCard1 = player1Deck.shift();
              var removedCard2 = player2Deck.shift();
              // add both cards to bottom of player1 pile
              player1Deck.push(removedCard1, removedCard2);
              player1Deck.push(removedCard1, removedCard2);
              // player 1 wins 'WAR' and gets all 8 cards
              player1Deck.concat(tempHand1, tempHand2);
              player1Deck.push(removedCard1, removedCard2);
              //resets war flag to off
              isWar = false;
              return 'Winner is Player 1';


          } else {
              var removedCard1 = player1Deck.shift();
              var removedCard2 = player2Deck.shift();
              // add both cards to bottom of player 2 pile
              player2Deck.push(removedCard1, removedCard2);
              // player 2 wins 'WAR' and gets all 8 cards
              player2Deck.concat(tempHand1, tempHand2);
              player2Deck.push(removedCard1, removedCard2);
              //resets war flag to off
              isWar = false;
              return 'Winner is Player 2';
          }
}
}



// war might actually be part of compareCards
// and we just use isWar to change variables
// function of War comparison
// var war = function () {

//         //player1[3] vs player2[3];
//         warCardsRemoved();


// }
// start button
$start.addEventListener('click', startGame);
// Play button
$stop.removeEventListener('click',compareCards);


// make stuff show?

// 1 - query dome for image tag
      // var image = document.querySelector('img');

      // // 2 - declare func expreess
      // var handleMouseOver = function(event){
      //     // add css class to it drilling down to element.
      //     console.log('mouseover');
      //     event.target //target represents the image
      //     event.target.classList //look at mdn element.clss list (gives names of all clases)
      //         // can add class, delete a class, remove it
      //     event.target.classList.add('active'); //
      //     console.log('mouseover');
      //   }
      //   image.addEventListener('mouseover', handleMouseOver);

      // var cardPlay1 = document.querySelector('#player1');
      // function cardShow() {
      //   card

      // }

      // cardPlay1 = function('click', cardShow);


      // var getValues = function() {
      //     expName.value;
      //     expAmount.value;
      //     // can return as array or object **object is better**
      //     // the || 0 (or zero), puts a zero if no amt is entered on page
      //     // instead of NaN
      //     var val = parseFloat(expAmount.value) || 0;
      //     return {
      //         name: expName.value,
      //         amount: val
      //     }
      // }
// ==================image to show?
// 1 - query dome for image tag
// var showCard = document.querySelector('#players');
// var image = document.querySelector('img');
// // 2 - declare func expreess
// var showCard = function(event){
//     // add css class to it drilling down to element.
//     console.log('show my card');
//     event.target; //target represents the image
//     event.target.classList.toggle('img'); //look at mdn element.clss list (gives names of all clases)
//         // can add class, delete a class, remove it
//   //event.target.classList.add('active'); //
//     //console.log('mouseover');
//   }
//   image.addEventListener('click', showCard);


//var image = document.querySelector('img');
// 2 - declare func expreess
//use remove class and mouseout

// var handleMouseOut = function(event){
//   event.target.classList.remove('active');
// }
//  image.addEventListener('mouseout', handleMouseOver);

//============end image


// subtract 10 cards from deck (loser of war)
/// this is how we could put cards for war in a holding tank first

var warCardsRemoved = function() {


      tempHand1 = player1Deck.slice(0, 4);  // this removes first 4 cards
      tempHand2 = player2Deck.slice(0, 4);  // this removes first 4 cards
      var compare1 = tempHand1[0];    // compares 1st card
      var compare2 = tempHand2[0];    // compares 1st card
      //player1.concat(tempHand1, tempHand2); // this adds 8 cards to winner
}
// var startWar = function () {
//     // run func to hold out cards 3 facedown, 1 up

//     warCardsRemoved();
//     //debugger
//     // if (player1[0] > player2[0]) {
//     //    player1.push(removedCard1, removedCard2);
//     //    // player 1 wins 'WAR' and gets all 8 cards
//     //    player1.concat(tempHand1, tempHand2);
//     //    player1.push(removedCard1, removedCard2);
//     //    //resets war flag to off
//     //    isWar = false;
//     //    //compareCards();

//     //   } else  {
//     //   //debugger
//     //    player2.push(removedCard1, removedCard2);
//     //    // player 1 wins 'WAR' and gets all 8 cards
//     //    player2.concat(tempHand1, tempHand2);
//     //    player2.push(removedCard1, removedCard2);
//     //    //resets war flag to off
//     //    isWar = false;
//     //    //compareCards();
//     // }
// }


gameOver = function () {
do {
    player1Deck[i] < player1Deck.length;
    i++;
}
while (i < 1);
}


