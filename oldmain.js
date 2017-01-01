
var playerHand = document.querySelector('.playerHand');
var playerBoard = document.querySelector('.playerBoard');
var dealerHand = document.querySelector('.dealerHand');
var dealerBoard = document.querySelector('.dealerBoard');
var playerScore = document.querySelector('.playerScore');
var dealerScore = document.querySelector('.dealerScore');
var startGameBtn = document.querySelector('.start');
var hitBtn = document.querySelector('.hit');
var restartBtn = document.querySelector('.restart');

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
while(--n > 0) {
  j = Math.floor(Math.random() * (n));
  temp = deck[j];
  deck[j] = deck[n];
  deck[n] = temp;
  }
  return deck;
};

/**
* Function deals deck into two stacks, 26 cards for each
* @param {String} deck = 52 cards
* pushes stack of 26 cards to players hand and dealers hand
*/
var deal = function(deck){
  deck = shuffle(deck);
  for (var i = 0; i < deck.length; i++){
    if(i % 2 === 0){
      playerHand.push(deck[i]);
    } else {
      dealerHand.push(deck[i]);
    }
  }
  playerScore.innerHTML = playerHand.length;
  dealerScore.innerHTML = dealerHand.length;
};

/**
* Function initializes 'battle' mode
* player and dealer remove one card from top of their deck
* places card on the board
*/
var battle = function(){
  playerCard = playerHand.shift();
  dealerCard = dealerHand.shift();
  playerBoard.innerHTML = (playerCard);
  //playerScore.innerHTML = 'Win';
  dealerBoard.innerHTML = (dealerCard);
  //dealerScore.innterHTML = 'Lose';
  compare();
  winner();
};



/**
* Function compares value of player and dealer card, highest value wins
*/
var compare = function(){
    if (playerCard === dealerCard) {
    war();
    compareWar();
  } else if (playerCard > dealerCard) {
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
    if (playerCard[3] === dealerCard[3]) {
    war();
    warOnWar();
  } else if (playerCard[3] > dealerCard[3]){
    wPlayer = playerCard.concat(dealerCard);
    playerHand = playerHand.concat(wPlayer);
    playerHand.push(tempPlayCard, tempDealCard);
  } else if (dealerCard[3] > playerCard[3]) {
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
var warOnWar = function(){
    if (playerCard[3] === dealerCard[3]){
    } else if (playerCard[3] > dealerCard[3]){
    wwPlayer = playerCard.concat(dealerCard);
    playerHand = playerHand.concat(wPlayer, wwPlayer);
    } else if (dealerCard[3] > playerCard[3]) {
    wwDealer = dealerCard.concat(playerCard);
    dealerHand = dealerHand.concat(wDealer, wwDealer);
    winner();
    }
   };


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
  restart();
  }
};


/**
* Event Listeners
*/
startGameBtn.addEventListener('click', shuffle);
startGameBtn.addEventListener('click', deal);
hitBtn.addEventListener('click', battle);
restartBtn.addEventListener('click', restart);

