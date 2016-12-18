// console.log('beep boop beep');

// querySelectors for the Buttons
var greenBtn = document.querySelector('#green');
var redBtn = document.querySelector('#red');
var yellowBtn = document.querySelector('#yellow');
var blueBtn = document.querySelector('#blue');
var startBtn = document.querySelector('#start');
var counter = document.querySelector('#counter');
var btnContainer = document.querySelector('#btn-container');
var counterVal = parseInt(counter.textContent);
var sequenceArr = [];
var sequenceLast = null;
var userInput = [];
var hardBtn = document.querySelector('#hardmode');
var audioOne = document.querySelectorAll('audio');
var replayBtn = document.querySelector('#replay');
var btnTar = null;
var praiseTag = document.querySelector('p');

// random number generator (1-4)
var randomGen = function() {
  return Math.ceil(Math.random()*4);
}

// function to start flash color for randomGen number
var startColorFlash = function () {
  sequence = randomGen();
  if (sequence === 1) {
    audioOne[0].play();
    greenBtn.style.backgroundColor = 'black';
    setTimeout(function() {
    greenBtn.style.backgroundColor = 'rgb(193,253,51)';
    },250);
  } else if (sequence === 2) {
    audioOne[4].play();
    redBtn.style.backgroundColor = 'black';
    setTimeout(function() {
    redBtn.style.backgroundColor = 'rgb(252,90,184)';
    },250);
  } else if (sequence === 3) {
    audioOne[2].play();
    yellowBtn.style.backgroundColor = 'black';
    setTimeout(function() {
    yellowBtn.style.backgroundColor = 'rgb(243,243,21)';
    },250);
  } else {
    audioOne[3].play();
    blueBtn.style.backgroundColor = 'black';
    setTimeout(function() {
    blueBtn.style.backgroundColor = 'rgb(13,213,252)';
    },250);
  }
  sequenceArr.push(sequence);
  setTimeout(playerTurn, 500);
  setTimeout(checkInput, 3000);
  };

var startHardGameFlash = function () {
  sequence = randomGen();
  if (sequence === 1) {
    audioOne[5].play();
    greenBtn.style.backgroundColor = 'black';
    setTimeout(function() {
    greenBtn.style.backgroundColor = 'rgb(193,253,51)';
    },100);
  } else if (sequence === 2) {
    audioOne[5].play();
    redBtn.style.backgroundColor = 'black';
    setTimeout(function() {
    redBtn.style.backgroundColor = 'rgb(252,90,184)';
    },100);
  } else if (sequence === 3) {
    audioOne[5].play();
    yellowBtn.style.backgroundColor = 'black';
    setTimeout(function() {
    yellowBtn.style.backgroundColor = 'rgb(243,243,21)';
    },100);
  } else {
    audioOne[5].play();
    blueBtn.style.backgroundColor = 'black';
    setTimeout(function() {
    blueBtn.style.backgroundColor = 'rgb(13,213,252)';
    },100);
  }
  sequenceArr.push(sequence);
  setTimeout(playerTurn, 250);
  setTimeout(hardCheckInput, 2000);
};

// adding another color to the sequenceArr
var addColorFlash = function () {
  addCounter();
  sequence = randomGen();
  if (sequence === 1) {
    audioOne[0].play();
    greenBtn.style.backgroundColor = 'black';
    setTimeout(function() {
    greenBtn.style.backgroundColor = 'rgb(193,253,51)';
    },250);
  } else if (sequence === 2) {
    audioOne[4].play();
    redBtn.style.backgroundColor = 'black';
    setTimeout(function() {
    redBtn.style.backgroundColor = 'rgb(252,90,184)';
    },250);
  } else if (sequence === 3) {
    audioOne[2].play();
    yellowBtn.style.backgroundColor = 'black';
    setTimeout(function() {
    yellowBtn.style.backgroundColor = 'rgb(243,243,21)';
    },250);
  } else {
    audioOne[3].play();
    blueBtn.style.backgroundColor = 'black';
    setTimeout(function() {
    blueBtn.style.backgroundColor = 'rgb(13,213,252)';
    },250);
  }
  sequenceArr.push(sequence);
  setTimeout(playerTurn, 500);
  setTimeout(checkInput, 1375*sequenceArr.length);
  setTimeout(praise, 500);
  };

