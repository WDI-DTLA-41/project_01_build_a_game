// create a deck of cards
var deck;
var suits = ['hearts', 'clubs', 'spades', 'diamonds'];
var cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
// var cardValues = [11, 7, 7, 11, 11];
var names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
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
var $userArea = document.querySelector('.userarea');
var $dealArea = document.querySelector('.dealarea');
var $dscore = document.querySelector('.dscore');
var $pscore = document.querySelector('.pscore');

//setting only New Hand button visible initially
$deal.style.visibility='hidden';
$hit.style.visibility='hidden';
$stay.style.visibility='hidden';



// function to make a deck of cards
var makeDeck = function() {
  resetHands();
  clearPlayingArea();
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
  $deal.style.visibility='visible';
  $newHand.style.visibility='hidden';

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


/**
  * Deals Blackjack hands from a deck, resets hands from previous deal & shuffles deck before dealing
*/
//Issue: dealer hand has both cards but 1 displayed - player could see both dealer cards in console
var dealCards = function() {
  deck = shuffleDeck(deck);
  for (var i = 0; i < 2; i++) {

    player.hand[i] = deck.pop();
    cardPrintPlayer(player.hand[i]);

    dealer.hand[i] = deck.pop();
    calculateHandOf(dealer);
    calculateHandOf(player);
    //display 1st dealer card here
  }

  cardPrintDealer(dealer.hand[0]);
  cardBack();

  // console.log('Dealer Score Is:' + dealer.score);
  console.log('Dealer Score Is:' + dealer.hand[0].value);
  $dscore.innerHTML = dealer.hand[0].value;
  console.log('Player Score Is:' + player.score);
  $pscore.innerHTML = player.score;

  dealScoreCompare();
  // $deal.style.visibility='hidden';
  // $hit.style.visibility='visible';
  // $stay.style.visibility='visible';

};



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
  cardPrintPlayer(player.hand[player.hand.length-1]);
  calculateHandOf(player);
  // $pscore.innerHTML = player.score;

  console.log("Player's new score is" + player.score);

  if (player.score === 21) {
    $pscore.innerHTML = player.score + ' You might wanna stay';

    return console.log('You hit 21!! You might wanna stay');
  } if (player.score > 21){
    $hit.style.visibility='hidden';
    $stay.style.visibility='hidden';
    $newHand.style.visibility='visible';
    $pscore.innerHTML = player.score;

    return console.log('you went BUST');

  } else {
    $pscore.innerHTML = player.score;

    return player.score;
  }
};

var playerStay = function() {
  console.log("You Stay! Dealer's Turn");
  cardPrintDealer(dealer.hand[1]);
  dealerTurn();

};


var dealerTurn = function(result) {
  $deal.style.visibility='hidden';
  $hit.style.visibility='hidden';
  $stay.style.visibility='hidden';
  $newHand.style.visibility='hidden';
  cardBackRemove();
  if (dealer.score > 21) {
    console.log('Dealer Went BUST! You Win!');
    $newHand.style.visibility='visible';
    $dscore.innerHTML = dealer.score;

    return dealer.score;
    // dealer loses automatically if user has stayed
  } else if (dealer.score === 21) {
      console.log('Dealer Hits 21, check user score...');
      endScoreCompare();
      $newHand.style.visibility='visible';
      $dscore.innerHTML = dealer.score;

      return dealer.score;
  } else if (dealer.score < 17){
    dealer.hand[dealer.hand.length] = deck.pop();
    cardPrintDealer(dealer.hand[dealer.hand.length-1]);
    console.log(dealer.hand[dealer.hand.length-1]);
    calculateHandOf(dealer)
    console.log("Dealer Score is Currently " + dealer.score);
    $dscore.innerHTML = dealer.score;
    dealerTurn();
    //make dealer draw another card
  } else {
    console.log('Dealer Score is: ' + dealer.score);
    endScoreCompare();
    $newHand.style.visibility='visible';
    $dscore.innerHTML = dealer.score;

    return dealer.score;
  }
  $dscore.innerHTML = dealer.score;

}

//function to reset score (called: at the beginning of a new hand)
var resetHands = function() {
  player.score = 0;
  dealer.score = 0;
  player.hand = [];
  dealer.hand = [];
  $dscore.innerHTML = "";
  $pscore.innerHTML = "";

};



// function to render DEALER cards to html
var cardPrintDealer = function(user) {
  var img = document.createElement('img');
  // img.setAttribute("class", "card");
  // img.src = '/playing_cards' + card.name + '/' + card.size;
  img.src = '/playing_cards/' + user.name + '_of_' + user.suit + '.png';
  img.style.height = "150px";
  img.style.width = "103.2px";
  // img.classList.add('card');

  $dealArea.appendChild(img);
}

// function to render PLAYER cards to html
var cardPrintPlayer = function(user) {
  var img = document.createElement('img');
  // img.setAttribute("class", "card");
  // img.src = '/playing_cards' + card.name + '/' + card.size;
  img.src = '/playing_cards/' + user.name + '_of_' + user.suit + '.png';
  img.style.height = "150px";
  img.style.width = "103.2px";

  $userArea.appendChild(img);
}

//function to render back of card
var cardBack = function () {
  cardBackImg = document.createElement('img');
  cardBackImg.src = '/playing_cards/cardback1.png',
  cardBackImg.style.height = "150px",
  cardBackImg.style.width = "103.2px";
  $dealArea.appendChild(cardBackImg);

};

//function to remove back of card
var cardBackRemove = function() {
 if ($dealArea.contains(cardBackImg)) {
 $dealArea.removeChild(cardBackImg);
};
};

//function to remove appended cards from both dealer and player areas
var clearPlayingArea = function() {
  $userArea.innerHTML = "";
  $dealArea.innerHTML = "";
}

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

// function to compare dealer score with player's score on deal
var dealScoreCompare = function(result) {
  if (dealer.score === 21 && player.score === 21){
    console.log("It's a Blackjack Push. Nobody wins");
    $deal.style.visibility='hidden';
    $hit.style.visibility='hidden';
    $stay.style.visibility='hidden';
    $newHand.style.visibility='visible';
    cardBackRemove();
    cardPrintDealer(dealer.hand[1]);
    $dscore.innerHTML = dealer.score;

    return result;
  } else if (dealer.score === 21 && player.score < 21) {
      console.log("Dealer Hits Blackjack :( Try Again!");
      $deal.style.visibility='hidden';
      $hit.style.visibility='hidden';
      $stay.style.visibility='hidden';
      $newHand.style.visibility='visible';
      cardBackRemove();
      cardPrintDealer(dealer.hand[1]);
      $dscore.innerHTML = dealer.score;


      return result;
  } else if (player.score === 21 && dealer.score < 21) {
      console.log("You hit Blackjack! Moneybags!");
      $deal.style.visibility='hidden';
      $hit.style.visibility='hidden';
      $stay.style.visibility='hidden';
      $newHand.style.visibility='visible';
      cardBackRemove();
      cardPrintDealer(dealer.hand[1]);
      $dscore.innerHTML = dealer.score;

      return result;
    } else {
      $deal.style.visibility='hidden';
      $hit.style.visibility='visible';
      $stay.style.visibility='visible';
    }
};

$newHand.addEventListener('click', makeDeck);
$deal.addEventListener('click', dealCards);
$hit.addEventListener('click', playerHit);
$stay.addEventListener('click', playerStay);




