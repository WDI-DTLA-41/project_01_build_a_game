// query selector
var square = document.querySelectorAll('.square');
var color1 = 'color1';
var color2 = 'color2';
var colorHolder = color1;
var button = document.querySelector('button');


var board = [
  [0, 1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12, 13],
  [14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27],
  [28, 29, 30, 31, 32, 33, 34],
  [35, 36, 37, 38, 39, 40, 41]
];





// add class on click
function onClick(evt){
  console.log(this.target, this); //same
  var position = this.dataset;
  console.log(board[position.row][position.col]);




  console.log(this);
  if (colorHolder == color1) {
    colorHolder = color2;
    console.log(this);
    // adds .color1
    this.setAttribute('class', 'color1');
    // prevents second click
    this.removeEventListener('click', onClick);
  } else {
    colorHolder = color1;
      console.log(this);
    // adds .color2
    this.setAttribute('class', 'color2');
    //prevents second click
    this.removeEventListener('click', onClick);
    console.log(colorHolder + "othrer color")
  }
}


// adds event listeners to individual square
square.forEach(function(element){
  console.log(element);
  element.addEventListener('click', onClick);
});
