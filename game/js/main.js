console.log('ha');

var $startButton = document.querySelector('[name="start"]'),
    $dealButton = document.querySelector('.deal-button'),
    $hitButton = document.querySelector('.hit-button'),
    $stayButton = document.querySelector('.stay-button'),
    $dealerScore = document.querySelector('.dealer-score'),
    $playerScore = document.querySelector('.player-score'),
    $dealerDesc = document.querySelector('.dealer-description'),
    $playerDesc = document.querySelector('.player-description'),
    $playerCards = document.querySelector('.player-cards'),
    $dealerCards = document.querySelector('.dealer-cards'),
    $dealerBack = document.querySelector('.dealer-back');
var deck = [],
    shuffledDeck= [];
    // shuffledDeck= [
    // {
    //   value: 11,
    //   suits: 'hearts',
    //   name: 'ace',
    //   isFaceUp: true
    // },
    // {
    //   value: 3,
    //   suits: 'hearts',
    //   name: 'three',
    //   isFaceUp: true
    // },
    // {
    //   value: 11,
    //   suits: 'hearts',
    //   name: 'ace',
    //   isFaceUp: true
    // },
    // {
    //   value: 2,
    //   suits: 'hearts',
    //   name: 'two',
    //   isFaceUp: true
    // },
    // {
    //   value: 11,
    //   suits: 'hearts',
    //   name: 'ace',
    //   isFaceUp: true
    // },
    // ];

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
    names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'],
    isFaceUp = [true];

// var value = [5,7,11, 11, 11],
//     suits = ['diamonds', 'clubs', 'hearts', 'spades'],
//     names = ['five', 'seven', 'ace', 'ace', 'ace'],
//     isFaceUp = [true];


// commented for testing
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
  // return shuffledDeck = shuffledDeck;
}

var currentPlayer; //= players[0];

function nextTurn() {
  // var lastCardHand = currentPlayer.hand.length - 1;
  // displayCards(lastCardHand);
  // console.log(currentPlayer);
  if (currentPlayer && currentPlayer.name === 'player') {
    currentPlayer = players[1];
  } else {
    currentPlayer = players[0];
  }
  // debugger;
}

//IMAGES

function displayCards(i) {
  var img = document.createElement('img');
  // img.style.opacity = 1;
  var currentCard = currentPlayer.hand[i];
  var currentName = currentCard.name;
  var currentSuit = currentCard.suits;
  // debugger;
  var strSrc = 'assets/cards/' + currentName + '_of_' + currentSuit + '.png';
  img.src = strSrc;
  if (currentPlayer.name === 'dealer') {
    img.setAttribute('class', 'dealer-' + i);
    // img.setAttribute('class', 'dealt-cards');
    var location = document.querySelector('.dealer-cards');
    location.appendChild(img);
    // debugger;
  } else {
    img.setAttribute('class', 'player-' + i);
    // img.setAttribute('class', 'dealt-cards');
    $playerCards.appendChild(img);
  }
}

function removeCards() {
  $playerCards.innerHTML = '';
  $dealerCards.innerHTML = '';
}

function dealerBackOne() {
  $dealerBack.style.opacity = '1';
}

function dealerBackZero() {
  $dealerBack.style.opacity = '0';
}

//DISPLAY SCORE

function displayText() {
  $dealerDesc.style.opacity = '1';
  $dealerDesc.style.left = '120px';
  // $dealerDesc.style.position = 'relative';
  $playerDesc.style.opacity = '1';
  $playerDesc.style.left = '480px';
}

//ANIMATIONS

function displayStuff() {
  $dealButton.style.opacity = '1';
  $hitButton.style.opacity = '1';
  $stayButton.style.opacity = '1';
  $dealButton.classList.add('animated', 'bounceInLeft');
  $hitButton.classList.add('animated', 'bounceInLeft');
  $stayButton.classList.add('animated', 'bounceInLeft');
}



//GAMEPLAY

function startGame() {
  createDeck();
  displayText();
  displayStuff();
  console.log('Game started... good luck.');
  $startButton.removeEventListener('click', startGame);
}

$startButton.addEventListener('click', startGame);

function dealCards() { //try to pass in a player object??
  currentPlayer = players[0];
  removeCards();
  shuffleDeck();
  for (var i = 0; i < (players.length * 2); i++) {
    currentPlayer.hand.push(shuffledDeck.shift());
    console.log(capFirstLetter(currentPlayer.name) + ' drew a ' +
      capFirstLetter(currentPlayer.hand[currentPlayer.hand.length-1].name) + ' of ' + capFirstLetter(currentPlayer.hand[currentPlayer.hand.length-1].suits));
    findScore(currentPlayer);
    var lastCardHand = currentPlayer.hand.length - 1;
    displayCards(lastCardHand);
    dealerBackOne();
    nextTurn();
    // setTimeout(nextTurn, 100);
  }
  console.log(capFirstLetter(currentPlayer.name) + '\'s' + ' turn.');
  $dealButton.removeEventListener('click', dealCards);
  onDealWinner();
}

