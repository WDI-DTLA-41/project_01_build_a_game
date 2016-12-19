console.log('aloha, dakotah!');
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
var h2 = document.querySelector('h2');

// possible DOM elements
var $deck = document.querySelector('.deck');
var $inHandA = document.querySelector('#inHandA');
var $inHandB = document.querySelector('#inHandB');
var $inPlayA = document.querySelector('#inPlayA');
$inPlayA.innerHTML = "<img src='css/empire.png'>";
var $inPlayB = document.querySelector('#inPlayB');
$inPlayB.innerHTML = "<img src='css/rebel.png'>";


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
            2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
            2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
            2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
            2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
  ];
console.log("Unshuffled deck: " + deck);

// displays unshuffled deck to user
function stringDeck () {
  $deck.textContent = deck.toString();
  $deck.setAttribute('contenteditable', 'true');
}
stringDeck();



// shuffles the deck
var shuffle = function () {
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
};
shuffleBtn.addEventListener('click', shuffle);

// deck = shuffle(deck);
// console.log("Shuffled deck: " + deck);


//deals the cards out to both players
// inHand = the array of cards each player is dealt
var inHandA = [];
var inHandB = [];

var deal = function () {
  $deck.textContent = " ";
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
};
dealBtn.addEventListener('click', deal);

// inPlay = the card each player pushes onto the table
var inPlayA = [];
var inPlayB = [];
// inWar = the fourth (or last) card pushed into play once war is initiated
var inWarA = inPlayA[inPlayA.length - 1];
var inWarB = inPlayB[inPlayB.length - 1];




// ==================================================================
// CREATE WINNING CONIDITION / FUNCTION TO RESET THE DECK
// ==================================================================

// after each round, the length of cards in each player's hand is evaluated.
// if one player's card length is less than one, they are loser by default and
// their opponent is declared the winner.
// if neither player has a card length less than one, the game continues onward.
var winner = function () {

  if (inHandA.length < 1) {
    pushBtn.classList.add('hidden');
    battleBtn.classList.add('hidden');
    warBtn.classList.add('hidden');
    console.log("player B conquers the world!");
    h2.textContent = "The Rebel Alliance saves the galaxy!";
    $inPlayB.innerHTML = "<img src='css/rebel.png'>";
    $inPlayA.innerHTML = " ";
  } else if (inHandB.length < 1) {
    pushBtn.classList.add('hidden');
    battleBtn.classList.add('hidden');
    warBtn.classList.add('hidden');
    console.log("player A conquers the world!");
    h2.textContent = "The Empire conquers the galaxy!";
    $inPlayA.innerHTML = "<img src='css/empire.png'>";
    $inPlayB.innerHTML = "";
  }
};

var reset = function () {
  deck = inHandA.concat(inHandB);
  $deck.textContent = deck;
  console.log("deck: " + deck);

  inHandA = [];
    $inHandA.textContent = " ";
    console.log("inHandA: " + inHandA);
    $inPlayA.classList.remove('faceUp');
    // $inPlayA.classList.add('faceDown');
    $inPlayA.textContent = " ";

  inHandB = [];
    $inHandB.textContent = " ";
    console.log("inHandB: " + inHandB);
    $inPlayB.classList.remove('faceUp');
    // $inPlayB.classList.add('faceDown');
    $inPlayB.textContent = " ";

  //restores card deck images
  $inPlayA.innerHTML = "<img src='css/empire.png'>";
  $inPlayB.innerHTML = "<img src='css/rebel.png'>";

  // displays pre-game event buttons
  shuffleBtn.classList.remove('hidden');
  dealBtn.classList.remove('hidden');

  // hides in-game event buttons
  pushBtn.classList.add('hidden');
  battleBtn.classList.add('hidden');
  warBtn.classList.add('hidden');
  resetBtn.classList.add('hidden');

};

resetBtn.addEventListener('click', reset);


// ==================================================================
// COMPARE VALUES OF CARDS IN PLAY
// ==================================================================

