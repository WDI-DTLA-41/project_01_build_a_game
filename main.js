// console.log('hi');



var suits = ["Club", "Heart", "Diamond", "Spade"];
var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];

var deck = [];

var playerOne = [];
var dealer = [];

// make deck
// TODO rename to makeDeck
var makeCard = function() {
  for(var i = 0; i < suits.length; i++) {
   var suit = suits[i];
    for( var j = 0; j < values.length; j++) {
      var val = values[j]

      var card = {
            suit: suit,
            value: val
          };
      deck.push(card);
    }
  }
}
makeCard();


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
  console.log(playerScore);
  var dealerScore = getValues(dealer);
  console.log(dealerScore)

    if(playerScore === 21) {
      console.log("Blackjack, Wou Win!");
    }
    if(dealerScore === 21){
      console.log("Dealer has 21.");
    }


  // if over 21 game over
  // else get another card
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
  console.log("sum = " + sum);
}

var hit = function () {
    var card = deck.pop()
    playerOne.push(card);
}


var dealButton = document.querySelector('#deal');
dealButton.addEventListener('click', function() {
  deal();
  // console.log('deal');
  var playerScore = getValues(playerOne);
    if(playerScore === 21) {
      console.log("You Got 21!");
    }
});

var hitButton = document.querySelector('.hit');
hitButton.addEventListener('click', function(){
    hit();
    console.log('hit');
    var playerScore = getValues(playerOne);
    console.log(playerScore);
    if(playerScore > 21) {
      console.log("You Busted");
    }
});
