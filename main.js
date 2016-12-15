// console.log('hi');

var suits = ["Club", "Heart", "Diamond", "Spade"];
var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];

var deck = [];

var playerOne = [];
var dealer = [];

var playerScore = 0;

var newSpan = document.querySelector('#playerscore');
  newSpan.textContent = playerScore;



// make deck
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
  // take two things out
  hit();
  hit();
  var card = deck.pop()
  dealer.push(card);
  var playerScore = getValues(playerOne);
  console.log("player score is " + playerScore);
  var dealerScore = getValues(dealer);
  console.log("dealer score is " + dealerScore)
 // if over 21 game over
    if(playerScore === 21) {
      console.log("Blackjack, Wou Win!");
    }
    if(dealerScore === 21){
      console.log("Dealer has 21.");
    }
  // else get another card
}
var hit = function () {
    var card = deck.pop()
    playerOne.push(card);
}
// get dealer score
var getValues = function(cards) {
  var sum = 0;
  for( var i = 0; i < cards.length; i++) {
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
  return sum;
  console.log('working');
}

// conditions for the win
// how to set dealerScore
// if (playerScore > dealerScore) {
//   console.log("You Win!");
// } else if(dealerScore > playerScore) {
//   console.log('You lose.');
// } else if(playerScore === dealerScore) {
//   console.log("Push.");
// } else {
//   console.log("No one planned for this");
// }



var stayButton = document.querySelector('#stay');
stayButton.addEventListener('click', function (){
  //  Dealer plays.
  console.log('dealers turn');
});


var dealButton = document.querySelector('#deal');
dealButton.addEventListener('click', function() {
// newSpan.textContent = getValues(playerOne);

  deal();
  console.log('deal');
  var newDiv = document.createElement('div');
  newDiv.classList.add('card');
  var newDiv = document.createElement('div');
  newDiv.classList.add('card');

  document.body.appendChild(newDiv);
  document.body.appendChild(newDiv);

   playerScore = getValues(playerOne);
    if(playerScore === 21) {
      console.log("You Got 21!");
    }
});

var hitButton = document.querySelector('.hit');
hitButton.addEventListener('click', function(){
    hit();
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
