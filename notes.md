blackjack logic:

Blackjack
1. Create a deck of cards
    - 52 objects each with name, value, suit
    - store in an array "the deck"
    - shuffle that array 
2. Deal 1 card facedown to dealer
3. Deal 1 card face-up to player
4. Deal 1 card face up to dealer
5. Deal 1 card face up to player
- each player gets 2 cards
- remove cards from deck
- assign to player array or "hand"
6. Calculte then Display player total
- function to calculate combined value of each player's hand
7. User has 2 options
8. Hit OR Stay
- user interact, click on button
8ai. Hit - deal player another card
8aii. Check if user bust (>21)
8aiii. Hit again - deal..
8b. OR Stay
9. After user Stays or Busts
10a. If Dealer less than 17
10ai. Dealer Hits
10b. If Dealer >17
10bi. Dealer Stays
11. Compare Dealer total with user total
12. If user higher, user wins
13. If dealer higher, dealer wins


Snippets I might need:
Math.floor(Math.random()*52+1); (Random number between 1 & 52)


Deck:
52 cards
1s & 11s: 4
10s: 16

Card: object
value: integer
suite: string 
face: null, 'king', 'jack', 'queen', 'ace'

var card = {
    value: 10,
    name: 'Ten',
    suit: 'Hearts',
    img: 
}

Functions:
1. Create & shuffle a deck of cards
2. Deal cards from deck
3. Hit function //check if 21 or less
4. Stay function

5. Total Up Card Values 
6. Compare Card values

Data:
deck
dealers hand = [];
players hand / current cards

Object needs 3 key/value pairs
name of card
suit
actual value of card

ALTERNATIVELY:
If using an array,
if index value 11,12,13, assign value of 10


function hit(hand) {
    var dealtCard = deck.shift();
    hand.push(dealtCard);
    checkScore();
}

function checkScore

Create deck how?

var suits = ['hearts', 'clubs', 'spades', 'diamonds'];
var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 10, 10, 10]
var names = ['ace', 'two', 'three'] ...

// loop through suits
    loop through values
        loop through names
            var card = {

        }
        deck.push(card)

Objects in an array
var deck = [
    {},
    {},
    {},

]

array of arrays

objects

// TEST function for deck of 10 cards 2 suits
// var tempDeck = [];
// var tempSuits = ['hearts', 'clubs'];
// var tempValues = [1, 2, 3, 4, 4];
// var tempNames = ['one', 'two', 'three', 'four', 'five'];
//   var makeTemp = function() {

//     for (var i=0; i < tempSuits.length; i++) {
//       for (var j=0; j < tempNames.length; j++) {
//       var tempCard = {};
//       tempCard.suit = tempSuits[i]
//       tempCard.name = tempNames[j];
//       tempCard.value = tempValues[j];
//       tempDeck.push(tempCard);
//     };

//     };

//   };


user.hand[].name

If user's score is less than 21
add new card value to player score
if player's score is over 21
check each card in player's hand
if a card is an ace(1), change its value to 1 & change its name to aceused
check total 
if score over 21, search for ace
if a card is an ace(2), change its value to 1 and change its name to aceused
check total
if score over 21, search for an ace
if a card is an ace(3), change its value to 1 and change its name to aceused
check total
if score over 21, search for an ace
if card is an ace(4), keep value to 11

var calculateHandOf = function(user) {
    if (user.score < 21) {
        user.score = user.score + user.hand[user.hand.length-1].value;
    }
    if (user.score > 21) {
        for (var i = 0; i < user.hand.length; i++) {
            if (user.hand[i].name == "ace") {
                user.hand[i].name = "aceused";
                user.hand[i].value = 1;
            }
        
        }
    }1) 
}

// if (user.score > 21) {
    for (var i = 0; i < user.hand.length; i++) {
      if (user.hand[i].name === "ace" && aces > 1) {
        console.log('Ace value converting to 1 from 11');
        // user.hand[i].value = 1;  //caused problem in 2 ace situation
        user.score = user.score - 10;
        aces = aces + 1;
        user.hand[i].name = "aceused";
      }
    }
  // }


