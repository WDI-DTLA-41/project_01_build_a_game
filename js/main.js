console.log('aloha, dakotah!')

// ==================================================================
// SHUFFLE CARDS AND DEAL OUT TO PLAYERS
// ==================================================================


var deck = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
            2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
            2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
            2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
];

// shuffle the deck
var shuffle = function (deck) {
  var currentIndex = deck.length, temporaryValue, randomIndex;
  // while there are still cards prsent in currentDeck
  while (0 !== currentIndex) {
    // pick a remaining card
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // swap it with the current card
    temporaryValue = deck[currentIndex];
    deck[currentIndex] = deck[randomIndex];
    deck[randomIndex] = temporaryValue;
  }
  return deck;
}

deck = shuffle(deck)
console.log(deck);

//deal the cards out
var inHandA = [];
var inHandB = [];

for (var i = 0; i < deck.length; i ++) {
  if (i % 2 === 0) {
    inHandA.push(deck[i]);
  } else {
    inHandB.push(deck[i]);
  }
}

var inBattleA = [];
var inBattleB = [];

console.log("Beginning inHandA: " + inHandA);
console.log("Beginning inHandB: " + inHandB);

// save variable for war situation later
var battleCard = inBattleA.concat(inBattleB);


// ==================================================================
// COMPARE VALUES OF CARDS IN PLAY
// ==================================================================


var compare = function () {
  if (inBattleA[0] === inBattleB[0]) {
    war();
    // compareWar();
  } else if (inBattleA[0] > inBattleB[0] === true){
    // a acquires b's card
    inHandA.push(inBattleB.shift());
    // used card and new card are pushed to
    // the back of a's card-stack array
    inHandA.push(inBattleA.shift());
    console.log("Player A wins!")
  } else {
    // b acquires a's card
    inHandB.push(inBattleA.shift());
    // used card and new card are pushed to
    // the back of b's card-stack array
    inHandB.push(inBattleB.shift());
    console.log("Player B wins!")
  }

  console.log("NEW inHandA: " + inHandA);
  console.log("NEW inHandB: " + inHandB);
};


// ==================================================================
// CREATE A WAR FUNCTION
// ==================================================================

// var compareWar = function () {
//   if (inBattleA[4] !== inBattleB[4]) {
//    if (inBattleA[4] > inBattleB[4] === true) {
//     collectCardsA();
//   } else {
//     collectCardsB();
//   }
// }

var war = function () {
  for (var i = 0; i < 4; i ++) {
    // battle();
    // compareWar();
  }

  console.log("A card at war: " + inBattleA[4]);
  console.log("B card at war: " + inBattleB[4]);
}

// var war2 = function () {
//   var battleCard = inBattleA.concat(inBattleB);
//   for (var i = 0; i < (battleCard.length - 2); i ++){
//     battle();
//   }
// }

// ==================================================================
// WHEN PLAYER WINS A WAR, COLLECT ALL CARDS IN PLAY
// ==================================================================
var collectCardsA = function () {
  for ( var i = inBattleB.length - 1; i >= 0; i --){
    inHandA.push(inBattleB.shift());
  }
  for ( var i = inBattleA.length - 1; i >= 0; i --){
    inHandA.push(inBattleA.shift());
  }
  console.log("NEW inHandA: " + inHandA);
  console.log("NEW inHandB: " + inHandB);
}

var collectCardsB = function () {
  for ( var i = inBattleA.length - 1; i >= 0; i --){
    inHandB.push(inBattleA.shift());
  }
  for ( var i = inBattleB.length - 1; i >= 0; i --){
    inHandB.push(inBattleB.shift());
  }
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

  inBattleA.push(inHandA.shift([0]));
  // console.log("inHandA: " + inHandA);
  console.log("inBattleA: " + inBattleA);

  inBattleB.push(inHandB.shift([0]));
  // console.log("inHandB: " + inHandB);
  console.log("inBattleB: " + inBattleB);

  compare();
}


// if (inHandA.length >= 1 && inHandB.length >= 1) {
//    battle();
//  } else if (inHandA.length >= 1 && inHandB.length < 1){
//   console.log("Player A Conquers the World!")
//  } else {
//   console.log("Player B Conquers the World!");
// }





// ==================================================================
// CREATE GAME FLOW/WINNING CONIDITION
// ==================================================================
var winner = function () {
if (inHandA.length < 1) {
  console.log("player B conquers the world!")
  alert("player B conquers the world!")
  } else if (inHandB.length < 1) {
  console.log("player A conquers the world!")
  alert("player A conquers the world!")
  }
  // else {
  // while (inHandA.length >= 1 && inHandB.length >= 1) {
  // battle();  // continue game play
  // }
}

// while (inHandA.length >= 1 && inHandB.length >= 1) {
  // battle();
// }

// winner();

