
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
var cardsSplit = deckOfCards.slice(26,51);

// assign cards to player 1 and 2?
cardsSplit







// give a class
var player1 = document.querySelector('#player1');
var player2 = document.querySelector('#player2');
// put event listener on parent
var player = document.querySelector('#player');


// use .push .pop .slice .splice to cut deck in half
// example using .slice
// var a = ["zero", "one", "two", "three"];
// var sliced = a.slice(1,3);

// console.log(a);      // [ "zero", "one", "two", "three" ]
// console.log(sliced); // [ "one", "two" ]




//** create a color - this 'calls' the function
// player1.addEventListener('click', color);





