console.log("meow");

// =============================================
//    VARIABLES NEEDED
// =============================================

// vars for each card slot
var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");

// var for buttons
var plusOne = document.querySelector(".plus-one");
var placeBet = document.querySelector(".place-bet");
var playAgain = document.querySelector(".play-again");
var reset = document.querySelector(".reset");

// var for h2 header quote
var quote = document.querySelector("h2");

var slots = document.getElementsByTagName("div");
// var slots = document.querySelectorAll("div");

// var for bet counter
var totalBet = document.querySelector(".total-bet");

// var for score counter
var totalScore = document.querySelector(".total-score");
// var totalScoreVal = parseInt(totalScore.textContent);

// =============================================
// ARRAY: Store classes of cards here
// =============================================

// var cards = ["darthvader", "hansolo", "luke", "leia", "yoda", "bobafett"];
// var cards = ["darthvader"];
var cards = ["assets/darthvader.jpg"]


// =============================================
//    1. PLACE A BET
// =============================================

/**
 * Adds 1 to bet total
 * @param {Event} event - represents click event that calls on the function
 * @return {Number} - Sum of total bet plus 1
*/

var currentBet;

var addOne = function(event) {
// Add 1 to the value in span.total-bet
  console.log(totalBet.textContent);
  // CONVERT TEXT IN totalBet PLACEHOLDER TO NUMBER
  var betValue = parseInt(totalBet.textContent);
  // ADD 1 TO THE VALUE, STORE IN betTotal VAR
  totalBet.textContent = betValue + 1;
  // UPDATE totalBet
  var currentBet = parseInt(totalBet.textContent);
  return currentBet;
}
// RUN WHEN BET +1 BUTTON IS PRESSED
plusOne.addEventListener("click", addOne);

// =============================================
//    2. "SPIN" THE REEL
// =============================================

var spin = document.querySelector(".spin");

var spinReel = function(event) {
  // spin.removeEventListener("click", spinReel);
  one.removeAttribute("class", "default");
  two.removeAttribute("class", "default");
  three.removeAttribute("class", "default");
  // ADDS CSS ANIMATION ID TO EACH SLOT
  one.setAttribute("id", "spin-one");
  two.setAttribute("id", "spin-two");
  three.setAttribute("id", "spin-three");
  // setTimeout(stopReel, 3500);
  // setTimeout(stopReel, 3000);

  stopReel();
};
// WHEN PLAYER PUSHES BUTTON TO SPIN
spin.addEventListener("click", spinReel);


// =============================================
//    3. RANDOMLY SELECTS CLASSES FOR SLOTS
// =============================================

// var oneVal;
// var twoVal;
// var threeVal;

var images = [];

var stopReel = function() {

  // FOR EACH SLOT, LOOP THROUGH ARRAY OF "cards"
  for (var i=0; i < slots.length; i++) {

    // RANDOMLY SELECTS A COLOR FROM ARRAY
    var randomSelect = function() {
      // RETURNS THE COLOR VALUE
      return cards[Math.floor(Math.random() * cards.length)];
    }

    var selected = randomSelect();

    setTimeout(function(){
      var img = document.createElement("IMG");
      img.setAttribute("src", selected);
      slots[0].appendChild(img);
      var imgSrc = img.src;
      console.log(imgSrc);
      images.push(imgSrc);
      console.log(images);
    }, 1500);

    setTimeout(function(){
      var img = document.createElement("IMG");
      img.setAttribute("src", selected);
      slots[1].appendChild(img);
      var imgSrc = img.src;
      console.log(imgSrc);
      images.push(imgSrc);
      console.log(images);
    }, 2500);

    setTimeout(function(){
      var img = document.createElement("IMG");
      img.setAttribute("src", selected);
      slots[2].appendChild(img);
      var imgSrc = img.src;
      console.log(imgSrc);
      images.push(imgSrc);
      console.log(images);

    }, 4000);

    compareSlots();

  }
  console.log(images);
    // STORES COLOR VALUE INTO VARIABLE

    // SETS THE SELECTED COLOR VALUE AS A CLASS TO CHANGE SLOT COLOR
      // slots[i].classList.add(selected);

    // STORE CLASSES AS VALUES INTO VARIABLES
    // var oneVal = slots[0].classList.value;
    // var twoVal = slots[1].classList.value;
    // var threeVal = slots[2].classList.value;
}

