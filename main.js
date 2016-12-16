console.log('meow');

var playerHand = [];
var playerBoard = [];
var dealerHand = [];
var dealerBoard = [];
var tempPlayCard = null;
var tempDealCard = null;

//deck
var deck = [
            2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
            2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
            2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
            2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
            ];


//console.log(deck);


//shuffle
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


//selecting cards to battle
var battle = function(){
  playerBoard = playerHand.shift();
  dealerBoard = dealerHand.shift();
  console.log('playerBoard: ', playerBoard);
  console.log('dealerBoard: ', dealerBoard);
compare();
}

// console.log(battle);


//compare cards
var compare = function(){
    if (playerBoard === dealerBoard) {
    console.log('War!');
    war();
    compareWar();
  } else if (playerBoard > dealerBoard) {
    console.log('player won this hand');
    playerHand.push(playerBoard, dealerBoard);
  } else {
    console.log('dealer won this hand');
    dealerHand.push(dealerBoard, playerBoard);
  }
};


//war
 function war(){
    //playerBoard + dealerBoard is getting thrown away in the trash
    //will need to add those cards to the other 4 cards
    tempPlayCard = playerBoard;
    tempDealCard = dealerBoard;
    playerBoard = playerHand.splice(0,4);
    console.log("playerHand is " + playerBoard);
    dealerBoard = dealerHand.splice(0,4);
    console.log("dealerHand is " + dealerBoard);

  }


//compare war
function compareWar(){
    if (playerBoard[3] > dealerBoard[3]){
    console.log('player won this war');
    playerHand.push.apply(playerBoard, dealerBoard);
    playerHand.push(tempPlayCard, tempDealCard);
  } else if (dealerBoard[3] > playerBoard[3]) {
    console.log('dealer won this war');
    dealerHand.push.apply(dealerBoard, playerBoard);
    dealerHand.push(tempDealCard, tempPlayCard);
   }
  }

var winner = function(){
  if (playerBoard.length === 52) {
   console.log('player wins the game');
  } else if (dealerBoard.length === 52) {
    console.log('dealer wins the game');
  } else {
    console.log('No Winner');
  }
}

//ACTION: function to add wins/loss of both player and dealer

//Notes: see below
//for loop with .shift ---> insteading of splicing?

// if dealerBoard or playerBoard === 'undefined', game should lose

// start.addEventListener('click', );








