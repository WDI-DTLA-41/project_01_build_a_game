var $gamePiece = document.querySelector('.gamePiece');
var $red = document.querySelector('#red');
var $yellow = document.querySelector('#yellow');
var $blue = document.querySelector('#blue');
var $green = document.querySelector('#green');
var simonSequence = [];
var simonGeneratorIndex = [$red, $green, $yellow, $blue];
var consoleSequence = [];
var userSequence = [];
var clickCount = 0; //checks simonSequence at currentcolor idx
var sequenceLength = 1;
var $streak = document.querySelector('#streak');
var streak = 0;
var $record = document.querySelector('#record');
var record = 0;
var $start = document.querySelector('#start');
var $restart = document.querySelector('#restart');
var $loss = document.querySelector('#loss');
var $win = document.querySelector('#win');


var lightIt = function(n){
  simonSequence[n].classList.add('light');
};

var dimIt = function(n){
  setTimeout(function(){
    simonSequence[n].classList.remove('light');
  }, 700);
};



var lightEmAndDimEm = function(arr, i=0){
  // colorUnClickable();
  setTimeout(function(){
  if(i===arr.length){
    console.log("simonSequence flashing complete");
    // colorClickable();
  } else {
    lightIt(i);
    dimIt(i);
    i++;
    setTimeout(function() {
      lightEmAndDimEm(arr, i);
    }, 700)
  };
}, 400);
};


// find a way to make Simon play his sequence
var generateSimonSequence = function(){
  userSequence = [];
  var randomColor = Math.floor(Math.random() * 4);
  simonSequence.push(simonGeneratorIndex[randomColor]);
  console.log('simonSequence: ', consoleSimonSequence());
  lightEmAndDimEm(simonSequence);
  $start.classList.add("hide");
  $restart.classList.remove("hide");
};


// generates a more readable simonSequence for developer reading console.log
var consoleSimonSequence = function(){
  consoleSequence = [];
  simonSequence.map(function(e){
    consoleSequence.push(e.getAttribute('id'));
  });
  return consoleSequence;
}


var loss = function(){

}

/**
  * builds and analyzes user's inputted array versus the computer-built array
  * @param {Object} event - represents element that is clicked on
  * @return {Object}
*/
var handleUserSequence = function(event){
  userSequence.push(event.target.getAttribute('id'));
  console.log('userSequence: ', userSequence);
    if(consoleSequence[clickCount] !== userSequence[clickCount]){
      clickCount = 0;
      console.log('lose');
      simonSequence = [];
      streak = 0;
      $streak.textContent = 0;
      generateSimonSequence();
    } else if(consoleSequence[clickCount] === userSequence[clickCount]
      && consoleSequence.length === userSequence.length){
      console.log('win');
      userSequence = [];
      clickCount = 0;
      streak++;
      $streak.textContent = streak;
      if(record<streak){
        record = streak;
        $record.textContent = record;
      }
      generateSimonSequence();
    } else if(userSequence.length !== consoleSequence.length){
      clickCount ++ ;
    };

};



var handleRestart = function(){
  for(var i = 0; i<simonGeneratorIndex.length; i++){
  simonGeneratorIndex[i].classList.remove('light');
  };
  streak=0;
  $streak = streak;
  simonSequence = [];
  generateSimonSequence();
};

$start.addEventListener('click', generateSimonSequence);

for(var i = 0; i<simonGeneratorIndex.length; i++){
  simonGeneratorIndex[i].addEventListener('click', handleUserSequence);
};

$restart.addEventListener('click', handleRestart);

