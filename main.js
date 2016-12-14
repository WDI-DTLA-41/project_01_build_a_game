console.log('meow');


//define card value and suite
var value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q','K','A'];
var suit = ["Spades", "Hearts", "Clubs", "Diamonds"];

//make deck
var deck = [];
var card;

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

console.log(deck);

// shuffle
Array.prototype.shuffle = function() {
var n = this.length, j, temp;
console.log(n);
while(--n > 0) {
  j = Math.floor(Math.random() * (n+1));
  temp = this[j];
  this[j] = deck[n];
  this[n] = temp;
  }
  return this;
}
var deckShuffled = deck.shuffle();
console.log(deckShuffled);


//deal
//draw
//addcards
//combine
//cardCount














