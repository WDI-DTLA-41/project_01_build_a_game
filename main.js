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

// ARRAY: Store class colors here
var colors = ["red", "blue", "yellow", "purple", "green"];
// var colors = ["green"];

// =============================================
//    "SPINNING" THE REEL
// =============================================

var removeClasses = function(event) {
  // spin.removeEventListener("click", removeClasses);

  one.classList = "";
  two.classList = "";
  three.classList = "";

  // one.removeAttribute("id", "spin-one");
  // two.removeAttribute("id", "spin-two");
  // three.removeAttribute("id", "spin-three");

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

  // FOR EACH SLOT, LOOP THROUGH ARRAY OF "COLORS"
  for (var i=0; i < slots.length; i++) {

    // RANDOMLY SELECTS A COLOR FROM ARRAY
    var selectColor = function() {

    // RETURNS THE COLOR VALUE
    return colors[Math.floor(Math.random() * colors.length)];
    }

    // STORES COLOR VALUE INTO VARIABLE
    var selected = selectColor();
    // console.log(selected);

    // SETS THE SELECTED COLOR VALUE AS A CLASS TO CHANGE SLOT COLOR
    slots[i].classList.add(selected);
    // console.log(slots[i].classList);

    // grab the classes of each slot and store into variables as values
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
      }, 2000);

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
    if (oneVal == "green" && twoVal == "green" && threeVal == "green") {
      var quote = document.querySelector("h2");
      quote.textContent = '"Do or do not, there is no try"';
    }
  }
  // revealQuote();


  // var resetSlots = function() {
  //   // if (slots.classList.contains("red")) {
  //   //   slots.classList.remove("red");
  //   // }
  //   // if (slots.classList.contains("blue")) {
  //   //   slots.classList.remove("blue");
  //   // }
  //   // if (slots.classList.contains("yellow")) {
  //   //   slots.classList.remove("yellow");
  //   // }
  //   // if (slots.classList.contains("purple")) {
  //   //   slots.classList.remove("purple");
  //   // }
  //   // if (slots.classList.contains("green")) {
  //   //   slots.classList.remove("green");
  //   // }
  //   slots.classList = "";
  // }
  // resetSlots();
  // console.log(slots.classList);

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
//    TRY BUTTON
// =============================================

var removeTry = function() {
  var quote = document.querySelector("h2");
  quote.textContent = '"Do or do not, there is no try"';
  var buttons = document.querySelector(".buttons");
  buttons.removeChild("tryBtn");
}
tryBtn.addEventListener("click", removeTry);




