console.log('ha');

var $startButton = document.querySelector('[name="start"]'),
    $dealButton = document.querySelector('.deal-button'),
    $hitButton = document.querySelector('.hit-button'),
    $stayButton = document.querySelector('.stay-button'),
    $dealerScore = document.querySelector('.dealer-score'),
    $dealerScore2 = document.querySelector('.dealer-score2'),
    $playerScore = document.querySelector('.player-score'),
    $winMsg = document.querySelector('.win-message'),
    $bet500 = document.querySelector('.bet-500'),
    $bet100 = document.querySelector('.bet-100'),
    $bet50 = document.querySelector('.bet-50'),
    $betText = document.querySelector('.bet'),
    $cashText = document.querySelector('.cash'),
    $betArea = document.querySelector('.bet-text'),
    $cashArea = document.querySelector('.cash-text'),
    $debt = document.querySelector('.debt'),
    $dealerDesc = document.querySelector('.dealer-description'),
    $playerDesc = document.querySelector('.player-description'),
    $playerCards = document.querySelector('.player-cards'),
    $dealerCards = document.querySelector('.dealer-cards'),
    $dealerBack = document.querySelector('.dealer-back'),
    $header = document.querySelector('.header'),
    $headerBig = document.querySelector('.header-big');

var hideWinId,
    removeCardsId,
    hideDealerScoreId,
    hidePlayerScoreId,
    playerCardTop = 0,
    playerCardLeft = 0,
    deck = [],
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
    bet: 0,
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
  var currentCard = currentPlayer.hand[i];
  var currentName = currentCard.name;
  var currentSuit = currentCard.suits;
  var strSrc = 'assets/cards/' + currentName + '_of_' + currentSuit + '.png';
  img.src = strSrc;
  if (currentPlayer.name === 'dealer') {
    img.setAttribute('class', 'dealer-' + i);
    var location = document.querySelector('.dealer-cards');
    location.appendChild(img);
  } else {
    img.setAttribute('class', 'player-' + i);
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
  $playerDesc.style.opacity = '1';
  $playerDesc.style.left = '480px';
}

function showPlayerScore() {
  $playerScore.style.opacity = '1';
}

function hidePlayerScore() {
  $playerScore.style.opacity = '0';
}

function showDealerScore() {
  $dealerScore.style.opacity = '1';
}

function showDealerScore2() {
  $dealerScore2.style.opacity = '1'
}

function hideDealerScore2() {
  $dealerScore2.style.opacity = '0'
}

function hideDealerScore() {
  $dealerScore.style.opacity = '0';
}

function showWin(message) {
  if (message === 'WINNER!') {
    $winMsg.style.color = 'gold';
    $winMsg.style.top = '120px';
    $winMsg.style.fontSize = '180px';
    $winMsg.style.left = '-100px';
    $winMsg.textContent = message;
  } else if (message === 'BLACKJACK') {
    $winMsg.style.color = 'gold';
    $winMsg.style.top = '150px';
    $winMsg.style.fontSize = '130px';
    $winMsg.style.left = '-100px';
    $winMsg.textContent = message;
  }
  else {
    $winMsg.textContent = message;
    $winMsg.style.color = 'red';
    $winMsg.style.fontSize = '180px';
    $winMsg.style.top = '100px';
    $winMsg.style.left = '0px';
  }
  $dealButton.classList.add('animated', 'tada', 'infinite');
}

function hideWin() {
  showWin('');
}

function hideGfxWin() {
  hideWinId = setTimeout(hideWin, 2000);
  removeCardsId = setTimeout(removeCards, 1000);
  hidePlayerScoreId = setTimeout(hidePlayerScore, 1000);
  hideDealerScoreId = setTimeout(hideDealerScore, 1000);
}

function clearTime() {
  clearTimeout(hideWinId);
  clearTimeout(removeCardsId);
  clearTimeout(hideDealerScoreId);
  clearTimeout(hidePlayerScoreId);
}

//ANIMATIONS

function displayDeal() {
  $dealButton.style.opacity = '1';
  $dealButton.classList.add('animated', 'bounceInLeft');
}

function header() {
  $header.style.opacity = '1';
  $headerBig.style.opacity = '0';
  $headerBig.style.top = '-100px';
  $headerBig.style.fontSize = '50px';
  $headerBig.style.left = '-250px';
  $startButton.style.opacity = '0';
}

