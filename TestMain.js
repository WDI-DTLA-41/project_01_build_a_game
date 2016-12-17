
var playerHand = [];
var playerCard = [];
var dealerHand = [];
var dealerCard = [];
var playerWins = [];
var dealerWins = [];
var tempPlayCard = null;
var tempDealCard = null;


var deck = [
            2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
            2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
            2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
            2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
            ];


//console.log(deck);


/**
* Shuffles deck of cards - moves around 1 random card in the deck
* @param {String} deck - array of 52 cards
* while there remains elements to shuffle
* j = pick a remaining element
* temp = temporary holder
* swap it with the current element
* return deck
*/
var shuffle = function(deck){
  var n = deck.length, j, temp;
  // console.log(n);
while(--n > 0) {
  j = Math.floor(Math.random() * (n));
  temp = deck[j];
  deck[j] = deck[n];
  deck[n] = temp;
  }
  console.log('shuffed deck: ', deck);
  return deck;
}
// deck = shuffle(deck);
//console.log(deck);

//deal cards
var deal = function(deck){
  for (var i = 0; i < deck.length; i++){
    if(i % 2 === 0){
      playerHand.push(deck[i]);
    } else {
      dealerHand.push(deck[i]);
    }
  }
  console.log('playerHand: ', playerHand);
  console.log('dealerHand: ', dealerHand);
}
// console.log(playerHand);
// console.log(dealerHand);


//battle
var battle = function(){
  playerCard = playerHand.shift();
  dealerCard = dealerHand.shift();
  console.log('playerCard: ', playerCard);
  console.log('dealerCard: ', dealerCard);
compare();
winner();
}

// console.log(battle);


//compare cards
var compare = function(){
    if (playerCard === dealerCard) {
    console.log('War!');
    war();
    compareWar();
  } else if (playerCard > dealerCard) {
    console.log('player won this hand');
    playerWins.push(playerCard, dealerCard);
  } else {
    console.log('dealer won this hand');
    dealerWins.push(dealerCard, playerCard);

  };
}

//war!
 function war(){
    tempPlayCard = playerCard;
    tempDealCard = dealerCard;
    playerCard = playerHand.splice(0,4);
    console.log("playerCards are " + playerCard);
    dealerCard = dealerHand.splice(0,4);
    console.log("dealerCards are " + dealerCard);
  }

//when player or dealer wins another war!onWar!
// compare war
function compareWar(){
    if (playerCard[3] === dealerCard[3]) {
    console.log('War! on War!');
    war();
    warOnWar();
  } else if (playerCard[3] > dealerCard[3]){
    console.log('player won this war');
    var concatPWins = playerCard.concat(dealerCard);
    console.log (concatPWins);
    playerWins = playerWins.concat(concatPWins);
    playerWins.push(tempPlayCard, tempDealCard);
    console.log(playerWins);
  } else if (dealerCard[3] > playerCard[3]) {
    console.log('dealer won this war');
    var concatDWins = dealerCard.concat(playerCard);
    console.log(concatDWins);
    dealerWins = dealerWins.concat(concatDWins);
    dealerWins.push(tempDealCard, tempPlayCard);
    console.log(dealerWins);
    }
   }

var warOnWar = function(){
    if (playerCard[3] === dealerCard[3]){
    console.log('War! on War!');
    } else if (playerCard[3] > dealerCard[3]){
    var newConcatPWins = playerCard.concat(dealerCard);
    console.log ("War! on War!" + newConcatPWins);
    playerWins = playerWins.concat(newConcatPWins);
    console.log(playerWins);
    } else if (dealerCard[3] > playerCard[3]) {
    console.log('dealer won this war');
    var newConcatDWins = dealerCard.concat(playerCard);
    console.log("War! on War!" + newConcatDWins);
    dealerWins = dealerWins.concat(newConcatDWins);
    console.log(dealerWins);
    }
   }




//   var shuffleWins = function() {
//     if (playerHand.length === 0) {
//     playerHand = playerHand.concat(playerWins);
//     shuffle();
//     } else if (dealerHand.length === 0) {
//     dealerHand = dealerHand.concat(dealerWins);
//     shuffle();
//     }
// }


var isEmpty = function() {
  if (playerHand.length < 1) {

   console.log('Dealer wins the game!');
  } else if (dealerHand.length < 1) {
    console.log('Player wins the game!');
  }
}

//ACTION: function to add wins/loss of both player and dealer

//Notes: see below
//for loop with .shift ---> insteading of splicing?

// if dealerBoard or playerBoard === 'undefined', game should lose

// start.addEventListener('click', );



