console.log('hello');
var playWord;
var button = document.querySelector('button');

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
]
var number;



var array = []

var randomNumber = function() {
  number = Math.floor(Math.random()*10)
}

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
}



//parts of the skeleton
var skeleton = [
document.querySelector('.head'),
document.querySelector('.body'),
document.querySelector('.leftarm'),
document.querySelector('.rightarm'),
document.querySelector('.leftleg'),
document.querySelector('.rightleg')
]

var letter;
var submit = document.querySelector('.submit');
var j = 0;
var underscores = [];
var placeholders;
var guessed = [];
var guessedBox = document.querySelector('.guessed')
var resetButton = document.querySelector('.reset');
var noMatch = [];
var isMatch = [];

//this grabs the input value
function getLetter(){
  letter = document.querySelector('input').value;
  letter = letter.toUpperCase();
  document.querySelector('input').value = '';
  gameLogic();
}

// //this selects a random word
// function getWord(evt) {
//   underscores = [];
//   var number = Math.random();
//   if (number >= .6){
//     playWord = word1;
//   } else if (number < .6 && number >= .3){
//     playWord = word2;
//   } else if (number < .3){
//     playWord = word3;
//   }
//   //this displays the correct number of underscores

// }

//this is so that user can use enter key as well
function getLetterEnter(evt){
  if (evt.keyCode === 13){
  getLetter()
  }
}


 function gameLogic(){
  for (i = 0; i < playWord.length; i++){
    if (!letter.match(/[a-z]/i)){
      alert('Alphabet characters only!');
      return;
    } else
    if (letter === ''){
    alert('Please enter a letter');
    return;
  } else
    if (letter.length > 1) {
    alert('One at a time, please!');
    return;
  }

    else if (playWord.includes(letter)){
      console.log('yes');
      isMatch.push('match');
      index = playWord.indexOf(letter);
      if (playWord[index] === playWord[index+1]){
        underscores[index] = playWord[index];
        underscores[index+1] = playWord[index];
        placeholders.textContent = underscores.join(' ');
        isMatch.push('match');
      } else if (playWord.includes(letter) && playWord[i]!==playWord[i+1]){
      underscores[index] = playWord[index];
      placeholders.textContent = underscores.join(' ');
      if (isMatch.length === playWord.length){
        console.log(isMatch.length);
        setTimeout(function(){alert('You win!')}, 200);
      }}
      return;
    } else {
      console.log('no');
      if (!guessed.includes(letter)){
      guessed.push(letter);
      guessedBox.innerHTML = 'Guessed:<br>' + guessed;
      skeleton[j].style.visibility = "visible";
      j= j + 1;
    }

    else if (guessed.includes(letter)){
      alert('You already guessed that letter!');
    }

    else {
      skeleton[j].style.visibility = "visible";
      guessedBox.innerHTML = 'Guessed:<br>' + guessed;
      noMatch.push(1);
      if (noMatch.length === 6 || noMatch.length === playWord.length) {
      setTimeout(function(){alert('Sorry, you lose!')}, 200);
      j= j + 1;
      }

      }
      return;
  }
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
  j = 0;
  button.addEventListener('click', getWord);
}





button.addEventListener('click', getWord);
submit.addEventListener('click', getLetter);
document.querySelector('input').addEventListener('keyup', getLetterEnter);
resetButton.addEventListener('click', reset)

