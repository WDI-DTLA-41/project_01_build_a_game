// query selector
var color1 = 'color1';
var color2 = 'color2';
var colorHolder = color1;

var square = document.querySelectorAll('.square');
var button = document.querySelector('#clear');


var board = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null]
];

var isThisOneEmpty = function(position) {
  console.log("this is empty");
  var row = parseInt(position.row);
  var col = parseInt(position.col);
  return board[row][col] === null;
}

var checkTheOneBelow = function(position){
  var row = parseInt(position.row) + 1;
  var col = parseInt(position.col);
  if (position.row == 5) {
    console.log("row 5 you can move")
    return true;
  } else {
    return board[row][col] !== null;
  }
}


// add class on click
function onClick(evt){

  console.log(this); //same
  var position = this.dataset;
  // console.log(board[position.row][position.col]);
  console.log('position: ', position);
  console.log('column: ', position.col);
  console.log('row: ', position.row);

  if (isThisOneEmpty(position) && checkTheOneBelow(position)) {
    // if the square is empty and the one below it is not empty
    // then we can mark that square


    if (colorHolder == color1) {
      colorHolder = color2;
      // console.log(this);
      // adds .color1
      this.setAttribute('class', 'color1');
      // prevents second click
    } else {
      colorHolder = color1;
        // console.log(this);
      // adds .color2
      this.setAttribute('class', 'color2');
      //prevents second click
    }
    this.removeEventListener('click', onClick);
    board[position.row][position.col] = colorHolder;
  }
}


// adds event listeners to individual square
square.forEach(function(element){
  // console.log(element);
  element.addEventListener('click', onClick);
});

// clear divs with button click
var clear = function(){
 // square.classList.remove("color1");
 console.log('click')
}

button.addEventListener('click', clear);
