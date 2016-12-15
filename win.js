var win = function (position) {
  console.log(position.className);
  console.log("the other here i am 2");
  var row = parseInt(position.row);
  var col = parseInt(position.col);
  if (position.className === color1 && board[position.row][parseInt(position.col)-1] === color1){
    winColor1.push(position);
    console.log(winColor1);
    console.log('position: ', position);
    console.log('class: ', position.className);
  }

  console.log(winColor1);


  // if (this.position.className === color1 && (this.position.col - 1, this.position.row) === color1){
  //   winColor1.push();
  //   console.log('position: ', position);
  // }
  // if (this.position.className === color1 && (this.position.row) -1 === color1){
  //   winColor1.push();
  //   console.log('position: ', position);
  // }
  // if (this.position.className === color1 && (this.position.col + 1, this.position.col-1) === color1){
  //   winColor1.push();
  //   console.log('position: ', position);
  // }
  // if (this.position.className === color1 && (this.position.col) + 1 === color1){
  //   winColor1.push();
  //   console.log('position: ', position);
  // }
}
