// console.log('hi');
// check Scores -- on deal
  // if playerOne score === 21, Win
  // if dealer score === 21, lose
  // if playerOne && dealer score ===21, push
  //  else playerOne plays

  // if playerOne hits, add one more card
  // check score...
  // if score > 21, bust you lose
  //  if stay, dealer plays

  // check scores
  // if dealer score <= 16 dealer hits
  // if dealer score >=17 dealer stays
  //  if dealer score === playerOne score, push
  // else if score === 21, then 21
  // if score > 21, bust!, you win
// if dealer stays, compare scores
 //  if player score < dealer, you lose
 //  if player score > dealer, you win
 // if player score === dealer score - push



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

  if (gameOver) {
    var ending = document.createElement('h1');
    ending.textContent = "Game Over.";
    // print gameOver text to an h1
  }

  //clear the card display
  // playerOne.forEach((card) => {
    // add the card to the display
    // div.textContent = String(card.suite).toUpperCase()[0];
  // });
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
  //     if(playerScore > 21) {
  //   gameOver = 'You Bust'
  //   console.log("You Bust")
  // } else if (dealerScore > 21) {
  //   gameOver = "Dealer Busts.";
  //   console.log('Dealer Busts');
  // }
}

var playerHit = function() {
  console.log('playerHit');
  hit(playerOne);
  playerScore = getValues(playerOne);   // check for bust/21 here
  //checking for Bust
  checkPlayerScore();
  console.log('finwWinner player');
    console.log("player score is " + playerScore)

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

// // gets score for playerOne
//    playerScore = getValues(playerOne);
//     if(playerScore === 21) {
//       console.log("You Got 21!");
//     }
});

 //
var hitButton = document.querySelector('.hit');
hitButton.addEventListener('click', function(){
    // when hit button is clicked, PlayerOne will get 1 more card
    playerHit();
    updateDisplay();
    // creates new div that looks like a playing card
    // var newDiv = document.createElement('div');
    // newDiv.classList.add('card');
    // document.body.appendChild(newDiv);
    // console.log('hit');
    // update playerOnes score
    // playerScore = getValues(playerOne);
    // console.log(playerScore);
    // if(playerScore > 21) {
    //   console.log("You Busted");

    // }
});

var stayButton = document.querySelector('#stay');
stayButton.addEventListener('click', function (){
  //  Dealer plays.
  // if score >= 17 stay
  // else, while score < 17 => hit
  console.log('dealers turn');
  dealerTurn();

})
// hitButton.removeEventListener(dealerStay, function (){
//   findWinner();

// })
}

var startGame = function() {
  console.log('starting game!');
  setupEventListeners(); // ALL CLICK HANDLERS GO HERE
  makeDeck();
  shuffleDeck();
  // deal(); // MANIPULATE GAME STATE
  updateDisplay(); // ALL THE DOM UPDATES GO HERE
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
  checkScores(); // sets a global var if we have a winner
  updateDisplay(); // if we have a winner, we update UI here
}
*/
