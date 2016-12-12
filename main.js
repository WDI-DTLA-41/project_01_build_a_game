var board = document.querySelector('.board');
var bars = [];

// via http://stackoverflow.com/questions/37010277/cannot-push-element-to-array-after-using-queryselectorall
bars.forEach.call(document.querySelectorAll('.bar'), function(e){
        bars.push(e);
});

board.addEventListener('click', function(e){
  if (e.target.classList.contains('h') || e.target.classList.contains('v')){
    e.target.classList.add('clicked-bar');
  }
});
