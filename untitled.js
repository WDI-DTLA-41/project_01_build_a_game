console.log('hi');
// card suits
var suits = ["Club", "Heart", "Diamond", "Spade"];
// card values
var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
// deck of shuffled cards
var deck = [];
// the empty array that will contains playerOnes cards
var playerOne = [];
// Empty array that will conadecktain dealers cards
var dealer = [];


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
// makeDeck function is called to make a deck of cards
makeDeck();


//shuffle deck
// this function randomizes the order of my deck of cards
var shuffleDeck = function() {
  // deck array = a loDash shuffled deck
  deck = _.shuffle(deck);
  return  deck
}
shuffleDeck();

var deal = function(){
  // take two things out - to playerOne
  // break down dealing into 2 instances of Hitting
  hit(playerOne);
  hit(playerOne);
  // gives dealer one card
  var card = deck.pop()
  hit(dealer);
}


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
  console.log(sum += val);
}
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

var checkScores = function(player) {

};


// gives playerOne one more card
var hit = function (player) {
  // take card from deck
    var card = deck.pop()
    // give card to playerOnes hand
    //  flag player here
    player.push(card);
}



