console.log('ha');

var $startButton = document.querySelector('[name="start"]');
var $dealButton = document.querySelector('[name="deal"]');
var $hitButton = document.querySelector('[name="hit"]');

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
    score: 0
  },
  {
    name: 'dealer',
    cash: 0,
    hand: [],
    score: 0
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

function score() {
  // for (var i = 0; i < currentPlayer.hand.length; i++){
    currentPlayer.score = currentPlayer.score + currentPlayer.hand[currentPlayer.hand.length-1].value;
    console.log(currentPlayer.score);
  // }

}

//GAMEPLAY

function startGame() {
  createDeck();
  shuffleDeck();
}

$startButton.addEventListener('click', startGame);

function dealCards() {
  for (var i = 0; i < (players.length * 2); i++) {
    currentPlayer.hand.push(shuffledDeck.shift());
    score();
    nextTurn();
  }
}

$dealButton.addEventListener('click', dealCards);

function hit() {
  var card = shuffledDeck.shift();
  currentPlayer.hand.push(card);
  score();
}

$hitButton.addEventListener('click', hit);


