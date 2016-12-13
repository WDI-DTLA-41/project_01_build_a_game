console.log('ha');

// var playerHand = [], //maybe add to array of players
//     dealerHand = [],
var playerHandScore = 0,
    dealerHandScore = 0;

var players = [
  {
    name: 'player',
    cash: 0,
    playerHand: [],
  },
  {
    name: 'dealer',
    cash: 0,
    dealerHand: []
  }

]

function createDeck(){
  //makes decks and stores it in var deck;
}

var deck = [
  {
    value: 6,
    suit: 'clubs',
    face: null,
    isFaceUp: true,
  },
  {
    value: 10,
    suit: 'hearts',
    face: 'king',
    isFaceUp: true,
  },
  {
    value: 2,
    suit: 'diamonds',
    face: 'null',
    isFaceUp: true,
  },
  {
    value: 3,
    suit: 'hearts',
    face: 'null',
    isFaceUp: true,
  },
  {
    value: 9,
    suit: 'spades',
    face: 'null',
    isFaceUp: true,
  },
  {
    value: 8,
    suit: 'spades',
    face: 'null',
    isFaceUp: true,
  }
];

// function deal(player) { //have not solved faceup/facedown
//   //deal first to player faceup
//   var card = deck.shift();

//   playerHand.push(card);
//   //deal dealer facedown
//   dealerHand.push(deck.shift());
//   //deal second to player faceup
//   playerHand.push(deck.shift());
//   //deal dealer faceup
//   dealerHand.push(deck.shift());
// }
// deal();

function hit() {
  return playerHand.push(deck.shift());
}
// hit();
// hit();

// function playerScore() { //pass the playerobject try
//   for (i = 0; i < playerHand.length; i++){
//     playerHandScore = playerHandScore + playerHand[i].value;
//     console.log(playerHandScore);
//   }
// }
// playerScore();


