console.log('meow');


//define card value and suite
var value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q','K','A'];
var suit = ["Spades", "Hearts", "Clubs", "Diamonds"];

var deck = [];

var createDeck = function(){
  // loops through 2 - A
  for (var i = 0; i < value.length; i++) {
    // loops spades - diamonds
    for (var j = 0; j < suit.length; j++) {
      var card = {value: value[i], suit: suit[j]}
      deck.push(card)
    }
  }
}












//createDeck will run the for loop, four times, for each suite

//for loop to go from 1 - 13
//add the object 'card' and add it to deck array
//use for loop to individual suites - hearts
// each time you go through the full loop

//need the value and suite












