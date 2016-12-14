var player1;
var Player2;

var isWar = false;
var cards;

var $start = document.querySelector('#start');

//shuffle the deck of cards. Pulls from func above
//shuffle(deckOfCards);

var makeDeck = function() {
  // organize cards function. Ace is #13
  // each row represents card suit
  var cards = [
    2,3,4,5,6,7,8,9,10,11,12,13,14,  //index 0-12
    2,3,4,5,6,7,8,9,10,11,12,13,14,  //index 13-25
    2,3,4,5,6,7,8,9,10,11,12,13,14,  //index 26-38
    2,3,4,5,6,7,8,9,10,11,12,13,14   //index 39-51
  ];
  shuffleArray(cards);
  return cards;
}

var startGame = function(){
  cards = makeDeck();
  // cut deck in half
  player1 = cards.splice(0, 26);
  player2 = cards;
}

// function to shuffle arrays numbers
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

// var shuffle = function (array) {
//       array.sort(function(a, b) {
//           return 0.5 - Math.random()
//         });
//         console.log(shuffle(array));
//       }



// function to compare first two cards
// maybe give the cards to compare cards first...
function compareCards(a, b) {
  // assign cards to player 1 and 2?
  // maybe use isWar further down to do more checks
  // example here:
  // if (isWar) {
  //   cardPlayed1 = player1[3];
  //   cardPlayed2 = player2[3];
  //   var trashcards1 = player1.splice(0, 2);
  //   var trashcards2 = player2.splice(0, 2);
  // } else {
    cardPlayed1 = player1[0];
    cardPlayed2 = player2[0];
  //   var trashcards1 = player1[0];
  //   var trashcards2 = player2[0];
  // }

  if (cardPlayed1 > cardPlayed2) {

    //logic here to add card back
    // remove cards from players' hands
    var removedCard1 = player1.shift();
    var removedCard2 = player2.shift();
    // add both cards to bottom of winner's pile
    player1.push(removedCard1, removedCard2);

    // helper to visualize
    // console.log(cardsSplitHalf1);
    // console.log(cardsSplitHalf2);
    return 'Winner is Player 1';
  } else if (cardPlayed1 < cardPlayed2) {
    //logic here to add card back
    // remove cards from players' hands
    var removedCard1 = player1.shift();
    var removedCard2 = player2.shift();
    // add both cards to bottom of winner's pile
    player2.push(removedCard1,removedCard2);
    // helper to visualize
    // console.log(cardsSplitHalf1);
    // console.log(cardsSplitHalf2);
    return 'Winner is Player 2';
  } else {
    // cards match
    isWar = true;
    return 'War!';

    //check if war flag = true
    // if (war !== false) {
    //war === false;
  }

}



// war might actually be part of compareCards
// and we just use isWar to change variables
// function of War comparison
var war = function () {
        compareCards();
        // player1[3] vs player2[3]
          // remove next 3 cards from both decks
          cardsSplitHalf1.splice(0,2) // index 0-2 = 3 cards
          cardsSplitHalf2.splice(0,2) // index 0-2 = 3
          // add cards to back of player 1 pile
          cardsSplitHalf1.push(0,6);

}

$start.addEventListener('click', startGame);

// subtract one card from deck (loser of card draw)

// add two cards to deck (winner of card drawer)


// subtract 10 cards from deck (loser of war)
/// this is how we could put cards for war in a holding tank first
// var tempHand1 = player1.splice(0, 4)
// var tempHand2 = player2.splice(0, 4)
// var compare1 = tempHand1[0]
// var compare2 = tempHand2[0]
// player1.concat(tempHand1, tempHand2);

// add 6 cards to deck (winner of War)


