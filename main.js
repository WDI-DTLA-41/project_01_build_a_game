console.log("meow");

// =============================================
//    VARIABLES NEEDED
// =============================================

// vars for each card slot
var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");

// var for SPIN button
var spin = document.querySelector(".spin");

// ARRAY: Store class colors here
var colors = ["red", "blue", "yellow", "purple", "green"];

// =============================================
//    "SPINNING" THE REEL
// =============================================

var handleSpin = function(event) {
  // APPLIES SPIN CSS TO EACH SLOT
  one.setAttribute("id", "spin-one");
  two.setAttribute("id", "spin-two");
  three.setAttribute("id", "spin-three");

  // DETECT AND SELECT EACH "SLOT" DIV IN DOCUMENT
  var emptySlot = document.getElementsByClassName("empty");

  // FOR EACH SLOT, LOOP THROUGH ARRAY OF "COLORS"
  for (var i=0; i < emptySlot.length; i++) {

    // RANDOMLY SELECTS A COLOR FROM ARRAY
    var selectColor = function() {

    // RETURNS THE COLOR VALUE
    return colors[Math.floor(Math.random() * colors.length)];
    }
    // STORES COLOR VALUE INTO VARIABLE
    var selected = selectColor();
    console.log(selected);

    // SETS THE SELECTED COLOR VALUE AS A CLASS TO CHANGE SLOT COLOR
    emptySlot[i].classList.add(selected);
    console.log(emptySlot[i].classList);
  }
};
// WHEN PLAYER PUSHES BUTTON TO SPIN
  // **EVENT LISTENER ON BUTTON**
spin.addEventListener("click", handleSpin);


// =============================================
//    COMPARING THE SLOTS
// =============================================


// WHEN REELS HAVE STOPPED, COMPARE THE CLASSES
  // IMGS.LOADED ??



// IF ALL 3 MATCH (1 == 2 && 1 == 3 && 2 == 3) ==> WIN


// SET CHARACTERS FROM THEME
  // IF ALL 3 ARE THE SAME CHARACTER
  // APPEND H1 TO PAGE
  // H1 TEXTCONTENT = QUOTE FROM MOVIE


// ELSE ==> YOU LOSE
  // APPEND H1 TO PAGE
  // H1 TEXTCONTENT = QUOTE FROM MOVIE (ABOUT LOSING)




