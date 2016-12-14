console.log('ha');

var $startButton = document.querySelector('[name="start"]'),
    $dealButton = document.querySelector('[name="deal"]'),
    $hitButton = document.querySelector('[name="hit"]'),
    $stayButton = document.querySelector('[name="stay"]');

var deck = [],
    shuffledDeck= [];

var value = [2,3,4,5,6,7,8,9,10,10,10,10,11],
    suits = ['diamonds', 'clubs', 'hearts', 'spades'],
    names = ['two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king', 'ace'],
    isFaceUp = [true];

function createDeck() {
  for (var i = 0; i < value.length; i++) {
    for (var j = 0; j < suits.length; j++) {
      newObj = {};
      newObj.suits = suits[j];
      newObj.value = value[i];
      newObj.name = names[i];
      newObj.isFaceUp = isFaceUp[0];
      deck.push(newObj);
    }
  }
}

function shuffleDeck() {
  return shuffledDeck = _.shuffle(deck);
}

var players = [
  {
    name: 'player',
    cash: 0,
    hand: [],
    score: null
  },
  {
    name: 'dealer',
    cash: 0,
    hand: [],
    score: null
  }
]

var currentPlayer = players[0];

function nextTurn() {
  if (currentPlayer && currentPlayer.name === 'player') {
    currentPlayer = players[1];
  } else {
    currentPlayer = players[0];
  }
}

// function dealScore() { //try to pass in player object??
//     currentPlayer.score = currentPlayer.score + currentPlayer.hand[currentPlayer.hand.length-1].value;
//     console.log(capFirstLetter(currentPlayer.name) + ' score:' + ' ' + currentPlayer.score);
//     if (currentPlayer.score > 21) {
//       console.log('Bust, better luck next time...')
//     } //natural blackjack on deal only
//     if (currentPlayer.score === 21) {
//       console.log('Blackjack! ' + capFirstLetter(currentPlayer.name) +  ' wins!');
//       findWinner();
//     }
// }

function dealScore(user) { //experiment passing object through
  user.score = null;
  for (var x = 0; x < user.hand.length; x++) {
    user.score = user.score + user.hand[x].value;
  }
  console.log(capFirstLetter(user.name) + ' score:' + ' ' + user.score);
}

function nonDealScore() {
  currentPlayer.score = currentPlayer.score + currentPlayer.hand[currentPlayer.hand.length-1].value;
    console.log(capFirstLetter(currentPlayer.name) + ' ' + currentPlayer.score);
    if (currentPlayer.score > 21) {
      console.log('Bust, better luck next time...');
      findWinner();
      for (var i = 0; i < (players.length); i++) {
        currentPlayer.score = null;
        console.log(currentPlayer.score)
        nextTurn();
      }
    }
}

function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//GAMEPLAY

function startGame() {
  createDeck();
  console.log('Game started... good luck.')
}

$startButton.addEventListener('click', startGame);

function dealCards() { //try to pass in a player object??
  shuffleDeck();
  for (var i = 0; i < (players.length * 2); i++) {
    currentPlayer.hand.push(shuffledDeck.shift());
    dealScore(currentPlayer);
    nextTurn();
  }
  console.log(capFirstLetter(currentPlayer.name) + '\'s' + ' turn.');
  $dealButton.removeEventListener('click', dealCards);
}

$dealButton.addEventListener('click', dealCards);

function hit() {
  var card = shuffledDeck.shift();
  currentPlayer.hand.push(card);
  nonDealScore();
}

$hitButton.addEventListener('click', hit);

function stay() {
  //end player turn
  $stayButton.removeEventListener('click', stay);
  nextTurn();
  console.log(capFirstLetter(currentPlayer.name) + '\'s' + ' turn.');
  if (currentPlayer && currentPlayer.name === 'dealer') {
    dealerGamePlay();
    findWinner();
  }
}

$stayButton.addEventListener('click', stay);

function findWinner() {
  if ( currentPlayer.score === 21 && players[players.length - 1].score != 21 ) {
    console.log('Blackjack! You win!')
    $dealButton.addEventListener('click', dealCards);
    startNextRound();
    } if ( players[0].score > players[players.length - 1].score ) {
        console.log('')
        startNextRound();
        $dealButton.addEventListener('click', dealCards);
      }
}

function startNextRound() { //1 deck logic only
  shuffledDeck= [];
}

function startingCash(user) {
  user.cash = 100;
}

//Dealer AI

function dealerGamePlay() {
  while (currentPlayer.score < 17) {
    hit();
  }
}

