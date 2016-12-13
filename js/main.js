console.log('aloha, dakotah!')

// create a deck of playing cards
// four suits, aces high
var deck = [
  [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
];

// each player is dealt their cards
var a = [4, 3, 9];
var b = [7, 5, 2];

// ==================================================================
// create a battle function
// ==================================================================
// the first card in each players' deck is put in play.
// compare the value of both cards
// a[0] > b[0]
// // if a > b, a collects b's card
// if (a[0] > b[0] === true){
//   a.unshift(b.shift());
// // else b collects a's card
// } else {
//   b.unshift(a.shift());
// }
// // show the remaining cards in each player's stack
// console.log(a);
// console.log(b);

// consolodate the above into a battle function
console.log(a);
console.log(b);

var battle = function () {
  if (a[0] > b[0] === true){
    // a acquires b's card
    a.push(b.shift());
    // used card and new card are pushed to
    // the back of a's card-stack array
    a.push(a.shift());
  } else {
    // b acquires a's card
    b.push(a.shift());
    // used card and new card are pushed to
    // the back of b's card-stack array
    b.push(b.shift());
  }

  console.log(a);
  console.log(b);
};


// loop the battle function until player runs out of cards

while (a.length >= 1 && b.length >= 1) {
  battle();
}





// ==================================================================
// Working on function to shuffle deal and deal cards to players
// ==================================================================
// shuffle or randomize the order of the deck
// fisher-yates model
// var shuffle = function () {
  // for (var i = 0; i < deck[0].length; i --)
// };

// pull cards from deck and deal them
// out to each player

// var oddCards = function () {
  // for (var i = 0; i < deck[0].length; i ++)
  //   if (deck[0][i] % 2 !== 0) {
  //   console.log(deck[0][i]);
  // }

// var aCards = [];
// var bCards = deck[0].slice(oddCards);

// bCards.push(oddCards());


// the deck is dealt so that each player
// starts with a split of the deck (26 cards)
//




