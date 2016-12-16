console.log('meow');

var playerHand = [];
var playerBoard = [];
var dealerHand = [];
var dealerBoard = [];

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
}
//battle()
// console.log(battle);


//compare cards
var compare = function(){
  if (playerBoard > dealerBoard) {
    console.log('player won this hand');
    playerHand.push(playerBoard, dealerBoard);
  } else if (dealerBoard > playerBoard) {
    console.log('dealer won this hand');
    dealerHand.push(dealerBoard, playerBoard);
  } else {
    // war
    war()
  }
}

//war
var war = function(){
  if (playerBoard === dealerBoard){
    console.log('War!');
  playerHand.splice(0, 3);
  dealerHand.splice(0,3);
  }

  //using splice to take four cards
  //compare the last element of the array
}

// if dealerBoard or playerBoard === 'undefined', game should lose

// start.addEventListener('click', );








