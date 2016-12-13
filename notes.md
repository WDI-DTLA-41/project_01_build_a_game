blackjack logic:

Blackjack
1. Create a deck of cards
    - 52 objects each with name, value, suit
    - store in an array "the deck"
    - shuffle that array 
2. Deal 1 card facedown to dealer
3. Deal 1 card face-up to player
4. Deal 1 card face up to dealer
5. Deal 1 card face up to player
- each player gets 2 cards
- remove cards from deck
- assign to player array or "hand"
6. Calculte then Display player total
- function to calculate combined value of each player's hand
7. User has 2 options
8. Hit OR Stay
- user interact, click on button
8ai. Hit - deal player another card
8aii. Check if user bust (>21)
8aiii. Hit again - deal..
8b. OR Stay
9. After user Stays or Busts
10a. If Dealer less than 17
10ai. Dealer Hits
10b. If Dealer >17
10bi. Dealer Stays
11. Compare Dealer total with user total
12. If user higher, user wins
13. If dealer higher, dealer wins


Snippets I might need:
Math.floor(Math.random()*52+1); (Random number between 1 & 52)


Deck:
52 cards
1s & 11s: 4
10s: 16

Card: object
value: integer
suite: string 
face: null, 'king', 'jack', 'queen', 'ace'

var card = {
    value: 10,
    name: 'Ten',
    suit: 'Hearts',
}

Functions:
1. Create & shuffle a deck of cards
2. Deal cards from deck
3. Hit function //check if 21 or less
4. Stay function

5. Total Up Card Values 
6. Compare Card values

Data:
deck
dealers hand = [];
players hand / current cards

Object needs 3 key/value pairs
name of card
suit
actual value of card

ALTERNATIVELY:
If using an array,
if index value 11,12,13, assign value of 10


function hit(hand) {
    var dealtCard = deck.shift();
    hand.push(dealtCard);
    checkScore();
}

function checkScore

Create deck how?

var suits = ['hearts', 'clubs', 'spades', 'diamonds'];
var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 10, 10, 10]
var names = ['ace', 'two', 'three'] ...

// loop through suits
    loop through values
        loop through names
            var card = {

        }
        deck.push(card)

Objects in an array
var deck = [
    {},
    {},
    {},

]

array of arrays

objects

// TEST function for deck of 10 cards 2 suits
// var tempDeck = [];
// var tempSuits = ['hearts', 'clubs'];
// var tempValues = [1, 2, 3, 4, 4];
// var tempNames = ['one', 'two', 'three', 'four', 'five'];
//   var makeTemp = function() {

//     for (var i=0; i < tempSuits.length; i++) {
//       for (var j=0; j < tempNames.length; j++) {
//       var tempCard = {};
//       tempCard.suit = tempSuits[i]
//       tempCard.name = tempNames[j];
//       tempCard.value = tempValues[j];
//       tempDeck.push(tempCard);
//     };

//     };

//   };





