
var suits = ['hearts', 'clubs', 'spades', 'diamonds'];
var cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
// var cardValues = [11, 7, 7, 11, 11];
var names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];


// function to render DEALER cards to html
var cardPrintDealer = function(user) {
  var img = document.createElement('img');
  // img.setAttribute("class", "card");
  // img.src = '/playing_cards' + card.name + '/' + card.size;
  img.src = 'assets/playing_cards/' + user.name + '_of_' + user.suit + '.png';
  img.style.height = "110px";
  img.style.width = "75.68px";
  // img.classList.add('card');

  $dealArea.appendChild(img);
}

// function to render PLAYER cards to html
var cardPrintPlayer = function(user) {
  var img = document.createElement('img');
  // img.setAttribute("class", "card");
  // img.src = '/playing_cards' + card.name + '/' + card.size;
  img.src = 'assets/playing_cards/' + user.name + '_of_' + user.suit + '.png';
  img.style.height = "110px";
  img.style.width = "75.68px";

  $userArea.appendChild(img);
}

//function to render back of card
var cardBack = function () {
  cardBackImg = document.createElement('img');
  cardBackImg.src = 'assets/playing_cards/cardback1.png',
  cardBackImg.style.height = "110px",
  cardBackImg.style.width = "75.68px";
  $dealArea.appendChild(cardBackImg);

};

//function to remove back of card
var cardBackRemove = function() {
 if ($dealArea.contains(cardBackImg)) {
  $dealArea.removeChild(cardBackImg);
};
};

//function to remove appended cards from both dealer and player areas
var clearPlayingArea = function() {
  $userArea.innerHTML = "";
  $dealArea.innerHTML = "";
  $outcome.innerHTML = "";

}


========  css


.card {
  /*display:inline-block;
  text-align:center;
  margin:5px;
  padding:15px;
  vertical-align: center;
  line-height: 70px;
  width:70px;
  height:101.7px;
  /*font-size:22px;
  background-color:#999999;*/
  border: solid 1px black;
  /*box-shadow: 10px 10px 5px #888888;*/
}

=========html
    <div class="user">Your Cards
      <div class="userscore">Your Score: <span class="pscore"></span></div>
      <div class="userarea">
        <!-- <div class="card">Q ♣</div>
        <div class="card">5 ♣</div> -->
      </div>
    </div>
  </div>










