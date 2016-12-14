console.log('aloha, dakotah!')

// create a deck of playing cards
// four suits, aces high
var deck = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
            2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
            2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
            2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
];

// each player is dealt their cards
var cardStackA = [7, 10, 4];
  // console.log("A's card stack: " + cardStackA);
var cardStackB = [6, 9, 3];
  // console.log("B's card stack: " + cardStackB);
var battleCardA = [];
var battleCardB = [];
var battleCard = battleCardA.concat(battleCardB);

console.log("Beginning cardStackA: " + cardStackA);
console.log("Beginning cardStackB: " + cardStackB);
// ==================================================================
// COMPARE VALUES OF CARDS IN PLAY
// ==================================================================
// simply put, compare the value of both cards in play

var compare = function () {
  if (battleCardA[0] === battleCardB[0]) {
    war();
    // compareWar();
  } else if (battleCardA[0] > battleCardB[0] === true){
    // a acquires b's card
    cardStackA.push(battleCardB.shift());
    // used card and new card are pushed to
    // the back of a's card-stack array
    cardStackA.push(battleCardA.shift());
    console.log("Player A wins!")
  } else {
    // b acquires a's card
    cardStackB.push(battleCardA.shift());
    // used card and new card are pushed to
    // the back of b's card-stack array
    cardStackB.push(battleCardB.shift());
    console.log("Player B wins!")
  }

  console.log("NEW cardStackA: " + cardStackA);
  console.log("NEW cardStackB: " + cardStackB);
};


// ==================================================================
// WHEN PLAYER WINS A WAR, COLLECT ALL CARDS IN PLAY
// ==================================================================
var collectCardsA = function () {
  for ( var i = battleCardB.length - 1; i >= 0; i --){
    cardStackA.push(battleCardB.shift());
  }
  for ( var i = battleCardA.length - 1; i >= 0; i --){
    cardStackA.push(battleCardA.shift());
  }
  console.log("NEW cardStackA: " + cardStackA);
  console.log("NEW cardStackB: " + cardStackB);
}

var collectCardsB = function () {
  for ( var i = battleCardA.length - 1; i >= 0; i --){
    cardStackB.push(battleCardA.shift());
  }
  for ( var i = battleCardB.length - 1; i >= 0; i --){
    cardStackB.push(battleCardB.shift());
  }
  // console.log("NEW cardStackA: " + cardStackA);
  // console.log("NEW cardStackB: " + cardStackB);
}

// ==================================================================
// CREATE A BATTLE FUNCTION
// ==================================================================
// card values are compared. player with higher value
// collects both cards in play.
// if both cards are equal, the next four cards from
// each player's stack are pushed into their inPlay array.
// the last card pushed inPlay then enters

// pushes a card in play from each player's card stack
var battle = function () {

  battleCardA.push(cardStackA.shift([0]));
  // console.log("cardStackA: " + cardStackA);
  console.log("battleCardA: " + battleCardA);

  battleCardB.push(cardStackB.shift([0]));
  // console.log("cardStackB: " + cardStackB);
  console.log("battleCardB: " + battleCardB);

  compare();
}


// if (cardStackA.length >= 1 && cardStackB.length >= 1) {
//    battle();
//  } else if (cardStackA.length >= 1 && cardStackB.length < 1){
//   console.log("Player A Conquers the World!")
//  } else {
//   console.log("Player B Conquers the World!");
// }



// ==================================================================
// CREATE A WAR FUNCTION
// ==================================================================


// var war2 = function () {
//   var battleCard = battleCardA.concat(battleCardB);
//   for (var i = 0; i < (battleCard.length - 2); i ++){
//     battle();
//   }
// }

// var compareWar = function () {
// //   if (battleCardA[4] === battleCardB[4]) {
// //     war2();
//    if (battleCardA[4] > battleCardB[4] === true) {
//     collectCardsA();
//   } else {
//     collectCardsB();
//   }
// }

// var war = function () {
//   for (var i = 0; i < 4; i ++) {
//     battle();
//     compareWar();
//   }

//   console.log("A card at war: " + battleCardA[4]);
//   console.log("B card at war: " + battleCardB[4]);
// }

// ==================================================================
// CREATE GAME FLOW/WINNING CONIDITION
// ==================================================================
var winner = function () {
if (cardStackA.length < 1) {
  console.log("player B conquers the world!")
  alert("player B conquers the world!")
  } else if (cardStackB.length < 1) {
  console.log("player A conquers the world!")
  alert("player A conquers the world!")
  }
  // else {
  // while (cardStackA.length >= 1 && cardStackB.length >= 1) {
  // battle();  // continue game play
  // }
}

while (cardStackA.length >= 1 && cardStackB.length >= 1) {
  battle();
}

winner();


// ==================================================================
// Working on function to shuffle deal and deal cards to players
// ==================================================================
// shuffle or randomize the order of the deck
// fisher-yates model


// the deck is dealt so that each player
// starts with a split of the deck (26 cards)
//


// var deck = [4, 3, 9, 7, 5, 2];
// var goodGuys = [];
// var badGuys = [];
// // function that picks random number betweenw
// var getRandom = function (min, max){
//   // return Math.random() * (max - min) + min;
//   return Math.floor(Math.random() * (2 - 0 ) + 0);
// }

// // travel through the deck array and run getRandom against each index
// for (var i = deck.length; i > 0; i --) {
//   getRandom();
//   if (getRandom() === 0) {
//     console.log("goodGuys");
//     // goodGuys.push(deck[i]);
//   } else if (getRandom () === 1) {
//     console.log("badGuys");
//     // badGuys.push(deck[i]);
//   }
// }