function sButton() {
  $startButton.style.display = 'none';
}

function displayActions() {
  $hitButton.style.opacity = '1';
  $hitButton.style.cursor = 'pointer';
  $stayButton.style.opacity = '1';
  $stayButton.style.cursor = 'pointer';
  $hitButton.classList.add('animated', 'bounceInLeft');
  $stayButton.classList.add('animated', 'bounceInLeft');
}

function hideActions() {
  $hitButton.style.opacity = '0';
  $hitButton.style.cursor = 'default';
  $stayButton.style.opacity = '0';
  $stayButton.style.cursor = 'default';
}

function hideDeal() {
  $dealButton.style.opacity = '0'
  $dealButton.style.cursor = 'default'
}

function showDeal() {
  $dealButton.style.opacity = '1'
  $dealButton.style.cursor = 'pointer'
}

function removeClass() {
  $dealButton.classList.remove('animated', 'bounceInLeft');
  $hitButton.classList.remove('animated', 'bounceInLeft');
  $stayButton.classList.remove('animated', 'bounceInLeft');
  $bet500.classList.remove('animated', 'bounceInRight');
  $bet100.classList.remove('animated', 'bounceInRight');
  $bet50.classList.remove('animated', 'bounceInRight');
}

//GAMEPLAY

function startGame() {
  createDeck();
  startingCash(players[0]);
  showCashText();
  displayText();
  showCashArea();
  displayDeal();
  header();
  chipsEntrance();
  showChips();
  setTimeout(sButton, 500);
  setTimeout(removeClass, 2000);
  console.log('Game started... good luck.');
  $startButton.removeEventListener('click', startGame);
}

$startButton.addEventListener('click', startGame);

function dealCards() { //try to pass in a player object??
  currentPlayer = players[0];
  removeCards();
  shuffleDeck();
  hideChips();
  $bet500.removeEventListener('click', bet);
  $bet100.removeEventListener('click', bet);
  $bet50.removeEventListener('click', bet);
  hideDealerScore();
  clearTime();
  hideWin();
  for (var i = 0; i < (players.length * 2); i++) {
    currentPlayer.hand.push(shuffledDeck.shift());
    console.log(capFirstLetter(currentPlayer.name) + ' drew a ' +
      capFirstLetter(currentPlayer.hand[currentPlayer.hand.length-1].name) + ' of ' + capFirstLetter(currentPlayer.hand[currentPlayer.hand.length-1].suits));
    findScore(currentPlayer);
    var lastCardHand = currentPlayer.hand.length - 1;
    displayCards(lastCardHand);
    dealerBackOne();
    nextTurn();
  }
  console.log(capFirstLetter(currentPlayer.name) + '\'s' + ' turn.');
  $dealButton.removeEventListener('click', dealCards);
  displayActions();
  removeClass();
  showDealerScore2();
  showPlayerScore();
  hideDeal();
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
  hideActions();
  console.log(capFirstLetter(currentPlayer.name) + '\'s' + ' turn.');
  if (currentPlayer && currentPlayer.name === 'dealer') {
    dealerGamePlay();
    hideDealerScore2();
    showDealerScore();
    findWinner();
  }
}

$stayButton.addEventListener('click', stay);

