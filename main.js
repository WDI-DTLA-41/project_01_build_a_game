console.log("meow");

// =============================================
//    VARIABLES NEEDED
// =============================================

// vars for each card slot
var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");

// var for buttons
var tryBtn = document.querySelector(".try");
var spin = document.querySelector(".spin");
var reset = document.querySelector(".reset");

// ARRAY: Store classes of cards here
var cards = ["darthvader", "hansolo", "luke", "leia", "yoda", "bobafett"];
// var cards = ["yoda"];

// =============================================
//    "SPINNING" THE REEL
// =============================================

var removeClasses = function(event) {
  // spin.removeEventListener("click", removeClasses);

  one.classList = "";
  two.classList = "";
  three.classList = "";

  handleSpin();

}

var handleSpin = function() {

  // ADDS CSS ANIMATION ID TO EACH SLOT
  one.setAttribute("id", "spin-one");
  two.setAttribute("id", "spin-two");
  three.setAttribute("id", "spin-three");

  // DETECT EACH "SLOT" DIV IN DOCUMENT
  var slots = document.getElementsByTagName("div");
  var oneVal;
  var twoVal;
  var threeVal;

  // FOR EACH SLOT, LOOP THROUGH ARRAY OF "cards"
  for (var i=0; i < slots.length; i++) {

    // RANDOMLY SELECTS A COLOR FROM ARRAY
    var selectColor = function() {

    // RETURNS THE COLOR VALUE
    return cards[Math.floor(Math.random() * cards.length)];
    }

    // STORES COLOR VALUE INTO VARIABLE
    var selected = selectColor();
    // console.log(selected);

    // SETS THE SELECTED COLOR VALUE AS A CLASS TO CHANGE SLOT COLOR
    slots[i].classList.add(selected);
    // console.log(slots[i].classList);

    // STORE CLASSES AS VALUES INTO VARIABLES
    var oneVal = slots[0].classList.value;
    var twoVal = slots[1].classList.value;
    var threeVal = slots[2].classList.value;
    // console.log(oneVal);
    // console.log(twoVal);
    // console.log(threeVal);
  }

// =============================================
//    COMPARING THE SLOTS
// =============================================

  var compareSlots = function() {
    // WHEN REELS HAVE STOPPED, COMPARE THE CLASS VALUES
    // compare the values for 3-way match

    // IF ALL 3 MATCH (1 == 2 && 1 == 3 && 2 == 3) ==> WIN
    if (oneVal == twoVal && oneVal == threeVal && twoVal == threeVal) {
      console.log("winner!");
      setTimeout(function() {
        revealQuote();
      }, 3000);

      // SET CHARACTERS FROM THEME
        // IF ALL 3 ARE THE SAME CHARACTER
        // APPEND H1 TO PAGE
        // H1 TEXTCONTENT = QUOTE FROM MOVIE
    } else {
    // ELSE ==> YOU LOSE
      // APPEND H1 TO PAGE
      // H1 TEXTCONTENT = QUOTE FROM MOVIE (ABOUT LOSING)
      console.log("you lose :(");
    }
  }
  compareSlots();

  var revealQuote = function() {
    if (oneVal == "yoda" && twoVal == "yoda" && threeVal == "yoda") {
      var quote = document.querySelector("h2");
      quote.textContent = '"Do or do not, there is no try"';
    }
  }
  // revealQuote();

};
// WHEN PLAYER PUSHES BUTTON TO SPIN
  // **EVENT LISTENER ON BUTTON**
spin.addEventListener("click", removeClasses);


// =============================================
//    PLAY AGAIN
// =============================================

// Click PLAY AGAIN to reload the page
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




