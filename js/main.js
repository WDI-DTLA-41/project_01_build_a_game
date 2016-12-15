//greeting
var input = document.getElementById('userName');
var button = document.getElementById('button');
var p = document.getElementById('text');
addText = function() {
  var userValue = userName.value;
  h3 = document.createElement('h3');
  textNode = document.createTextNode("Dive in " + userValue);
  p.appendChild(h3);
  h3.appendChild(textNode);
}
button.addEventListener('click', addText);
//greeting


// choose random word

var sharkNames = ['carcharodon carcharias', 'rhincodon typus', 'galeocerdo cuvier',
  'manta birostris', 'stegostoma fasciatum', 'mitsukurina owstoni',
  'cetorhinus maximus', 'alopias vulpinus', 'sphyrna mokarran', 'squatina squatina',
  'etmopterus benchleyi'];



function randomizeWords(words) {
  var randomIndex = Math.floor(Math.random() * sharkNames.length);
  return sharkNames[randomIndex];
};

var sharks = randomizeWords(sharkNames);


// convert word to individual letters
var letters = sharks.split(" ");


// convert split up word to equivalent number of dashes
function dashes(letters) {
  // create a new array
  var dash = [];
  // for length of letters
  letters.forEach(function(){
  // add dash to new array
    dash.push("-");
  });
  // return new array
  return dash;
};

var dashWord = dashes(letters);


// check letter
function checkLetter(letter) {
  if (letters.indexOf(letter) > -1) {
    return true;
  }else {
    return false;
  }
}


// fill in dashes
function replaceDash(letter) {
  for(var i = 0; i < sharks.length; i++) {
    if(letter === sharks[i]){
      dashWord[i] = letter;
    }
  }
  if (dashWord.join("") === sharks){
    winAlert();
  }
}

// render to browser
function render(x) {
  display.textContent = x;
}


// click events

var input   = document.getElementById("input");
var display = document.getElementById("display");
var start   = document.getElementById("start");
var guess   = document.getElementById("guess");

start.addEventListener("click", function(){
  // words;
  sharks = randomizeWords(sharkNames);
  letters = sharks.split('');
  dashWord = dashes(letters);
  render(dashWord.join(''));
  console.log("start game");
  wrongLetters.value;
  wrong.length = 0;
});

guess.addEventListener("click", function(){
  var letter = input.value;
  // input.value;
  if (checkLetter(letter)) {
    console.log("correct!");
    replaceDash(letter);
    render(dashWord.join(''));
  } else {
    console.log("guess again");
    wrongGuess(letter);
    lose();
    console.log(counter);
  }
  input.value = '';
});


// displays wrong guesses
var wrong = [];
var wrongLetters = document.getElementById("wrongLetters");


function wrongGuess(letter) {
  wrong.push(letter);
  var wrongString = wrong.join(", ");
  wrongLetters.value = wrongString;
}

// winner


function winAlert() {
  var alert = document.getElementById("alert");
  alert.textContent = "You Win!";
};

var counter = 0;

function add() {
  return counter +=1;
}

function lose() {
  if (counter === 10) {
    alert("you lost!");
  }
}