$dealButton.addEventListener('click', dealCards);

function hit() {
  var card = shuffledDeck.shift();
  currentPlayer.hand.push(card);
  displayCards(currentPlayer.hand.length-1);
  // debugger;
  console.log(capFirstLetter(currentPlayer.name) + ' drew a ' +
    currentPlayer.hand[currentPlayer.hand.length-1].name + ' of ' + capFirstLetter(currentPlayer.hand[currentPlayer.hand.length-1].suits));
  findScore(currentPlayer);
  testBust();
}

function dealerHit() {
  var card = shuffledDeck.shift();
  players[players.length-1].hand.push(card);
  console.log(capFirstLetter(players[players.length-1].name) + ' drew a ' +
    players[players.length-1].hand[players[players.length-1].hand.length-1].name + ' of ' + capFirstLetter(players[players.length-1].hand[players[players.length-1].hand.length-1].suits));
  var lastCardHand = currentPlayer.hand.length - 1;
  displayCards(lastCardHand);
  findScore(players[players.length-1]);
  testBust();
}

$hitButton.addEventListener('click', hit);

/**
  * Ends current player turn and begins next action
  */
function stay() {
  //end player turn
  $stayButton.removeEventListener('click', stay);
  nextTurn();
  dealerBackZero();
  console.log(capFirstLetter(currentPlayer.name) + '\'s' + ' turn.');
  if (currentPlayer && currentPlayer.name === 'dealer') {
    dealerGamePlay();
    findWinner();
  }
}

$stayButton.addEventListener('click', stay);

function startNextRound() { //1 deck logic only
  shuffledDeck= [];
  $stayButton.addEventListener('click', stay);
  for (var x = 0; x < players.length; x++) {
    players[x].hand = [];
  }
  $dealButton.addEventListener('click', dealCards);
}

//Betting

function startingCash(user) {
  user.cash = 1000;
}

//Dealer AI

function dealerGamePlay() {
  while (currentPlayer.score < 17) {
    dealerHit();
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
  //check if userscore > 21 && user.hand.value contains 11
//check entire hand to see if any ace has been dealt, not just last value
  // if (user.score > 21 && user.hand.contains.value === 11) {
  //   console.log('Whoah, there\'s an Ace');
  //   //if so, change value of ace to 1
  //   user.hand[user.hand.length-1].value = 1;
  //   //update score
  //   user.score = null;
  //   for (var x = 0; x < user.hand.length; x++) {
  //     user.score = user.score + user.hand[x].value;
  //   }
  // }
    if (user.score > 21) {
      // if (user.hand.find(findAce)) {
      //   return false;
      // }
      if (user.hand.find(findAce)) {
        var changedAce = user.hand.find(findAce);
        console.log('Whoah, there\'s an Ace');
        //if so, change value of ace to 1
        changedAce.value = 1;
        //update score
        user.score = null;
        for (var x = 0; x < user.hand.length; x++) {
        user.score = user.score + user.hand[x].value;
       }
      // else {
      //   return false;
      // }
    }
  }
  console.log(capFirstLetter(user.name) + ' score:' + ' ' + user.score);

  if (user.name === 'dealer') {
    $dealerScore.textContent = user.score;
  } else {
    $playerScore.textContent = user.score;
  }

  return user.score;
}

//FIND FIRST ACE
function findAce(ace) {
  return ace.value === 11;
}

//Winner

function onDealWinner() {
  if (players[0].score === 21 && players[players.length - 1].score != 21) {
    console.log('Blackjack! Player Wins!');
    dealerBackZero();
    startNextRound();
  } if (players[players.length - 1].score === 21 && players[0].score != 21) {
      console.log('Sorry, dealer wins. Better luck next time...');
      dealerBackZero();
      startNextRound();
    } if (players[0].score === 21 && players[players.length - 1].score === 21) {
        console.log('Push... nobody wins.')
        dealerBackZero();
        startNextRound();
        $dealButton.addEventListener('click', dealCards);
      } else {
          return false;
        }
}


function testBust() {
    if (players[0].score > 21) {
      console.log('BUST, dealer wins. Better luck next time...');
      dealerBackZero();
      startNextRound();
    } if (players[1].score > 21) {
        console.log('Dealer BUST! You win!');
        dealerBackZero();
        startNextRound();
    } else {
        return false;
      }
}

function findWinner() {  //how to notate compare against "other" player
  if (players[0].score === players[players.length - 1].score) {
    console.log('Push... nobody wins.')
    dealerBackZero();
    startNextRound();
    return false;
  } if ((players[1].score > players[0].score) && players[1].score <= 21) {
        console.log('Dealer wins. Better luck next time...')
        dealerBackZero();
        startNextRound();
    } else {
      console.log('You win!!!');
      dealerBackZero();
      startNextRound();
    }
}

//Visual Funcs

function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
