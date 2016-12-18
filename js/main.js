console.log('aloha, dakotah!')
// buttons
var dealBtn = document.querySelector('.deal');
var shuffleBtn = document.querySelector('.shuffle');
var pushBtn = document.querySelector('.push');
pushBtn.classList.add('hidden');
var battleBtn = document.querySelector('.battle');
battleBtn.classList.add('hidden');
var warBtn = document.querySelector('.war');
warBtn.classList.add('hidden');
var resetBtn = document.querySelector('.reset');
resetBtn.classList.add('hidden');
// possible DOM elements
var $deck = document.querySelector('.deck');
var $inHandA = document.querySelector('#inHandA');
var $inHandB = document.querySelector('#inHandB');
var $inPlayA = document.querySelector('#inPlayA');
var $inPlayB = document.querySelector('#inPlayB');

// ====================================================================
// ====================================================================
// CREATE A DECK OF CARDS AS OBJECTS, SHUFFLE, AND DEAL OUT TO PLAYERS
// ====================================================================
// ====================================================================


// values: 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
// suits: c, d, h, s



// name = ["c", "d", "h", "s"];
// value = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k", "a"];

// var cardRank = [2, 3, 4];
// var cardName = [2, 3, 4];
// var cardSuit = ["c", "d", "h", "s"];
// var cardImage = [];
// var deck = [];
// var card;
// var img;

// var createDeck = function(){
//   for (var i = 0; i < cardRank.length; i++) {
//   for (var j = 0; j < cardSuit.length; j++) {
//   for (var k = 0; k < cardImage.length; k++) {
//      card = {
//        value: cardRank[i],
//        suit: cardSuit[j],
//        image: cardImage[k]
//      };
//        deck.push(card);
//      }
//     }
//   }
// }
// createDeck();

// _.shuffle(deck);

// var shuffle = function(deck){
//   var n = deck.length, j, temp;
//   // console.log(n);
// while(--n > 0) {
//   j = Math.floor(Math.random() * (n));
//   temp = deck[j];
//   deck[j] = deck[n];
//   deck[n] = temp;
//   }
//   console.log('Shuffled deck: ', deck);
//   return deck;
//  }


// =====================================================================
// START WITH A SIMPLE DECK, SHUFFLE THE VALUES, AND DEAL OUT TO PLAYERS
// =====================================================================
var deck = [
            2, 3, 4, 5, 6, 7,
            2, 3, 4, 5, 6, 7
            // 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
            // 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
  ];
console.log("Unshuffled deck: " + deck);

function stringDeck () {
  $deck.textContent = deck.toString();
  $deck.setAttribute('contenteditable', 'true');
}
stringDeck();



// shuffle the deck
var shuffle = function () {
  deck;
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
  // return deck;
  stringDeck();
  console.log("Shuffled deck: " + deck);
  shuffleBtn.classList.add('hidden');
  // shuffleBtn.removeEventListener('click', shuffle);
}
shuffleBtn.addEventListener('click', shuffle)

// deck = shuffle(deck);
// console.log("Shuffled deck: " + deck);


//deal the cards out
var inHandA = [];
var inHandB = [];

var deal = function () {
  $deck.textContent = " "
  for (var i = 0; i < deck.length; i ++) {
    if (i % 2 === 0) {
      inHandA.push(deck[i]);

    } else {
      inHandB.push(deck[i]);
    }
  }
  // dealBtn.removeEventListener('click', deal);
  $inHandA.textContent = inHandA.toString();
  $inHandB.textContent = inHandB.toString();
  console.log("Beginning inHandA: " + inHandA);
  console.log("Beginning inHandB: " + inHandB);
  dealBtn.classList.add('hidden');
  pushBtn.classList.remove('hidden');
  battleBtn.classList.remove('hidden');
  resetBtn.classList.remove('hidden');
}
dealBtn.addEventListener('click', deal);

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
    pushBtn.classList.add('hidden');
    battleBtn.classList.add('hidden');
    warBtn.classList.add('hidden');
    console.log("player B conquers the world!")
    alert("player B conquers the world!")
  } else if (inHandB.length < 1) {
    pushBtn.classList.add('hidden');
    battleBtn.classList.add('hidden');
    warBtn.classList.add('hidden');
    console.log("player A conquers the world!")
    document.createElement
    alert("player A conquers the world!")
  }
}

