var $color = document.querySelectorAll('.color');
var $red = document.querySelector('#red');
var $yellow = document.querySelector('#yellow');
var $blue = document.querySelector('#blue');
var $green = document.querySelector('#green');
var simonSequence = [];
var simonGeneratorIndex = [$red, $green, $yellow, $blue];
var userSequence = [];
var sequenceLength = 1;
var $streak = document.querySelector('#streak');
var streak = 0;
var $record = document.querySelector('#record');
var record = 0;
var $start = document.querySelector('#start');
var $restart = document.querySelector('#restart');
// var colorToLight;
// = [{}];

// find a way to make Simon play his sequence
var generateSimonSequence = function(){
  // colorUnClickable();
  userSequence = [];
  var randomColor = Math.floor(Math.random() * 4);
  simonSequence.push(simonGeneratorIndex[randomColor]);
  console.log('simonSequence: ', consoleSimonSequence());
  lightEmAndDimEm(simonSequence);
  $start.classList.add("hide");
  $restart.classList.remove("hide");
  colorClickable();
};


// generates a more readable simonSequence for developer reading console.log
var consoleSimonSequence = function(){
  var consoleSequence = [];
  simonSequence.map(function(e){
    debugger
    consoleSequence.push(e.getAttribute('id'));
  });
  return consoleSequence;
}

var lightIt = function(n){
  simonSequence[n].classList.add('light');
};

var dimIt = function(n){
  setTimeout(function(){
    simonSequence[n].classList.remove('light');
  }, 700);
};



var lightEmAndDimEm = function(arr, i=0){
  colorUnClickable();
  setTimeout(function(){
  if(i===arr.length){
    console.log("simonSequence flashing complete");
    colorClickable();
  } else {
    lightIt(i);
    dimIt(i);
    i++;
    setTimeout(function() {
      lightEmAndDimEm(arr, i);
    }, 900)
  };
}, 1000);
};

// check if user == simon
// need live feed on user sequence
// -- user needs to be notified on first wrong input, not after whole sequence is attempted
var sequenceMatch = function(){
  for(var i = 0; i<simonSequence.length; i++){
    if (simonSequence[i].getAttribute('id') !== userSequence[i]) {
      streak = 0;
      $streak.textContent = streak;
      sequenceLength = 1;
      userSequence = [];
      simonSequence = [];
      generateSimonSequence();
      return false;
    };
  };
  streak++;
  $streak.textContent = streak;
  if(record < streak){
    record = streak;
    $record.textContent = record;
  }
  // if (sequenceLength===31){
    sequenceLength++;
  // }else {
  //   alert("You win!");

  // };
  return true;
}

// then find a way to make Simon's play initiate after user hits start button
$start.addEventListener('click', generateSimonSequence);

var handleUserSequence = function(event){
  userSequence.push(event.target.getAttribute('id'));
  console.log('user sequence: ', userSequence);
  if(simonSequence.length === userSequence.length){
    // colorUnClickable();
    if(sequenceMatch()){
      generateSimonSequence();
    } else {
      alert("Wah wah. Wrong move! Let's play again!")
    }
    ;
  };
};


// colorClickable and colorUnClickable should fix bug
// that previous allowed user to click during simonSequence flashing
var colorClickable = function() {
  for (var i = 0; i<$color.length; i++){
  $color[i].addEventListener('click', handleUserSequence);
  };
};

var colorUnClickable = function(){
  for (var i = 0; i<$color.length; i++){
    $color[i].removeEventListener('click', handleUserSequence);
  };
};


$restart.addEventListener('click', function(){
  streak=0;
  simonSequence = [];
  // userSequence = [];
  generateSimonSequence();
})

