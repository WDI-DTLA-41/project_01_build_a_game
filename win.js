var winColor1 = [ ];
var winColor2= [ ];

var win = function (position) {
  console.log(position.className);
  console.log("the other here i am 2");
  var row = parseInt(position.row);
  var col = parseInt(position.col);
  // BOTTOM
if(board[position.col][position.row].getAttribute('color1') === board[position.col][position.row + 1].getAttribute('color1')){
    winColor1.push(board[position.col][position.row]);
    console.log(winColor1);
    console.log('position: ', position);
    console.log('class: ', position.className);
    console.log(winColor1);
  }

  console.log(winColor1);


// CHECK AROUND EVERY CLICK AND STORE INTO VARIABLE
// TOP
if(board[position.col][position.row].getAttribute('color1') === board[position.col][position.row - 1].getAttribute('color1'))

// TOP RIGHT
if(board[position.col][position.row].getAttribute('color1') === board[position.col + 1][position.row - 1].getAttribute('color1'))

//RIGHT
if(board[position.col][position.row].getAttribute('color1') === board[position.col + 1][position.row].getAttribute('color1'))

// BOTTOM RIGHT
if(board[position.col][position.row].getAttribute('color1') === board[position.col + 1][position.row + 1].getAttribute('color1'))

// BOTTOM
if(board[position.col][position.row].getAttribute('color1') === board[position.col][position.row + 1].getAttribute('color1'))

// BOTTOM LEFT
if(board[position.col][position.row].getAttribute('color1') === board[position.col - 1][position.row + 1].getAttribute('color1'))

// LEFT
if(board[position.col][position.row].getAttribute('color1') === board[position.col - 1][position.row].getAttribute('color1'))

// TOP LEFT
if(board[position.col][position.row].getAttribute('color1') === board[position.col - 1][position.row - 1].getAttribute('color1'))



TOP WIN
if(board[position.col][position.row].getAttribute('color1') === board[position.col][position.row - 1].getAttribute('color1') &&
  (board[position.col][position.row].getAttribute('color1') === board[position.col][position.row - 2].getAttribute('color1') &&
    (board[position.col][position.row].getAttribute('color1') === board[position.col][position.row - 3].getAttribute('color1')) {
        console.log('win');
      }


board syntax
getting class color1 || Color2
console.log('win')