var battle = function () {
  if (inPlayA[inPlayA.length - 1] === inPlayB[inPlayB.length - 1]) {
    pushBtn.classList.add('hidden');
    battleBtn.classList.add('hidden');
    warBtn.classList.remove('hidden');
    console.log("WAR!");
    h2.textContent = "War has been waged!";
    // war();
  } else if (inPlayA[inPlayA.length - 1] > inPlayB[inPlayB.length - 1]){
    // a acquires b's card
    inHandA.push(inPlayB.shift());
    // used card and new card are pushed to
    // the back of a's card-stack array
    inHandA.push(inPlayA.shift());
    console.log("Player A wins the battle!");
    h2.textContent = "The Empire strikes back!";
  } else {
    // b acquires a's card
    inHandB.push(inPlayA.shift());
    // used card and new card are pushed to
    // the back of b's card-stack array
    inHandB.push(inPlayB.shift());
    console.log("Player B wins the battle!");
    h2.textContent = "Rebel Forces win the battle!";
  }

  clearBattle();
  $inPlayA.innerHTML = "<img src='css/empire.png'>";
  $inPlayB.innerHTML = "<img src='css/rebel.png'>";
  pushBtn.classList.remove('hidden');

  console.log("NEW inHandA: " + inHandA);
  console.log("NEW inHandB: " + inHandB);

  winner();
};


// ==================================================================
// CREATE A WAR FUNCTION
// ==================================================================

// creates function to compare last card pushed into play
// compares the value of a specific index in the inplay array
// rather than a single value when only one card is in play
var compareWar = function () {
  inWarA = inPlayA[inPlayA.length - 1];
  inWarB = inPlayB[inPlayB.length - 1];
  if (inWarA === inWarB) {
    war();
   } else if (inWarA > inWarB) {
    collectCardsA();
   } else {
    collectCardsB();
   }

  clearBattle ();
  warBtn.classList.add('hidden');
  battleBtn.classList.remove('hidden');

  // player A's status
  console.log("inHandA: " + inHandA);
  // player B's status
  console.log("inHandB: " + inHandB);

  winner();
};

// pushes four (or all of remaining cards in hand if less than four)
// additional cards into play once war has been declared
var war = function () {
  inPlayA = inPlayA.concat(inHandA.splice(0,4));
  inWarA = inPlayA[inPlayA.length - 1];
    $inPlayA.classList.add('faceUp');

  inPlayB = inPlayB.concat(inHandB.splice(0,4));
  inWarB = inPlayB[inPlayB.length - 1];
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
};



// ==================================================================
// WHEN PLAYER WINS A WAR, COLLECT ALL CARDS IN PLAY
// ==================================================================
// once a winner is declared after war, creates a function to collect
// all of the cards in play
var collectCardsA = function () {
  for ( var i = inPlayB.length - 1; i >= 0; i --){
    inHandA.push(inPlayB.shift());
  }
  for ( i = inPlayA.length - 1; i >= 0; i --){
    inHandA.push(inPlayA.shift());
  }
  console.log("Player A wins the war!");
  h2.textContent = "The Empire wins the war!";

};

var collectCardsB = function () {
  for ( var i = inPlayA.length - 1; i >= 0; i --){
    inHandB.push(inPlayA.shift());
  }
  for ( i = inPlayB.length - 1; i >= 0; i --){
    inHandB.push(inPlayB.shift());
  }
  console.log("Player B wins the war!");
  h2.textContent = "Rebel Forces win the war!";
};


// ==================================================================
// CREATE A BATTLE FUNCTION
// ==================================================================
// creates function to push initial card into play for later evaluation
var pushIn = function () {
  h2.textContent = "Episode IV.2: A Programmer's Hope";
  inPlayA.push(inHandA.shift());
    stringInPlayA();
    // $inPlayA.classList.remove('faceDown');
    $inPlayA.classList.add('faceUp');
  console.log("inHandA: " + inHandA);
  console.log("inPlayA: " + inPlayA);
  pushBtn.classList.add('hidden');


  inPlayB.push(inHandB.shift());
    stringInPlayB();
    // $inPlayB.classList.remove('faceDown');
    $inPlayB.classList.add('faceUp');
  console.log("inPlayB: " + inPlayB);
  console.log("inHandB: " + inHandB);
  pushBtn.classList.add('hidden');
};

// ==================================================================
// EVENT LISTENERS FOR IN-GAME BUTTONS
// ==================================================================
pushBtn.addEventListener('click', pushIn);
battleBtn.addEventListener('click', battle);
warBtn.addEventListener('click', war);


// ==================================================================
// ADD/CLEAR CONTENT FUNCTIONS
// ==================================================================
// functions to display numbers as strings in DOM
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

// creates function that resets the table/in-play area once a battle or
// war has been won
var clearBattle = function () {
  $inPlayA.classList.remove('faceUp');
  $inPlayB.classList.remove('faceUp');
  $inPlayA.textContent = " ";
  $inPlayB.textContent = " ";
  $inHandA.textContent = inHandA.toString();
  $inHandB.textContent = inHandB.toString();
  $inPlayA.innerHTML = "<img src='css/empire.png'>";
  $inPlayB.innerHTML = "<img src='css/rebel.png'>";
};
