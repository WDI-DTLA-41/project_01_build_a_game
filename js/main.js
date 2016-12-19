

console.log('hello');
var playWord;
var button = document.querySelector('button');
var letter;
var submit = document.querySelector('.submit');
var j = 0;
var underscores = [];
var placeholders;
var guessed = [];
var guessedBox = document.querySelector('.guessed');
var resetButton = document.querySelector('.reset');
var noMatch = [];
var isMatch = [];
var array = [];
var number;
var win = document.querySelector('.win');
var lose = document.querySelector('.lose');
var words = [
'BONES',
'CREEPY',
'GHOST',
'GOBLIN',
'GRAVEYARD',
'HOWL',
'MONSTER',
'MUMMY',
'SCARE',
'SKULL',
'SPIDER',
'VAMPIRE',
'WITCH',
'ZOMBIE'
];
//parts of the skeleton
var skeleton = [
document.querySelector('.head'),
document.querySelector('.body'),
document.querySelector('.leftarm'),
document.querySelector('.rightarm'),
document.querySelector('.leftleg'),
document.querySelector('.rightleg')
];

var randomNumber = function() {
  number = Math.floor(Math.random()*10);
};

var scream = new Audio("assets/scream.wav");
var laugh = new Audio("assets/laugh.wav");
var thunder = new Audio("assets/thunder.wav");

//this chooses a random word
function getWord(){
  randomNumber();
for (x = 0; x < words.length; x++){
  array[x] = words[x].split('');
  if (number === x){
    playWord = words[x];
  }
 }
  for (h = 0; h < playWord.length; h++){
    underscores.push('_');
  }
  placeholders = document.querySelector('.placeholders');
  placeholders.textContent = underscores.join(' ');
button.removeEventListener('click', getWord);
submit.addEventListener('click', getLetter);
document.querySelector(".start").disabled = true;
document.querySelector("input").disabled = false;
document.querySelector(".wordGuess").disabled = false;
document.querySelector(".word").disabled = false;
document.querySelector(".submit").disabled = false;

}

/**
  * User inputs a letter guess into input field
  * This function gets that letter and assigns it to variable letter
  * then converts it to uppercase
  */
function getLetter(){
  letter = document.querySelector('input').value;
  letter = letter.toUpperCase();
  document.querySelector('input').value = '';
  if (!letter.match(/[a-z]/i)){
    alert('Alphabet characters only!');
    return false;
  }
  if (letter === ''){
    alert('Please enter a letter');
    return false;
  }
  if (letter.length > 1) {
    alert('One at a time, please!');
    return false;
  }
  if (guessed.includes(letter) || underscores.includes(letter)){
    alert('You already guessed that letter!');
    return false;
  }
  gameLogic();
}

//this is so that user can use enter key as well
function getLetterEnter(evt){
  if (evt.keyCode === 13){
  getLetter();
  }
}

function guessWordEnter(evt) {
  if (evt.keyCode === 13){
  guessWord();
  }
}

//this runs the game
function gameLogic() {
  if ( playWord.includes(letter)) {
    for (var i = 0; i < playWord.length; i++){
      if (letter === playWord[i]) {
        console.log('yes');
        isMatch.push('match');
        underscores[i] = letter;
        placeholders.textContent = underscores.join(' ');
      }
    }
  } else {
    console.log('no');
    if (!guessed.includes(letter)) {
      guessed.push(letter);
      skeleton[j].style.visibility = "visible";
      j = j + 1;
      guessedBox.innerHTML = 'Guessed:<br>' + guessed;
      noMatch.push(1);
      if (noMatch.length === 6) {
        lose.style.visibility = "visible";
        scream.play();
        underscores = playWord;
        placeholders.textContent = underscores;
        document.querySelector("input").disabled = true;
        document.querySelector(".submit").disabled = true;
        submit.removeEventListener('click', getLetter);
        document.querySelector(".wordGuess").disabled = true;
        document.querySelector(".word").disabled = true;
      }
    }
  }
  if (isMatch.length === playWord.length){
    console.log(isMatch.length, 'won!');
    laugh.play();
    win.style.visibility = "visible";
    document.querySelector(".submit").disabled = true;
    document.querySelector("input").disabled = true;
    submit.removeEventListener('click', getLetter);
    document.querySelector(".wordGuess").disabled = true;
  document.querySelector(".word").disabled = true;
  }
}

function guessWord() {
  var guess = document.querySelector('.word').value;
  guess = guess.toUpperCase();
  if (guess === '') {
    alert('Please enter a word');
  } else if (guess !== playWord) {
    alert('Try again!');
    document.querySelector('.word').value = '';
  } else if (guess === playWord) {
    placeholders.textContent = playWord;
    laugh.play();
    win.style.visibility = "visible";
    document.querySelector(".submit").disabled = true;
    document.querySelector("input").disabled = true;
    document.querySelector(".wordGuess").disabled = true;
    document.querySelector(".word").disabled = true;
    submit.removeEventListener('click', getLetter);
    document.querySelector('.word').value = '';
  }
}

function reset(evt) {
  for (k = 0; k < skeleton.length; k++){
    skeleton[k].style.visibility = "hidden";
  }
  guessedBox.innerHTML = 'Guessed:';
  underscores = [];
  placeholders.textContent = '';
  playWord = null;
  noMatch = [];
  guessed = [];
  isMatch = [];
  lose.style.visibility = "hidden";
  win.style.visibility = "hidden";
  j = 0;
  button.addEventListener('click', getWord);
  submit.removeEventListener('click', getLetter);
  document.querySelector(".start").disabled = false;
  document.querySelector(".submit").disabled = true;
  document.querySelector("input").disabled = true;
  document.querySelector(".wordGuess").disabled = true;
  document.querySelector(".word").disabled = true;
}

document.querySelector("input").disabled = true;
document.querySelector(".wordGuess").disabled = true;
document.querySelector(".submit").disabled = true;
button.addEventListener('click', getWord);
document.querySelector('.wordGuess').addEventListener('click', guessWord);
document.querySelector('.wordGuess').addEventListener('click', guessWord);
document.querySelector('.word').addEventListener('keyup', guessWordEnter);
document.querySelector('input').addEventListener('keyup', getLetterEnter);
resetButton.addEventListener('click', reset);
thunder.play();