var hardAddColorFlash = function () {
  addCounter();
  sequence = randomGen();
  if (sequence === 1) {
    audioOne[5].play();
    greenBtn.style.backgroundColor = 'black';
    setTimeout(function() {
    greenBtn.style.backgroundColor = 'rgb(193,253,51)';
    },100);
  } else if (sequence === 2) {
    audioOne[5].play();
    redBtn.style.backgroundColor = 'black';
    setTimeout(function() {
    redBtn.style.backgroundColor = 'rgb(252,90,184)';
    },100);
  } else if (sequence === 3) {
    audioOne[5].play();
    yellowBtn.style.backgroundColor = 'black';
    setTimeout(function() {
    yellowBtn.style.backgroundColor = 'rgb(243,243,21)';
    },100);
  } else {
    audioOne[5].play();
    blueBtn.style.backgroundColor = 'black';
    setTimeout(function() {
    blueBtn.style.backgroundColor = 'rgb(13,213,252)';
    },100);
  }
  sequenceArr.push(sequence);
  setTimeout(playerTurn, 250);
  setTimeout(hardCheckInput, 1000*sequenceArr.length);
  };

// function to flash the color of the sequenceArr
// to be called back in the recursiveLights function
var replayColorFlash = function (color) {
  if (color === 1) {
    audioOne[0].play();
    greenBtn.style.backgroundColor = 'black';
    setTimeout(function() {
    greenBtn.style.backgroundColor = 'rgb(193,253,51)';
    },250);
  } else if (color === 2) {
    audioOne[4].play();
    redBtn.style.backgroundColor = 'black';
    setTimeout(function() {
    redBtn.style.backgroundColor = 'rgb(252,90,184)';
    },250);
  } else if (color === 3) {
    audioOne[2].play();
    yellowBtn.style.backgroundColor = 'black';
    setTimeout(function() {
    yellowBtn.style.backgroundColor = 'rgb(243,243,21)';
    },250);
  } else if (color === 4) {
    audioOne[3].play();
    blueBtn.style.backgroundColor = 'black';
    setTimeout(function() {
    blueBtn.style.backgroundColor = 'rgb(13,213,252)';
    },250);
  }
}

var replayHardColorFlash = function (color) {
  if (color === 1) {
    audioOne[5].play();
    greenBtn.style.backgroundColor = 'black';
    setTimeout(function() {
    greenBtn.style.backgroundColor = 'rgb(193,253,51)';
    },100);
  } else if (color === 2) {
    audioOne[5].play();
    redBtn.style.backgroundColor = 'black';
    setTimeout(function() {
    redBtn.style.backgroundColor = 'rgb(252,90,184)';
    },100);
  } else if (color === 3) {
    audioOne[5].play();
    yellowBtn.style.backgroundColor = 'black';
    setTimeout(function() {
    yellowBtn.style.backgroundColor = 'rgb(243,243,21)';
    },100);
  } else if (color === 4) {
    audioOne[5].play();
    blueBtn.style.backgroundColor = 'black';
    setTimeout(function() {
    blueBtn.style.backgroundColor = 'rgb(13,213,252)';
    },100);
  }
}


// recursiveLights for replaying the sequences
function recursiveLights(arr, i = 0) {
  // console.log(arr[i]) // log element at index i of arr
  if (i === arr.length) { // if index/counter reaches length of array, end loop
  } else {
    replayColorFlash(arr[i]);
    i++;
    setTimeout(function() {
      recursiveLights(arr, i);
    }, 1000)
  }
}

function hardRecursiveLights(arr, i = 0) {
  // console.log(arr[i]) // log element at index i of arr
  if (i === arr.length) { // if index/counter reaches length of array, end loop
  } else {
    replayHardColorFlash(arr[i]);
    i++;
    setTimeout(function() {
      hardRecursiveLights(arr, i);
    }, 500)
  }
}

// adds to the counter for each function loop
var addCounter = function() {
  counterVal += 1;
  counter.textContent = counterVal;
};

// resets the Counter back to 0
var resetCounter = function() {
  counterVal = 0;
  counter.textContent = 0;
};

// clears the sequenceArr and userInput
var clearSequence = function() {
  userInput = [];
  sequenceLast = sequenceArr;
  sequenceArr = [];
};

// gameOver function when userInput is incorrect
var gameOver = function() {
  btnContainer.removeEventListener('click', handleUserInput);
  btnContainer.removeEventListener('click', handleHardUserInput);
  resetCounter();
  clearSequence();
  audioOne[1].play();
  praiseTag.textContent = 'DON\'T YOU WANT A REMATCH?';
  return setTimeout(clearPraiseTag,5000);
};

// function to check if userInput equals sequenceArr
// using underscore.js script
var checkInput = function() {
  if (_.isEqual(userInput,sequenceArr)) {
    userInput = [];
    setTimeout(recursiveLights(sequenceArr),3500);
    setTimeout(addColorFlash,1000*sequenceArr.length);
  } else {
    gameOver();
  }
};

var hardCheckInput = function() {
  if (_.isEqual(userInput,sequenceArr)) {
    userInput = [];
    setTimeout(hardRecursiveLights(sequenceArr),3500);
    setTimeout(hardAddColorFlash,500*sequenceArr.length);
  } else {
    gameOver();
  }
};


