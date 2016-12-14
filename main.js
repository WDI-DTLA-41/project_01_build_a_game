// query selector
var square = document.querySelectorAll('.square');
var color1 = 'color1';
var color2 = 'color2';
var colorHolder = color1;
var button = document.querySelector('button');


var board = [
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null]
];

var isThisOneEmpty = function(row, col) {
  if (this.position !== color1 || color2){
    console.log('true');
    return true;
  } else {
    return false;
  }
}

// var checkTheOneBelow = function(row, col){
//   if

// }
// checkTheOneBelow(3, 4) // true
// checkTheOneBelow(3, 3) // false



// add class on click
function onClick(evt){
  console.log(this.target); //same
  var position = this.dataset;
  // console.log(board[position.row][position.col]);
  console.log('position: ', position);
  console.log('column: ', position.col);
  console.log('row: ', position.row);




  console.log('add color to: ', this);
  if (colorHolder == color1) {
    colorHolder = color2;
    // console.log(this);
    // adds .color1

    this.setAttribute('class', 'color1');
    // prevents second click
    this.removeEventListener('click', onClick);
  } else {
    colorHolder = color1;
      // console.log(this);
    // adds .color2
    this.setAttribute('class', 'color2');
    //prevents second click
    this.removeEventListener('click', onClick);
  }
}


// adds event listeners to individual square
square.forEach(function(element){
  // console.log(element);
  element.addEventListener('click', onClick);
});
