
console.log('see me?');

// just a test function on how to create a color**
// credit: Using Durstenfeld shuffle algorithm
function color() {
    player1.setAttribute('class','player cardPlayer1');
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

// function to compare cards
function compareCards() {

    if (cardPlayed1 > cardPlayed2) {
          //logic here to add card back
          // remove cards from players' hands
          var removedCard1 = cardsSplitHalf1.shift();
          var removedCard2 = cardsSplitHalf2.shift();
          // add to bottom of winner's pile
          cardsSplitHalf1.push(removedCard1,removedCard2);
          // helper to visualize
          console.log(cardsSplitHalf1);
          console.log(cardsSplitHalf2);
          return 'Winner is Player 1';


        }
        else if (cardPlayed1 < cardPlayed2) {
          //logic here to add card back
                    // remove cards from players' hands
          var removedCard1 = cardsSplitHalf1.shift();
          var removedCard2 = cardsSplitHalf2.shift();
          // add to bottom of winner's pile
          cardsSplitHalf2.push(removedCard1,removedCard2);
          // helper to visualize
          console.log(cardsSplitHalf1);
          console.log(cardsSplitHalf2);
          return 'Winner is Player 2';
        }
        else {
          // 1- loop back to compareCards until different vals
          // 2- cards get added to winner card deck on back end
          // compareCards();
          // // remove cards from players' hands
          // var removedCard1 = cardsSplitHalf1.shift();
          // var removedCard2 = cardsSplitHalf2.shift();
          // // add to bottom of winner's pile
          // cardsSplitHalf1.push(removedCard1,removedCard2);

          return 'War!';
        }
  }








// organize cards function. Ace is #13
// each row represents card suit
var deckOfCards = [
  2,3,4,5,6,7,8,9,10,11,12,13,14,  //index 0-12
  2,3,4,5,6,7,8,9,10,11,12,13,14,  //index 13-25
  2,3,4,5,6,7,8,9,10,11,12,13,14,  //index 26-38
  2,3,4,5,6,7,8,9,10,11,12,13,14   //index 39-51
];
//shuffle the deck of cards. Pulls from func above
shuffleArray(deckOfCards);

// cut deck in half
var cardsSplitHalf1 = deckOfCards.slice(0,25);
var cardsSplitHalf2 = deckOfCards.slice(26,51);


// assign cards to player 1 and 2?
var cardPlayed1 = cardsSplitHalf1[0];
var cardPlayed2 = cardsSplitHalf2[0];

var player1Pile;
var Player2Pile;
compareCards();

// subtract one card from deck (loser of card draw)

// add two cards to deck (winner of card drawer)


// subtract 10 cards from deck (loser of war)


// add 6 cards to deck (winner of War)









// give a class
var player1 = document.querySelector('#player1');
var player2 = document.querySelector('#player2');
// put event listener on parent
var player = document.querySelector('#player');






//** create a color - this 'calls' the function
// player1.addEventListener('click', color);





