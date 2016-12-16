// create a deck of cards
var deck;
var suits = ['hearts', 'clubs', 'spades', 'diamonds'];
var cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
// var cardValues = [11, 7, 7, 11, 11];
var names = ['two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king', 'ace'];
// var names = ['ace', 'seven', 'seven', 'ace', 'ace'];
// var dealerHand = []; // not req after using player & dealer
// var playerHand = []; // not req after using player & dealer
// var dealerScore = null; //
// var playerScore = null; //

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
  resetHands();
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
  dealScoreCompare();
};


// //using a function to calculate dealer score
// var dealerCal = function() {
//   dealerScore = dealerScore + dealerHand[dealerHand.length-1].value;
// };

// //using a function to calculate player score
// var playerCal = function() {
//   playerScore = playerScore + playerHand[playerHand.length-1].value;
// }

// takes an object(player or dealer) and calculates the scores for that 'user'[parameter]
// while loop checks for aces to convert to value 1 if user score over 21
var calculateHandOf = function(user) {
  user.score = user.score + user.hand[user.hand.length-1].value;
  while(user.score > 21) {
    if (!user.hand.find(findAce)) {
      return false;
    }
    var changedAce = user.hand.find(findAce);
     changedAce.value = 1;
     user.score = null;
     for (var x = 0; x < user.hand.length; x++) {
      user.score = user.score+user.hand[x].value;
     }
  }
  return user.score;
};

var findAce = function (ace){
  return ace.value === 11;
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
    // dealer loses automatically if user has stayed
  } else if (dealer.score === 21) {
      console.log('Dealer Hits BlackJack. Sorry!');
      endScoreCompare();
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
    endScoreCompare();
    return dealer.score;
  }

}

//function to reset score (called: at the beginning of a new hand)
var resetHands = function() {
  player.score = 0;
  dealer.score = 0;
  player.hand = [];
  dealer.hand = [];
};

// function to compare dealer score with player's score
var dealScoreCompare = function(result) {
  if (dealer.score === 21 && player.score === 21) {
    console.log("It's a push!");
    return result;
  } else if (dealer.score === 21 && player.score < 21) {
    console.log("Dealer Hits Blackjack. Sorry, You Lose! Try Again")
    return result;
  } else if (player.score === 21 && dealer.score < 21) {
    console.log("You Hit Blackjack! You Win! Play Again")
    return result;
  }
};



var endScoreCompare = function(result) {
  if (dealer.score === player.score)
  {
    console.log("It's a push!");
    return result;
  } else if (dealer.score > player.score) {
    console.log("Dealer Wins :( Try Again!");
    return result;
  } else if (dealer.score < player.score) {
    console.log("You Beat The Dealer! Moneybags!");
    return result;
  }
};

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
$newHand.addEventListener('click', resetHands);
$hit.addEventListener('click', playerHit);
$deal.addEventListener('click', dealCards);
$stay.addEventListener('click', playerStay);




