var board = document.querySelector('.board');
var boxes = document.querySelectorAll('.box');
var input1 = document.querySelector('.p1');
var input2 = document.querySelector('.p2');
var $divs = document.querySelectorAll('.divs');

var bars = [];
var boxes = [];


var players = [
  {
    name: null
  },
  {
    name: null
  }
];



input1.addEventListener('keyup', e => {
  if ( e.keyCode === 13 ) {
    input2.focus();
    players[0].name = e.target.value;
  }
})
input2.addEventListener('keyup', e => {
  if ( e.keyCode === 13 ) {
    players[1].name = e.target.value;
  }
})



// via http://stackoverflow.com/questions/37010277/cannot-push-element-to-array-after-using-queryselectorall
bars.forEach.call(document.querySelectorAll('.bar'), function(e){
        bars.push(e);
});
boxes.forEach.call(document.querySelectorAll('.box'), function(e){
        boxes.push(e);
});

board.addEventListener('click', function(e){
  if (e.target.classList.contains('h') || e.target.classList.contains('v')){
    e.target.classList.add('clicked-bar');
  }
});

board.addEventListener('click', function(e){
  if ( (e.target.classList.contains('h') || e.target.classList.contains('v') ) &&
        bars[0].classList.contains('clicked-bar') && bars[2].classList.contains('clicked-bar') &&
        bars[3].classList.contains('clicked-bar') && bars[5].classList.contains('clicked-bar') ) {
          boxes[0].classList.add('player1');
  };
  if ( (e.target.classList.contains('h') || e.target.classList.contains('v') ) &&
        bars[1].classList.contains('clicked-bar') && bars[3].classList.contains('clicked-bar') &&
        bars[4].classList.contains('clicked-bar') && bars[6].classList.contains('clicked-bar') ) {
          boxes[1].classList.add('player1');
  };
  if ( (e.target.classList.contains('h') || e.target.classList.contains('v') ) &&
        bars[5].classList.contains('clicked-bar') && bars[7].classList.contains('clicked-bar') &&
        bars[8].classList.contains('clicked-bar') && bars[10].classList.contains('clicked-bar') ) {
          boxes[2].classList.add('player1');
  };
  if ( (e.target.classList.contains('h') || e.target.classList.contains('v') ) &&
        bars[6].classList.contains('clicked-bar') && bars[8].classList.contains('clicked-bar') &&
        bars[9].classList.contains('clicked-bar') && bars[11].classList.contains('clicked-bar') ) {
          boxes[3].classList.add('player1');
  };
});
