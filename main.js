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
  for (var i = 0; i < board.length; i++) {
    if (this.position === color1 && color2){
    console.log('true');
    return true;
  } else {
    console.log('false');
    return false;
  }
}
  }
isThisOneEmpty(2, 2)

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////


var checkTheOneBelow = function(row, col){
  if(this.position - 6 === color1 && color2){
    console.log('true');
    return true;
  } else {
    console.log('false');
    return false;
  }
}

checkTheOneBelow()

checkTheOneBelow(3, 4) // true

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

// add class on click
function onClick(evt){
  console.log(this); //same
  var position = this.dataset;
  // console.log(board[position.row][position.col]);
  console.log('position: ', position);
  console.log('column: ', position.col);
  console.log('row: ', position.row);


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


                var isThisOneEmpty = function(row, col) {
                  for (var i = 0; i < board.length; i++) {
                      if (this.position === color1 && color2){
                    console.log('true');
                    return true;
                  } else {
                    console.log('false');
                    return false;
                  }
                }
                  }
                isThisOneEmpty()
}


// adds event listeners to individual square
square.forEach(function(element){
  // console.log(element);
  element.addEventListener('click', onClick);
});
