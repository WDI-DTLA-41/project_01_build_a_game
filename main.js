var board = document.querySelector('.board');
var boxes = document.querySelectorAll('.box');

var hBars = [
  [1,2],
  [3,4],
  [5,6]
];
var vBars = [
  [1,2,3],
  [4,5,6]
];
var boxes = [
  [1,2],
  [3,4]
];

var players = [
  {
    name: p1
  },
  {
    name: p2
  }
];

var p1;
var p2;

var input1 = document.querySelector('.p1');
var input2 = document.querySelector('.p2');

input1.addEventListener('keyup', e => {
  console.log('code', e.keyCode);
  if (e.keyCode === 13) {
    input2.focus();
    p1 = e.target.value;
  }
})
input2.addEventListener('keyup', e => {
  console.log('code', e.keyCode);
  if (e.keyCode === 13) {
    p2 = e.target.value;
  }
})


var handleClick = e => {
  var position = this.dataset;
}





























// via http://stackoverflow.com/questions/37010277/cannot-push-element-to-array-after-using-queryselectorall
// boxes.forEach.call(document.querySelectorAll('.box'), function(e){
//         boxes.push(e);
// });

// var bars = [];
// bars.forEach.call(document.querySelectorAll('.bar'), function(e){
//         bars.push(e);
// });
