console.log('ha');

var $startButton = document.querySelector('[name="start"]'),
    $dealButton = document.querySelector('[name="deal"]'),
    $hitButton = document.querySelector('[name="hit"]'),
    $stayButton = document.querySelector('[name="stay"]');

var deck = [],
    shuffledDeck= [];

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

var currentPlayer = players[0];

function nextTurn() {
  if (currentPlayer && currentPlayer.name === 'player') {
    currentPlayer = players[1];
  } else {
    currentPlayer = players[0];
  }
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
    console.log(capFirstLetter(currentPlayer.name) + ' drew a ' +
      currentPlayer.hand[currentPlayer.hand.length-1].value + ' of ' + capFirstLetter(currentPlayer.hand[currentPlayer.hand.length-1].suits));
    findScore(currentPlayer);
    nextTurn();
  }
  console.log(capFirstLetter(currentPlayer.name) + '\'s' + ' turn.');
  $dealButton.removeEventListener('click', dealCards);
  onDealWinner();
}

$dealButton.addEventListener('click', dealCards);

function hit() {
  var card = shuffledDeck.shift();
  currentPlayer.hand.push(card);
  console.log(capFirstLetter(currentPlayer.name) + ' drew a ' +
    currentPlayer.hand[currentPlayer.hand.length-1].value + ' of ' + capFirstLetter(currentPlayer.hand[currentPlayer.hand.length-1].suits));
  findScore(currentPlayer);
  testBust();
}

$hitButton.addEventListener('click', hit);

function stay() {
  //end player turn
  $stayButton.removeEventListener('click', stay);
  nextTurn();
  console.log(capFirstLetter(currentPlayer.name) + '\'s' + ' turn.');
  if (currentPlayer && currentPlayer.name === 'dealer') {
    dealerGamePlay();
    testBust();
    findWinner();
  }
}

$stayButton.addEventListener('click', stay);

function startNextRound() { //1 deck logic only
  currentPlayer = players[0];
  shuffledDeck= [];
  $stayButton.addEventListener('click', stay);
  for (var x = 0; x < players.length; x++) {
    players[x].hand = [];
  }
}

//Betting

function startingCash(user) {
  user.cash = 1000;
}

//Dealer AI

function dealerGamePlay() {
  while (currentPlayer.score < 17) {
    hit();
  }
}

//Scoring

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

function findScore(user) { //experiment passing object through
  user.score = null;
  for (var x = 0; x < user.hand.length; x++) {
    user.score = user.score + user.hand[x].value;
  }
  console.log(capFirstLetter(user.name) + ' score:' + ' ' + user.score);
}

//Winner

function onDealWinner() {
  if (players[0].score === 21 && players[players.length - 1].score != 21) {
    console.log('Blackjack! Player Wins!');
    startNextRound();
    $dealButton.addEventListener('click', dealCards);
  } if (players[players.length - 1].score === 21 && players[0].score != 21) {
      console.log('Sorry, dealer wins. Better luck next time...');
      startNextRound();
      $dealButton.addEventListener('click', dealCards);
    } else {
        return true;
    }
}

function testBust() {
  if (currentPlayer.name === 'player') {
    if (currentPlayer.score > 21) {
      console.log('BUST, dealer wins. Better luck next time...');
      startNextRound();
      $dealButton.addEventListener('click', dealCards);
    }
  } else {
      if (currentPlayer.score > 21) {
        console.log('Dealer BUST! You win!');
        startNextRound();
        $dealButton.addEventListener('click', dealCards);
      } else {
        return false;
      }
    }
}

function findWinner() {  //how to notate compare against "other" player
  if (players[0].score === players[players.length - 1].score) {
    console.log('Push... nobody wins.')
    startNextRound();
    $dealButton.addEventListener('click', dealCards);
    return false;
  } if (currentPlayer.score > players[0].score) {
        console.log('Dealer wins. Better luck next time...')
        startNextRound();
        $dealButton.addEventListener('click', dealCards);
    } else {
      console.log('You win!!!');
      startNextRound();
      $dealButton.addEventListener('click', dealCards);
    }
}

//Visual Funcs

function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
