console.log("meow");

// =============================================
//    VARIABLES NEEDED
// =============================================

// vars for each card slot
var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");

// var for buttons
// var tryBtn = document.querySelector(".try");
var plusOne = document.querySelector(".plus-one");
var placeBet = document.querySelector(".place-bet");
var spin = document.querySelector(".spin");
var playAgain = document.querySelector(".play-again");

// var for h2 header quote
var quote = document.querySelector("h2");

// var for bet counter
var betAmount = document.querySelector(".bet-amount");

// var for score counter
var score = document.querySelector(".total-score");
var scoreVal = parseInt(score.textContent);

// ARRAY: Store classes of cards here
// var cards = ["darthvader", "hansolo", "luke", "leia", "yoda", "bobafett"];
var cards = ["darthvader"];

// =============================================
//    1. PLACE A BET
// =============================================

var betTotal;

var addOne = function(event) {
// Add 1 to the value in span.bet-amount
  console.log(betAmount.textContent);
  // CONVERT TEXT IN betAmount PLACEHOLDER TO NUMBER
  var betValue = parseInt(betAmount.textContent);
  // ADD 1 TO THE VALUE, STORE IN betTotal VAR
  var betTotal = betValue + 1;
  // UPDATE betAmount
  betAmount.textContent = betTotal;
  return betTotal;
}
// RUN WHEN BET +1 BUTTON IS PRESSED
plusOne.addEventListener("click", addOne);
console.log(betAmount.textContent);

// placeBet();

// =============================================
//    2. "SPIN" THE REEL
// =============================================

var spinReel = function(event) {
  // ADDS CSS ANIMATION ID TO EACH SLOT
  one.setAttribute("id", "spin-one");
  two.setAttribute("id", "spin-two");
  three.setAttribute("id", "spin-three");
  // debugger;
  stopReel();
  // setTimeout(stopReel,2000);
};

// =============================================
//    3. RANDOMLY SELECTS CLASSES FOR SLOTS
// =============================================

// var slots = document.querySelectorAll("div");
var slots = document.querySelectorAll("div");

var oneVal;
var twoVal;
var threeVal;

var stopReel = function() {

  // FOR EACH SLOT, LOOP THROUGH ARRAY OF "cards"
  for (var i=0; i < slots.length; i++) {

    // RANDOMLY SELECTS A COLOR FROM ARRAY
    var randomSelect = function() {
      // RETURNS THE COLOR VALUE
      return cards[Math.floor(Math.random() * cards.length)];
    }

    // STORES COLOR VALUE INTO VARIABLE
    var selected = randomSelect();

    // SETS THE SELECTED COLOR VALUE AS A CLASS TO CHANGE SLOT COLOR
    slots[i].classList.add(selected);
    // console.log(slots[i].classList);

    // STORE CLASSES AS VALUES INTO VARIABLES
    var oneVal = slots[0].classList.value;
    var twoVal = slots[1].classList.value;
    var threeVal = slots[2].classList.value;
  }

// =============================================
//    4. COMPARING THE SLOTS
// =============================================

  var compareSlots = function() {
    // WHEN REELS HAVE STOPPED, COMPARE THE CLASS VALUES
    // compare the values for 3-way match

    // IF ALL 3 MATCH (1 == 2 && 1 == 3 && 2 == 3) ==> ** WIN **
    if (oneVal === twoVal && oneVal === threeVal && twoVal === threeVal) {
      console.log("winner!");
      // SET CHARACTERS FROM THEME
        // IF ALL 3 ARE THE SAME CHARACTER
        // APPEND IMG TO THE DIVS
        // H1 TEXTCONTENT = QUOTE FROM MOVIE
      setTimeout(function() {
        revealQuoteWin();
      }, 2800);

      var revealQuoteWin = function() {
        quote.textContent = '"The force is strong with this one."';
      }
    } else {
    // ELSE ==> YOU LOSE
      // APPEND H2 TO PAGE
      // H2 TEXTCONTENT = QUOTE FROM MOVIE (ABOUT LOSING)
      console.log("you lose :(");

      setTimeout(function() {
        revealQuoteLose();
      }, 2800);

      var revealQuoteLose = function() {
        quote.textContent = '"If no mistake have you made, yet losing you are ... a different game you should play."';
      }
    }
  }
  compareSlots();
};
// WHEN PLAYER PUSHES BUTTON TO SPIN
  // **EVENT LISTENER ON BUTTON**
spin.addEventListener("click", spinReel);

// =============================================
//    5. TOTAL SCORE
// =============================================

var totalScore = function() {
  if (oneVal === twoVal && oneVal === threeVal && twoVal === threeVal) {




  }
}


// =============================================
//    6. NEW TURN
// =============================================

// Click PLAY AGAIN to:
var newTurn = function(event) {
  // location.reload();

  // RESETS H2 QUOTE
  quote.textContent = "The Force, it's calling to you. Just let it in.";

  // RESETS CLASSES OF SLOT DIVS
  one.classList = "";
  two.classList = "";
  three.classList = "";

  // REMOVES SLOT ANIMATION ID'S
  one.removeAttribute("id", "spin-one");
  two.removeAttribute("id", "spin-two");
  three.removeAttribute("id", "spin-three");

  // RESETS BET COUNTER TO $1
  betAmount.textContent = 1;
}
playAgain.addEventListener("click", newTurn);

// =============================================
//    RESET ENTIRE BOARD & START OVER
// =============================================

// var removeClasses = function(event) {
//   // spin.removeEventListener("click", removeClasses);
//   one.classList = "";
//   two.classList = "";
//   three.classList = "";
//   spinReel();
// }

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




