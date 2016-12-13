// create a deck of cards

var deck = [];
var suits = ['hearts', 'clubs', 'spades', 'diamonds'];
var cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
var names = ['two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king', 'ace'];
var dealerHand = [];
var playerHand = [];
var dealerScore = null;
var playerScore = null;
// function to make a deck of cards
// question - is it not possible to do this with 3 for loops? I got back ~ 670 objects in my array

var makeDeck = function() {

  for (var i = 0; i < suits.length; i++) {
    for (var j = 0; j < names.length; j++) {
      var card = {};
      card.suit = suits[i];
      card.name = names[j];
      card.value = cardValues[j];
      deck.push(card);
    };
  };
};


// for test
// makeDeck();

// shuffle function
// http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
// Durstenfeld Shuffle
var shuffleDeck = function(array) {
  for (var i = deck.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = deck[i];
      deck[i] = deck[j];
      deck[j] = temp;
  }
  return array;
};


//function to deal cards & calculate initial score at the beginning of the game
var dealCards = function() {
  for(i=0;i<2;i++){
  dealerHand[i] = deck.pop();
  playerHand[i] = deck.pop();
  }
  dealerScore = dealerHand[0].value + dealerHand[1].value;
  playerScore = playerHand[0].value + playerHand[1].value;
};










