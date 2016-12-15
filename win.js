var winColor1 = [ ];
var winColor2= [ ];

var win = function (position) {
  var row = parseInt(position.row);
  var col = parseInt(position.col);
  if (this.position.className === color1 && (this.position.col) -1 === color1){
    winColor1.push();
    console.log('position: ', position);
  }
  if (this.position.className === color1 && (this.position.col - 1, this.position.row) === color1){
    winColor1.push();
    console.log('position: ', position);
  }
  if (this.position.className === color1 && (this.position.row) -1 === color1){
    winColor1.push();
    console.log('position: ', position);
  }
  if (this.position.className === color1 && (this.position.col + 1, this.position.col-1) === color1){
    winColor1.push();
    console.log('position: ', position);
  }
  if (this.position.className === color1 && (this.position.col) + 1 === color1){
    winColor1.push();
    console.log('position: ', position);
  }
}
