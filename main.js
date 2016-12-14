var $gamePiece = document.querySelector('.gamePiece');
var red = document.querySelector('#red');
var yellow = document.querySelector('#yellow');
var blue = document.querySelector('#blue');
var green = document.querySelector('#green');
var simonSequence = [];
var simonGeneratorIndex = [red, green, yellow, blue];
var userSequence = [];
var sequenceLength = 1;
var $streak = document.querySelector('#streak');
var streak = 0;
var $start = document.querySelector('#start');
var $restart = document.querySelector('#restart');
var colorToLight
// = [{}];

// find a way to make Simon play his sequence
var generateSimonSequence = function(){
  var randomColor = Math.floor(Math.random() * 4);
  simonSequence.push(simonGeneratorIndex[randomColor]);
  console.log('simon sequence: ', simonSequence);
};

// var dimIt = function(n){
//   setTimeout(function(){
//   n.classList.remove('light');
// }, 1000);
// };
var lightIt = function(n){n.classList.add('light');}
var dimIt = function(n){n.classList.remove('light');}


var flashLight = function(){
  generateSimonSequence();
  var timeOutVar1;
  var timeOutVar2;
  for(var i = 0; i<simonSequence.length; i++){
    setTimeout(lightIt(simonSequence[i]), 1000*timeOutVar1);
    timeOutVar1++;

    setTimeout(dimIt(simonSequence[i]), 1000*timeOutVar2);
    timeOutVar2++;

    // dimIt(simonSequence[i]);
  }
};

// maybe need to use setInterval that can iterate through simon sequence
// setInterval so every second, a new color is passed in to a setTimout and clearTimeout
// setInterval can take a fxn. Make it take a function that takes a new elem from
// simonsequence, make it light, clearTimout after a var==1000 every var=1000



// check if user == simon
// need live feed on user sequence
// -- user needs to be notified on first wrong input, not after whole sequence is attempted
var sequenceMatch = function(){
  for(var i = 0; i<simonSequence.length; i++){
    if (simonSequence[i].getAttribute('id') !== userSequence[i]) {
      streak = 0;
      $streak.textContent = streak;
      sequenceLength = 1;
      return false;
    };
  };
  streak++;
  $streak.textContent = streak;
  // if (sequenceLength===31){
    sequenceLength++;
  // }else {
  //   alert("You win!");

  // };
  return true;
}

// then find a way to make Simon's play initiate after user hits start button
$start.addEventListener('click', flashLight);

var handleUserSequence = function(event){
  userSequence.push(event.target.getAttribute('id'));
  console.log('user sequence: ', userSequence);
  if(simonSequence.length === userSequence.length){
    if(sequenceMatch()){
    userSequence = [];
    flashLight();
    };
  };
};

  // $start.setAttribute('visibility', 'hidden');
  // $restart.setAttribute('visility', 'visible');

$gamePiece.addEventListener('click', handleUserSequence);



