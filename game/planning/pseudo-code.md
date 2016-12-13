# Psuedo-code

## Card Deck

//Create card deck

## Betting

#### Four chips: $25, $50, $100, $500 

//Keep track of what user bets
    //Subtract bet from user bank
//IF user wins return winning amount (bet x2)
//If dealer wins, keep bet

## Dealing

//Deal players first from left and right faceup
//Deal first dealer card facedown
//Deal players again left to right faceup
//Deal second dealer card faceup

//Check to see if player has a natural blackjack

//Check for dealer natural blackjack (without turning card over)

//Check for winner and pay -> new deal
    //else continue to game

## Scoring

#### User Win

//Player starts first
//On hit, player receives random card, can continue hitting until >21
//On stay, start dealer turn
//Dealer hits until >17. Dealer hits soft 17.


Deck:
52 cards
1s & 11s: 4
10s: 16

Card: object
value: integer
suite: string 
face: null, 'king', 'jack', 'queen', 'ace'

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


function hit(hand) {
   var dealtCard = deck.shift();
   hand.push(dealtCard);
   checkScore();
}

function checkScore

var deck = [
   {},
   {},
   {},

]
