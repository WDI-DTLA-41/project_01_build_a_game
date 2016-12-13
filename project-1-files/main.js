console.log("meow");

// =============================================
//    VARIABLES NEEDED
// =============================================

// vars for each card slot
var one = document.querySelector(".one");
var two = document.querySelector(".two");
var three = document.querySelector(".three");

// vars for setting/removing each card class
// .classList.remove("empty");
// .classList.add("red");
// .classList.add("blue");
// .classList.add("yellow");

// vars for each card class / array item
// var red = document.classList.contains("red");
// var blue = document.classList.contains("blue");
// var yellow = document.classList.contains("yellow");

// ARRAY: Store class colors here
var colors = ["red", "blue", "yellow"];

// RANDOMLY SELECTS A CLASS COLOR
var selectColor = function() {
  colors[Math.floor(Math.random() * colors.length)];
}
console.log(selectColor());
// var selected = selectColor.value;


// LOOPING THROUGH THE SLOTS
var emptySlot = document.getElementsByClassName("empty");
for (var i=0; i < emptySlot.length; i++) {
  console.log(emptySlot[i].classList);
  emptySlot[i].classList = selectColor();

}



// =============================================
//    "SPINNING" THE REEL
// =============================================

// WHEN PLAYER PUSHES BUTTON TO SPIN
  // **EVENT LISTENER ON BUTTON**


// FOR EACH SLOT, LOOP THROUGH ARRAY OF "CARDS"



// SELECT RANDOM CARD CLASS FROM ARRAY




// APPLY THAT CARD CLASS TO THE SLOT



// DELAY "SPINS" SO THAT SLOT 3 STOPS LAST




// =============================================
//    COMPARING THE SLOTS
// =============================================


// WHEN REELS HAVE STOPPED, COMPARE THE CLASSES
  // IMGS LOADED ??



// IF ALL 3 MATCH (1 == 2 && 1 == 3 && 2 == 3) ==> WIN



// IF ALL 3 ARE DIFFERENT (1 !== 2 && 1 !== 3 && 2 !== 3) ==> WIN



// ELSE ==> YOU LOSE




// NEXT STEPS
  // ADD PLAYER 2
  // ADD POINT COUNTER & BETTING







