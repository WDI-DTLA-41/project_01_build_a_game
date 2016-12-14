// create a deck of cards
var deck;
var suits = ['hearts', 'clubs', 'spades', 'diamonds'];
var cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
var names = ['two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king', 'ace'];
var dealerHand = [];
var playerHand = [];
var dealerScore = null;
var playerScore = null;

var dealer = {
  score: 0,
  hand: []
}

var player = {
  score: 0,
  hand: []
}

var $newHand = document.querySelector('.newhand');
var $deal = document.querySelector('.deal');
var $hit = document.querySelector('.hit');
var $stay = document.querySelector('.stay');

// function to make a deck of cards
// question - is it not possible to do this with 3 for loops? I got back ~ 670 objects in my array

var makeDeck = function() {
  deck = [];
  for (var i = 0; i < suits.length; i++) {
    for (var j = 0; j < names.length; j++) {
      var card = {};
      card.suit = suits[i];
      card.name = names[j];
      card.value = cardValues[j];
      deck.push(card);
    };
  };
  console.log(deck); //logs created deck
};

<<<<<<< HEAD
// var card = {
//   name: 'fillmurray.com',
//   size: '100/100',
// }

// var img = document.createElement('img');
// img.src = 'http://' + card.name + '/' + card.size;
// document.body.append(img);

$newHand.addEventListener('click', makeDeck);
=======
>>>>>>> pairing

// for test
// makeDeck();

// shuffle function
// http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
// Durstenfeld Shuffle
// do not know if actually need a parameter - works without
var shuffleDeck = function(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
   return array;
};


//function to deal cards & calculate initial score at the beginning of the game
var dealCards = function() {
  deck = shuffleDeck(deck);
  for (var i = 0; i < 2; i++) {
    dealerHand[i] = deck.pop();
    playerHand[i] = deck.pop();
    dealerCal();
    playerCal();
  }

  // Replaced hard coding with dealerCal & playerCal above
  // dealerScore = dealerHand[0].value + dealerHand[1].value;
  // playerScore = playerHand[0].value + playerHand[1].value;

  //add auto-win conditions here(21)

  console.log('Dealer Score Is:' + dealerScore);
  console.log('Player Score Is:' + playerScore);
};


//using a function to calculate dealer score
var dealerCal = function() {
  dealerScore = dealerScore + dealerHand[dealerHand.length-1].value;
};

//using a function to calculate player score
var playerCal = function() {
  playerScore = playerScore + playerHand[playerHand.length-1].value;
}



// takes an object(player or dealer) and calculates the scores for that 'user'[parameter]
var calculateHandOf = function(user) {
  user.score = user.score + user.hand[user.hand.length-1].value;
  // playerScore = playerScore + playerHand[playerHand.length-1].value;
}

var playerHit = function(result) {
  playerHand[playerHand.length] = deck.pop();
  // calculateHandOf(player); // NOTE will require refactoring playerHand code to use player.hand
  playerCal();
  // playerScore = playerScore + playerHand[2].value; //redundant
  console.log("Player's new score is" + playerScore);
  if(playerScore === 21) {
    return console.log('BLACKJACK!');
  } else if (playerScore > 21){
    return console.log('you went BUST');
  } else {
    return playerScore;
  }
}

$hit.addEventListener('click', playerHit);
$deal.addEventListener('click', dealCards);
$newHand.addEventListener('click', makeDeck);