// function to give praise for hitting certain levels
/**
* Plays audio files for reaching levels
* @return {Boolean} if counterVal is true or false
*/
var praise = function() {
  if (counterVal === 35) {
    audioOne[8].play();
    praiseTag.textContent = 'THANK YOU! BUT OUR PRINCESS IS IN ANOTHER CASTLE!';
    return setTimeout(clearPraiseTag,4000);
  } else if (counterVal % 11 === 0)  {
    audioOne[7].play();
    praiseTag.textContent = 'YOLO';
    return setTimeout(clearPraiseTag,3500);
  } else if (counterVal % 5 === 0) {
    audioOne[6].play();
    praiseTag.textContent = '!@#$ YEA!';
    return setTimeout(clearPraiseTag,3500);
  }
};

var playerTurn = function() {
  praiseTag.textContent = 'YOUR TURN!';
  return setTimeout(clearPraiseTag,500*sequenceArr.length);
}

var clearPraiseTag = function() {
  return praiseTag.textContent = '';
}

// handle to convert userInput to a number in the sequence
var handleUserInput = function(event) {
  var userInputInt = (event.target.dataset.number);
    if (userInputInt === greenBtn.dataset.number) {
      audioOne[0].play();
      return userInput.push(1);
    } else if (userInputInt === redBtn.dataset.number) {
      audioOne[4].play();
      return userInput.push(2);
    } else if (userInputInt === yellowBtn.dataset.number) {
      audioOne[2].play();
      return userInput.push(3);
    } else {
      audioOne[3].play();
      return userInput.push(4);
    }
}


var handleHardUserInput = function(event) {
  var userInputInt = (event.target.dataset.number);
    if (userInputInt === greenBtn.dataset.number) {
      audioOne[5].play();
      return userInput.push(1);
    } else if (userInputInt === redBtn.dataset.number) {
      audioOne[5].play();
      return userInput.push(2);
    } else if (userInputInt === yellowBtn.dataset.number) {
      audioOne[5].play();
      return userInput.push(3);
    } else {
      audioOne[5].play();
      return userInput.push(4);
    }
}

// function to handle the game on click start button
var handleStartGame = function() {
  addCounter();
  btnContainer.addEventListener('click', handleUserInput);
  setTimeout(startColorFlash,2500);
};
// function to handle the hard mode on click of hard button
var handleHardMode = function() {
  audioOne[9].play();
  addCounter();
  btnContainer.addEventListener('click', handleHardUserInput);
  return setTimeout(startHardGameFlash,2500);
};

var handleReplay = function() {
  praiseTag.textContent = 'I THINK MAYBE IT WENT LIKE THIS...';
  setTimeout(clearPraiseTag,4000);
  return recursiveLights(sequenceLast);
};

var handleCursor = function (event) {
  event.target.style.cursor = 'pointer';
};

var handleRemoveCursor = function (event) {
  event.target.style.cursor = '';
};

var handleRemoveColor = function(event) {
  btnTar = event.target;
  btnTar.style.background = 'transparent';
  setTimeout(handleReturnColor,250);
};

var handleReturnColor = function() {
  btnTar.style.background = '';
};

// add EventListener for startBtn to start game
startBtn.addEventListener('click',handleStartGame);

// add EventListener for Hard Mode button
hardBtn.addEventListener('click', handleHardMode);

// add EventListener for Replay button
replayBtn.addEventListener('click', handleReplay);

//add EventListeners for mouseover effects
greenBtn.addEventListener('mouseover', handleCursor);
greenBtn.addEventListener('mouseout', handleRemoveCursor);
greenBtn.addEventListener('click', handleRemoveColor);
redBtn.addEventListener('mouseover', handleCursor);
redBtn.addEventListener('mouseout', handleRemoveCursor);
redBtn.addEventListener('click', handleRemoveColor)
yellowBtn.addEventListener('mouseover', handleCursor);
yellowBtn.addEventListener('mouseout', handleRemoveCursor);
yellowBtn.addEventListener('click', handleRemoveColor)
blueBtn.addEventListener('mouseover', handleCursor);
blueBtn.addEventListener('mouseout', handleRemoveCursor);
blueBtn.addEventListener('click', handleRemoveColor)
replayBtn.addEventListener('mouseover', handleCursor);
replayBtn.addEventListener('mouseout', handleRemoveCursor);
startBtn.addEventListener('mouseover', handleCursor);
startBtn.addEventListener('mouseout', handleRemoveCursor);
hardBtn.addEventListener('mouseover', handleCursor);
hardBtn.addEventListener('mouseout', handleRemoveCursor);


// Hi ^_-



