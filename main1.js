// console.log("hi");
// global vbles
function getCard(s, v) {

  return {
    suite: s,
    value: v,
    code: String(v) + s
    }
}



var deckCount = 52;
var drawnCards = [];



// functions
function drawCard() {
  var card = {code: "NOT DRAWN"};

  while(drawnCards.includes(card.code)) {
    var suite = getRandomFromArray(SUITES);
    var val = getRandomFromArray(VALUES);
  card = getCard(suite, val);
  }

  drawnCards.push(card.code);
  return card;

//  make a card
  function getRandomArbitrary(min, max){
    return Math.random() * (max-min) + min;
  }

console.log('getRandomArbitrary(1, 4)');
  //get random combo of suite + value

  // check if drawn; if drawn, get another
  // insert into drawn
  // return card
}







  var button = document.querySelector('.deal');

  function deal() {
    // console.log('dealt');
  }

  button.addEventListener('click', deal);

  // button.addEventListener('click', function(e){
  //     var newCard = document.createElement('div');
  //     var faceDown = document.createElement('div');
  //     var player1=  document.createElement('div');
  //     var player2 = document.createElement('div');
  //     faceDown.classList.add('dealer');
  //     // console.log('click');
  //     document.body.appendChild(newCard);
  //     document.body.appendChild(faceDown);
  // })
