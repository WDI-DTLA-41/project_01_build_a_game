console.log('hello');
var button = document.querySelector('button');
// var word1 = ['C', 'O', 'F', 'F', 'E', 'E'];
var word1 = ['W', 'H', 'I', 'T', 'E', 'B', 'O', 'A', 'R', 'D'];
// var word2 = ['I', 'N', 'T', 'E', 'R', 'N', 'E', 'T'];
var word2 = ['C', 'O', 'M', 'P', 'U', 'T', 'E', 'R'];
var word3 = ['T', 'E', 'A'];
var skeleton = [
document.querySelector('.head'),
document.querySelector('.body'),
document.querySelector('.leftarm'),
document.querySelector('.rightarm'),
document.querySelector('.leftleg'),
document.querySelector('.rightleg')
]
var playWord;
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


function getLetter(){
  letter = document.querySelector('input').value;
  letter = letter.toUpperCase();
  document.querySelector('input').value = '';
  gameLogic();
}

function getWord(evt) {
  underscores = [];
  var number = Math.random();
  if (number >= .6){
    playWord = word1;
  } else if (number < .6 && number >= .3){
    playWord = word2;
  } else if (number < .3){
    playWord = word3;
  }
  for (h = 0; h < playWord.length; h++){
    underscores.push('_');
  }
  placeholders = document.querySelector('.placeholders');
  placeholders.textContent = underscores.join(' ');
}

function getLetterEnter(evt){
  if (evt.keyCode === 13){
  getLetter()
  }
}

 function gameLogic(){
  for (i = 0; i < playWord.length; i++){
    if (letter === ''){
    alert('Please enter a letter');
    return;
  } else
    if (letter.length > 1) {
    alert('One at a time, please!');
    return;
  } else if (playWord.includes(letter)){
      console.log('yes');
      isMatch.push('match');
      index = playWord.indexOf(letter);
      underscores[index] = playWord[index];
      placeholders.textContent = underscores.join(' ');
      if (isMatch.length === playWord.length){
        console.log(isMatch.length);
        alert('You win!');
      }
      return;
    } else {
      console.log('no');
      skeleton[j].style.visibility = "visible";
      j= j + 1;
      guessed.push(letter);
      guessedBox.innerHTML = 'Guessed:<br>' + guessed;
      noMatch.push(1);
      if (noMatch.length === 6 || noMatch.length === playWord.length) {
      alert('Sorry, you lose!');
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
  placeholders.textContent = '';
  playWord = null;
  noMatch = [];
  guessed = [];
  isMatch = [];
  j = 0;
}





button.addEventListener('click', getWord);
submit.addEventListener('click', getLetter);
document.querySelector('input').addEventListener('keyup', getLetterEnter);
resetButton.addEventListener('click', reset)