// =============================================
//    4. COMPARING THE SLOTS
// =============================================

  var compareSlots = function() {
    // WHEN REELS HAVE STOPPED, COMPARE THE CLASS VALUES
    // compare the values for 3-way match

    // IF ALL 3 MATCH ==> ** WIN **
    if (oneVal === twoVal && oneVal === threeVal && twoVal === threeVal) {
      console.log("winner!");
      // SET CHARACTERS FROM THEME
        // IF ALL 3 ARE THE SAME CHARACTER
        // APPEND IMG TO THE DIVS
        // H1 TEXTCONTENT = QUOTE FROM MOVIE
      setTimeout(function() {
        revealQuoteWin();
      }, 5000);

      var revealQuoteWin = function() {
        quote.textContent = '"The Force is strong with this one."';
      }

      setTimeout(addScore, 5000);

    } else {
    // ELSE ==> YOU LOSE
      // APPEND H2 TO PAGE
      // H2 TEXTCONTENT = QUOTE FROM MOVIE (ABOUT LOSING)
      console.log("you lose :(");

      setTimeout(function() {
        revealQuoteLose();
      }, 5000);

      var revealQuoteLose = function() {
        quote.textContent = '"If no mistake have you made, yet losing you are ... a different game you should play."';
      }

      setTimeout(minusScore, 5000);
    }
  compareSlots();
  }
// };

// =============================================
//    5. TOTAL SCORE
// =============================================

// GRAB THE TOTAL-BET SPAN ELEMENT
var betSpan = document.querySelector("span.total-bet");

// GRAB THE TOTAL-SCORE SPAN ELEMENT
var scoreSpan = document.querySelector("span.total-score");

var addScore = function() {
  // CONVERT THAT SPAN ELEMENT TEXT ==> INTEGER
  var betInt = parseInt(betSpan.textContent);

  // CONVERT THAT SCORE SPAN ELEMENT TEXT ==> INTEGER
  var scoreInt = parseInt(scoreSpan.textContent);

  // IF ROUND === **WIN**
  // SCORE FOR THE ROUND = 100 PTS
  var roundScore = 100;

  // MULTIPLY THE ROUND SCORE BY THE BET TOTAL
  var totalRoundScore = betInt * roundScore;

  // CONVERT TOTAL ROUND SCORE ==> INTEGER
  var totalRoundScoreInt = parseInt(totalRoundScore);

  // ADD THAT TO THE CURRENT TOTAL SCORE
  scoreSpan.textContent = scoreInt + totalRoundScoreInt;
}
// };

var minusScore = function() {

  // CONVERT THAT SPAN ELEMENT TEXT ==> INTEGER
  var betInt = parseInt(betSpan.textContent);

  // CONVERT THAT SCORE SPAN ELEMENT TEXT ==> INTEGER
  var scoreInt = parseInt(scoreSpan.textContent);

  // IF ROUND === **LOSE**
  var roundScore = -100;

  // MULTIPLY THE ROUND SCORE BY THE BET TOTAL
  var totalRoundScore = betInt * roundScore;

  // CONVERT TOTAL ROUND SCORE ==> INTEGER
  var totalRoundScoreInt = parseInt(totalRoundScore);

  // ADD THAT TO THE CURRENT TOTAL SCORE
  scoreSpan.textContent = scoreInt + totalRoundScoreInt;
};


// =============================================
//    6. NEW TURN
// =============================================

// Click PLAY AGAIN to:
var newTurn = function(event) {

  // RESETS H2 QUOTE
  quote.textContent = '"The Force, it\'s calling to you."';

  // RESETS CLASSES OF SLOT DIVS
  one.classList = "";
  two.classList = "";
  three.classList = "";

  // RESETS DEFAULT IMAGE OF SLOTS
  one.setAttribute("class", "default");
  two.setAttribute("class", "default");
  three.setAttribute("class", "default");

  // REMOVES SLOT ANIMATION ID'S
  one.removeAttribute("id", "spin-one");
  two.removeAttribute("id", "spin-two");
  three.removeAttribute("id", "spin-three");

  // RESETS BET COUNTER TO 1
  totalBet.textContent = 1;
}
playAgain.addEventListener("click", newTurn);

// =============================================
//    RESET ENTIRE BOARD & START OVER
// =============================================

var resetGame = function(event) {
  location.reload();
}
reset.addEventListener("click", resetGame);

// =============================================
//    TRY BUTTON ** OPTIONAL **
// =============================================

// var removeTry = function() {
//   var quote = document.querySelector("h2");
//   quote.textContent = '"Do or do not, there is no try"';
//   var buttons = document.querySelector(".buttons");
//   buttons.removeChild("tryBtn");
// }
// tryBtn.addEventListener("click", removeTry);




