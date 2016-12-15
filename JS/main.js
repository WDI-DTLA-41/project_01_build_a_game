console.log('beep boop beep');

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
var userInput = [];

// random number generator bet
var randomGen = function() {
  return Math.ceil(Math.random()*4);
}

// test function for all color changes
var fourColorFlash = function () {
  sequence = randomGen();
  if (sequence === 1) {
    greenBtn.style.backgroundColor = 'black';
    setTimeout(function() {
    greenBtn.style.backgroundColor = 'green';
    },250);
  } else if (sequence === 2) {
    redBtn.style.backgroundColor = 'black';
    setTimeout(function() {
    redBtn.style.backgroundColor = 'red';
    },250);
  } else if (sequence === 3) {
    yellowBtn.style.backgroundColor = 'black';
    setTimeout(function() {
    yellowBtn.style.backgroundColor = 'yellow';
    },250);
  } else {
    blueBtn.style.backgroundColor = 'black';
    setTimeout(function() {
    blueBtn.style.backgroundColor = 'blue';
    },250);
  }
  sequenceArr.push(sequence);
  setTimeout(checkInput, 2000);
  };


// adding another color to the generator
var addColorFlash = function () {
  addCounter();
  praise();
  sequence = randomGen();
  if (sequence === 1) {
    greenBtn.style.backgroundColor = 'black';
    setTimeout(function() {
    greenBtn.style.backgroundColor = 'green';
    },250);
  } else if (sequence === 2) {
    redBtn.style.backgroundColor = 'black';
    setTimeout(function() {
    redBtn.style.backgroundColor = 'red';
    },250);
  } else if (sequence === 3) {
    yellowBtn.style.backgroundColor = 'black';
    setTimeout(function() {
    yellowBtn.style.backgroundColor = 'yellow';
    },250);
  } else {
    blueBtn.style.backgroundColor = 'black';
    setTimeout(function() {
    blueBtn.style.backgroundColor = 'blue';
    },250);
  }
  sequenceArr.push(sequence);
  setTimeout(checkInput, 1000*sequenceArr.length);
  };


//////////////////////////////////////
// testing to add to recursion function

var colorFlash = function (color) {
    if (color === 1) {
      greenBtn.style.backgroundColor = 'black';
      setTimeout(function() {
      greenBtn.style.backgroundColor = 'green';
      },250);
      console.log('1');
    } else if (color === 2) {
      redBtn.style.backgroundColor = 'black';
      setTimeout(function() {
      redBtn.style.backgroundColor = 'red';
      },250);
      console.log('2');
    } else if (color === 3) {
      yellowBtn.style.backgroundColor = 'black';
      setTimeout(function() {
      yellowBtn.style.backgroundColor = 'yellow';
      },250);
      console.log('3');
    } else if (color === 4) {
      blueBtn.style.backgroundColor = 'black';
      setTimeout(function() {
      blueBtn.style.backgroundColor = 'blue';
      },250);
      console.log('4');
    }
}

// recursiveLights for replaying the sequences
function recursiveLights(arr, i = 0) {
  console.log(arr[i]) // log element at index i of arr
  if (i === arr.length) { // if index/counter reaches length of array, end loop
    console.log('looped thru array');
  } else {
    // make it light up
    colorFlash(arr[i]);
    i++;
    setTimeout(function() {
      recursiveLights(arr, i);
    }, 1000)
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
  sequenceArr = [];
};


// gameOver function when userInput is incorrect
var gameOver = function() {
  // playing gameOver audio file
  resetCounter();
  clearSequence();
  return console.log('Nice try! YOU LOSE SUCKA!');
};


// handle start game
var handleStartGame = function() {
  addCounter();
  setTimeout(fourColorFlash,1000);
};


// handle to convert userInput to a number in the sequence
var handleUserInput = function(event) {
  var userInputInt = (event.target.dataset.number);
    if (userInputInt === greenBtn.dataset.number) {
      return userInput.push(1);
    } else if (userInputInt === redBtn.dataset.number) {
      return userInput.push(2);
    } else if (userInputInt === yellowBtn.dataset.number) {
      return userInput.push(3);
    } else {
      return userInput.push(4);
    }
}

// function to check if userInput equals sequence
var checkInput = function() {
  if (_.isEqual(userInput,sequenceArr)) {
        console.log('true');
        userInput = [];
        setTimeout(recursiveLights(sequenceArr),1000);
        setTimeout(addColorFlash,1000*sequenceArr.length);
      } else {
        gameOver();
        // return console.log("You lose!");
      }
};

// function to console.log('Great job')
var praise = function() {
  if ((counterVal % 11 === 0) && (counterVal % 5 === 0)) {
    return console.log('Fuck Yea');
  } else if (counterVal % 5 === 0) {
    return console.log('Great Job');
  } else if (counterVal % 3 === 0) {
    return console.log('SCOOOOPPS!!!');
  }
};



// add EventListener for startBtn to start game
startBtn.addEventListener('click',handleStartGame);

// add EventListener for userInputs
btnContainer.addEventListener('click', handleUserInput);






















