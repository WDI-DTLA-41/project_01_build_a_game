
var playerHand = document.querySelector('.playerHand');
var playerBoard = document.querySelector('.playerBoard');
var dealerHand = document.querySelector('.dealerHand');
var dealerBoard = document.querySelector('.dealerBoard');
var playerScore = document.querySelector('.playerScore');
var dealerScore = document.querySelector('.dealerScore');
var startGameBtn = document.querySelector('.start');
var hitBtn = document.querySelector('.hit');
var restartBtn = document.querySelector('.restart');
var playerWarCard = document.querySelector('.playerWarCard');
var dealerWarCard = document.querySelector('.dealerWarCard');

var playerBoard;
var playerHand = [];
var playerCard = [];
var dealerBoard;
var dealerHand = [];
var dealerCard = [];
var deck = [];
var tempPlayCard = null;
var tempDealCard = null;
// war variables
var wPlayer = [];
var wDealer = [];
// war-on-war variables
var wwPlayer = [];
var wwDealer = [];

var cardValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
var cardName = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
var cardSuit = ["spades", "hearts", "clubs", "diamonds"];
var deck;
var card;
var cardBack = null;

/**
* Function creates a deck and card object with card's respective
* name, suit and value
*/
var createDeck = function(){
  // loops spades - diamonds
  deck = [];
  for (var i = 0; i < cardSuit.length; i++) {
  // loops through 2 - Ace
  for (var j = 0; j < cardName.length; j++) {
  var card = {
      name: cardName[j],
      value: cardValue[j],
      suit: cardSuit[i],
    };
      deck.push(card);
    }
  }
  shuffle(deck);
  split(deck);
  deal(deck);
  startGameBtn.disabled = true;
};

// createDeck();

/**
* Function shuffles deck of cards by moving around 1 random card in the deck
* @param {String} deck = 52 cards, 11='J', 12='Q', 13='k', 14='A'
* j = a remaining element
* temp = temporary holder
* this function shuffles the deck parameter
* deck is returned
*/
var shuffle = function(deck){
 var n = deck.length, j, temp;
  while(--n > 0) {
  j = Math.floor(Math.random() * (n));
  temp = deck[j];
  deck[j] = deck[n];
  deck[n] = temp;
  }
  return deck;
};

/**
* Function splits deck into two stacks, pushes 26 cards to player and dealer
* @param {String}
* pushes stack of 26 cards to players hand and dealers hand
*/
var split = function(deck){
  deck = shuffle(deck);
   for (var i = 0; i < deck.length; i++){
    if(i % 2 === 0){
      playerHand.push(deck[i]);
    } else {
      dealerHand.push(deck[i]);
    }
  }
};

/**
* Function takes one card from both the player and dealers hand
* puts card on the board
* creates img element for current card on board
*/
var deal = function(deck){
  //clears board if cards on board
  playerBoard.innerHTML = "";
  dealerBoard.innerHTML = "";

  //removes first card from player/dealer hand
  playerCard = playerHand.shift();
  dealerCard = dealerHand.shift();
  imgPlayerCard(playerCard);
  imgDealerCard(dealerCard);
  compare();
  winner();
};


/**
* Function displays card images to HTML
*/
var imgPlayerCard = function(user){
  var img = document.createElement('img');
  img.src = "css/playing_cards/" + user.name + "_of_" + user.suit + ".png";
  playerBoard.appendChild(img);
};

var imgDealerCard = function(user){
  var img2 = document.createElement('img');
  img2.src = "css/playing_cards/" + user.name + "_of_" + user.suit + ".png";
  dealerBoard.appendChild(img2);
};

/**
* Function compares value of player and dealer card, highest value wins
*/
var compare = function(user){
    if (playerCard.value === dealerCard.value) {
    war();
    compareWar();
  } else if (playerCard.value > dealerCard.value) {
    playerHand.push(playerCard, dealerCard);
  } else {
    dealerHand.push(dealerCard, playerCard);
  }
  playerScore.innerHTML = playerHand.length;
  dealerScore.innerHTML = dealerHand.length;
};


/**
* Function initializes 'war mode'
* player and dealer draws top four cards from their hand and sets it on the board
*/
 function war(){
    tempPlayCard = playerCard;
    tempDealCard = dealerCard;
    playerCard = playerHand.splice(0,4);
    dealerCard = dealerHand.splice(0,4);
  }


/**
* Function compares card values during War
*/
function compareWar(){
    if (playerCard[3].value === dealerCard[3].value) {
    war();
    // warOnWar();
  } else if (playerCard[3].value > dealerCard[3].value){
    wPlayer = playerCard.concat(dealerCard);
    playerHand = playerHand.concat(wPlayer);
    playerHand.push(tempPlayCard, tempDealCard);
  } else if (dealerCard[3].value > playerCard[3].value) {
    wDealer = dealerCard.concat(playerCard);
    dealerHand = dealerHand.concat(wDealer);
    dealerHand.push(tempDealCard, tempPlayCard);
    winner();
    }
   }


/**
* Function initializes 'war-on-war' mode
* When value of fourth card is equal during 'war' mode
* player and dealer draws four more cards
*/
// var warOnWar = function(){
//     if (playerCard[3].value === dealerCard[3].value){
//     } else if (playerCard[3].value > dealerCard[3].value){
//     wwPlayer = playerCard.concat(dealerCard);
//     playerHand = playerHand.concat(wPlayer, wwPlayer);
//     } else if (dealerCard[3].value > playerCard[3].value) {
//     wwDealer = dealerCard.concat(playerCard);
//     dealerHand = dealerHand.concat(wDealer, wwDealer);
//     winner();
//     }
//    };


/**
* Function restarts game
* sets player card and dealer card back to 0
*/
var restart = function () {
  deck = playerHand.concat(dealerHand);
  deck.textContent = deck;
  playerHand = [];
  playerHand.textContent = " ";
  playerCard.textContent = " ";
  dealerHand = [];
  dealerHand.textContent = " ";
  dealerCard.textContent = " ";
  playerScore.innerHTML = playerHand.length;
  dealerScore.innerHTML = dealerHand.length;
  playerBoard.innerHTML = "";
  dealerBoard.innerHTML = "";
  startGameBtn.disabled = false;
};


/**
* Function checks winner
*/
var winner = function(){
  if (playerHand.length < 1){
  playerScore.innerHTML = ("Try Again");
  dealerScore.innerHTML = ("Winner!");
  } else if (dealerHand.length < 1) {
  playerScore.innerHTML = ("Winner!");
  dealerScore.innerHTML = ("Try Again");
  playerBoard.innerHTML = "";
  dealerBoard.innerHTML = "";
  restart();
  }
};


startGameBtn.addEventListener('click', createDeck);
// startGameBtn.addEventListener('click', shuffle(deck));
// startGameBtn.addEventListener('click', split(deck));
hitBtn.addEventListener('click', deal);
restartBtn.addEventListener('click', restart);



