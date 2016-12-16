console.log('aloha, dakotah!')

var board = document.querySelector('.board');
var battleBtn = document.querySelector('.battle');
var dealBtn = document.querySelector('.deal');
var shuffleBtn = document.querySelector('.shuffle');
var resetBtn = document.querySelector('.reset');
var $inPlayCards = document.querySelectorAll('.card');
var $inPlayA = document.querySelector('#a');
var $inPlayB = document.querySelector('#b');



// var handleClick = function (evt) {
  // console.log(evt.target);
  // $inPlayA.innerHTML = "<img src='css/cards/ace of spades.png'>"
  // $inPlayB.innerHTML = "<img src='css/cards/10 of spades.png'>"

// }



// values: 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
// suits: c, d, h, s



// name = ["c", "d", "h", "s"];
// value = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k", "a"];

var cardRank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
var cardName = [2, 3, 4, 5, 6, 7, 8, 9, 10, "j", "q", "k", "a"];
var cardSuit = ["c", "d", "h", "s"];
var deck = [];
var card;

var createDeck = function(){
  for (var i = 0; i < cardRank.length; i++) {
  for (var j = 0; j < cardSuit.length; j++) {
    card = {
      value: cardRank[i],
      suit: cardSuit[j]
    };
      deck.push(card);
    }
  }
}
createDeck();


// ==================================================================
// SHUFFLE CARDS AND DEAL OUT TO PLAYERS
// ==================================================================


// var deck = [
//             2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
//             2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
//             2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
//             2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
// ];

// console.log(deck);

// // shuffle the deck
// var shuffle = function (deck) {
//   var currentIndex = deck.length, temporaryValue, randomIndex;
//   // while there are still cards prsent in currentDeck
//   while (0 !== currentIndex) {
//     // pick a remaining card
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
//     // swap it with the current card
//     temporaryValue = deck[currentIndex];
//     deck[currentIndex] = deck[randomIndex];
//     deck[randomIndex] = temporaryValue;
//   }
//   return deck;
// }

// deck = shuffle(deck)
// console.log(deck);

// _.shuffle(deck);

var shuffle = function(deck){
  var n = deck.length, j, temp;
  // console.log(n);
while(--n > 0) {
  j = Math.floor(Math.random() * (n));
  temp = deck[j];
  deck[j] = deck[n];
  deck[n] = temp;
  }
  console.log('Shuffled deck: ', deck);
  return deck;
 }

//deal the cards out
var inHandA = [];
var inHandB = [];

var deal = function () {
  for (var i = 0; i < deck.length; i ++) {
    if (i % 2 === 0) {
      inHandA.push(deck[i]);
    } else {
      inHandB.push(deck[i]);
    }
  }
  console.log("Beginning inHandA: " + inHandA);
  console.log("Beginning inHandB: " + inHandB);
}


var inPlayA = [];
var inPlayB = [];
inWarA = inPlayA[inPlayA.length - 1]
inWarB = inPlayB[inPlayB.length - 1]




// ==================================================================
// CREATE WINNING CONIDITION / FUNCTION TO RESET THE DECK
// ==================================================================

//
var winner = function () {

  if (inHandA.length < 1) {
    console.log("player B conquers the world!")
    alert("player B conquers the world!")
  } else if (inHandB.length < 1) {
    console.log("player A conquers the world!")
    alert("player A conquers the world!")
  }
}

var reset = function () {
  inHandA = [];
  inHandB = [];
  console.log(inHandA);
  console.log(inHandB);
  console.log(deck);
}

// ==================================================================
// COMPARE VALUES OF CARDS IN PLAY
// ==================================================================


var compare = function () {
  if (inPlayA[inPlayA.length - 1] === inPlayB[inPlayB.length - 1]) {
    console.log("WAR!");
    war();
  } else if (inPlayA[inPlayA.length - 1] > inPlayB[inPlayB.length - 1] === true){
    // a acquires b's card
    inHandA.push(inPlayB.shift());
    // used card and new card are pushed to
    // the back of a's card-stack array
    inHandA.push(inPlayA.shift());
    console.log("Player A wins the battle!")
  } else {
    // b acquires a's card
    inHandB.push(inPlayA.shift());
    // used card and new card are pushed to
    // the back of b's card-stack array
    inHandB.push(inPlayB.shift());
    console.log("Player B wins the battle!")
  }

  console.log("NEW inHandA: " + inHandA);
  console.log("NEW inHandB: " + inHandB);
};


// ==================================================================
// CREATE A WAR FUNCTION
// ==================================================================


var compareWar = function () {
  inWarA = inPlayA[inPlayA.length - 1]
  inWarB = inPlayB[inPlayB.length - 1]
  if (inWarA === inWarB) {
    war();
   } else if (inWarA > inWarB === true) {
    collectCardsA();
   } else {
    collectCardsB();
   }
}

var war = function () {
  console.log("War!");
  for (var i = 0; i < 4; i ++) {
    inPlayA.push(inHandA.shift());
    inPlayB.push(inHandB.shift());
  }

  var inWarA = inPlayA[inPlayA.length - 1]
  var inWarB = inPlayB[inPlayB.length - 1]

  // player A's status
  console.log("inHandA: " + inHandA);
  console.log("inPlayA: " + inPlayA);
  console.log("inWarA: " + inWarA);

  // player B's status
  console.log("inHandB: " + inHandB);
  console.log("inPlayB: " + inPlayB);
  console.log("inWarB: " + inWarB);

  compareWar();
}



// ==================================================================
// WHEN PLAYER WINS A WAR, COLLECT ALL CARDS IN PLAY
// ==================================================================
var collectCardsA = function () {
  for ( var i = inPlayB.length - 1; i >= 0; i --){
    inHandA.push(inPlayB.shift());
  }
  for ( var i = inPlayA.length - 1; i >= 0; i --){
    inHandA.push(inPlayA.shift());
  }

  console.log("Player A wins the war!");
  // console.log("NEW inHandA: " + inHandA);
  // console.log("NEW inHandB: " + inHandB);
}

var collectCardsB = function () {
  for ( var i = inPlayA.length - 1; i >= 0; i --){
    inHandB.push(inPlayA.shift());
  }
  for ( var i = inPlayB.length - 1; i >= 0; i --){
    inHandB.push(inPlayB.shift());
  }
  console.log("Player B wins the war!");
  // console.log("NEW inHandA: " + inHandA);
  // console.log("NEW inHandB: " + inHandB);
}


// ==================================================================
// CREATE A BATTLE FUNCTION
// ==================================================================
// card values are compared. player with higher value
// collects both cards in play.
// if both cards are equal, the next four cards from
// each player's stack are pushed into their inPlay array.
// the last card pushed inPlay then enters

// pushes a card in play from each player's card stack


var battle = function () {

  inPlayA.push(inHandA.shift());
  console.log("inHandA: " + inHandA);
  console.log("inPlayA: " + inPlayA);

  inPlayB.push(inHandB.shift());
  console.log("inHandB: " + inHandB);
  console.log("inPlayB: " + inPlayB);

  // compare();
  // winner();
}




shuffleBtn.addEventListener('click', shuffle(deck))
dealBtn.addEventListener('click', deal)
battleBtn.addEventListener('click', battle)
// resetBtn.addEventListener('click', reset)


