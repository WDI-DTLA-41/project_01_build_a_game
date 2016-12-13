var board = document.querySelector('.board');
var boxes = document.querySelectorAll('.box');
var bars = [];
var boxes = [];

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
  }
})
