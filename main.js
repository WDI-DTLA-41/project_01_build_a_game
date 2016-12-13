console.log('meow');


//using Stack to organize data in sequential order
function Stack() {
  //Action Item - create an empty array of cards

 this.cards = new Array();
  this.makeDeck  = stackMakeDeck;
  this.shuffle   = stackShuffle;
  this.deal      = stackDeal;
  this.draw      = stackDraw;
  this.addCard   = stackAddCard;
  this.combine   = stackCombine;
  this.cardCount = stackCardCount;
}

// creates a full deck of cards in the stack
function stackMakeDeck() {
  var ranks = ('A', '2', '3,', '4', '5', '6', '7', '8', '9', '10',
   'J', 'Q', 'K');
  var suits =
}
