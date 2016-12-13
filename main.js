var $gamePiece = document.querySelector('.gamePiece');
var red = document.querySelector('#red');
var yellow = document.querySelector('#yellow');
var blue = document.querySelector('#blue');
var green = document.querySelector('#green');
var simonSequence = [];
var simonGeneratorIndex = ["red", "green", "yellow", "blue"];
var userSequence = [];
var sequenceLength = 4;
var $streak = document.querySelector('#streak');
var streak = 0;
var $start = document.querySelector('#start');


// find a way to make Simon play his sequence
var generateSimonSequence = function(){
  for(var i = 0; i<sequenceLength; i++){
    var randomColor = Math.floor(Math.random() * 4);
    simonSequence.push(simonGeneratorIndex[randomColor])
  };
  console.log(simonSequence);
};

var sequenceMatch = function(){
  for(var i = 0; i<simonSequence.length; i++){
    if (simonSequence[i] !== userSequence[i]) {
      streak = 0;
      $streak.textContent = streak;
      return false;
    };
  };
  streak++;
  $streak.textContent = streak;
  return true;
}

// then find a way to make Simon's play initiate after user hits start button
$start.addEventListener('click', generateSimonSequence);


var handleUserSequence = function(event){
  userSequence.push(event.target.getAttribute('id'));
  if (simonSequence.length === userSequence.length){
    sequenceMatch();
    simonSequence = [];
    userSequence = [];
    generateSimonSequence();

  };
};

$gamePiece.addEventListener('click', handleUserSequence);

  // return true;