var reset = function () {
  deck = inHandA.concat(inHandB);
  $deck.textContent = deck;
  console.log("deck: " + deck);

  inHandA = [];
    $inHandA.textContent = " "
    console.log("inHandA: " + inHandA);

    $inPlayA.classList.remove('faceUp');
    $inPlayA.classList.add('faceDown');
    $inPlayA.textContent = " ";

  inHandB = [];
    $inHandB.textContent = " ";
    console.log("inHandB: " + inHandB);

    $inPlayB.classList.remove('faceUp');
    $inPlayB.classList.add('faceDown');
    $inPlayB.textContent = " ";

  // displays pre-game event buttons
  shuffleBtn.classList.remove('hidden');
  dealBtn.classList.remove('hidden');

  // hides in-game event buttons
  pushBtn.classList.add('hidden');
  battleBtn.classList.add('hidden');
  warBtn.classList.add('hidden');
  resetBtn.classList.add('hidden');

}

resetBtn.addEventListener('click', reset)


// ==================================================================
// COMPARE VALUES OF CARDS IN PLAY
// ==================================================================
var battle = function () {
  if (inPlayA[inPlayA.length - 1] === inPlayB[inPlayB.length - 1]) {
    console.log("WAR!");
    alert("WAR!")
    pushBtn.classList.add('hidden')
    battleBtn.classList.add('hidden');
    warBtn.classList.remove('hidden');
    // war();
  } else if (inPlayA[inPlayA.length - 1] > inPlayB[inPlayB.length - 1]){
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

  clearBattle();
  pushBtn.classList.remove('hidden');

  console.log("NEW inHandA: " + inHandA);
  console.log("NEW inHandB: " + inHandB);

  winner();
};


// ==================================================================
// CREATE A WAR FUNCTION
// ==================================================================


var compareWar = function () {
  inWarA = inPlayA[inPlayA.length - 1]
  inWarB = inPlayB[inPlayB.length - 1]
  if (inWarA === inWarB) {
    war();
   } else if (inWarA > inWarB) {
    collectCardsA();
   } else {
    collectCardsB();
   }

  clearBattle ()
  warBtn.classList.add('hidden');
  battleBtn.classList.remove('hidden');

  // player A's status
  console.log("inHandA: " + inHandA);
  // player B's status
  console.log("inHandB: " + inHandB);

  winner();
}

var war = function () {
  inPlayA = inPlayA.concat(inHandA.splice(0,4));
  inWarA = inPlayA[inPlayA.length - 1]
    $inPlayA.classList.add('faceUp');

  inPlayB = inPlayB.concat(inHandB.splice(0,4));
  inWarB = inPlayB[inPlayB.length - 1]
    $inPlayB.classList.add('faceUp');

  stringInWar ();

  // player A's status
  console.log("inHandA: " + inHandA);
  console.log("inPlayA: " + inPlayA);
  console.log("inWarA: " + inWarA);

  // player B's status
  console.log("inWarB: " + inWarB);
  console.log("inPlayB: " + inPlayB);
  console.log("inHandB: " + inHandB);

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
var pushIn = function () {

  inPlayA.push(inHandA.shift());
    stringInPlayA();
    // $inPlayA.classList.remove('faceDown');
    $inPlayA.classList.add('faceUp');
  console.log("inHandA: " + inHandA);
  console.log("inPlayA: " + inPlayA);

  inPlayB.push(inHandB.shift());
    stringInPlayB();
    // $inPlayB.classList.remove('faceDown');
    $inPlayB.classList.add('faceUp');
  console.log("inPlayB: " + inPlayB);
  console.log("inHandB: " + inHandB);
  pushBtn.classList.add('hidden');
}

// ==================================================================
// EVENT LISTENERS FOR IN-GAME BUTTONS
// ==================================================================
pushBtn.addEventListener('click', pushIn)
battleBtn.addEventListener('click', battle)
warBtn.addEventListener('click', war)


// ==================================================================
// ADD/CLEAR CONTENT FUNCTIONS
// ==================================================================
function stringInPlayA () {
  $inPlayA.textContent = inPlayA.toString();
}

function stringInPlayB () {
  $inPlayB.textContent = inPlayB.toString();
}

function stringInWar () {
  $inPlayA.textContent = inWarA.toString();
  $inPlayB.textContent = inWarB.toString();
  }

// function stringInWarA () {
//   $inPlayA.textContent = inWarA.toString();
// }
// function stringInWarB () {
//   $inPlayB.textContent = inWarB.toString();
// }

function clearBattle () {
  $inPlayA.classList.remove('faceUp');
  $inPlayB.classList.remove('faceUp');
  $inPlayA.textContent = " ";
  $inPlayB.textContent = " ";
  // $inPlayA.classList.add('faceDown');
  // $inPlayB.classList.add('faceDown');
  $inHandA.textContent = inHandA.toString();
  $inHandB.textContent = inHandB.toString();
}
