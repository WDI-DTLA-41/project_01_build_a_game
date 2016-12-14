console.log('meow');


//define card value and suite
var value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q','K','A'];
var suit = ["Spades", "Hearts", "Clubs", "Diamonds"];
var cardValue;   //need to assign number values

//make deck
var deck = [];
var card;

// creating deck, taking values from value and suit, assigning it to card[object]
// adding it to the deck(array)
var createDeck = function(){
  // loops through 2 - A
  for (var i = 0; i < value.length; i++) {
    // loops spades - diamonds
    for (var j = 0; j < suit.length; j++) {
      card = {value: value[i], suit: suit[j]};
      deck.push(card);
    }
  }
}
createDeck();

//console.log(deck);


    //Title: Fisher-Yates Shuffle
    //Availability: https://bost.ocks.org/mike/shuffle/
    //Availability: https://www.youtube.com/watch?v=tLxBwSL3lPQ

// substituting var 'deck' to .this
Array.prototype.shuffle = function() {
  //'j' represents our random number that will generate through each loop
  // 'temp' holds the temp value
var n = this.length, j, temp;
// console.log(n);
while(--n > 0) {
  j = Math.floor(Math.random() * (n+1));
  temp = this[j];
  this[j] = this[n];
  this[n] = temp;
  }
  return this;
}
var deckShuffled = deck.shuffle();
//console.log(deckShuffled);

//player and dealer
var players = [
  {
    name: 'person'
  },
  {
    name: 'dealer'
  }
];



//deal
//start game
  // var startGame = function(){

  // };
//draw
  // var draw = function(){

  // };
//hit
  // var hit = function(){

  // };
//stand
  // var stand = function(){

  // };
//addcards
//combine
//cardCount













