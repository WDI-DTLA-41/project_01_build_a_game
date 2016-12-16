// console.log('hi');

var suits = ["Club", "Heart", "Diamond", "Spade"];
var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];

var deck = [];

var playerOne = [];
var dealer = [];

var playerScore = 0;
var dealerScore = 0;

var playerScoreEl = document.querySelector('#playerscore');
  playerScoreEl.textContent = playerScore;

var dealerScoreEl = document.querySelector('#dealerscore');
    dealerScoreEl.textContent = dealerScore;


// make deck
/**
* makes a deck of cards
*/
var makeDeck = function() {
  for(var i = 0; i < suits.length; i++) {
   var suit = suits[i];
    for(var j = 0; j < values.length; j++) {
      var val = values[j]

      var card = {
            suit: suit,
            value: val
          };
      deck.push(card);
    }
  }
}
makeDeck();


//shuffle deck
var shuffleDeck = function() {
  deck = _.shuffle(deck);
  return  deck
}
shuffleDeck();



var deal = function(){
  // take two things out - to playerOne
  hit(playerOne);
  hit(playerOne);
  // gives dealer one card
  var card = deck.pop()
  hit(dealer);
  // get playerOne score total
  playerScore = getValues(playerOne);
  console.log("player score is " + playerScore);
  // get dealers score total
  dealerScore = getValues(dealer);
  console.log("dealer score is " + dealerScore)
 // if over 21 game over
    if(playerScore === 21) {
      console.log("Blackjack, Wou Win!");
      }if(dealerScore === 21){
      console.log("Dealer has 21, you lose");
      } if (dealerScore === 21 && playerScore === 21) {
        console.log(" You Push, No Winner");
    }
  // else get another card
    }
    // gives playerOne one more card
var hit = function (player) {
    var card = deck.pop()
    player.push(card);
}
  // gives dealer one more card
var dealerHit = function (player) {
  var card = deck.pop()
  dealer.push(card);
  //  dealer array gets another card but score doesnt update total
  console.log('dealer hits');
  if(dealerScore <= 16) {

  } else if(dealerScore >= 17) {

  }
}
// get dealer score

var dealerStay = function() {

}
// add score totals
var getValues = function(cards) {
  var sum = 0;
  for( var i = 0; i < cards.length; i++) {
    // loops through all cards in the area, getting each value and adding
    var val = cards[i].value;
    if(val === "Jack") {
      val = 10;
    }
    if(val === "King") {
      val =10;
    }
    if(val === "Queen") {
      val = 10;
    }
    if(val === "Ace") {
      val = 11;
    }
    sum += val
  }
  displayValues(sum);
  return sum;
  console.log('working');
}
// displays scores in spans
function displayValues(sum) {
  playerScoreEl.textContent = sum;
  dealer
  dealerScoreEl.textContent = dealerScore;

}

// conditions for the win
function findWinner() {
    if(playerScore > dealerScore) {
    console.log("You Win!");
  } else if(playerScore < dealerScore) {
    console.log("You Lose");
  } else if(playerScore === dealerScore) {
    console.log("Push it real good.");
  }
}

var dealButton = document.querySelector('#deal');
dealButton.addEventListener('click', function(event) {
// newSpan.textContent = getValues(playerOne);
  deal();
  // console.log('deal');
  // creates a new div that will be a card
  var newDiv = document.createElement('div');
  // add class to the new card
  newDiv.classList.add('card');
  var newDiv = document.createElement('div');
  newDiv.classList.add('card');
  // stick the card to the DOM
  document.body.appendChild(newDiv);
  document.body.appendChild(newDiv);

// gets score for playerOne
   playerScore = getValues(playerOne);
    if(playerScore === 21) {
      console.log("You Got 21!");
    }
//       if (playerScore > dealerScore) {
//   console.log("You Win!");
// } else if(dealerScore > playerScore) {
//   console.log('You lose.');
// } else if(playerScore === dealerScore) {
//   console.log("Push.");
// } else {
//   console.log("No one planned for this");
// }
});

var hitButton = document.querySelector('.hit');
hitButton.addEventListener('click', function(){
    hit(playerOne);
    var newDiv = document.createElement('div');
    newDiv.classList.add('card');
    document.body.appendChild(newDiv);
    console.log('hit');
    playerScore = getValues(playerOne);
    console.log(playerScore);
    if(playerScore > 21) {
      console.log("You Busted");

    }
});

var stayButton = document.querySelector('#stay');
stayButton.addEventListener('click', function (){
  //  Dealer plays.
  // if score >= 17 stay
  // else, while score < 17 => hit
  console.log('dealers turn');

});
