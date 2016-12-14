var player1;
var player2;
var cardPlayed1;
var cardPlayed2;

var isWar = false;
var cards;

// start button on html page
var $start = document.querySelector('#start');

// play button on html page
var $play = document.querySelector('#play');

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
function compareCards() {
  // assign cards to player 1 and 2?

  if (cardPlayed1 > cardPlayed2) {

          // If WAR flag is on, do this, if off, fall through
          if (isWar !== false) {
              startWar();
          }
        //logic here to add card back
        // remove cards from players' hands
        var removedCard1 = player1.shift();
        var removedCard2 = player2.shift();
        // add both cards to bottom of player1 pile
        player1.push(removedCard1, removedCard2);
        isWar = false;
        return 'Winner is Player 1';

    } else if (cardPlayed1 < cardPlayed2) {

          // If WAR flag is on, do this, if off, fall through
          if (isWar !== false) {
              startWar();
          }

        //logic here to add card back
        // remove cards from players' hands
        var removedCard1 = player1.shift();
        var removedCard2 = player2.shift();
        // add both cards to bottom of player 2 pile
        player2.push(removedCard1,removedCard2);
        // helper to visualize
        // console.log(cardsSplitHalf1);
        // console.log(cardsSplitHalf2);
        isWar = false;
        return 'Winner is Player 2';
   } else {

        // cards match
        isWar = true;
        return 'War!';
        compareCards();
  }

}



// war might actually be part of compareCards
// and we just use isWar to change variables
// function of War comparison
var war = function () {

        //player1[3] vs player2[3];
        warCardsRemoved();


}
// start button
$start.addEventListener('click', startGame);
// Play button
$play.addEventListener('click', compareCards);

// subtract one card from deck (loser of card draw)
// add two cards to deck (winner of card drawer)
// subtract 10 cards from deck (loser of war)
/// this is how we could put cards for war in a holding tank first
var warCardsRemoved = function() {
      var tempHand1 = player1.splice(0, 4);  // this removes first 4 cards
      var tempHand2 = player2.splice(0, 4);  // this removes first 4 cards
      var compare1 = tempHand1[0];    // compares 1st card
      var compare2 = tempHand2[0];    // compares 1st card
      player1.concat(tempHand1, tempHand2); // this adds 8 cards to winner
}
var startWar = function () {
    // run func to hold out cards 3 facedown, 1 up
    warCardsRemoved();
    if (cardPlayed1 > cardPlayed2) {
       player1.push(removedCard1, removedCard2);
       // player 1 wins 'WAR' and gets all 8 cards
       player1.concat(tempHand1, tempHand2);
       player1.push(removedCard1, removedCard2);
       //resets war flag to off
       isWar = false;
       // starts game comparing new cards
       compareCards();
    }
}