function startNextRound() { //1 deck logic only
  shuffledDeck= [];
  showDeal();
  showChips();
  showDebt();
  $bet500.addEventListener('click', bet);
  $bet100.addEventListener('click', bet);
  $bet50.addEventListener('click', bet);
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

function bet(event) {
  players[0].cash = players[0].cash - +event.target.text;
  $cashText.textContent = '$' + players[0].cash;
  players[0].bet = players[0].bet + +event.target.text
  $betText.textContent = '$' + players[0].bet;
}

$bet500.addEventListener('click', bet);
$bet100.addEventListener('click', bet);
$bet50.addEventListener('click', bet);

function betWin() {
  players[0].cash = players[0].cash + (players[0].bet * 2);
  $cashText.textContent = '$' + players[0].cash;
  players[0].bet = 0;
  $betText.textContent = '$' + players[0].bet;
}

function betLose() {
  players[0].cash = players[0].cash;
  $cashText.textContent = '$' + players[0].cash;
  players[0].bet = 0;
  $betText.textContent = '$' + players[0].bet;
}

function betPush() {
  players[0].cash = players[0].cash + players[0].bet;
  $cashText.textContent = '$' + players[0].cash;
  players[0].bet = 0;
  $betText.textContent = '$' + players[0].bet;
}

function showChips() {
  $bet500.style.opacity = '1';
  $bet500.style.cursor = 'pointer';
  $bet100.style.opacity = '1';
  $bet100.style.cursor = 'pointer';
  $bet50.style.opacity = '1';
  $bet50.style.cursor = 'pointer';
}

function chipsEntrance() {
  $bet500.classList.add('animated', 'bounceInRight');
  $bet100.classList.add('animated', 'bounceInRight');
  $bet50.classList.add('animated', 'bounceInRight');
}

function hideChips() {
  $bet500.style.opacity = '0';
  $bet500.style.cursor = 'default';
  $bet100.style.opacity = '0';
  $bet100.style.cursor = 'default';
  $bet50.style.opacity = '0';
  $bet50.style.cursor = 'default';
}

function showCashText() {
  $betText.style.opacity = '1';
  // $betText.classList.add('animated', 'bounceInRight');
  $cashText.style.opacity = '1';
}

function showCashArea() {
  $betArea.style.opacity = '1';
  $betArea.classList.add('animated', 'bounceInRight');
  $cashArea.style.opacity = '1';
  $cashArea.classList.add('animated', 'bounceInRight');
}

function showDebt() {
  if (players[0].cash < -1) {
    $debt.style.opacity = '1';
    $debt.classList.add('animated', 'pulse', 'infinite');
  } else {
    $debt.style.opacity = '0';
  }
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
    showWin('BLACKJACK');
    hideGfxWin();
    hideActions();
    hideDealerScore2();
    showDealerScore();
    dealerBackZero();
    hideActions();
    betWin();
    startNextRound();
  } if (players[players.length - 1].score === 21 && players[0].score != 21) {
      console.log('Sorry, dealer wins. Better luck next time...');
      showWin('LOSER!');
      hideGfxWin();
      hideActions();
      hideDealerScore2();
      showDealerScore();
      dealerBackZero();
      hideActions();
      betLose();
      startNextRound();
    } if (players[0].score === 21 && players[players.length - 1].score === 21) {
        console.log('Push... nobody wins.');
        showWin('Push...');
        hideGfxWin();
        hideActions();
        hideDealerScore2();
        showDealerScore();
        dealerBackZero();
        hideActions();
        betPush();
        startNextRound();
        $dealButton.addEventListener('click', dealCards);
      } else {
          return false;
        }
}

function testBust() {
    if (players[0].score > 21) {
      console.log('BUST, dealer wins. Better luck next time...');
      showWin('BUST...');
      hideGfxWin();
      hideDealerScore2();
      showDealerScore();
      dealerBackZero();
      hideActions();
      betLose();
      startNextRound();
    } if (players[1].score > 21) {
        console.log('Dealer BUST! You win!');
        showWin('WINNER!');
        hideGfxWin();
        hideDealerScore2();
        showDealerScore();
        dealerBackZero();
        hideActions();
        betWin();
        startNextRound();
    } else {
        return false;
      }
}

function findWinner() {  //how to notate compare against "other" player
  if (players[0].score === players[players.length - 1].score) {
    console.log('Push... nobody wins.');
    showWin('Push...');
    hideGfxWin();
    hideActions();
    hideDealerScore2();
    showDealerScore();
    dealerBackZero();
    betPush();
    startNextRound();
    return false;
  } if ((players[1].score > players[0].score) && players[1].score <= 21) {
        console.log('Dealer wins. Better luck next time...');
        showWin('LOSER!');
        hideGfxWin();
        hideActions();
        hideDealerScore2();
        showDealerScore();
        dealerBackZero();
        betLose();
        startNextRound();
    } else {
      console.log('You win!!!');
      showWin('WINNER!');
      hideGfxWin();
      hideActions();
      hideDealerScore2();
      showDealerScore();
      dealerBackZero();
      betWin();
      startNextRound();
    }
}

//Visual Funcs

function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
