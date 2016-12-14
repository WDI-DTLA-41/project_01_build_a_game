console.log('aloha, dakotah!')

// create a deck of playing cards
// four suits, aces high
var deck = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
            2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
            2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
            2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
];

// each player is dealt their cards
var cardStackA = [4, 3, 13, 9, 7, 5, 11, 4];
  console.log("A's card stack: " + cardStackA);
var cardStackB = [7, 5, 2, 10, 12, 6, 8, 14];
  console.log("B's card stack: " + cardStackB);
var battleCardA = [];
var battleCardB = [];

console.log("BATTLE");
// pushes a card in play from each player's card stack
var battle = function () {

  battleCardA.push(cardStackA.shift([0]));
  console.log("A's card left in stack: " + cardStackA);
  console.log("A's card in battle: " + battleCardA);

  battleCardB.push(cardStackB.shift([0]));
  console.log("B's card left in stack: " + cardStackB);
  console.log("B's card in battle: " + battleCardB);
}

battle();

var warCardsA
var warCardsB

// ==================================================================
// CREATE A WAR FUNCTION
// ==================================================================var war = function () {
//   warCardsA = cardStackA.splice(0,4);
//   // warCardsA = battleCardA[1][3];
//   console.log("warCardsA " + warCardsA);

//   battleCardB.push(cardStackB.splice(0,4));
//   warCardsB = battleCardB[1][3];
//   console.log("warCardsB " + warCardsB);

//   // if (warCardsA > warCardsB === true){
//     // console.log("Player A wins!")
//     // cardStackA.push(battleCardB.shift(), battleCardB[1]);
//     // cardStackA.push(battleCardA.shift());
//     // console.log(cardStackA);
// //
//   // } else {
//     // console.log("Player B wins!")
//     // cardStackB.push(battleCardA.shift());
//     // cardStackB.push(battleCardB.shift());
//     // console.log(cardStackB);
//   // }

//   // console.log("A's card in battle: " + battleCardA);
//   console.log("A's card stack: " + cardStackA);
//   // console.log("B's card in battle: " + battleCardB);
//   console.log("B's card stack: " + cardStackB);
// }

// ==================================================================
// CREATE A BATTLE FUNCTION
// ==================================================================
// card values are compared. player with higher value
// collects both cards in play.
// if both cards are equal, the next four cards from
// each player's stack are pushed into their inPlay array.
// the last card pushed inPlay then enters

// if (battleCardA[0] === battleCardB[0]) {
  // war();
// }


var compare = function () {
 if (battleCardA[0] > battleCardB[0] === true){
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

  console.log("A's card in battle: " + battleCardA);
  console.log("A's card stack: " + cardStackA);
  console.log("B's card in battle: " + battleCardB);
  console.log("B's card stack: " + cardStackB);
};


// loop the battle function until player runs out of cards

// while (a.length >= 1 && b.length >= 1) {
//   battle();
// }





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



