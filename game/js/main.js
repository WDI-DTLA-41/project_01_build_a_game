console.log('ha');

var playerHand = [],
    dealerHand = [],
    playerHandScore = 0,
    dealerHandScore = 0;

var deck = [
  {
    value: 6,
    suit: 'Clubs'
  },
  {
    value: 5,
    suit: 'Hearts'
  },
  {
    value: 2,
    suit: 'Diamonds'
  },
  {
    value: 8,
    suit: 'Spades'
  }
];




function createDeck(){

}

function hit(){
  return playerHand.push(deck.shift());
}
hit();
hit();

function playerScore(){
  for (i = 0; i < playerHand.length; i++){
    playerHandScore = playerHandScore + playerHand[i].value;
    console.log(playerHandScore);
  }
}
playerScore();


