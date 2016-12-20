// console.log('hi');


// card suits
var suits = ["Club", "Heart", "Diamond", "Spade"];
// card values
var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
// deck of shuffled cards
var deck = [];
// the empty array that will contains playerOnes cards
var playerOne = [];
// Empty array that will conatain dealers cards
var dealer = [];
// player's score
var playerScore = 0;
// dealers score
var dealerScore = 0;

var gameOver = null;


// make deck
/**
* makes a deck of cards
*/
// makes the deck - first for loop iterates through the suit array
// the second for loop iterates through the values array
var makeDeck = function() {
  for(var i = 0; i < suits.length; i++) {
   var suit = suits[i];
    for(var j = 0; j < values.length; j++) {
      var val = values[j]
      // var suit and var val are taken from each each for loop to crete each card object
      var card = {
            suit: suit,
            value: val
          };
      // each card is pushed into the empty deck array, now I have a deck of cards
      deck.push(card);
    }
  }
}



// shuffle deck
// this function randomizes the order of my deck of cards
var shuffleDeck = function() {
  // deck array = a loDash shuffled deck
  deck = _.shuffle(deck);
  return deck;
}



var updateDisplay = function() {
  console.log('UPDATE DISPLAY');
  //  These are global so that the zero score shows before game play
  var playerScoreEl = document.querySelector('#playerscore');
  playerScoreEl.textContent = playerScore;

  var dealerScoreEl = document.querySelector('#dealerscore');
  dealerScoreEl.textContent = dealerScore;



  // update the score panel UI
  console.log(dealer);
  console.log(playerOne);
}


// DEAL CARDS, NO DISPLAY
var deal = function(){
  // take two things out - to playerOne
  // break down dealing into 2 instances of Hitting
  playerHit();
  playerHit();
  // gives dealer one card
  // var card = deck.pop()
  dealerHit();
  // get playerOne score total

   }
   // updateDisplay();


// gives playerOne one more card, NO DISPLAY
var hit = function (player) {
  // take card from deck
  var card = deck.pop()
  // give card to playerOnes hand
  //  flag player here
  player.push(card);

}

var playerHit = function() {
  console.log('playerHit');
  hit(playerOne);
  playerScore = getValues(playerOne);   // check for bust/21 here
  //checking for Bust
  checkPlayerScore();
  console.log('findWinner player');
  console.log("player score is " + playerScore);
}

  // gives dealer one more card
var dealerHit = function () {
  console.log('dealerHit()');
  hit(dealer);
  dealerScore = getValues(dealer);
  // check for bust/21 here
  console.log("dealer score is " + dealerScore)

  //  dealer array gets another card but score doesnt update total
  if(dealerScore <= 16) {
  // AI stuff
  } else if(dealerScore >= 17) {

  }
}

// get dealer score
var dealerTurn = function() {
    while(dealerScore < 17) {
      dealerHit();
      updateDisplay();
    }
    // checkForWinner()
    findWinner();
}
// add score totals
var getValues = function(cards) {
  var sum = 0;
  for( var i = 0; i < cards.length; i++) {
    // loops through all cards in the area, getting each value and adding
    var val = cards[i].value;
    // give Jack value of 10
    if(val === "Jack") {
      val = 10;
    }
    // give King value of 10
    if(val === "King") {
      val =10;
    }
    // give queen value of 10
    if(val === "Queen") {
      val = 10;
    }
    // give Ace value of 11
    if(val === "Ace") {
      val = 11;
    }
    sum += val
  }
  // show scores
  // displayValues(sum);
  return sum;
}
var checkForWin = function() {
  if(playerScore === 21) {
    console.log('You Got 21!');
  } else if(dealerScore === 21) {
    console.log('Dealer has 21.');
  } else {

  }
}
  // conditions for the win
  var findWinner = function() {
    if(playerScore > 21) {
    gameOver = 'You Bust'
    console.log("You Bust")
  } else if (dealerScore > 21) {
    gameOver = "Dealer Busts.";
    console.log('Dealer Busts');
  } else if(playerScore > dealerScore) {
   gameOver = 'You win!';
    console.log("You Win!");
  } else if(playerScore < dealerScore) {
    gameOver = 'You lose.'
    console.log("You Lose");
  } else if(playerScore === dealerScore) {
    gameOver = 'You push.'
    console.log("Push");

  }
}

var checkPlayerScore = function () {
  if(playerScore > 21) {
    gameOver = 'You Bust'
    console.log("You Bust")
  }
}
var setupEventListeners = function() {
  var dealButton = document.querySelector('#deal');
  dealButton.addEventListener('click', function(event) {

    // newSpan.textContent = getValues(playerOne);
    console.log('DEAL CLICKED');
    deal();
    // checkForWinner();
    updateDisplay();
});

 //
var hitButton = document.querySelector('.hit');
hitButton.addEventListener('click', function(){
    // when hit button is clicked, PlayerOne will get 1 more card
    playerHit();
    updateDisplay();
});

var stayButton = document.querySelector('#stay');
stayButton.addEventListener('click', function (){
 // Dealer Plays
  console.log('dealers turn');
  dealerTurn();
})
}

var startGame = function() {
  console.log('starting game!');
  setupEventListeners();
  makeDeck();
  shuffleDeck();
  // deal();
  updateDisplay(); //  DOM UPDATES
  // findWinner();
}

// everything above this line should be a variable/function
startGame();
/*
deal() {
  hit(p1);
  hit(p1);
  hit(dealer);
  // dealer gets second card to check for 21?
  checkScores(); // sets a global var if  have a winner
  updateDisplay(); // if we have a winner, we update here
}
*/
