console.log('meow');

var start = document.querySelector('#startBtn');
var hit = document.querySelector('#hit');
var stand = document.querySelector('#stand');

var cardValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var cardSuit = ["Spades", "Hearts", "Clubs", "Diamonds"];
var cardName = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
var deck = [];
var card;
isFace = true;

var createDeck = function(){
  // loops through 2 - Ace
  for (var i = 0; i < cardName.length; i++) {
    // loops spades - diamonds
  for (var j = 0; j < cardSuit.length; j++) {
    card = {
      name: cardName[i],
      suit: cardSuit[j]
    };
      deck.push(card);
    }
  }
}
createDeck();
//console.log(deck);

//shuffle
//Title: Fisher-Yates Shuffle
//Availability: https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
  //'j' represents a random number that will generate through each loop
  //'temp' holds the temp value
var n = deck.length, j, temp;
  // console.log(n);
while(--n > 0) {
  j = Math.floor(Math.random() * (n));
  temp = deck[j];
  deck[j] = deck[n];
  deck[n] = temp;
  }
  return deck;
}
shuffle();



//player and dealer
var players = [
  {
    name: 'unicorn',
    hand: [],
    score: null
  },
  {
    name: 'dealer',
    hand: [],
    score: null
  }
];

//next turn
//example from tic.tac.toe
var currentPlayer = players[0];
var dealersHand = players[1];
var nextTurn = function(){
  if (currentPlayer && currentPlayer.name === 'unicorn') {
    currentPlayer = players[1];
  } else {
    currentPlayer = players[0];
  }
}

//start game
var startGame = function() {
  createDeck();
  console.log('Game has begun')
}


//deal
var deal = function() {
  for(var i = 0; i < shuffle.length; i++) {
    currentPlayer.hand.push(deal); //need to draw two cards
    dealersHand.hand.push(deal);   //multiply by two?

    nextTurn();
  }
}



start.addEventListener('click', startGame);
start.addEventListener('click', deal);







// var dealFour = deckShuffled.splice(Math.floor(Math.random()*deckShuffled.length), 4);
// dealFour
// console.log(dealFour);
//console.log(dealFour, players[0], deckShuffled.splice)
//start game
  // var startGame = function(){



// function deal(){
//   if(this.deck.length>0) {
//     return this.deck.shift;
//   } else {
//     return null;
//   }
//  }