toggle button javascript (value on and value off)
wikihow toggle html display with javascript

♣ Clubs
♦ Diamonds
♥ Hearts
♠ Spades


1) Card display:
    cardPrintDealer(dealer.hand[i]);
    cardPrintPlayer(player.hand[i]);
 

a) on dealCards - 
    1 face up 1 face down for dealer
    2 face up for player
b) on playerHit - 
    1 face up
c) on dealerTurn
    if dealer.score < 17

2) Button Display: DONE
a) At beginning:
    New Hand

b) After New Hand:
    Deal Cards

c) After Deal Cards:
    Hit
    Stay

d) After Stay:
    New Hand
     
3) Scores Display



var calculateHandOf = function(user) {
  user.score = user.score + user.hand[user.hand.length-1].value;
  while(user.score > 21) {
    if (!user.hand.find(findAce)) {
      return false;
    }
    var changedAce = user.hand.find(findAce);
     changedAce.value = 1;
     user.score = null;
     for (var x = 0; x < user.hand.length; x++) {
      user.score = user.score+user.hand[x].value;
     }
  }
  return user.score;
};


Button visibility for reference
  $deal.style.visibility='hidden';
  $hit.style.visibility='visible';
  $stay.style.visibility='visible';
  $newHand.style.visibility='visible';

Dealer with 2 aces scenario which worked:
Dealer Score Is:16
main.js:97 Player Score Is:14
main.js:132 Player's new score is17
main.js:146 You Stay! Dealer's Turn
main.js:169 Object {suit: "♣", name: "nine", value: 9}
main.js:171 Dealer Score is Currently 15
main.js:169 Object {suit: "♠", name: "ace", value: 11}
main.js:171 Dealer Score is Currently 16
main.js:169 Object {suit: "♣", name: "four", value: 4}
main.js:171 Dealer Score is Currently 20
main.js:175 Dealer Score is: 20
main.js:213 Dealer Wins :( Try Again!
dealer.hand
Array[5]
0: Objectname: "ace"suit: "♣"value: 1
1: Objectname: "five"suit: "♣"value: 5
2: Objectname: "nine"suit: "♣"value: 9
3: Objectname: "ace"suit: "♠"value: 1
4: Objectname: "four"suit: "♣"value: 4

Features:
deck shouldn't shuffle after every hand 

var card = {
//   name: 'fillmurray.com',
//   size: '100/100',
// }

// var img = document.createElement('img');
// img.src = 'http://' + card.name + '/' + card.size;
// document.body.append(img);

Image width-height ratio
.688

Dealing dealer just 1 card at beginning
Deal player 1 card
deal dealer 1 card
deal player 1 card
deal dealer 1 card (pop but dont show)

calculate scores

If dealer hits blackjack, show dealer second card and player loses
If dealer hits blackjack & player hits blackjack, show dealer 2nd card
and its a push
If player hits blackjack and dealer doesnt, show dealer 2nd card
else, proceed and show dealer's 2nd card after player stays

// function to compare dealer score with player's score
var dealScoreCompare = function(result) {
  if (dealer.score === 21 && player.score === 21) {
    console.log("It's a push!");
    $deal.style.visibility='hidden';
    $hit.style.visibility='hidden';
    $stay.style.visibility='hidden';
    $newHand.style.visibility='visible';
    return result;
  } else if (dealer.score === 21 && player.score < 21) {
    console.log("Dealer Hits Blackjack. Sorry, You Lose! Try Again")
    $deal.style.visibility='hidden';
    $hit.style.visibility='hidden';
    $stay.style.visibility='hidden';
    $newHand.style.visibility='visible';
    return result;
  } else if (player.score === 21 && dealer.score < 21) {
    console.log("You Hit Blackjack! You Win! Play Again")
    return result;
  }
};

Clear Playing Areas
$userArea.innerHTML = ""
$dealArea.innerHTML = ""

    150 103.2

Blur the screen
filter: blur(3px);



