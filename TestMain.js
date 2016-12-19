var playerHand = document.querySelector('.playerHand');
var playerBoard = document.querySelector('.playerBoard');
var dealerHand = document.querySelector('.dealerHand');
var dealerBoard = document.querySelector('.dealerBoard');
var playerScore = document.querySelector('.playerScore');
var dealerScore = document.querySelector('.dealerScore');

var playerBoard;
var playerHand = [];
var playerCard = [];
var dealerBoard;
var dealerHand = [];
var dealerCard = [];
var deck = [];
var tempPlayCard = null;
var tempDealCard = null
// war variables
var wPlayer = [];
var wDealer = [];
// war-on-war variables
var wwPlayer = [];
var wwDealer = [];



//console.log(deck);


/**
* Function shuffles deck of cards by moving around 1 random card in the deck
* @param {String} deck = 52 cards, 11='J', 12='Q', 13='k', 14='A'
* j = a remaining element
* temp = temporary holder
* this function shuffles the deck parameter
* deck is returned
*/
var shuffle = function(deck){
  deck = [
            2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
            2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
            2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
            2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
          ];
  var n = deck.length, j, temp;
  // console.log(n);
while(--n > 0) {
  j = Math.floor(Math.random() * (n));
  temp = deck[j];
  deck[j] = deck[n];
  deck[n] = temp;
  }
  return deck;
}


/**
* Function deals deck into two stacks, 26 cards for each
* @param {String} deck = 52 cards
* pushes stack of 26 cards to players hand and dealers hand
*/
var deal = function(deck){
  deck = shuffle(deck)
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


var battle = function(){
  playerCard = playerHand.shift();
  dealerCard = dealerHand.shift();
  playerBoard.innerHTML = playerCard;
  //playerScore.innerHTML = 'Win';
  dealerBoard.innerHTML = dealerCard;
  //dealerScore.innterHTML = 'Lose';
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
    playerHand.push(playerCard, dealerCard);
  } else {
    console.log('dealer won this hand');
    dealerHand.push(dealerCard, playerCard);
  }
}

/**
* Function initializes 'war mode'
* player and dealer draws top four cards from their hand and sets it on the board
*/

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
    //creating a variable for war-on-war
    wPlayer = playerCard.concat(dealerCard);
    playerHand = playerHand.concat(wPlayer);
    //console.log(wPlayer);
    // playerHand = playerHand.concat(playerCard, dealerCard);
    playerHand.push(tempPlayCard, tempDealCard);
    //playerScore.innerHTML = 'Win'
    //console.log('Player holds: ' + playerHand);
  } else if (dealerCard[3] > playerCard[3]) {
    console.log('dealer won this war');
    wDealer = dealerCard.concat(playerCard);
    dealerHand = dealerHand.concat(wDealer);
    //console.log(wDealer);
    //creating new var for war-on-war
    //dealerHand = dealerHand.concat(dealerCard, playerCard);
    dealerHand.push(tempDealCard, tempPlayCard);
    //dealerScore.innerHTML = 'Win';
    //console.log('Dealer holds: ' + dealerHand);
    winner();
    }
   }

var warOnWar = function(){
    if (playerCard[3] === dealerCard[3]){
    console.log('War! on War!');
    } else if (playerCard[3] > dealerCard[3]){
    wwPlayer = playerCard.concat(dealerCard);
    console.log ("War! on War!" + wwPlayer);
    playerHand = playerHand.concat(wPlayer, wwPlayer);
    console.log(playerHand);
    } else if (dealerCard[3] > playerCard[3]) {
    console.log('dealer won this war');
    wwDealer = dealerCard.concat(playerCard);
    console.log("War! on War!" + wwDealer);
    dealerHand = dealerHand.concat(wDealer, wwDealer);
    console.log(dealerHand);
    winner();
    }
   }


var winner = function(){
  if (playerHand.length < 1){
    console.log('Dealer wins the game!');
  } else if (dealerHand.length < 1) {
    console.log('Player wins the game!');
  }
}




var startGameBtn = document.querySelector('.start');
var hitBtn = document.querySelector('.hit');

startGameBtn.addEventListener('click', shuffle);
startGameBtn.addEventListener('click', deal);
hitBtn.addEventListener('click', battle);



//stacks cards
// function stack_cards(margin){
//   var left = 0;
//   var step = margin;
//   var i = 0;
//   $('.card').each(function(){
//     $(this).css({'z-index' : i});
//     $(this).css({'margin-left':left+'px'});
//     $(this).css({'margin-top':0+'px'});
//     left = left + step;
//     i++;
//   });
// }



//ACTION: function to add wins/loss of both player and dealer

//Notes: see below
//for loop with .shift ---> insteading of splicing?

// if dealerBoard or playerBoard === 'undefined', game should lose

// start.addEventListener('click', );



