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
var reset = document.querySelector(".reset");

// ARRAY: Store classes of cards here
var cards = ["darthvader", "hansolo", "luke", "leia", "yoda", "bobafett"];
// var cards = ["darthvader"];

// =============================================
//    PLACING A BET
// =============================================


// =============================================
//    RESET CLASSES FOR NEW TURN
// =============================================

var removeClasses = function(event) {
  // spin.removeEventListener("click", removeClasses);
  one.classList = "";
  two.classList = "";
  three.classList = "";
  spinReel();
}

// =============================================
//    "SPINNING" THE REEL
// =============================================

var spinReel = function(event) {
  // ADDS CSS ANIMATION ID TO EACH SLOT
  one.setAttribute("id", "spin-one");
  two.setAttribute("id", "spin-two");
  three.setAttribute("id", "spin-three");
  stopReel();
};

// =============================================
//    RANDOMLY SELECTS CLASSES FOR SLOTS
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
//    COMPARING THE SLOTS
// =============================================

  var compareSlots = function() {
    // WHEN REELS HAVE STOPPED, COMPARE THE CLASS VALUES
    // compare the values for 3-way match

    // IF ALL 3 MATCH (1 == 2 && 1 == 3 && 2 == 3) ==> WIN
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
        var quote = document.querySelector("h2");
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
        var quote = document.querySelector("h2");
        quote.textContent = '"If no mistake have you made, yet losing you are ... a different game you should play."';
      }
    }
  }
  compareSlots();

// WHEN PLAYER PUSHES BUTTON TO SPIN
  // **EVENT LISTENER ON BUTTON**
};
spin.addEventListener("click", removeClasses);


// =============================================
//    NEXT TURN
// =============================================

// Click PLAY AGAIN to:
  // REMOVE ID'S FROM
var reloadPage = function(event) {
  location.reload();
}
reset.addEventListener("click", reloadPage);


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




