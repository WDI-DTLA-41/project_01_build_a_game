// create a deck of cards
var deck;
var suits = ['hearts', 'clubs', 'spades', 'diamonds'];
var cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
var names = ['two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king', 'ace'];
var dealerHand = []; // not req after using player & dealer
var playerHand = []; // not req after using player & dealer
var dealerScore = null; //
var playerScore = null; //

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

// var card = {
//   name: 'fillmurray.com',
//   size: '100/100',
// }

// var img = document.createElement('img');
// img.src = 'http://' + card.name + '/' + card.size;
// document.body.append(img);


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
    dealer.hand[i] = deck.pop();
    player.hand[i] = deck.pop();
    calculateHandOf(dealer);
    calculateHandOf(player);
  }

  // Replaced hard coding with dealerCal & playerCal above
  // dealerScore = dealerHand[0].value + dealerHand[1].value;
  // playerScore = playerHand[0].value + playerHand[1].value;

  //add auto-win conditions here(21)

  console.log('Dealer Score Is:' + dealer.score);
  console.log('Player Score Is:' + player.score);
};


// //using a function to calculate dealer score
// var dealerCal = function() {
//   dealerScore = dealerScore + dealerHand[dealerHand.length-1].value;
// };

// //using a function to calculate player score
// var playerCal = function() {
//   playerScore = playerScore + playerHand[playerHand.length-1].value;
// }


// haven't found a case where converting ace from 11 to 1 breaks
// takes an object(player or dealer) and calculates the scores for that 'user'[parameter]
var calculateHandOf = function(user) {
  user.score = user.score + user.hand[user.hand.length-1].value;
  if (user.score > 21) {
    for (var i = 0; i < user.hand.length; i++) {
      if (user.hand[i].name == "ace") {
        console.log('Ace value converting to 1 from 11');
        user.hand[i].value = 1;
      }
    }
  }
};

var playerHit = function(result) {
  player.hand[player.hand.length] = deck.pop();
  // calculateHandOf(player); // NOTE will require refactoring playerHand code to use player.hand
  calculateHandOf(player);
  // playerScore = playerScore + playerHand[2].value; //redundant
  console.log("Player's new score is" + player.score);
  if(player.score === 21) {
    return console.log('BLACKJACK!');
  } else if (player.score > 21){
    return console.log('you went BUST');
  } else {
    return player.score;
  }
};

var playerStay = function() {
  console.log("You Stay! Dealer's Turn");
  dealerTurn();

};


var dealerTurn = function(result) {
  if (dealer.score > 21) {
    console.log('Dealer Went BUST! You Win!');
    return dealer.score;
    //also need to compare with user
  } else if (dealer.score === 21) {
      console.log('Dealer Hits BlackJack. Sorry!');
      return dealer.score;
      //also need to compare with user
  } else if (dealer.score < 17){
    dealer.hand[dealer.hand.length] = deck.pop();
    console.log(dealer.hand[dealer.hand.length-1]);
    calculateHandOf(dealer)
    console.log("Dealer Score is Currently " + dealer.score);
    dealerTurn();
    //make dealer draw another card
  } else {
    console.log('Dealer Score is: ' + dealer.score);
    return dealer.score;
  }
}

var scoreCompare = function(result) {

}

// dealerTurn not perfect
// var dealerTurn = function(result) {
//   if (dealer.score === 21) {
//     console.log('Dealer Hits BlackJack. Sorry!');
//     return dealer.score;
//     //also need to compare with user
//   } else if (dealer.score < 17) {
//     dealer.hand[dealer.hand.length] = deck.pop();
//     calculateHandOf(dealer)
//     console.log('Dealer Score is Currently' + dealer.score);
//     //make dealer draw another card
//   } else {
//     console.log('Dealer Score is: ' + dealer.score);
//     return dealer.score;
//   }
// }

$newHand.addEventListener('click', makeDeck);
$hit.addEventListener('click', playerHit);
$deal.addEventListener('click', dealCards);
$stay.addEventListener('click', playerStay);




