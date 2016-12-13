// create a deck of cards

var deck = [];
var suits = ['hearts', 'clubs', 'spades', 'diamonds'];
var cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 10, 10, 10];
var names = ['two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'ace', 'jack', 'queen', 'king'];

// function to make a deck of cards

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

